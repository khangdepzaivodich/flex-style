"use client";

import React, { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { Item, ReceiptData } from "@/interfaces/receipt";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import { on } from "events";

type ReceiptProps = {
  initial?: Partial<ReceiptData>;
  onClose?: () => void;
  onAgree?: () => void;
  isSubmitting?: boolean;
};

const formatCurrency = (v: number) =>
  new Intl.NumberFormat("vi-VN").format(v) + "₫";

export default function Receipt({
  initial = {},
  onClose,
  onAgree,
  isSubmitting = false,
}: ReceiptProps) {
  const [loading, setLoading] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const [supplierId] = useState<string | undefined>(
    (initial as any).MaNCC ?? undefined
  );
  const [date] = useState<string>(
    (initial as any).date ?? new Date().toISOString().slice(0, 10)
  );

  const itemsInit = (() => {
    const init = (initial as any).items;
    if (Array.isArray(init)) return init as Item[];
    if (init && typeof init === "object") return [init as Item];
    return [
      {
        MaCTSP: undefined,
        TenSP: "",
        KichCo: "",
        SoLuong: 0,
        DonGia: 0,
      } as Item,
    ];
  })();
  const [items, setItems] = useState<Item[]>(itemsInit);

  const total = items.reduce(
    (s, it) => s + (Number(it.SoLuong) || 0) * (Number(it.DonGia) || 0),
    0
  );
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/chitietnhaphang/phieu/${initial.MaPNH}`
      );
      await Promise.all(
        res.data.data.map(async (element: Item) => {
          const variantRes = await axios.get(
            `http://localhost:8080/api/chitietnhaphang/variants/${element.MaCTSP}`
          );
          element.TenSP = variantRes.data.data.TenSP || "—";
          element.KichCo = variantRes.data.data.KichCo || "—";
        })
      );
      setItems(res.data.data);
      setLoading(false);
    };
    fetchData();
  }, [initial.MaPNH]);
  function buildData(): ReceiptData {
    return {
      MaNCC: supplierId,
      created_at: date ? new Date(date) : new Date(),
      items: items,
    };
  }

  async function exportToPdf() {
    try {
      const html2canvas = (await import("html2canvas")).default as any;
      const { default: jsPDF } = await import("jspdf");
      if (!rootRef.current) {
        alert("Không tìm thấy nội dung để xuất PDF");
        return;
      }

      const clone = rootRef.current.cloneNode(true) as HTMLElement;
      // replace interactive elements with their text content for PDF
      clone
        .querySelectorAll("input, select, textarea, button")
        .forEach((el) => {
          try {
            const tag = (el.tagName || "").toLowerCase();
            let text = "";
            if (tag === "input") text = (el as HTMLInputElement).value ?? "";
            else if (tag === "select") {
              const sel = el as HTMLSelectElement;
              text =
                (sel.options[sel.selectedIndex] &&
                  sel.options[sel.selectedIndex].text) ||
                sel.value ||
                "";
            } else if (tag === "textarea")
              text = (el as HTMLTextAreaElement).value || "";
            const span = document.createElement("div");
            span.textContent = text;
            span.style.whiteSpace = "pre-wrap";
            el.parentNode?.replaceChild(span, el);
          } catch (e) {
            // ignore
          }
        });

      const wrapper = document.createElement("div");
      wrapper.style.position = "fixed";
      wrapper.style.left = "-9999px";
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      const canvas = await html2canvas(clone, { scale: 3 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      } as any);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      const fileName = `phieu-nhap-${new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/[:T]/g, "-")}.pdf`;
      pdf.save(fileName);

      document.body.removeChild(wrapper);
    } catch (e: any) {
      console.error("Export PDF error", e);
      alert("Không thể tạo PDF: " + (e?.message ?? String(e)));
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-auto">
      <div
        ref={rootRef}
        className="max-w-5xl mx-auto bg-white p-8 text-gray-800 font-sans text-base"
      >
        <div className="relative text-center">
          <span
            className="absolute top-0 right-0 p-2 cursor-pointer text-sm text-gray-600"
            onClick={onClose}
          >
            X
          </span>
          <h1 className="text-2xl font-bold">PHIẾU NHẬP HÀNG</h1>
          {loading ?? (
            <div className="mt-2 text-sm grid grid-cols-2 gap-4 items-end">
              <div className="text-left">
                <label className="block text-xs text-gray-600">
                  Ngày nhập hàng
                </label>
                <div className="mt-1 text-sm">
                  {new Date(date).toLocaleDateString()}
                </div>
              </div>

              <div className="text-left">
                <label className="block text-xs text-gray-600">Quản lý</label>
                <div className="mt-1 text-sm">{initial.MaTKNVQL || "—"}</div>
              </div>
            </div>
          )}
        </div>

        {loading ?? (
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs text-gray-600">
                Địa điểm nhập hàng
              </label>
              <div className="mt-1 text-sm text-gray-800">
                Nhập tại kho FlexStyle ở Quận A, Phường B, TP.HCM
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="w-[500px] flex justify-center items-center mt-5">
            <Spinner className="size-6 text-purple-500" />
          </div>
        ) : (
          <div>
            <div className="mt-6 border border-gray-300">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-sm">
                    <th className="border px-3 py-2" style={{ width: "45%" }}>
                      TÊN
                    </th>
                    <th className="border px-3 py-2" style={{ width: "12%" }}>
                      KÍCH CỠ
                    </th>
                    <th className="border px-3 py-2" style={{ width: "10%" }}>
                      SỐ LƯỢNG
                    </th>
                    <th className="border px-3 py-2" style={{ width: "15%" }}>
                      ĐƠN GIÁ
                    </th>
                    <th className="border px-3 py-2" style={{ width: "18%" }}>
                      THÀNH TIỀN
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it, idx) => (
                    <tr key={idx} className="text-sm align-top">
                      <td
                        className="border px-3 py-2 text-left"
                        style={{ width: "50%" }}
                      >
                        <div className="text-sm">{it.TenSP || "—"}</div>
                      </td>
                      <td className="border px-3 py-2 text-center">
                        {it.KichCo || "—"}
                      </td>
                      <td className="border px-3 py-2 text-center">
                        {it.SoLuong ?? 0}
                      </td>
                      <td className="border px-3 py-2 text-right">
                        {formatCurrency(Number(it.DonGia) || 0)}
                      </td>
                      <td className="border px-3 py-2 text-right">
                        {formatCurrency(
                          (Number(it.SoLuong) || 0) * (Number(it.DonGia) || 0)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-base font-semibold text-right">
              Tổng số tiền: {formatCurrency(total)}
            </div>

            <div className="mt-8 grid grid-cols-3 text-center text-sm">
              <div>
                <div className="font-bold">Người lập</div>
                <div className="italic text-gray-500 mb-8">(Ký, họ tên)</div>
              </div>
              <div>
                <div className="font-bold">Người giao</div>
                <div className="italic text-gray-500 mb-8">(Ký, họ tên)</div>
              </div>
              <div>
                <div className="font-bold">Quản lý kho</div>
                <div className="italic text-gray-500 mb-8">(Ký, họ tên)</div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={exportToPdf}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow"
          >
            <Download className="h-4 w-4" />
            Tải xuống PDF
          </button>

          {initial.TrangThai === "DANG_CHO" && (
            <button
              onClick={() => {
                const data = buildData();
                onAgree?.();
              }}
              className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              Đồng ý
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
