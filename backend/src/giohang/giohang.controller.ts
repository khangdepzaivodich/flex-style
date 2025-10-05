import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam, 
  ApiBody
} from '@nestjs/swagger';
import { GioHangService } from './giohang.service';
import { ThemSanPhamVaoGioHangDto } from './dto/them-sanpham-giohang.dto';
import { CapNhatSoLuongDto } from './dto/capnhat-soluong.dto';
import { GioHangResponseDto } from './dto/giohang-response.dto';
import { ResponseMessage } from '../decorators/response.decorator';

@ApiTags('Giỏ hàng')
@Controller('giohang')
export class GioHangController {
  constructor(private readonly gioHangService: GioHangService) {}

  // Thêm sản phẩm vào giỏ hàng
  @Post('them-sanpham')
  @ApiOperation({ summary: 'Thêm sản phẩm vào giỏ hàng' })
  @ApiResponse({ 
    status: 201, 
    description: 'Thêm sản phẩm vào giỏ hàng thành công' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dữ liệu không hợp lệ hoặc số lượng không đủ' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Sản phẩm không tồn tại' 
  })
  @ApiBody({ type: ThemSanPhamVaoGioHangDto })
  @ResponseMessage('Thêm sản phẩm vào giỏ hàng thành công')
  @HttpCode(HttpStatus.CREATED)
  async themSanPhamVaoGioHang(@Body() data: ThemSanPhamVaoGioHangDto) {
    return await this.gioHangService.themSanPhamVaoGioHang(data);
  }

  // Hiển thị tất cả sản phẩm trong giỏ hàng
  @Get(':maTKKH')
  @ApiOperation({ summary: 'Lấy tất cả sản phẩm trong giỏ hàng của khách hàng' })
  @ApiParam({ 
    name: 'maTKKH', 
    description: 'Mã tài khoản khách hàng', 
    type: 'string',
    example: 'uuid-taikhoan-123'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Lấy giỏ hàng thành công',
    type: GioHangResponseDto
  })
  @ResponseMessage('Lấy giỏ hàng thành công')
  async layTatCaSanPhamTrongGioHang(@Param('maTKKH') maTKKH: string) {
    return await this.gioHangService.layTatCaSanPhamTrongGioHang(maTKKH);
  }

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  @Put('capnhat-soluong/:maCTGH')
  @ApiOperation({ summary: 'Cập nhật số lượng sản phẩm trong giỏ hàng' })
  @ApiParam({ 
    name: 'maCTGH', 
    description: 'Mã chi tiết giỏ hàng', 
    type: 'string',
    example: 'uuid-chitietgiohang-456'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Cập nhật số lượng thành công' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Số lượng không hợp lệ hoặc không đủ trong kho' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Sản phẩm không có trong giỏ hàng' 
  })
  @ApiBody({ type: CapNhatSoLuongDto })
  @ResponseMessage('Cập nhật số lượng sản phẩm thành công')
  async capNhatSoLuongSanPham(
    @Param('maCTGH') maCTGH: string,
    @Body() data: CapNhatSoLuongDto
  ) {
    return await this.gioHangService.capNhatSoLuongSanPham(maCTGH, data);
  }

  // Xóa sản phẩm khỏi giỏ hàng
  @Delete('xoa-sanpham/:maCTGH')
  @ApiOperation({ summary: 'Xóa sản phẩm khỏi giỏ hàng' })
  @ApiParam({ 
    name: 'maCTGH', 
    description: 'Mã chi tiết giỏ hàng', 
    type: 'string',
    example: 'uuid-chitietgiohang-789'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Xóa sản phẩm khỏi giỏ hàng thành công' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Sản phẩm không có trong giỏ hàng' 
  })
  @ResponseMessage('Xóa sản phẩm khỏi giỏ hàng thành công')
  @HttpCode(HttpStatus.OK)
  async xoaSanPhamKhoiGioHang(@Param('maCTGH') maCTGH: string) {
    return await this.gioHangService.xoaSanPhamKhoiGioHang(maCTGH);
  }

  // Lấy sản phẩm để mua (sẵn sàng thanh toán)
  @Get('san-pham-de-mua/:maTKKH')
  @ApiOperation({ 
    summary: 'Lấy danh sách sản phẩm sẵn sàng thanh toán',
    description: 'Trả về thông tin chi tiết các sản phẩm trong giỏ hàng kèm tổng tiền'
  })
  @ApiParam({ 
    name: 'maTKKH', 
    description: 'Mã tài khoản khách hàng', 
    type: 'string',
    example: 'uuid-taikhoan-123'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Lấy danh sách sản phẩm để mua thành công',
    schema: {
      type: 'object',
      properties: {
        gioHang: { type: 'object', description: 'Thông tin giỏ hàng' },
        sanPhamDeMua: { 
          type: 'array', 
          description: 'Danh sách sản phẩm với thông tin chi tiết'
        },
        tongTien: { type: 'number', description: 'Tổng tiền cần thanh toán' },
        soLuongSanPham: { type: 'number', description: 'Số lượng loại sản phẩm' }
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Giỏ hàng trống' 
  })
  @ResponseMessage('Lấy danh sách sản phẩm để mua thành công')
  async laySanPhamDeMua(@Param('maTKKH') maTKKH: string) {
    return await this.gioHangService.laySanPhamDeMua(maTKKH);
  }
}