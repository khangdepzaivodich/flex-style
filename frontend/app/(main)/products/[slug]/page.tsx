import React from "react";
import { notFound } from "next/navigation";
import SlugPage from "./SlugPage";
type Props = {
  params: { slug: string };
};
async function getRelatedProducts(tenSP: string) {
  const res = await fetch(
    `http://localhost:8080/api/sanpham/related/${tenSP}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }
  return res.json();
}
export default async function Page({ params }: Props) {
  const { slug } = params;
  try {
    const res = await fetch(`http://localhost:8080/api/sanpham/${slug}`, {
      cache: "no-store",
    });
    const product = await res.json();
    const relatedProducts = await getRelatedProducts(slug);
    console.log(product.data);
    console.log(relatedProducts);
    return (
      <SlugPage product={product.data} relatedProducts={relatedProducts.data} />
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }
}
