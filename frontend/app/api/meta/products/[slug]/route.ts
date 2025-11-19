export const runtime = "edge";

function escapeHtml(str: string | undefined) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug;
    const BACKEND = (
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      ""
    ).replace(/\/+$/, "");
    const FRONTEND = (
      process.env.NEXT_PUBLIC_FRONTEND_URL || "https://flex-style.vercel.app"
    ).replace(/\/+$/, "");

    // fetch minimal product fields; backend may ignore fields query if unsupported
    const fetchUrl = BACKEND
      ? `${BACKEND}/api/sanpham/${encodeURIComponent(slug)}`
      : `/api/sanpham/${encodeURIComponent(slug)}`;

    const res = await fetch(fetchUrl, { next: { revalidate: 60 } });
    if (!res.ok) {
      // fallback empty meta
      const fallbackHtml = `<!doctype html><html><head><meta name="robots" content="noindex" /></head><body></body></html>`;
      return new Response(fallbackHtml, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
        },
      });
    }

    const product = await res.json();
    const title = escapeHtml(product?.TenSP || product?.title || "");
    const desc = escapeHtml(product?.MoTa || product?.description || "");
    const images = Array.isArray(product?.HinhAnh)
      ? product.HinhAnh[0]
      : product?.HinhAnh;
    const image = images
      ? images.startsWith("http")
        ? images
        : images.startsWith("//")
        ? `https:${images}`
        : `${FRONTEND}${images.startsWith("/") ? "" : "/"}${images}`
      : `${FRONTEND}/og-default.png`;

    const url = `${FRONTEND}/products/${encodeURIComponent(slug)}`;

    const html = `<!doctype html><html><head>
      <meta charset="utf-8" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:image" content="${image}" />
      <meta property="og:url" content="${url}" />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      </head><body></body></html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (err) {
    console.error("Meta product error:", err);
    const html = `<!doctype html><html><head><meta name="robots" content="noindex" /></head><body></body></html>`;
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    });
  }
}
