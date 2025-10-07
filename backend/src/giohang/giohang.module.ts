import { Module } from '@nestjs/common';
import { GiohangController } from './giohang.controller';
import { GiohangService } from './giohang.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GiohangController],
  providers: [GiohangService],
  exports: [GiohangService],
})
export class GiohangModule {
  constructor() {
    console.log('[GiohangModule] Registered');
  }
}