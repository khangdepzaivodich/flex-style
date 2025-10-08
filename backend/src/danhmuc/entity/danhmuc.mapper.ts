import { DanhMucEntity } from './danhmuc.entity';
import { DanhMucDto } from '../dto/danhmuc.dto';

export class DanhMucMapper {
  static toEntity(prisma: any): DanhMucEntity {
    return new DanhMucEntity(
      prisma.id,
      prisma.TenDM,
      prisma.TrangThai,
      prisma.Loai,
    );
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
