import { Test, TestingModule } from '@nestjs/testing';
import { VoucherKhachhangService } from './voucher_khachhang.service';

describe('VoucherKhachhangService', () => {
  let service: VoucherKhachhangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoucherKhachhangService],
    }).compile();

    service = module.get<VoucherKhachhangService>(VoucherKhachhangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
