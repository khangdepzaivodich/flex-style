import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { SuKienUuDaiService } from './sukienuudai.service';
import { ResponseMessage } from 'src/decorators/response.decorator';
import { SuKienUuDaiDto } from './dto/sukienuudai.dto';

@Controller('sukienuudai')
export class SuKienUuDaiController {
    constructor(readonly suKienUuDaiService: SuKienUuDaiService) {}
    @Get()
    @ResponseMessage('Lấy danh sách sự kiện ưu đãi thành công')
    getAll() {
        return this.suKienUuDaiService.getAll();
    }

    //lấy sự kiện ưu đãi theo id
    @Get(':id')
    @ResponseMessage('Lấy sự kiện ưu đãi theo id thành công')
    getById(id: string) {
        return this.suKienUuDaiService.getById(id);
    }
    //thêm mới sự kiện ưu đãi
    @Post()
    @ResponseMessage('Thêm mới sự kiện ưu đãi thành công')
    addSuKienUuDai(@Body() suKienUuDaiDto: SuKienUuDaiDto) {
        return this.suKienUuDaiService.addSuKienUuDai(suKienUuDaiDto);
    }
    //chỉnh sửa sự kiện ưu đãi theo id
    @Put(':id')
    @ResponseMessage('Chỉnh sửa sự kiện ưu đãi thành công')
    updateSuKienUuDai(@Param('id') id: string, @Body() suKienUuDaiDto: SuKienUuDaiDto) {
        return this.suKienUuDaiService.updateSuKienUuDai(id, suKienUuDaiDto);
    }

    //thay đổi trạng thái sự kiện ưu đãi
    @Put(':id/trangthai')
    @ResponseMessage('Thay đổi trạng thái sự kiện ưu đãi thành công')
    changeStatus(@Param('id') id: string, @Body('trangThai') trangThai: string) {
        return this.suKienUuDaiService.changeStatus(id, trangThai);
    }
}
