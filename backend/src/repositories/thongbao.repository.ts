import { Injectable } from '@nestjs/common';
import { Prisma, TrangThai } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ThongbaoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllSK() {
    return this.prisma.tHONGBAO.findMany({
      where: {
        Loai: 'SUKIENUUDAI',
      },
    });
  }

  async findAllVC() {
    return this.prisma.tHONGBAO.findMany({
      where: {
        Loai: 'VOUCHER',
      },
    });
  }
  async updateTB_SK(thongbao: any[]) {
    const updatePromises = thongbao.map((tb) =>
      this.prisma.tHONGBAO.update({
        where: { MaTB: tb.MaTB },
        data: {
          MaSK: tb.MaSK,
        },
      }),
    );
    return Promise.all(updatePromises);
  }

  async updateTB_VC(thongbao: any[]) {
    const updatePromises = thongbao.map((tb) =>
      this.prisma.tHONGBAO.update({
        where: { MaTB: tb.MaTB },
        data: {
          MaVoucher: tb.MaVoucher,
        },
      }),
    );
    return Promise.all(updatePromises);
  }
}
