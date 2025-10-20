import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
export async function getUserSession() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    // Return null when there's no user to let callers handle authorization.
    return null;
  }

  return user.user_metadata.name;
}

export async function getUserId() {
  const userName = await getUserSession();

  if (!userName) {
    return null;
  }
  console.log("Username:", userName);
  const { data, error } = await supabase
    .from("TAIKHOAN")
    .select("*")
    .eq("Username", userName)
    .single();
  console.log("Error:", error);
  if (error || !data) {
    return null;
  }

  return data.Username;
}
