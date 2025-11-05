import { createClient } from "@/lib/supabase/server";
import UserClientPage from "./UserClientPage";

export default async function UserManagementPage() {
  const supabase = createClient();

  const {
    data: { session },
  } = await (await supabase).auth.getSession();

  // Fetch users from backend; endpoint requires QLDN role (checked on backend)
  const headers: Record<string, string> = {};
  if (session?.access_token) {
    headers["Authorization"] = `Bearer ${session.access_token}`;
  }

  const res = await fetch("http://localhost:8080/api/taikhoan", { headers });
  let json: any;
  try {
    json = await res.json();
  } catch (e) {
    json = null;
  }
  const raw = json?.data ?? json ?? [];
  const taikhoanArray = Array.isArray(raw) ? raw : [];

  return <UserClientPage users={taikhoanArray} sessionData={session} />;
}
