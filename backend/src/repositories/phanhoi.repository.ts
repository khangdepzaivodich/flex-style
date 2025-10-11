import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class pHANHOIRepository {
    constructor(private readonly prisma: PrismaService) { }
    //lấy danh sách phản hồi theo sản phẩm
    async findAll(MaSP: string) {
        return await this.prisma.pHANHOI.findMany({
            where: { MaSP },
            orderBy: { created_at: 'desc' }
        });
    }
    //xem chi tiết phản hồi
    async findById(MaPH: string) {
        return await this.prisma.pHANHOI.findUnique({
            where: { MaPH },
        });
    }
    //chỉnh sửa phản hồi
    async update(MaPH: string, MaTKKH: string, updateData: any) {
        return await this.prisma.pHANHOI.updateMany({
            where: { MaPH, MaTKKH },
            data: {
                ...updateData,
                updated_at: new Date()
            },
        });
    }
    //lấy phản hồi của khách hàng theo sản phẩm
    async getCustomerFeedback(MaSP: string, MaTKKH: string) {
        return await this.prisma.pHANHOI.findFirst({
            where: { MaSP, MaTKKH },
            orderBy: { created_at: 'desc' }
        });
    }
    //xóa phản hồi
    async delete(MaPH: string, MaTKKH: string) {
        return await this.prisma.pHANHOI.deleteMany({
            where: { MaPH, MaTKKH },
        });
    }
}
