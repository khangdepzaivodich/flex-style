import { Voucher } from "@/lib/types";
import VoucherPage from "./VoucherPage";
import { getUserId, getAccessToken } from "@/lib/userInfo";

async function fetchVouchers(accessToken: string) {
  const res = await fetch("http://localhost:8080/api/voucher/all", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("fetchVouchers - status:", res.status);
  return await res.json();
}

export default async function Page() {
  const userId = await getUserId();
  let vouchers: Voucher[] = [];
  if (userId) {
    const accessToken = await getAccessToken();
    const response = await fetchVouchers(String(accessToken));
    vouchers = response.data ?? [];
    console.log("vouchers", vouchers);
  }
  return (
    <div>
      <VoucherPage vouchers={vouchers ?? []} />
    </div>
  );
}
