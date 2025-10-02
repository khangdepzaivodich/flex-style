import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config';
import { DanhMucModule } from './danhmuc/danhmuc.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Để dùng ở mọi nơi
    }),
    DanhMucModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
