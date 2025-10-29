"use client";

import React from "react";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ReceiptItem {
	name: string;
	code?: string;
	unit?: string;
	qty?: number;
	price?: number;
}

interface ReceiptDetails {
	id?: string;
	date?: string;
	warehouse?: string;
	address?: string;
	items?: ReceiptItem[];
	total?: number;
}

interface ReceiptViewProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	data?: ReceiptDetails;
	onConfirm?: () => void;
}

export default function ReceiptView({ open, onOpenChange, data, onConfirm }: ReceiptViewProps) {
	const items = data?.items ?? [];
	const total = typeof data?.total === "number" ? data!.total : items.reduce((s, it) => s + (it.price ?? 0) * (it.qty ?? 0), 0);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="p-0 overflow-hidden w-full max-w-[1100px] sm:max-w-[1100px] md:max-w-[1200px] max-h-[90vh]">
				{/* Header band */}
						<div className="w-full bg-[#8B5CF6] py-8 text-center">
					<h3 className="text-white text-xl font-semibold tracking-wider">PHIẾU NHẬP HÀNG</h3>
				</div>

						<div className="p-6 bg-white overflow-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
					<div className="grid grid-cols-2 gap-6 mb-4">
						<div>
							<div className="text-sm font-medium text-gray-700">Ngày nhập hàng</div>
							<div className="mt-1 text-gray-900">{data?.date ?? "-"}</div>
						</div>
						<div>
							<div className="text-sm font-medium text-gray-700">Phiếu nhập hàng</div>
							<div className="mt-1 text-gray-900">{data?.id ?? "-"}</div>
						</div>
						<div>
							<div className="text-sm font-medium text-gray-700">Nhập tại kho</div>
							<div className="mt-1 text-gray-900">{data?.warehouse ?? "-"}</div>
						</div>
						<div>
							<div className="text-sm font-medium text-gray-700">Địa chỉ</div>
							<div className="mt-1 text-gray-900">{data?.address ?? "-"}</div>
						</div>
					</div>

					<div className="overflow-x-auto border border-gray-200 rounded-md">
						<table className="min-w-full text-sm table-fixed">
							<colgroup>
								<col style={{ width: "30%" }} />
								<col style={{ width: "14%" }} />
								<col style={{ width: "14%" }} />
								<col style={{ width: "14%" }} />
								<col style={{ width: "14%" }} />
								<col style={{ width: "14%" }} />
							</colgroup>
							<thead className="bg-gray-100 text-gray-700 font-medium">
								<tr>
									<th className="text-left px-4 py-2">Tên</th>
									<th className="text-left px-4 py-2">Mã SP</th>
									<th className="text-left px-4 py-2">Đơn vị tính</th>
									<th className="text-left px-4 py-2">Số lượng</th>
									<th className="text-left px-4 py-2">Đơn giá</th>
									<th className="text-left px-4 py-2">Thành tiền</th>
								</tr>
							</thead>
							<tbody>
								{items.length === 0 ? (
									<tr>
										<td className="px-4 py-6 text-center text-gray-500" colSpan={6}>
											Không có sản phẩm
										</td>
									</tr>
								) : (
									items.map((it, idx) => (
										<tr key={idx} className="border-t">
											<td className="px-4 py-3 text-gray-700">{it.name}</td>
											<td className="px-4 py-3 text-gray-600">{it.code ?? "-"}</td>
											<td className="px-4 py-3 text-gray-600">{it.unit ?? "-"}</td>
											<td className="px-4 py-3 text-gray-700">{it.qty ?? 0}</td>
											<td className="px-4 py-3 text-gray-700">{typeof it.price === "number" ? new Intl.NumberFormat("vi-VN").format(it.price) + " đ" : "-"}</td>
											<td className="px-4 py-3 text-gray-800">{typeof it.price === "number" && typeof it.qty === "number" ? new Intl.NumberFormat("vi-VN").format((it.price ?? 0) * (it.qty ?? 0)) + " đ" : "-"}</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>

					<div className="mt-4 grid grid-cols-2 gap-4">
						<div>
							<div className="text-sm font-semibold">Tổng số tiền (bằng chữ)</div>
							<input readOnly value={""} className="mt-1 w-full rounded border px-3 py-2 text-sm bg-white" />
						</div>
						<div>
							<div className="text-sm font-semibold">Tổng số tiền (bằng số)</div>
							<div className="mt-1 text-lg font-semibold text-gray-900">{new Intl.NumberFormat("vi-VN").format(total)} đ</div>
						</div>
					</div>
				</div>

				<DialogFooter className="p-6 bg-white">
					<div className="flex gap-3 mx-auto">
						<Button variant="default" onClick={() => { onConfirm?.(); onOpenChange(false); }}>
							Xác nhận
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

