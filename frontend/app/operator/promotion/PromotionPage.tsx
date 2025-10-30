"use client";

import PromotionPopupChange from "@/components/operator/PromotionPopupChange";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PromotionTable from "@/components/operator/PromotionTable";
import { Button } from "@/components/ui/button";
import { SuKienUuDai } from "@/lib/types";

export default function PromotionPage({
  promotions,
}: {
  promotions: SuKienUuDai[];
}) {
  const [openChange, setOpenChange] = useState(false);
  const [promotionsChange, setPromotionChange] =
    useState<SuKienUuDai[]>(promotions);
  const [open, setOpen] = useState(false);
  const [idEdit, setIdEdit] = useState<SuKienUuDai | null>(null);
  const [searchName, setSearchName] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchDate, setSearchDate] = useState("");
  // Lọc danh sách theo các tiêu chí
  const filteredPromotions = promotionsChange.filter((promo) => {
    // Tìm theo tên
    const matchName = promo.TenSK.toLowerCase().includes(
      searchName.toLowerCase()
    );
    // Tìm theo trạng thái
    const matchStatus = searchStatus ? promo.TrangThai === searchStatus : true;
    // Tìm theo ngày nằm giữa NgayPH và NgayKT
    let matchDate = true;
    if (searchDate) {
      const date = new Date(searchDate).getTime();
      const start = new Date(promo.NgayPH).getTime();
      const end = new Date(promo.NgayKT).getTime();
      matchDate = date >= start && date <= end;
    }
    return matchName && matchStatus && matchDate;
  });
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center w-2/4">
          <div className="relative w-2/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4" />
            <Input
              placeholder="Tên sự kiện..."
              className="pl-10 bg-muted border-0 w-full"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <select
            className="bg-muted border rounded px-2 py-1 text-sm"
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
          >
            <option value="">Tất cả trạng thái</option>
            <option value="ACTIVE">Còn hoạt động</option>
            <option value="INACTIVE">Tạm dừng</option>
          </select>
          <Input
            type="date"
            className="bg-muted border-0 text-sm w-36"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
        <Button onClick={() => setOpen(true)}>Thêm sự kiện ưu đãi</Button>
      </div>
      <PromotionTable
        promotions={filteredPromotions}
        onEdit={(promo) => {
          setIdEdit(promo);
          setOpenChange(true);
        }}
      />
      <PromotionPopupChange
        open={openChange}
        promo={idEdit}
        onClose={() => setOpenChange(false)}
        onSave={(data) => {
          setOpenChange(false);
          setIdEdit(null);
          setPromotionChange((prev) => {
            return prev.map((p) => (p.MaSK === data.MaSK ? data : p));
          });
        }}
      />
      <PromotionPopupChange
        open={open}
        promo={null}
        onClose={() => setOpen(false)}
        onSave={(data) => {
          setOpen(false);
          setIdEdit(null);
          setPromotionChange((prev) => {
            return [...prev, { ...data, MaSK: "" }];
          });
        }}
      />
    </div>
  );
}
