import React from "react";
import { notFound } from "next/navigation";
import SlugPage from "./SlugPage";

type Props = {
  params: Promise<{ slug: string }>; // Type cho async params (Next.js 15)
};

async function getRelatedProducts(slug: string) {
  const res = await fetch(
    `http://localhost:8080/api/sanpham/related/${slug}`, // Dùng trực tiếp slug (đã encoded)
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }
  const data = await res.json();
  if (!data || !Array.isArray(data.data)) {
    // Validation cơ bản
    throw new Error("Invalid related products data");
  }
  return data;
}
async function getReply(slug: string) {
  const res = await fetch(`http://localhost:8080/api/phanhoi?slug=${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch related reply");
  }
  const data = await res.json();
  return data;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const trimmedSlug = slug.trim();

  try {
    const res = await fetch(
      `http://localhost:8080/api/sanpham/${trimmedSlug}`,
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
      <SlugPage
        product={productData.data}
        relatedProducts={relatedProducts.data}
        feedbacks={feedbacks.data.feedbacks}
        feedbacksCustomer={feedbacks.data.feedbacksCustomer}
      />
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound(); // Fallback chung
  }
}
