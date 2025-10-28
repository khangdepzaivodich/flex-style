import { IsString, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';

// Define enums locally
enum VaiTro {
  NCC = 'NCC',
  QLDN = 'QLDN',
  NVVH = 'NVVH',
  NVCSKH = 'NVCSKH',
  ADMIN = 'ADMIN',
  KH = 'KH',
}

enum TrangThai {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class TaiKhoanNghiepVuDto {
  @IsString()
  @IsNotEmpty()
  Username: string;

  @IsString()
  @IsNotEmpty()
  DisplayName: string;

  @IsOptional()
  @IsString()
  MaTK: string;

  @IsString()
  @IsNotEmpty()
  Email: string;

  @IsString()
  @IsNotEmpty()
  MatKhau: string;

  @IsOptional()
  @IsEnum(TrangThai)
  Status?: TrangThai;

  @IsOptional()
  @IsString()
  Avatar?: string | null;

  @IsNotEmpty()
  @IsEnum(VaiTro)
  VAITRO: VaiTro;
}
