"use client";

import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface User {
  id: string;
  name: string;
  address?: string;
  email?: string;
  phone?: string;
  status?: "active" | "inactive";
}

interface UserTableProps {
  users: User[];
  onDelete?: (id: string) => void;
  onStatusChange?: (id: string, status: "active" | "inactive") => Promise<void> | void;
}

export default function UserTable({ users, onDelete, onStatusChange }: UserTableProps) {
  const [localStatus, setLocalStatus] = useState<Record<string, string>>({});

  useEffect(() => {
    setLocalStatus(Object.fromEntries((users || []).map((u) => [u.id, u.status ?? "active"])));
  }, [users]);

  const handleStatusChange = async (id: string, next: string) => {
    setLocalStatus((s) => ({ ...s, [id]: next }));
    if (onStatusChange) {
      try {
        await onStatusChange(id, next as "active" | "inactive");
      } catch (e) {
        setLocalStatus((s) => ({ ...s, [id]: users.find((x) => x.id === id)?.status ?? "active" }));
      }
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl border p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Danh sách người dùng</h2>
        <p className="text-sm text-gray-500">Quản lý tài khoản khách hàng</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-t border-gray-200 table-fixed">
          <colgroup>
            <col style={{ width: "28%" }} />
            <col style={{ width: "22%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "8%" }} />
          </colgroup>

          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr className="border-b">
              <th className="text-left px-4 py-2">Tên người dùng</th>
              <th className="text-left px-4 py-2">Địa chỉ</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">SĐT</th>
              <th className="text-left px-4 py-2">Trạng thái</th>
              <th className="text-left px-4 py-2">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {(users || []).map((u) => (
              <tr key={u.id} data-id={u.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-800 font-medium truncate">{u.name}</td>
                <td className="px-4 py-3 text-gray-600 truncate" title={u.address}>{u.address ?? "-"}</td>
                <td className="px-4 py-3 text-gray-600 truncate" title={u.email}>{u.email ?? "-"}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{u.phone ?? "-"}</td>
                <td className="px-4 py-3">
                  <Select value={localStatus[u.id] ?? (u.status ?? "active")} onValueChange={(val) => handleStatusChange(u.id, val)}>
                    <SelectTrigger
                      className={cn(
                        "h-8 rounded-md px-3 text-sm font-medium flex items-center py-0 leading-none w-full",
                        (localStatus[u.id] ?? u.status) === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      )}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Còn hoạt động</SelectItem>
                      <SelectItem value="inactive">Ngừng hoạt động</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1 hover:bg-red-100 hover:text-red-600" onClick={() => onDelete?.(u.id)}>
                      <Trash2 className="w-4 h-4" />
                      Xóa
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
