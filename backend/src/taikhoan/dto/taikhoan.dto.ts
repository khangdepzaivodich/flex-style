import { IsString, IsOptional, IsEnum } from 'class-validator';

// Define enums locally since Prisma exports are not working properly
enum VaiTro {
  KH = 'KH',
}

enum TrangThai {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export class TaiKhoanDto {
  @IsOptional()
  @IsString()
  Username?: string | null;

  @IsOptional()
  @IsString()
  MatKhau?: string | null;

  @IsOptional()
  @IsEnum(TrangThai)
  Status?: TrangThai;

  @IsOptional()
  @IsString()
  Avatar?: string | null;

  @IsOptional()
  @IsEnum(VaiTro)
  VAITRO?: VaiTro;
}
