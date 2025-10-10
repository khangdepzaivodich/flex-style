export class VoucherKhachHangEntity {
    MaVCKH: string;
    MaTKKH: string;
    MaVoucher: string;
    created_at: Date;
    constructor(
        MaVCKH: string,
        MaTKKH: string,
        MaVoucher: string,
        created_at: Date,
    ) {
        this.MaVCKH = MaVCKH;
        this.MaTKKH = MaTKKH;
        this.MaVoucher = MaVoucher;
        this.created_at = created_at;
    }
}