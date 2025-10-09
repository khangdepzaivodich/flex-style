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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, AlertTriangle, CheckCircle, XCircle, Eye } from "lucide-react";

export default function OrderManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const orders = [
    {
      id: "ORD-1234",
      customer: "Nguyễn Văn A",
      date: "2024-01-15 10:30",
      items: 3,
      total: "₫1,299,000",
      payment: "paid",
      status: "processing",
      hasIssue: false,
    },
    {
      id: "ORD-1235",
      customer: "Trần Thị B",
      date: "2024-01-15 09:15",
      items: 2,
      total: "₫899,000",
      payment: "paid",
      status: "shipping",
      hasIssue: false,
    },
    {
      id: "ORD-1236",
      customer: "Lê Văn C",
      date: "2024-01-14 16:45",
      items: 5,
      total: "₫2,499,000",
      payment: "pending",
      status: "pending",
      hasIssue: true,
    },
    {
      id: "ORD-1237",
      customer: "Phạm Thị D",
      date: "2024-01-14 14:20",
      items: 1,
      total: "₫499,000",
      payment: "failed",
      status: "cancelled",
      hasIssue: true,
    },
    {
      id: "ORD-1238",
      customer: "Hoàng Văn E",
      date: "2024-01-13 11:30",
      items: 4,
      total: "₫1,799,000",
      payment: "paid",
      status: "delivered",
      hasIssue: false,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-600">Chờ xử lý</Badge>;
      case "processing":
        return <Badge className="bg-blue-600">Đang xử lý</Badge>;
      case "shipping":
        return <Badge className="bg-purple-600">Đang giao</Badge>;
      case "delivered":
        return <Badge className="bg-green-600">Đã giao</Badge>;
      case "cancelled":
        return <Badge className="bg-red-600">Đã hủy</Badge>;
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  const getPaymentBadge = (payment: string) => {
    switch (payment) {
      case "paid":
        return (
          <Badge variant="outline" className="border-green-600 text-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Đã thanh toán
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant="outline"
            className="border-yellow-600 text-yellow-600"
          >
            Chờ thanh toán
          </Badge>
        );
      case "failed":
        return (
          <Badge variant="outline" className="border-red-600 text-red-600">
            <XCircle className="h-3 w-3 mr-1" />
            Thất bại
          </Badge>
        );
      default:
        return <Badge variant="outline">Không xác định</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Quản lý đơn hàng</h1>
        <p className="text-muted-foreground mt-2">Xử lý đơn hàng và đơn lỗi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng đơn hàng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground mt-1">Tất cả</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đơn hôm nay
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">89</div>
            <p className="text-xs text-muted-foreground mt-1">
              +23% so với hôm qua
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đơn lỗi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">15</div>
            <p className="text-xs text-muted-foreground mt-1">Cần xử lý</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Doanh thu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫234M</div>
            <p className="text-xs text-muted-foreground mt-1">Hôm nay</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Giá trị TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫1.2M</div>
            <p className="text-xs text-muted-foreground mt-1">Mỗi đơn</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách đơn hàng</CardTitle>
          <CardDescription>Quản lý và xử lý các đơn hàng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm đơn hàng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Lọc trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="pending">Chờ xử lý</SelectItem>
                <SelectItem value="processing">Đang xử lý</SelectItem>
                <SelectItem value="shipping">Đang giao</SelectItem>
                <SelectItem value="delivered">Đã giao</SelectItem>
                <SelectItem value="cancelled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã đơn</TableHead>
                <TableHead>Khách hàng</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Số SP</TableHead>
                <TableHead>Tổng tiền</TableHead>
                <TableHead>Thanh toán</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Vấn đề</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="text-sm">{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell className="font-semibold">{order.total}</TableCell>
                  <TableCell>{getPaymentBadge(order.payment)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    {order.hasIssue ? (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Chi tiết
                      </Button>
                      {order.hasIssue && (
                        <Button variant="destructive" size="sm">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Xử lý
                        </Button>
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
