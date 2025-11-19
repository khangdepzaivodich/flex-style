import { updateSession } from "@/lib/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";

const BOT_UAS: RegExp[] = [
  /facebookexternalhit/i,
  /facebot/i,
  /twitterbot/i,
  /slackbot-linkexpanding/i,
  /linkedinbot/i,
  /telegrambot/i,
];

export async function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const url = request.nextUrl.clone();

  // If a known bot requests a product page, rewrite to metadata-only endpoint
  if (
    BOT_UAS.some((r) => r.test(ua)) &&
    url.pathname.startsWith("/products/")
  ) {
    url.pathname = `/api/meta${url.pathname}`; // /api/meta/products/:slug
    return NextResponse.rewrite(url);
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
