import { IsBoolean, IsDateString, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IsEndDateAfterStartDate } from 'src/decorators/is-end-date-after-start-date.decorator';
import { IsFutureOrToday } from 'src/decorators/is-future-or-today.decorator';
import { TrangThai } from 'src/constant';
export class VoucherDto {
    @IsString({ message: 'Tên voucher phải là chuỗi' })
    @IsNotEmpty({ message: 'Tên voucher không được để trống' })
    TenVoucher: string;

    //Số tiền giảm
    @IsInt({ message: 'Số tiền giảm phải là số nguyên' })
    @IsNotEmpty({ message: 'Số tiền giảm không được để trống' })
    SoTien: number;

    //free ship
    @IsBoolean({ message: 'Free ship phải là giá trị boolean' })
    @IsNotEmpty({ message: 'Free ship không được để trống' })
    FreeShip: boolean;

    @IsDateString({}, { message: 'Ngày bắt đầu không hợp lệ' })
    @IsFutureOrToday({ message: 'Ngày bắt đầu phải là ngày hiện tại hoặc tương lai' })
    NgayBatDau: string;

    @IsDateString({}, { message: 'Ngày kết thúc không hợp lệ' })
    @IsEndDateAfterStartDate('NgayBatDau', { message: 'Ngày kết thúc phải sau ngày bắt đầu' })
    NgayKetThuc: string;

    //điều kiện áp dụng
    @IsInt({ message: 'Điều kiện áp dụng phải là số nguyên' })
    @IsNotEmpty({ message: 'Điều kiện áp dụng không được để trống' })
    DieuKien: number;
    @IsEnum(TrangThai, { message: 'Trạng thái phải là active hoặc inactive' })
    TrangThai: TrangThai;
    
    //created_at
    @IsDateString({}, { message: 'Ngày tạo không hợp lệ' })
    Created_At: string;
}