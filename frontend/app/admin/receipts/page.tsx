"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, FileText, Check, X, Clock, Filter } from "lucide-react";
import { useState } from "react";

export default function SupplierReceiptsPage() {
  const [filterSupplier, setFilterSupplier] = useState("all");

  const receipts = [
    {
      id: "PN001",
      supplierId: "NCC001",
      supplierName: "Công ty TNHH ABC",
      date: "2024-01-15",
      warehouse: "Kho Hà Nội",
      totalItems: 150,
      totalValue: "45,000,000",
      status: "pending",
      createdBy: "Nguyễn Văn A",
    },
    {
      id: "PN002",
      supplierId: "NCC002",
      supplierName: "Nhà cung cấp XYZ",
      date: "2024-01-14",
      warehouse: "Kho TP.HCM",
      totalItems: 200,
      totalValue: "60,000,000",
      status: "confirmed",
      createdBy: "Trần Thị B",
    },
    {
      id: "PN003",
      supplierId: "NCC001",
      supplierName: "Công ty TNHH ABC",
      date: "2024-01-13",
      warehouse: "Kho Hà Nội",
      totalItems: 100,
      totalValue: "30,000,000",
      status: "completed",
      createdBy: "Lê Văn C",
    },
    {
      id: "PN004",
      supplierId: "NCC004",
      supplierName: "Công ty TNHH GHI",
      date: "2024-01-12",
      warehouse: "Kho Đà Nẵng",
      totalItems: 80,
      totalValue: "25,000,000",
      status: "in_transit",
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
      case "in_transit":
        return (
          <Badge className="bg-purple-600">
            <Clock className="h-3 w-3 mr-1" />
            Đang vận chuyển
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-600">
            <Check className="h-3 w-3 mr-1" />
            Hoàn thành
          </Badge>
        );
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">
            Phiếu nhập hàng từ NCC
          </h1>
          <p className="text-muted-foreground mt-2">
            Quản lý phiếu nhập liên kết với nhà cung cấp
          </p>
        </div>
        <Button>
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
            <div className="text-2xl font-bold text-yellow-600">8</div>
            <p className="text-xs text-muted-foreground mt-1">Phiếu nhập</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đang vận chuyển
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">15</div>
            <p className="text-xs text-muted-foreground mt-1">Phiếu nhập</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hoàn thành tháng này
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">67</div>
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
            <div className="text-2xl font-bold">₫890M</div>
            <p className="text-xs text-muted-foreground mt-1">Tháng này</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách phiếu nhập hàng</CardTitle>
          <CardDescription>
            Theo dõi phiếu nhập từ các nhà cung cấp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Select value={filterSupplier} onValueChange={setFilterSupplier}>
              <SelectTrigger className="w-[250px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Lọc theo NCC" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả nhà cung cấp</SelectItem>
                <SelectItem value="NCC001">Công ty TNHH ABC</SelectItem>
                <SelectItem value="NCC002">Nhà cung cấp XYZ</SelectItem>
                <SelectItem value="NCC004">Công ty TNHH GHI</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã phiếu</TableHead>
                <TableHead>Nhà cung cấp</TableHead>
                <TableHead>Ngày nhập</TableHead>
                <TableHead>Kho nhận</TableHead>
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
                  <TableCell>
                    <div>
                      <p className="font-medium">{receipt.supplierName}</p>
                      <p className="text-xs text-muted-foreground">
                        {receipt.supplierId}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{receipt.date}</TableCell>
                  <TableCell>{receipt.warehouse}</TableCell>
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
                          <Button variant="default" size="sm">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="sm">
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
    </div>
  );
}
