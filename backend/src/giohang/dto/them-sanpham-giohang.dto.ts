import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ThemSanPhamVaoGioHangDto {
  @ApiProperty({
    description: 'Mã tài khoản khách hàng',
    example: 'uuid-taikhoan-123'
  })
  @IsString({ message: 'Mã tài khoản phải là chuỗi' })
  @IsNotEmpty({ message: 'Mã tài khoản không được để trống' })
  MaTKKH: string;

  @ApiProperty({
    description: 'Mã chi tiết sản phẩm',
    example: 'uuid-chitietsanpham-456'
  })
  @IsString({ message: 'Mã chi tiết sản phẩm phải là chuỗi' })
  @IsNotEmpty({ message: 'Mã chi tiết sản phẩm không được để trống' })
  MaCTSP: string;

  @ApiProperty({
    description: 'Số lượng sản phẩm muốn thêm',
    example: 2,
    minimum: 1
  })
  @IsInt({ message: 'Số lượng phải là số nguyên' })
  @Min(1, { message: 'Số lượng phải lớn hơn 0' })
  SoLuong: number;
}