import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DanhMucModule } from './danhmuc/danhmuc.module';
import { SuKienUuDaiModule } from './sukienuudai/sukienuudai.module';
import { SanphamModule } from './sanpham/sanpham.module';
import { ChitietsanphamModule } from './chitietsanpham/chitietsanpham.module';
import { GiohangModule } from './giohang/giohang.module';
import { DonhangModule } from './donhang/donhang.module';
import { TinhtrangDonhangModule } from './tinhtrangdonhang/tinhtrangdonhang.module';
import { VoucherModule } from './voucher/voucher.module';
import { TaikhoanService } from './taikhoan/taikhoan.service';
import { TaikhoanController } from './taikhoan/taikhoan.controller';
import { TaikhoanModule } from './taikhoan/taikhoan.module';
import { VoucherKhachHangModule } from './voucher_khachhang/voucher_khachhang.module';
import { PhanHoiModule } from './phanhoi/phanhoi.module';
import { PhieunhaphangModule } from './phieunhaphang/phieunhaphang.module';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { JwtService } from '@nestjs/jwt';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
    // Prisma module phải đứng trước để các service khác inject PrismaService
    PrismaModule,
    DanhMucModule,
    SuKienUuDaiModule,
    SanphamModule,
    ChitietsanphamModule,
    GiohangModule,
    DonhangModule,
    TinhtrangDonhangModule,
    VoucherModule,
    TaikhoanModule,
    VoucherKhachHangModule,
    PhanHoiModule,
    PhieunhaphangModule,
  ],
  controllers: [AppController, TaikhoanController],
  providers: [AppService, TaikhoanService, JwtService],
})
export class AppModule {
  constructor() {
    // Sentinel log to verify recompilation
    console.log('[AppModule] Bootstrapping with modules: DanhMuc, Sukienuudai, Sanpham, ChitietSanpham, Giohang, Donhang, TinhtrangDonhang, Voucher, VoucherKhachhang - V9');
  }
}
