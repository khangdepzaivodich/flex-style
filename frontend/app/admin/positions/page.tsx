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
import { Plus, Edit, Trash2, Briefcase, Users } from "lucide-react";

export default function PositionsPage() {
  const positions = [
    {
      id: "POS-001",
      name: "Quản lý cửa hàng",
      code: "MANAGER",
      department: "Quản lý",
      level: "Cấp cao",
      employees: 5,
      salary: "₫15,000,000 - ₫25,000,000",
      status: "active",
    },
    {
      id: "POS-002",
      name: "Nhân viên bán hàng",
      code: "SALES",
      department: "Bán hàng",
      level: "Nhân viên",
      employees: 25,
      salary: "₫8,000,000 - ₫12,000,000",
      status: "active",
    },
    {
      id: "POS-003",
      name: "Nhân viên kho",
      code: "WAREHOUSE",
      department: "Kho",
      level: "Nhân viên",
      employees: 12,
      salary: "₫7,000,000 - ₫10,000,000",
      status: "active",
    },
    {
      id: "POS-004",
      name: "Chăm sóc khách hàng",
      code: "CS",
      department: "Dịch vụ",
      level: "Nhân viên",
      employees: 8,
      salary: "₫8,000,000 - ₫11,000,000",
      status: "active",
    },
    {
      id: "POS-005",
      name: "Kế toán",
      code: "ACCOUNTANT",
      department: "Tài chính",
      level: "Chuyên viên",
      employees: 3,
      salary: "₫10,000,000 - ₫15,000,000",
      status: "active",
    },
  ];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Cấp cao":
        return <Badge className="bg-purple-600">Cấp cao</Badge>;
      case "Chuyên viên":
        return <Badge className="bg-blue-600">Chuyên viên</Badge>;
      case "Nhân viên":
        return <Badge variant="outline">Nhân viên</Badge>;
      default:
        return <Badge>Khác</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Quản lý chức vụ</h1>
          <p className="text-muted-foreground mt-2">
            Quản lý các chức vụ và cấp bậc trong công ty
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm chức vụ
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng chức vụ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground mt-1">Đang hoạt động</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cấp cao
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">3</div>
            <p className="text-xs text-muted-foreground mt-1">Chức vụ</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chuyên viên
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">5</div>
            <p className="text-xs text-muted-foreground mt-1">Chức vụ</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Nhân viên
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-1">Chức vụ</p>
          </CardContent>
        </Card>
      </div>

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
                <TableHead>Mã chức vụ</TableHead>
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
                  <TableCell className="font-medium">{position.id}</TableCell>
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
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
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
