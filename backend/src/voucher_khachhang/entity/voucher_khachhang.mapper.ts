import { VoucherKhachHangEntity } from "./voucher_khachhang.entity";

export class VoucherKhachHangMapper {
    static toEntity(prisma: any): any {
        return new VoucherKhachHangEntity(
            prisma.MaVCKH,
            prisma.MaTKKH,
            prisma.MaVoucher,
            prisma.created_at,
        );
    }
    static toEntityList(prismas: any[]): VoucherKhachHangEntity[] {
        return prismas.map((prisma) => this.toEntity(prisma));
    }
}