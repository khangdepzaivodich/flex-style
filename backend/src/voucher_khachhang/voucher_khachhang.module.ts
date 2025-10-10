import { Module } from '@nestjs/common';
import { VoucherKhachhangController } from './voucher_khachhang.controller';
import { VoucherKhachhangService } from './voucher_khachhang.service';

@Module({
  controllers: [VoucherKhachhangController],
  providers: [VoucherKhachhangService]
})
export class VoucherKhachhangModule {}
