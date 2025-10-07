import { BadRequestException, Injectable } from '@nestjs/common';
import { create } from 'domain';
import { DanhMucDto } from './dto/danhmuc.dto';
import { LoaiDanhMuc, TrangThai } from './entity/danhmuc.entity';
import { not } from 'rxjs/internal/util/not';
import { DanhMucRepository } from 'src/repositories/danhmuc.repository';
import { ExcelService } from './excel.service';
@Injectable()
export class DanhMucService {
    constructor(
        private readonly danhMucRepository: DanhMucRepository,
        private readonly excelService: ExcelService,
    ) {}

    async getAllDanhMuc() {
        return this.danhMucRepository.findAll();
    }
    async addDanhMuc(data: DanhMucDto) {
        const existingDanhMuc = await this.danhMucRepository.findByName(data.TenDanhMuc);
        if (existingDanhMuc) {
            throw new BadRequestException('Danh mục đã tồn tại');
        }
        return this.danhMucRepository.create(data);
    }
    async updateDanhMuc(id: number, data: DanhMucDto) {
        const existingDanhMuc = await this.danhMucRepository.findById(id);
        if (!existingDanhMuc) {
            throw new BadRequestException('Danh mục không tồn tại');
        }
        if (data.TenDanhMuc && data.TenDanhMuc !== existingDanhMuc.TenDanhMuc) {
            const danhMucWithSameName = await this.danhMucRepository.findByName(data.TenDanhMuc);
            if (danhMucWithSameName) {
                throw  new BadRequestException('Danh mục đã tồn tại');
            }
        }   
        return this.danhMucRepository.update(id, data);
    }
    async changeTrangThai(id: number, trangThai: boolean) {
        const existingDanhMuc = await this.danhMucRepository.findById(id);
        if (!existingDanhMuc) {
            throw new BadRequestException('Danh mục không tồn tại');
        }
        return this.danhMucRepository.update(id, { trangThai });
    }
    async changeLoai(id: string, TrangThai: string) {
        const existingDanhMuc = await this.danhMucRepository.findById(id);
        if (!existingDanhMuc) {
            throw new BadRequestException('Danh mục không tồn tại');
        }
        if (!(TrangThai in LoaiDanhMuc)) {
            throw new BadRequestException('Loại danh mục không hợp lệ');
        }
        return this.danhMucRepository.changeTrangThai(existingDanhMuc.MaDM, TrangThai as TrangThai);
    }
    async exportDanhMucToExcel() : Promise<Buffer> {
        //lấy tên nhân viên đăng nhập từ token
        const currentUser = { id: 1, name: 'Admin' }; // giả lập thông tin người dùng
        const danhMucList = await this.danhMucRepository.findAll();
        return this.excelService.generateToExcel(danhMucList, currentUser.name);
    }
}