import ProductsPage from "./ProductsPage";

export default async function ProductsPageWrapper({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const take = 12;
  const skip = (page - 1) * take;

  // Call API ở server-side
  const res = await fetch(
    `http://localhost:8080/api/sanpham?skip=${skip}&take=${take}`,
    { cache: "no-store" }
  );
  const products = await res.json();
  const resCat = await fetch("http://localhost:8080/api/danhmuc", {
    cache: "no-store",
  });
  const categories = await resCat.json();
  return (
    <ProductsPage
      products={products.data}
      categories={categories.data}
      page={page}
    />
  );
}
