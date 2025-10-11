import { Module } from '@nestjs/common';
import { VoucherController } from './voucher.controller';
import { VoucherService } from './voucher.service';
import { VoucherRepository } from 'src/repositories/voucher.repository';
import { ExcelService } from './excel.service';

@Module({
  controllers: [VoucherController],
  providers: [VoucherService, VoucherRepository, ExcelService],
  exports: [VoucherRepository],
})
export class VoucherModule {}
