"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Headphones,
  Gift,
  Truck,
  ChevronLeft,
  ChevronRight,
  BookUser,
  NotebookTabs,
  BookCopy,
  PackageOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    title: "Tổng quan",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Quản lý chức vụ",
    href: "/admin/positions",
    icon: NotebookTabs,
  },
  // {
  //   title: "Quản lý khách hàng",
  //   href: "/admin/customers",
  //   icon: BookUser,
  // },
  // {
  //   title: "Quản lý danh mục",
  //   href: "/admin/categories",
  //   icon: BookCopy,
  // },
  // {
  //   title: "Quản lý sản phẩm",
  //   href: "/admin/products",
  //   icon: Package,
  // },
  // {
  //   title: "Quản lý nhà cung cấp",
  //   href: "/admin/suppliers",
  //   icon: Truck,
  // },
  // {
  //   title: "Phiếu nhập hàng",
  //   href: "/admin/receipts",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Lịch sử nhập hàng",
  //   href: "/admin/supplier-history",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Báo cáo chấp lượng hàng",
  //   href: "/admin/quality-supplier",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Sản phẩm và tồn kho",
  //   href: "/admin/product-inventory",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Trang thái và lịch sử kho",
  //   href: "/admin/status-inventory",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Phiếu nhập hàng của kho",
  //   href: "/admin/receipts-inventory",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Báo cáo kho",
  //   href: "/admin/report-inventory",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Quản lý đơn hàng",
  //   href: "/admin/management-order",
  //   icon: PackageOpen,
  // },
  // {
  //   title: "Thống kê",
  //   href: "/admin/analytics",
  //   icon: BarChart3,
  // },
  // {
  //   title: "Hoàn tiền vs Trả hàng",
  //   href: "/admin/returns",
  //   icon: ShoppingCart,
  // },
  // {
  //   title: "Sự kiện ưu đãi",
  //   href: "/admin/promotions",
  //   icon: Gift,
  // },
  // {
  //   title: "Thông báo khách hàng",
  //   href: "/admin/notifications",
  //   icon: Headphones,
  // },
  // {
  //   title: "Settings",
  //   href: "/admin/settings",
  //   icon: Settings,
  // },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-sidebar-foreground">
              Admin
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-primary"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav
        className="p-2 space-y-2 overflow-y-auto transition-all ease-linear"
        style={{ maxHeight: "calc(100vh - 4rem)" }}
      >
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors mb-[2px]",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="font-medium">{item.title}</span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
