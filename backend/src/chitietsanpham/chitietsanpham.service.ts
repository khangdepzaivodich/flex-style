import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, CHITIETSANPHAM } from '@prisma/client';

@Injectable()
export class ChitietsanphamService {
  constructor(private prisma: PrismaService) {}

  // Lay tat ca chi tiet san pham
  async chitietsanphams(params: {
    take?: number;
    skip?: number;
    cursor?: Prisma.CHITIETSANPHAMWhereUniqueInput;
    where?: Prisma.CHITIETSANPHAMWhereInput;
    orderBy?: Prisma.CHITIETSANPHAMOrderByWithRelationInput;
  }): Promise<CHITIETSANPHAM[]> {
    const { take, skip, cursor, where, orderBy } = params;
    return this.prisma.cHITIETSANPHAM.findMany({
      include: { SANPHAM: true },
      take,
      skip,
      cursor,
      where,
      orderBy,
    });
  }

  // Lay chi tiet san pham theo ID
  async chitietsanpham(
    id: Prisma.CHITIETSANPHAMWhereUniqueInput,
  ): Promise<CHITIETSANPHAM | null> {
    return this.prisma.cHITIETSANPHAM.findUnique({
      where: id,
      include: { SANPHAM: true },
    });
  }

  // Tao chi tiet san pham moi
  async createChitietsanpham(
    data: Prisma.CHITIETSANPHAMCreateInput,
  ): Promise<CHITIETSANPHAM> {
    return this.prisma.cHITIETSANPHAM.create({
      data,
    });
  }

  // Xoa chi tiet san pham
  async deleteChitietsanpham(
    where: Prisma.CHITIETSANPHAMWhereUniqueInput,
  ): Promise<CHITIETSANPHAM> {
    return this.prisma.cHITIETSANPHAM.delete({
      where,
    });
  }

  // Cap nhat chi tiet san pham
  async updateChitietsanpham(params: {
    where: Prisma.CHITIETSANPHAMWhereUniqueInput;
    data: Prisma.CHITIETSANPHAMUpdateInput;
  }): Promise<CHITIETSANPHAM> {
    const { where, data } = params;
    return this.prisma.cHITIETSANPHAM.update({ where, data });
  }

  // Tang so luong chi tiet san pham
  async tangSoLuongChitietsanpham(
    where: Prisma.CHITIETSANPHAMWhereUniqueInput,
    tangSoLuong: number,
  ): Promise<CHITIETSANPHAM> {
    const chitietsanpham = await this.prisma.cHITIETSANPHAM.findUnique({
      where,
    });
    // Khong tim thay chi tiet san pham
    if (!chitietsanpham) {
      throw new Error('Không tìm thấy chi tiết sản phẩm');
    }

    // Cap nhat so luong chi tiet san pham
    const updated = await this.prisma.cHITIETSANPHAM.update({
      where,
      data: {
        SoLuong: chitietsanpham.SoLuong + tangSoLuong,
      },
    });
    return updated;
  }

  // Giam so luong chi tiet san pham
  async giamSoLuongChitietsanpham(
    where: Prisma.CHITIETSANPHAMWhereUniqueInput,
    giamSoLuong: number,
  ): Promise<CHITIETSANPHAM> {
    const chitietsanpham = await this.prisma.cHITIETSANPHAM.findUnique({
      where,
    });
    // Khong tim thay chi tiet san pham
    if (!chitietsanpham) {
      throw new Error('Không tìm thấy chi tiết sản phẩm');
    }
    // Cap nhat so luong chi tiet san pham
    const updated = await this.prisma.cHITIETSANPHAM.update({
      where,
      data: { SoLuong: chitietsanpham.SoLuong - giamSoLuong },
    });
    return updated;
  }
}
