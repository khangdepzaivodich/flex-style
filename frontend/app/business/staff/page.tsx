"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import StaffCard from "@/components/business/StaffCard";
import { Button } from "@/components/ui/button";
import StaffPopup from "@/components/business/StaffPopup";
import { useState } from "react";

const sampleStaff = [
  { id: 1, name: "Nguyễn Văn A", nationalId: "012345678", email: "a@example.com", phone: "0123456789", accountCode: "STAFF001", position: "Nhân viên bán hàng", status: "active" },
  { id: 2, name: "Trần Thị B", nationalId: "987654321", email: "b@example.com", phone: "0987654321", accountCode: "STAFF002", position: "Quản lý kho", status: "inactive" },
];

export default function StaffPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Tìm kiếm..." className="pl-10 bg-muted border-0 w-full" />
        </div>
        <Button onClick={() => setOpen(true)}>Thêm nhân viên</Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sampleStaff.map((s) => (
          <StaffCard
            key={s.id}
            id={s.id}
            name={s.name}
            nationalId={s.nationalId}
            email={s.email}
            phone={s.phone}
            accountCode={s.accountCode}
            position={s.position}
            status={s.status as "active" | "inactive"}
          />
        ))}
      </div>

      <StaffPopup open={open} onClose={() => setOpen(false)} onSave={(data) =>  setOpen(false)} />
    </main>
  );
}
