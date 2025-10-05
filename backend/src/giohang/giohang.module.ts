import { Module, Logger } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GioHangController } from './giohang.controller';
import { GioHangService } from './giohang.service';
import { GioHangRepository } from '../repositories/giohang.repository';

@Module({
  controllers: [GioHangController],
  providers: [
    GioHangService, 
    GioHangRepository,
    // Example global-level style (not required, but forcing provider creation to ensure module load)
    { provide: 'GIO_HANG_MODULE_TOKEN', useValue: 'giohang-active' },
  ],
  exports: [GioHangService]
})
export class GioHangModule {
  private readonly logger = new Logger(GioHangModule.name);
  constructor() {
    this.logger.debug('GioHangModule loaded');
  }
}