import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { SanPhamDto } from './dto/sanpham.dto';

// Define SANPHAM type locally - make sure it matches Prisma schema exactly
export interface SANPHAM {
  MaSP: string;
  created_at: Date;
  updated_at: Date;
  MoTa: string | null; // Use null to match Prisma
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

  // Lay san pham theo ID
  async sanpham(id: string): Promise<SANPHAM | null> {
    return this.prisma.sANPHAM.findUnique({ where: { MaSP: id } });
  }

  // Lay tat ca san pham
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

  // Tao san pham moi
  async createSanpham(data: SanPhamDto): Promise<SANPHAM> {
    // Ep ve kieu Prisma payload
    const payload: Prisma.SANPHAMCreateInput = {
      TenSP: data.TenSP,
      MoTa: data.MoTa,
      HinhAnh: data.HinhAnh,
      GiaBan: data.GiaBan,
      GiaMua: data.GiaMua,
      TrangThai: data.TrangThai,
      MauSac: data.MauSac,
      DANHMUC: {
        connect: { MaDM: data.MaDM },
      },
    };
    return this.prisma.sANPHAM.create({ data: payload });
  }

  // Cap nhat san pham
  async updateSanPham(params: {
    where: { MaSP: string };
    data: SanPhamDto;
  }): Promise<SANPHAM> {
    const { where, data } = params;

    const payload: Prisma.SANPHAMUpdateInput = {
      TenSP: data.TenSP,
      MoTa: data.MoTa,
      HinhAnh: data.HinhAnh,
      GiaBan: data.GiaBan,
      GiaMua: data.GiaMua,
      TrangThai: data.TrangThai,
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

  // Xoa san pham
  async deleteSanpham(where: { MaSP: string }): Promise<SANPHAM> {
    try {
      return await this.prisma.sANPHAM.delete({ where });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Sản phẩm không tồn tại');
      }
      throw error;
    }
  }
}
