"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, FileText, Check, X, Clock } from "lucide-react";
import { ReceiptModal } from "@/components/system/modals/receipt-modal";

export default function ReceiptsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const receipts = [
    {
      id: "PN001",
      supplier: "Công ty TNHH ABC",
      date: "2024-01-15",
      totalItems: 150,
      totalValue: "45,000,000",
      status: "pending",
      createdBy: "Nguyễn Văn A",
    },
    {
      id: "PN002",
      supplier: "Nhà cung cấp XYZ",
      date: "2024-01-14",
      totalItems: 200,
      totalValue: "60,000,000",
      status: "confirmed",
      createdBy: "Trần Thị B",
    },
    {
      id: "PN003",
      supplier: "Công ty CP DEF",
      date: "2024-01-13",
      totalItems: 100,
      totalValue: "30,000,000",
      status: "completed",
      createdBy: "Lê Văn C",
    },
    {
      id: "PN004",
      supplier: "Công ty TNHH GHI",
      date: "2024-01-12",
      totalItems: 80,
      totalValue: "25,000,000",
      status: "rejected",
      createdBy: "Phạm Thị D",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-600">
            <Clock className="h-3 w-3 mr-1" />
            Chờ xác nhận
          </Badge>
        );
      case "confirmed":
        return (
          <Badge className="bg-blue-600">
            <Check className="h-3 w-3 mr-1" />
            Đã xác nhận
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-600">
            <Check className="h-3 w-3 mr-1" />
            Hoàn thành
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-red-600">
            <X className="h-3 w-3 mr-1" />
            Từ chối
          </Badge>
        );
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  const handleApprove = (receiptId: string) => {
    console.log("[v0] Approving receipt:", receiptId);
  };

  const handleReject = (receiptId: string) => {
    if (confirm("Bạn có chắc chắn muốn từ chối phiếu nhập này?")) {
      console.log("[v0] Rejecting receipt:", receiptId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">
            Quản lý phiếu nhập hàng
          </h1>
          <p className="text-muted-foreground mt-2">
            Tạo và xác nhận phiếu nhập hàng vào kho
          </p>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Tạo phiếu nhập
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chờ xác nhận
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">5</div>
            <p className="text-xs text-muted-foreground mt-1">Phiếu nhập</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đã xác nhận
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">12</div>
            <p className="text-xs text-muted-foreground mt-1">Phiếu nhập</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hoàn thành
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">234</div>
            <p className="text-xs text-muted-foreground mt-1">Phiếu nhập</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng giá trị
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫2.5B</div>
            <p className="text-xs text-muted-foreground mt-1">Tháng này</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách phiếu nhập hàng</CardTitle>
          <CardDescription>
            Quản lý và theo dõi các phiếu nhập hàng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã phiếu</TableHead>
                <TableHead>Nhà cung cấp</TableHead>
                <TableHead>Ngày nhập</TableHead>
                <TableHead>Số lượng SP</TableHead>
                <TableHead>Tổng giá trị</TableHead>
                <TableHead>Người tạo</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {receipts.map((receipt) => (
                <TableRow key={receipt.id}>
                  <TableCell className="font-medium">{receipt.id}</TableCell>
                  <TableCell>{receipt.supplier}</TableCell>
                  <TableCell>{receipt.date}</TableCell>
                  <TableCell>{receipt.totalItems}</TableCell>
                  <TableCell>{receipt.totalValue}₫</TableCell>
                  <TableCell>{receipt.createdBy}</TableCell>
                  <TableCell>{getStatusBadge(receipt.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        Chi tiết
                      </Button>
                      {receipt.status === "pending" && (
                        <>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleApprove(receipt.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleReject(receipt.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ReceiptModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
}
