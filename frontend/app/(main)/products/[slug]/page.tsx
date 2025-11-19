import React from "react";
import { cache } from "react";
// import { notFound } from "next/navigation";
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
  const product = await fetchProduct(slug);
  if (!product) {
    return {};
  }
  return {
    title: product.TenSP,
    description: product.MoTa,
    openGraph: {
      title: product.TenSP,
      description: product.MoTa,
      images: [
        {
          url: product.HinhAnh[0] || "",
          alt: product.TenSP,
          width: 1200,
          height: 630,
        },
      ],
      url: `https://flex-style.vercel.app/products/${slug}`,
    },
  };
}

// Shared cached fetch to avoid duplicate network calls between generateMetadata and Page
const fetchProduct = cache(async (slug: string) => {
  const url = `${
    process.env.NEXT_PUBLIC_BACKEND_URL
  }/api/sanpham/${encodeURIComponent(slug)}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  console.log("Fetch product URL:", url);
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

  return (
    <>
      <SlugPage slug={trimmedSlug} />
    </>
  );
}
