"use client";

import { Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Receipt {
    id: string; // Mã phiếu
    date: string; // Ngày nhập hàng
    warehouse?: string; // Kho hàng
    address?: string; // Địa chỉ
    status?: "Đã xác nhận" | "Chờ xác nhận" | "Từ chối" | string; // Trạng thái
    total?: number; // Tổng tiền
}

interface ReceiptTableProps {
    receipts?: Receipt[];
    receiptsBusiness?: Receipt[];
    receiptsSupplier?: Receipt[];
    statusOptions?: Array<"Đã xác nhận" | "Chờ xác nhận" | "Từ chối">;
    onView?: (id: string) => void;
}

export default function ReceiptTable({ receipts = [], receiptsBusiness, receiptsSupplier, onView}: ReceiptTableProps) {
    const business = receiptsBusiness ?? receipts;
    const supplier = receiptsSupplier ?? receipts;
    // Hàm hiển thị các dòng cho tab Doanh nghiệp
    function renderBusinessRows(list: Receipt[]) {
        return (
            <>
                {list.map((r, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-gray-700 text-left">{r.id}</td>
                        <td className="px-4 py-3 text-gray-700 text-left">{r.date}</td>
                        <td className="px-4 py-3 text-gray-600 text-left">{r.warehouse ?? "-"}</td>
                        <td className="px-4 py-3 text-gray-600 text-left">{r.address ?? "-"}</td>
                        <td className="px-4 py-3">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    r.status === "Đã xác nhận"
                                        ? "bg-green-100 text-green-700"
                                        : r.status === "Chờ xác nhận"
                                        ? "bg-blue-100 text-blue-700"
                                        : r.status === "Từ chối"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-gray-100 text-gray-700"
                                }`}
                            >
                                {r.status ?? "-"}
                            </span>
                        </td>
                        <td className="px-4 py-3 text-gray-800 text-left">
                            {typeof r.total === "number" ? new Intl.NumberFormat("vi-VN").format(r.total) + " đ" : "-"}
                        </td>
                        <td className="px-4 py-2 flex gap-2 justify-start">
                            <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => onView?.(r.id)}>
                                <Eye className="w-4 h-4" />
                                Xem
                            </Button>
                        </td>
                    </tr>
                ))}
            </>
        );
    }
    // Hàm hiển thị các dòng cho tab Nhà cung cấp
    function renderSupplierRows(list: Receipt[]) {
        return (
            <>
                {list.map((r, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-gray-700 text-left">{r.id}</td>
                        <td className="px-4 py-3 text-gray-700 text-left">{r.date}</td>
                        <td className="px-4 py-3 text-gray-600 text-left">{r.warehouse ?? "-"}</td>
                        <td className="px-4 py-3 text-gray-600 text-left">{r.address ?? "-"}</td>
                        <td className="px-4 py-3">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    r.status === "Đã xác nhận"
                                        ? "bg-green-100 text-green-700"
                                        : r.status === "Chờ xác nhận"
                                        ? "bg-blue-100 text-blue-700"
                                        : r.status === "Từ chối"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-gray-100 text-gray-700"
                                }`}
                            >
                                {r.status ?? "-"}
                            </span>
                        </td>
                        <td className="px-4 py-3 text-gray-800 text-left">
                            {typeof r.total === "number" ? new Intl.NumberFormat("vi-VN").format(r.total) + " đ" : "-"}
                        </td>
                    </tr>
                ))}
            </>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-md border p-4">
            <Tabs defaultValue="business" className="mb-4 w-full">
                <div className="w-full rounded-md border border-gray-200 p-0.5">
                    <TabsList className="w-full grid grid-cols-2 bg-transparent">
                        <TabsTrigger
                        value="business"
                        className="h-8 flex items-center justify-center text-sm px-3 leading-10 bg-transparent text-gray-700 font-medium 
                        focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent 
                        transition-all duration-150 data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:bg-[#8B5CF6] data-[state=active]:rounded-bl-md"
                        >
                        Doanh nghiệp
                        </TabsTrigger>

                        <TabsTrigger
                        value="supplier"
                        className="h-8 flex items-center justify-center text-sm px-3 leading-10 bg-transparent text-gray-700 font-medium 
                        focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent 
                        transition-all duration-150 data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:bg-[#8B5CF6] data-[state=active]:rounded-br-md"
                        >
                        Nhà cung cấp
                        </TabsTrigger>

                    </TabsList>
                </div>
                <TabsContent value="business">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border-t border-gray-200 table-fixed">
                            <colgroup>
                                <col style={{ width: "14.2857%" }} />
                                <col style={{ width: "14.2857%" }} />
                                <col style={{ width: "14.2857%" }} />
                                <col style={{ width: "14.2857%" }} />
                                <col style={{ width: "14.2857%" }} />
                                <col style={{ width: "14.2857%" }} />
                                <col style={{ width: "14.2857%" }} />
                            </colgroup>
                            <thead className="bg-gray-100 text-gray-700 font-medium">
                                <tr className="border-b">
                                    <th className="text-left px-4 py-2">Mã phiếu</th>
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
                </TabsContent>

                <TabsContent value="supplier">
                    <div className="overflow-x-auto bg-white rounded-md border border-gray-100 shadow-sm">
                        <table className="min-w-full text-sm table-fixed">
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
                                    <th className="text-left px-4 py-2">Mã phiếu</th>
                                    <th className="text-left px-4 py-2">Ngày nhập</th>
                                    <th className="text-left px-4 py-2">Nhập tại kho</th>
                                    <th className="text-left px-4 py-2">Địa chỉ</th>
                                    <th className="text-left px-4 py-2">Trạng thái</th>
                                    <th className="text-left px-4 py-2">Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>{renderSupplierRows(supplier)}</tbody>
                        </table>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}


