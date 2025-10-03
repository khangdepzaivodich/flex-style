import { Injectable } from "@nestjs/common";

@Injectable()
export class DanhMucRepository {
    // Các phương thức truy cập dữ liệu ở đây
    constructor() {}
    async findAll() {
        // Truy vấn tất cả danh mục từ cơ sở dữ liệu
        return [
            { id: 1, TenDanhMuc: 'Áo Nam', TrangThai: true, Loai: 'Nam' },
            { id: 2, TenDanhMuc: 'Áo Nữ', TrangThai: true, Loai: 'Nữ' },
            { id: 3, TenDanhMuc: 'Phụ kiện', TrangThai: false, Loai: 'Phụ kiện' }
        ];
    }
    async findById(id: number) {
        // Truy vấn danh mục theo id từ cơ sở dữ liệu
        if (id === 1) {
            return { id: 1, TenDanhMuc: 'Áo Nam', TrangThai: true, Loai: 'Nam' };
        }
        return null;
    }   
    async findByName(name: string) {
        // Truy vấn danh mục theo tên từ cơ sở dữ liệu
        if (name === 'Áo Nam') {
            return { id: 1, TenDanhMuc: 'Áo Nam', TrangThai: true, Loai: 'Nam' };
        }
        return null;
    }
    async create(data: any) {
        // Thêm mới danh mục vào cơ sở dữ liệu
        return { id: 4, ...data };
    }
    async update(id: number, data: any) {
        // Cập nhật danh mục trong cơ sở dữ liệu
        return { id, ...data };
    }                   

    async delete(id: number) {
        // Xoá danh mục khỏi cơ sở dữ liệu
        return { success: true };
    }

}
