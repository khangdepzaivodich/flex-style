"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";
import { Category, Product } from "@/lib/types";

export default function QuanPage({
  initialProducts,
  categories,
}: {
  initialProducts: Product[];
  categories: Category[];
}) {
  const [sortBy, setSortBy] = useState<
    "featured" | "price-low" | "price-high" | "name"
  >("featured");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addMore = async () => {
    const currentLength = products.length;
    const res = await fetch(
      `http://localhost:8080/api/sanpham?skip=${currentLength}&take=50`,
      { cache: "no-store" }
    );
    const data = await res.json();
    const newProducts = data.data || [];
    setProducts((prev) => [...prev, ...newProducts]);
  };
  const allQuanProducts = useMemo(() => {
    return products.filter((product) => {
      const category = categories.find((cat) => cat.MaDM === product.MaDM);
      return category?.Loai === "QUAN";
    });
  }, [products, categories]);
  const quanProducts = useMemo(() => {
    let filtered = allQuanProducts;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) =>
          categories.find((cat) => cat.MaDM === product.MaDM)?.TenDM ===
          selectedCategory
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.GiaBan - b.GiaBan;
        case "price-high":
          return b.GiaBan - a.GiaBan;
        case "name":
          return a.TenSP.localeCompare(b.TenSP);
        default:
          return 0;
        // return b.rating - a.rating;
      }
    });
  }, [sortBy, selectedCategory, allQuanProducts, categories]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4">
          <Sparkles className="h-4 w-4" />
          <span className="font-medium">Quần quý tộc</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Vẻ Đẹp <span className="text-pink-600">Quyến Rũ</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Khám phá bộ sưu tập áo quần thanh lịch, hiện đại và đầy cá tính
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Danh mục</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(
            (category) =>
              category.Loai === "QUAN" && (
                <Button
                  key={category.MaDM}
                  variant={
                    selectedCategory === category.MaDM ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.MaDM)}
                  className="flex items-center gap-2"
                >
                  {category.TenDM}
                  {/* <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge> */}
                </Button>
              )
          )}
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Sản phẩm thời trang </h2>
          <p className="text-muted-foreground">
            {quanProducts.length} sản phẩm được tìm thấy
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={sortBy === "featured" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("featured")}
          >
            Nổi bật
          </Button>
          <Button
            variant={sortBy === "price-low" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("price-low")}
          >
            Giá thấp
          </Button>
          <Button
            variant={sortBy === "price-high" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("price-high")}
          >
            Giá cao
          </Button>
          <Button
            variant={sortBy === "name" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("name")}
          >
            Tên A-Z
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      {quanProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quanProducts.map((product) => (
            <ProductCard key={product.MaSP} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">
            Không tìm thấy sản phẩm nào
          </h3>
          <p className="text-muted-foreground mb-6">
            Thử thay đổi bộ lọc hoặc tìm kiếm khác
          </p>
          <Button onClick={() => setSelectedCategory("all")}>
            Xem tất cả sản phẩm
          </Button>
        </div>
      )}
      <div className="mt-8 text-center">
        <Button variant="outline" onClick={addMore}>
          Xem thêm
        </Button>
      </div>
      <Separator className="my-12" />

      {/* Newsletter Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          Xu hướng thời trang mới nhất
        </h3>
        <p className="text-muted-foreground mb-6">
          Đăng ký để nhận thông tin về các bộ sưu tập và ưu đãi dành riêng cho
          phái đẹp
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <Button>Đăng ký</Button>
        </div>
      </div>
    </div>
  );
}
