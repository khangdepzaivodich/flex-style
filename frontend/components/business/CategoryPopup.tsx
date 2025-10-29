"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";

interface CategoryData {
  id: string; // Mã danh mục
  name: string; // Tên danh mục
  type?: string; // Loại danh mục
  active?: boolean; // Hoạt động hay không
}

interface CategoryPopupProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: CategoryData) => void;
  initialData?: CategoryData | null;
}

export default function CategoryPopup({ open, onClose, onSave, initialData }: CategoryPopupProps) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("Áo");
  const [active, setActive] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Khi mở popup hoặc dữ liệu ban đầu thay đổi, cập nhật trạng thái
  useEffect(() => {
    if (open && initialData) {
      setId(initialData.id ?? "");
      setName(initialData.name ?? "");
      setType(initialData.type ?? "Áo");
      setActive(typeof initialData.active === 'boolean' ? initialData.active : true);
      setErrors({});
    } else if (!open) {
      setId("");
      setName("");
      setType("Áo");
      setActive(true);
      setErrors({});
    }
  }, [open, initialData]);

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!name || !name.trim()) e.name = 'Tên danh mục không được để trống';
    if (!type || !type.trim()) e.type = 'Vui lòng chọn loại';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // tạo id ngẫu nhiên nếu không có id
  const genId = () => {
    try {
      // @ts-ignore
      if (typeof crypto !== 'undefined' && typeof (crypto as any).randomUUID === 'function') return (crypto as any).randomUUID();
    } catch (e) {
      // ignore
    }
    return `cat_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm / Chỉnh sửa danh mục</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Tên danh mục</label>
            <Input
              className={errors.name ? 'border-red-300 focus:border-red-500' : ''}
              placeholder="Nhập tên danh mục"
              value={name}
              onChange={(e) => {
                setName((e.target as HTMLInputElement).value);
                if (errors.name) {
                  setErrors((prev) => {
                    const c = { ...prev };
                    delete c.name;
                    return c;
                  });
                }
              }}
            />
            {errors.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-1 block">Loại</label>
            <Select
              value={type}
              onValueChange={(v) => {
                setType(v);
                if (errors.type) {
                  setErrors((prev) => {
                    const c = { ...prev };
                    delete c.type;
                    return c;
                  });
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn loại danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Áo">Áo</SelectItem>
                <SelectItem value="Quần">Quần</SelectItem>
                <SelectItem value="Phụ kiện">Phụ kiện</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && <div className="text-xs text-red-600 mt-1">{errors.type}</div>}
          </div>
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Trạng thái</label>
            <Select value={active ? "active" : "inactive"} onValueChange={(v) => setActive(v === "active") }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Hoạt động</SelectItem>
                <SelectItem value="inactive">Không hoạt động</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" className="hover:bg-red-500 flex items-center gap-2" onClick={onClose}>
            <X className="w-4 h-4" />
            Hủy
          </Button>
          <Button className="bg-[#8B5CF6] text-white flex items-center gap-2" onClick={() => {
            if (!validate()) return;
            const finalId = id && id.trim() ? id : genId();
            onSave({ id: finalId, name, type, active });
          }}>
            <Save className="w-4 h-4" />
            Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
