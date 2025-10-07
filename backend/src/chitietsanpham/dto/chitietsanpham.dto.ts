import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { KichCo, MauSac, TrangThaiSP } from '@prisma/client';

export class ChiTietSanPhamDto {
  @IsEnum(KichCo, {
    message: `Kích cỡ không hợp lệ. Giá trị hợp lệ: ${Object.values(KichCo).join(', ')}`,
  })
  KichCo: KichCo;

  @IsEnum(MauSac, {
    message: `Màu sắc không hợp lệ. Giá trị hợp lệ: ${Object.values(MauSac).join(', ')}`,
  })
  MauSac: MauSac;

  @IsOptional()
  @IsString({ message: 'Hình ảnh phải là chuỗi' })
  HinhAnh?: string;

  @IsUUID('4', { message: 'Mã sản phẩm (MaSP) phải là UUID hợp lệ' })
  MaSP: string;

  @IsInt({ message: 'Số lượng phải là số nguyên' })
  @Min(0, { message: 'Số lượng không được âm' })
  SoLuong: number;

  @IsOptional()
  @IsEnum(TrangThaiSP, {
    message: `Trạng thái không hợp lệ. Giá trị hợp lệ: ${Object.values(TrangThaiSP).join(', ')}`,
  })
  TrangThaiSP?: TrangThaiSP;
}
