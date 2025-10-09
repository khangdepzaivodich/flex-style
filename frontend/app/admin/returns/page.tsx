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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CheckCircle, XCircle, Clock, Eye } from "lucide-react";

export default function ReturnsRefundsPage() {
  const returns = [
    {
      id: "RET-001",
      orderId: "ORD-1234",
      customer: "Nguyễn Văn A",
      reason: "Sản phẩm bị lỗi",
      items: 1,
      amount: "₫499,000",
      date: "2024-01-15",
      status: "pending",
      type: "return",
    },
    {
      id: "RET-002",
      orderId: "ORD-1235",
      customer: "Trần Thị B",
      reason: "Không vừa size",
      items: 1,
      amount: "₫399,000",
      date: "2024-01-14",
      status: "approved",
      type: "exchange",
    },
    {
      id: "RET-003",
      orderId: "ORD-1236",
      customer: "Lê Văn C",
      reason: "Đổi ý",
      items: 2,
      amount: "₫899,000",
      date: "2024-01-13",
      status: "rejected",
      type: "return",
    },
  ];

  const refunds = [
    {
      id: "REF-001",
      orderId: "ORD-1237",
      customer: "Phạm Thị D",
      amount: "₫1,299,000",
      method: "bank_transfer",
      date: "2024-01-15",
      status: "processing",
    },
    {
      id: "REF-002",
      orderId: "ORD-1238",
      customer: "Hoàng Văn E",
      amount: "₫599,000",
      method: "wallet",
      date: "2024-01-14",
      status: "completed",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-600">
            <Clock className="h-3 w-3 mr-1" />
            Chờ xử lý
          </Badge>
        );
      case "approved":
        return (
          <Badge className="bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Đã duyệt
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-red-600">
            <XCircle className="h-3 w-3 mr-1" />
            Từ chối
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-blue-600">
            <Clock className="h-3 w-3 mr-1" />
            Đang xử lý
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Hoàn thành
          </Badge>
        );
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "return":
        return <Badge variant="outline">Trả hàng</Badge>;
      case "exchange":
        return <Badge variant="outline">Đổi hàng</Badge>;
      default:
        return <Badge variant="outline">Không xác định</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">
          Quản lý hoàn trả & Hoàn tiền
        </h1>
        <p className="text-muted-foreground mt-2">
          Xử lý yêu cầu trả hàng và hoàn tiền
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Yêu cầu trả hàng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">23</div>
            <p className="text-xs text-muted-foreground mt-1">Chờ xử lý</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đã duyệt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">156</div>
            <p className="text-xs text-muted-foreground mt-1">Tháng này</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hoàn tiền
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">45</div>
            <p className="text-xs text-muted-foreground mt-1">Đang xử lý</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng hoàn tiền
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫67M</div>
            <p className="text-xs text-muted-foreground mt-1">Tháng này</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="returns" className="space-y-4">
        <TabsList>
          <TabsTrigger value="returns">Yêu cầu trả hàng</TabsTrigger>
          <TabsTrigger value="refunds">Hoàn tiền</TabsTrigger>
        </TabsList>

        <TabsContent value="returns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Yêu cầu trả hàng & Đổi hàng</CardTitle>
              <CardDescription>
                Xử lý các yêu cầu trả và đổi sản phẩm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã YC</TableHead>
                    <TableHead>Mã đơn</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Lý do</TableHead>
                    <TableHead>Loại</TableHead>
                    <TableHead>Số SP</TableHead>
                    <TableHead>Số tiền</TableHead>
                    <TableHead>Ngày</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {returns.map((returnItem) => (
                    <TableRow key={returnItem.id}>
                      <TableCell className="font-medium">
                        {returnItem.id}
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {returnItem.orderId}
                        </code>
                      </TableCell>
                      <TableCell>{returnItem.customer}</TableCell>
                      <TableCell>{returnItem.reason}</TableCell>
                      <TableCell>{getTypeBadge(returnItem.type)}</TableCell>
                      <TableCell>{returnItem.items}</TableCell>
                      <TableCell className="font-semibold">
                        {returnItem.amount}
                      </TableCell>
                      <TableCell>{returnItem.date}</TableCell>
                      <TableCell>{getStatusBadge(returnItem.status)}</TableCell>
                      <TableCell className="text-right">
                        {returnItem.status === "pending" ? (
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="default" size="sm">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="destructive" size="sm">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Chi tiết
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="refunds" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Danh sách hoàn tiền</CardTitle>
              <CardDescription>
                Theo dõi và xử lý các giao dịch hoàn tiền
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã hoàn tiền</TableHead>
                    <TableHead>Mã đơn</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Số tiền</TableHead>
                    <TableHead>Phương thức</TableHead>
                    <TableHead>Ngày</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {refunds.map((refund) => (
                    <TableRow key={refund.id}>
                      <TableCell className="font-medium">{refund.id}</TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {refund.orderId}
                        </code>
                      </TableCell>
                      <TableCell>{refund.customer}</TableCell>
                      <TableCell className="font-semibold text-red-600">
                        {refund.amount}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {refund.method === "bank_transfer"
                            ? "Chuyển khoản"
                            : "Ví điện tử"}
                        </Badge>
                      </TableCell>
                      <TableCell>{refund.date}</TableCell>
                      <TableCell>{getStatusBadge(refund.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
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
      </Tabs>
    </div>
  );
}
