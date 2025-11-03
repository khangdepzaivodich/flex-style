import React, { useState } from "react";
import { Download, Plus, X } from "lucide-react";

type Item = {
  name: string; // Tên sản phẩm
  size: string; // Kích cỡ
  unit: string; // Đơn vị tính
  qty: number; // Số lượng
  unitPrice: number; // Đơn giá
};

export type ReceiptData = {
  date: string; // Ngày nhập hàng
  receiptCode: string; // Mã phiếu nhập hàng
  supplier?: string; // Họ và tên người giao
  item: Item[];
  totalInWords?: string; // Tổng số tiền bằng chữ
};

type ReceiptProps = {
  initial?: Partial<ReceiptData>;
  onDownloadExcel?: (data: ReceiptData) => void;
  onCreate?: (data: ReceiptData) => void;
  onClose?: () => void;
};

const formatCurrency = (v: number) =>
  new Intl.NumberFormat("vi-VN").format(v) + "₫";

export default function Receipt({
  initial = {},
  onDownloadExcel,
  onCreate,
  onClose,
}: ReceiptProps) {
  const [date, setDate] = useState<string>(initial.date ?? "");
  const [receiptCode] = useState<string>(
    initial.receiptCode ?? ""
  );
  const [supplier, setSupplier] = useState<string>(initial.supplier ?? "");

  const [items, setItems] = useState<Item[]>(() => {
    const init = (initial as any).item;
    if (Array.isArray(init)) return init as Item[];
    if (init && typeof init === "object") return [init as Item];
    return [
      {
        name: "",
        size: "",
        unit: "",
        qty: 0,
        unitPrice: 0,
      },
    ];
  });
  // Tổng số tiền bằng chữ
  const [totalInWords, setTotalInWords] = useState<string>(
    (initial as any).totalInWords ?? ""
  );
  // Tổng tiền (tính theo tất cả items)
  const total = items.reduce(
    (s, it) => s + (Number(it.qty) || 0) * (Number(it.unitPrice) || 0),
    0
  );
  function buildData(): ReceiptData {
    return {
      date,
      receiptCode: receiptCode && receiptCode.trim() ? receiptCode : genId(),
      supplier,
      totalInWords,
      item: items,
    };
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className=" max-w-5xl mx-auto bg-white p-8 text-gray-800 font-sans text-base rounded-lg shadow-lg overflow-y-auto max-h-full w-full">
        <div className="text-center relative">
          <h1 className="text-2xl font-bold">PHIẾU NHẬP HÀNG</h1>
          <span
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer"
          >
            X
          </span>
          <div className="mt-2 text-sm grid grid-cols-2 gap-4 items-end">
            <div className="text-left">
              <label className="block text-xs text-gray-600">
                Ngày nhập hàng
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 border rounded px-2 py-1 w-full text-sm"
              />
            </div>

            <div className="text-left">
              <label className="block text-xs text-gray-600">
                Họ và tên người giao
              </label>
              <input
                type="text"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                placeholder="Có thể để trống"
                className="mt-1 border rounded px-2 py-1 w-full text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm">
          <div>
            <label className="block text-xs text-gray-600">
              Địa điểm nhập hàng
            </label>
            <div className="mt-1 text-sm text-gray-800">
              Nhập tại kho FlexStyle ở Quận A, Phường B, TP.HCM
            </div>
          </div>
        </div>

        <div className="mt-6 border border-gray-300">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="border px-3 py-2" style={{ width: "45%" }}>
                  Tên
                </th>
                <th className="border px-3 py-2" style={{ width: "10%" }}>
                  Kích cỡ
                </th>
                <th className="border px-3 py-2" style={{ width: "10%" }}>
                  Đơn vị tính
                </th>
                <th className="border px-3 py-2" style={{ width: "10%" }}>
                  Số lượng
                </th>
                <th className="border px-3 py-2" style={{ width: "12%" }}>
                  Đơn giá
                </th>
                <th className="border px-3 py-2" style={{ width: "13%" }}>
                  Thành tiền
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, idx) => (
                <tr key={idx} className="text-sm align-top">
                  <td
                    className="border px-3 py-2 text-left"
                    style={{ width: "45%" }}
                  >
                    <input
                      type="text"
                      value={it.name}
                      className="w-full text-base"
                      readOnly
                    />
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <input
                      type="text"
                      value={it.size}
                      className="w-full text-sm text-center"
                      readOnly
                    />
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <input
                      type="text"
                      value={it.unit}
                      className="w-full text-sm text-center"
                      readOnly
                    />
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <input
                      type="number"
                      min={0}
                      value={it.qty}
                      className="w-full max-w-[100px] text-sm text-center mx-auto"
                      readOnly
                    />
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <input
                      type="number"
                      min={0}
                      value={it.unitPrice}
                      className="w-full max-w-[140px] text-sm text-right mx-auto"
                      readOnly
                    />
                  </td>
                  {/* Tự tính thành tiền */}
                  <td className="border px-3 py-2 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div
                        className="max-w-[140px] truncate"
                        title={formatCurrency(
                          (it.qty || 0) * (it.unitPrice || 0)
                        )}
                      >
                        {formatCurrency((it.qty || 0) * (it.unitPrice || 0))}
                      </div>
                      {items.length > 1 && (
                        <button
                          type="button"
                          className="text-red-600 p-1 rounded"
                          onClick={() =>
                            setItems((prev) => prev.filter((_, i) => i !== idx))
                          }
                          title={`Xóa sản phẩm #${idx + 1}`}
                          aria-label={`Xóa sản phẩm ${idx + 1}`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Nút thêm sản phẩm */}
          <div className="mt-2">
            <button
              type="button"
              className="text-sm text-blue-600 p-1 rounded"
              onClick={() =>
                setItems((prev) => [
                  ...prev,
                  { name: "", size: "", unit: "", qty: 0, unitPrice: 0 },
                ])
              }
              title="Thêm sản phẩm"
              aria-label="Thêm sản phẩm"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 text-base font-semibold">
          <div className="flex items-center gap-4">
            <label className="text-base font-semibold">
              Tổng số tiền (bằng chữ)
            </label>
            <input
              type="text"
              value={totalInWords}
              onChange={(e) => setTotalInWords(e.target.value)}
              placeholder="Nhập tổng số tiền bằng chữ"
              className="mt-1 border rounded px-2 py-1 w-full text-sm flex-1"
            />
          </div>

          <div className="mt-2">
            <div
              className="text-base font-semibold"
              title={formatCurrency(total)}
            >
              Tổng số tiền (bằng số): {formatCurrency(total)}
            </div>
          </div>
        </div>

        {/* <div className="mt-8 grid grid-cols-3 text-center text-sm">
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
        </div> */}

        <div className="mt-8 flex justify-center gap-6">
          {/* Placeholder cho nút DownloadExcelButton*/}
          <button
            onClick={() => {
              const data = buildData();
              if (onDownloadExcel) onDownloadExcel(data);
              else {
                console.log("Download excel data:", data);
                alert("Download excel (placeholder)");
              }
            }}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
          >
            <Download className="h-4 w-4" />
            Tải xuống excel
          </button>
          {/* Placeholder cho nút tạo phiếu */}
          <button
            onClick={() => {
              const errors = validate();
              if (errors.length > 0) {
                alert(errors.join("\n"));
                return;
              }

              const data = buildData();
              if (onCreate) onCreate(data);
              else {
                console.log("Create receipt data:", data);
                alert("Tạo phiếu (placeholder)");
              }
            }}
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded shadow"
          >
            Đồng ý hợp đồng
          </button>
        </div>
      </div>
    </div>
  );
}
