import { SuKienUuDai } from "@/lib/types";
import PromotionPage from "./PromotionPage";
import { getUserId, getAccessToken } from "@/lib/userInfo";

async function fetchPromotions(accessToken: string) {
  const res = await fetch("http://localhost:8080/api/sukienuudai/all", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch promotions");
  return await res.json();
}

export default async function Page() {
  const userId = await getUserId();
  let promotions : SuKienUuDai[] = [];
  if (userId) {
    const accessToken = await getAccessToken();
    const response = await fetchPromotions(String(accessToken));
    promotions = response.data ?? [];
    console.log("promotions", promotions);
  }
  return (
    <div>
      <PromotionPage promotions={promotions ?? []} />
    </div>
  );
}
