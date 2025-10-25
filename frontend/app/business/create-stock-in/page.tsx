"use client";

import React from 'react'
import Receipt from '../../../components/business/Receipt'

export default function Page() {
  const onDownloadExcel = () => {
    console.log('Download excel clicked')
    alert('Download excel (placeholder)')
  }

  const onCreate = () => {
    console.log('Create receipt clicked')
    alert('Tạo phiếu (placeholder)')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
  <Receipt onDownloadExcel={onDownloadExcel} onCreate={onCreate} />
    </div>
  )
}