"use client";

import type React from "react";

import ProtectedRoute from "@/components/protected-route";
import { OperatorSidebar } from "@/components/operator/operator-sidebar";
import { OperatorHeader } from "@/components/operator/operator-header";

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute blockedRoles={["KH", "QLDN", "NVCSKH", "NCC", "ADMIN"]}>
      <div className="flex h-screen bg-background">
        <OperatorSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <OperatorHeader />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
