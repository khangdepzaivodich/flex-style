"use client";

import { useState } from "react";
import ReceiptTable from "@/components/business/ReceiptTable";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter as FilterIcon } from "lucide-react";

const sampleBusiness = [
    { id: "RN-B001", date: "2025-10-10", warehouse: "Kho A", address: "123 Đường A", status: "Chờ xác nhận", total: 1250000 },
    { id: "RN-B002", date: "2025-10-12", warehouse: "Kho A", address: "123 Đường A", status: "Đã xác nhận", total: 540000 },
    { id: "RN-B003", date: "2025-10-14", warehouse: "Kho D", address: "321 Đường D", status: "Từ chối", total: 0 },
];

const sampleSupplier = [
    { id: "RN-S001", date: "2025-10-11", warehouse: "Kho B", address: "456 Đường B", status: "Chờ xác nhận", total: 345000 },
    { id: "RN-S002", date: "2025-10-13", warehouse: "Kho C", address: "789 Đường C", status: "Đã xác nhận", total: 780000 },
    { id: "RN-S003", date: "2025-10-15", warehouse: "Kho E", address: "654 Đường E", status: "Từ chối", total: 0 },
];

export default function ConfirmReceiptPage() {
    const [businessReceipts, setBusinessReceipts] = useState(sampleBusiness);
    const [supplierReceipts, setSupplierReceipts] = useState(sampleSupplier);
    const [statusFilter, setStatusFilter] = useState<string>("Tất cả");

    function handleView(id: string) {
        alert(`Xem phiếu: ${id}`);
    }

    return (
        <main className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">Quản lý và xác nhận các phiếu nhập hàng</h1>
                </div>

                <div className="flex items-center">
                    <Select onValueChange={(v) => setStatusFilter(v as string)} defaultValue={"Tất cả"}>
                        <SelectTrigger className="w-48 relative pl-9 border-gray-200">
                            <FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <SelectValue placeholder="Tất cả" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"Tất cả"}>Tất cả</SelectItem>
                            <SelectItem value={"Đã xác nhận"}>Đã xác nhận</SelectItem>
                            <SelectItem value={"Chờ xác nhận"}>Chờ xác nhận</SelectItem>
                            <SelectItem value={"Từ chối"}>Từ chối</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <ReceiptTable
                receiptsBusiness={
                    statusFilter === "Tất cả" ? businessReceipts : businessReceipts.filter((r) => r.status === statusFilter)
                }
                receiptsSupplier={
                    statusFilter === "Tất cả" ? supplierReceipts : supplierReceipts.filter((r) => r.status === statusFilter)
                }
                statusOptions={["Đã xác nhận", "Chờ xác nhận", "Từ chối"]}
                onView={handleView}
            />
        </main>
    );
}
