"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Package,
  MessageSquare,
  Users,
  Layers,
  PlusSquare,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  SquareKanban,
  UserSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { title: "Quản lý nhân viên", href: "/business/staff", icon: Users },
  { title: "Quản lý sản phẩm", href: "/business/products", icon: Package },
  { title: "Thống kê", href: "/business/stats", icon: SquareKanban },
  { title: "Phản hồi người dùng", href: "/business/feedback", icon: MessageSquare },
  { title: "Quản lý người dùng", href: "/business/users", icon: UserSquare },
  { title: "Danh mục sản phẩm", href: "/business/categories", icon: Layers },
  { title: "Tạo phiếu nhập hàng", href: "/business/create-stock-in", icon: PlusSquare },
  { title: "Xác nhận nhập hàng", href: "/business/confirm-stock-in", icon: CheckSquare },
];

export function BusinessSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "bg-sidebar border-r border-sidebar-border transition-[width] duration-300 ease-linear",
        collapsed ? "w-16" : "w-64"
      )}
      style={{ minWidth: collapsed ? "4rem" : "16rem" }}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-sidebar-foreground">Quản lý doanh nghiệp</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-primary"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="p-2 space-y-2 overflow-y-auto" style={{ maxHeight: "calc(100vh - 4rem)" }}>
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
                {!collapsed && <span className="font-medium">{item.title}</span>}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
