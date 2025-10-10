import React from "react";
import { LanguageProvider } from "@/contexts/language-context";
import { cookies } from "next/headers";
import { CartProvider } from "@/contexts/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveChat } from "@/components/customer-support/live-chat";
import { Analytics } from "@vercel/analytics/next";
import { ProtectedRoute } from "@/components/protected-route";

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
      <LanguageProvider initialLanguage={language as "vi" | "en"}>
        <CartProvider>
          <Header />
          {children} <Footer /> <Analytics />
          {/* <LiveChat /> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/68e7afe5194a94194f2e030b/1j74ge6hq';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                  })();
                `,
            }}
          />
        </CartProvider>
      </LanguageProvider>
      {/* </ProtectedRoute> */}
    </>
  );
}
