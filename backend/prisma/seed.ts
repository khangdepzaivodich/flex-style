import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo khoác Nam',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NAM',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo sơ mi Nam',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NAM',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo thun Nam',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NAM',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.sUKIENUUDAI.createMany({
    //         data: [
    //         {
    //             TenSK: 'Giảm giá mùa hè',
    //             NgayPH: new Date('2025-06-01'),
    //             NgayKT: new Date('2025-06-30'),
    //             PhanTramGiam: 20,
    //             TrangThai: 'ACTIVE',
    //             MoTa: 'Ưu đãi giảm giá 20% cho toàn bộ sản phẩm mùa hè',
    //         },
    //         {
    //             TenSK: 'Flash Sale 11/11',
    //             NgayPH: new Date('2025-11-11'),
    //             NgayKT: new Date('2025-11-12'),
    //             PhanTramGiam: 50,
    //             TrangThai: 'ACTIVE',
    //             MoTa: 'Giảm giá sốc 50% trong 24h',
    //         },
    //         {
    //             TenSK: 'Ưu đãi Black Friday',
    //             NgayPH: new Date('2025-11-28'),
    //             NgayKT: new Date('2025-11-29'),
    //             PhanTramGiam: 40,
    //             TrangThai: 'ACTIVE',
    //             MoTa: 'Black Friday - giảm giá toàn shop',
    //         },
    //         {
    //             TenSK: 'Mừng năm mới 2026',
    //             NgayPH: new Date('2025-12-31'),
    //             NgayKT: new Date('2026-01-02'),
    //             PhanTramGiam: 30,
    //             TrangThai: 'ACTIVE',
    //             MoTa: 'Ưu đãi đặc biệt mừng năm mới',
    //         },
    //         {
    //             TenSK: 'Ưu đãi sinh nhật shop',
    //             NgayPH: new Date('2025-10-15'),
    //             NgayKT: new Date('2025-10-20'),
    //             PhanTramGiam: 25,
    //             TrangThai: 'ACTIVE',
    //             MoTa: 'Giảm giá 25% nhân dịp sinh nhật shop',
    //         },
    //         ],
    //         skipDuplicates: true,
    //     })
    // ]);
    await Promise.all([
      prisma.vOUCHER.createMany({
        data: [
          {
            TenVoucher: 'Giảm 50k đơn',
            SoTien: 50000,
            FreeShip: false,
            NgayBatDau: new Date('2025-10-01'),
            NgayKetThuc: new Date('2025-10-31'),
            Dieukien: 500000,
            TrangThai: 'ACTIVE',
            MoTa: 'Nhận đơn hàng khi mua đơn từ 500k trở lên',
          },
          {
            TenVoucher: 'Freeship toàn quốc',
            SoTien: 0,
            FreeShip: true,
            NgayBatDau: new Date('2025-11-01'),
            NgayKetThuc: new Date('2025-11-30'),
            Dieukien: 0,
            TrangThai: 'ACTIVE',
            MoTa: 'Miễn phí vận chuyển cho mọi đơn hàng',
          },
          {
            TenVoucher: 'Giảm 100 nghìn Black Friday',
            SoTien: 100000,
            FreeShip: false,
            NgayBatDau: new Date('2025-11-28'),
            NgayKetThuc: new Date('2025-11-29'),
            Dieukien: 1000000,
            TrangThai: 'ACTIVE',
            MoTa: 'Giảm 100 nghìn cho toàn bộ sản phẩm Black Friday khi mua đơn hàng 1 triệu',
          },
          {
            TenVoucher: 'Tặng 20k kỷ niệm sinh nhật hãng',
            SoTien: 20000,
            FreeShip: false,
            NgayBatDau: new Date('2025-10-12'),
            NgayKetThuc: new Date('2025-12-31'),
            Dieukien: 200000,
            TrangThai: 'ACTIVE',
            MoTa: 'Chỉ áp dụng cho khách hàng mua hàng trong dịp sinh nhật hãng với đơn hàng trên 200k',
          },
          {
            TenVoucher: 'Giảm 1 triệu và freeship',
            SoTien: 1000000,
            FreeShip: true,
            NgayBatDau: new Date('2025-10-01'),
            NgayKetThuc: new Date('2025-10-31'),
            Dieukien: 10000000,
            TrangThai: 'ACTIVE',
            MoTa: 'Giảm 1 triệu cho đơn hàng từ 10 triệu trở lên và freeship',
          },
        ],
        skipDuplicates: true,
      })
    ]);
    //         data: {
    //         TenDM: 'Dây nịt',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'PHU_KIEN',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Ví da',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'PHU_KIEN',
    //         },
    //     })
    // ]);await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Nón',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'PHU_KIEN',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo khoác Nữ',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NU',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo thun Nữ',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NU',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo sơ mi Nữ',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NU',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo khoác Na',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NAM',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo khoác Na',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NAM',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo khoác Na',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NAM',
    //         },
    //     })
    // ]);
    // await Promise.all([
    //     prisma.dANHMUC.create({
    //         data: {
    //         TenDM: 'Áo khoác Na',
    //         TrangThai: 'ACTIVE',
    //         Loai: 'NAM',
    //         },
    //     })
    //
    // ]);
  // Thêm các lệnh tạo dữ liệu khác ở đây
}

main()
  .catch(async (e) => {
    console.error('❌ Lỗi khi seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });