"use client";

import React from "react";
import { createClient } from "@/lib/supabase/client";
import axios from "axios";
import ReceiptTable from "@/components/business/ReceiptTable";
import ReceiptView from "@/components/business/ReceiptView";
import type { ReceiptData } from "@/interfaces/receipt";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { toast } from "react-toastify";
import { ChiTietNhapHang, PhieuNhapHang } from "@/lib/types";

export default function ConfirmStockClient({
  initialReceipts = [],
  totalCount = 0,
  pageSize = 10,
  accessToken,
}: {
  initialReceipts?: (PhieuNhapHang & {
    items: ChiTietNhapHang[];
    __computedTotal: number;
  })[];
  totalCount?: number;
  pageSize?: number;
  accessToken?: string;
}) {
  const supabase = createClient();
  const [receipts, setReceipts] = React.useState<
    (PhieuNhapHang & {
      items: ChiTietNhapHang[];
      __computedTotal: number;
    })[]
  >(initialReceipts || []);
  const [loading, setLoading] = React.useState(false);
  const [loadingMore, setLoadingMore] = React.useState(false);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ReceiptData | null>(null);
  const [cursor, setCursor] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (initialReceipts && initialReceipts.length > 0) {
      const last = initialReceipts[initialReceipts.length - 1];
      setCursor(toMillisString(last?.created_at ?? null));
    }
  }, [initialReceipts]);
  const [total, setTotal] = React.useState<number>(totalCount || 0);
  const [statusFilter, setStatusFilter] = React.useState<string>("ALL");
  const [dateFilter, setDateFilter] = React.useState<string | null>(null);
  const [tempDate, setTempDate] = React.useState<string | null>(null);

  function sortByCreatedDesc<T extends Record<string, unknown>>(list: T[]) {
    return [...list].sort((a, b) => {
      const da = new Date(String((a as Record<string, unknown>)['created_at'] ?? (a as Record<string, unknown>)['createdAt'] ?? 0)).getTime();
      const db = new Date(String((b as Record<string, unknown>)['created_at'] ?? (b as Record<string, unknown>)['createdAt'] ?? 0)).getTime();
      return db - da;
    });
  }
  function getIdFromRecord(r: unknown): string | undefined {
    if (!r || typeof r !== 'object') return undefined;
    const a = r as Record<string, unknown>;
    const v1 = a['MaPNH'];
    if (typeof v1 === 'string') return v1;
    const v2 = a['maPNH'];
    if (typeof v2 === 'string') return v2;
    const v3 = a['MaPNNH'];
    if (typeof v3 === 'string') return v3;
    return undefined;
  }
  function toMillisString(v: unknown): string | null {
    if (v === null || v === undefined) return null;
    if (typeof v === "number") {
      const n = Number(v);
      const millis = n < 1e12 ? n * 1000 : n;
      return String(millis);
    }
    const s = String(v);
    const asNum = Number(s);
    if (!Number.isNaN(asNum) && asNum > 0) {
      const millis = asNum < 1e12 ? asNum * 1000 : asNum;
      return String(millis);
    }
    const dt = new Date(s);
    if (isNaN(dt.getTime())) return null;
    return String(dt.getTime());
  }

  React.useEffect(() => {
    const iv = setInterval(async () => {
      try {
        const res = await fetch(
          `/api/phieunhaphang/paged?page=1&pageSize=1&status=${encodeURIComponent(
            statusFilter
          )}${dateFilter ? `&date=${encodeURIComponent(dateFilter)}` : ""}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!res.ok) return;
        const json = await res.json();
        const newest = (json.data && json.data[0]) ?? null;
        if (!newest) return;
        const currentTop = receipts[0]?.MaPNH ?? receipts[0]?.MaPNH;
        if (currentTop !== (newest.MaPNH ?? newest.maPNH ?? newest.MaPNNH)) {
          // Nếu có phiếu nhập hàng mới -> tải lại trang đầu và thêm vào đầu danh sách
          const firstPageRes = await fetch(
            `/api/phieunhaphang/paged?page=1&pageSize=${pageSize}&status=${encodeURIComponent(
              statusFilter
            )}${dateFilter ? `&date=${encodeURIComponent(dateFilter)}` : ""}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          if (!firstPageRes.ok) return;
          const pj = await firstPageRes.json();
          const newList = pj.data ?? [];
          console.debug("[auto-refresh] fetched first page list", newList.length, newList[0]?.MaPNH, newList[0]?.created_at ?? newList[0]?.createdAt);
          setReceipts((prev) => {
            const seen = new Set(prev.map((p) => p.MaPNH));
            const toPrepend = newList.filter(
              (n: { MaPNH: string }) => !seen.has(n.MaPNH)
            );
            const merged = [...toPrepend, ...prev];
            const sorted = sortByCreatedDesc(merged);
            console.debug("[auto-refresh] merged count", merged.length, "first after sort", sorted[0]?.MaPNH, sorted[0]?.created_at ?? sorted[0]?.createdAt);
            return sorted;
          });
          setTotal(pj.totalCount ?? total);
        }
      } catch (e) {
        console.error("Auto-refresh fetch error", e);
      }
    }, 15000);
    return () => clearInterval(iv);
  }, [receipts, pageSize, statusFilter, dateFilter, total, accessToken]);

  async function loadMore() {
    if (loadingMore) return;
    setLoadingMore(true);
    try {
      // use cursor-based pagination: pass current cursor if present; if not, use created_at of last item
      const lastRec = receipts[receipts.length - 1];
      const currentCursor = cursor ?? toMillisString(lastRec?.created_at ?? null);
      const cursorQuery = currentCursor ? `&cursor=${encodeURIComponent(String(currentCursor))}` : "";
      const url = `/api/phieunhaphang/paged?page=1&pageSize=${pageSize}&status=${encodeURIComponent(
            statusFilter
          )}${dateFilter ? `&date=${encodeURIComponent(dateFilter)}` : ""}${cursorQuery}`;
      console.log("[loadMore] requesting", { url, currentCursor, receiptsCount: receipts.length });
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.ok) throw new Error("Load more failed");
      const json = await res.json();
      const more = json.data ?? [];
      console.log("[loadMore] response length", more.length, "nextCursor", json.nextCursor, "totalCount", json.totalCount);
      // log a small sample of returned created_at values for debugging
      try {
        const sample = (more || []).slice(0, 3).map((m: Record<string, unknown>) => ({ id: getIdFromRecord(m), created_at: m['created_at'] ?? m['createdAt'] }));
        console.log("[loadMore] sample returned items", sample);
      } catch {
        console.log("[loadMore] sample failed");
      }
      const nextCursor = json.nextCursor ?? null;
      console.log("[loadMore] fetched", more.length, "items", more[0] && getIdFromRecord(more[0]), more[0]?.created_at ?? more[0]?.createdAt);

      // If server returned empty page but totalCount indicates more items exist,
      // try a small retry with cursor-1 (handle equality/rounding issues),
      // then fallback to fetching without cursor once.
      let finalMore = more as Record<string, unknown>[];
      if (finalMore.length === 0 && (json.totalCount ?? 0) > receipts.length) {
        try {
          console.log('[loadMore] empty page but totalCount>receipts -> retrying with cursor-1');
          const curNum = Number(currentCursor) || 0;
          if (curNum > 0) {
            const retryCursor = String(curNum - 1);
            const retryUrl = `/api/phieunhaphang/paged?page=1&pageSize=${pageSize}&status=${encodeURIComponent(
              statusFilter
            )}${dateFilter ? `&date=${encodeURIComponent(dateFilter)}` : ""}&cursor=${encodeURIComponent(retryCursor)}`;
            console.log('[loadMore] retry url', retryUrl);
            const rres = await fetch(retryUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
            if (rres.ok) {
              const rjson = await rres.json();
              finalMore = rjson.data ?? [];
              console.log('[loadMore] retry response length', finalMore.length, 'nextCursor', rjson.nextCursor);
            }
          }
        } catch (e) {
          console.log('[loadMore] retry failed', e);
        }
      }

      // fallback: if still empty, request using page offset (compute next page)
      if (finalMore.length === 0 && (json.totalCount ?? 0) > receipts.length) {
        try {
          console.log('[loadMore] fallback to no-cursor fetch');
          const fallbackPage = Math.floor(receipts.length / pageSize) + 1;
          const fallbackUrl = `/api/phieunhaphang/paged?page=${fallbackPage}&pageSize=${pageSize}&status=${encodeURIComponent(
            statusFilter
          )}${dateFilter ? `&date=${encodeURIComponent(dateFilter)}` : ""}`;
          const fres = await fetch(fallbackUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
          if (fres.ok) {
            const fjson = await fres.json();
            finalMore = fjson.data ?? [];
            console.log('[loadMore] fallback response length', finalMore.length, 'totalCount', fjson.totalCount);
          }
        } catch (e) {
          console.log('[loadMore] fallback failed', e);
        }
      }

      setReceipts((prev) => {
        const seen = new Set(prev.map((p) => getIdFromRecord(p) ?? ""));
        const toAppend = (finalMore || []).filter((m: Record<string, unknown>) => {
          const id = getIdFromRecord(m);
          return !!id && !seen.has(id);
        });
        // Append server-provided page at the end (cursor returns older items)
        const merged = [...prev, ...toAppend];
        console.log("[loadMore] merged count", merged.length, "appended", toAppend.length);
        return merged as unknown as (PhieuNhapHang & { items: ChiTietNhapHang[]; __computedTotal: number })[];
      });
      setCursor(nextCursor);
      setTotal(json.totalCount ?? total);
    } catch (e) {
      console.error("Load more error", e);
    } finally {
      setLoadingMore(false);
    }
  }

  // Tải lại danh sách với bộ lọc hiện tại
  async function reload(status?: string, dateArg?: string | null, force?: boolean) {
    setLoading(true);
    try {
      const s = typeof status === "string" ? status : statusFilter;
      const d = typeof dateArg !== "undefined" ? dateArg : dateFilter;
      const bust = force ? `&bustCache=1` : "";
      const res = await fetch(
        `/api/phieunhaphang/paged?page=1&pageSize=${pageSize}&status=${encodeURIComponent(
          s
        )}${d ? `&date=${encodeURIComponent(d)}` : ""}${bust}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!res.ok) {
        const txt = await res.text().catch(() => null);
        console.error("Reload failed", res.status, txt);
        toast.error(`Tải lại thất bại (${res.status})`);
        return;
      }
      const json = await res.json();
      const first = json.data ?? [];
      const sortedFirst = sortByCreatedDesc(first);
      const nextCursor = json.nextCursor ?? null;
      console.debug("[reload] fetched page1", first.length, "sorted first", sortedFirst[0]?.MaPNH, sortedFirst[0]?.created_at ?? sortedFirst[0]?.createdAt);
      setReceipts(sortedFirst as unknown as (PhieuNhapHang & { items: ChiTietNhapHang[]; __computedTotal: number })[]);
      setCursor(nextCursor);
      setTotal(json.totalCount ?? total);
    } catch (e) {
      console.error("Reload error", e);
    } finally {
      setLoading(false);
    }
  }

  async function confirmAsStaff(id?: string) {
    if (!id) return;
    try {
      setLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Bạn chưa đăng nhập");
        return;
      }
      const accessToken = session.access_token;
      const userId = session.user?.id;
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/phieunhaphang/${id}/nhanvienxacnhan`,
        { MaTKNVXN: userId, NoiDung: "NV_XACNHAN" },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setReceipts((prev) =>
        prev.map((r) =>
          (r.MaPNH ?? r.MaPNH) === id
            ? { ...r, status: "NV_XACNHAN", TrangThai: "NV_XACNHAN" }
            : r
        )
      );
      setSelected((prev: ReceiptData | null) => {
        if (!prev) return prev;
        const pid = prev.MaPNH;
        if (pid === id)
          return {
            ...prev,
            status: "NV_XACNHAN",
            TrangThai: "NV_XACNHAN",
          };
        return prev;
      });
      toast.success("Xác nhận phiếu thành công");
    } catch (err) {
      console.error("Confirm as staff error", err);
      toast.error("xác nhận thất bại");
    } finally {
      setLoading(false);
    }
  }

  // Xử lý khi người dùng xem chi tiết một phiếu nhập hàng
  function handleView(id?: string) {
    const found = receipts.find((r) => r.MaPNH === id);
    if (!found) {
      setSelected(null);
      setViewOpen(false);
      return;
    }
    setSelected(found);
    setViewOpen(true);
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Danh sách phiếu nhập hàng</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-56 relative">
            <Select
              value={statusFilter}
              onValueChange={(v) => {
                const val = v as string;
                setStatusFilter(val);
                reload(val);
              }}
            >
              <SelectTrigger className="w-full relative pl-9 pr-9 border-gray-200">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <SelectValue placeholder="Tất cả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"ALL"}>Tất cả</SelectItem>
                <SelectItem value={"DANG_CHO"}>Đang chờ</SelectItem>
                <SelectItem value={"NV_XACNHAN"}>Nhân viên xác nhận</SelectItem>
                <SelectItem value={"NCC_XACNHAN"}>
                  Nhà cung cấp xác nhận
                </SelectItem>
                <SelectItem value={"TU_CHOI"}>Từ chối</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="date"
              className="border border-gray-200 rounded px-3 py-2 text-sm"
              value={tempDate ?? dateFilter ?? ""}
              onChange={(e) => {
                const v = e.target.value;
                setTempDate(v ? v : null);
              }}
            />
            {tempDate !== dateFilter ? (
              <>
                <button
                  type="button"
                  className="bg-primary text-white px-3 py-1 rounded text-sm"
                  onClick={() => {
                    setDateFilter(tempDate);
                    reload(undefined, tempDate ?? null);
                  }}
                >
                  Áp dụng
                </button>
                <button
                  type="button"
                  className="text-sm text-muted-foreground underline"
                  onClick={() => {
                    setTempDate(dateFilter);
                  }}
                >
                  Hủy
                </button>
              </>
            ) : dateFilter ? (
              <button
                type="button"
                className="text-sm text-muted-foreground underline"
                onClick={() => {
                  setDateFilter(null);
                  setTempDate(null);
                  reload(undefined, null);
                }}
              >
                Xóa
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {loading && (
        <div className="text-center my-4">
          <span>Đang tải dữ liệu...</span>
          {/* Hoặc dùng spinner/icon nếu có */}
        </div>
      )}
      <ReceiptTable
        receipts={receipts}
        statusFilter={statusFilter}
        
        onView={(id?: string) => handleView(id)}
        onLoadMore={loadMore}
        hasMore={receipts.length < total}
        loadingMore={loadingMore}
        onReload={(force?: boolean) => reload(undefined, undefined, force)}
      />

      <ReceiptView
        open={viewOpen}
        onOpenChange={(o) => setViewOpen(o)}
        data={selected ?? undefined}
        onConfirm={() => {
          const id = selected?.MaPNH;
          if (id) confirmAsStaff(id);
        }}
      />
    </div>
  );
}
