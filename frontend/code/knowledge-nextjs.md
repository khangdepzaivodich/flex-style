# Tổng hợp kiến thức Next.js từ thư mục `app` và `components`

## 1. Kiến thức về cấu trúc thư mục `app`
- Next.js sử dụng thư mục `app` để tổ chức các route động, layout, và các trang con.
- Mỗi thư mục con trong `app` (ví dụ: `(main)`, `admin`, `(user)`, ...) đại diện cho một route hoặc một nhóm route.
- File `page.tsx` trong mỗi thư mục là entry point cho route đó. File `layout.tsx` dùng để định nghĩa layout cho toàn bộ hoặc một phần ứng dụng.
- Có thể lồng nhiều layout, ví dụ: layout cho admin, layout cho user, layout cho main.
- Các thư mục như `about`, `auth`, `contact`, ... trong `(main)/(user)/` là các route con, mỗi route có thể có file `page.tsx` riêng.
- Route động, route lồng nhau, và route API đều được tổ chức rõ ràng trong `app`.

**Ví dụ:**
```tsx
// app/(main)/about/page.tsx
export default function AboutPage() {
  return <div>Giới thiệu về chúng tôi</div>;
}
```

## 2. Kiến thức về các component UI
- Thư mục `components` chứa các component dùng lại cho UI như: `header`, `footer`, `product-card`, `login-form`, `sign-up-form`, ...
- Các component được chia nhỏ theo chức năng: admin, staff, supplier, operator, customer-support, inventory, providers, system, ui.
- Thư mục `ui` chứa các component cơ bản như: `button`, `input`, `card`, `table`, `tabs`, ... giúp xây dựng giao diện nhất quán.
- Component có thể nhận props để tuỳ biến nội dung, style, và hành vi.
- Component có thể dùng hook, context, hoặc gọi API để lấy dữ liệu động.

**Ví dụ:**
```tsx
// components/product-card.tsx
import React from 'react';
export default function ProductCard({ name, price }) {
  return (
    <div className="border p-4 rounded">
      <h3>{name}</h3>
      <p>{price} VND</p>
    </div>
  );
}
```

## 3. Kiến thức về layout và context
- Layout giúp tái sử dụng phần khung giao diện cho nhiều trang.
- Context (ví dụ: `auth-context.tsx`, `cart-context.tsx`) giúp chia sẻ trạng thái giữa các component trong ứng dụng.
- Có thể wrap layout với context để truyền dữ liệu toàn cục cho các trang con.

**Ví dụ:**
```tsx
// app/layout.tsx
import AuthProvider from '../contexts/auth-context';
export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="vi">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
```

## 4. Kiến thức về phân quyền và bảo vệ route
- Component như `protected-route.tsx` dùng để kiểm tra quyền truy cập trước khi render trang.
- Có thể dùng context để lưu trạng thái đăng nhập và phân quyền.

**Ví dụ:**
```tsx
// components/protected-route.tsx
import { useAuth } from '../contexts/auth-context';
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <div>Bạn chưa đăng nhập</div>;
  return children;
}
```

## 5. Kiến thức về form và xác thực
- Component như `login-form.tsx`, `sign-up-form.tsx`, `forgot-password-form.tsx`, `update-password-form.tsx` dùng để xử lý form đăng nhập, đăng ký, quên mật khẩu, đổi mật khẩu.
- Có thể dùng state, hook, và gọi API để xác thực thông tin người dùng.

**Ví dụ:**
```tsx
// components/login-form.tsx
import { useState } from 'react';
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
```

## 6. Kiến thức về tích hợp thanh toán
- Có các component như `paypal.tsx`, `vnpay.tsx` để tích hợp các phương thức thanh toán phổ biến.
- Component này thường nhận props là thông tin đơn hàng và callback xử lý kết quả thanh toán.

**Ví dụ:**
```tsx
// components/paypal.tsx
export default function Paypal({ amount, onSuccess }) {
  // Tích hợp SDK Paypal ở đây
  return <button>Thanh toán với Paypal ({amount} VND)</button>;
}
```

## 7. Kiến thức về chat và hỗ trợ khách hàng
- Component như `chat-widget.tsx`, `live-chat.tsx` dùng để tích hợp chat realtime hỗ trợ khách hàng.

**Ví dụ:**
```tsx
// components/chat-widget.tsx
export default function ChatWidget() {
  return <div>Chat hỗ trợ khách hàng</div>;
}
```

## 8. Kiến thức về quản trị và dashboard
- Thư mục `admin` trong `app` và các component trong `components/admin` dùng để xây dựng giao diện quản trị, sidebar, header, bảng dữ liệu, popup quản lý khuyến mãi, voucher, ...

**Ví dụ:**
```tsx
// components/admin/admin-sidebar.tsx
export default function AdminSidebar() {
  return <aside>Menu quản trị</aside>;
}
```

---
---
# Kiến thức căn bản và nâng cao về Next.js

## 1. Next.js là gì?
- Next.js là một framework React giúp xây dựng ứng dụng web hiện đại với khả năng SSR (Server Side Rendering), SSG (Static Site Generation), ISR (Incremental Static Regeneration), và hỗ trợ API routes.
- Next.js giúp tối ưu SEO, tốc độ tải trang, và trải nghiệm người dùng.

## 2. Cấu trúc thư mục cơ bản
- `pages/` (trước Next.js 13) hoặc `app/` (từ Next.js 13): Tổ chức các route, trang, layout.
- `public/`: Chứa tài nguyên tĩnh như ảnh, favicon, file tải về.
- `components/`: Chứa các component UI dùng lại.
- `styles/` hoặc `globals.css`: Chứa CSS toàn cục.
- `lib/`, `utils/`: Chứa các hàm tiện ích, logic dùng chung.

## 3. Routing (Định tuyến)
- Mỗi file trong `pages/` hoặc `app/` (có `page.tsx`) sẽ tự động trở thành một route.
- Route động: `[id].tsx` hoặc `[slug].tsx` cho phép nhận tham số động từ URL.
- Nested routes: Tạo thư mục lồng nhau để tạo route lồng nhau.
- Catch-all routes: `[...params].tsx` để nhận nhiều tham số động.

**Ví dụ:**
```tsx
// pages/products/[id].tsx
import { useRouter } from 'next/router';
export default function ProductDetail() {
  const { query } = useRouter();
  return <div>Chi tiết sản phẩm: {query.id}</div>;
}
```

## 4. Rendering: SSR, SSG, ISR, CSR
- SSR (Server Side Rendering): Dùng `getServerSideProps` để render trang trên server mỗi lần truy cập.
- SSG (Static Site Generation): Dùng `getStaticProps` để build trang tĩnh khi build project.
- ISR (Incremental Static Regeneration): Kết hợp SSG và cập nhật trang tĩnh theo thời gian.
- CSR (Client Side Rendering): Render hoàn toàn trên client như React truyền thống.

**Ví dụ SSR:**
```tsx
// pages/index.tsx
export async function getServerSideProps() {
  return { props: { time: new Date().toISOString() } };
}
export default function Home({ time }) {
  return <div>Thời gian server: {time}</div>;
}
```

## 5. API Routes
- Next.js cho phép tạo API endpoint trong thư mục `pages/api/` hoặc `app/api/`.
- Mỗi file là một endpoint, có thể xử lý request như một server nhỏ.

**Ví dụ:**
```ts
// pages/api/hello.ts
export default function handler(req, res) {
  res.status(200).json({ message: 'Xin chào từ API Next.js!' });
}
```

## 6. Static Files
- Đặt file trong `public/` để truy cập trực tiếp qua URL, ví dụ: `/logo.png`.

## 7. Component và Props
- Component là hàm hoặc class React, nhận props để tuỳ biến.
- Có thể dùng state, hook, context trong component.

**Ví dụ:**
```tsx
function Welcome({ name }) {
  return <h1>Xin chào, {name}!</h1>;
}
```

## 8. Layout
- Layout giúp tái sử dụng khung giao diện cho nhiều trang.
- Từ Next.js 13, layout được tổ chức trong `app/layout.tsx` hoặc các layout con.

## 9. Context
- Context giúp chia sẻ trạng thái toàn cục (auth, theme, cart, ...).

## 10. CSS và Styling
- Hỗ trợ CSS module, global CSS, Tailwind CSS, styled-components, ...

## 11. Image Optimization
- Dùng component `next/image` để tối ưu ảnh, lazy load, responsive.

## 12. Middleware
- Middleware cho phép xử lý request trước khi vào route (ví dụ: kiểm tra đăng nhập, redirect).

## 13. Authentication & Authorization
- Có thể dùng context, middleware, hoặc thư viện như NextAuth để xác thực và phân quyền.

## 14. Environment Variables
- Đặt biến môi trường trong `.env.local`, truy cập qua `process.env`.

## 15. Deployment
- Next.js có thể deploy lên Vercel, Netlify, hoặc server riêng.

## 16. Các kiến thức nâng cao
- ISR, revalidate, streaming, edge functions, internationalization (i18n), dynamic imports, ...

---
Tài liệu này tổng hợp các kiến thức thực tế và căn bản về Next.js, cấu trúc route, component, layout, context, phân quyền, form, thanh toán, chat, quản trị, và các khái niệm nền tảng cho người mới bắt đầu lẫn nâng cao.