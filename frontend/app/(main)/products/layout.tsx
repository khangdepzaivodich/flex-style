import { ProductDetailProvider } from "@/contexts/productdetail-context";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductDetailProvider>
      <>{children}</>
    </ProductDetailProvider>
  );
}