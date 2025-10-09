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
import { AlertTriangle, TrendingDown, FileDown } from "lucide-react";

export default function InventoryReportsPage() {
  const alerts = [
    {
      id: "A001",
      type: "low_stock",
      product: "Quần jean xanh",
      productId: "P002",
      current: 45,
      minimum: 50,
      priority: "medium",
      date: "2024-01-15",
    },
    {
      id: "A002",
      type: "critical",
      product: "Váy hoa mùa hè",
      productId: "P003",
      current: 5,
      minimum: 20,
      priority: "high",
      date: "2024-01-14",
    },
    {
      id: "A003",
      type: "low_stock",
      product: "Túi xách da",
      productId: "P006",
      current: 15,
      minimum: 25,
      priority: "medium",
      date: "2024-01-14",
    },
  ];

  const warehouseStats = [
    {
      warehouse: "Kho Hà Nội",
      totalProducts: 450,
      value: "₫1.2B",
      utilization: "75%",
    },
    {
      warehouse: "Kho TP.HCM",
      totalProducts: 680,
      value: "₫1.8B",
      utilization: "82%",
    },
    {
      warehouse: "Kho Đà Nẵng",
      totalProducts: 320,
      value: "₫850M",
      utilization: "65%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">
            Báo cáo & Cảnh báo kho
          </h1>
          <p className="text-muted-foreground mt-2">
            Theo dõi tình trạng kho và cảnh báo tồn kho
          </p>
        </div>
        <Button>
          <FileDown className="h-4 w-4 mr-2" />
          Xuất báo cáo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cảnh báo khẩn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">8</div>
            <p className="text-xs text-muted-foreground mt-1">Cần xử lý ngay</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Sắp hết hàng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">23</div>
            <p className="text-xs text-muted-foreground mt-1">Cần nhập thêm</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng giá trị kho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫3.85B</div>
            <p className="text-xs text-muted-foreground mt-1">Tất cả kho</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hiệu suất kho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">74%</div>
            <p className="text-xs text-muted-foreground mt-1">Trung bình</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cảnh báo tồn kho</CardTitle>
          <CardDescription>
            Các sản phẩm cần nhập hàng hoặc xử lý
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã CB</TableHead>
                <TableHead>Sản phẩm</TableHead>
                <TableHead>Tồn hiện tại</TableHead>
                <TableHead>Tồn tối thiểu</TableHead>
                <TableHead>Mức độ</TableHead>
                <TableHead>Ngày phát hiện</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="font-medium">{alert.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{alert.product}</p>
                      <p className="text-xs text-muted-foreground">
                        {alert.productId}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-red-600 font-semibold">
                      {alert.current}
                    </span>
                  </TableCell>
                  <TableCell>{alert.minimum}</TableCell>
                  <TableCell>
                    {alert.priority === "high" && (
                      <Badge className="bg-red-600">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Khẩn cấp
                      </Badge>
                    )}
                    {alert.priority === "medium" && (
                      <Badge className="bg-yellow-600">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        Cảnh báo
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{alert.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Tạo phiếu nhập
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Thống kê theo kho</CardTitle>
          <CardDescription>Tình trạng các kho hàng</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên kho</TableHead>
                <TableHead>Tổng sản phẩm</TableHead>
                <TableHead>Giá trị kho</TableHead>
                <TableHead>Tỷ lệ sử dụng</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {warehouseStats.map((warehouse, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {warehouse.warehouse}
                  </TableCell>
                  <TableCell>{warehouse.totalProducts}</TableCell>
                  <TableCell>{warehouse.value}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: warehouse.utilization }}
                        />
                      </div>
                      <span className="text-sm">{warehouse.utilization}</span>
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
    </div>
  );
}
