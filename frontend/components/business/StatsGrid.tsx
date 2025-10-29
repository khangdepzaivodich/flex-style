import React from 'react'
import StatsCard from './StatsCard'
import { ShoppingCart, DollarSign, Users } from 'lucide-react'

// Lưới thống kê hiển thị các thẻ thống kê
export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatsCard
        title="Tổng doanh thu"
        value={436000000}
        delta="+12.5%"
        deltaPositive={true}
        icon={<DollarSign className="w-6 h-6 text-slate-400" />}
      />

      <StatsCard
        title="Tổng hóa đơn"
        value={1025}
        format="number"
        delta="+8.2%"
        deltaPositive={true}
        icon={<ShoppingCart className="w-6 h-6 text-slate-400" />}
      />

      <StatsCard
        title="Khách hàng mới"
        value={682}
        format="number"
        delta="+12.5%"
        deltaPositive={true}
        icon={<Users className="w-6 h-6 text-slate-400" />}
      />
    </div>
  )
}
