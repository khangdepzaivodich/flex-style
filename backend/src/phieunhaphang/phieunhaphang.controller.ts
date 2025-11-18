 
import { Controller, Get, Param, Put, Body, Post, UseGuards, Query } from '@nestjs/common';
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
  @Get()
  @ResponseMessage('Lấy danh sách phiếu nhập hàng thành công')
  getAll() {
    return this.phieuNhapHangService.findAll();
  }
  @Get('/ncc/:id')
  @ResponseMessage('Lấy phiếu nhập hàng theo id thành công')
  getByIdNcc(@Param('id') id: string) {
    return this.phieuNhapHangService.findByIdNcc(id);
  }
   // Lấy danh sách phiếu nhập hàng có phân trang, lọc trạng thái và ngày
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Get('paged')
  @ResponseMessage('Lấy danh sách phiếu nhập hàng phân trang thành công')
  async getPaged(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('status') status?: string,
    @Query('date') date?: string,
  ) {
    try {
      const p = Number(page) || 1;
      const ps = Number(pageSize) || 10;
      // Validate status against enum values
      const allowedStatuses = Object.values(TrangThaiPhieuNhapHang) as string[];
      const st = status && allowedStatuses.includes(status) ? (status as any) : undefined;
      return this.phieuNhapHangService.findPaged({
        page: p,
        pageSize: ps,
        status: st,
        date,
      });
    } catch (err) {
      console.error('[PhieuNhapHangController.getPaged] error', err);
      throw err;
    }
  }

  //lấy phiếu nhập hàng theo id
  @Get(':id')
  @ResponseMessage('Lấy phiếu nhập hàng theo id thành công')
  getById(@Param('id') id: string) {
    return this.phieuNhapHangService.findById(id);
  }

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
