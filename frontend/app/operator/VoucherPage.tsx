"use client";
import VoucherCard from "@/components/operator/VoucherCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import VoucherPopup from "@/components/operator/VoucherPopup";
import { useEffect, useState } from "react";
import { Voucher } from "@/lib/types";

interface VoucherPageProps {
  vouchers: Voucher[];
  onEdit?: (id: string) => void;
}

export default function VoucherPage({ vouchers, onEdit }: VoucherPageProps) {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState<Voucher | null>(null);
  const [openChange, setOpenChange] = useState(false);
  const [voucherList, setVoucherList] = useState<Voucher[]>(vouchers);
  const [search, setSearch] = useState("");
  const [searchDate, setSearchDate] = useState("");
  useEffect(() => {
    setVoucherList(vouchers);
  }, [vouchers]);
  // Lọc theo tên, loại, trạng thái, ngày
  const filteredVouchers = voucherList.filter((voucher) => {
    const keyword = search.trim().toLowerCase();
    // Tìm theo tên, loại, trạng thái
    const matchName = voucher.TenVoucher.toLowerCase().includes(keyword);
    const matchLoai = voucher.Loai.toLowerCase().includes(keyword);
    const matchStatus = voucher.TrangThai.toLowerCase().includes(keyword);
    // Tìm theo ngày nằm giữa NgayBatDau và NgayKetThuc
    let matchDate = true;
    if (searchDate) {
      const date = new Date(searchDate).getTime();
      const start = new Date(voucher.NgayBatDau).getTime();
      const end = new Date(voucher.NgayKetThuc).getTime();
      matchDate = date >= start && date <= end;
    }
    return (matchName || matchLoai || matchStatus) && matchDate;
  });
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center w-3/4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Tên, loại, trạng thái..."
              className="pl-10 bg-muted border-0 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Input
            type="date"
            className="bg-muted border-0 text-sm w-36"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
        <Button onClick={() => setOpen(true)}>Thêm voucher</Button>
      </div>
      <h2 className="font-bold text-xl">Hiện có {filteredVouchers.length} voucher</h2>
      <div className="flex flex-wrap gap-6">
        {filteredVouchers.map((voucher) => (
          <VoucherCard
            key={voucher.MaVoucher}
            onEdit={(voucher) => {
              setIsEdit(voucher);
              setOpenChange(true);
            }}
            voucher={voucher}
          />
        ))}
      </div>
      <VoucherPopup
        open={open}
        voucher={null}
        onClose={() => setOpen(false)}
        onSave={(data) => {
          console.log("Saved voucher:", data);
        }}
      />
      <VoucherPopup
        open={openChange}
        voucher={isEdit}
        onClose={() => setOpenChange(false)}
        onSave={(data) => {
          setVoucherList((prev) =>
            prev.map((p) => (p.MaVoucher === data.MaVoucher ? data : p))
          );
        }}
      />
    </div>
  );
}
