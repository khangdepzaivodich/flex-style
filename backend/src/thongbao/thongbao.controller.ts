import { Body, Controller, Get } from '@nestjs/common';
import { ThongbaoService } from './thongbao.service';
import { TaiKhoanGuard } from 'src/taikhoan/taikhoan.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { Roles } from 'src/factory_function/role';
import { ResponseMessage } from 'src/decorators/response.decorator';
import { ThongBaoDto } from './dto/thongbao.dto';

@Controller('thongbao')
export class ThongbaoController {
    constructor(private readonly thongbaoService: ThongbaoService) {}
    @Roles('NVVH')
    @UseGuards(JwtAuthGuard, TaiKhoanGuard)
    @Get('/sukienuudai')
    @ResponseMessage('Lấy danh sách thông báo sự kiện thành công')
    getAllThongBaoSK() {
        return this.thongbaoService.getAllSuKienUuDai();
    }

    @Roles('NVVH')
    @UseGuards(JwtAuthGuard, TaiKhoanGuard)
    @Get('/voucher')
    @ResponseMessage('Lấy danh sách thông báo voucher thành công')
    getAllThongBaoVC() {
        return this.thongbaoService.getAllVoucher();
    }

    @Roles('NVVH')
    @UseGuards(JwtAuthGuard, TaiKhoanGuard)
    //update thong bao
    @ResponseMessage('Cập nhật thông báo sự kiện thành công')
    updateThongBaoSK(@Body() thongbao: ThongBaoDto[]) {
        return this.thongbaoService.updateThongBaoSK(thongbao);
    }

    @Roles('NVVH')
    @UseGuards(JwtAuthGuard, TaiKhoanGuard)
    //update thong bao
    @ResponseMessage('Cập nhật thông báo voucher thành công')
    updateThongBaoVC(@Body() thongbao: ThongBaoDto[]) {
        return this.thongbaoService.updateThongBaoVC(thongbao);
    }
}    // Các phương thức xử lý thông báo sẽ được thêm vào đây