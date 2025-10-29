"use client";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReceiptView from "./ReceiptView";

interface Receipt {
    id: string; // Mã phiếu
    date: string; // Ngày nhập hàng
    //warehouse?: string; // Kho hàng
    //address?: string; // Địa chỉ
    status?: "đã xác nhận" | "Chờ xác nhận" | "từ chối" | string; // Trạng thái
    total?: number; // Tổng tiền
}

interface ReceiptTableProps {
    receipts?: Receipt[];
    receiptsBusiness?: Receipt[];
    receiptsSupplier?: Receipt[];
    statusOptions?: Array<"đã xác nhận" | "Chờ xác nhận" | "từ chối">;
    onView?: (id: string) => void;
}

export default function ReceiptTable({ receipts = [], receiptsBusiness, receiptsSupplier, onView}: ReceiptTableProps) {
    const [viewOpen, setViewOpen] = useState(false);
    const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null);
    const business = receiptsBusiness ?? receipts;
    

    function renderBusinessRows(list: Receipt[]) {
        return (
            <>
                {list.map((r, idx) => (
                    <tr key={idx} data-id={r.id} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-gray-700 text-left">{r.date}</td>
                        <td className="px-4 py-3 text-gray-600 text-left">Kho FlexStyle</td>
                        <td className="px-4 py-3 text-gray-600 text-left">Quận A, Phường B, TP.HCM</td>
                        <td className="px-4 py-3">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    r.status === "đã xác nhận"
                                        ? "bg-green-100 text-green-700"
                                        : r.status === "Chờ xác nhận"
                                        ? "bg-blue-100 text-blue-700"
                                        : r.status === "từ chối"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-gray-100 text-gray-700"
                                }`}
                            >
                                {r.status ? (r.status === "Chờ xác nhận" ? r.status : `Nhà cung cấp ${r.status}`) : "-"}
                            </span>
                        </td>
                        <td className="px-4 py-3 text-gray-800 text-left">
                            {typeof r.total === "number" ? new Intl.NumberFormat("vi-VN").format(r.total) + " đ" : "-"}
                        </td>
                            <td className="px-4 py-2 flex gap-2 justify-start">
                            <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => { setSelectedReceipt(r); setViewOpen(true); }}>
                                <Eye className="w-4 h-4" />
                                Xem
                            </Button>
                        </td>
                    </tr>
                ))}
            </>
        );
    }

    return (
        <>
        <div className="bg-white rounded-xl shadow-md border p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm border-t border-gray-200 table-fixed">
                    <colgroup>
                        <col style={{ width: "16.6667%" }} />
                        <col style={{ width: "16.6667%" }} />
                        <col style={{ width: "16.6667%" }} />
                        <col style={{ width: "16.6667%" }} />
                        <col style={{ width: "16.6667%" }} />
                        <col style={{ width: "16.6667%" }} />
                    </colgroup>
                    <thead className="bg-gray-100 text-gray-700 font-medium">
                        <tr className="border-b">
                            <th className="text-left px-4 py-2">Ngày nhập hàng</th>
                            <th className="text-left px-4 py-2">Nhập tại kho</th>
                            <th className="text-left px-4 py-2">Địa chỉ</th>
                            <th className="text-left px-4 py-2">Trạng thái</th>
                            <th className="text-left px-4 py-2">Tổng tiền</th>
                            <th className="text-left px-4 py-2">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>{renderBusinessRows(business)}</tbody>
                </table>
            </div>
        </div>
        <ReceiptView
            open={viewOpen}
            onOpenChange={(o) => setViewOpen(o)}
            data={selectedReceipt ?? undefined}
            onConfirm={() => {
                // gọi hàm bên ngoài hoặc cập nhật state
            }}
        />
        </>
    );
}


