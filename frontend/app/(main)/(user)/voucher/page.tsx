import VoucherPage from "./VoucherPage";
import { getUserId } from "@/lib/userInfo";
import {createClient} from "@/lib/supabase/server";


async function getVouchers(MaAuth: string) {
  const supabase= await createClient();
  const { data } = await supabase.auth.getSession();
  const res = await fetch(
    `http://localhost:8080/api/voucher-khachhang?MaAuth=${MaAuth}`,

    {
      cache: "no-store",

    }
  );
  // console.log("data session", res);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function MainCarousel() {
  const userId = await getUserId();
  if (!userId) {
    return (
      <div className="text-center mt-10 text-lg font-semibold mb-5 text-gray-600">
        Vui lòng đăng nhập để xem voucher của bạn.
      </div>
    );
  }

  const vouchers = await getVouchers(String(userId));
  console.log("vouchers", vouchers);
  return (
    <div>
      <VoucherPage key={vouchers} initialProducts={vouchers.data} />
    </div>
  );
}
