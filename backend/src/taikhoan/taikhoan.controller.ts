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
import { TAIKHOAN } from './taikhoan.service';
import { Roles } from '../factory_function/role';
import { TaiKhoanGuard } from './taikhoan.guard';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { TaiKhoanNghiepVuDto } from './dto/taikhoannghiepvu.dto';

// Define enums locally
enum TrangThai {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

enum VaiTro {
  KH = 'KH',
  NCC = 'NCC',
  QLDN = 'QLDN',
  NVVH = 'NVVH',
  NVCSKH = 'NVCSKH',
  ADMIN = 'ADMIN',
}

interface User {
  id: string;
  role: VaiTro;
}

@Controller('taikhoan')
export class TaikhoanController {
  constructor(private readonly taikhoanService: TaikhoanService) {}

  // ============================================================
  // 🧍 KHÁCH HÀNG
  // ============================================================

  // Đăng ký khách hàng
  @Post('dangky')
  async dangKy(@Body() data: TaiKhoanNghiepVuDto): Promise<TAIKHOAN> {
    return this.taikhoanService.dangKy(data);
  }

  // Lấy tất cả tài khoản khách hàng
  @Get()
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAll(): Promise<TAIKHOAN[]> {
    return this.taikhoanService.taikhoans();
  }

  // Lấy tài khoản khách hàng theo ID
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getById(@Param('id') maTK: string, @Req() req) {
    const user = req.user as User;
    const tk = await this.taikhoanService.taikhoan(maTK);
    console.log(maTK, user.id);
    console.log(user.role);
    if (user.id === maTK) return tk;
    if (
      user.role === 'QLDN' &&
      tk?.VAITRO !== 'ADMIN' &&
      tk?.VAITRO !== 'NCC'
    ) {
      return tk;
    }

    if (
      user.role === 'ADMIN' &&
      (tk?.VAITRO === 'QLDN' || tk?.VAITRO === 'NCC')
    ) {
      return tk;
    }

    throw new Error('Không có quyền truy cập');
  }

  // Cập nhật trạng thái khách hàng
  @Patch('status/:id')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async updateStatus(
    @Param('id') maTK: string,
    @Body('status') status: TrangThai,
  ): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO === 'ADMIN' || tk?.VAITRO === 'NCC')
      throw new Error('Không có quyền thay đổi trạng thái tài khoản này');
    return this.taikhoanService.updateTrangThai(maTK, status);
  }

  // Cập nhật tài khoản của chính mình
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') maTK: string,
    @Body() data: TaiKhoanNghiepVuDto,
    @Req() req,
  ): Promise<TAIKHOAN> {
    const user = req.user as { MaTK: string; Role: string };
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (user.MaTK === tk?.MaTK)
      return this.taikhoanService.updateTaiKhoan(maTK, data);
    throw new Error('Không có quyền cập nhật');
  }
}
