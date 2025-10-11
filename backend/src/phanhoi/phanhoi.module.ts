import { Module } from '@nestjs/common';
import { PhanHoiController} from './phanhoi.controller';
import { PhanHoiService } from './phanhoi.service';

@Module({
  controllers: [PhanHoiController],
  providers: [PhanHoiService]
})
export class PhanHoiModule {}
