import { Controller, Get, Param, Post, Put, Res, Body } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { ResponseMessage } from 'src/decorators/response.decorator';
import type { Response } from 'express';
import { VoucherDto } from './dto/voucher.dto';

@Controller('voucher')
export class VoucherController {
    constructor(private readonly voucherService: VoucherService) {}
    //lấy danh sách voucher
    @Get()
    @ResponseMessage('Lấy danh sách voucher thành công')
    async getAllVouchers(@Body() data: VoucherDto) {
        return this.voucherService.getAllVouchers();
    }
    //lấy voucher theo id
    @Get(':id')
    @ResponseMessage('Lấy voucher theo id thành công')
    async getVoucherById(@Param('id') id: string) {
        return this.voucherService.getVoucherById(id);
    }
    // thêm mới voucher
    @Post()
    @ResponseMessage('Thêm mới voucher thành công')
    async addVoucher(@Body() voucherDto: VoucherDto) {
        return this.voucherService.addVoucher(voucherDto);
    }
    //chỉnh sửa voucher theo id
    @Put(':id')
    @ResponseMessage('Chỉnh sửa voucher thành công')
    async updateVoucher(@Param('id') id: string, @Body() voucherDto: any) {
        return this.voucherService.updateVoucher(id, voucherDto);
    }

    //thay đổi trạng thái voucher
    @Put(':id/trangthai')
    @ResponseMessage('Thay đổi trạng thái voucher thành công')
    async changeStatus(@Param('id') id: string, @Body('trangThai') trangThai: string) {
        return this.voucherService.changeStatus(id, trangThai);
    }

    //xuất báo cáo excel voucher
    @Get('export')
    async exportVoucherToExcel(@Res() res: Response) {
        try{
            const excelBuffer = await this.voucherService.exportVoucherToExcel();
            res.set({
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment; filename=voucher_report.xlsx',
            });
            res.end(excelBuffer);
        } catch (error) {
            res.status(400).json({ message: 'Xuất voucher thất bại', error: error.message });
        }
    }
}
