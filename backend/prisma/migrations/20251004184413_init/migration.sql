/*
  Warnings:

  - You are about to drop the column `TrangThai` on the `CHITIETSANPHAM` table. All the data in the column will be lost.
  - The `Status` column on the `TAIKHOAN` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `KHACHHANG` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NHANVIEN` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vw_chi_tiet_don_hang` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vw_chi_tiet_san_pham` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vw_khach_hang_tai_khoan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vw_nhan_vien_tai_khoan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vw_nhap_hang_chi_tiet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."KHACHHANG" DROP CONSTRAINT "KHACHHANG_MaTK_fkey";

-- DropForeignKey
ALTER TABLE "public"."NHANVIEN" DROP CONSTRAINT "NHANVIEN_MaNVQL_fkey";

-- DropForeignKey
ALTER TABLE "public"."NHANVIEN" DROP CONSTRAINT "NHANVIEN_MaTK_fkey";

-- AlterTable
ALTER TABLE "public"."CHITIETSANPHAM" DROP COLUMN "TrangThai",
ADD COLUMN     "TrangThaiSP" "public"."TrangThaiSP" NOT NULL DEFAULT 'CON_HANG';

-- AlterTable
ALTER TABLE "public"."TAIKHOAN" DROP COLUMN "Status",
ADD COLUMN     "Status" "public"."TrangThai" NOT NULL DEFAULT 'ACTIVE';

-- DropTable
DROP TABLE "public"."KHACHHANG";

-- DropTable
DROP TABLE "public"."NHANVIEN";

-- DropTable
DROP TABLE "public"."vw_chi_tiet_don_hang";

-- DropTable
DROP TABLE "public"."vw_chi_tiet_san_pham";

-- DropTable
DROP TABLE "public"."vw_khach_hang_tai_khoan";

-- DropTable
DROP TABLE "public"."vw_nhan_vien_tai_khoan";

-- DropTable
DROP TABLE "public"."vw_nhap_hang_chi_tiet";
