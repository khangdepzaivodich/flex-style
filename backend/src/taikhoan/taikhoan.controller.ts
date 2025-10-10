// CHUA XONG
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TaikhoanService } from './taikhoan.service';
import { TaiKhoanDto } from './dto/taikhoan.dto';
import { TAIKHOAN, TrangThai } from '@prisma/client';
import { Roles } from './factory_function/role';
import { TaiKhoanGuard } from './taikhoan.guard';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';

@Controller('taikhoan')
export class TaikhoanController {
  constructor(private readonly taikhoanService: TaikhoanService) {}

  // Dang ky tai khoan khach hang
  @Post('dangky')
  async dangKy(@Body() data: TaiKhoanDto): Promise<TAIKHOAN> {
    return this.taikhoanService.dangKy(data);
  }

  // Lay tat ca tai khoan cua khach hang
  @Get()
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAll(): Promise<TAIKHOAN[]> {
    return this.taikhoanService.taikhoans();
  }

  // Lay tai khoan theo ID khach hang
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getById(@Param('id') maTK: string, @Req() req) {
    const user = req.user as { MaTK: string; Role: string };
    const taiKhoan = await this.taikhoanService.taikhoan(maTK);

    // Neu la chinh tai khoan cua minh
    if (user.MaTK === maTK) {
      return this.taikhoanService.taikhoan(maTK);
    }

    // Neu la QLDN va khong phai la tai khoan cua nha cung cap
    if (user.Role === 'QLDN' && taiKhoan?.VAITRO !== 'NCC') {
      return this.taikhoanService.taikhoan(maTK);
    }

    throw new Error('Không có quyền truy cập');
  }

  // Thay doi trang thai tai khoan khach hang
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Patch('status/:id')
  async updateStatus(
    @Param('id') maTK: string,
    @Body('status') status: TrangThai,
  ): Promise<TAIKHOAN> {
    const taikhoan = await this.taikhoanService.taikhoan(maTK);
    // QLDN khong duoc phep thay doi trang thai cua tai khoan NCC
    if (taikhoan?.VAITRO === 'NCC') {
      throw new Error(
        'Không có quyền thay đổi trạng thái tài khoản nhà cung cấp',
      );
    }
    return this.taikhoanService.updateTrangThai(maTK, status);
  }

  // Cap nhat tai khoan
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') maTK: string,
    @Body() data: TaiKhoanDto,
    @Req() req,
  ): Promise<TAIKHOAN> {
    const user = req.user as { MaTK: string; Role: string };

    if (user.MaTK == maTK) {
      return this.taikhoanService.updateTaiKhoan(maTK, data);
    }
    throw new Error('Không có quyền cập nhật');
  }

  // Tao tai khoan nha cung cap
  @Post('ncc/dangky')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async dangKyNCC(@Body() data: TaiKhoanDto): Promise<TAIKHOAN> {
    return this.taikhoanService.dangKy(data);
  }

  // Xem tat ca tai khoan cua nha cung cap
  @Get('ncc')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAllNCC(): Promise<TAIKHOAN[]> {
    return this.taikhoanService.taikhoans();
  }

  // Xem tai khoan cua nha cung cap
  @Get('ncc/:id')
  @Roles('ADMIN', 'NCC')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getNCC(@Param('id') maTK: string): Promise<TAIKHOAN> {
    const taikhoan = await this.taikhoanService.taikhoan(maTK);
    if (taikhoan?.VAITRO !== 'NCC') {
      throw new Error('Không tìm thấy tài khoản nhà cung cấp');
    }
    return taikhoan;
  }

  // Cap nhat thong tin nha cung cap
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Patch('ncc/:id')
  async updateStatusNCC(
    @Param('id') maTK: string,
    @Body() data: TaiKhoanDto,
  ): Promise<TAIKHOAN> {
    const taikhoan = await this.taikhoanService.taikhoan(maTK);
    if (taikhoan?.VAITRO !== 'NCC') {
      throw new Error('Không tìm thấy tài khoản nhà cung cấp');
    }
    return this.taikhoanService.updateTaiKhoan(maTK, data);
  }

  // Thay doi trang thai tai khoan nha cung cap
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Patch('ncc/status/:id')
  async updateStatusNCCStatus(
    @Param('id') maTK: string,
    @Body('status') status: TrangThai,
  ): Promise<TAIKHOAN> {
    const taikhoan = await this.taikhoanService.taikhoan(maTK);
    if (taikhoan?.VAITRO !== 'NCC') {
      throw new Error('Không tìm thấy tài khoản nhà cung cấp');
    }
    return this.taikhoanService.updateTrangThai(maTK, status);
  }

  // Xem tai khoan quan ly
  @Get('ql/:id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getQL(@Param('id') maTK: string): Promise<TAIKHOAN> {
    const taikhoan = await this.taikhoanService.taikhoan(maTK);
    if (taikhoan?.VAITRO !== 'QLDN' && taikhoan?.VAITRO !== 'QLLOGISTIC') {
      throw new Error('Không tìm thấy tài khoản quản lý');
    }
    return taikhoan;
  }

  // Xem danh sach tai khoan quan ly
  @Get('ql')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAllQL(): Promise<TAIKHOAN[]> {
    return this.taikhoanService.taikhoansQL();
  }

  // Cap nhat tai khoan quan ly
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Patch('ql/:id')
  async updateStatusQL(
    @Param('id') maTK: string,
    @Body() data: TaiKhoanDto,
  ): Promise<TAIKHOAN> {
    const taikhoan = await this.taikhoanService.taikhoan(maTK);
    if (taikhoan?.VAITRO !== 'QLDN' && taikhoan?.VAITRO !== 'QLLOGISTIC') {
      throw new Error('Không tìm thấy tài khoản quản lý');
    }
    return this.taikhoanService.updateTaiKhoan(maTK, data);
  }
}
