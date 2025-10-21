"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductTable from "@/components/business/ProductTable";
import ProductPopup from "@/components/business/ProductPopup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter as FilterIcon } from "lucide-react";

const sampleProducts = [
	{ id: "P001", name: "Sản phẩm A", category: "Danh mục 1", stock: 50, minStock: 10, price: 120000, status: "Còn hàng" },
	{ id: "P002", name: "Sản phẩm B", category: "Danh mục 2", stock: 5, minStock: 10, price: 80000, status: "Sắp hết" },
	{ id: "P003", name: "Sản phẩm C", category: "Danh mục 1", stock: 2, minStock: 10, price: 45000, status: "Rất ít" },
    { id: "P004", name: "Sản phẩm D", category: "Danh mục 3", stock: 20, minStock: 5, price: 200000, status: "Còn hàng" },
];

export default function ProductsPage() {
	const [open, setOpen] = useState(false);

	enum Filter {
 		All = "all",
 		ConHang = "conhang",
 		SapHet = "saphet",
 		RatIt = "ratit",
 	}

	const [filter, setFilter] = useState<Filter>(Filter.All);

	const filtered = sampleProducts.filter((p) => {
    const stock = p.stock ?? 0;
    const minStock = p.minStock ?? 1;
    const ratio = stock / minStock;

	if (filter === Filter.All)
		return true;
    if (filter === Filter.ConHang)
        return ratio >= 0.7;
    if (filter === Filter.SapHet)
        return ratio >= 0.3 && ratio < 0.7;
    if (filter === Filter.RatIt)
        return ratio < 0.3;
    return true;
});

	return (
			<main className="space-y-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3 w-full max-w-2xl">
						<div className="relative w-full max-w-md">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
							<Input placeholder="Tìm kiếm..." className="pl-10 bg-muted border-0 w-full" />
						</div>
						<Button onClick={() => setOpen(true)}>Thêm sản phẩm</Button>
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

			<ProductTable products={filtered} onEdit={(id) => {}} onDelete={(id) => {}} />

			<ProductPopup open={open} onClose={() => setOpen(false)} onSave={(data) => {setOpen(false); }} />
		</main>
	);
}
