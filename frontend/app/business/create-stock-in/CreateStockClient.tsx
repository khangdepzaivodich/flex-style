"use client";

import React from 'react';
import Receipt from '@/components/business/Receipt';
import { ReceiptData } from '@/interfaces/receipt';
import { createClient } from '@/lib/supabase/client';
import axios from 'axios';

type Variant = { MaCTSP: string; TenSP: string; KichCo: string; SoLuong: number };
type Supplier = { MaTK: string; DisplayName?: string; Email?: string };

export default function CreateStockClient({
  supplierOptionsInitial = [],
  variantOptionsInitial = [],
}: {
  supplierOptionsInitial?: Supplier[];
  variantOptionsInitial?: Variant[];
}) {
  const supabase = createClient();
  const [isCreating, setIsCreating] = React.useState(false);

  const onCreate = async (data: ReceiptData) => {
    setIsCreating(true);
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        alert('Bạn chưa đăng nhập');
        setIsCreating(false);
        return;
      }
      const accessToken = session.access_token;
      const userId = (session.user as any)?.id;

      if (!data.MaNCC) {
        alert('Vui lòng chọn nhà cung cấp');
        return;
      }

      const itemsRaw = ((data as any).items as any[] | undefined) || [];
      const filtered = itemsRaw
        .filter((it) => it.MaCTSP && String(it.MaCTSP).trim())
        .map((it) => ({ MaCTSP: it.MaCTSP, SoLuong: Number(it.SoLuong) || 0, DonGia: Number(it.DonGia) || 0 }));

      const totalQty = filtered.reduce((s, it) => s + (Number(it.SoLuong) || 0), 0);

      if (filtered.length === 0) {
        alert('Không có sản phẩm hợp lệ (không có MaCTSP).');
        return;
      }

      const payload = {
        MaNCC: data.MaNCC,
        MaTKNVQL: userId,
        created_at: (data.created_at as any) ? new Date(data.created_at as any) : new Date(),
        NoiDung: (data as any).NoiDung ?? '',
        TrangThai: 'DANG_CHO',
        SoLuong: totalQty,
      } as any;

      const res = await axios.post('http://localhost:8080/api/phieunhaphang', payload, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const created = res.data?.data ?? res.data;
      const MaPNH = created?.MaPNH ?? created?.maPNH;
      if (!MaPNH) {
        alert('Tạo phiếu thất bại: không nhận được MaPNH từ server');
        console.error('Create phieu response', res.data);
        return;
      }

      await axios.post(`http://localhost:8080/api/chitietnhaphang/phieu/${MaPNH}`, filtered, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      alert('Tạo phiếu nhập hàng thành công');
    } catch (err: any) {
      const serverData = err?.response?.data;
      let messageToShow: any = serverData ?? err?.message ?? 'Tạo thất bại';
      try {
        if (typeof messageToShow === 'object') messageToShow = JSON.stringify(messageToShow, null, 2);
      } catch (e) {
      }
      alert(String(messageToShow));
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Receipt
        onCreate={onCreate}
        isSubmitting={isCreating}
        supplierOptionsInitial={supplierOptionsInitial}
        variantOptionsInitial={variantOptionsInitial}
      />
    </div>
  );
}
