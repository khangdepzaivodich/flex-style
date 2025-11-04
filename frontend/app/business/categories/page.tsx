"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter as FilterIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import CategoriesTable from "@/components/business/CategoriesTable";
import CategoryPopup from "@/components/business/CategoryPopup";

const sampleCategories = [
	{ id: 'DM001', name: 'Áo 3 lỗ', type: 'Áo', active: true },
	{ id: 'DM002', name: 'Quần 3 lỗ', type: 'Quần', active: false },
	{ id: 'DM003', name: 'Vòng đeo tay', type: 'Phụ kiện', active: true },
];

export default function CategoriesPage() {
	const [open, setOpen] = useState(false);
	const [editing, setEditing] = useState<any | null>(null);
	const [categories, setCategories] = useState(() => sampleCategories);
	const [query, setQuery] = useState("");

    // Lọc danh mục dựa trên từ khóa tìm kiếm
	const [typeFilter, setTypeFilter] = useState<'all' | 'Áo' | 'Quần' | 'Phụ kiện'>('all');

	const filtered = categories.filter((c) => {
		// Lọc theo tìm kiếm chung
		if (query) {
			const q = query.toLowerCase();
			if (!((c.id ?? "").toLowerCase().includes(q) || 
                (c.name ?? "").toLowerCase().includes(q) || 
                (c.type ?? "").toLowerCase().includes(q))) {
				return false;
			}
		}
		// Lọc theo tìm kiếm loại
		if (typeFilter !== 'all') {
			return c.type === typeFilter;
		}
		return true;
	});

	// Kiểm tra thông tin trùng lặp trước khi lưu
	const handleSave = (data: any) => {
		const normalize = (s?: string) => (s ?? "").toString().replace(/\s+/g, ' ').trim();
		const normId = normalize(data.id);
		const normName = normalize(data.name);
		const normType = normalize(data.type) || 'Áo';

		if (!normId || !normName || !normType) {
			alert('Vui lòng điền đầy đủ Mã, Tên và Loại danh mục.');
			return;
		}

	    // Chuẩn hóa dữ liệu trước khi lưu
		data.id = normId;
		data.name = normName;
		data.type = normType;

		const duplicates: string[] = [];
		for (const c of categories) {
			if (editing && c.id === editing.id) continue;
			if (normalize(c.id) === normId) duplicates.push('Mã danh mục');
			if (normalize(c.name) === normName) duplicates.push('Tên danh mục');
		}

		if (duplicates.length > 0) {
			alert(`Thông tin trùng: ${Array.from(new Set(duplicates)).join(', ')}`);
			return;
		}

		setCategories((prev) => {
			if (editing) {
				return prev.map((p) => (p.id === editing.id ? data : p));
			}
			return [data, ...prev];
		});

		setOpen(false);
		setEditing(null);
	};
	const handleDelete = (id: string) => {
		if (!confirm('Xác nhận xóa danh mục này?')) return;
		setCategories((prev) => prev.filter((p) => p.id !== id));
	};

	const handleEdit = (id: string) => {
		const c = categories.find((x) => x.id === id);
		if (c) {
			setEditing(c);
			setOpen(true);
		}
	};

	return (
		<main className="space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 w-full max-w-2xl">
					<div className="relative w-full max-w-md">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
						<Input placeholder="Tìm kiếm..." className="pl-10 bg-muted border-0 w-full" value={query} onChange={(e) => setQuery((e.target as HTMLInputElement).value)} />
					</div>
					<Button onClick={() => { setEditing(null); setOpen(true); }}>Thêm danh mục</Button>
				</div>

				<div className="flex items-center">
					<Select onValueChange={(v) => setTypeFilter(v as any)} defaultValue="all">
						<SelectTrigger className="w-48 relative pl-9 border-gray-200">
							<FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
							<SelectValue placeholder="Tất cả loại" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Tất cả</SelectItem>
							<SelectItem value="Áo">Áo</SelectItem>
							<SelectItem value="Quần">Quần</SelectItem>
							<SelectItem value="Phụ kiện">Phụ kiện</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="mt-6">
				<CategoriesTable categories={filtered} onEdit={handleEdit} onDelete={handleDelete} />
			</div>
			

			<CategoryPopup open={open} onClose={() => { setOpen(false); setEditing(null); }} onSave={handleSave} initialData={editing ?? undefined} />
		</main>
	);
}

