import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoaiDanhMuc, Prisma } from '@prisma/client';
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
  slug: string;
}

@Injectable()
export class SanphamService {
  constructor(private prisma: PrismaService) {}

  // Lay san pham theo ID
  async sanpham(slug: string): Promise<SANPHAM | null> {
    return this.prisma.sANPHAM.findFirst({
      where: { slug: slug },
      include: {
        CHITIETSANPHAM: {
          select: { MaCTSP: true, SoLuong: true, KichCo: true },
        },
      },
    });
  }

  // Lay tat ca san pham
  async sanphams(params: {
    skip?: number;
    take?: number;
    includeSizes?: boolean;
    includeTenDM?: string;
    loaiDM?: string;
    // cursor?: { MaSP: string };
    // where?: any;
    // orderBy?: any;
  }): Promise<SANPHAM[]> {
    const {
      skip = 0,
      take = 50,
      includeSizes = false,
      includeTenDM = '',
      loaiDM = '',
    } = params;
    const tenCacDM = includeTenDM
      ? decodeURIComponent(includeTenDM)
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [];
    const whereClause: any = {};
    if (tenCacDM.length > 0) {
      whereClause.DANHMUC = {
        TenDM: { in: tenCacDM },
        LoaiDanhMuc: loaiDM ? (loaiDM as LoaiDanhMuc) : undefined,
      };
    }

    const items = await this.prisma.sANPHAM.findMany({
      skip,
      take,
      where: Object.keys(whereClause).length ? whereClause : undefined,
      include: includeSizes
        ? {
            CHITIETSANPHAM: {
              select: { MaCTSP: true, SoLuong: true },
            },
          }
        : undefined,
    });

    return items;
  }
  async findRelated(tenSP: string): Promise<SANPHAM[]> {
    const product = await this.prisma.sANPHAM.findFirst({
      where: { TenSP: tenSP },
    });
    const relatedProducts = await this.prisma.sANPHAM.findMany({
      take: 10,
      where: {
        MaDM: product?.MaDM,
      },
      include: {
        CHITIETSANPHAM: {
          select: { MaCTSP: true, SoLuong: true },
        },
      },
    });
    return relatedProducts;
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
      slug: data.slug,
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
      slug: data.slug,
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
