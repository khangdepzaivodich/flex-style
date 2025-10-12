import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  Min,
  IsEnum,
  IsArray,
} from 'class-validator';

// Define enums locally since Prisma exports are not working properly
enum TrangThai {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

enum MauSac {
  Red = 'Red',
  Orange = 'Orange', 
  Yellow = 'Yellow',
  Green = 'Green',
  Blue = 'Blue',
  Indigo = 'Indigo',
  Violet = 'Violet',
  Black = 'Black',
  White = 'White',
  Gray = 'Gray',
  Brown = 'Brown',
  Pink = 'Pink'
}

export class SanPhamDto {
  @IsString({ message: 'Tên sản phẩm phải là chuỗi ký tự.' })
  @IsNotEmpty({ message: 'Tên sản phẩm không được để trống.' })
  TenSP: string;

  @IsOptional()
  @IsString({ message: 'Mô tả sản phẩm phải là chuỗi ký tự.' })
  MoTa?: string;

  @IsInt({ message: 'Giá bán phải là số nguyên.' })
  @Min(0, { message: 'Giá bán không được âm.' })
  GiaBan: number;

  @IsInt({ message: 'Giá mua phải là số nguyên.' })
  @Min(0, { message: 'Giá mua không được âm.' })
  GiaMua: number;

  @IsOptional()
  @IsEnum(TrangThai, {
    message:
      'Trạng thái không hợp lệ. Giá trị hợp lệ: ' +
      Object.values(TrangThai).join(', '),
  })
  TrangThai?: TrangThai;

  @IsString({ message: 'Mã danh mục phải là chuỗi ký tự.' })
  @IsNotEmpty({ message: 'Mã danh mục không được để trống.' })
  MaDM: string;

  @IsEnum(MauSac, {
    message: 'Màu sắc không hợp lệ. Giá trị hợp lệ: ' + Object.values(MauSac).join(', ')
  })
  MauSac: MauSac;

  @IsArray()
  @IsString({ each: true })
  HinhAnh: string[];
}
