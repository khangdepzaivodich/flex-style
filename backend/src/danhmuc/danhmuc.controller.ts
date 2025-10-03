import { Body, Controller, Get, Post, Put, Delete, Param, Query, Patch, Res } from '@nestjs/common';
import { DanhMucService } from './danhmuc.service';
import { DanhMucDto } from './dto/danhmuc.dto';
import { ResponseMessage } from 'src/decorators/response.decorator';
import { LoaiDanhMuc } from './entity/danhmuc.entity';
import type { Response } from 'express';
@Controller('danhmuc')
export class DanhMucController {
    constructor(private readonly danhmucService: DanhMucService) {}

    // Xem thông tin danh mục (tất cả hoặc theo id)
    @Get()
    @ResponseMessage('Lấy danh mục thành công')
    getAllDanhMuc() {
        return this.danhmucService.getAllDanhMuc();
    }

    // Thêm mới danh mục sản phẩm
    @Post()
    @ResponseMessage('Thêm danh mục thành công')
    addDanhMuc(@Body() data: DanhMucDto) {
        return this.danhmucService.addDanhMuc(data);
    }

    // Cập nhật thông tin danh mục
    @Put(':id')
    @ResponseMessage('Cập nhật danh mục thành công')
    updateDanhMuc(@Param('id') id: number, @Body() data: DanhMucDto) {
        return this.danhmucService.updateDanhMuc(id, data);
    }

    // Thay đổi trạng thái danh mục
    @Put(':id/trangthai')
    @ResponseMessage('Thay đổi trạng thái danh mục thành công')
    changeTrangThai(@Param('id') id: number, @Body('trangThai') trangThai: boolean) {
        return this.danhmucService.changeTrangThai(id, trangThai);
    }

    // Thay đổi loại danh mục
    @Put(':id/loai')
    @ResponseMessage('Thay đổi loại danh mục thành công')
    changeLoai(@Param('id') id: number, @Body('loai') loai: LoaiDanhMuc) {
        return this.danhmucService.changeLoai(id, loai);
    }

    // Xuất danh mục sản phẩm (ví dụ: export ra file, ở đây trả về danh sách)
    @Get('export')
    @ResponseMessage('Xuất danh mục thành công')
    async exportDanhMucToExcel(@Res() res: Response) {
        try{
            const excelBuffer = await this.danhmucService.exportDanhMucToExcel();

            res.set({
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment; filename="danhmuc.xlsx"',
                'Content-Length': excelBuffer.length,
            })
            res.send(excelBuffer);
        } catch (error) {
            res.status(400).json({ message: 'Xuất danh mục thất bại', error: error.message });
        }
    }
}
