import React from "react";
import Script from "next/script";
import { LanguageProvider } from "@/contexts/language-context";
import { cookies } from "next/headers";
import { CartProvider } from "@/contexts/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
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
      <ProtectedRoute Role={"KH"} alloweGuest={true}>
        <LanguageProvider initialLanguage={language as "en" | "vi"}>
          <CartProvider>
            <SuKienUuDaiProvider>
              <Header />
              {children} <Footer />{" "}
              {process.env.NODE_ENV === "production" ? <Analytics /> : null}
              <ChatWidget
                config={{
                  chatUrl: process.env.N8N_CHAT_URL || "",
                  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
                  supabaseServiceRoleKey:
                    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "",
                }}
              />
              <Script
                id="tawk-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/68e7afe5194a94194f2e030b/1j74ge6hq';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                  })();`,
              }}
            />
          </SuKienUuDaiProvider>
        </CartProvider>
      </LanguageProvider>
    </>
  );
}
