import { TrangThai } from "src/constant";
export class VoucherEntity {
    MaVoucher: string;
    TenVoucher: string;
    MoTa: string;
    SoTien: number;
    FreeShip: boolean;
    NgayBatDau: Date;
    NgayKetThuc: Date;
    Dieukien: number;
    TrangThai: TrangThai;
    create_at: Date;
    constructor(
        MaVoucher: string,
        TenVoucher: string,
        MoTa: string,
        SoTien: number,
        FreeShip: boolean,
        NgayBatDau: Date,
        NgayKetThuc: Date,
        Dieukien: number,
        TrangThai: TrangThai,
        create_at: Date,
    ) {
        this.MaVoucher = MaVoucher;
        this.TenVoucher = TenVoucher;
        this.MoTa = MoTa;
        this.SoTien = SoTien;
        this.FreeShip = FreeShip;
        this.NgayBatDau = NgayBatDau;
        this.NgayKetThuc = NgayKetThuc;
        this.Dieukien = Dieukien;
        this.TrangThai = TrangThai;
        this.create_at = create_at;
    }
}