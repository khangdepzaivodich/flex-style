import { Controller, Get, Query, Body } from '@nestjs/common';
import { PhanHoiService } from './phanhoi.service';
import { ResponseMessage } from 'src/decorators/response.decorator';
import { PhanHoiDto } from './dto/phanhoi.dto';

@Controller('phanhoi')
export class PhanHoiController {
    constructor(private readonly phanHoiService: PhanHoiService) { }
    @Get()
    @ResponseMessage('Lấy danh sách phản hồi theo sản phẩm thành công')
    async findAll(@Query() MaSP: string) {
        return await this.phanHoiService.findAll(MaSP);
    }
    //xem chi tiết phản hồi
    @Get('detail')
    @ResponseMessage('Lấy chi tiết phản hồi thành công')
    async findById(@Query() MaPH: string) {
        return await this.phanHoiService.findById(MaPH);
    }
    //chỉnh sửa phản hồi
    @Get('edit')
    @ResponseMessage('Chỉnh sửa phản hồi thành công')
    async update(@Query() MaPH: string, @Body() MaTKKH: string, @Body() updateData: PhanHoiDto) {
        return await this.phanHoiService.update(MaPH, MaTKKH, updateData);
    }
    //lấy phản hồi của khách hàng theo sản phẩm
    @Get('customer-feedback')
    @ResponseMessage('Lấy phản hồi của khách hàng theo sản phẩm thành công')
    async getCustomerFeedback(@Query() MaSP: string, @Query() MaTKKH: string) {
        return await this.phanHoiService.getCustomerFeedback(MaSP, MaTKKH);
    }
    //xóa phản hồi
    @Get('delete')
    @ResponseMessage('Xóa phản hồi thành công')
    async delete(@Query() MaPH: string, @Body() MaTKKH: string) {
        return await this.phanHoiService.delete(MaPH, MaTKKH);
    }
}
