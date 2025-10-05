import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { ThemSanPhamVaoGioHangDto } from '../giohang/dto/them-sanpham-giohang.dto';

@Injectable()
export class GioHangRepository {
  constructor(private prisma: PrismaService) {}

  // Tìm giỏ hàng theo mã tài khoản khách hàng
  async findGioHangByMaTKKH(maTKKH: string) {
    return await this.prisma.gIOHANG.findFirst({
      where: { MaTKKH: maTKKH },
      include: {
        CHITIETGIOHANG: {
          include: {
            CHITIETSANPHAM: {
              include: { SANPHAM: true }
            }
          }
        }
      }
    });
  }

  // Tạo giỏ hàng mới
  async createGioHang(maTKKH: string) {
    return await this.prisma.gIOHANG.create({
      data: { MaTKKH: maTKKH },
      include: {
        CHITIETGIOHANG: {
          include: {
            CHITIETSANPHAM: {
              include: { SANPHAM: true }
            }
          }
        }
      }
    });
  }

  // Tìm chi tiết sản phẩm theo mã
  async findChiTietSanPhamByMa(maCTSP: string) {
    return await this.prisma.cHITIETSANPHAM.findUnique({
      where: { MaCTSP: maCTSP },
      include: { SANPHAM: true }
    });
  }

  // Tìm chi tiết giỏ hàng đã tồn tại
  async findChiTietGioHangExist(maGH: string, maCTSP: string) {
    return await this.prisma.cHITIETGIOHANG.findFirst({
      where: {
        MaGH: maGH,
        MaCTSP: maCTSP
      }
    });
  }

  // Thêm sản phẩm mới vào giỏ hàng
  async createChiTietGioHang(maGH: string, maCTSP: string, soLuong: number) {
    return await this.prisma.cHITIETGIOHANG.create({
      data: {
        MaGH: maGH,
        MaCTSP: maCTSP,
        SoLuong: soLuong
      },
      include: {
        CHITIETSANPHAM: {
          include: { SANPHAM: true }
        }
      }
    });
  }

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  async updateSoLuongChiTietGioHang(maCTGH: string, soLuong: number) {
    return await this.prisma.cHITIETGIOHANG.update({
      where: { MaCTGH: maCTGH },
      data: { SoLuong: soLuong },
      include: {
        CHITIETSANPHAM: {
          include: { SANPHAM: true }
        }
      }
    });
  }

  // Tìm chi tiết giỏ hàng theo mã
  async findChiTietGioHangByMa(maCTGH: string) {
    return await this.prisma.cHITIETGIOHANG.findUnique({
      where: { MaCTGH: maCTGH },
      include: {
        CHITIETSANPHAM: true
      }
    });
  }

  // Xóa chi tiết giỏ hàng
  async deleteChiTietGioHang(maCTGH: string) {
    return await this.prisma.cHITIETGIOHANG.delete({
      where: { MaCTGH: maCTGH }
    });
  }

  // Lấy giỏ hàng đầy đủ thông tin để thanh toán
  async getGioHangForCheckout(maTKKH: string) {
    return await this.prisma.gIOHANG.findFirst({
      where: { MaTKKH: maTKKH },
      include: {
        CHITIETGIOHANG: {
          include: {
            CHITIETSANPHAM: {
              include: { SANPHAM: true }
            }
          }
        }
      }
    });
  }
}