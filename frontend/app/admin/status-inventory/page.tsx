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
import { Clock, TrendingUp, TrendingDown } from "lucide-react";

export default function ProductStatusPage() {
  const statusHistory = [
    {
      id: "H001",
      productId: "P001",
      productName: "Áo thun trắng basic",
      action: "Nhập kho",
      quantity: 100,
      from: 50,
      to: 150,
      user: "Nguyễn Văn A",
      timestamp: "2024-01-15 10:30",
    },
    {
      id: "H002",
      productId: "P002",
      productName: "Quần jean xanh",
      action: "Xuất kho",
      quantity: -15,
      from: 60,
      to: 45,
      user: "Trần Thị B",
      timestamp: "2024-01-15 09:15",
    },
    {
      id: "H003",
      productId: "P003",
      productName: "Váy hoa mùa hè",
      action: "Điều chỉnh",
      quantity: -5,
      from: 10,
      to: 5,
      user: "Lê Văn C",
      timestamp: "2024-01-14 16:45",
    },
  ];

  const productStatus = [
    {
      id: "P001",
      name: "Áo thun trắng basic",
      status: "active",
      lastUpdate: "2024-01-15",
      stock: 150,
    },
    {
      id: "P002",
      name: "Quần jean xanh",
      status: "low_stock",
      lastUpdate: "2024-01-15",
      stock: 45,
    },
    {
      id: "P003",
      name: "Váy hoa mùa hè",
      status: "critical",
      lastUpdate: "2024-01-14",
      stock: 5,
    },
    {
      id: "P004",
      name: "Áo khoác denim",
      status: "active",
      lastUpdate: "2024-01-13",
      stock: 80,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">
          Trạng thái sản phẩm & Lịch sử thay đổi
        </h1>
        <p className="text-muted-foreground mt-2">
          Theo dõi trạng thái và lịch sử biến động tồn kho
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Thay đổi hôm nay
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground mt-1">Giao dịch kho</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Nhập kho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              +234
            </div>
            <p className="text-xs text-muted-foreground mt-1">Sản phẩm</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Xuất kho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              -189
            </div>
            <p className="text-xs text-muted-foreground mt-1">Sản phẩm</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">Lịch sử thay đổi</TabsTrigger>
          <TabsTrigger value="status">Trạng thái hiện tại</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lịch sử biến động tồn kho</CardTitle>
              <CardDescription>
                Theo dõi tất cả các thay đổi về số lượng sản phẩm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã GD</TableHead>
                    <TableHead>Sản phẩm</TableHead>
                    <TableHead>Hành động</TableHead>
                    <TableHead>Số lượng</TableHead>
                    <TableHead>Từ → Đến</TableHead>
                    <TableHead>Người thực hiện</TableHead>
                    <TableHead>Thời gian</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {statusHistory.map((history) => (
                    <TableRow key={history.id}>
                      <TableCell className="font-medium">
                        {history.id}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{history.productName}</p>
                          <p className="text-xs text-muted-foreground">
                            {history.productId}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            history.action === "Nhập kho"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {history.action}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={
                            history.quantity > 0
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {history.quantity > 0 ? "+" : ""}
                          {history.quantity}
                        </span>
                      </TableCell>
                      <TableCell>
                        {history.from} → {history.to}
                      </TableCell>
                      <TableCell>{history.user}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          {history.timestamp}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trạng thái sản phẩm</CardTitle>
              <CardDescription>
                Tình trạng hiện tại của các sản phẩm trong kho
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã SP</TableHead>
                    <TableHead>Tên sản phẩm</TableHead>
                    <TableHead>Tồn kho</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Cập nhật lần cuối</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productStatus.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.id}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        {product.status === "active" && (
                          <Badge className="bg-green-600">Hoạt động</Badge>
                        )}
                        {product.status === "low_stock" && (
                          <Badge className="bg-yellow-600">Sắp hết</Badge>
                        )}
                        {product.status === "critical" && (
                          <Badge className="bg-red-600">Rất ít</Badge>
                        )}
                      </TableCell>
                      <TableCell>{product.lastUpdate}</TableCell>
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
