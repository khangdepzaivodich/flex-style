import { Controller, Get, Post, Query, Req, Body } from '@nestjs/common';
import { VNPAYService } from './vnpay.service';

@Controller('vnpay')
export class VNPAYController {
    constructor(private readonly vnpayService: VNPAYService) {}

    @Post('create-payment')
    async createPayment(@Body() orderdata, @Req() req) {
        // Tùy vào API của nestjs-vnpay, bạn có thể gọi hàm tạo link thanh toán ở đây
        // Ví dụ:
        // return this.vnpayService.createPaymentUrl(body.orderId, body.amount, req.ip);
        const ipAddr = req.ip;
        const url = this.vnpayService.createPaymentUrl(orderdata, ipAddr);
        return { url };
    }

    @Get('return')
    async handleReturn(@Query() query) {
        // Xử lý khi khách hàng được chuyển hướng về từ VNPAY
        const vnpResponse = this.vnpayService.validateResponse(query);
        return vnpResponse;
    }
}