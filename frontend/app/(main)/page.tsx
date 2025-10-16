import MainPage from "./MainPage";

async function getProducts() {
  const res = await fetch(
    "http://localhost:8080/api/sanpham?skip=0&take=10&includeSizes=true",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
// async function getDetail() {
//   const res = await fetch(
//     "http://localhost:8080/api/chitietsanpham?skip=0&take=10"
//   );
//   if (!res.ok) throw new Error("Failed to fetch categories");
//   return res.json();
// }

export default async function MainCarousel() {
  const products = await getProducts();
  return (
    <div>
      <MainPage key={products} initialProducts={products.data} />
    </div>
  );
}
