"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ReceiptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReceiptModal({ open, onOpenChange }: ReceiptModalProps) {
  const [formData, setFormData] = useState({
    supplier: "",
    warehouse: "",
    product: "",
    quantity: "",
    unitPrice: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Receipt form submitted:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Tạo phiếu nhập hàng</DialogTitle>
          <DialogDescription>
            Nhập thông tin phiếu nhập hàng mới
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="supplier">Nhà cung cấp</Label>
              <Select
                value={formData.supplier}
                onValueChange={(value) =>
                  setFormData({ ...formData, supplier: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn nhà cung cấp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplier1">
                    Công ty TNHH Vải Việt
                  </SelectItem>
                  <SelectItem value="supplier2">Nhà máy dệt Hà Nội</SelectItem>
                  <SelectItem value="supplier3">Fashion Import Co.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="warehouse">Kho hàng</Label>
              <Select
                value={formData.warehouse}
                onValueChange={(value) =>
                  setFormData({ ...formData, warehouse: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn kho" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kho-a">Kho A - Hà Nội</SelectItem>
                  <SelectItem value="kho-b">Kho B - TP.HCM</SelectItem>
                  <SelectItem value="kho-c">Kho C - Đà Nẵng</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product">Sản phẩm</Label>
            <Select
              value={formData.product}
              onValueChange={(value) =>
                setFormData({ ...formData, product: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn sản phẩm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product1">Áo sơ mi trắng</SelectItem>
                <SelectItem value="product2">Quần jean xanh</SelectItem>
                <SelectItem value="product3">Váy hoa mùa hè</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Số lượng</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
                placeholder="0"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unitPrice">Đơn giá</Label>
              <Input
                id="unitPrice"
                type="number"
                value={formData.unitPrice}
                onChange={(e) =>
                  setFormData({ ...formData, unitPrice: e.target.value })
                }
                placeholder="0"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Ghi chú</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Nhập ghi chú (nếu có)"
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Hủy
            </Button>
            <Button type="submit">Tạo phiếu nhập</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
