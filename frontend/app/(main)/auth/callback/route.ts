import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/")) next = "/";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data?.session?.user) {
      const user = data.session.user;

      // 🔹 Gọi API backend để đăng ký hoặc đồng bộ user
      try {
        console.log(user.user_metadata.name);
        await fetch("http://localhost:8080/api/taikhoan/dangky", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Username: user.user_metadata.name,
            auth_user_id: user.id,
          }),
        });
      } catch (apiError) {
        console.error("Error calling backend API:", apiError);
        // Bạn có thể redirect đến 1 trang lỗi nếu muốn
      }

      // 🔹 Redirect người dùng
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) return NextResponse.redirect(`${origin}${next}`);
      if (forwardedHost)
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Redirect đến trang lỗi nếu không có code hoặc lỗi session
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
