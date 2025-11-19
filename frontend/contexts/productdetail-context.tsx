"use client";

import { createContext, useContext, useState } from "react";
import type { Product } from "@/lib/types";
// Define the type for the context value
interface ProductDetailContextType {
  value: Product; // Placeholder type, replace `any` with your desired type
  setValue: (newValue: Product) => void; // Function to update the value
}

// Create the context
const ProductDetailContext = createContext<
  ProductDetailContextType | undefined
>(undefined);

export function ProductDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState<any>(null); // Replace `any` with your desired type

  return (
    <ProductDetailContext.Provider value={{ value, setValue }}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export function useProductDetail() {
  const context = useContext(ProductDetailContext);
  if (context === undefined) {
    throw new Error(
      "useProductDetail must be used within a ProductDetailProvider"
    );
  }
  return context;
}
