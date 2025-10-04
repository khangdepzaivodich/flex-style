import { Module } from '@nestjs/common';
import { SanphamController } from './sanpham.controller';
import { SanphamService } from './sanpham.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SanphamController],
  providers: [SanphamService],
})
export class SanphamModule {}
