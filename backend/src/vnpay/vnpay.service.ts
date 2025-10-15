import { Injectable } from '@nestjs/common';
import { VnpayService } from 'nestjs-vnpay';

@Injectable()
export class VNPAYService {
    constructor(private readonly vnpayService: VnpayService) {}

    async createPaymentUrl(orderdata: any, ipAddr: string){
        return this.vnpayService.buildPaymentUrl({
            vnp_Amount: orderdata.amount,
            vnp_OrderInfo: `Thanh toan don hang ${orderdata.orderId}`,
            vnp_TxnRef: orderdata.orderId,
            vnp_IpAddr: ipAddr,
            vnp_ReturnUrl: "https://example.com/returnUrl" // Add this property, ensure orderdata.returnUrl is set
        });
    }
    
    async validateResponse(query: any) {
        return this.vnpayService.verifyReturnUrl(query);
    }
}