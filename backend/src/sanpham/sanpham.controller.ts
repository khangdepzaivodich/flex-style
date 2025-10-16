import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { SanphamService } from './sanpham.service';
import { SanPhamDto } from './dto/sanpham.dto';
@Controller('sanpham')
export class SanphamController {
  constructor(private readonly sanphamService: SanphamService) {}

  // Lay tat ca san pham
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

  // Lay san pham theo ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sanphamService.sanpham(id);
  }

  // Tao san pham moi
  @Post()
  async create(@Body() data: SanPhamDto) {
    return await this.sanphamService.createSanpham(data);
  }

  // Cap nhat san pham
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: SanPhamDto) {
    return await this.sanphamService.updateSanPham({
      where: { MaSP: id },
      data,
    });
  }

  // Xoa san pham
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.sanphamService.deleteSanpham({ MaSP: id });
  }
}
