// app/api/userinfo/route.ts
import { createClient } from "@/lib/supabase/server"; // đường dẫn bạn đặt
import { jwtDecode } from "jwt-decode"; // npm i jwt-decode

export async function GET() {
  const supabase = await createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const jwt = session.access_token;

  // Decode JWT (không verify)
  const payload = jwtDecode(jwt);

  console.log("JWT payload:", payload);

  //   // Giả sử MaKH lưu trong user_metadata
  //   const maKH = payload.user_metadata?.MaKH || payload.sub;

  //   // (Optional) Gửi sang backend riêng
  //   const backendRes = await fetch("https://your-backend/api/data", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ MaKH: maKH }),
  //   });

  //   const data = await backendRes.json();
  //   return Response.json({ maKH, data });
}
