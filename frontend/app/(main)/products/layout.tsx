import React from "react";
import { CartProvider } from "@/contexts/cart-context";

function layout({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

export default layout;
