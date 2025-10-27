"use client";

import { Pencil, SquarePen, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface Product {
	id: string; // Mã sản phẩm
	name: string; // Tên sản phẩm
	category?: string; // Danh mục
	stock?: number; // Tồn kho
	minStock?: number; // Tồn kho tối thiểu
	price?: number; // Giá sản phẩm
	image?: string; // url or base64 preview (single image)
	color?: string; // màu sản phẩm
	status?: "Còn hàng" | "Sắp hết" | "Rất ít" | string; // Trạng thái sản phẩm
	size?: string;
	description?: string;
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
	const [expanded, setExpanded] = useState<Record<string, boolean>>({});

	function toggleExpand(id: string) {
		setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
	}
	return (
		<div className="bg-gray-50 rounded-xl border p-6">
			<div className="mb-4">
				<h2 className="text-xl font-semibold text-gray-800">Danh sách sản phẩm</h2>
				<p className="text-sm text-gray-500">Quản lý thông tin sản phẩm</p>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full text-sm border-t border-gray-200 table-fixed">
						<colgroup>
							<col style={{ width: '1%' }} />
							<col style={{ width: '8%' }} />
							<col style={{ width: '20%' }} />
							<col style={{ width: '12%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '8%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '8%' }} />
							<col style={{ width: '8%' }} />
						</colgroup>
					<thead className="bg-gray-100 text-gray-700 font-medium">
						<tr className="border-b">
							<th className="text-left px-4 py-2"></th>
							<th className="text-left px-4 py-2">Mã SP</th>
							<th className="text-left px-4 py-2">Tên sản phẩm</th>
							<th className="text-left px-4 py-2">Danh mục</th>
							<th className="text-left px-4 py-2">Tồn kho</th>
							<th className="text-left px-4 py-2">Tồn tối thiểu</th>
							<th className="text-left px-4 py-2">Giá bán</th>
							<th className="text-left px-4 py-2">Màu</th>
							<th className="text-left px-4 py-2">Kích thước</th>
							<th className="text-left px-4 py-2">Trạng thái</th>
							<th className="text-left px-4 py-2">Thao tác</th>
						</tr>
					</thead>
					<tbody>
						{products.map((p) => (
							// nút mở rộng dòng để xem mô tả
							<React.Fragment key={p.id}>
								<tr className="border-b hover:bg-gray-50 transition-colors">
								<td className="px-2 py-2 text-center">
									<button
										type="button"
										onClick={() => toggleExpand(p.id)}
										className="p-1 text-gray-500 hover:text-gray-700"
										aria-label={expanded[p.id] ? 'Collapse description' : 'Expand description'}
									>
										{expanded[p.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
									</button>
								</td>
								<td className="px-4 py-2 text-gray-700 text-left">{p.id}</td>
								{/* tên sản phẩm với hình ảnh */}
								<td className="px-4 py-2 text-gray-800 font-medium text-left">
										<div className="flex items-center gap-3">
											{p.image ? (
												<img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-md bg-white border" />
											) : (
												<div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-sm text-gray-500">No</div>
											)}
											<div
												className="whitespace-normal break-words"
												style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
											>
												{p.name}
											</div>
										</div>
									</td>
									<td className="px-4 py-2 text-gray-600 text-left">{p.category ?? "-"}</td>
									<td className="px-4 py-2 text-left">{typeof p.stock === "number" ? p.stock : "-"}</td>
									<td className="px-4 py-2 text-left">{typeof p.minStock === "number" ? p.minStock : "-"}</td>
									<td className="px-4 py-2 text-gray-800 text-left">{typeof p.price === "number" ? new Intl.NumberFormat('vi-VN').format(p.price) + ' đ' : "-"}</td>
									<td className="px-4 py-2 text-left">{p.color ?? "-"}</td>
									<td className="px-4 py-2 text-left">{p.size ?? "-"}</td>
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
									<td className="px-4 py-4 flex items-center gap-2">
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
								{/* mô tả sản phẩm khi dòng được mở rộng */}
								{expanded[p.id] && (
									<tr className="bg-gray-50">
										<td colSpan={11} className="px-4 py-2 text-sm text-gray-700">
											<div className="font-medium mr-2">Mô tả:</div>
											<div className="whitespace-pre-wrap inline">{p.description}</div>
										</td>
									</tr>
								)}
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
