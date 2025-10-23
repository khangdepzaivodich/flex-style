import { createClient } from "@/lib/supabase/server";

export async function getUserId() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data) {
    // Return null when there's no user to let callers handle authorization.
    return null;
  }

  return data.user.id;
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