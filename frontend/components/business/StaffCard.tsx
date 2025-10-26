"use client";

import React from "react";
import { Edit, Mail, User, UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StaffMember from "@/interfaces/staffMember";
export type StaffCardProps = {
  id: string; // id của cái card đó
  name: string; // tên nhân viên
  userName: string; // tên đăng nhập
  email: string;
  position: string; // Chức vụ
  status?: "ACTIVE" | "INACTIVE"; // Trạng thái nhân viên
  onEdit?: (staff: StaffMember) => void;
};

export default function StaffCard({
  id,
  name,
  email,
  position,
  status = "ACTIVE",
  userName,
  onEdit,
}: StaffCardProps) {
  return (
    <div
      className={
        "w-full rounded-lg border border-card-border bg-transparent px-5 pt-3 pb-6 relative"
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0 flex flex-col justify-start min-h-16">
          <div className="text-sm text-muted-foreground grid grid-cols-1 gap-1">
            {name && (
              <div className="text-xl font-semibold text-black">{name}</div>
            )}
            {position && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <UserRoundPen className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{position}</span>
              </div>
            )}

            {email && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{email}</span>
              </div>
            )}

            {userName && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{userName}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-shrink-0 self-start mt-1">
          <div
            className={cn(
              "text-sm font-medium px-3 py-1 rounded-full",
              status === "ACTIVE"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            )}
          >
            {status === "ACTIVE" ? "Còn hoạt động" : "Ngừng hoạt động"}
          </div>
        </div>
      </div>

      <div className="absolute right-3 bottom-2 flex items-center gap-2">
        <Button
          size="sm"
          variant="ghost"
          className="border-2 border-black border-opacity-50"
          onClick={() =>
            onEdit?.({
              MaTK: id,
              DisplayName: name,
              Email: email,
              VAITRO: position,
              Status: status,
              Username: userName,
              updated_at: new Date().toISOString(), // current timestamp
            })
          }
        >
          <Edit className="h-3 w-3 mr-1" />
          <span className="text-sm">Chỉnh sửa</span>
        </Button>
      </div>
    </div>
  );
}
