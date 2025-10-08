import { Module } from '@nestjs/common';
import { DanhMucService } from './danhmuc.service';
import { DanhMucController } from './danhmuc.controller';

@Module({
  providers: [DanhMucService],
  controllers: [DanhMucController]
})
export class DanhMucModule {
}
