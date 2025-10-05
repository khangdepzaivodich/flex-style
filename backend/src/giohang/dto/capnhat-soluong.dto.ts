import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CapNhatSoLuongDto {
  @ApiProperty({
    description: 'Số lượng mới của sản phẩm',
    example: 3,
    minimum: 1
  })
  @IsInt({ message: 'Số lượng phải là số nguyên' })
  @Min(1, { message: 'Số lượng phải lớn hơn 0' })
  SoLuong: number;
}