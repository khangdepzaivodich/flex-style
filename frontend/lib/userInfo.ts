import { createClient } from "@/lib/supabase/server";

export async function getUserId() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const userId = data?.user?.id ?? null;

  if (!userId) {
    // Return null when there's no user to let callers handle authorization.
    return null;
  }
  return userId;
}


export async function getAccessToken() {
  const supabase = await createClient();
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    // Return null when there's no user to let callers handle authorization.
    return null;
  }

  return session.access_token;
}
export async function getGioHang(MaAuth: string, accessToken: string) {

  const res = await fetch(`http://localhost:8080/api/giohang?MaTKKH=${MaAuth}`, {
    // cache: "no-store",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("res giohang", res);
  return await res.json();
}