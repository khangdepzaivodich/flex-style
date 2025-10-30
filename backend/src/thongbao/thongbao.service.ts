import { Injectable } from '@nestjs/common';
import { ThongbaoRepository } from 'src/repositories/thongbao.repository';
import { ThongBaoDto } from './dto/thongbao.dto';

@Injectable()
export class ThongbaoService {
    constructor(private readonly thongbaoRepository: ThongbaoRepository) {}

    async getAllSuKienUuDai() {
        return this.thongbaoRepository.findAllSK();
    }

    async getAllVoucher() {
        return this.thongbaoRepository.findAllVC();
    }

    async updateThongBaoSK(thongbao: ThongBaoDto[]) {
        return this.thongbaoRepository.updateTB_SK(thongbao);
    }

    async updateThongBaoVC(thongbao: ThongBaoDto[]) {
        return this.thongbaoRepository.updateTB_VC(thongbao);
    }
}
