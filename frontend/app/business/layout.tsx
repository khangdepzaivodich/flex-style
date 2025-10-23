"use client";

import type React from "react";
import ProtectedRoute from "@/components/protected-route";
import { BusinessSidebar } from "@/components/business/business-sidebar";
import { BusinessHeader } from "@/components/business/business-header";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute Role={"QLDN"}>
      <div className="flex h-screen bg-background">
        <BusinessSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <BusinessHeader />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
