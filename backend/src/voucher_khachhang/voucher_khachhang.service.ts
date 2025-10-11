import { Injectable } from '@nestjs/common';
import { VoucherRepository } from 'src/repositories/voucher.repository';
import { VoucherKhachHangRepository } from 'src/repositories/voucher_khachhang.repository';
import { TrangThai } from 'src/constant';
@Injectable()
export class VoucherKhachHangService {
  constructor(
    private readonly voucherKhachHangRepository: VoucherKhachHangRepository,
    private readonly voucherRepository: VoucherRepository,
  ) {}
  //sử dụng voucher cho khách hàng
  async useVoucher(MaKH: string, MaVCKH: string) {
    return await this.voucherKhachHangRepository.useVoucher(MaKH, MaVCKH);
  }
  //xem danh sách voucher khách hàng
  async findAll(MaKH: string) {
    //kiểm tra nếu mã voucher ở bảng voucher mà ở trạng thái INACTIVE thì chuyển các voucher đó về trạng thái INACTIVE và ngược lại
    const vouchers = await this.voucherKhachHangRepository.findAll(MaKH);
    if (!vouchers) {
      throw new Error('Không tìm thấy voucher cho khách hàng này');
    }
    for (const voucher of vouchers) {
      const checkVoucher = await this.voucherRepository.getVoucherById(
        voucher.MaVoucher,
      );
      if (checkVoucher) {
        // Nếu voucher tồn tại, kiểm tra trạng thái
        if (checkVoucher.TrangThai === 'INACTIVE') {
          await this.voucherKhachHangRepository.updateVoucherStatus(
            voucher.MaVoucher,
            TrangThai.INACTIVE,
          );
        } else {
          await this.voucherKhachHangRepository.updateVoucherStatus(
            voucher.MaVoucher,
            TrangThai.ACTIVE,
          );
        }
      }
      voucher['voucherDetails'] = checkVoucher; // Gán thông tin chi tiết voucher vào đối tượng voucher khách hàng
    }
    return vouchers;
  }
  //xem chi tiết voucher khách hàng
  async findById(MaVCKH: string) {
    const voucher = await this.voucherKhachHangRepository.findById(MaVCKH);
    if (!voucher) {
      throw new Error('Không tìm thấy voucher cho khách hàng này');
    }
    const voucherDetails = await this.voucherRepository.getVoucherById(
      voucher.MaVoucher,
    );
    if (voucherDetails) {
      // Gộp thông tin chi tiết voucher vào đối tượng voucher khách hàng
      Object.assign(voucher, { voucherDetails });
    }
    return voucher;
  }
  //thêm voucher khách hàng
  async add(MaKH: string, MaVoucher: string) {
    //kiểm tra mã voucher có tồn tại trong bảng voucher không
    const checkVoucher = await this.voucherRepository.getVoucherById(MaVoucher);
    if (!checkVoucher) {
      throw new Error('Không tìm thấy voucher này');
    }
    //kiểm tra voucher có trong thời hạn tặng không
    const currentDate = new Date();
    if (
      checkVoucher.NgayBatDau > currentDate ||
      checkVoucher.NgayKetThuc < currentDate
    ) {
      throw new Error('Voucher không trong thời hạn sử dụng');
    }

    return await this.voucherKhachHangRepository.add(MaKH, MaVoucher);
  }
}
