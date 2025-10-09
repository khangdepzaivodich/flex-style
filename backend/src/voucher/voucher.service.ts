import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { VoucherRepository } from 'src/repositories/voucher.repository';
import { VoucherMapper } from './entity/voucher.mapper';
import { VoucherDto } from './dto/voucher.dto';
import { TrangThai } from 'src/constant';
import { ExcelService } from 'src/voucher/excel.service';
@Injectable()
export class VoucherService {
    constructor(private readonly voucherRepository: VoucherRepository,
        private readonly excelService: ExcelService,
    ) {}

    //lấy danh sách voucher
    async getAllVouchers() {
        return this.voucherRepository.getAllVouchers();
    }

    //lấy voucher theo id
    async getVoucherById(id: string) {
        const existingVoucher = await this.voucherRepository.getVoucherById(id);
        if (!existingVoucher) {
            throw new BadRequestException('Không tìm thấy voucher');
        }
        return existingVoucher;
    }

    // thêm mới voucher
    async addVoucher(data: VoucherDto) {
        const existingVoucher = await this.voucherRepository.getVoucherById();
        if (existingVoucher) {
            throw new BadRequestException('Mã voucher đã tồn tại');
        }
        return this.voucherRepository.addVoucher(data);
    }

    //chỉnh sửa voucher theo id
    async updateVoucher(id: string, data: VoucherDto) {
        const existingVoucher = await this.voucherRepository.getVoucherById(id);
        if (!existingVoucher) {
            throw new NotFoundException('Không tìm thấy voucher');
        }
        if (data.MaVoucher && data.MaVoucher !== existingVoucher.MaVoucher) {
            const voucherWithSameName = await this.voucherRepository.getVoucherByName(data.TenVoucher);
            if (voucherWithSameName) {
                throw new BadRequestException('Mã voucher đã tồn tại');
            }
        }   
        return this.voucherRepository.updateVoucher(id, data);
    }  
    
    //thay đổi trạng thái voucher
    async changeStatus(id: string, trangThai: string) {
        const existingVoucher = await this.voucherRepository.getVoucherById(id);
        if (!existingVoucher) {
            throw new NotFoundException('Không tìm thấy voucher');
        }
        if (!(trangThai in TrangThai)) {
            throw new BadRequestException('Trạng thái không hợp lệ');
        }
        return this.voucherRepository.changeStatus(id, trangThai as TrangThai);
    }
    //xuất báo cáo excel voucher
    async exportVoucherToExcel(): Promise<Buffer> {
        // Lấy dữ liệu voucher từ cơ sở dữ liệu
        const vouchers = await this.voucherRepository.getAllVouchers();
        return this.excelService.generateToExcel(vouchers);
    }
}
