import { IsString, IsOptional, IsEnum } from 'class-validator';
import { VaiTro, TrangThai } from '@prisma/client';

export class TaiKhoanDto {
  @IsOptional()
  @IsString()
  Username?: string;

  @IsOptional()
  @IsString()
  MatKhau?: string;

  @IsOptional()
  @IsEnum(TrangThai)
  Status?: TrangThai;

  @IsOptional()
  @IsString()
  Avatar?: string;

  @IsOptional()
  @IsEnum(VaiTro)
  VAITRO?: VaiTro;
}
