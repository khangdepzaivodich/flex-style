import { Injectable } from '@nestjs/common';
import { PhanHoiRepository } from 'src/repositories/phanhoi.repository';
import { PhanHoiDto } from './dto/phanhoi.dto';
import { SanPhamRepository } from 'src/repositories/sanpham.repository';
import { PhanHoiMapper } from './entity/phanhoi.mapper';
@Injectable()
export class PhanHoiService {
    constructor(
        private readonly phanHoiRepository: PhanHoiRepository,
        private readonly sanPhamRepository: SanPhamRepository
    ) { }
    //lấy danh sách phản hồi theo sản phẩm
    async findAll(MaSP: string) {
        const exsitingSanPham = await this.sanPhamRepository.findSPByID(MaSP);
        if (!exsitingSanPham) {
            throw new Error('Sản phẩm không tồn tại');
        }
        const feedbacks = await this.phanHoiRepository.findAll(MaSP);
        if (!feedbacks) {
            throw new Error('Không tìm thấy phản hồi cho sản phẩm này');
        }
        return feedbacks;
    }
    //xem chi tiết phản hồi
    async findById(MaPH: string) {
        const exsitingPhanHoi = await this.phanHoiRepository.findById(MaPH);
        if (!exsitingPhanHoi) {
            throw new Error('Phản hồi không tồn tại');
        }
        return exsitingPhanHoi;
    }
    //chỉnh sửa phản hồi
    async update(MaPH: string, MaTKKH: string, updateData: PhanHoiDto) {
        const exsitingPhanHoi = await this.phanHoiRepository.findById(MaPH);
        if (!exsitingPhanHoi) {
            throw new Error('Phản hồi không tồn tại');
        }
        return await this.phanHoiRepository.update(MaPH, MaTKKH, updateData);
    }
    //lấy phản hồi của khách hàng theo sản phẩm
    async getCustomerFeedback(MaSP: string, MaTKKH: string) {
        const exsitingSanPham = await this.sanPhamRepository.findSPByID(MaSP);
        if (!exsitingSanPham) {
            throw new Error('Sản phẩm không tồn tại');
        }
        return await this.phanHoiRepository.getCustomerFeedback(MaSP, MaTKKH);
    }
    //xóa phản hồi
    async delete(MaPH: string, MaTKKH: string) {
        const exsitingPhanHoi = await this.phanHoiRepository.findById(MaPH);
        if (!exsitingPhanHoi) {
            throw new Error('Phản hồi không tồn tại');
        }
        return await this.phanHoiRepository.delete(MaPH, MaTKKH);
    }
}
