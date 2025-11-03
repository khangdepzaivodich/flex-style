import ProductsPage from "./ProductPage";
import Product from "@/interfaces/product";
import { createClient } from "@/lib/supabase/server";
export default async function StaffPage() {
  const supabase = createClient();

  const {
    data: { session },
  } = await (await supabase).auth.getSession();
  const res = await fetch(
    "http://localhost:8080/api/sanpham?includeSizes=true"
  );
  const json = await res.json();
  const productData: Product[] = json.data;
  console.log("Product data:", productData);
  return <ProductsPage productData={productData} sessionData={session} />;
}
