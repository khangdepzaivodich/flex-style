import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, SANPHAM } from '@prisma/client';

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
  async createSanpham(data: Prisma.SANPHAMCreateInput): Promise<SANPHAM> {
    return this.prisma.sANPHAM.create({
      data,
    });
  }

  // Cap nhat san pham
  async updateSanPham(params: {
    where: Prisma.SANPHAMWhereUniqueInput;
    data: Prisma.SANPHAMUpdateInput;
  }): Promise<SANPHAM> {
    const { where, data } = params;
    return this.prisma.sANPHAM.update({
      data,
      where,
    });
  }

  // Xoa san pham
  async deleteSanpham(where: Prisma.SANPHAMWhereUniqueInput): Promise<SANPHAM> {
    return this.prisma.sANPHAM.delete({
      where,
    });
  }
}
