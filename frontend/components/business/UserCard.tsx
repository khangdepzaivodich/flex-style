"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, User as UserIcon, X as XIcon } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type UserCardProps = {
  id?: string | number; // id của cái card người dùng
  name: string; // Tên người dùng
  address?: string; // Địa chỉ
  email?: string; // Email
  phone?: string; // Số điện thoại
  accountCode?: string; // Mã tài khoản
  status?: "active" | "inactive"; // Trạng thái
  onDelete?: (id?: string | number) => void;
  onStatusChange?: (id?: string | number, status?: "active" | "inactive") => void;
};

export default function UserCard({
  id,
  name,
  address,
  email,
  phone,
  accountCode,
  status = "active",
  onDelete,
  onStatusChange,
}: UserCardProps) {
  const [localStatus, setLocalStatus] = useState<typeof status>(status);
  const [saving, setSaving] = useState(false);

  const handleStatusChange = async (val: string) => {
    const next = val as "active" | "inactive";
    setLocalStatus(next);
    if (onStatusChange) {
      setSaving(true);
      try {
        await onStatusChange(id, next);
      } catch (e) {
        setLocalStatus(status);
      } finally {
        setSaving(false);
      }
    }
  };

  return (
    <div className={"w-full rounded-lg border border-card-border bg-transparent px-5 pt-3 pb-6 relative"}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0 flex flex-col justify-start min-h-16">
          <div className="text-sm text-muted-foreground grid grid-cols-1 gap-1">
            {name && <div className="text-xl font-semibold text-black">{name}</div>}
            {address && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{address}</span>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{email}</span>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{phone}</span>
              </div>
            )}
            {accountCode && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{accountCode}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute right-3 bottom-2 flex items-center gap-2">
          <Select value={localStatus} onValueChange={handleStatusChange}>
            <SelectTrigger className={cn(
              "h-8 rounded-md px-3 text-small font-medium flex items-center py-0 leading-none",
              localStatus === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            )}>
              <SelectValue />
            </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Còn hoạt động</SelectItem>
            <SelectItem value="inactive">Ngừng hoạt động</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="ghost" className="border-2 border-black border-opacity-50 h-9" onClick={() => onDelete?.(id)}>
          <XIcon className="h-3 w-3 mr-1" />
          <span className="text-sm">Xóa</span>
        </Button>
      </div>
    </div>
  );
}