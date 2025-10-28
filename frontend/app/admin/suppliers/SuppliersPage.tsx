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
import { Input } from "@/components/ui/input";
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
  Search,
  Plus,
  Edit,
  Trash2,
  Truck,
  Star,
  TrendingUp,
} from "lucide-react";
import type { Supplier } from "@/lib/types";

export default function AdminSuppliersPage({ nccs }: { nccs: Supplier[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Hoạt động</Badge>;
      case "warning":
        return <Badge className="bg-yellow-600">Cảnh báo</Badge>;
      case "blocked":
        return <Badge className="bg-red-600">Bị khóa</Badge>;
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "excellent":
        return <Badge className="bg-green-600">Xuất sắc</Badge>;
      case "good":
        return <Badge className="bg-blue-600">Tốt</Badge>;
      case "average":
        return <Badge className="bg-yellow-600">Trung bình</Badge>;
      case "poor":
        return <Badge className="bg-red-600">Kém</Badge>;
      default:
        return <Badge>Chưa đánh giá</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm NCC
        </Button>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng NCC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground mt-1">Đang hợp tác</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              NCC xuất sắc
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">12</div>
            <p className="text-xs text-muted-foreground mt-1">Rating ≥ 4.5</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng đơn hàng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground mt-1">Đơn nhập</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng giá trị
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫8.5B</div>
            <p className="text-xs text-muted-foreground mt-1">Tổng nhập</p>
          </CardContent>
        </Card>
      </div> */}

      <Card>
        <CardHeader>
          <CardTitle>Danh sách nhà cung cấp</CardTitle>
          <CardDescription>Quản lý thông tin và đánh giá NCC</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm nhà cung cấp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã NCC</TableHead>
                <TableHead>Thông tin NCC</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Liên hệ</TableHead>

                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nccs.map((supplier) => (
                <TableRow key={supplier.MaTK}>
                  <TableCell className="font-medium">{supplier.MaTK}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{supplier.MaTK}</p>
                        <p className="text-xs text-muted-foreground">
                          <code className="bg-muted px-1 rounded">
                            {supplier.DisplayName}
                          </code>
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{supplier.VAITRO}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-xs">
                      {/* <p className="font-medium">{supplier.contact}</p>
                      <p className="text-muted-foreground">{supplier.phone}</p> */}
                      <p className="text-muted-foreground">{supplier.Email}</p>
                    </div>
                  </TableCell>
                  {/* <TableCell>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold">
                        {supplier.totalOrders}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">
                    {supplier.totalValue}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-semibold">{supplier.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getPerformanceBadge(supplier.performance)}
                  </TableCell> */}
                  <TableCell>{getStatusBadge(supplier.Status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
