import { Module } from '@nestjs/common';
import { VoucherKhachHangController } from './voucher_khachhang.controller';
import { VoucherKhachHangService } from './voucher_khachhang.service';

@Module({
  controllers: [VoucherKhachHangController],
  providers: [VoucherKhachHangService]
})
export class VoucherKhachHangModule {}
