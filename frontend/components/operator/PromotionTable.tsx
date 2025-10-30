"use client";

import { Calendar, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SuKienUuDai } from "@/lib/types";

interface PromotionTableProps {
  promotions: SuKienUuDai[];
  onEdit?: (promo: SuKienUuDai) => void;
}

export default function PromotionTable({
  promotions,
  onEdit,
}: PromotionTableProps) {
  const formatDate = (date: Date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hour = String(d.getHours()).padStart(2, "0");
    const minute = String(d.getMinutes()).padStart(2, "0");
    return `${hour}:${minute} ${day}/${month}/${year}`;
  };
  return (
    <div className="bg-gray-50 rounded-xl border p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Danh sách sự kiện ưu đãi
        </h2>
        <p className="text-sm text-gray-500">
          Quản lý các chương trình khuyến mãi và ưu đãi
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-lg border-t border-gray-200">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr className="border-b">
              <th className="text-left px-4 py-2">Tên sự kiện</th>
              <th className="text-left px-4 py-2">Ngày phát hành</th>
              <th className="text-left px-4 py-2">Ngày kết thúc</th>
              <th className="text-left px-4 py-2">Phần trăm giảm</th>
              <th className="text-left px-4 py-2">Mô tả</th>
              <th className="text-left px-4 py-2">Trạng thái</th>
              <th className="text-left px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promo, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2 text-gray-700 w-1/8">{promo.TenSK}</td>
                <td className="px-4 py-2 text-gray-600 w-1/8">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                    {formatDate(promo.NgayPH)}
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-600 w-1/8">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                    {formatDate(promo.NgayKT)}
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-800 font-medium flex justify-center w-1/8">
                  {promo.PhanTramGiam}%
                </td>
                <td className="px-4 py-2 text-gray-800 font-medium w-2/8">
                  {promo.MoTa}
                </td>
                <td className="px-4 py-2 w-1/8">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      promo.TrangThai === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {promo.TrangThai === "ACTIVE"
                      ? "Còn hoạt động"
                      : "Tạm dừng"}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => onEdit?.(promo)}
                  >
                    <Pencil className="w-4 h-4" />
                    Chỉnh sửa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
