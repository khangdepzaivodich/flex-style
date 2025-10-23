"use client";

import type React from "react";

import ProtectedRoute from "@/components/protected-route";
import { CustomerServiceSidebar } from "@/components/customer-service/cs-sidebar";
import { CustomerServiceHeader } from "@/components/customer-service/cs-header";

export default function CusLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute Role={"NVCSKH"}>
      <div className="flex h-screen bg-background">
        <CustomerServiceSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <CustomerServiceHeader />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
