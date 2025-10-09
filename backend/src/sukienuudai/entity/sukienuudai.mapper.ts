import { SuKienUuDai } from "./sukienuudai.entity";
export class SuKienUuDaiMapper{
    static toEntity(prisma: any): SuKienUuDai{
        return new SuKienUuDai(
            prisma.MaSK,
            prisma.TenSK,
            prisma.NgayPH,
            prisma.NgayKT,
            prisma.TrangThai,
            prisma.PhanTramGiam,
            prisma.created_at,
            prisma.updated_at
        );
    }

    static toEntityList(prismaList: any[]):SuKienUuDai[]{
        return prismaList.map(this.toEntity);
    }
}
