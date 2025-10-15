"use client";
import VoucherCard from "@/components/operator/VoucherCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import VoucherPopup from "@/components/operator/VoucherPopup";
import { useState } from "react";

export default function Voucher() {
  const [open, setOpen] = useState(false);
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
      <div className="flex flex-wrap gap-6">
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
      </div>
      <VoucherPopup
        open={open}
        onClose={() => setOpen(false)}
        onSave={(data) => {
          console.log("Saved voucher:", data);
        }}
      />
    </div>
  );
}
