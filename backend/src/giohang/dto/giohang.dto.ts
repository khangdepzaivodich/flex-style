import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddToCartDto {
  @ApiProperty({ description: 'Mã chi tiết sản phẩm', example: 'uuid-string' })
  @IsNotEmpty()
  @IsString()
  MaCTSP: string;

  @ApiProperty({ description: 'Số lượng sản phẩm', example: 1, minimum: 1 })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  SoLuong: number;

  @ApiProperty({ description: 'Mã tài khoản khách hàng (optional)', example: 'uuid-string', required: false })
  @IsString()
  MaTKKH?: string;
}

export class UpdateQuantityDto {
  @ApiProperty({ description: 'Số lượng mới', example: 2, minimum: 1 })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  SoLuong: number;
}

export class CartItemResponseDto {
  @ApiProperty({ description: 'Mã chi tiết giỏ hàng' })
  MaCTGH: string;

  @ApiProperty({ description: 'Số lượng' })
  SoLuong: number;

  @ApiProperty({ description: 'Ngày tạo' })
  created_at: Date;

  @ApiProperty({ description: 'Thông tin chi tiết sản phẩm' })
  CHITIETSANPHAM: {
    MaCTSP: string;
    KichCo: string;
    MauSac: string;
    HinhAnh: string | null;
    SoLuong: number;
    SANPHAM: {
      MaSP: string;
      TenSP: string;
      GiaBan: number;
      MoTa: string | null;
    };
  };
}

export class CartResponseDto {
  @ApiProperty({ description: 'Mã giỏ hàng' })
  MaGH: string;

  @ApiProperty({ description: 'Ngày tạo giỏ hàng' })
  created_at: Date;

  @ApiProperty({ description: 'Tổng số lượng sản phẩm' })
  totalQuantity: number;

  @ApiProperty({ description: 'Tổng giá trị giỏ hàng' })
  totalValue: number;

  @ApiProperty({ description: 'Danh sách sản phẩm trong giỏ', type: [CartItemResponseDto] })
  items: CartItemResponseDto[];
}