import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, SANPHAM } from '@prisma/client';
import { SanPhamDto } from './dto/sanpham.dto';

@Injectable()
export class SanphamService {
  constructor(private prisma: PrismaService) {}

  // Lay san pham theo ID
  async sanpham(id: Prisma.SANPHAMWhereUniqueInput): Promise<SANPHAM | null> {
    return this.prisma.sANPHAM.findUnique({ where: id });
  }

  // Lay tat ca san pham
  async sanphams(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SANPHAMWhereUniqueInput;
    where?: Prisma.SANPHAMWhereInput;
    orderBy?: Prisma.SANPHAMOrderByWithRelationInput;
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
    return this.prisma.sANPHAM.create({
      data,
    });
  }

  // Cap nhat san pham
  async updateSanPham(params: {
    where: Prisma.SANPHAMWhereUniqueInput;
    data: SanPhamDto;
  }): Promise<SANPHAM> {
    const { where, data } = params;
    try {
      return await this.prisma.sANPHAM.update({
        data,
        where,
      });
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

  // Xoa san pham
  async deleteSanpham(where: Prisma.SANPHAMWhereUniqueInput): Promise<SANPHAM> {
    try {
      return this.prisma.sANPHAM.delete({
        where,
      });
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
