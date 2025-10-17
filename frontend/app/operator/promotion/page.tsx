"use client";

import PromotionPopupChange from "@/components/operator/PromotionPopupChange";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PromotionTable from "@/components/operator/PromotionTable";
import { Button } from "@/components/ui/button";
const promotions = [
  {
    id: "PROMO-001",
    name: "Flash Sale Cuối Tuần",
    discount: "30%",
    startDate: "2025-01-20",
    endDate: "2025-01-22",
    status: "Đang hoạt động" as const,
  },
  {
    id: "PROMO-002",
    name: "Flash Sale Cuối Tuần",
    discount: "30%",
    startDate: "2025-01-20",
    endDate: "2025-01-22",
    status: "Ngừng hoạt động" as const,
  },
];

export default function Promotion() {
  const [openChange, setOpenChange] = useState(false);
  const [idEdit, setIdEdit] = useState<string | null>(null);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Tìm kiếm..."
            className="pl-10 bg-muted border-0"
          />
        </div>
        <Button onClick={() => setOpen(true)}>Thêm voucher</Button>
      </div>
      <PromotionTable
        promotions={promotions}
        onEdit={(id) => {
          setIdEdit(id);
          setOpenChange(true);
        }}
        onDelete={(id) => alert(`Xóa ${id}`)}
      />
      <PromotionPopupChange
        open={openChange}
        id={idEdit}
        onClose={() => setOpenChange(false)}
        onSave={(data) => {
          setOpenChange(false);
          setIdEdit(null);
        }}
      />
    </div>
  );
}
