"use client";
import React from "react";
import { Edit, Plus } from "lucide-react";
import { Button } from "../ui/button";
type VaiTro = "KH" | "NCC" | "QLDN" | "NVVH" | "NVCSKH" | "ADMIN";
type TrangThai = "ACTIVE" | "INACTIVE";

interface AccountInfo {
  MaTK: string;
  DisplayName: string | null;
  Email: string | null;
  Avatar: string | null;
  VAITRO: VaiTro;
  Status: TrangThai;
  created_at: Date;
  updated_at: Date;
}

interface AccountListPopupProps {
  open: boolean;
  onClose: () => void;
  accounts: AccountInfo[];
}

export default function AccountListPopup({
  open,
  onClose,
  accounts,
}: AccountListPopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[350px] translate-y-[-50%] max-w-[95vw]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Danh sách tài khoản</h2>
          <button
            className="text-gray-500 hover:text-red-500 text-xl"
            onClick={onClose}
            aria-label="Đóng"
          >
            ×
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left">Mã TK</th>
                <th className="px-2 py-1 text-left">Tên hiển thị</th>
                <th className="px-2 py-1 text-left">Email</th>
                <th className="px-2 py-1 text-left">Avatar</th>
                <th className="px-2 py-1 text-left">Vai trò</th>
                <th className="px-2 py-1 text-left">Trạng thái</th>
                <th className="px-2 py-1 text-left">Tạo lúc</th>
                <th className="px-2 py-1 text-left">Cập nhật</th>
                <th className="px-2 py-1 text-left">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc) => (
                <tr key={acc.MaTK}>
                  <td className="px-2 py-1">{acc.MaTK}</td>
                  <td className="px-2 py-1">{acc.DisplayName ?? "-"}</td>
                  <td className="px-2 py-1">{acc.Email ?? "-"}</td>
                  <td className="px-2 py-1 flex items-center justify-center">
                    {acc.Avatar ? (
                      <img
                        src={acc.Avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <span className="bg-red-400 text-white rounded-full h-8 w-8 flex items-center justify-center">
                        {acc.DisplayName?.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-1">{acc.VAITRO}</td>
                  <td className="px-2 py-1">
                    <span
                      className={
                        acc.Status === "ACTIVE"
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {acc.Status}
                    </span>
                  </td>
                  <td className="px-2 py-1">
                    {new Date(acc.created_at).toLocaleString("vi-VN")}
                  </td>
                  <td className="px-2 py-1">
                    {new Date(acc.updated_at).toLocaleString("vi-VN")}
                  </td>
                  <td className="px-2 py-1 flex items-center justify-center">
                    <button className="text-blue-600 hover:underline">
                      <Edit className="inline-block w-4 h-4 mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
              {accounts.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-400">
                    Không có tài khoản nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Button className="mt-3">
          <Plus className="h-4 w-4 mr-2" />
          Thêm chức vụ
        </Button>
      </div>
    </div>
  );
}
