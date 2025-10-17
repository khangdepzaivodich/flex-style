import ProductsPage from "./PhuKienPage";

async function getProducts() {
  const res = await fetch(
    "http://localhost:8080/api/sanpham?skip=0&take=150&includeSizes=true&loaiDM=PHU_KIEN",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
async function getCategories() {
  const res = await fetch("http://localhost:8080/api/danhmuc");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export default async function PhuKienCarousel() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <div>
      <ProductsPage
        key={products}
        initialProducts={products.data}
        categories={categories.data}
      />
    </div>
  );
}
