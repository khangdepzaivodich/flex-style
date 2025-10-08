-- AlterTable
ALTER TABLE "public"."SUKIENUUDAI" ADD COLUMN     "MoTa" TEXT,
ADD COLUMN     "TrangThai" "public"."TrangThai" NOT NULL DEFAULT 'ACTIVE';
