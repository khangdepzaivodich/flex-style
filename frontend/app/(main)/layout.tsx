import React from "react";
import { LanguageProvider } from "@/contexts/language-context";
import { cookies } from "next/headers";
import { CartProvider } from "@/contexts/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveChat } from "@/components/customer-support/live-chat";
import { Analytics } from "@vercel/analytics/next";
import { ProtectedRoute } from "@/components/protected-route";
import ChatWidget from "@/components/chat-widget";
import { SuKienUuDaiProvider } from "@/contexts/sukienuudai-context";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "vi";

  return (
    <>
      {" "}
      {/* <ProtectedRoute requiredPermissions={["manage_inventory"]}> */}
      <LanguageProvider initialLanguage={language as "en" | "vi"}>
        <CartProvider>
          <SuKienUuDaiProvider>
            <Header />
            {children} <Footer /> <Analytics />
            <ChatWidget
              config={{
                chatUrl: process.env.N8N_CHAT_URL || "",
                supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
                supabaseServiceRoleKey:
                  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "",
              }}
            />
          </SuKienUuDaiProvider>
        </CartProvider>
      </LanguageProvider>
      {/* </ProtectedRoute> */}
    </>
  );
}
