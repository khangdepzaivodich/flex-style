"use client";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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
import { Filter as FilterIcon } from "lucide-react";
import Product from "@/interfaces/product";
import axios from "axios";
export default function ProductsPage({
  productData,
  sessionData,
}: {
  productData: Product[];
  sessionData: any;
}) {
  const [open, setOpen] = useState(false); // trạng thái mở popup thêm/chỉnh sửa
  const [editing, setEditing] = useState<Product | null>(null); // trạng thái sản phẩm đang chỉnh sửa
  const [viewProduct, setViewProduct] = useState<Product | null>(null); // trạng thái xem chi tiết sản phẩm

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

  const [filter, setFilter] = useState<Filter>(Filter.All); // Trạng thái lọc sản phẩm
  const [products, setProducts] = useState<Product[]>(productData);
  const [search, setSearch] = useState<string>(""); // Tìm kiếm theo mã hoặc tên

  // Lọc sản phẩm theo trạng thái
  const filtered = products.filter((p) => {
    if (filter === Filter.All) return true;
    if (filter === Filter.Active)
      return (p.TrangThai ?? "").toString() === "ACTIVE";
    if (filter === Filter.Inactive)
      return (p.TrangThai ?? "").toString() === "INACTIVE";
    return true;
  });

  const filteredProducts = filtered.filter((p) =>
    [
      p.TenSP,
      p.MauSac,
      categoryMap[p.DANHMUC.Loai as keyof typeof categoryMap],
    ].some((field) => field?.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSave = (data: Product) => {
    // Cập nhật hoặc thêm mới sản phẩm.
    if (!data) return;
    if (!editing) {
    }
    setOpen(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.MaSP !== id));
  };

  const handleEdit = (id: string) => {
    const p = products.find((x) => x.MaSP === id);
    if (p) {
      // Mở popup chỉnh sửa với dữ liệu sản phẩm đã chọn
      setEditing(p);
    }
  };

  // Xem chi tiết sản phẩm
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
          <div className="relative w-full max-w-md ">
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
              setEditing({
                MaSP: "",
                TenSP: "",
                DANHMUC: {
                  MaDM: "",
                  TenDM: "",
                  MoTa: "",
                  Loai: "",
                },
                GiaBan: 0,
                MauSac: "",
                TrangThai: "ACTIVE",
                CHITIETSANPHAM: [],
                MoTa: "",
                HinhAnh: [],
                slug: "",
                MaDM: "",
              });
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
        initialData={editing ?? undefined}
      />

      <ProductViewPopup
        open={Boolean(viewProduct)}
        product={viewProduct}
        onClose={() => setViewProduct(null)}
      />
    </main>
  );
}
