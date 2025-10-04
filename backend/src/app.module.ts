import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DanhMucModule } from './danhmuc/danhmuc.module';
import { SukienuudaiModule } from './sukienuudai/sukienuudai.module';
import { SanphamService } from './sanpham/sanpham.service';
import { SanphamModule } from './sanpham/sanpham.module';
import { ChitietsanphamService } from './chitietsanpham/chitietsanpham.service';
import { ChitietsanphamController } from './chitietsanpham/chitietsanpham.controller';
import { ChitietsanphamModule } from './chitietsanpham/chitietsanpham.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Để dùng ở mọi nơi
    }),
    DanhMucModule,
    SukienuudaiModule,
    SanphamModule,
    ChitietsanphamModule,
  ],
  controllers: [AppController, ChitietsanphamController],
  providers: [AppService, SanphamService, ChitietsanphamService],
})
export class AppModule {}
