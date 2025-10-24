"use client";

import { Pencil, SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
	id: string;
	name: string;
	category?: string;
	stock?: number;
	minStock?: number;
	price?: number;
	status?: "Còn hàng" | "Sắp hết" | "Rất ít" | string;
}

interface ProductTableProps {
	products: Product[];
	onEdit?: (id: string) => void;
	onDelete?: (id: string) => void;
}

export default function ProductTable({
	products,
	onEdit,
	onDelete,
}: ProductTableProps) {
	return (
		<div className="bg-gray-50 rounded-xl border p-6">
			<div className="mb-4">
				<h2 className="text-xl font-semibold text-gray-800">Danh sách sản phẩm</h2>
				<p className="text-sm text-gray-500">Quản lý thông tin sản phẩm</p>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full text-sm border-t border-gray-200 table-fixed">
					<colgroup>
						<col style={{ width: '8%' }} />
						<col style={{ width: '20%' }} />
						<col style={{ width: '12%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '12%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '8%' }} />
					</colgroup>
					<thead className="bg-gray-100 text-gray-700 font-medium">
						<tr className="border-b">
							<th className="text-left px-4 py-2">Mã SP</th>
							<th className="text-left px-4 py-2">Tên sản phẩm</th>
							<th className="text-left px-4 py-2">Danh mục</th>
							<th className="text-left px-4 py-2">Tồn kho</th>
							<th className="text-left px-4 py-2">Tồn tối thiểu</th>
							<th className="text-left px-4 py-2">Giá bán</th>
							<th className="text-left px-4 py-2">Trạng thái</th>
							<th className="text-left px-4 py-2">Thao tác</th>
						</tr>
					</thead>
					<tbody>
						{products.map((p, idx) => (
							<tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
								<td className="px-4 py-2 text-gray-700 text-left">{p.id}</td>
								<td className="px-4 py-2 text-gray-800 font-medium text-left">{p.name}</td>
								<td className="px-4 py-2 text-gray-600 text-left">{p.category ?? "-"}</td>
								<td className="px-4 py-2 text-left">{typeof p.stock === "number" ? p.stock : "-"}</td>
								<td className="px-4 py-2 text-left">{typeof p.minStock === "number" ? p.minStock : "-"}</td>
								<td className="px-4 py-2 text-gray-800 text-left">{typeof p.price === "number" ? new Intl.NumberFormat('vi-VN').format(p.price) + ' đ' : "-"}</td>
												<td className="px-4 py-2">
													<span
														className={`px-3 py-1 rounded-full text-xs font-medium ${
															p.status === "Còn hàng"
																? "bg-green-100 text-green-700"
																: p.status === "Sắp hết"
																? "bg-amber-100 text-amber-700"
																: p.status === "Rất ít"
																? "bg-red-100 text-red-600"
																: "bg-gray-100 text-gray-700"
														}`}
													>
														{p.status ?? "-"}
													</span>
												</td>
								<td className="px-4 py-2 flex gap-2">
									<Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => onEdit?.(p.id)}>
										<SquarePen className="w-4 h-4" />
										Chỉnh sửa
									</Button>
									<Button size="sm" variant="outline" className="flex items-center gap-1 hover:bg-red-100 hover:text-red-600" onClick={() => onDelete?.(p.id)}>
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
