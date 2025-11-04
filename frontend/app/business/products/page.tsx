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
  let productData: Product[] = json.data;

  const SIZE_ORDER = ["S", "M", "L", "XL", "XXL"];

  productData = productData.map((product) => {
    if (product.CHITIETSANPHAM && Array.isArray(product.CHITIETSANPHAM)) {
      product.CHITIETSANPHAM = [...product.CHITIETSANPHAM].sort((a, b) => {
        const ia = SIZE_ORDER.indexOf(a.KichCo);
        const ib = SIZE_ORDER.indexOf(b.KichCo);
        if (ia === -1 && ib === -1) return a.KichCo.localeCompare(b.KichCo);
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
      });
    }
    return product;
  });

  console.log("Product data (sorted):", productData);

  return <ProductsPage productData={productData} sessionData={session} />;
}
