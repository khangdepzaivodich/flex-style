import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { SanphamService } from './sanpham.service';
import { SanPhamDto } from './dto/sanpham.dto';
import { Roles } from 'src/factory_function/role';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { TaiKhoanGuard } from 'src/taikhoan/taikhoan.guard';
@Controller('sanpham')
export class SanphamController {
  constructor(private readonly sanphamService: SanphamService) {}

  // Lấy danh sách sản phẩm
  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('type') type?: string,
  ) {
    const where = type ? { type } : undefined;
    return await this.sanphamService.sanphams({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      where,
    });
  }

  // Lấy sản phẩm theo ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sanphamService.sanpham(id);
  }

  // Tạo sản phẩm
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Post()
  async create(@Body() data: SanPhamDto) {
    return await this.sanphamService.createSanpham(data);
  }

  // Cập nhật sản phẩm
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: SanPhamDto) {
    return await this.sanphamService.updateSanPham({
      where: { MaSP: id },
      data,
    });
  }

  // Thay đổi trạng thái sản phẩm
  @Roles('QLDN')
  @UseGuards(JwtAuthGuard, TaiKhoanGuard)
  @Patch('trangthai/:id')
  async changeStatus(
    @Param('id') id: string,
    @Body() body: { TrangThai: 'ACTIVE' | 'INACTIVE' },
  ) {
    return await this.sanphamService.updateSanPham({
      where: { MaSP: id },
      data: { TrangThai: body.TrangThai } as SanPhamDto,
    });
  }
}
