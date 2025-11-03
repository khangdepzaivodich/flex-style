"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import ProductDetail from "@/interfaces/productDetail";
interface ProductViewPopupProps {
  open: boolean;
  onClose: () => void;
  productDetail?: ProductDetail[] | null;
  focusSizes?: string[] | null;
}

const SIZE_ORDER = ["S", "M", "L", "XL", "XXL"];

export default function ProductViewPopup({
  open,
  onClose,
  productDetail?,
  focusSizes,
}: ProductViewPopupProps) {
  const [rows, setRows] = useState<[]>([]);

  useEffect(() => {
    if (!open) {
      setRows([]);
      return;
    }

    // Initialize rows based on focusSizes if provided, otherwise product sizes
    const rawSizes: string[] = [];
    if (!product) {
      setRows([]);
      return;
    }
    if (focusSizes && Array.isArray(focusSizes) && focusSizes.length > 0) {
      rawSizes.push(...focusSizes);
    } else {
      const s = product.size;
      if (Array.isArray(s)) rawSizes.push(...s);
      else if (typeof s === "string" && s.trim()) rawSizes.push(s);
    }

    // Normalize and sort sizes according to SIZE_ORDER; unknown sizes append at end
    const normalized = Array.from(new Set(rawSizes)).sort((a, b) => {
      const ia = SIZE_ORDER.indexOf(a as string);
      const ib = SIZE_ORDER.indexOf(b as string);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

    const initialRows: VariantRow[] = normalized.map((sz) => ({
      id:
        typeof crypto !== "undefined" && (crypto as any).randomUUID
          ? (crypto as any).randomUUID()
          : `v-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      size: sz,
      quantity: 0,
      detailStatus: "Hết hàng",
    }));

    // If product contains variants/stock info, seed quantity/status
    if (product.variants && Array.isArray(product.variants)) {
      for (const r of initialRows) {
        const found = product.variants.find(
          (v: any) => String(v.size) === String(r.size)
        );
        if (found) {
          r.quantity = typeof found.quantity === "number" ? found.quantity : 0;
          r.detailStatus =
            found.detailStatus ??
            found.status ??
            (r.quantity > 0 ? "Còn hàng" : "Hết hàng");
        }
      }
    }

    setRows(initialRows);
  }, [open, product]);

  function setQuantity(index: number, val: number) {
    setRows((prev) => {
      const copy = prev.map((r) => ({ ...r }));
      copy[index].quantity = val;
      if (copy[index].detailStatus !== "Tạm ngưng") {
        copy[index].detailStatus = val > 0 ? "Còn hàng" : "Hết hàng";
      }
      return copy;
    });
  }

  function setStatus(index: number, val: string) {
    setRows((prev) =>
      prev.map((r, i) => (i === index ? { ...r, detailStatus: val } : r))
    );
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) onClose();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chi tiết tồn kho theo kích cỡ</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <table className="min-w-full text-sm table-fixed border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2 w-28">Số lượng</th>
                <th className="px-3 py-2 w-32">Kích cỡ</th>
                <th className="px-3 py-2">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} className="border-t">
                  <td className="px-3 py-2 align-middle">{i + 1}</td>
                  <td className="px-3 py-2">{r.quantity}</td>
                  <td className="px-3 py-2 w-32 font-medium">{r.size}</td>
                  <td className="px-3 py-2">{r.detailStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DialogFooter className="mt-4 flex items-center gap-3">
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4" /> Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
