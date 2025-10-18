import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { SanPhamDto } from './dto/sanpham.dto';

export interface SANPHAM {
  MaSP: string;
  created_at: Date;
  updated_at: Date;
  MoTa: string | null;
  TenSP: string;
  HinhAnh: string[];
  GiaBan: number;
  GiaMua: number;
  TrangThai: 'ACTIVE' | 'INACTIVE';
  MaDM: string;
  MauSac: string;
}

@Injectable()
export class SanphamService {
  constructor(private prisma: PrismaService) {}

  // Lấy sản phẩm theo ID
  async sanpham(id: string): Promise<SANPHAM | null> {
    return this.prisma.sANPHAM.findUnique({ where: { MaSP: id } });
  }

  // Lấy danh sách sản phẩm
  async sanphams(params: {
    skip?: number;
    take?: number;
    cursor?: { MaSP: string };
    where?: any;
    orderBy?: any;
  }): Promise<SANPHAM[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.sANPHAM.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // Tạo sản phẩm mới (TrangThai luôn ACTIVE)
  async createSanpham(data: SanPhamDto): Promise<SANPHAM> {
    if ('TrangThai' in data) {
      throw new BadRequestException(
        'Không được phép chỉ định trạng thái khi tạo sản phẩm ở endpoint này',
      );
    }

    const payload: Prisma.SANPHAMCreateInput = {
      TenSP: data.TenSP,
      MoTa: data.MoTa,
      HinhAnh: data.HinhAnh,
      GiaBan: data.GiaBan,
      GiaMua: data.GiaMua,
      TrangThai: 'ACTIVE',
      MauSac: data.MauSac,
      DANHMUC: {
        connect: { MaDM: data.MaDM },
      },
    };

    return this.prisma.sANPHAM.create({ data: payload });
  }

  // Cập nhật sản phẩm
  async updateSanPham(params: {
    where: { MaSP: string };
    data: SanPhamDto;
  }): Promise<SANPHAM> {
    const { where, data } = params;
    if ('TrangThai' in data) {
      throw new BadRequestException(
        'Không được phép thay đổi trạng thái sản phẩm ở endpoint này',
      );
    }

    const payload: Prisma.SANPHAMUpdateInput = {
      TenSP: data.TenSP,
      MoTa: data.MoTa,
      HinhAnh: data.HinhAnh,
      GiaBan: data.GiaBan,
      GiaMua: data.GiaMua,
      MauSac: data.MauSac,
      DANHMUC: {
        connect: { MaDM: data.MaDM },
      },
    };

    try {
      return await this.prisma.sANPHAM.update({
        data: payload,
        where,
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Sản phẩm không tồn tại');
      }
      throw error;
    }
  }

  // 🔹 Service riêng để cập nhật trạng thái sản phẩm
  async updateTrangThaiSanPham(
    MaSP: string,
    trangThai: 'ACTIVE' | 'INACTIVE',
  ): Promise<SANPHAM> {
    try {
      return await this.prisma.sANPHAM.update({
        where: { MaSP },
        data: { TrangThai: trangThai },
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Sản phẩm không tồn tại');
      }
      throw error;
    }
  }
}
