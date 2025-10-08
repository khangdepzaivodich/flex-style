import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DanhMucModule } from './danhmuc/danhmuc.module';
import { SuKienUuDaiModule } from './sukienuudai/sukienuudai.module';
import { SanphamModule } from './sanpham/sanpham.module';
import { ChitietsanphamModule } from './chitietsanpham/chitietsanpham.module';
import { GiohangModule } from './giohang/giohang.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    DanhMucModule,
    SuKienUuDaiModule,
    SanphamModule,
    ChitietsanphamModule,
    GiohangModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('[AppModule] Initialized with GiohangModule - V6');
  }
}
