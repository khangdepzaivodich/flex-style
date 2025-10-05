import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DanhMucModule } from './danhmuc/danhmuc.module';
import { SukienuudaiModule } from './sukienuudai/sukienuudai.module';
import { GioHangModule } from './giohang/giohang.module';
import { PrismaModule } from './core/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    DanhMucModule,
    SukienuudaiModule,
    GioHangModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class RootAppModule {
  constructor(){
    console.log('[RootAppModule] Loaded with GioHangModule');
  }
}
