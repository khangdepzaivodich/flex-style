import { getAccessToken } from "@/lib/userInfo";
import CategoriesPage from "./CategoriesPage";
async function handleFetchCategories(accessToken: string) {
  const res = await fetch("http://localhost:8080/api/danhmuc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function CategoriesRootPage() {
  const accessToken = await getAccessToken();
  const categories = await handleFetchCategories(String(accessToken));
  return (
    <CategoriesPage fetchCategories={categories.data} accessToken={accessToken ?? ""} />
  );
}
