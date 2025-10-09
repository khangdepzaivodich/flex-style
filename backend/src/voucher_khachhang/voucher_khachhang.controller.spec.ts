import { Test, TestingModule } from '@nestjs/testing';
import { VoucherKhachhangController } from './voucher_khachhang.controller';

describe('VoucherKhachhangController', () => {
  let controller: VoucherKhachhangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoucherKhachhangController],
    }).compile();

    controller = module.get<VoucherKhachhangController>(VoucherKhachhangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
