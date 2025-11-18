import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Post,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ResponseMessage } from 'src/decorators/response.decorator';
import { PhieuNhapHangDto } from './dto/phieunhaphang.dto';
import { PhieuNhapHangService } from './phieunhaphang.service';
import { Roles } from 'src/factory_function/role';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { TaiKhoanGuard } from 'src/taikhoan/taikhoan.guard';
import { TrangThaiPhieuNhapHang } from '@prisma/client';

@Controller('phieunhaphang')
export class PhieuNhapHangController {
  constructor(private readonly phieuNhapHangService: PhieuNhapHangService) {}
  //lấy danh sách phiếu nhập hàng
  @Get('/ncc/:id')
  @ResponseMessage('Lấy phiếu nhập hàng theo id thành công')
  getByIdNcc(@Param('id') id: string) {
    return this.phieuNhapHangService.findByIdNcc(id);
  }
  //lấy phiếu nhập hàng theo id
  @Get()
  @ResponseMessage('Lấy danh sách phiếu nhập hàng thành công')
  getAll() {
    return this.phieuNhapHangService.findAll();
  }
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Get('/paged')
  @ResponseMessage('Lấy danh sách phiếu nhập hàng phân trang thành công')
  async getPaged(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('status') status?: string,
    @Query('date') date?: string,
  ) {
    console.log('Received paged query:', { page, pageSize, status, date });
    const pageNum = Number(page) || 1;
    const pageSizeNum = Number(pageSize) || 10;
    const statusEnum = status
      ? (status as unknown as TrangThaiPhieuNhapHang)
      : undefined;
    return this.phieuNhapHangService.findPaged({
      page: pageNum,
      pageSize: pageSizeNum,
      status: statusEnum,
      date,
    });
  }
  @Get(':id')
  @ResponseMessage('Lấy phiếu nhập hàng theo id thành công')
  getById(@Param('id') id: string) {
    return this.phieuNhapHangService.findById(id);
  }

  // Lấy danh sách phiếu nhập hàng có phân trang, lọc trạng thái và ngày

  //tạo phiếu nhập hàng
  @Roles('QLDN')
  @Post()
  @ResponseMessage('Tạo phiếu nhập hàng thành công')
  createPhieuNhapHang(@Body() data: PhieuNhapHangDto) {
    return this.phieuNhapHangService.create(data);
  }
  //chỉnh sửa phiêu nhập hàng
  @Put(':id')
  @ResponseMessage('Cập nhật phiếu nhập hàng thành công')
  updatePhieuNhapHang(@Param('id') id: string, @Body() data: PhieuNhapHangDto) {
    return this.phieuNhapHangService.update(id, data);
  }

  //Nhân viên xác nhận phiếu nhập hàng
  @Put(':id/nhanvienxacnhan')
  @Roles('QLDN')
  @ResponseMessage('Xác nhận phiếu nhập hàng thành công')
  nhanVienXacNhan(
    @Param('id') id: string,
    @Body('MaTKNVXN') MaTKNVXN: string,
    @Body('NoiDung') NoiDung: string,
  ) {
    return this.phieuNhapHangService.nhanVienXacNhan(id, MaTKNVXN, NoiDung);
  }

  //Nhà cung cấp xác nhận phiếu nhập hàng
  @Roles('NCC')
  @Put(':id/nhacungcapxacnhan')
  @ResponseMessage('Nhà cung cấp xác nhận phiếu nhập hàng thành công')
  nhaCungCapXacNhan(@Param('id') id: string, @Body('NoiDung') NoiDung: string) {
    return this.phieuNhapHangService.nhaCungCapXacNhan(id, NoiDung);
  }

  //Nhà cung cấp từ chối phiếu nhập hàng
  @Roles('NCC')
  @Put(':id/nhacungcaptuchoi')
  @ResponseMessage('Nhà cung cấp từ chối phiếu nhập hàng thành công')
  nhaCungCapTuChoi(@Param('id') id: string, @Body('NoiDung') NoiDung: string) {
    return this.phieuNhapHangService.nhaCungCapTuChoi(id, NoiDung);
  }
}
