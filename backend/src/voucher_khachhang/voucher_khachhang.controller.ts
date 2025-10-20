import { Body, Controller, Get, Query, Res } from '@nestjs/common';
import { VoucherKhachHangService } from './voucher_khachhang.service';
import { ResponseMessage } from 'src/decorators/response.decorator';

@Controller('voucher-khachhang')
export class VoucherKhachHangController {
  constructor(
    private readonly voucherKhachHangService: VoucherKhachHangService,
  ) {}
  //xem danh sách voucher khách hàng
  @Get()
  @ResponseMessage('Xem danh sách voucher khách hàng thành công')
  findAll(@Query('MaKH') MaKH: string) {
    return this.voucherKhachHangService.findAll(MaKH);
  }
  //xem chi tiết voucher khách hàng
  @Get(':id')
  @ResponseMessage('Xem chi tiết voucher khách hàng thành công')
  findById(@Body() MaVCKH) {
    return this.voucherKhachHangService.findById(MaVCKH);
  }
  //thêm voucher khách hàng
  @Get('add')
  @ResponseMessage('Thêm voucher khách hàng thành công')
  add(@Body() MaKH, @Body() MaVoucher) {
    return this.voucherKhachHangService.add(MaKH, MaVoucher);
  }
}
