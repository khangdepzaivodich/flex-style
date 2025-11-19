import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SlugPage from "./SlugPage";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getRelatedProducts(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sanpham/related/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }
  const data = await res.json();
  if (!data || !Array.isArray(data.data)) {
    throw new Error("Invalid related products data");
  }
  return data;
}
async function getReply(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phanhoi?slug=${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch related reply");
  }
  const data = await res.json();
  return data;
}

// Dynamic Open Graph / Twitter metadata per product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trimmedSlug = slug?.trim();
  if (!trimmedSlug) return {};
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sanpham/${encodeURIComponent(
        trimmedSlug
      )}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return {};
    const json = await res.json();
    const product = json?.data;
    if (!product) return {};

    const title = product.TenSP || "Sản phẩm FlexStyle";
    const description =
      (product.MoTa && String(product.MoTa).slice(0, 160)) ||
      `Xem chi tiết ${title} trên FlexStyle`;
    const images = product.HinhAnh[0].includes("https")
      ? product.HinhAnh[0]
      : "https:" + (product.HinhAnh[0] || ["/placeholder.svg"]);
    console.log({
      title,
      description,
      openGraph: {
        title,
        description,
        siteName: "FlexStyle",
        // type: "website",
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/products/${product.slug}`,
        images: images,
      },
    });
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        siteName: "FlexStyle",
        url: `${
          process.env.NEXT_PUBLIC_FRONTEND_URL
        }/products/${encodeURIComponent(slug)}`,
        images: images,
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: images,
      },
    };
  } catch (error) {
    console.error("generateMetadata error:", error);
    return {};
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trimmedSlug = slug.trim();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sanpham/${trimmedSlug}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      if (res.status === 404) {
        notFound();
      }
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const productData = await res.json();
    if (!productData || !productData.data) {
      throw new Error("Invalid product data");
    }

    const relatedProducts = await getRelatedProducts(trimmedSlug);
    const feedbacks = await getReply(trimmedSlug);
    return (
      <>
        <SlugPage
          product={productData.data}
          relatedProducts={relatedProducts.data}
          feedbacks={feedbacks.data.feedbacks}
          feedbacksCustomer={feedbacks.data.feedbacksCustomer}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound(); // Fallback chung
  }
}
