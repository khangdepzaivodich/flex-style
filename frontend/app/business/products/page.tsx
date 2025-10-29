"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductTable from "@/components/business/ProductTable";
import ProductPopup from "@/components/business/ProductPopup";
import ProductViewPopup from "@/components/business/ProductViewPopup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter as FilterIcon } from "lucide-react";


const sampleProducts: any[] = [];

export default function ProductsPage() {
	const [open, setOpen] = useState(false); // trạng thái mở popup thêm/chỉnh sửa
	const [editing, setEditing] = useState<any | null>(null); // trạng thái sản phẩm đang chỉnh sửa
	const [viewProduct, setViewProduct] = useState<any | null>(null); // trạng thái xem chi tiết sản phẩm

	enum Filter {
		All = "all",
		Active = "active",
		Inactive = "inactive",
	}

	const [filter, setFilter] = useState<Filter>(Filter.All); // Trạng thái lọc sản phẩm
	const [products, setProducts] = useState(() => sampleProducts); // Khởi tạo với danh sách sản phẩm mẫu
	const [search, setSearch] = useState<string>(""); // Tìm kiếm theo mã hoặc tên

	// Lọc sản phẩm theo trạng thái
	const filtered = products.filter((p) => {
		if (filter === Filter.All) return true;
		if (filter === Filter.Active) return (p.status ?? '').toString() === 'ACTIVE';
		if (filter === Filter.Inactive) return (p.status ?? '').toString() === 'INACTIVE';
		return true;
	});

	//tìm kiếm theo mã hoặc tên
	const searched = useMemo(() => {
		const q = (search ?? "").trim().toLowerCase();
		if (!q) return filtered;
		return filtered.filter((p) => {
			const id = String(p.id ?? "").toLowerCase();
			const name = String(p.name ?? "").toLowerCase();
			return id.includes(q) || name.includes(q);
		});
	}, [filtered, search]);

	const handleSave = (data: any) => {
		// Kiểm tra trùng mã sản phẩm hoặc tên sản phẩm
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

	const status = data.status;
	// Cập nhật hoặc thêm mới sản phẩm.
	let newItem: any;
	if (editing && editing.id === data.id) {
			// Đảm bảo rằng bất kỳ kích thước nào bị bỏ chọn trong chỉnh sửa sẽ bị xóa vĩnh viễn.
			const sizesFromPayload: string[] = Array.isArray(data.size) ? data.size : (data.size ? [data.size] : []);
			let payloadVariants: any[] = Array.isArray((data as any).variants) ? (data as any).variants : [];
			// Giữ lại chỉ những variant có size nằm trong danh sách size hiện tại của sản phẩm
			payloadVariants = payloadVariants.filter((pv) => pv && pv.size && sizesFromPayload.includes(String(pv.size)));
			// Áp dụng detailStatus từ payload
			const finalVariants = payloadVariants.map((pv) => ({ ...pv, detailStatus: (pv.detailStatus ?? pv.status) }));
			newItem = { ...data, status, variants: finalVariants };
	} else {
		newItem = { ...data, status };
	}
		// Cập nhật trạng thái sản phẩm trong danh sách
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
			// Mở popup chỉnh sửa với dữ liệu sản phẩm đã chọn
			setEditing(p);
		}
	};

	// Xem chi tiết sản phẩm
	const handleViewOpen = (id: string) => {
		const p = products.find((x) => x.id === id);
		if (p) setViewProduct(p);
	};

	useEffect(() => {
		if (editing) setOpen(true);
	}, [editing]);

	return (
		<main className="space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 w-full max-w-2xl">
					<div className="relative w-full max-w-md">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
						<Input
							placeholder="Tìm kiếm theo mã hoặc tên..."
							className="pl-10 bg-muted border-0 w-full"
							value={search}
							onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
						/>
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
								<SelectItem value={Filter.Active}>Đang hoạt động</SelectItem>
								<SelectItem value={Filter.Inactive}>Ngừng hoạt động</SelectItem>
							</SelectContent>
						</Select>
				</div>
			</div>

			<ProductTable products={searched} onEdit={handleEdit} onDelete={handleDelete} onView={handleViewOpen} />

			<ProductPopup open={open} onClose={() => { setOpen(false); setEditing(null); }} onSave={handleSave} initialData={editing ?? undefined} />

			<ProductViewPopup open={Boolean(viewProduct)} product={viewProduct} onClose={() => setViewProduct(null)} />
		</main>
	);
}
