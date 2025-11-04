import { NextResponse } from 'next/server'
import { DateTime } from 'luxon'
import { createClient } from '@/lib/supabase/server'

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:8080'

//Giam bớt tải lặp lại khi người dùng chuyển đổi bộ lọc nhanh chóng. TTL ngắn để dữ liệu luôn mới.
let _cachedList: any[] | null = null;
let _cachedAt = 0;
const CACHE_TTL_MS = 5 * 1000; // 5 seconds

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? '1');
  const pageSize = Number(url.searchParams.get('pageSize') ?? '10');
  const status = url.searchParams.get('status') ?? 'ALL';
  const date = url.searchParams.get('date') ?? null;

  const supabase = createClient();
  const {
    data: { session },
  } = await (await supabase).auth.getSession();

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (session && (session as any).access_token) headers['Authorization'] = `Bearer ${(session as any).access_token}`;

  try {
    let list: any[];

    const now = Date.now();
    if (_cachedList && (now - _cachedAt) < CACHE_TTL_MS) {
      // sử dụng danh sách đã lưu trong bộ nhớ đệm
      list = _cachedList;
    } else {
      // fetch danh sách đầy đủ từ backend và cập nhật bộ nhớ đệm
      const res = await fetch(`${BACKEND}/api/phieunhaphang`, { headers });
      const json = await res.json();
      list = (json.data || json || []) as any[];
      _cachedList = list;
      _cachedAt = now;
    }

    // Nếu có bộ lọc trạng thái, áp dụng nó
    if (status && status !== 'ALL') {
      list = list.filter((r) => {
        const st = (r.TrangThai ?? r.trangThai ?? 'DANG_CHO') as string;
        return st === status;
      });
    }
    // Nếu có bộ lọc ngày (YYYY-MM-DD), lọc theo khoảng thời gian của ngày đó ở timezone +07:00
    if (date) {
      try {
        const zone = 'Asia/Ho_Chi_Minh'
        const start = DateTime.fromISO(date, { zone }).startOf('day').toMillis();
        const end = DateTime.fromISO(date, { zone }).endOf('day').toMillis();
        list = list.filter((r) => {
          try {
            const created = r.created_at ?? r.createdAt ?? null;
            if (!created) return false;
            let dtMillis: number;
            if (typeof created === 'number') {
              // some backends store seconds, some milliseconds
              const asNum = Number(created);
              dtMillis = asNum < 1e12 ? asNum * 1000 : asNum;
              dtMillis = DateTime.fromMillis(dtMillis).setZone(zone).toMillis();
            } else {
              // try ISO parse first
              let dt = DateTime.fromISO(String(created));
              if (!dt.isValid) {
                // fall back to JS Date parsing
                const jd = new Date(String(created));
                if (isNaN(jd.getTime())) return false;
                dt = DateTime.fromJSDate(jd);
              }
              dtMillis = dt.setZone(zone).toMillis();
            }
            return dtMillis >= start && dtMillis <= end;
          } catch (e) {
            return false;
          }
        });
      } catch (e) {
        // ignore invalid date
      }
    }
    // sắp xếp theo created_at giảm dần
    list.sort((a, b) => {
      const da = new Date(a.created_at ?? a.createdAt ?? 0).getTime();
      const db = new Date(b.created_at ?? b.createdAt ?? 0).getTime();
      return db - da;
    });

    const totalCount = list.length;
    const start = (page - 1) * pageSize;
    const slice = list.slice(start, start + pageSize);

    // fetch chi tiết cho mỗi phiếu trong trang này và tính tổng tiền
    const detailed = await Promise.all(slice.map(async (r) => {
      const MaPNH = r.MaPNH ?? r.maPNH ?? r.MaPNNH;
      if (!MaPNH) return { ...r, items: [], __computedTotal: 0 };
      try {
        const dres = await fetch(`${BACKEND}/api/chitietnhaphang/phieu/${MaPNH}`, { headers });
        const djson = await dres.json();
        const items = djson.data || djson || [];
        const total = (items || []).reduce((s: number, it: any) => s + (Number(it.SoLuong) || 0) * (Number(it.DonGia) || 0), 0);
        return { ...r, items, __computedTotal: total };
      } catch (e) {
        console.error('detail fetch error', MaPNH, e);
        return { ...r, items: [], __computedTotal: 0 };
      }
    }));

    return NextResponse.json({ data: detailed, totalCount });
  } catch (e) {
    console.error('paged api error', e);
    return NextResponse.json({ data: [], totalCount: 0, error: String(e) }, { status: 500 });
  }
}
