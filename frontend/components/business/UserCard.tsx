"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, User, X, ChevronDown } from "lucide-react";

export default function UserCard() {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-start justify-between border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
      {/* Left content */}
      <div>
        <h2 className="font-semibold text-lg">Nguyễn Văn Người Dùng</h2>

        <div className="flex items-center text-gray-600 mt-1">
          <MapPin size={16} className="mr-2" />
          <span>Quận A, Phường B, TP.HCM</span>
        </div>

        <div className="flex items-center text-gray-600 mt-1">
          <Mail size={16} className="mr-2" />
          <span>nguoidung@example.com</span>
        </div>

        <div className="flex items-center text-gray-600 mt-1">
          <Phone size={16} className="mr-2" />
          <span>0123 456 789</span>
        </div>

        <div className="flex items-center text-gray-600 mt-1">
          <User size={16} className="mr-2" />
          <span>Mã TK</span>
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-2">
        <button
          className={`flex items-center gap-1 text-sm font-semibold rounded-md px-3 py-1 ${
            active
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => setActive(!active)}
        >
          {active ? "ĐANG HOẠT ĐỘNG" : "NGỪNG HOẠT ĐỘNG"}
          <ChevronDown size={16} />
        </button>

        <button className="flex items-center gap-1 text-sm font-semibold rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-100">
          <X size={16} />
          Xóa
        </button>
      </div>
    </div>
  );
}