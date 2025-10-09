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
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Gift, Calendar, TrendingUp, Eye } from "lucide-react";
import { PromotionModal } from "@/components/system/modals/promotion-modal";

export default function PromotionsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const promotions = [
    {
      id: "PROMO-001",
      name: "Flash Sale Cuối Tuần",
      type: "flash_sale",
      discount: "30%",
      startDate: "2024-01-20",
      endDate: "2024-01-22",
      usage: 234,
      revenue: "₫45M",
      status: "scheduled",
    },
    {
      id: "PROMO-002",
      name: "Giảm giá Tết Nguyên Đán",
      type: "seasonal",
      discount: "50%",
      startDate: "2024-02-01",
      endDate: "2024-02-15",
      usage: 0,
      revenue: "₫0",
      status: "scheduled",
    },
    {
      id: "PROMO-003",
      name: "Mua 2 Tặng 1",
      type: "bundle",
      discount: "33%",
      startDate: "2024-01-10",
      endDate: "2024-01-31",
      usage: 567,
      revenue: "₫89M",
      status: "active",
    },
    {
      id: "PROMO-004",
      name: "Giảm 20% Toàn Bộ",
      type: "site_wide",
      discount: "20%",
      startDate: "2024-01-01",
      endDate: "2024-01-15",
      usage: 1234,
      revenue: "₫234M",
      status: "ended",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Đang diễn ra</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-600">Đã lên lịch</Badge>;
      case "ended":
        return <Badge className="bg-gray-600">Đã kết thúc</Badge>;
      case "paused":
        return <Badge className="bg-yellow-600">Tạm dừng</Badge>;
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "flash_sale":
        return <Badge variant="outline">Flash Sale</Badge>;
      case "seasonal":
        return <Badge variant="outline">Theo mùa</Badge>;
      case "bundle":
        return <Badge variant="outline">Combo</Badge>;
      case "site_wide":
        return <Badge variant="outline">Toàn site</Badge>;
      default:
        return <Badge variant="outline">Khác</Badge>;
    }
  };

  const handlePause = (promoId: string) => {
    console.log("[v0] Pausing promotion:", promoId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">
            Quản lý sự kiện ưu đãi
          </h1>
          <p className="text-muted-foreground mt-2">
            Tạo và quản lý các chương trình khuyến mãi
          </p>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Tạo sự kiện mới
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đang diễn ra
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">5</div>
            <p className="text-xs text-muted-foreground mt-1">Sự kiện</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đã lên lịch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">12</div>
            <p className="text-xs text-muted-foreground mt-1">Sự kiện</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Doanh thu từ KM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₫368M</div>
            <p className="text-xs text-muted-foreground mt-1">Tháng này</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ chuyển đổi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">45%</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +8% so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách sự kiện ưu đãi</CardTitle>
          <CardDescription>
            Quản lý các chương trình khuyến mãi và ưu đãi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã sự kiện</TableHead>
                <TableHead>Tên sự kiện</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Giảm giá</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Lượt sử dụng</TableHead>
                <TableHead>Doanh thu</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((promo) => (
                <TableRow key={promo.id}>
                  <TableCell className="font-medium">{promo.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-primary" />
                      <span className="font-medium">{promo.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getTypeBadge(promo.type)}</TableCell>
                  <TableCell>
                    <span className="font-semibold text-red-600">
                      {promo.discount}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p>{promo.startDate}</p>
                        <p className="text-muted-foreground">
                          đến {promo.endDate}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{promo.usage}</TableCell>
                  <TableCell className="font-semibold">
                    {promo.revenue}
                  </TableCell>
                  <TableCell>{getStatusBadge(promo.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Chi tiết
                      </Button>
                      {promo.status === "active" && (
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handlePause(promo.id)}
                        >
                          Tạm dừng
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

      <PromotionModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
}
