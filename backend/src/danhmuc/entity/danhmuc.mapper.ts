import { DanhMucEntity } from './danhmuc.entity';
import { DanhMucDto } from '../dto/danhmuc.dto';

export class DanhmucMapper {
  static toEntity(dto: DanhMucDto): DanhMucEntity {
    const entity = new DanhMucEntity();
    entity.TenDanhMuc = dto.TenDanhMuc;
    entity.TrangThai = dto.TrangThai;
    entity.Loai = dto.Loai;
    return entity;
  }

  static toDto(entity: DanhMucEntity): DanhMucDto {
    return {
      TenDanhMuc: entity.TenDanhMuc,
      TrangThai: entity.TrangThai,
      Loai: entity.Loai,
    };
  }

  static toEntityList(prismaList: any[]): DanhMucEntity[] {
    return prismaList.map(this.toEntity);
  }
}
