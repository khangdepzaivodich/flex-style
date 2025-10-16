"use client";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.GiaBan
    ? Math.round(((product.GiaBan - product.GiaBan) / product.GiaBan) * 100)
    : 0;
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${product.TenSP}`}>
          <Image
            src={
              product.HinhAnh && product.HinhAnh.length > 0
                ? "https:" + product.HinhAnh[0]
                : "/placeholder.svg"
            }
            alt={product.TenSP}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
            -{discountPercentage}%
          </Badge>
        )}
        {!product.inStock && (
          <Badge variant="secondary" className="absolute top-2 right-2">
            Hết hàng
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <Link href={`/products/${product.TenSP}`}>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.TenSP}
          </h3>
        </Link>

        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <span className="font-bold text-primary">
            {formatPrice(product.GiaBan)}
          </span>
          {product.GiaBan && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.GiaBan)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
