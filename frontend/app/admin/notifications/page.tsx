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
import {
  Bell,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: "NOT-001",
      customer: "Nguyễn Văn A",
      orderId: "ORD-1234",
      type: "order_confirmed",
      channel: "email",
      message: "Đơn hàng đã được xác nhận",
      date: "2024-01-15 10:30",
      status: "sent",
    },
    {
      id: "NOT-002",
      customer: "Trần Thị B",
      orderId: "ORD-1235",
      type: "shipping",
      channel: "sms",
      message: "Đơn hàng đang được giao",
      date: "2024-01-15 09:15",
      status: "sent",
    },
    {
      id: "NOT-003",
      customer: "Lê Văn C",
      orderId: "ORD-1236",
      type: "delivered",
      channel: "push",
      message: "Đơn hàng đã được giao thành công",
      date: "2024-01-14 16:45",
      status: "sent",
    },
    {
      id: "NOT-004",
      customer: "Phạm Thị D",
      orderId: "ORD-1237",
      type: "promotion",
      channel: "email",
      message: "Ưu đãi đặc biệt dành cho bạn",
      date: "2024-01-14 14:20",
      status: "pending",
    },
  ];

  const templates = [
    {
      id: "TPL-001",
      name: "Xác nhận đơn hàng",
      type: "order_confirmed",
      channels: ["email", "sms"],
      usage: 1234,
      status: "active",
    },
    {
      id: "TPL-002",
      name: "Đơn hàng đang giao",
      type: "shipping",
      channels: ["email", "sms", "push"],
      usage: 1156,
      status: "active",
    },
    {
      id: "TPL-003",
      name: "Đơn hàng đã giao",
      type: "delivered",
      channels: ["email", "push"],
      usage: 1089,
      status: "active",
    },
    {
      id: "TPL-004",
      name: "Khuyến mãi đặc biệt",
      type: "promotion",
      channels: ["email"],
      usage: 567,
      status: "active",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return (
          <Badge className="bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Đã gửi
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-600">
            <Clock className="h-3 w-3 mr-1" />
            Chờ gửi
          </Badge>
        );
      case "failed":
        return <Badge className="bg-red-600">Thất bại</Badge>;
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "sms":
        return <MessageSquare className="h-4 w-4" />;
      case "push":
        return <Bell className="h-4 w-4" />;
      default:
        return <Send className="h-4 w-4" />;
    }
  };

  const getChannelLabel = (channel: string) => {
    switch (channel) {
      case "email":
        return "Email";
      case "sms":
        return "SMS";
      case "push":
        return "Push";
      default:
        return channel;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">
          Quản lý thông báo khách hàng
        </h1>
        <p className="text-muted-foreground mt-2">
          Gửi và theo dõi thông báo đến khách hàng
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đã gửi hôm nay
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground mt-1">Thông báo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ mở
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">68%</div>
            <p className="text-xs text-muted-foreground mt-1">Email</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ click
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">24%</div>
            <p className="text-xs text-muted-foreground mt-1">Trung bình</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chờ gửi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">45</div>
            <p className="text-xs text-muted-foreground mt-1">Thông báo</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="notifications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="notifications">Lịch sử gửi</TabsTrigger>
          <TabsTrigger value="templates">Mẫu thông báo</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lịch sử thông báo</CardTitle>
              <CardDescription>
                Theo dõi các thông báo đã gửi đến khách hàng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã TB</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Mã đơn</TableHead>
                    <TableHead>Loại</TableHead>
                    <TableHead>Kênh</TableHead>
                    <TableHead>Nội dung</TableHead>
                    <TableHead>Thời gian</TableHead>
                    <TableHead>Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notifications.map((notification) => (
                    <TableRow key={notification.id}>
                      <TableCell className="font-medium">
                        {notification.id}
                      </TableCell>
                      <TableCell>{notification.customer}</TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {notification.orderId}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{notification.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getChannelIcon(notification.channel)}
                          <span className="text-sm">
                            {getChannelLabel(notification.channel)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {notification.message}
                      </TableCell>
                      <TableCell className="text-sm">
                        {notification.date}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(notification.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Mẫu thông báo</CardTitle>
                  <CardDescription>
                    Quản lý các mẫu thông báo tự động
                  </CardDescription>
                </div>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Tạo mẫu mới
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã mẫu</TableHead>
                    <TableHead>Tên mẫu</TableHead>
                    <TableHead>Loại</TableHead>
                    <TableHead>Kênh hỗ trợ</TableHead>
                    <TableHead>Lượt sử dụng</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">
                        {template.id}
                      </TableCell>
                      <TableCell>{template.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{template.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {template.channels.map((channel) => (
                            <div
                              key={channel}
                              className="flex items-center gap-1"
                            >
                              {getChannelIcon(channel)}
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{template.usage}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-600">Hoạt động</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Chỉnh sửa
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
