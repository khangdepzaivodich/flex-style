import React from 'react'
import CategoryPerformanceCard from './CategoryPerformanceCard'
import BestSellingProductsCard from './BestSellingProductsCard'

export default function StatsCardsPreview() {
  const categoryItems = [
    { name: 'Thời trang nam', amount: 45000, change: 12.5 },
    { name: 'Thời trang nữ', amount: 36000, change: 8.2 },
    { name: 'Phụ kiện', amount: 25000, change: 15.5 },
    { name: 'Giày dép', amount: 18000, change: -2.8 },
  ]

  const productItems = [
    { name: 'Áo sơ mi trắng', sold: 245, revenue: 12250000 },
    { name: 'Quần jean slim', sold: 189, revenue: 9450000 },
    { name: 'Váy maxi hoa', sold: 156, revenue: 7800000 },
    { name: 'Giày sneaker', sold: 136, revenue: 6700000 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full h-full">
        <CategoryPerformanceCard items={categoryItems} />
      </div>

      <div className="w-full h-full">
        <BestSellingProductsCard items={productItems} />
      </div>
    </div>
  )
}
