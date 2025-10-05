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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { useState } from "react";

export default function SupplierQualityPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const qualityReports = [
    {
      supplier: "Công ty TNHH ABC",
      supplierId: "NCC001",
      rating: 4.5,
      defectRate: "2.3%",
      returnRate: "1.5%",
      onTimeDelivery: "95%",
      stockAccuracy: "98%",
      trend: "up",
    },
    {
      supplier: "Nhà cung cấp XYZ",
      supplierId: "NCC002",
      rating: 4.8,
      defectRate: "1.2%",
      returnRate: "0.8%",
      onTimeDelivery: "98%",
      stockAccuracy: "99%",
      trend: "up",
    },
    {
      supplier: "Công ty CP DEF",
      supplierId: "NCC003",
      rating: 3.9,
      defectRate: "5.6%",
      returnRate: "3.2%",
      onTimeDelivery: "87%",
      stockAccuracy: "92%",
      trend: "down",
    },
    {
      supplier: "Công ty TNHH GHI",
      supplierId: "NCC004",
      rating: 4.7,
      defectRate: "1.8%",
      returnRate: "1.2%",
      onTimeDelivery: "96%",
      stockAccuracy: "97%",
      trend: "stable",
    },
  ];

  const issues = [
    {
      id: "ISS001",
      supplier: "Công ty CP DEF",
      issue: "Tỷ lệ lỗi cao",
      severity: "high",
      date: "2024-01-15",
      status: "open",
    },
    {
      id: "ISS002",
      supplier: "Công ty TNHH ABC",
      issue: "Giao hàng trễ",
      severity: "medium",
      date: "2024-01-14",
      status: "resolved",
    },
    {
      id: "ISS003",
      supplier: "Công ty CP DEF",
      issue: "Sai số lượng",
      severity: "medium",
      date: "2024-01-13",
      status: "open",
    },
  ];

  const getRatingStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "fill-yellow-500 text-yellow-500"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 font-semibold">{rating}</span>
      </div>
    );
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up")
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (trend === "down")
      return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <span className="text-muted-foreground text-sm">—</span>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">
            Báo cáo chất lượng NCC
          </h1>
          <p className="text-muted-foreground mt-2">
            Đánh giá và theo dõi chất lượng nhà cung cấp
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Tuần này</SelectItem>
              <SelectItem value="month">Tháng này</SelectItem>
              <SelectItem value="quarter">Quý này</SelectItem>
              <SelectItem value="year">Năm này</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đánh giá TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              4.5
            </div>
            <p className="text-xs text-muted-foreground mt-1">Trên 5 sao</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ lỗi TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2.7%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Giảm 0.5% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Giao hàng đúng hạn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">94%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Tăng 2% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Vấn đề chưa xử lý
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">5</div>
            <p className="text-xs text-muted-foreground mt-1">Cần xử lý</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bảng đánh giá chất lượng</CardTitle>
          <CardDescription>
            Các chỉ số chất lượng của nhà cung cấp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nhà cung cấp</TableHead>
                <TableHead>Đánh giá</TableHead>
                <TableHead>Tỷ lệ lỗi</TableHead>
                <TableHead>Tỷ lệ trả hàng</TableHead>
                <TableHead>Giao đúng hạn</TableHead>
                <TableHead>Độ chính xác</TableHead>
                <TableHead>Xu hướng</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {qualityReports.map((report) => (
                <TableRow key={report.supplierId}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{report.supplier}</p>
                      <p className="text-xs text-muted-foreground">
                        {report.supplierId}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{getRatingStars(report.rating)}</TableCell>
                  <TableCell>
                    <span
                      className={
                        Number.parseFloat(report.defectRate) > 3
                          ? "text-red-600 font-semibold"
                          : ""
                      }
                    >
                      {report.defectRate}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        Number.parseFloat(report.returnRate) > 2
                          ? "text-red-600 font-semibold"
                          : ""
                      }
                    >
                      {report.returnRate}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[80px]">
                        <div
                          className={`h-full ${
                            Number.parseFloat(report.onTimeDelivery) > 90
                              ? "bg-green-600"
                              : "bg-yellow-600"
                          }`}
                          style={{ width: report.onTimeDelivery }}
                        />
                      </div>
                      <span className="text-sm">{report.onTimeDelivery}</span>
                    </div>
                  </TableCell>
                  <TableCell>{report.stockAccuracy}</TableCell>
                  <TableCell>{getTrendIcon(report.trend)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Chi tiết
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
          <CardTitle>Vấn đề cần xử lý</CardTitle>
          <CardDescription>
            Các vấn đề chất lượng từ nhà cung cấp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã vấn đề</TableHead>
                <TableHead>Nhà cung cấp</TableHead>
                <TableHead>Vấn đề</TableHead>
                <TableHead>Mức độ</TableHead>
                <TableHead>Ngày phát hiện</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell className="font-medium">{issue.id}</TableCell>
                  <TableCell>{issue.supplier}</TableCell>
                  <TableCell>{issue.issue}</TableCell>
                  <TableCell>
                    {issue.severity === "high" && (
                      <Badge className="bg-red-600">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Cao
                      </Badge>
                    )}
                    {issue.severity === "medium" && (
                      <Badge className="bg-yellow-600">Trung bình</Badge>
                    )}
                    {issue.severity === "low" && (
                      <Badge className="bg-blue-600">Thấp</Badge>
                    )}
                  </TableCell>
                  <TableCell>{issue.date}</TableCell>
                  <TableCell>
                    {issue.status === "open" ? (
                      <Badge className="bg-yellow-600">Đang xử lý</Badge>
                    ) : (
                      <Badge className="bg-green-600">Đã giải quyết</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Xử lý
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
