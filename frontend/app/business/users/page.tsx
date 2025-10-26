"use client";

import { useState } from "react";
import UserCard from "@/components/business/UserCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function UserManagementPage() {
  // dữ liệu mẫu
  const initialUsers: { id: string; name: string; email?: string; phone?: string; accountCode?: string; address?: string; status: "active" | "inactive" }[] = [
    { id: "1", name: "Nguyễn Văn A", email: "a@example.com", phone: "0123 456 789", accountCode: "TK001", address: "Quận 1, TP.HCM", status: "active" },
    { id: "2", name: "Trần Thị B", email: "b@example.com", phone: "0987 654 321", accountCode: "TK002", address: "Quận 3, TP.HCM", status: "inactive" },
    { id: "3", name: "Lê Văn C", email: "c@example.com", phone: "0111 222 333", accountCode: "TK003", address: "Quận 5, TP.HCM", status: "active" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");

  const handleStatusChange = (id?: string | number, status?: "active" | "inactive") => {
    //Để tạm thời
    console.log("status change", id, status);
  };

  const handleDelete = (id?: string | number) => {
    if (!id) return;
    if (!confirm('Xác nhận xóa người dùng này?')) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // Bộ lọc tìm kiếm
  const normalize = (s?: string) => (s ?? "").toString().replace(/\s+/g, ' ').trim().toLowerCase();
  const filtered = users.filter((u) => {
    if (!query) return true;
    const q = normalize(query);
    return (
      normalize(u.id)?.includes(q) ||
      normalize(u.name)?.includes(q) ||
      normalize(u.email)?.includes(q) ||
      normalize(u.phone)?.includes(q) ||
      normalize(u.accountCode)?.includes(q) ||
      normalize(u.address)?.includes(q)
    );
  });

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Tìm kiếm người dùng..." className="pl-10 bg-muted border-0 w-full" value={query} onChange={(e) => setQuery((e.target as HTMLInputElement).value)} />
        </div>
      </div>

      <section>
        <div className="flex flex-col gap-4">
          {filtered.map((u) => (
            <UserCard
              key={u.id}
              id={u.id}
              name={u.name}
              email={u.email}
              phone={u.phone}
              accountCode={u.accountCode}
              address={u.address}
              status={u.status}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
