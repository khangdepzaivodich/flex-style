"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import StaffCard from "@/components/business/StaffCard";
import { Button } from "@/components/ui/button";
import StaffPopup from "@/components/business/StaffPopup";
import { useEffect, useState } from "react";
import axios from "axios";
import { createClient } from "@/lib/supabase/client";
const sampleStaff: any[] = [];

export default function StaffPage() {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [staff, setStaff] = useState(() => sampleStaff);
  const supabase = createClient();
  const handleSave = (data: any) => {
    const dup: string[] = [];
    for (const s of staff) {
      if (editing && s.id === editing.id) continue;
      if (s.accountCode === data.accountCode) dup.push("Mã tài khoản");
      if (s.email === data.email) dup.push("Email");
    }
    if (dup.length > 0) {
      const uniq = Array.from(new Set(dup));
      alert(`Thông tin trùng: ${uniq.join(", ")}. Vui lòng sửa trước khi lưu.`);
      return;
    }

    const newItem = { ...data };
    setStaff((prev) => {
      if (editing) {
        return prev.map((p) =>
          p.id === editing.id ? { ...newItem, id: editing.id } : p
        );
      }
      const nextId = prev.length
        ? Math.max(...prev.map((p) => Number(p.id))) + 1
        : 1;
      return [{ ...newItem, id: nextId }, ...prev];
    });
    setOpen(false);
    setEditing(null);
  };

  const handleDelete = (id: number | string | undefined) => {
    setStaff((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (id: number | string | undefined) => {
    const s = staff.find((x) => x.id === id);
    if (s) {
      setEditing(s);
      setOpen(true);
    }
  };
  useEffect(() => {
    const fetchStaff = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return;
      const accessToken = session.access_token;
      try {
        const res = await axios.get("http://localhost:8080/api/nv", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        console.log(res);
        setStaff(res.data.data);
      } catch (err) {
        console.error("Error fetching staff:", err);
      }
    };
    fetchStaff();
    return () => {
      setStaff([]);
    };
  }, []);

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Tìm kiếm..."
            className="pl-10 bg-muted border-0 w-full"
          />
        </div>
        <Button
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
        >
          Thêm nhân viên
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {staff.map((s) => (
          <StaffCard
            key={s.id}
            id={s.id}
            name={s.fullName ?? s.name}
            nationalId={s.cccd ?? s.nationalId}
            email={s.email}
            phone={s.phone}
            accountCode={s.accountCode}
            position={s.position}
            status={
              s.status === "Hoạt động" || s.status === "active"
                ? "active"
                : "inactive"
            }
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <StaffPopup
        open={open}
        onClose={() => {
          setOpen(false);
          setEditing(null);
        }}
        onSave={handleSave}
        initialData={editing ?? undefined}
      />
    </main>
  );
}
