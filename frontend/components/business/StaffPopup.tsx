"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { X, Save } from "lucide-react";

type StaffData = {
  fullName?: string;
  phone?: string;
  email?: string;
  cccd?: string;
  accountCode?: string;
  password?: string;
  confirmPassword?: string;
  position?: string;
  status?: string;
};

type StaffPopupProps = {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: StaffData | null;
};

export default function StaffPopup({ open, onClose, onSave, initialData }: StaffPopupProps) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    cccd: "",
    accountCode: "",
    password: "",
    confirmPassword: "",
    position: "Nhân viên CSKH",
    status: "Hoạt động",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  useEffect(() => {
    if (open && initialData) {
      setForm((f) => ({
        ...f,
        fullName: initialData.fullName ?? "",
        phone: initialData.phone ?? "",
        email: initialData.email ?? "",
        cccd: initialData.cccd ?? "",
        accountCode: initialData.accountCode ?? "",
        password: "",
        confirmPassword: "",
        position: initialData.position ?? f.position,
        status: initialData.status ?? f.status,
      }));
    } else if (!open) {
      setForm({
        fullName: "",
        phone: "",
        email: "",
        cccd: "",
        accountCode: "",
        password: "",
        confirmPassword: "",
        position: "Nhân viên",
        status: "Hoạt động",
      });
    }
  }, [open, initialData]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Thêm nhân viên</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label className="text-sm">Họ và tên</Label>
            <Input value={form.fullName} onChange={(e) => handleChange("fullName", e.target.value)} placeholder="Họ và tên" />
          </div>

          <div>
            <Label className="text-sm">Số điện thoại</Label>
            <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Số điện thoại" />
          </div>

          <div className="col-span-2">
            <Label className="text-sm">Email</Label>
            <Input value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Email" />
          </div>

          <div>
            <Label className="text-sm">Số căn cước (CCCD)</Label>
            <Input value={form.cccd} onChange={(e) => handleChange("cccd", e.target.value)} placeholder="Số căn cước" />
          </div>

          <div>
            <Label className="text-sm">Mã tài khoản</Label>
            <Input value={form.accountCode} onChange={(e) => handleChange("accountCode", e.target.value)} placeholder="Mã tài khoản" />
          </div>

          <div>
            <Label className="text-sm">Mật khẩu</Label>
            <Input value={form.password} onChange={(e) => handleChange("password", e.target.value)} placeholder="Mật khẩu" type="password" />
          </div>

          <div>
            <Label className="text-sm">Nhập lại mật khẩu</Label>
            <Input value={form.confirmPassword} onChange={(e) => handleChange("confirmPassword", e.target.value)} placeholder="Nhập lại mật khẩu" type="password" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Select value={form.position} onValueChange={(v) => handleChange("position", v)}>
            <SelectTrigger className="w-full bg-[#8B5CF6] text-white [&_svg]:!text-white [&_svg]:!opacity-100">
              <SelectValue placeholder="Chức vụ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nhân viên CSKH">Nhân viên CSKH</SelectItem>
              <SelectItem value="Nhân viên vận hành">Nhân viên vận hành</SelectItem>
            </SelectContent>
          </Select>

          <Select value={form.status} onValueChange={(v) => handleChange("status", v)}>
            <SelectTrigger className="w-full bg-[#8B5CF6] text-white [&_svg]:!text-white [&_svg]:!opacity-100">
              <SelectValue placeholder="Trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hoạt động">Hoạt động</SelectItem>
              <SelectItem value="Tạm dừng">Tạm dừng</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="flex justify-end gap-3 mt-6">
          <Button variant="ghost" className="hover:bg-red-500 flex items-center gap-2" onClick={onClose}>
            <X className="w-4 h-4" />
            Hủy
          </Button>
          <Button className="bg-[#8B5CF6] text-white flex items-center gap-2" onClick={handleSubmit}>
            <Save className="w-4 h-4" />
            Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
