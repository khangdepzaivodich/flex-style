import { TrangThai, LoaiDanhMuc } from "src/constant";
export class DanhMucEntity {
  id: string;
  TenDM: string;
  TrangThai: TrangThai;
  Loai: LoaiDanhMuc;
  constructor(
    id: string,
    TenDM: string,
    TrangThai: TrangThai,
    Loai: LoaiDanhMuc,
  ){
    this.id = id;
    this.TenDM = TenDM;
    this.TrangThai = TrangThai;
    this.Loai = Loai;
  }
}
