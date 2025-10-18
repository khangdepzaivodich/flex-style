import { Controller, Get, Post, Query, Req, Body } from '@nestjs/common';
import { VNPAYService } from './vnpay.service';

@Controller('vnpay')
export class VNPAYController {
  constructor(private readonly vnpayService: VNPAYService) {}

  @Post('create-payment')
  async createPayment(
    @Body() body: { amount: number; orderId: string },
    @Req() req,
  ): Promise<any> {
    const ipAddr = req.ip;
    // console.log('Body:', body);
    // console.log(
    //   'Amount:',
    //   body.amount,
    //   'OrderId:',
    //   body.orderId,
    //   'IpAddr:',
    //   ipAddr,
    // );
    const url = this.vnpayService.createPaymentUrl(
      body.amount,
      body.orderId,
      ipAddr,
    );
    return url;
  }

  @Get('return')
  async handleReturn(@Query() query) {
    // Xử lý khi khách hàng được chuyển hướng về từ VNPAY
    const vnpResponse = this.vnpayService.verifyReturnUrl(query);
    return vnpResponse;
  }
}
