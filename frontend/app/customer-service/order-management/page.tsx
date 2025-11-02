import { OrderResponse, ThongBao, Voucher } from "@/lib/types";
import OrderManagementPage from "@/app/customer-service/order-management/OrderMangement";
import { getUserId, getAccessToken } from "@/lib/userInfo";

async function getOrders(access_token: string) {
  const res = await fetch(
    "http://localhost:8080/api/donhang/allOrders?page=1&limit=10",
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return await res.json();
}

export default async function Page() {
  const userId = await getUserId();
  let order: OrderResponse[] = [];
  if (userId) {
    const accessToken = await getAccessToken();
    const { data } = await getOrders(String(accessToken));
    console.log("response", data);
    order = data;
  }
  return (
    <div>
      <OrderManagementPage order={order ?? []} />
    </div>
  );
}
