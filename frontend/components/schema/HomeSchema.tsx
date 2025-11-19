"use client";

import { useMemo } from "react";
import type { Product } from "@/lib/types";

export default function HomeSchema({
  initialProducts,
  baseUrl,
}: {
  initialProducts: Product[];
  baseUrl: string;
}) {
  const jsonLd = useMemo(() => {
    const graph: unknown[] = [];

    // WebSite
    graph.push({
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "FlexStyle",
      description:
        "Cửa hàng thời trang trực tuyến FlexStyle - thời trang hiện đại",
    });

    // Organization
    graph.push({
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "FlexStyle",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      sameAs: [
        "https://facebook.com/your-page",
        "https://instagram.com/your-page",
      ],
    });

    // Featured Product List (ItemList)
    const products = Array.isArray(initialProducts)
      ? initialProducts.slice(0, 10)
      : [];

    if (products.length) {
      const itemListElement = products.map((p, index) => {
        const rawImg =
          Array.isArray(p.HinhAnh) && p.HinhAnh.length
            ? String(p.HinhAnh[0])
            : typeof p.HinhAnh === "string"
            ? p.HinhAnh
            : "/og-default.png";

        const absoluteImg = rawImg.startsWith("http")
          ? rawImg
          : `${baseUrl}${rawImg}`;

        const productSchema = {
          "@type": "Product",
          name: p.TenSP ?? "",
          image: [absoluteImg],
          description: (p.MoTa ?? "").slice(0, 300),
          sku: p.MaSP ?? "",
          mpn: p.MaSP ?? "",
          offers: {
            "@type": "Offer",
            url: `${baseUrl}/products/${encodeURIComponent(String(p.MaSP))}`,
            priceCurrency: "VND",
            price: p.GiaBan ?? "",
            availability: "https://schema.org/InStock",
          },
        };

        return {
          "@type": "ListItem",
          position: index + 1,
          item: productSchema,
        };
      });

      graph.push({
        "@type": "ItemList",
        "@id": `${baseUrl}/#featured-products`,
        itemListElement,
      });
    }

    return JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [initialProducts, baseUrl]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
