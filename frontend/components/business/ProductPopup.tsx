"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";

interface ProductData {
	id: string;
	name: string;
	category?: string;
	stock?: number;
	minStock?: number;
	price?: number;
}

interface ProductPopupProps {
	open: boolean;
	onClose: () => void;
	onSave: (data: ProductData) => void;
	initialData?: ProductData | null;
}

export default function ProductPopup({ open, onClose, onSave, initialData }: ProductPopupProps) {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [id, setId] = useState("");
	const [stock, setStock] = useState<number | undefined>(undefined);
	const [minStock, setMinStock] = useState<number | undefined>(undefined);
	const [price, setPrice] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (open && initialData) {
			setId(initialData.id ?? "");
			setName(initialData.name ?? "");
			setCategory(initialData.category ?? "");
			setStock(typeof initialData.stock === "number" ? initialData.stock : undefined);
			setMinStock(typeof initialData.minStock === "number" ? initialData.minStock : undefined);
			setPrice(typeof initialData.price === "number" ? initialData.price : undefined);
		} else if (!open) {
			setId("");
			setName("");
			setCategory("");
			setStock(undefined);
			setMinStock(undefined);
			setPrice(undefined);
		}
	}, [open, initialData]);

	return (
		<Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Thêm sản phẩm</DialogTitle>
				</DialogHeader>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Tên sản phẩm</label>
						<Input placeholder="Nhập tên sản phẩm" value={name} onChange={(e) => setName((e.target as HTMLInputElement).value)} />
					</div>
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Mã sản phẩm</label>
						<Input placeholder="Nhập mã sản phẩm" value={id} onChange={(e) => setId((e.target as HTMLInputElement).value)} />
					</div>

					<div>
						<label className="text-sm text-gray-700 mb-1 block">Chọn danh mục</label>
						<Select value={category} onValueChange={(v) => setCategory(v)}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Chọn danh mục" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Danh mục 1">Danh mục 1</SelectItem>
								<SelectItem value="Danh mục 2">Danh mục 2</SelectItem>
								<SelectItem value="Danh mục 3">Danh mục 3</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Giá bán</label>
						<Input placeholder="Nhập giá bán" type="number" value={price ?? ""} onChange={(e) => setPrice((e.target as HTMLInputElement).value ? Number((e.target as HTMLInputElement).value) : undefined)} />
					</div>

					<div>
						<label className="text-sm text-gray-700 mb-1 block">Số lượng tồn kho</label>
						<Input placeholder="Nhập số lượng tồn kho" type="number" value={stock ?? ""} onChange={(e) => setStock((e.target as HTMLInputElement).value ? Number((e.target as HTMLInputElement).value) : undefined)} />
					</div>
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Tồn tối thiểu</label>
						<Input placeholder="Nhập tồn tối thiểu" type="number" value={minStock ?? ""} onChange={(e) => setMinStock((e.target as HTMLInputElement).value ? Number((e.target as HTMLInputElement).value) : undefined)} />
					</div>
				</div>
				<DialogFooter>
					<Button variant="outline" className="hover:bg-red-500 flex items-center gap-2" onClick={onClose}>
						<X className="w-4 h-4" />
						Hủy
					</Button>
					<Button className="bg-[#8B5CF6] text-white flex items-center gap-2" onClick={() => onSave({ id, name, category, stock, minStock, price })}>
						<Save className="w-4 h-4" />
						Lưu
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
