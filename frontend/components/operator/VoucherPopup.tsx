"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface VoucherPopupProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

export default function VoucherPopup({
  open,
  onClose,
  onSave,
}: VoucherPopupProps) {
  const [form, setForm] = useState({
    name: "VIP VOUCHER",
    code: "VIP999",
    condition: "Chỉ áp dụng cho khách hàng VIP",
    discount: "",
    startDate: "",
    endDate: "",
    freeShip: true,
    status: "Còn hoạt động",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Chỉnh sửa Voucher
          </DialogTitle>
        </DialogHeader>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label className="text-sm">Tên voucher</Label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Tên voucher"
            />
          </div>

          <div>
            <Label className="text-sm">Mã voucher</Label>
            <Input
              value={form.code}
              onChange={(e) => handleChange("code", e.target.value)}
              placeholder="Mã voucher"
            />
          </div>

          <div>
            <Label className="text-sm">Nhập điều kiện ({" > "} giá trị)</Label>
            <Input
              value={form.condition}
              onChange={(e) => handleChange("condition", e.target.value)}
              placeholder="Điều kiện áp dụng"
              type="number"
              min={0}
              step={1000}
            />
          </div>

          <div>
            <Label className="text-sm">Giá tiền</Label>
            <Input
              value={form.discount}
              onChange={(e) => handleChange("discount", e.target.value)}
              placeholder="Số tiền giảm"
            />
          </div>

          <div>
            <Label className="text-sm">Ngày bắt đầu</Label>
            <div className="relative">
              <Calendar className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                className="pl-8"
                value={form.startDate}
                onChange={(e) => handleChange("startDate", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label className="text-sm">Ngày kết thúc</Label>
            <div className="relative">
              <Calendar className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                className="pl-8"
                value={form.endDate}
                onChange={(e) => handleChange("endDate", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Free ship + Trạng thái */}
        <Label className="text-sm">Loại voucher</Label>
        <Select>
          {" "}
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Loại VOUCHER" />
          </SelectTrigger>
          <SelectContent>
            {" "}
            <SelectItem value="FREE_SHIP">Free ship</SelectItem>
            <SelectItem value="DISCOUNT">Giảm giá</SelectItem>
          </SelectContent>
        </Select>

        {/* Footer */}
        <DialogFooter className="flex justify-end gap-3 mt-6">
          <Select
            value={form.status}
            onValueChange={(value) => handleChange("status", value)}
          >
            <SelectTrigger
              className={`flex-1 ${
                form.status === "Còn hoạt động"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              <SelectValue placeholder="Trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-green-500" value="Còn hoạt động">
                Còn hoạt động
              </SelectItem>
              <SelectItem className="text-red-500" value="Tạm dừng">
                Tạm dừng
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            className="hover:bg-red-500"
            onClick={onClose}
          >
            ✖ Hủy
          </Button>
          <Button
            className="bg-purple-500 hover:bg-purple-600 text-white"
            onClick={handleSubmit}
          >
            💾 Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
