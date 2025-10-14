import { Injectable } from "@nestjs/common";
import { TrangThai, TrangThaiPhieuNhapHang } from "@prisma/client";
import { PhieuNhapHangMapper } from "src/phieunhaphang/entity/phieunhaphang.mapper";
import { PrismaService } from "src/prisma.service";
@Injectable()
export class PhieuNhapHangRepository{
    constructor(private readonly prisma: PrismaService){}
    //lấy tất cả phiếu nhập hàng
    async findAll(){
        const phieuNhapHangs = await this.prisma.pHIEUNHAPHANG.findMany();
        return phieuNhapHangs ? PhieuNhapHangMapper.toEntityList(phieuNhapHangs) : [];
    }
    //lấy phiếu nhập hàng theo id
    async findById(id: string){
        const phieuNhapHang = await this.prisma.pHIEUNHAPHANG.findUnique({
            where: { MaPNH: id },
        });
        return phieuNhapHang ? PhieuNhapHangMapper.toEntity(phieuNhapHang) : null;
    }
    //tạo phiếu nhập hàng
    async create(newdata: any){
        const phieuNhapHang = await this.prisma.pHIEUNHAPHANG.create({
            data: newdata,
        });
        return phieuNhapHang ? PhieuNhapHangMapper.toEntity(phieuNhapHang) : null;
    }
    //cập nhật phiếu nhập hàng
    async update(MaPNH:string, updatedata: any){
        const phieuNhapHang = await this.prisma.pHIEUNHAPHANG.update({
            where: { MaPNH },
            data: updatedata,
        });
        
        return phieuNhapHang ? PhieuNhapHangMapper.toEntity(phieuNhapHang) : null;
    }
    //Nhân viên xác nhận phiếu nhập hàng
    async nhanVienXacNhan(MaPNH: string, MaTKNVXN: string, TrangThai: TrangThaiPhieuNhapHang) {
        const phieuNhapHang = await this.prisma.pHIEUNHAPHANG.update({
                where: { MaPNH },
                data: { 
                    MaTKNVXN,
                    TrangThai,
                },
            });
        return PhieuNhapHangMapper.toEntity(phieuNhapHang);
    }
    //Nhà cung cấp xác nhận phiếu nhập hàng
    async nhaCungCapXacNhan(MaPNH: string, TrangThai: TrangThaiPhieuNhapHang) {
        const phieuNhapHang = await this.prisma.pHIEUNHAPHANG.update({
                where: { MaPNH },
                data: { 
                    TrangThai: TrangThai,
                },
            });
        return PhieuNhapHangMapper.toEntity(phieuNhapHang);
    }
    //Nhà cung cấp từ chối phiếu nhập hàng
    async nhaCungCapTuChoi(MaPNH: string, TrangThai: TrangThaiPhieuNhapHang) {
        const phieuNhapHang = await this.prisma.pHIEUNHAPHANG.update({
                where: { MaPNH },
                data: { 
                    TrangThai: TrangThai,
                },
            });
        return PhieuNhapHangMapper.toEntity(phieuNhapHang);
    }
}
