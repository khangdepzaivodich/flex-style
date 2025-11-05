import { Injectable } from '@nestjs/common';
import {TrangThaiDonHang } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ThongkeRepository {
  constructor(private readonly prisma: PrismaService) {}
  async getDoanhThu() {
    const result = await this.prisma.tINHTRANGDONHANG.findMany({
      where: {
        TrangThai: TrangThaiDonHang.DA_GIAO,
      },
      include: {
        DONHANG: {
          select: {
            MaDH: true,
            TongTien: true,
            SoLuong: true,
            created_at: true,
            CHITIETSANPHAM: {
              select: {
                SANPHAM: {
                  select: {
                    GiaMua: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return result;
  }
}
