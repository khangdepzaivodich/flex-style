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
import { Search, User, Mail, Phone, Eye, Ban } from "lucide-react";

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const customers = [
    {
      id: "CUS-001",
      name: "Nguyễn Văn A",
      email: "nguyenvana@email.com",
      phone: "0901234567",
      orders: 15,
      totalSpent: "₫12,500,000",
      joinDate: "2023-01-15",
      tier: "vip",
      status: "active",
    },
    {
      id: "CUS-002",
      name: "Trần Thị B",
      email: "tranthib@email.com",
      phone: "0912345678",
      orders: 8,
      totalSpent: "₫5,200,000",
      joinDate: "2023-03-20",
      tier: "regular",
      status: "active",
    },
    {
      id: "CUS-003",
      name: "Lê Văn C",
      email: "levanc@email.com",
      phone: "0923456789",
      orders: 3,
      totalSpent: "₫1,800,000",
      joinDate: "2023-08-10",
      tier: "new",
      status: "active",
    },
    {
      id: "CUS-004",
      name: "Phạm Thị D",
      email: "phamthid@email.com",
      phone: "0934567890",
      orders: 0,
      totalSpent: "₫0",
      joinDate: "2024-01-05",
      tier: "new",
      status: "blocked",
    },
  ];

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "vip":
        return <Badge className="bg-purple-600">VIP</Badge>;
      case "regular":
        return <Badge className="bg-blue-600">Thường</Badge>;
      case "new":
        return <Badge variant="outline">Mới</Badge>;
      default:
        return <Badge>Khác</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Hoạt động</Badge>;
      case "blocked":
        return <Badge className="bg-red-600">Bị khóa</Badge>;
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Quản lý khách hàng</h1>
        <p className="text-muted-foreground mt-2">
          Quản lý thông tin và phân loại khách hàng
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng khách hàng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,678</div>
            <p className="text-xs text-muted-foreground mt-1">Đã đăng ký</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Khách VIP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">234</div>
            <p className="text-xs text-muted-foreground mt-1">Khách hàng</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Mới tháng này
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">89</div>
            <p className="text-xs text-muted-foreground mt-1">Khách hàng</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Giá trị TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫2.5M</div>
            <p className="text-xs text-muted-foreground mt-1">Mỗi khách</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách khách hàng</CardTitle>
          <CardDescription>
            Quản lý thông tin và phân loại khách hàng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm khách hàng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã KH</TableHead>
                <TableHead>Thông tin</TableHead>
                <TableHead>Liên hệ</TableHead>
                <TableHead>Đơn hàng</TableHead>
                <TableHead>Tổng chi tiêu</TableHead>
                <TableHead>Ngày tham gia</TableHead>
                <TableHead>Hạng</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell className="font-semibold">
                    {customer.totalSpent}
                  </TableCell>
                  <TableCell>{customer.joinDate}</TableCell>
                  <TableCell>{getTierBadge(customer.tier)}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Chi tiết
                      </Button>
                      {customer.status === "active" && (
                        <Button variant="destructive" size="sm">
                          <Ban className="h-4 w-4" />
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
