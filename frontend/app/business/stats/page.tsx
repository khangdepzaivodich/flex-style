"use client";

import React from 'react'
import StatsGrid from '../../../components/business/StatsGrid'
import PerformanceCardDisplay from '../../../components/business/PerformanceCardDisplay';
import StatsChart from '../../../components/business/StatsChart';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground">Phân tích chi tiết hiệu suất kinh doanh</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 ngày qua</SelectItem>
              <SelectItem value="30days">30 ngày qua</SelectItem>
              <SelectItem value="90days">90 ngày qua</SelectItem>
              <SelectItem value="1year">1 năm qua</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <StatsGrid />
        <PerformanceCardDisplay />
        <div className="mt-6 border-t border-transparent pt-6">
          <StatsChart />
        </div>
      </div>
    </div>
  )
}
	