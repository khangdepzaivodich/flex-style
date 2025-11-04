"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter as FilterIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductTable from "@/components/business/ProductTable";
import ProductPopup from "@/components/business/ProductPopup";
import ProductViewPopup from "@/components/business/ProductViewPopup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Product from "@/interfaces/product";
import axios from "axios";

export default function ProductsPage({
  productData,
  sessionData,
}: {
  productData: Product[];
  sessionData: any;
}) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);

  enum Filter {
    All = "all",
    Active = "active",
    Inactive = "inactive",
  }

  const categoryMap = {
    AO: "Áo",
    QUAN: "Quần",
    PHU_KIEN: "Phụ kiện",
  };

  const [filter, setFilter] = useState<Filter>(Filter.All);
  const [products, setProducts] = useState<Product[]>(productData);
  const [search, setSearch] = useState<string>("");

  // Keep products synced when productData changes (important for sorted backend data)
  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  // 🔍 filter by status
  const filtered = products.filter((p) => {
    if (filter === Filter.All) return true;
    if (filter === Filter.Active)
      return (p.TrangThai ?? "").toString() === "ACTIVE";
    if (filter === Filter.Inactive)
      return (p.TrangThai ?? "").toString() === "INACTIVE";
    return true;
  });

  // 🔍 search filter
  const filteredProducts = filtered.filter((p) =>
    [
      p.TenSP,
      p.MauSac,
      categoryMap[p.DANHMUC.Loai as keyof typeof categoryMap],
    ].some((field) => field?.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSave = async (data: Product) => {
    if (!data) return;
    data.HinhAnh = data.HinhAnh?.map((file) => file.toString()) ?? [];

    if (editing) {
      const requestProduct = {
        TenSP: data.TenSP,
        GiaBan: data.GiaBan,
        MauSac: data.MauSac,
        TrangThai: data.TrangThai,
        MoTa: data.MoTa,
        HinhAnh: data.HinhAnh,
      };
      try {
        const res = await axios.patch(
          `http://localhost:8080/api/sanpham/${data.MaSP}`,
          requestProduct,
          { headers: { Authorization: `Bearer ${sessionData.access_token}` } }
        );
        console.log("Update product successfully", res);
      } catch (error) {
        console.error("Error updating product:", error);
      }
      const requestProductDetail = data.CHITIETSANPHAM[selectedSizeIndex];
      try {
        const res = await axios.patch(
          `http://localhost:8080/api/chitietsanpham/${requestProductDetail.MaCTSP}`,
          requestProductDetail,
          { headers: { Authorization: `Bearer ${sessionData.access_token}` } }
        );
        console.log("Update product detail successfully", res);
      } catch (error) {
        console.error("Error updating product detail", error);
      }
    }
    setOpen(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.MaSP !== id));
  };

  const handleEdit = (id: string) => {
    const p = products.find((x) => x.MaSP === id);
    if (p) setEditing(p);
  };

  // 👀 open view popup
  const handleViewOpen = (id: string) => {
    const p = products.find((x) => x.MaSP === id);
    if (p) setViewProduct(p);
  };

  useEffect(() => {
    if (editing) setOpen(true);
  }, [editing]);

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 w-full max-w-2xl mb-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Tìm kiếm theo mã hoặc tên..."
              className="pl-10 bg-muted border-0 w-full"
              value={search}
              onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
            />
          </div>
          <Button
            onClick={() => {
              setEditing(null);
              setOpen(true);
            }}
          >
            Thêm sản phẩm
          </Button>
        </div>

        <div className="flex items-center">
          <Select
            onValueChange={(v) => setFilter(v as Filter)}
            defaultValue={Filter.All}
          >
            <SelectTrigger className="w-48 relative pl-9 border-gray-200">
              <FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <SelectValue placeholder="Tất cả" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={Filter.All}>Tất cả</SelectItem>
              <SelectItem value={Filter.Active}>Đang hoạt động</SelectItem>
              <SelectItem value={Filter.Inactive}>Ngừng hoạt động</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ProductTable
        products={filteredProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleViewOpen}
      />

      <ProductPopup
        open={open}
        onClose={() => {
          setOpen(false);
          setEditing(null);
        }}
        onSave={handleSave}
        selectedSizeIndex={selectedSizeIndex}
        setSelectedSizeIndex={setSelectedSizeIndex}
        initialData={editing ?? undefined}
      />

      <ProductViewPopup
        open={Boolean(viewProduct)}
        productDetail={viewProduct?.CHITIETSANPHAM}
        onClose={() => setViewProduct(null)}
      />
    </main>
  );
}
