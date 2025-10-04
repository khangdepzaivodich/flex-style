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
import { Prisma } from '@prisma/client';
@Controller('sanpham')
export class SanphamController {
  constructor(private readonly sanphamService: SanphamService) {}

  // Lay tat ca san pham
  @Get()
  async findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    return this.sanphamService.sanphams({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
    });
  }

  // Lay san pham theo ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.sanphamService.sanpham({ MaSP: id });
  }

  // Tao san pham moi
  @Post()
  async create(@Body() data: Prisma.SANPHAMCreateInput) {
    return this.sanphamService.createSanpham(data);
  }

  // Cap nhat san pham
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.SANPHAMUpdateInput,
  ) {
    return this.sanphamService.updateSanPham({
      where: { MaSP: id },
      data,
    });
  }

  // Xoa san pham
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.sanphamService.deleteSanpham({ MaSP: id });
  }
}
