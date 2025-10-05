import { ApiProperty } from '@nestjs/swagger';

export class GioHangResponseDto {
  @ApiProperty({
    description: 'Mã giỏ hàng',
    example: 'uuid-giohang-123'
  })
  MaGH: string;

  @ApiProperty({
    description: 'Mã tài khoản khách hàng',
    example: 'uuid-taikhoan-456'
  })
  MaTKKH: string;

  @ApiProperty({
    description: 'Ngày tạo giỏ hàng',
    example: '2025-10-04T10:30:00Z'
  })
  created_at: Date;

  @ApiProperty({
    description: 'Danh sách chi tiết sản phẩm trong giỏ hàng',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        MaCTGH: { type: 'string', description: 'Mã chi tiết giỏ hàng' },
        SoLuong: { type: 'number', description: 'Số lượng sản phẩm' },
        MaCTSP: { type: 'string', description: 'Mã chi tiết sản phẩm' },
        CHITIETSANPHAM: {
          type: 'object',
          properties: {
            MaCTSP: { type: 'string' },
            KichCo: { type: 'string' },
            MauSac: { type: 'string' },
            HinhAnh: { type: 'string' },
            SoLuong: { type: 'number' },
            SANPHAM: {
              type: 'object',
              properties: {
                TenSP: { type: 'string' },
                GiaBan: { type: 'number' },
                MoTa: { type: 'string' }
              }
            }
          }
        }
      }
    }
  })
  CHITIETGIOHANG: any[];
}