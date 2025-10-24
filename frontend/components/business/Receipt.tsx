import React, { useState } from 'react'

type Item = {
  name: string
  code: string
  unit: string
  qty: number
  unitPrice: number
}

export type ReceiptData = {
  date: string
  receiptCode: string
  supplier?: string
  invoiceDate?: string
  warehouse?: string
  address?: string
  item: Item
}

type ReceiptProps = {
  initial?: Partial<ReceiptData>
  onDownloadExcel?: (data: ReceiptData) => void
  onCreate?: (data: ReceiptData) => void
}

const formatCurrency = (v: number) =>
  new Intl.NumberFormat('vi-VN').format(v) + '₫'

export default function Receipt({ initial = {}, onDownloadExcel, onCreate }: ReceiptProps) {
  const [date, setDate] = useState<string>(initial.date ?? '')
  const [receiptCode, setReceiptCode] = useState<string>(initial.receiptCode ?? '')
  const [supplier, setSupplier] = useState<string>(initial.supplier ?? '')
  const [invoiceDate, setInvoiceDate] = useState<string>(initial.invoiceDate ?? '')
  const [warehouse, setWarehouse] = useState<string>(initial.warehouse ?? '')
  const [address, setAddress] = useState<string>(initial.address ?? '')

  const [item, setItem] = useState<Item>(
    (initial.item as Item) ?? {
      name: 'Áo Khoác jean Phối Nón The Original 039 Xanh Dương',
      code: 'W9ED09E',
      unit: 'Cái',
      qty: 666,
      unitPrice: 500000,
    }
  )

  const total = item.qty * item.unitPrice

  function handleItemField<K extends keyof Item>(field: K, value: Item[K]) {
    setItem((prev) => ({ ...prev, [field]: value }))
  }

  function buildData(): ReceiptData {
    return {
      date,
      receiptCode,
      supplier,
      invoiceDate,
      warehouse,
      address,
      item,
    }
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 text-gray-800 font-sans text-base">
      <div className="text-center">
        <h1 className="text-2xl font-bold">PHIẾU NHẬP HÀNG</h1>
        <div className="mt-2 text-sm grid grid-cols-2 gap-4 items-end">
          <div className="text-left">
            <label className="block text-xs text-gray-600">Ngày nhập hàng</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 border rounded px-2 py-1 w-full text-sm"
            />
          </div>

          <div className="text-left">
            <label className="block text-xs text-gray-600">Mã phiếu nhập hàng</label>
            <input
              type="text"
              value={receiptCode}
              onChange={(e) => setReceiptCode(e.target.value)}
              placeholder="Nhập mã phiếu"
              className="mt-1 border rounded px-2 py-1 w-full text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm space-y-2">
        <div>
          <label className="block text-xs text-gray-600">Họ và tên người giao</label>
          <input
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Có thể để trống"
            className="mt-1 border rounded px-2 py-1 w-full text-sm"
          />
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600">Theo hóa đơn ngày</label>
            <div className="flex items-center gap-3">
              <input
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="mt-1 border rounded px-2 py-1 text-sm"
              />
              <span className="text-sm text-gray-700">của FlexStyle Store</span>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600">Nhập tại kho</label>
                <input
                  type="text"
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}
                  placeholder="Nhập tại kho"
                  className="mt-1 border rounded px-2 py-1 w-full text-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600">Địa chỉ</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Địa chỉ"
                  className="mt-1 border rounded px-2 py-1 w-full text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border border-gray-300">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="border px-3 py-2" style={{ width: '45%' }}>Tên</th>
              <th className="border px-3 py-2" style={{ width: '10%' }}>Mã SP</th>
              <th className="border px-3 py-2" style={{ width: '10%' }}>Đơn vị tính</th>
              <th className="border px-3 py-2" style={{ width: '10%' }}>Số lượng</th>
              <th className="border px-3 py-2" style={{ width: '12%' }}>Đơn giá</th>
              <th className="border px-3 py-2" style={{ width: '13%' }}>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm align-top">
              <td className="border px-3 py-2 text-left" style={{ width: '45%' }}>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleItemField('name', e.target.value)}
                  className="w-full text-base"
                />
              </td>
              <td className="border px-3 py-2 text-center">
                <input
                  type="text"
                  value={item.code}
                  onChange={(e) => handleItemField('code', e.target.value)}
                  className="w-full text-sm text-center"
                />
              </td>
              <td className="border px-3 py-2 text-center">
                <input
                  type="text"
                  value={item.unit}
                  onChange={(e) => handleItemField('unit', e.target.value)}
                  className="w-full text-sm text-center"
                />
              </td>
              <td className="border px-3 py-2 text-center">
                <input
                  type="number"
                  min={0}
                  value={item.qty}
                  onChange={(e) => handleItemField('qty', Number(e.target.value))}
                  className="w-full max-w-[100px] text-sm text-center mx-auto"
                />
              </td>
              <td className="border px-3 py-2 text-center">
                <input
                  type="number"
                  min={0}
                  value={item.unitPrice}
                  onChange={(e) => handleItemField('unitPrice', Number(e.target.value))}
                  className="w-full max-w-[140px] text-sm text-right mx-auto"
                />
              </td>
              <td className="border px-3 py-2 text-right">
                <div className="max-w-[140px] truncate ml-auto" title={formatCurrency(total)}>
                  {formatCurrency(total)}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-base font-semibold">
        <div>Tổng số tiền (bằng chữ): .....................................</div>
        <div className="mt-2">
          <div className="text-base font-semibold" title={formatCurrency(total)}>
            Tổng số tiền (bằng số): {formatCurrency(total)}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 text-center text-sm">
        <div>
          <div className="font-bold">Người lập</div>
          <div className="italic text-gray-500 mt-8">(Ký, họ tên)</div>
        </div>
        <div>
          <div className="font-bold">Người giao</div>
          <div className="italic text-gray-500 mt-8">(Ký, họ tên)</div>
        </div>
        <div>
          <div className="font-bold">Quản lý kho</div>
          <div className="italic text-gray-500 mt-8">(Ký, họ tên)</div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-6">
        <button
          onClick={() => {
            const data = buildData()
            if (onDownloadExcel) onDownloadExcel(data)
            else {
              console.log('Download excel data:', data)
              alert('Download excel (placeholder)')
            }
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          Tải xuống excel
        </button>
        <button
          onClick={() => {
            const data = buildData()
            if (onCreate) onCreate(data)
            else {
              console.log('Create receipt data:', data)
              alert('Tạo phiếu (placeholder)')
            }
          }}
          className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded shadow"
        >
          Tạo phiếu
        </button>
      </div>
    </div>
  )
}
