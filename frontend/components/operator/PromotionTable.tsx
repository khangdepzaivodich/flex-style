"use client";

import { Calendar, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Promotion {
  id: string;
  name: string;
  discount: string;
  startDate: string;
  endDate: string;
  status: "Đang hoạt động" | "Ngừng hoạt động";
}

interface PromotionTableProps {
  promotions: Promotion[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function PromotionTable({
  promotions,
  onEdit,
  onDelete,
}: PromotionTableProps) {
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
        <table className="min-w-full text-sm border-t border-gray-200">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr className="border-b">
              <th className="text-left px-4 py-2">Mã sự kiện</th>
              <th className="text-left px-4 py-2">Tên sự kiện</th>
              <th className="text-left px-4 py-2">Giảm giá</th>
              <th className="text-left px-4 py-2">Thời gian</th>
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
                <td className="px-4 py-2 text-gray-700">{promo.id}</td>
                <td className="px-4 py-2 text-gray-800 font-medium">
                  {promo.name}
                </td>
                <td className="px-4 py-2 text-red-500 font-semibold">
                  {promo.discount}
                </td>
                <td className="px-4 py-2 text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                  {promo.startDate}
                  <span className="mx-1 text-gray-400">đến</span>
                  {promo.endDate}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      promo.status === "Đang hoạt động"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {promo.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => onEdit?.(promo.id)}
                  >
                    <Pencil className="w-4 h-4" />
                    Chỉnh sửa
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="flex items-center gap-1 bg-red-500 hover:bg-red-600"
                    onClick={() => onDelete?.(promo.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Xóa
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
