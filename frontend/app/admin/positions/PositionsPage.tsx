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
import { Plus, Trash2, Briefcase, Users, Search, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import AccountListPopup from "@/components/admin/admin-popupAcc";
import { useState } from "react";
type VaiTro = "KH" | "NCC" | "QLDN" | "NVVH" | "NVCSKH" | "ADMIN";
type TrangThai = "ACTIVE" | "INACTIVE";

const data = [
  {
    MaTK: "TK001",
    DisplayName: "Nguyễn Văn Quản Lý",
    Email: "quanly@example.com",
    Avatar: null,
    VAITRO: "QLDN" as VaiTro,
    Status: "ACTIVE" as TrangThai,
    created_at: new Date("2024-01-10T08:00:00Z"),
    updated_at: new Date("2024-06-01T10:00:00Z"),
  },
  {
    MaTK: "TK002",
    DisplayName: "Trần Thị Vận Hành",
    Email: "vanhanh@example.com",
    Avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    VAITRO: "NVVH" as VaiTro,
    Status: "ACTIVE" as TrangThai,
    created_at: new Date("2024-02-15T09:30:00Z"),
    updated_at: new Date("2024-06-02T11:00:00Z"),
  },
  {
    MaTK: "TK003",
    DisplayName: "Lê Văn Admin",
    Email: "admin@example.com",
    Avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    VAITRO: "CSKH" as VaiTro,
    Status: "INACTIVE" as TrangThai,
    created_at: new Date("2024-03-20T12:00:00Z"),
    updated_at: new Date("2024-06-03T12:00:00Z"),
  },
];
export default function PositionsPage() {
  const positions = [
    {
      id: "POS-001",
      name: "Quản lý doanh nghiệp",
      code: "QLDN",
      department: "Quản lý",
      level: "Cấp cao",
      employees: 1,
      salary: "₫15,000,000 - ₫25,000,000",
      status: "active",
    },
    {
      id: "POS-002",
      name: "Nhân viên vận hành",
      code: "NVVH",
      department: "Vận hành",
      level: "Nhân viên",
      employees: 3,
      salary: "₫8,000,000 - ₫12,000,000",
      status: "active",
    },
    {
      id: "POS-003",
      name: "Chăm sóc khách hàng",
      code: "CSKH",
      department: "Dịch vụ",
      level: "Nhân viên",
      employees: 4,
      salary: "₫8,000,000 - ₫11,000,000",
      status: "active",
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedTypeData, setSelectedTypeData] = useState<string>("");

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Cấp cao":
        return <Badge className="bg-purple-600">Cấp cao</Badge>;
      case "Nhân viên":
        return <Badge variant="outline">Nhân viên</Badge>;
      default:
        return <Badge>Khác</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <AccountListPopup
        open={open}
        onClose={() => setOpen(false)}
        accounts={data.filter((acc) =>
          selectedTypeData ? acc.VAITRO === selectedTypeData : true
        )}
      />
      {/* <div className="flex items-center justify-between">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Tìm kiếm..."
            className="pl-10 bg-muted border-0"
          />
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm chức vụ
        </Button>
      </div> */}

      <Card>
        <CardHeader>
          <CardTitle>Danh sách chức vụ</CardTitle>
          <CardDescription>
            Quản lý thông tin chức vụ và phân cấp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {/* <TableHead>Mã chức vụ</TableHead> */}
                <TableHead>Tên chức vụ</TableHead>
                <TableHead>Mã code</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Cấp bậc</TableHead>
                <TableHead>Số nhân viên</TableHead>
                <TableHead>Mức lương</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positions.map((position) => (
                <TableRow key={position.id}>
                  {/* <TableCell className="font-medium">{position.id}</TableCell> */}
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="font-medium">{position.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {position.code}
                    </code>
                  </TableCell>
                  <TableCell>{position.department}</TableCell>
                  <TableCell>{getLevelBadge(position.level)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{position.employees}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{position.salary}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-600">Hoạt động</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setOpen(true);
                          setSelectedTypeData(position.code);
                        }}
                      >
                        <List className="h-4 w-4" />
                      </Button>
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
