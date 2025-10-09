-- AlterTable
ALTER TABLE "public"."VOUCHER" ADD COLUMN     "MoTa" TEXT,
ADD COLUMN     "TrangThai" "public"."TrangThai" NOT NULL DEFAULT 'ACTIVE';
