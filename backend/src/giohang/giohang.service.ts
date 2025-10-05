import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { GioHangRepository } from '../repositories/giohang.repository';
import { ThemSanPhamVaoGioHangDto } from './dto/them-sanpham-giohang.dto';
import { CapNhatSoLuongDto } from './dto/capnhat-soluong.dto';

@Injectable()
export class GioHangService {
  constructor(private gioHangRepository: GioHangRepository) {}

  // Thêm sản phẩm vào giỏ hàng
  async themSanPhamVaoGioHang(data: ThemSanPhamVaoGioHangDto) {
    try {
      // Kiểm tra chi tiết sản phẩm có tồn tại không
      const chiTietSanPham = await this.gioHangRepository.findChiTietSanPhamByMa(data.MaCTSP);

      if (!chiTietSanPham) {
        throw new NotFoundException('Sản phẩm không tồn tại');
      }

      // Kiểm tra số lượng tồn kho
      if (chiTietSanPham.SoLuong < data.SoLuong) {
        throw new BadRequestException('Số lượng sản phẩm không đủ trong kho');
      }

      // Tìm hoặc tạo giỏ hàng cho khách hàng
      let gioHang = await this.gioHangRepository.findGioHangByMaTKKH(data.MaTKKH);

      if (!gioHang) {
        gioHang = await this.gioHangRepository.createGioHang(data.MaTKKH);
      }

      // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const chiTietGioHangExist = await this.gioHangRepository.findChiTietGioHangExist(
        gioHang.MaGH, 
        data.MaCTSP
      );

      if (chiTietGioHangExist) {
        // Nếu đã có thì cập nhật số lượng
        const soLuongMoi = chiTietGioHangExist.SoLuong + data.SoLuong;
        
        if (chiTietSanPham.SoLuong < soLuongMoi) {
          throw new BadRequestException('Tổng số lượng vượt quá số lượng tồn kho');
        }

        return await this.gioHangRepository.updateSoLuongChiTietGioHang(
          chiTietGioHangExist.MaCTGH, 
          soLuongMoi
        );
      } else {
        // Nếu chưa có thì tạo mới
        return await this.gioHangRepository.createChiTietGioHang(
          gioHang.MaGH,
          data.MaCTSP,
          data.SoLuong
        );
      }
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng');
    }
  }

  // Lấy tất cả sản phẩm trong giỏ hàng
  async layTatCaSanPhamTrongGioHang(maTKKH: string) {
    const gioHang = await this.gioHangRepository.findGioHangByMaTKKH(maTKKH);

    if (!gioHang) {
      return {
        MaGH: null,
        MaTKKH: maTKKH,
        CHITIETGIOHANG: []
      };
    }

    return gioHang;
  }

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  async capNhatSoLuongSanPham(maCTGH: string, data: CapNhatSoLuongDto) {
    try {
      // Kiểm tra chi tiết giỏ hàng có tồn tại không
      const chiTietGioHang = await this.gioHangRepository.findChiTietGioHangByMa(maCTGH);

      if (!chiTietGioHang) {
        throw new NotFoundException('Sản phẩm không có trong giỏ hàng');
      }

      // Kiểm tra số lượng tồn kho
      if (chiTietGioHang.CHITIETSANPHAM.SoLuong < data.SoLuong) {
        throw new BadRequestException('Số lượng sản phẩm không đủ trong kho');
      }

      return await this.gioHangRepository.updateSoLuongChiTietGioHang(maCTGH, data.SoLuong);
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Có lỗi xảy ra khi cập nhật số lượng sản phẩm');
    }
  }

  // Xóa sản phẩm khỏi giỏ hàng
  async xoaSanPhamKhoiGioHang(maCTGH: string) {
    try {
      const chiTietGioHang = await this.gioHangRepository.findChiTietGioHangByMa(maCTGH);

      if (!chiTietGioHang) {
        throw new NotFoundException('Sản phẩm không có trong giỏ hàng');
      }

      await this.gioHangRepository.deleteChiTietGioHang(maCTGH);

      return { message: 'Xóa sản phẩm khỏi giỏ hàng thành công' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng');
    }
  }

  // Lấy sản phẩm để mua (sẵn sàng thanh toán)
  async laySanPhamDeMua(maTKKH: string) {
    const gioHang = await this.gioHangRepository.getGioHangForCheckout(maTKKH);
    
    if (!gioHang || !gioHang.CHITIETGIOHANG || gioHang.CHITIETGIOHANG.length === 0) {
      throw new NotFoundException('Giỏ hàng trống');
    }

    // Tính tổng tiền và kiểm tra tình trạng sản phẩm
    let tongTien = 0;
    const sanPhamDeMua = gioHang.CHITIETGIOHANG.map(item => {
      const giaSanPham = item.CHITIETSANPHAM.SANPHAM.GiaBan || 0;
      const thanhTien = giaSanPham * item.SoLuong;
      tongTien += thanhTien;

      return {
        ...item,
        ThanhTien: thanhTien,
        TenSanPham: item.CHITIETSANPHAM.SANPHAM.TenSP,
        GiaBan: giaSanPham,
        KichCo: item.CHITIETSANPHAM.KichCo,
        MauSac: item.CHITIETSANPHAM.MauSac,
        HinhAnh: item.CHITIETSANPHAM.HinhAnh
      };
    });

    return {
      gioHang: gioHang,
      sanPhamDeMua: sanPhamDeMua,
      tongTien: tongTien,
      soLuongSanPham: sanPhamDeMua.length
    };
  }
}