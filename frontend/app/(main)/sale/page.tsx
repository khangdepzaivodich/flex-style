import SalePage from "./Salepage";

async function getProducts() {
  const res = await fetch(
    "http://localhost:8080/api/sanpham?skip=0&take=50&includeSizes=true",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsCarousel() {
  const products = await getProducts();

  return (
    <div>
      <SalePage key={products} initialProducts={products.data} />
    </div>
  );
}
