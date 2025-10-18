import { IsString, IsOptional, IsEnum, IsNotEmpty, isNotEmpty } from 'class-validator';

// Define enums locally since Prisma exports are not working properly
enum VaiTro {
  NCC = 'NCC', 
  QLDN = 'QLDN',
  NVVH = 'NVVH',
  NVCSKH = 'NVCSKH',
  ADMIN = 'ADMIN'
}

enum TrangThai {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export class TaiKhoanNghiepVuDto {
  @IsString()
  @IsNotEmpty()
  Username: string;

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
