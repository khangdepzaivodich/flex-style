"use client";

import { useState } from "react";
import UserTable from "@/components/business/UserTable";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Search, Funnel } from "lucide-react";

export default function UserManagementPage() {
  // dữ liệu mẫu
  const initialUsers: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    accountCode?: string;
    address?: string;
    status: "active" | "inactive";
  }[] = [
    {
      id: "1",
      name: "Nguyễn Văn A",
      email: "a@example.com",
      phone: "0123 456 789",
      accountCode: "TK001",
      address: "Quận 1, TP.HCM",
      status: "active",
    },
    {
      id: "2",
      name: "Trần Thị B",
      email: "b@example.com",
      phone: "0987 654 321",
      accountCode: "TK002",
      address: "Quận 3, TP.HCM",
      status: "inactive",
    },
    {
      id: "3",
      name: "Lê Văn C",
      email: "c@example.com",
      phone: "0111 222 333",
      accountCode: "TK003",
      address: "Quận 5, TP.HCM",
      status: "active",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  const handleStatusChange = (id: string, status: "active" | "inactive") => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));
    console.log("status change", id, status);
  };

  const handleDelete = (id?: string | number) => {
    if (!id) return;
    if (!confirm("Xác nhận xóa người dùng này?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // Bộ lọc tìm kiếm
  const normalize = (s?: string) =>
    (s ?? "").toString().replace(/\s+/g, " ").trim().toLowerCase();
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

  // apply status filter
  const filteredByStatus = filtered.filter((u) => {
    if (statusFilter === "all") return true;
    return u.status === statusFilter;
  });

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Tìm kiếm người dùng..."
            className="pl-10 bg-muted border-0 w-full"
            value={query}
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
          />
        </div>

        <div className="w-44">
          <Select
            value={statusFilter}
            onValueChange={(val) =>
              setStatusFilter(val as "all" | "active" | "inactive")
            }
          >
            <SelectTrigger className="w-44 relative pl-9 border-gray-200">
              <Funnel className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <SelectValue placeholder="Tất cả" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="active">Còn hoạt động</SelectItem>
              <SelectItem value="inactive">Ngừng hoạt động</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <section>
        <UserTable
          users={filteredByStatus}
          onDelete={(id) => handleDelete(id)}
          onStatusChange={(id, s) => handleStatusChange(id, s)}
        />
      </section>
    </div>
  );
}
