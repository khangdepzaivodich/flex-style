"use client";

import UserCard from "@/components/business/UserCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function UserManagementPage() {
  // dữ liệu mãu
  const sampleUsers: { id: string; name: string; email?: string; phone?: string; accountCode?: string; address?: string; status: "active" | "inactive" }[] = [
    { id: "1", name: "Nguyễn Văn A", email: "a@example.com", phone: "0123 456 789", accountCode: "TK001", address: "Quận 1, TP.HCM", status: "active" },
    { id: "2", name: "Trần Thị B", email: "b@example.com", phone: "0987 654 321", accountCode: "TK002", address: "Quận 3, TP.HCM", status: "inactive" },
    { id: "3", name: "Lê Văn C", email: "c@example.com", phone: "0111 222 333", accountCode: "TK003", address: "Quận 5, TP.HCM", status: "active" },
  ];

  const handleStatusChange = (id?: string | number, status?: "active" | "inactive") => {
    // placeholder for future API integration
    console.log("status change", id, status);
  };

  const handleDelete = (id?: string | number) => {
    // placeholder for future API integration
    console.log("delete user", id);
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Tìm kiếm người dùng..." className="pl-10 bg-muted border-0 w-full" />
        </div>
      </div>

      <section>
        <div className="flex flex-col gap-4">
          {sampleUsers.map((u) => (
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
