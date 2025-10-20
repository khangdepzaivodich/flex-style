import VoucherPage from "./VoucherPage";
import { getUserId } from "@/lib/userInfo";

async function getVouchers(MaKH: string) {
  const res = await fetch(
    `http://localhost:8080/api/voucher-khachhang?MaKH=${MaKH}`,
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
    return <div>Unauthorized</div>;
  }

  const vouchers = await getVouchers(String(userId));
  console.log("vouchers", vouchers);
  return (
    <div>
      {/* <VoucherPage key={vouchers} initialProducts={vouchers.data} /> */}
    </div>
  );
}
