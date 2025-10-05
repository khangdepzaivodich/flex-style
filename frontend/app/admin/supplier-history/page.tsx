"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, TrendingUp, FileText, Filter } from "lucide-react";
import { useState } from "react";

export default function SupplierHistoryPage() {
  const [selectedSupplier, setSelectedSupplier] = useState("all");

  const importHistory = [
    {
      id: "PN005",
      date: "2024-01-15",
      supplier: "Công ty TNHH ABC",
      supplierId: "NCC001",
      items: 150,
      value: "₫45M",
      status: "completed",
    },
    {
      id: "PN004",
      date: "2024-01-12",
      supplier: "Công ty TNHH GHI",
      supplierId: "NCC004",
      items: 80,
      value: "₫25M",
      status: "completed",
    },
    {
      id: "PN003",
      date: "2024-01-10",
      supplier: "Công ty TNHH ABC",
      supplierId: "NCC001",
      items: 100,
      value: "₫30M",
      status: "completed",
    },
    {
      id: "PN002",
      date: "2024-01-08",
      supplier: "Nhà cung cấp XYZ",
      supplierId: "NCC002",
      items: 200,
      value: "₫60M",
      status: "completed",
    },
  ];

  const supplierStats = [
    {
      supplier: "Công ty TNHH ABC",
      supplierId: "NCC001",
      totalOrders: 45,
      totalValue: "₫450M",
      avgDeliveryTime: "3.5 ngày",
      onTimeRate: "95%",
    },
    {
      supplier: "Nhà cung cấp XYZ",
      supplierId: "NCC002",
      totalOrders: 67,
      totalValue: "₫680M",
      avgDeliveryTime: "2.8 ngày",
      onTimeRate: "98%",
    },
    {
      supplier: "Công ty TNHH GHI",
      supplierId: "NCC004",
      totalOrders: 89,
      totalValue: "₫890M",
      avgDeliveryTime: "4.2 ngày",
      onTimeRate: "92%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Lịch sử nhập hàng</h1>
          <p className="text-muted-foreground mt-2">
            Theo dõi lịch sử giao dịch với nhà cung cấp
          </p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Xuất báo cáo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng đơn nhập
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground mt-1">
              Tất cả thời gian
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tháng này
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">67</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +15% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng giá trị
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫5.2B</div>
            <p className="text-xs text-muted-foreground mt-1">
              Tất cả thời gian
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ đúng hạn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">95%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Giao hàng đúng hẹn
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">Lịch sử nhập hàng</TabsTrigger>
          <TabsTrigger value="stats">Thống kê theo NCC</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Lịch sử giao dịch</CardTitle>
                  <CardDescription>
                    Danh sách các đơn nhập hàng đã hoàn thành
                  </CardDescription>
                </div>
                <Select
                  value={selectedSupplier}
                  onValueChange={setSelectedSupplier}
                >
                  <SelectTrigger className="w-[200px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Lọc NCC" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả NCC</SelectItem>
                    <SelectItem value="NCC001">Công ty TNHH ABC</SelectItem>
                    <SelectItem value="NCC002">Nhà cung cấp XYZ</SelectItem>
                    <SelectItem value="NCC004">Công ty TNHH GHI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã phiếu</TableHead>
                    <TableHead>Ngày nhập</TableHead>
                    <TableHead>Nhà cung cấp</TableHead>
                    <TableHead>Số lượng SP</TableHead>
                    <TableHead>Tổng giá trị</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {importHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          {item.date}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{item.supplier}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.supplierId}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>{item.items}</TableCell>
                      <TableCell className="font-semibold">
                        {item.value}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-600">Hoàn thành</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Chi tiết
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thống kê theo nhà cung cấp</CardTitle>
              <CardDescription>
                Hiệu suất và đánh giá các nhà cung cấp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nhà cung cấp</TableHead>
                    <TableHead>Tổng đơn hàng</TableHead>
                    <TableHead>Tổng giá trị</TableHead>
                    <TableHead>Thời gian giao TB</TableHead>
                    <TableHead>Tỷ lệ đúng hạn</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supplierStats.map((stat) => (
                    <TableRow key={stat.supplierId}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{stat.supplier}</p>
                          <p className="text-xs text-muted-foreground">
                            {stat.supplierId}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>{stat.totalOrders}</TableCell>
                      <TableCell className="font-semibold">
                        {stat.totalValue}
                      </TableCell>
                      <TableCell>{stat.avgDeliveryTime}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[100px]">
                            <div
                              className="h-full bg-green-600"
                              style={{ width: stat.onTimeRate }}
                            />
                          </div>
                          <span className="text-sm font-medium">
                            {stat.onTimeRate}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Xem chi tiết
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
