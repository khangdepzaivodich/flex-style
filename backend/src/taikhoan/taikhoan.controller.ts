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
import { TAIKHOAN, TrangThai, VaiTro } from '@prisma/client';
import { Roles } from './factory_function/role';
import { TaiKhoanGuard } from './taikhoan.guard';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';

@Controller('taikhoan')
export class TaikhoanController {
  constructor(private readonly taikhoanService: TaikhoanService) {}

  // ============================================================
  // 🧍 KHÁCH HÀNG
  // ============================================================

  // Đăng ký khách hàng
  @Post('dangky')
  async dangKy(@Body() data: TaiKhoanDto): Promise<TAIKHOAN> {
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
    const user = req.user as { MaTK: string; Role: string };
    const tk = await this.taikhoanService.taikhoan(maTK);

    if (user.MaTK === maTK) return tk;

    if (
      user.Role === 'QLDN' &&
      tk?.VAITRO !== 'ADMIN' &&
      tk?.VAITRO !== 'NCC'
    ) {
      return tk;
    }

    if (
      user.Role === 'ADMIN' &&
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
    @Body() data: TaiKhoanDto,
    @Req() req,
  ): Promise<TAIKHOAN> {
    const user = req.user as { MaTK: string; Role: string };
    if (user.MaTK === maTK)
      return this.taikhoanService.updateTaiKhoan(maTK, data);
    throw new Error('Không có quyền cập nhật');
  }

  // ============================================================
  // 🏢 NHÀ CUNG CẤP (NCC)
  // ============================================================

  @Post('ncc/dangky')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async dangKyNCC(@Body() data: TaiKhoanDto): Promise<TAIKHOAN> {
    return this.taikhoanService.dangKyNCC(data);
  }

  @Get('ncc')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAllNCC(): Promise<TAIKHOAN[]> {
    return this.taikhoanService.taikhoansNCC();
  }

  @Get('ncc/:id')
  @Roles('ADMIN', 'NCC')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getNCC(@Param('id') maTK: string): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO !== 'NCC') throw new Error('Không tìm thấy tài khoản NCC');
    return tk;
  }

  @Patch('ncc/:id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async updateNCC(@Param('id') maTK: string, @Body() data: TaiKhoanDto) {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO !== 'NCC') throw new Error('Không tìm thấy NCC');
    return this.taikhoanService.updateTaiKhoan(maTK, data);
  }

  @Patch('ncc/status/:id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async updateStatusNCC(
    @Param('id') maTK: string,
    @Body('status') status: TrangThai,
  ): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO !== 'NCC') throw new Error('Không tìm thấy NCC');
    return this.taikhoanService.updateTrangThai(maTK, status);
  }

  // ============================================================
  // 🧑‍💼 QUẢN LÝ DOANH NGHIỆP (QLDN)
  // ============================================================

  @Post('ql/dangky')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async dangKyQL(@Body() data: TaiKhoanDto): Promise<TAIKHOAN> {
    return this.taikhoanService.dangKyQL(data);
  }

  @Get('ql')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAllQL(): Promise<TAIKHOAN[]> {
    return this.taikhoanService.taikhoansQL();
  }

  @Get('ql/:id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getQL(@Param('id') maTK: string): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO !== 'QLDN') throw new Error('Không tìm thấy QLDN');
    return tk;
  }

  @Patch('ql/:id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async updateQL(@Param('id') maTK: string, @Body() data: TaiKhoanDto) {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO !== 'QLDN') throw new Error('Không tìm thấy QLDN');
    return this.taikhoanService.updateTaiKhoan(maTK, data);
  }

  @Patch('ql/status/:id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async updateStatusQL(
    @Param('id') maTK: string,
    @Body('status') status: TrangThai,
  ): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO !== 'QLDN') throw new Error('Không tìm thấy QLDN');
    return this.taikhoanService.updateTrangThai(maTK, status);
  }

  // ============================================================
  // 👷 NHÂN VIÊN
  // ============================================================

  @Post('nv/dangky')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async dangKyNV(@Body() data: TaiKhoanDto): Promise<TAIKHOAN> {
    if (data.VAITRO === 'NVVH' || data.VAITRO === 'NVCSKH') {
      return this.taikhoanService.dangKyNV(data);
    }
    throw new Error('Vai trò không hợp lệ cho nhân viên');
  }

  @Get('nv')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getAllNV(): Promise<TAIKHOAN[]> {
    return this.taikhoanService.taikhoansNV();
  }

  @Get('nv/:id')
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  async getNV(@Param('id') maTK: string): Promise<TAIKHOAN> {
    const tk = await this.taikhoanService.taikhoan(maTK);
    if (tk?.VAITRO === 'NVVH' || tk?.VAITRO === 'NVCSKH') return tk;
    throw new Error('Không tìm thấy nhân viên');
  }

  @Patch('nv/status/:id')
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

  @Patch('nv/role/:id')
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
