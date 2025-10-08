import { DanhMucEntity } from './danhmuc.entity';
import { DanhMucDto } from '../dto/danhmuc.dto';

export class DanhMucMapper {
  static toEntity(dto: DanhMucDto): DanhMucEntity {
    const entity = new DanhMucEntity();
    entity.TenDM = dto.TenDM;
    entity.TrangThai = dto.TrangThai;
    entity.Loai = dto.Loai;
    return entity;
  }

  static toDto(entity: DanhMucEntity): DanhMucDto {
    return {
      TenDM: entity.TenDM,
      TrangThai: entity.TrangThai,
      Loai: entity.Loai,
    };
  }

  static toEntityList(prismaList: any[]): DanhMucEntity[] {
    return prismaList.map(this.toEntity);
  }
}
