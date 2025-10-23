import CartPage from "./CartPage";
import { getAccessToken } from "@/lib/userInfo";
import { getUserId } from "@/lib/userInfo";
import {createClient} from "@/lib/supabase/server";
import { useAuth } from "@/contexts/auth-context";
import { Car } from "lucide-react";
import { CartProvider } from "@/contexts/cart-context";

async function getGioHang(MaAuth: string, accessToken: string) {
  const res = await fetch(
    `http://localhost:8080/api/giohang?MaTKKH${MaAuth}`,
    {
      // cache: "no-store",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    }
  );
  // console.log("data session", res);
  // if (!res.ok) throw new Error("Failed to fetch gio hang data");
  return res.json();
}

export default async function MainCarousel() {
  const accessToken = await getAccessToken();
  const userId = await getUserId();
  if (!accessToken) {
    return (
      <div className="text-center mt-10 text-lg font-semibold mb-5 text-gray-600">
        Vui lòng đăng nhập để xem giỏ hàng của bạn.
      </div>
    );
  }

  const gioHang = await getGioHang(String(userId), String(accessToken));
  console.log("gioHang", gioHang);
  return (
      <CartPage key={JSON.stringify(gioHang)} initialProducts={gioHang.data} />
  );
}
