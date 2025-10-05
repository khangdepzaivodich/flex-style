import { IsNotEmpty, IsString, IsInt, IsBoolean, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { LoaiDanhMuc } from "../entity/danhmuc.entity";
import { Unique } from "typeorm";

export class DanhMucDto {
    @ApiProperty({
        description: 'Tên danh mục sản phẩm',
        example: 'Áo thời trang'
    })
    @IsString({ message: 'Tên danh mục phải là chuỗi' })
    @IsNotEmpty({ message: 'Tên danh mục không được để trống' })
    TenDanhMuc: string;

    @ApiProperty({
        description: 'Trạng thái hoạt động của danh mục',
        example: true
    })
    //trạng thái mặc định là true (active)
    @IsBoolean({ message: 'Trạng thái phải là boolean' })
    @IsNotEmpty({ message: 'Trạng thái không được để trống' })
    TrangThai: boolean;

    @ApiProperty({
        description: 'Loại danh mục',
        enum: LoaiDanhMuc,
        example: LoaiDanhMuc.NAM
    })
    @IsEnum(LoaiDanhMuc, { message: 'Loại danh mục không hợp lệ' })
    Loai: LoaiDanhMuc;
}