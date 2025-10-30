"use client";
import { Gift, Ticket, CalendarDays, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { SuKienUuDai, Voucher } from "@/lib/types";
import { useState, useEffect } from "react";

interface EventVoucherSliderProps {
  events?: SuKienUuDai[];
  vouchers?: Voucher[];
}

const colors = [
  "from-pink-100 to-yellow-100 border-pink-200",
  "from-blue-100 to-green-100 border-blue-200",
  "from-orange-100 to-red-100 border-orange-200",
  "from-purple-100 to-indigo-100 border-purple-200",
];

export default function EventVoucherSlider({
  events,
  vouchers,
}: EventVoucherSliderProps) {
  // Dữ liệu giả để test
  if (!events || !events.length) {
    events = [
      {
        MaSK: "sk1",
        TenSK: "Mừng năm mới 2026",
        MoTa: "Ưu đãi 30% toàn bộ sản phẩm cho năm mới!",
        NgayPH: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        NgayKT: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        PhanTramGiam: 30,
        TrangThai: "ACTIVE",
      },
      {
        MaSK: "sk2",
        TenSK: "Black Friday",
        MoTa: "Giảm giá sốc lên tới 50% cho các sản phẩm hot!",
        NgayPH: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        NgayKT: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
        PhanTramGiam: 50,
        TrangThai: "ACTIVE",
      },
    ];
  }
  if (!vouchers || !vouchers.length) {
    vouchers = [
      {
        MaVoucher: "vc1",
        TenVoucher: "Voucher Giảm Giá 20%",
        Code: "SALE20",
        DieuKien: 500000,
        SoTien: 100000,
        Loai: "GiamGia",
        NgayBatDau: new Date(
          Date.now() + 2 * 24 * 60 * 60 * 1000
        ).toISOString(),
        NgayKetThuc: new Date(
          Date.now() + 8 * 24 * 60 * 60 * 1000
        ).toISOString(),
        MoTa: "Áp dụng cho đơn từ 500k trở lên.",
        TrangThai: "ACTIVE",
      },
      {
        MaVoucher: "vc2",
        TenVoucher: "Voucher FreeShip",
        Code: "FREESHIP2026",
        DieuKien: 0,
        SoTien: 0,
        Loai: "FreeShip",
        NgayBatDau: new Date(
          Date.now() + 3 * 24 * 60 * 60 * 1000
        ).toISOString(),
        NgayKetThuc: new Date(
          Date.now() + 12 * 24 * 60 * 60 * 1000
        ).toISOString(),
        MoTa: "Miễn phí vận chuyển cho mọi đơn hàng.",
        TrangThai: "ACTIVE",
      },
    ];
  }
  const slides = [
    ...events.map((e) => ({
      type: "event" as const,
      title: e.TenSK,
      desc: e.MoTa,
      start: new Date(e.NgayPH),
      end: new Date(e.NgayKT),
      percent: e.PhanTramGiam,
      status: e.TrangThai,
      icon: <Gift className="h-7 w-7 text-yellow-500" />,
      link: "/sale",
    })),
    ...vouchers.map((v) => ({
      type: "voucher" as const,
      title: v.TenVoucher,
      desc: v.MoTa,
      start: new Date(v.NgayBatDau),
      end: new Date(v.NgayKetThuc),
      percent: v.SoTien,
      status: v.TrangThai,
      icon: <Ticket className="h-7 w-7 text-pink-500" />,
      link: "/vouchers",
    })),
  ];
  const [current, setCurrent] = useState(0);
  // Auto-play
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % slides.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [current, slides.length]);
  const slide = slides[current];
  const color = colors[current % colors.length];

  return (
    <div
      className={`z-50 w-2/3 ${color}  border rounded-xl shadow-2xl p-6 animate-in slide-in-from-top-2 duration-300 fade-in-50 `}
    >
      <div className="flex items-center mb-3 gap-4">
        {slide.icon}
        <div>
          <h3 className="font-bold text-2xl tracking-wide text-rose-700 drop-shadow-lg">
            {slide.title}
          </h3>
          <span className="text-xs text-pink-600 font-medium">
            {slide.type === "event" ? "Sự kiện ưu đãi" : "Voucher đặc biệt"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Badge
          variant="outline"
          className="bg-white/80 text-orange-600 border-orange-300 text-base px-3 py-1"
        >
          <CalendarDays className="inline w-4 h-4 mr-1 text-orange-400" />
          {slide.start.getDate()}/{slide.start.getMonth() + 1} -{" "}
          {slide.end.getDate()}/{slide.end.getMonth() + 1}
        </Badge>
        <Badge variant="secondary" className="ml-auto text-base px-3 py-1">
          {slide.type === "event"
            ? `${slide.percent}%`
            : `${slide.percent.toLocaleString()}đ`}
        </Badge>
      </div>
      <p className="text-base text-gray-700 leading-relaxed mb-4 bg-gradient-to-r from-transparent via-pink-100 to-transparent rounded px-2 py-1 font-semibold">
        {slide.desc}
      </p>
      <div className="flex justify-between items-center">
        <Button
          size="sm"
          className="bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          asChild
        >
          <Link href={slide.link}>
            Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() =>
              setCurrent((current - 1 + slides.length) % slides.length)
            }
          >
            &lt;
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setCurrent((current + 1) % slides.length)}
          >
            &gt;
          </Button>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full inline-block ${
              idx === current ? "bg-pink-500" : "bg-gray-300"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
}
