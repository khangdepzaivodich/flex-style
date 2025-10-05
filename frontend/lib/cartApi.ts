// Thin client for backend cart (giohang) API
// Assumes backend runs at NEXT_PUBLIC_API_BASE_URL (e.g. http://localhost:8080/api)

export interface AddCartItemPayload {
  MaTKKH: string; // user account id
  MaCTSP: string; // product detail id
  SoLuong: number;
}

export interface UpdateQuantityPayload {
  maCTGH: string; // cart detail id
  SoLuong: number;
}

const base = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api';

async function http<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try { const body = await res.json(); message = body.message || message; } catch {}
    throw new Error(message);
  }
  try { return await res.json(); } catch { return undefined as unknown as T; }
}

export const cartApi = {
  addItem: (payload: AddCartItemPayload) =>
    http(`${base}/giohang/them-sanpham`, { method: 'POST', body: JSON.stringify(payload) }),
  getCart: (maTKKH: string) => http(`${base}/giohang/${maTKKH}`),
  updateQuantity: (maCTGH: string, SoLuong: number) =>
    http(`${base}/giohang/capnhat-soluong/${maCTGH}`, { method: 'PUT', body: JSON.stringify({ SoLuong }) }),
  removeItem: (maCTGH: string) =>
    http(`${base}/giohang/xoa-sanpham/${maCTGH}`, { method: 'DELETE' }),
  checkoutPreview: (maTKKH: string) => http(`${base}/giohang/san-pham-de-mua/${maTKKH}`)
};

export type CartApi = typeof cartApi;
