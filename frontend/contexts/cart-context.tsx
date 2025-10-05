"use client";

import type React from "react";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
import type { CartItem } from "@/lib/types";
import { cartApi } from "@/lib/cartApi";
import { useAuth } from "@/contexts/auth-context";

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "id"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, "id">) => void; // backend synced (fire & forget)
  removeItem: (id: string) => void; // backend synced
  updateQuantity: (id: string, quantity: number) => void; // backend synced
  clearCart: () => void; // local only
  syncing: boolean; // indicates active network sync
  lastSyncError?: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      let newItems: CartItem[];

      if (existingItemIndex > -1) {
        // Update existing item quantity
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        // Add new item
        const newItem: CartItem = {
          ...action.payload,
          id: `${action.payload.productId}-${action.payload.size}-${
            action.payload.color
          }-${Date.now()}`,
        };
        newItems = [...state.items, newItem];
      }

      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      );

      // Remove items with 0 quantity
      const filteredItems = newItems.filter((item) => item.quantity > 0);
      const total = filteredItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = filteredItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return { items: filteredItems, total, itemCount };
    }

    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0 };

    case "LOAD_CART": {
      const total = action.payload.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = action.payload.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return { items: action.payload, total, itemCount };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });
  const [syncing, setSyncing] = useState(false);
  const [lastSyncError, setLastSyncError] = useState<string | null>(null);

  // Map backend CHITIETGIOHANG -> CartItem[]
  function mapBackendCart(raw: any): CartItem[] {
    if (!raw || !Array.isArray(raw.CHITIETGIOHANG)) return [];
    return raw.CHITIETGIOHANG.map((ct: any) => {
      const detail = ct.CHITIETSANPHAM || {};
      const sp = detail.SANPHAM || {};
      return {
        id: ct.MaCTGH, // use backend cart detail id for stable identity
        productId: detail.MaCTSP || ct.MaCTSP, // treat product detail id as productId for now
        name: sp.TenSP || "Sản phẩm",
        price: sp.GiaBan || 0,
        image: detail.HinhAnh || "/placeholder.svg",
        size: detail.KichCo || "",
        color: detail.MauSac || "",
        quantity: ct.SoLuong || 0,
      } as CartItem;
    });
  }

  // Phase 1: Load cart from localStorage (fallback / offline) immediately
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: cartItems });
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    }
  }, []);

  // Phase 2: If user logged in, fetch backend cart and override local
  useEffect(() => {
    if (!user) return; // keep local cart for guests
    let cancelled = false;
    (async () => {
      setSyncing(true);
      setLastSyncError(null);
      try {
        const raw = await cartApi.getCart(user.id);
        if (!cancelled) {
          const mapped = mapBackendCart(raw);
          dispatch({ type: "LOAD_CART", payload: mapped });
          // persist mapped to localStorage for offline cache
          localStorage.setItem("cart", JSON.stringify(mapped));
        }
      } catch (e: any) {
        if (!cancelled) {
          setLastSyncError(e.message || "Không thể đồng bộ giỏ hàng");
        }
      } finally {
        if (!cancelled) setSyncing(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  // Persist to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: Omit<CartItem, "id">) => {
    // Optimistic local update first
    dispatch({ type: "ADD_ITEM", payload: item });
    if (!user) return; // guest mode stays local only
    (async () => {
      try {
        setSyncing(true);
        setLastSyncError(null);
        await cartApi.addItem({
          MaTKKH: user.id,
          MaCTSP: item.productId, // assumption: productId == MaCTSP
          SoLuong: item.quantity,
        });
        // Re-fetch to ensure server canonical state (merging logic server-side)
        const raw = await cartApi.getCart(user.id);
        const mapped = mapBackendCart(raw);
        dispatch({ type: "LOAD_CART", payload: mapped });
      } catch (e: any) {
        setLastSyncError(e.message || "Lỗi thêm sản phẩm vào giỏ hàng");
      } finally {
        setSyncing(false);
      }
    })();
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    if (!user) return;
    (async () => {
      try {
        setSyncing(true);
        setLastSyncError(null);
        await cartApi.removeItem(id); // id is MaCTGH in backend mapping
      } catch (e: any) {
        setLastSyncError(e.message || "Lỗi xóa sản phẩm");
      } finally {
        setSyncing(false);
      }
    })();
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    if (!user) return;
    (async () => {
      try {
        setSyncing(true);
        setLastSyncError(null);
        await cartApi.updateQuantity(id, quantity);
      } catch (e: any) {
        setLastSyncError(e.message || "Lỗi cập nhật số lượng");
        // Optionally re-fetch to rollback to server state
        try {
          const raw = await cartApi.getCart(user.id);
          const mapped = mapBackendCart(raw);
          dispatch({ type: "LOAD_CART", payload: mapped });
        } catch {}
      } finally {
        setSyncing(false);
      }
    })();
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    // Not calling backend clear endpoint (chưa có). Items will stay until individually removed or future endpoint added.
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        syncing,
        lastSyncError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
