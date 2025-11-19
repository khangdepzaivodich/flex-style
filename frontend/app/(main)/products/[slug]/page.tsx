import React from "react";
import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SlugPage from "./SlugPage";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// async function getRelatedProducts(slug: string) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sanpham/related/${slug}`,
//     {
//       cache: "no-store",
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch related products");
//   }
//   const data = await res.json();
//   if (!data || !Array.isArray(data.data)) {
//     throw new Error("Invalid related products data");
//   }
//   return data;
// }
// async function getReply(slug: string) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phanhoi?slug=${slug}`,
//     {
//       cache: "no-store",
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch related reply");
//   }
//   const data = await res.json();
//   return data;
// }

// Dynamic Open Graph / Twitter metadata per product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = await fetchProduct(slug);
    if (!product) return {};

    const title = product.TenSP || "Sản phẩm FlexStyle";
    const description =
      (product.MoTa && String(product.MoTa).slice(0, 160)) ||
      `Xem chi tiết ${title} trên FlexStyle`;

    const BASE = (
      process.env.NEXT_PUBLIC_FRONTEND_URL || "https://flex-style.vercel.app"
    ).replace(/\/+$/, "");

    const images = Array.isArray(product.HinhAnh)
      ? product.HinhAnh[0]
      : product.HinhAnh;
    const normalizedImage =
      images && images.includes
        ? images.includes("https")
          ? images
          : "https:" + images
        : `${BASE}/placeholder.svg`;
    const url = `${BASE}/products/${product.slug}`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: "FlexStyle",
        images: [{ url: normalizedImage, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: [normalizedImage],
      },
    };
  } catch (error) {
    console.error("generateMetadata error:", error);
    return {};
  }
}

// Shared cached fetch to avoid duplicate network calls between generateMetadata and Page
const fetchProduct = cache(async (slug: string) => {
  const url = `${
    process.env.NEXT_PUBLIC_BACKEND_URL
  }/api/sanpham/${encodeURIComponent(slug)}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch product ${slug}: ${res.status}`);
  }
  const json = await res.json();
  return json?.data ?? null;
});

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trimmedSlug = slug.trim();

  try {
    // Use cached fetchProduct to avoid duplicate network calls and to let
    // the client fetch non-critical data (related products / feedbacks)
    const product = await fetchProduct(trimmedSlug);
    if (!product) {
      notFound();
    }

    return (
      <>
        <SlugPage product={product} />
      </>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound(); // Fallback chung
  }
}
