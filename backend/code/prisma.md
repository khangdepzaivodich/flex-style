# Prisma CLI Commands

## npx prisma init
Khởi tạo cấu trúc thư mục Prisma (tạo prisma/schema.prisma, .env, v.v).
Lưu ý: Chỉ cần chạy một lần khi bắt đầu dự án.

## npx prisma migrate dev
Tạo và chạy migration, cập nhật database theo schema.prisma.
Lưu ý: Tự động tạo migration mới nếu có thay đổi schema.

## npx prisma generate
Sinh mã client Prisma từ schema.prisma.
Lưu ý: Nên chạy sau khi thay đổi schema hoặc migration.

## npx prisma studio
Mở giao diện quản lý dữ liệu database trực quan.
Lưu ý: Chỉ dùng cho mục đích quản trị, không thay thế cho code.

## npx prisma migrate reset
Xóa toàn bộ dữ liệu, chạy lại tất cả migration từ đầu.
Lưu ý: Sẽ mất dữ liệu, chỉ dùng khi phát triển hoặc cần làm sạch database.

## npx prisma db pull
Đồng bộ schema.prisma với cấu trúc database hiện tại.
Lưu ý: Dùng khi database thay đổi bên ngoài Prisma.

## npx prisma format
Định dạng lại file schema.prisma cho đẹp và chuẩn.
Lưu ý: Nên chạy trước khi commit code.
