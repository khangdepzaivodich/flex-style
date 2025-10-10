import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, TAIKHOAN, TrangThai, VaiTro } from '@prisma/client';
import { TaiKhoanDto } from './dto/taikhoan.dto';
@Injectable()
export class TaikhoanService {
  constructor(private readonly prisma: PrismaService) {}

  // Dang ky tai khoan moi
  async dangKy(data: TaiKhoanDto): Promise<TAIKHOAN> {
    if ('VaiTro' in data) {
      throw new Error('Không thể thay đổi vai trò của khách hàng');
    }
    return this.prisma.tAIKHOAN.create({ data, VaiTro: 'KH' });
  }

  // Dang ky tai khoan nha cung cap
  async dangKyNCC(data: TaiKhoanDto): Promise<TAIKHOAN> {
    if ('VaiTro' in data) {
      throw new Error('Không thể thay đổi vai trò của nhà cung cấp');
    }
    return this.prisma.tAIKHOAN.create({ data, VaiTro: 'NCC' });
  }

  // Dang ky tai khoan quan ly
  async dangKyQL(data: TaiKhoanDto): Promise<TAIKHOAN> {
    if ('VaiTro' in data) {
      throw new Error('Không thể thay đổi vai trò của nhà cung cấp');
    }
    return this.prisma.tAIKHOAN.create({ data, VaiTro: 'QLDN' });
  }

  // Dang ky tai khoan nhan vien
  async dangKyNV(data: TaiKhoanDto): Promise<TAIKHOAN> {
    return this.prisma.tAIKHOAN.create({ data });
  }

  // Lay tat ca tai khoan cua khach hang
  async taikhoans(): Promise<TAIKHOAN[]> {
    return this.prisma.tAIKHOAN.findMany({
      where: { VAITRO: { equals: 'KH' } },
    });
  }

  // Lay tat ca tai khoan cua quan ly
  async taikhoansQL(): Promise<TAIKHOAN[]> {
    return this.prisma.tAIKHOAN.findMany({
      where: { VAITRO: { in: ['QLDN', 'QLLOGISTIC'] } },
    });
  }

  // Lay tat ca tai khoan cua nhan vien
  async taikhoansNV(): Promise<TAIKHOAN[]> {
    return this.prisma.tAIKHOAN.findMany({
      where: { VAITRO: { in: ['NVVH', 'NVCSKH', 'NVHT'] } },
    });
  }

  // Lay tai khoan theo ID
  async taikhoan(maTK: string): Promise<TAIKHOAN | null> {
    return this.prisma.tAIKHOAN.findUnique({
      where: { MaTK: maTK },
    });
  }

  // Cap nhat tai khoan
  async updateTaiKhoan(maTK: string, data: TaiKhoanDto): Promise<TAIKHOAN> {
    if ('VaiTro' in data) {
      throw new Error(
        'Không thể cập nhật trạng thái tài khoản qua endpoint này',
      );
    } else if ('TrangThai' in data) {
      throw new Error(
        'Không thể cập nhật trạng thái tài khoản qua endpoint này',
      );
    }
    return this.prisma.tAIKHOAN.update({
      where: { MaTK: maTK },
      data,
    });
  }

  // Cap nhat vai tro tai khoan
  async updateVaiTro(maTK: string, vaiTro: VaiTro): Promise<TAIKHOAN> {
    return this.prisma.tAIKHOAN.update({
      where: { MaTK: maTK },
      data: { VAITRO: vaiTro },
    });
  }

  // Cap nhat trang thai tai khoan
  async updateTrangThai(maTK: string, trangThai: TrangThai): Promise<TAIKHOAN> {
    return this.prisma.tAIKHOAN.update({
      where: { MaTK: maTK },
      data: { Status: trangThai },
    });
  }

  // Xoa tai khoan
  async deleteTaiKhoan(maTK: string): Promise<TAIKHOAN> {
    return this.prisma.tAIKHOAN.delete({
      where: { MaTK: maTK },
    });
  }
}
