"use client";

import { Calendar, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface VipVoucherCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  dateRange?: string;
  status?: string;
  code?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function VoucherCard({
  title = "Ma_20%_10/14/25",
  subtitle = "Free Ship",
  description = "Chỉ dành cho khách VIP",
  dateRange = "02/08/2025 - 02/09/2025",
  status = "CÒN HOẠT ĐỘNG",
  code = "VIPFREESHIP",
  onEdit,
  onDelete,
}: VipVoucherCardProps) {
  return (
    <Card className="w-[380px] bg-purple-100 border border-gray-300 shadow-lg rounded-xl">
      <CardContent className="p-5">
        {/* Header */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="mt-1 grid grid-cols-2 gap-1 ">
          <div className="col-span-1">
            <p className="text-lg font-semibold text-indigo-600 mt-1">
              {subtitle}
            </p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>

          {/* Date and status */}
          <div className="flex flex-col items-center justify-between mt-3 col-span-1">
            <div className="flex items-center text-[0.8rem] text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              {dateRange}
            </div>
            <span className="text-green-600 text-sm font-semibold">
              {status}
            </span>
          </div>
        </div>

        {/* Code */}
        <div className="flex justify-around ">
          <p className="text-gray-800 text-base font-semibold mt-4">{code}</p>

          {/* Buttons */}
          <div className="flex gap-2 mt-3 ml-auto">
            <Button
              onClick={onEdit}
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
            >
              <Pencil className="w-4 h-4" />
              Chỉnh sửa
            </Button>
            <Button
              onClick={onDelete}
              size="sm"
              variant="ghost"
              className="flex items-center gap-1 text-red-600 hover:bg-red-500"
            >
              <Trash2 className="w-4 h-4" />
              Xóa
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
