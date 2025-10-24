import { getAccessToken, getGioHang, getUserId } from "@/lib/userInfo";
import MainPage from "./MainPage";
import type { SuKienUuDai } from "@/lib/types";

async function fetchSukienuudais() {
  const res = await fetch(`http://localhost:8080/api/sukienuudai`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch sự kiện ưu đãi");
  }
  return res.json();
}
function compareDate(a: string | Date, b: string | Date): number {
  const da = typeof a === "string" ? new Date(a) : a;
  const db = typeof b === "string" ? new Date(b) : b;
  if (da < db) return -1;
  if (da > db) return 1;
  return 0;
}
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
  const suKienUuDais = await fetchSukienuudais();
  const accessToken = await getAccessToken();
  const userId = await getUserId();
  // if (!accessToken) {
  //   return (
  //     <div className="text-center mt-10 text-lg font-semibold mb-5 text-gray-600">
  //       Vui lòng đăng nhập để xem giỏ hàng của bạn.
  //     </div>
  //   );
  // }
  const gioHang = await getGioHang(String(userId), String(accessToken));
  console.log("gioHang", gioHang); 
  return (
    <div>
      <MainPage
        key={products}
        sukienuudai={
          suKienUuDais.data.find(
            (s: SuKienUuDai) =>
              compareDate(s.NgayPH, new Date()) < 0 &&
              compareDate(s.NgayKT, new Date()) > 0
          ) ?? null
        }
        initialProducts={products.data}
        initialCartItems={gioHang.data}
      />
    </div>
  );
}
