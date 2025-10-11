import { Module } from '@nestjs/common';
import { PhieunhaphangController } from './phieunhaphang.controller';
import { PhieunhaphangService } from './phieunhaphang.service';

@Module({
  controllers: [PhieunhaphangController],
  providers: [PhieunhaphangService]
})
export class PhieunhaphangModule {}
