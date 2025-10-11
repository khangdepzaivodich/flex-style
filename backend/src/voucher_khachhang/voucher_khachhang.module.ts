import { Module } from '@nestjs/common';
import { VoucherKhachHangController } from './voucher_khachhang.controller';
import { VoucherKhachHangService } from './voucher_khachhang.service';
import { VoucherKhachHangRepository } from 'src/repositories/voucher_khachhang.repository';
import { VoucherRepository } from 'src/repositories/voucher.repository';

@Module({
  controllers: [VoucherKhachHangController],
  providers: [VoucherKhachHangService, VoucherKhachHangRepository, VoucherRepository],
  exports: [VoucherKhachHangRepository],
})
export class VoucherKhachHangModule {}
