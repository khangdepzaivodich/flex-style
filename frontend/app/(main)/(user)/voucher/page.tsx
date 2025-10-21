import VoucherPage from "./VoucherPage";
import { getUserId } from "@/lib/userInfo";

async function getVouchers(MaAuth: string) {
  const res = await fetch(
    `http://localhost:8080/api/voucher-khachhang?MaAuth=${MaAuth}`,
    {
      cache: "no-store",
    }
  );
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
