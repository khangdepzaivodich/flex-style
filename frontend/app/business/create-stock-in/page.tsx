"use client";

import React from 'react'
import Receipt from '../../../components/business/Receipt'

export default function Page() {
  const receiptProps = {
    receiptCode: "PNH-001",
    supplier: "Công ty ABC",
    invoiceDate: new Date().toLocaleDateString('vi-VN'),
    warehouse: "Kho Hà Nội",
    address: "Số 1, Đường X",
    onDownloadExcel: () => {
      console.log('Download excel clicked')
      alert('Download excel (placeholder)')
    },
    onCreate: () => {
      console.log('Create receipt clicked')
      alert('Tạo phiếu (placeholder)')
    },
  } as any

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Receipt {...receiptProps} />
    </div>
  )
}