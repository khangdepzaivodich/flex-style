import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TaiKhoanDto } from './dto/taikhoan.dto';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/supabase/types';
import { TaiKhoanNghiepVuDto } from './dto/taikhoannghiepvu.dto';
import { GiohangRepository } from 'src/repositories/giohang.repository';
// Define types based on the schema - matching Prisma exactly
type VaiTro = 'KH' | 'NCC' | 'QLDN' | 'NVVH' | 'NVCSKH' | 'ADMIN';
type TrangThai = 'ACTIVE' | 'INACTIVE';

export interface TAIKHOAN {
  MaTK: string;
  created_at: Date;
  updated_at: Date;
  Username: string | null; // Use null to match Prisma
  Status: TrangThai;
  Avatar: string | null; // Use null to match Prisma
  VAITRO: VaiTro;
  Email: string | null; // Use null to match Prisma
  DisplayName: string | null; // Use null to match Prisma
}
@Injectable()
export class TaikhoanService {
  private readonly supabase: SupabaseClient<Database>;
  constructor(
    private readonly prisma: PrismaService,
    private readonly gioHangRepository: GiohangRepository,
  ) {
    this.supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
  }
  // Dang ky tai khoan moi
  async dangKy(data: TaiKhoanDto): Promise<TAIKHOAN> {
    console.log(data);
    const existingUser = await this.prisma.tAIKHOAN.findFirst({
      where: { MaTK: data.MaTK },
    });
    console.log(existingUser);
    if (existingUser) {
      throw new Error('Tài khoản đã tồn tại');
    }
    const createUser = await this.prisma.tAIKHOAN.create({
      data: {
        ...data,
        VAITRO: 'KH',
        Status: 'ACTIVE',
      },
    });
    const createGioHang = await this.gioHangRepository.createCart({
      MaTKKH: createUser.MaTK,
    });

    return createUser;
  }

  // Dang ky tai khoan nha cung cap
  async dangKyNCC(data: TaiKhoanNghiepVuDto): Promise<TAIKHOAN> {
    if (data.VAITRO !== 'NCC') {
      throw new BadRequestException('Vai trò phải là nhà cung cấp (NCC)');
    }
    const createUserSupabase = await this.supabase.auth.signUp({
      email: data.Email,
      password: data.MatKhau,
    });
    if (createUserSupabase.error) {
      throw new Error(
        `Lỗi khi tạo tài khoản Supabase: ${createUserSupabase.error.message}`,
      );
    }
    return this.prisma.tAIKHOAN.create({
      data: {
        Username: data.Username,
        Status: 'ACTIVE',
        VAITRO: 'NCC',
      },
    });
  }

  // Dang ky tai khoan quan ly
  async dangKyQL(data: TaiKhoanNghiepVuDto): Promise<TAIKHOAN> {
    if (data.VAITRO !== 'QLDN') {
      throw new BadRequestException(
        'Vai trò phải là quản lý doanh nghiệp (QLDN)',
      );
    }
    const createUserSupabase = await this.supabase.auth.signUp({
      email: data.Email,
      password: data.MatKhau,
    });
    if (createUserSupabase.error) {
      throw new Error(
        `Lỗi khi tạo tài khoản Supabase: ${createUserSupabase.error.message}`,
      );
    }
    return this.prisma.tAIKHOAN.create({
      data: {
        Username: data.Username,
        Status: 'ACTIVE',
        VAITRO: data.VAITRO,
      },
    });
  }

  // Dang ky tai khoan nhan vien
  async dangKyNV(data: TaiKhoanNghiepVuDto): Promise<TAIKHOAN> {
    if (data.VAITRO !== 'NVVH' && data.VAITRO !== 'NVCSKH') {
      throw new BadRequestException(
        'Vai trò phải là nhân viên (NVVH hoặc NVCSKH)',
      );
    }
    const createUserSupabase = await this.supabase.auth.signUp({
      email: data.Email,
      password: data.MatKhau,
    });
    if (createUserSupabase.error) {
      throw new Error(
        `Lỗi khi tạo tài khoản Supabase: ${createUserSupabase.error.message}`,
      );
    }
    return this.prisma.tAIKHOAN.create({
      data: {
        Username: data.Username,
        Status: 'ACTIVE',
        VAITRO: data.VAITRO,
      },
    });
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
      where: { VAITRO: { in: ['QLDN'] } },
    });
  }

  // Lay tat ca tai khoan cua nhan vien
  async taikhoansNV(): Promise<TAIKHOAN[]> {
    return await this.prisma.tAIKHOAN.findMany({
      where: { VAITRO: { in: ['NVVH', 'NVCSKH'] } },
    });
  }

  // Lay tat ca tai khoan cua nha cung cap
  async taikhoansNCC(): Promise<TAIKHOAN[]> {
    return this.prisma.tAIKHOAN.findMany({
      where: { VAITRO: { equals: 'NCC' } },
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
      data: data as any,
    });
  }

  // Cap nhat vai tro tai khoan
  async updateVaiTro(maTK: string, vaiTro: VaiTro): Promise<TAIKHOAN> {
    return this.prisma.tAIKHOAN.update({
      where: { MaTK: maTK },
      data: { VAITRO: vaiTro as any },
    });
  }

  // Cap nhat trang thai tai khoan
  async updateTrangThai(maTK: string, trangThai: TrangThai): Promise<TAIKHOAN> {
    return this.prisma.tAIKHOAN.update({
      where: { MaTK: maTK },
      data: { Status: trangThai },
    });
  }
}
