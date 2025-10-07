import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { DanhMucMapper } from "src/danhmuc/entity/danhmuc.mapper";
import { DanhMucDto } from "src/danhmuc/dto/danhmuc.dto";
import { DanhMucEntity, TrangThai } from "src/danhmuc/entity/danhmuc.entity";

@Injectable()
export class DanhMucRepository {
    constructor(private readonly prisma: PrismaService) {}
    //tạo mới danh mục
    async createDanhMuc(newdata: any){
        const danhmuc = await this.prisma.dANHMUC.create({
            data: newdata,
        });
        return danhmuc ? DanhMucMapper.toEntity(danhmuc) : null;
    }
    //chỉnh sửa danh mục dựa trên id là chuỗi
    async updateDanhMuc(updatedata: any){
        const danhmuc = await this.prisma.dANHMUC.update({
            where: { MaDM: updatedata.MaDM },
            data: updatedata,
        });

        return danhmuc ? DanhMucMapper.toEntity(danhmuc) : null;
    }
    //thay đổi trạng thái biết trạng thái là kiểu enum
    async changeTrangThai(MaDM: string, TrangThai: TrangThai) {
        const danhmuc = await this.prisma.dANHMUC.update({
                where: { MaDM },
                data: { TrangThai},
            });
        return DanhMucMapper.toEntity(danhmuc);
    }
}
