import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  Users,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

export default function SystemDashboard() {
  const stats = [
    {
      title: "Tổng sản phẩm",
      value: "1,234",
      change: "+12%",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Đơn hàng hôm nay",
      value: "89",
      change: "+23%",
      icon: ShoppingCart,
      color: "text-green-600",
    },
    {
      title: "Khách hàng",
      value: "5,678",
      change: "+8%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Doanh thu tháng",
      value: "₫234M",
      change: "+15%",
      icon: DollarSign,
      color: "text-yellow-600",
    },
    {
      title: "Sản phẩm sắp hết",
      value: "23",
      change: "-5%",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      title: "Tăng trưởng",
      value: "18.5%",
      change: "+3%",
      icon: TrendingUp,
      color: "text-indigo-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Tổng quan hệ thống</h1>
        <p className="text-muted-foreground mt-2">
          Chào mừng đến với hệ thống quản lý CNPM
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span
                  className={
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {stat.change}
                </span>{" "}
                so với tháng trước
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>
              Các hoạt động mới nhất trong hệ thống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Đơn hàng mới",
                  detail: "#ORD-1234 - Nguyễn Văn A",
                  time: "5 phút trước",
                },
                {
                  action: "Nhập hàng",
                  detail: "50 sản phẩm từ NCC ABC",
                  time: "1 giờ trước",
                },
                {
                  action: "Khách hàng mới",
                  detail: "Trần Thị B đã đăng ký",
                  time: "2 giờ trước",
                },
                {
                  action: "Cảnh báo tồn kho",
                  detail: "Áo thun trắng sắp hết",
                  time: "3 giờ trước",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b last:border-0"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.detail}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cảnh báo quan trọng</CardTitle>
            <CardDescription>Các vấn đề cần xử lý ngay</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "Tồn kho",
                  message: "23 sản phẩm sắp hết hàng",
                  priority: "high",
                },
                {
                  type: "Đơn hàng",
                  message: "5 đơn hàng chờ xác nhận",
                  priority: "medium",
                },
                {
                  type: "Khách hàng",
                  message: "12 yêu cầu hỗ trợ chưa xử lý",
                  priority: "medium",
                },
                {
                  type: "Nhà cung cấp",
                  message: "2 phiếu nhập chờ xác nhận",
                  priority: "low",
                },
              ].map((alert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b last:border-0"
                >
                  <div
                    className={`h-2 w-2 rounded-full mt-2 ${
                      alert.priority === "high"
                        ? "bg-red-600"
                        : alert.priority === "medium"
                        ? "bg-yellow-600"
                        : "bg-blue-600"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{alert.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {alert.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
