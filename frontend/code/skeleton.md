# Khung thư mục `app/`

Thư mục `app/` trong dự án frontend được tổ chức như sau:

- **globals.css**: File CSS toàn cục cho toàn bộ ứng dụng. (Không sinh route)
- **layout.tsx**: Component layout gốc, bọc ngoài tất cả các trang. (Không sinh route)
- **(main)/**: Khu vực chính dành cho người dùng. (Không sinh route trực tiếp)
  - **layout.tsx**: Layout cho phần main. (Không sinh route)
  - **MainPage.tsx**: Component trang chính. (Không sinh route)
  - **page.tsx**: Điểm vào cho trang chính. → http://localhost:3000/
  - **(user)/**: Các trang và route liên quan đến người dùng. (Không sinh route trực tiếp)
    - **about/**: Trang giới thiệu. → http://localhost:3000/about
    - **auth/**: Trang xác thực (đăng nhập, đăng ký, ...). → http://localhost:3000/auth
    - **contact/**: Trang liên hệ. → http://localhost:3000/contact
    - **privacy/**: Trang chính sách bảo mật. → http://localhost:3000/privacy
    - **products/**: Danh sách và chi tiết sản phẩm. → http://localhost:3000/products
    - **returns/**: Chính sách hoặc quy trình đổi/trả hàng. → http://localhost:3000/returns
    - **sale/**: Trang khuyến mãi, giảm giá. → http://localhost:3000/sale
    - **search/**: Chức năng tìm kiếm sản phẩm. → http://localhost:3000/search
    - **shipping/**: Thông tin vận chuyển. → http://localhost:3000/shipping
    - **support/**: Hỗ trợ khách hàng. → http://localhost:3000/support
- **admin/**: Khu vực quản trị và các trang quản lý. (Không sinh route trực tiếp)
  - **layout.tsx**: Layout cho phần admin. (Không sinh route)
  - **page.tsx**: Trang dashboard quản trị. → http://localhost:3000/admin
  - **analytics/**: Thống kê, báo cáo. → http://localhost:3000/admin/analytics
  - **categories/**: Quản lý danh mục sản phẩm. → http://localhost:3000/admin/categories
  - **customers/**: Quản lý khách hàng. → http://localhost:3000/admin/customers
  - **management-order/**: Quản lý đơn hàng. → http://localhost:3000/admin/management-order
  - **notifications/**: Thông báo cho admin. → http://localhost:3000/admin/notifications
  - **orders/**: Tổng quan đơn hàng. → http://localhost:3000/admin/orders
  - **positions/**: Quản lý chức vụ/nhân sự. → http://localhost:3000/admin/positions
  - **product-inventory/**: Quản lý tồn kho. → http://localhost:3000/admin/product-inventory
  - **products/**: Quản lý sản phẩm. → http://localhost:3000/admin/products
  - **promotions/**: Quản lý sự kiện/khuyến mãi. → http://localhost:3000/admin/promotions
  - **quality-supplier/**: Kiểm soát chất lượng nhà cung cấp. → http://localhost:3000/admin/quality-supplier
  - **receipts/**: Quản lý phiếu nhập. → http://localhost:3000/admin/receipts
  - **receipts-inventory/**: Phiếu nhập kho. → http://localhost:3000/admin/receipts-inventory
  - **report-inventory/**: Báo cáo tồn kho. → http://localhost:3000/admin/report-inventory
  - **returns/**: Quản lý đổi/trả hàng. → http://localhost:3000/admin/returns
  - **settings/**: Cài đặt quản trị. → http://localhost:3000/admin/settings
  - **status-inventory/**: Trạng thái tồn kho. → http://localhost:3000/admin/status-inventory
  - **supplier-history/**: Lịch sử nhà cung cấp. → http://localhost:3000/admin/supplier-history
  - **suppliers/**: Quản lý nhà cung cấp. → http://localhost:3000/admin/suppliers
  - **support/**: Hỗ trợ quản trị viên. → http://localhost:3000/admin/support
- **api/**: Các route API (Next.js API routes). → http://localhost:3000/api/*
- **operator/**: Các trang dành riêng cho operator (chưa rõ chi tiết). → http://localhost:3000/operator
- **unauthorized/**: Trang thông báo không có quyền truy cập. → http://localhost:3000/unauthorized

**Lưu ý:** Mỗi thư mục (ví dụ: `about/`, `auth/`, `products/`, ...) thường chứa file `page.tsx` hoặc các component liên quan cho route đó.

Cấu trúc này hỗ trợ ứng dụng Next.js theo hướng module, dễ mở rộng, tách biệt rõ ràng giữa phần người dùng, quản trị và API.