-- CreateTable
CREATE TABLE "public"."vw_chi_tiet_san_pham" (
    "MaCTSP" TEXT NOT NULL,
    "MaSP" TEXT NOT NULL,
    "TenSP" TEXT NOT NULL,
    "GiaBan" INTEGER NOT NULL,
    "KichCo" TEXT NOT NULL,
    "MauSac" TEXT NOT NULL,
    "SoLuong" INTEGER NOT NULL,
    "ton_kho" INTEGER,
    "tong_da_ban" INTEGER,
    "ngay_nhap_moi_nhat" TIMESTAMP(3),
    "MaDM" TEXT NOT NULL,
    "TenDM" TEXT NOT NULL,

    CONSTRAINT "vw_chi_tiet_san_pham_pkey" PRIMARY KEY ("MaCTSP")
);

-- CreateTable
CREATE TABLE "public"."vw_chi_tiet_don_hang" (
    "id" TEXT NOT NULL,
    "MaDH" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "MaCTSP" TEXT NOT NULL,
    "MaSP" TEXT NOT NULL,
    "TenSP" TEXT NOT NULL,
    "SoLuong" INTEGER NOT NULL,
    "tong_tien_don" INTEGER,
    "MaVoucher" TEXT,
    "TenVoucher" TEXT,
    "SoTien" INTEGER,
    "MaSK" TEXT,
    "TenSK" TEXT,
    "PhanTramGiam" INTEGER,
    "MaDM" TEXT NOT NULL,
    "TenDM" TEXT NOT NULL,
    "TrangThai" TEXT,
    "MaTK_KH" TEXT,

    CONSTRAINT "vw_chi_tiet_don_hang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."vw_nhap_hang_chi_tiet" (
    "id" TEXT NOT NULL,
    "MaPNNH" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "SoLuong" INTEGER NOT NULL,
    "MaNCC" TEXT NOT NULL,
    "TenNCC" TEXT NOT NULL,
    "MaCTSP" TEXT NOT NULL,
    "MaSP" TEXT NOT NULL,
    "TenSP" TEXT NOT NULL,
    "tong_da_nhap" INTEGER,

    CONSTRAINT "vw_nhap_hang_chi_tiet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."vw_khach_hang_tai_khoan" (
    "id" TEXT NOT NULL,
    "MaTK" TEXT NOT NULL,
    "Username" TEXT,
    "Avatar" TEXT,
    "Status" BOOLEAN,
    "VAITRO" "public"."VaiTro" NOT NULL,
    "MaGH" TEXT,
    "tong_so_luong_gio" INTEGER,
    "MaDH" TEXT,
    "ngay_dat" TIMESTAMP(3),
    "MaCTSP" TEXT,
    "MaSP" TEXT,
    "TenSP" TEXT,
    "SoLuong" INTEGER,
    "tong_tien_don" INTEGER,
    "trang_thai_don" TEXT,
    "MaVoucher" TEXT,
    "TenVoucher" TEXT,

    CONSTRAINT "vw_khach_hang_tai_khoan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."vw_nhan_vien_tai_khoan" (
    "MaTK" TEXT NOT NULL,
    "Username" TEXT,
    "Avatar" TEXT,
    "Status" BOOLEAN,
    "VAITRO" "public"."VaiTro" NOT NULL,

    CONSTRAINT "vw_nhan_vien_tai_khoan_pkey" PRIMARY KEY ("MaTK")
);
