"use client";

import React from "react";
import { Edit, XIcon, Briefcase, CreditCard, Mail, Phone, Hash, User, UserRoundPen, IdCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import StaffPopup from "./StaffPopup";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type StaffCardProps = {
  id?: string | number;
  name: string;
  nationalId?: string; // Số căn cước công dân / CMND
  email?: string;
  phone?: string;
  accountCode?: string; // Mã tài khoản
  position?: string; // Chức vụ
  status?: "active" | "inactive"; // Trạng thái nhân viên
  onEdit?: (id?: string | number) => void;
  onDelete?: (id?: string | number) => void;
};

export default function StaffCard({
  id,
  name,
  nationalId,
  email,
  phone,
  accountCode,
  position,
  status = "active",
  
  onEdit,
  onDelete,
}: StaffCardProps) {
  // Local popup removed — editing is handled at page level

  return (
  <div className={"w-full rounded-lg border border-card-border bg-transparent px-5 pt-3 pb-6 relative"}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0 flex flex-col justify-start min-h-16">
            <div className="text-sm text-muted-foreground grid grid-cols-1 gap-1">
            {name && <div className="text-xl font-semibold text-black">{name}</div>}
            {position && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <UserRoundPen className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{position}</span>
              </div>
            )}
            {nationalId && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <IdCard className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{nationalId}</span>
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
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{accountCode}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-shrink-0 self-start mt-1">
          <div
            className={cn(
              "text-sm font-medium px-3 py-1 rounded-full",
              status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            )}
          >
            {status === "active" ? "Còn hoạt động" : "Ngừng hoạt động"}
          </div>
        </div>
      </div>

      <div className="absolute right-3 bottom-2 flex items-center gap-2">
        <Button size="sm" variant="ghost" className="border-2 border-black border-opacity-50" onClick={() => onEdit?.(id)}>
          <Edit className="h-3 w-3 mr-1" />
          <span className="text-sm">Chỉnh sửa</span>
        </Button>
        <Button size="sm" variant="ghost" className="border-2 border-black border-opacity-50" onClick={() => onDelete?.(id)}>
          <XIcon className="h-3 w-3 mr-1" />
          <span className="text-sm">Xóa</span>
        </Button>
      </div>

      {/* Popup moved to page-level; StaffCard just displays data and delegates edit/delete to parent */}
    </div>
  );
}
