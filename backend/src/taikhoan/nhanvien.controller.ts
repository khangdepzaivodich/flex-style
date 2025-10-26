import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TaikhoanService } from './taikhoan.service';
import { TAIKHOAN } from './taikhoan.service';
import { Roles } from '../factory_function/role';
import { TaiKhoanGuard } from './taikhoan.guard';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { TaiKhoanNghiepVuDto } from './dto/taikhoannghiepvu.dto';
import { TrangThai, VaiTro } from './enums';

@Controller('nv')
export class NhanVienController {
  constructor(private readonly taikhoanService: TaikhoanService) {}

  // ============================================================
  // 👷 NHÂN VIÊN
  // ============================================================

  @Post('dangky')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async dangKyNV(@Body() data: TaiKhoanNghiepVuDto): Promise<TAIKHOAN> {
    return this.taikhoanService.dangKyNV(data);
  }

  @Get()
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAllNV(): Promise<TAIKHOAN[]> {
    const nv = await this.taikhoanService.taikhoansNV();
    console.log('nv:', nv);
    return nv;
  }

  @Get(':id')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getNV(@Param('id') maTK: string): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO === 'NVVH' || tk?.VAITRO === 'NVCSKH') return tk;
    throw new Error('Không tìm thấy nhân viên');
  }

  @Patch('status/:id')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async updateStatusNV(
    @Param('id') maTK: string,
    @Body('status') status: TrangThai,
  ): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO === 'NVVH' || tk?.VAITRO === 'NVCSKH')
      return this.taikhoanService.updateTrangThai(maTK, status);
    throw new Error('Không được phép thay đổi tài khoản này');
  }

  @Patch('role/:id')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async updateVaiTroNV(
    @Param('id') maTK: string,
    @Body('vaiTro') vaiTro: VaiTro,
  ): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO === 'NVVH' || tk?.VAITRO === 'NVCSKH') {
      if (vaiTro === 'NVVH' || vaiTro === 'NVCSKH')
        return this.taikhoanService.updateVaiTro(maTK, vaiTro);
      throw new Error('Vai trò không hợp lệ cho nhân viên');
    }
    throw new Error('Không được phép thay đổi tài khoản này');
  }
}
