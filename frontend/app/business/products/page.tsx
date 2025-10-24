"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductTable from "@/components/business/ProductTable";
import ProductPopup from "@/components/business/ProductPopup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter as FilterIcon } from "lucide-react";


const sampleProducts: any[] = [];

export default function ProductsPage() {
	const [open, setOpen] = useState(false);
	const [editing, setEditing] = useState<any | null>(null);

	enum Filter {
		All = "all",
		ConHang = "conhang",
		SapHet = "saphet",
		RatIt = "ratit",
	}

	const [filter, setFilter] = useState<Filter>(Filter.All);
	const [products, setProducts] = useState(() => sampleProducts);

	// Tính trạng thái sản phẩm dựa trên tồn kho và tồn tối thiểu
	const computeStatus = (stock?: number, minStock?: number) => {
		const s = stock ?? 0;
		const m = minStock ?? 1;
		if (s === m) return "Sắp hết";
		const ratio = s / m;
		if (ratio >= 0.7) return "Còn hàng";
		if (ratio >= 0.3) return "Sắp hết";
		return "Rất ít";
	};
	// Lọc sản phẩm theo trạng thái sử dụng cùng hàm computeStatus để đảm bảo nhất quán
	const filtered = products.filter((p) => {
		if (filter === Filter.All) return true;
		const status = computeStatus(p.stock, p.minStock);
		if (filter === Filter.ConHang) return status === "Còn hàng";
		if (filter === Filter.SapHet) return status === "Sắp hết";
		if (filter === Filter.RatIt) return status === "Rất ít";
		return true;
	});

	const handleSave = (data: any) => {
		if (typeof data.minStock === "number" && data.minStock <= 50) {
			alert("Số lượng tồn tối thiểu phải lớn hơn 50.");
			return;
		}
		const duplicateFields: string[] = [];
		for (const p of products) {
			if (editing && p.id === editing.id) continue;
			if (p.id === data.id) duplicateFields.push("Mã sản phẩm");
			if (p.name === data.name) duplicateFields.push("Tên sản phẩm");
		}

		if (duplicateFields.length > 0) {
			const uniq = Array.from(new Set(duplicateFields));
			alert(`Thông tin trùng: ${uniq.join(', ')}. Vui lòng sửa trước khi lưu.`);
			return;
		}

		const status = computeStatus(data.stock, data.minStock);
		const newItem = { ...data, status };
		setProducts((prev) => {
			const exists = prev.some((p) => p.id === newItem.id);
			if (exists) {
				return prev.map((p) => (p.id === newItem.id ? newItem : p));
			}
			return [newItem, ...prev];
		});
		setOpen(false);
		setEditing(null);
	};

	const handleDelete = (id: string) => {
		setProducts((prev) => prev.filter((p) => p.id !== id));
	};

	const handleEdit = (id: string) => {
		const p = products.find((x) => x.id === id);
		if (p) {
			setEditing(p);
			setOpen(true);
		}
	};

	return (
		<main className="space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 w-full max-w-2xl">
					<div className="relative w-full max-w-md">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
						<Input placeholder="Tìm kiếm..." className="pl-10 bg-muted border-0 w-full" />
					</div>
					<Button onClick={() => { setEditing(null); setOpen(true); }}>Thêm sản phẩm</Button>
				</div>

				<div className="flex items-center">
					<Select onValueChange={(v) => setFilter(v as Filter)} defaultValue={Filter.All}>
						<SelectTrigger className="w-48 relative pl-9 border-gray-200">
							<FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
							<SelectValue placeholder="Tất cả" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value={Filter.All}>Tất cả</SelectItem>
							<SelectItem value={Filter.ConHang}>Còn hàng</SelectItem>
							<SelectItem value={Filter.SapHet}>Sắp hết</SelectItem>
							<SelectItem value={Filter.RatIt}>Rất ít</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<ProductTable products={filtered} onEdit={handleEdit} onDelete={handleDelete} />

			<ProductPopup open={open} onClose={() => { setOpen(false); setEditing(null); }} onSave={handleSave} initialData={editing ?? undefined} />
		</main>
	);
}
