import { getAccessToken, getGioHang, getUserId } from "@/lib/userInfo";
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

export default async function MainCarousel() {
  const products = await getProducts();
  const accessToken = await getAccessToken();
  const userId = await getUserId();

  const gioHang = await getGioHang(String(userId), String(accessToken));
  console.log("gioHang", gioHang);
  return (
    <div>
      <MainPage
        key={products}
        initialProducts={products.data}
        initialCartItems={gioHang.data ?? []}
      />
    </div>
  );
}
