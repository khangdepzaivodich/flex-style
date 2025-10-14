import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await Promise.all([
        prisma.dANHMUC.createMany({
            data: [
                {
                    TenDM: 'Áo khoác Bomber',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo khoác chống nắng',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo khoác gió',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo khoác hoodie',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo khoác jean',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo khoác kaki',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo khoác sơ mi',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo khoác thể thao',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo sơ mi tay dài',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo sơ mi tay ngắn',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo thun ba lỗ',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo thun cổ polo tay ngắn',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo thun cổ tròn tay ngắn',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Áo thun tay dài',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Balo Essential',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Balo Smart',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Dây nịt da bò',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Găng tay',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Nón lưỡi trai',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Nón Dat Hat',
                    TrangThai: 'ACTIVE',
                    Loai: 'AO',
                },
                {
                    TenDM: 'Quần jean jogger',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần jean loose fit',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần jean slim fit',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần jogger',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần kaki',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần lót lụa băng',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần lót seamless',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần lót sợi tự nhiên',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần short boxer',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần short dù',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần short thun',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Quần tây',
                    TrangThai: 'ACTIVE',
                    Loai: 'QUAN',
                },
                {
                    TenDM: 'Túi cross',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Túi hip sack',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Ví đứng',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Ví ngang',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Vớ cổ ngắn',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                },
                {
                    TenDM: 'Vớ lưới',
                    TrangThai: 'ACTIVE',
                    Loai: 'PHU_KIEN',
                }
            ],
            skipDuplicates: true,
        }),
        prisma.sANPHAM.createMany({
            data: [
    {
        "MoTa": "Vải Pique (92% Polyester 8% Spandex) co giãn thoáng mát chống nắng hiệu quả | Thiết kế bomber trẻ trung đứng form item must-have cho tủ đồ năng động | Đã đẹp còn đa năng hãy cẩn thận với những lời mượn tạm từ bạn bè",
        "TenSP": "Áo Khoác Bomber Vải Pique Co Giãn No Style M45 Xám Ghi",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-xam-ghi-1174885194.jpg?v=1750888816&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-xam-ghi-1174885195.jpg?v=1750888819&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-xam-ghi-1174885198.jpg?v=1750888928&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-xam-ghi-1174885199.jpg?v=1750888931&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-xam-ghi-1174885197.jpg?v=1750888924&width=1946"
        ],
        "GiaBan": 906100.0,
        "GiaMua": 697000,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Xám Ghi"
    },
    {
        "MoTa": "Vải Pique (92% Polyester 8% Spandex) co giãn thoáng mát chống nắng hiệu quả | Thiết kế bomber trẻ trung đứng form item must-have cho tủ đồ năng động | Đã đẹp còn đa năng hãy cẩn thận với những lời mượn tạm từ bạn bè",
        "TenSP": "Áo Khoác Bomber Vải Pique Co Giãn No Style M45 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-den-1174885182.jpg?v=1750888687&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-den-1174885189.jpg?v=1750888807&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-den-1174885187.jpg?v=1750888801&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-den-1174885188.jpg?v=1750888804&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m45-den-1174885181.jpg?v=1750888685&width=1946"
        ],
        "GiaBan": 906100.0,
        "GiaMua": 697000,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Bề mặt vải nhung tăm độc đáo đứng form giữ ấm cực tốt cho ngày se lạnh | Dáng bomber rộng rãi bo tay và lai áo dệt riêng nói không với bai dão | Hình thêu sắc nét dây kéo kim loại chắc chắn đậm chất Sporty Chic năng động",
        "TenSP": "Áo Khoác Bomber Corduroy Giữ Ấm No Style M44 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-reu-1174885212.jpg?v=1750889061&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-reu-1174885207.jpg?v=1750889045&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-reu-1174885208.jpg?v=1750889048&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-reu-1174885206.jpg?v=1750889042&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-reu-1174885210.jpg?v=1750889053&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Blazer Dáng Rộng No Style M67 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023506thumb1.jpg?v=1758706450&width=1946",
            "//yame.vn/cdn/shop/files/0023506thumb2.jpg?v=1758706450&width=1946",
            "//yame.vn/cdn/shop/files/0023506thumb3.jpg?v=1758706450&width=1946",
            "//yame.vn/cdn/shop/files/0023506thumb4.jpg?v=1758706450&width=1946",
            "//yame.vn/cdn/shop/files/0023506thumb5.jpg?v=1758706450&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Corduroy mềm mịn hai lớp dày dặn giữ ấm cực đỉnh | Dáng bomber bóng chày không bao giờ lỗi mốt | Bo được dệt riêng theo màu vải lên dáng cực chuẩn giữ form chuẩn khỏi bàn",
        "TenSP": "Áo Khoác Bomber Corduroy Mềm Mịn No Style M42 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-den-1174885239.jpg?v=1750889401&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-den-1174885238.jpg?v=1750889301&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-den-1174885235.jpg?v=1750889290&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-den-1174885240.jpg?v=1750889405&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-den-1174885233.jpg?v=1750889285&width=1946"
        ],
        "GiaBan": 776100.0,
        "GiaMua": 597000,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Bề mặt vải nhung tăm độc đáo đứng form giữ ấm cực tốt cho ngày se lạnh | Dáng bomber rộng rãi bo tay và lai áo dệt riêng nói không với bai dão | Hình thêu sắc nét dây kéo kim loại chắc chắn đậm chất Sporty Chic năng động",
        "TenSP": "Áo Khoác Bomber Corduroy Giữ Ấm No Style M44 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-d-ng-1174885229.jpg?v=1750889179&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-d-ng-1174885226.jpg?v=1758335995&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-d-ng-1174885228.jpg?v=1758335995&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-d-ng-1174885224.jpg?v=1758335995&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m44-xanh-d-ng-1174885227.jpg?v=1758335995&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Vải Corduroy mềm mịn hai lớp dày dặn giữ ấm cực đỉnh | Dáng bomber bóng chày không bao giờ lỗi mốt | Bo được dệt riêng theo màu vải lên dáng cực chuẩn giữ form chuẩn khỏi bàn",
        "TenSP": "Áo Khoác Bomber Corduroy Mềm Mịn No Style M42 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-xanh-den-1174885244.jpg?v=1750889414&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-xanh-den-1174885243.jpg?v=1750889410&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-xanh-den-1174885249.jpg?v=1750889524&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-xanh-den-1174885248.jpg?v=1750889521&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m42-xanh-den-1174885250.jpg?v=1750889527&width=1946"
        ],
        "GiaBan": 776100.0,
        "GiaMua": 597000,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Blazer Dáng Rộng No Style M67 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023508_thumb_1.jpg?v=1758706565&width=1946",
            "//yame.vn/cdn/shop/files/0023508_thumb_2.jpg?v=1758706565&width=1946",
            "//yame.vn/cdn/shop/files/0023508_thumb_3.jpg?v=1758706565&width=1946",
            "//yame.vn/cdn/shop/files/0023508_thumb_4.jpg?v=1758706565&width=1946",
            "//yame.vn/cdn/shop/files/0023508_thumb_5.jpg?v=1758706565&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "48e61f5c-e4ae-4022-83c8-355b1178cd49",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xanh-reu-1174884672.jpg?v=1750883404&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xanh-reu-1174884668.jpg?v=1750883293&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xanh-reu-1174884670.jpg?v=1750883299&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xanh-reu-1174884666.jpg?v=1750883287&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xanh-reu-1174884669.jpg?v=1750883296&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-den-1174884707.jpg?v=1750883659&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-den-1174884711.jpg?v=1750883771&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-den-1174884706.jpg?v=1750883656&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-den-1174884710.jpg?v=1750883768&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-den-1174884709.jpg?v=1750883765&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-d-m-1174884510.jpg?v=1750881734&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-d-m-1174884509.jpg?v=1750881731&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-d-m-1174884508.jpg?v=1750881727&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-d-m-1174884507.jpg?v=1750881724&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-d-m-1174884506.jpg?v=1750881722&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-nh-t-1174881217.jpg?v=1750796532&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-nh-t-1174881216.jpg?v=1750796529&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-nh-t-1174881214.jpg?v=1750796522&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-xam-nh-t-1174881213.jpg?v=1750796421&width=1946",
            "//yame.vn/cdn/shop/files/24037.webp?v=1758335455&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-h-ng-1174884689.jpg?v=1750778167&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-h-ng-1174884686.jpg?v=1750883531&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-h-ng-1174884687.jpg?v=1750778161&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-h-ng-1174884688.jpg?v=1750778165&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-h-ng-1174884690.jpg?v=1750778170&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Hồng"
    },
    {
        "MoTa": "Vải Sesame Fabric với hệ thống lỗ li ti co giãn và thoáng khí tối ưu | Thiết kế có nón họng nón cao cùng tay áo xỏ ngón bảo vệ toàn diện | Phối lưới ở nách hỗ trợ thoát khí dáng vừa vặn không logo tinh tế | Áo này kỵ nước nóng và chất tẩy nên bạn hãy cân nhắc kỹ để áo luôn tươi mới nhé",
        "TenSP": "Áo Khoác Thun Chống Nắng Thoáng Khí Non Branded 13 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-den-1174884906.jpg?v=1750885099&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-den-1174884905.jpg?v=1750885096&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-den-1174884907.jpg?v=1750885201&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-den-1174884901.jpg?v=1750776733&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-den-1174884903.jpg?v=1750776739&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-be-1174884678.jpg?v=1750883417&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-be-1174884679.jpg?v=1750883420&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-be-1174884680.jpg?v=1750883522&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-be-1174884675.jpg?v=1750883407&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-be-1174884677.jpg?v=1750883414&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Kaki 87% Polyester 13% Cotton bền bỉ vừa giữ ấm vừa chống nắng hiệu quả | Nón và lai áo có dây rút điều chỉnh giúp tùy chỉnh độ rộng cho vừa vặn | Dây kéo có nẹp che thẩm mỹ túi trong tiện lợi an toàn cho vật dụng cá nhân",
        "TenSP": "Áo Khoác Kaki Chống Nắng Seventy Seven 07 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-den-1174885167.jpg?v=1750775530&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-den-1174885166.jpg?v=1750775527&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-den-1174885165.jpg?v=1750775524&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-den-1174885164.jpg?v=1750775521&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-den-1174885163.jpg?v=1750888459&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Đỏ Cam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-d-cam-1174884662.jpg?v=1750883282&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-d-cam-1174884663.jpg?v=1750883284&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-d-cam-1174884659.jpg?v=1750883174&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-d-cam-1174884661.jpg?v=1750883180&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-04-d-cam-1174884658.jpg?v=1750883172&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đỏ Cam"
    },
    {
        "MoTa": "Chất dù Parachute 1 lớp vừa cản gió giữ ấm vừa trượt nước đi mưa nhỏ | Vải siêu nhẹ mặc thoải mái đặc biệt nhanh khô không lo ẩm ướt ngày mưa | Nón và lai áo có viền thun co giãn ôm gọn. Dây kéo an toàn túi tiện lợi | Áo chỉ trượt nước chứ không chống thấm hoàn toàn nên phù hợp để đi dưới mưa nhỏ thôi nhé",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 05 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-reu-1174884592.jpg?v=1750882567&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-reu-1174884597.jpg?v=1750882682&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-reu-1174884593.jpg?v=1750882570&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-reu-1174884598.jpg?v=1750882685&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-reu-1174884596.jpg?v=1750882579&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất dù Parachute 100% Nylon mỏng nhẹ dễ dàng gấp gọn mang theo mọi lúc mọi nơi | Công nghệ trượt nước hiệu quả giúp bảo vệ bạn khỏi những cơn mưa nhỏ bất chợt | Màu nào cũng dễ ưa khiến bạn nhức đầu không biết nên chốt đơn màu nào | Chỉ trượt nước với mưa nhỏ và không thay thế được áo mưa chuyên dụng",
        "TenSP": "Áo Khoác Gió Trượt Nước Mỏng Nhẹ Nhiều Màu Non Branded 04 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-gio-dang-v-a-non-branded-04-tr-ng-1194490216.jpg?v=1758692403&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-dang-v-a-non-branded-04-tr-ng-1194490219.jpg?v=1758692413&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-dang-v-a-non-branded-04-tr-ng-1194490218.jpg?v=1758692411&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-dang-v-a-non-branded-04-tr-ng-1194490217.jpg?v=1758692406&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-dang-v-a-non-branded-04-tr-ng-1194490215.jpg?v=1758692401&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Sesame Fabric với hệ thống lỗ li ti co giãn và thoáng khí tối ưu | Thiết kế có nón họng nón cao cùng tay áo xỏ ngón bảo vệ toàn diện | Phối lưới ở nách hỗ trợ thoát khí dáng vừa vặn không logo tinh tế | Áo này kỵ nước nóng và chất tẩy nên bạn hãy cân nhắc kỹ để áo luôn tươi mới nhé",
        "TenSP": "Áo Khoác Thun Chống Nắng Thoáng Khí Non Branded 13 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xanh-den-1174884530.jpg?v=1750881969&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xanh-den-1174884529.jpg?v=1750881965&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xanh-den-1174884528.jpg?v=1750779019&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xanh-den-1174884527.jpg?v=1750779016&width=1946",
            "//yame.vn/cdn/shop/files/23930thumb5.jpg?v=1757057811&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải Kaki 87% Polyester 13% Cotton bền bỉ vừa giữ ấm vừa chống nắng hiệu quả | Nón và lai áo có dây rút điều chỉnh giúp tùy chỉnh độ rộng cho vừa vặn | Dây kéo có nẹp che thẩm mỹ túi trong tiện lợi an toàn cho vật dụng cá nhân",
        "TenSP": "Áo Khoác Kaki Chống Nắng Seventy Seven 07 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-kem-1174885146.jpg?v=1750888321&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-kem-1174885147.jpg?v=1750888324&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-kem-1174885141.jpg?v=1750888088&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-kem-1174885144.jpg?v=1750888096&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-kem-1174885148.jpg?v=1750888327&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Chất dù Parachute 1 lớp vừa cản gió giữ ấm vừa trượt nước đi mưa nhỏ | Vải siêu nhẹ mặc thoải mái đặc biệt nhanh khô không lo ẩm ướt ngày mưa | Nón và lai áo có viền thun co giãn ôm gọn. Dây kéo an toàn túi tiện lợi | Áo chỉ trượt nước chứ không chống thấm hoàn toàn nên phù hợp để đi dưới mưa nhỏ thôi nhé",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 05 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xam-tr-ng-1174884624.jpg?v=1750882922&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xam-tr-ng-1174884623.jpg?v=1750778539&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xam-tr-ng-1174884621.jpg?v=1750778533&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xam-tr-ng-1174884620.jpg?v=1750778532&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xam-tr-ng-1174884625.jpg?v=1750882924&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": "Vải Sesame Fabric với hệ thống lỗ li ti co giãn và thoáng khí tối ưu | Thiết kế có nón họng nón cao cùng tay áo xỏ ngón bảo vệ toàn diện | Phối lưới ở nách hỗ trợ thoát khí dáng vừa vặn không logo tinh tế | Áo này kỵ nước nóng và chất tẩy nên bạn hãy cân nhắc kỹ để áo luôn tươi mới nhé",
        "TenSP": "Áo Khoác Thun Chống Nắng Thoáng Khí Non Branded 13 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xam-1174884895.jpg?v=1750776721&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xam-1174884896.jpg?v=1750776724&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xam-1174884897.jpg?v=1750776727&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xam-1174884894.jpg?v=1750885090&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-xam-1174884893.jpg?v=1750885087&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất dù Parachute 1 lớp vừa cản gió giữ ấm vừa trượt nước đi mưa nhỏ | Vải siêu nhẹ mặc thoải mái đặc biệt nhanh khô không lo ẩm ướt ngày mưa | Nón và lai áo có viền thun co giãn ôm gọn dây kéo an toàn túi tiện lợi | Áo chỉ trượt nước chứ không chống thấm hoàn toàn nên phù hợp để đi dưới mưa nhỏ thôi nhé",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 05 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-den-1174884642.jpg?v=1750778421&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-den-1174884643.jpg?v=1750883045&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-den-1174884641.jpg?v=1750778418&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-den-1174884640.jpg?v=1750778414&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-den-1174884639.jpg?v=1750778411&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ giúp áo thoải mái khi mặc và dễ dàng mang theo mọi nơi | Bề mặt vải trượt nước bảo vệ khỏi mưa nhỏ chống nắng phù hợp hoạt động ngoài trời | Thiết kế thông minh cho phép gấp gọn áo theo hai cách khác nhau siêu tiện lợi | Chỉ trượt nước với mưa nhỏ không thay thế được áo mưa chuyên dụng tránh vật sắc nhọn",
        "TenSP": "Áo Khoác Gió Parka Siêu Nhẹ Gấp Gọn Thông Minh Non Branded 046 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24312thumb8.jpg?v=1757671420&width=1946",
            "//yame.vn/cdn/shop/files/24312thumb9.jpg?v=1757671420&width=1946",
            "//yame.vn/cdn/shop/files/24312thumb10.jpg?v=1757671420&width=1946",
            "//yame.vn/cdn/shop/files/24312thumb11.jpg?v=1757671420&width=1946",
            "//yame.vn/cdn/shop/files/24312thumb12.jpg?v=1757671420&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải dù Parachute 2 lớp bền màu chống nắng tốt lớp lót polyester thấm hút thoáng khí | Dáng rộng oversize thời thượng dễ dàng layer che khuyết điểm hiệu quả | Lai áo luồn dây rút điều chỉnh có thể mặc dáng rộng hoặc bo eo tùy thích | Áo này thích nước mát và kỵ chất tẩy nên hãy cân nhắc kỹ để áo luôn tươi mới nhé",
        "TenSP": "Áo Khoác Gió Phối Màu 2 Lớp Thoáng Khí No Style M52 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-den-1174884802.jpg?v=1750777447&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-den-1174884797.jpg?v=1750777333&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-den-1174884801.jpg?v=1750777445&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-den-1174884800.jpg?v=1750777443&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-den-1174884799.jpg?v=1750777340&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải Kaki 87% Polyester 13% Cotton bền bỉ vừa giữ ấm vừa chống nắng hiệu quả | Nón và lai áo có dây rút điều chỉnh giúp tùy chỉnh độ rộng cho vừa vặn | Dây kéo có nẹp che thẩm mỹ túi trong tiện lợi an toàn cho vật dụng cá nhân",
        "TenSP": "Áo Khoác Kaki Chống Nắng Seventy Seven 07 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-1174885156.jpg?v=1750888444&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-1174885154.jpg?v=1750888339&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-1174885151.jpg?v=1750888330&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-1174885158.jpg?v=1750888450&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-1174885152.jpg?v=1750888333&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ giúp áo thoải mái khi mặc và dễ dàng mang theo mọi nơi | Bề mặt vải trượt nước bảo vệ khỏi mưa nhỏ chống nắng phù hợp hoạt động ngoài trời | Thiết kế thông minh cho phép gấp gọn áo theo hai cách khác nhau siêu tiện lợi | Chỉ trượt nước với mưa nhỏ không thay thế được áo mưa chuyên dụng tránh vật sắc nhọn",
        "TenSP": "Áo Khoác Gió Parka Siêu Nhẹ Gấp Gọn Thông Minh Non Branded 046 Xám Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24313thumb9.jpg?v=1757671259&width=1946",
            "//yame.vn/cdn/shop/files/24313thumb10.jpg?v=1757671259&width=1946",
            "//yame.vn/cdn/shop/files/24313thumb2.jpg?v=1758160676&width=1946",
            "//yame.vn/cdn/shop/files/24313thumb11.jpg?v=1758160676&width=1946",
            "//yame.vn/cdn/shop/files/24313thumb13.jpg?v=1758160676&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Đen"
    },
    {
        "MoTa": "Chất dù Parachute 1 lớp vừa cản gió giữ ấm vừa trượt nước đi mưa nhỏ | Vải siêu nhẹ mặc thoải mái đặc biệt nhanh khô không lo ẩm ướt ngày mưa | Nón và lai áo có viền thun co giãn ôm gọn. Dây kéo an toàn túi tiện lợi | Áo chỉ trượt nước chứ không chống thấm hoàn toàn nên phù hợp để đi dưới mưa nhỏ thôi nhé",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 05 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-den-1174884607.jpg?v=1750882806&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-den-1174884602.jpg?v=1750882691&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-den-1174884604.jpg?v=1750882697&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-den-1174884605.jpg?v=1750882700&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-den-1174884603.jpg?v=1750882694&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thun Chống Nắng Dây Kéo No Style M51 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023491_thumb_1.jpg?v=1758705419&width=1946",
            "//yame.vn/cdn/shop/files/0023491_thumb_2.jpg?v=1758705419&width=1946",
            "//yame.vn/cdn/shop/files/0023491_thumb_3.jpg?v=1758705419&width=1946",
            "//yame.vn/cdn/shop/files/0023491_thumb_4.jpg?v=1758705419&width=1946",
            "//yame.vn/cdn/shop/files/0023491_thumb_5.jpg?v=1758705419&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "siêu mềm mướt mịn mát thấm hút mồ hôi tốt",
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Cool Touch 02 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-d-m-1174884988.jpg?v=1750886176&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-d-m-1174884985.jpg?v=1750886164&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-d-m-1174884990.jpg?v=1750886180&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-d-m-1174884986.jpg?v=1750886168&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-d-m-1174884987.jpg?v=1750886170&width=1946"
        ],
        "GiaBan": 506870.0,
        "GiaMua": 389900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "siêu mềm mướt mịn mát thấm hút mồ hôi tốt",
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Cool Touch 02 Xám Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-reu-1174884936.jpg?v=1750776614&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-reu-1174884943.jpg?v=1750885456&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-reu-1174884942.jpg?v=1750885454&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-reu-1174884941.jpg?v=1750885450&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-reu-1174884938.jpg?v=1750776620&width=1946"
        ],
        "GiaBan": 506870.0,
        "GiaMua": 389900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Rêu"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ giúp áo thoải mái khi mặc và dễ dàng mang theo mọi nơi | Bề mặt vải trượt nước bảo vệ khỏi mưa nhỏ chống nắng phù hợp hoạt động ngoài trời | Thiết kế thông minh cho phép gấp gọn áo theo hai cách khác nhau siêu tiện lợi | Chỉ trượt nước với mưa nhỏ không thay thế được áo mưa chuyên dụng tránh vật sắc nhọn",
        "TenSP": "Áo Khoác Gió Parka Siêu Nhẹ Gấp Gọn Thông Minh Non Branded 046 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24314.jpg?v=1757670422&width=1946",
            "//yame.vn/cdn/shop/files/24314_2.jpg?v=1757670422&width=1946",
            "//yame.vn/cdn/shop/files/24314thumb9.jpg?v=1757670422&width=1946",
            "//yame.vn/cdn/shop/files/24314thumb10.jpg?v=1757670422&width=1946",
            "//yame.vn/cdn/shop/files/24314thumb11.jpg?v=1757670422&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "Vải dù Parachute 2 lớp bền màu chống nắng tốt lớp lót polyester thấm hút thoáng khí | Dáng rộng oversize thời thượng dễ dàng layer che khuyết điểm hiệu quả | Lai áo luồn dây rút điều chỉnh có thể mặc dáng rộng hoặc bo eo tùy thích | Áo này thích nước mát và kỵ chất tẩy nên hãy cân nhắc kỹ để áo luôn tươi mới nhé",
        "TenSP": "Áo Khoác Gió Phối Màu 2 Lớp Thoáng Khí No Style M52 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-nau-1174884812.jpg?v=1750777570&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-nau-1174884805.jpg?v=1750777451&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-nau-1174884811.jpg?v=1750777567&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-nau-1174884808.jpg?v=1750777460&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-nau-1174884807.jpg?v=1750777458&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải Denim gồm 98% Cotton và 2% Spandex co giãn nhẹ bền và thân thiện với môi trường | Túi hộp lớn có xếp ly nút bóp an toàn. Đựng đồ thoải mái | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Khoác Kaki Co Giãn Chống Nắng No Style M54 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-kem-1174884920.jpg?v=1750885327&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-kem-1174884913.jpg?v=1750885207&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-kem-1174884914.jpg?v=1750885210&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-kem-1174884919.jpg?v=1750885324&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-kem-1174884915.jpg?v=1750885213&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Vải Denim (98% Cotton 2% Spandex) co giãn nhẹ bền thân thiện môi trường | Áo có nón chống nắng hiệu quả form rộng rãi thoải mái đậm chất đường phố | Túi hộp lớn có xếp ly nút bóp an toàn đựng đồ thoải mái | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Khoác Kaki Co Giãn Chống Nắng No Style M54 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-den-1174884538.jpg?v=1750882088&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-den-1174884537.jpg?v=1750882084&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-den-1174884536.jpg?v=1750882083&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-den-1174884535.jpg?v=1750881981&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-den-1174884534.jpg?v=1750881979&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất dù Parachute 1 lớp vừa cản gió giữ ấm vừa trượt nước đi mưa nhỏ | Vải siêu nhẹ mặc thoải mái đặc biệt nhanh khô không lo ẩm ướt ngày mưa | Nón và lai áo có viền thun co giãn ôm gọn dây kéo an toàn túi tiện lợi | Áo chỉ trượt nước chứ không chống thấm hoàn toàn nên phù hợp để đi dưới mưa nhỏ thôi nhé",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 05 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-be-1174884632.jpg?v=1750882939&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-be-1174884630.jpg?v=1750882933&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-be-1174884629.jpg?v=1750882930&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-be-1174884633.jpg?v=1750883042&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-be-1174884628.jpg?v=1750882927&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Kaki 87% Polyester 13% Cotton bền bỉ vừa giữ ấm vừa chống nắng hiệu quả | Nón và lai áo có dây rút điều chỉnh giúp tùy chỉnh độ rộng cho vừa vặn | Dây kéo có nẹp che thẩm mỹ túi trong tiện lợi an toàn cho vật dụng cá nhân",
        "TenSP": "Áo Khoác Kaki Chống Nắng Seventy Seven 07 Xám Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-reu-1174885178.jpg?v=1750888681&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-reu-1174885172.jpg?v=1750888564&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-reu-1174885174.jpg?v=1750888571&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-reu-1174885171.jpg?v=1750888563&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-07-xam-reu-1174885177.jpg?v=1750888580&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Vải Pique No Style M55 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023496_thumb_1.jpg?v=1758706157&width=1946",
            "//yame.vn/cdn/shop/files/0023496_thumb_2.jpg?v=1758706157&width=1946",
            "//yame.vn/cdn/shop/files/0023496_thumb_3.jpg?v=1758706157&width=1946",
            "//yame.vn/cdn/shop/files/0023496_thumb_4.jpg?v=1758706157&width=1946",
            "//yame.vn/cdn/shop/files/0023496_thumb_5.jpg?v=1758706157&width=1946"
        ],
        "GiaBan": 543270.0,
        "GiaMua": 417900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thun Chống Nắng Dây Kéo No Style M51 Nâu Đất",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023492_thumb_1.jpg?v=1758705620&width=1946",
            "//yame.vn/cdn/shop/files/0023492_thumb_2.jpg?v=1758705620&width=1946",
            "//yame.vn/cdn/shop/files/0023492_thumb_3.jpg?v=1758705620&width=1946",
            "//yame.vn/cdn/shop/files/0023492_thumb_4.jpg?v=1758705620&width=1946",
            "//yame.vn/cdn/shop/files/0023492_thumb_5.jpg?v=1758705620&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Nâu Đất"
    },
    {
        "MoTa": "siêu mềm mướt mịn mát thấm hút mồ hôi tốt",
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Cool Touch 02 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-1174884969.jpg?v=1750776496&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-1174884968.jpg?v=1750776493&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-1174884966.jpg?v=1750776487&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-1174884967.jpg?v=1750776490&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-xam-1174884964.jpg?v=1750776481&width=1946"
        ],
        "GiaBan": 506870.0,
        "GiaMua": 389900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám"
    },
    {
        "MoTa": "siêu mềm mướt mịn mát thấm hút mồ hôi tốt",
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Cool Touch 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-den-1174884952.jpg?v=1750885693&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-den-1174884946.jpg?v=1750885459&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-den-1174884950.jpg?v=1750885687&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-den-1174884948.jpg?v=1750885684&width=1946",
            "//yame.vn/cdn/shop/files/22609thumb4.jpg?v=1750778844&width=1946"
        ],
        "GiaBan": 506870.0,
        "GiaMua": 389900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "siêu mềm mướt mịn mát thấm hút mồ hôi tốt",
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Cool Touch 02 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-tr-ng-1174884961.jpg?v=1750885933&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-tr-ng-1174884960.jpg?v=1750885930&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-tr-ng-1174884955.jpg?v=1750885696&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-tr-ng-1174884956.jpg?v=1750885699&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-tr-ng-1174884959.jpg?v=1750885927&width=1946"
        ],
        "GiaBan": 506870.0,
        "GiaMua": 389900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "siêu mềm mướt mịn mát thấm hút mồ hôi tốt",
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Cool Touch 02 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-be-1174882828.jpg?v=1750785496&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-be-1174882822.jpg?v=1750785380&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-be-1174882827.jpg?v=1750785493&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-be-1174882824.jpg?v=1750785484&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-be-1174882825.jpg?v=1750785487&width=1946"
        ],
        "GiaBan": 506870.0,
        "GiaMua": 389900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Be"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ giúp áo thoải mái khi mặc và dễ dàng mang theo mọi nơi | Bề mặt vải trượt nước bảo vệ khỏi mưa nhỏ chống nắng phù hợp hoạt động ngoài trời | Thiết kế thông minh cho phép gấp gọn áo theo hai cách khác nhau siêu tiện lợi | Chỉ trượt nước với mưa nhỏ không thay thế được áo mưa chuyên dụng tránh vật sắc nhọn",
        "TenSP": "Áo Khoác Gió Parka Siêu Nhẹ Gấp Gọn Thông Minh Non Branded 046 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24315thumb6.jpg?v=1757670193&width=1946",
            "//yame.vn/cdn/shop/files/24315thumb7.jpg?v=1757670193&width=1946",
            "//yame.vn/cdn/shop/files/24315thumb8.jpg?v=1757670193&width=1946",
            "//yame.vn/cdn/shop/files/24315thumb9.jpg?v=1757670193&width=1946",
            "//yame.vn/cdn/shop/files/24315thumb10.jpg?v=1757670219&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải Parachute co giãn 4 chiều siêu nhẹ thoáng mát giúp bạn vận động thoải mái tối đa | Công nghệ cắt laser tạo lỗ thoát khí lớp lót lưới rã lưng thông gió | Túi hoodie túi ngực có khóa kéo lai tay điều chỉnh được Item đa năng | Giặt nhẹ nhàng bằng tay hoặc túi giặt Tránh chà xát mạnh vào vùng cắt laser Không sử dụng bàn ủi nhiệt độ cao",
        "TenSP": "Áo Khoác Gió Co Giãn 2 Lớp No Style M53 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-xam-nh-t-1174884738.jpg?v=1750884125&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-xam-nh-t-1174884737.jpg?v=1750884124&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-xam-nh-t-1174884734.jpg?v=1750884013&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-xam-nh-t-1174884732.jpg?v=1750884007&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-xam-nh-t-1174884733.jpg?v=1750884010&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "Vải Denim gồm 98% Cotton và 2% Spandex co giãn nhẹ bền và thân thiện với môi trường | Túi hộp lớn có xếp ly nút bóp an toàn. Đựng đồ thoải mái | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Khoác Kaki Co Giãn Chống Nắng No Style M54 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-nh-t-1174884051.jpg?v=1750780696&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-nh-t-1174884057.jpg?v=1750874647&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-nh-t-1174884055.jpg?v=1750874641&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-nh-t-1174884052.jpg?v=1750780699&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-nh-t-1174884056.jpg?v=1750874644&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Vải dù Parachute 2 lớp bền màu chống nắng tốt lớp lót polyester thấm hút thoáng khí | Dáng rộng oversize thời thượng dễ dàng layer che khuyết điểm hiệu quả | Lai áo luồn dây rút điều chỉnh có thể mặc dáng rộng hoặc bo eo tùy thích | Áo này thích nước mát và kỵ chất tẩy nên hãy cân nhắc kỹ để áo luôn tươi mới nhé",
        "TenSP": "Áo Khoác Gió Phối Màu 2 Lớp Thoáng Khí No Style M52 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-reu-1174884821.jpg?v=1750777693&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-reu-1174884820.jpg?v=1750777690&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-reu-1174884819.jpg?v=1750777687&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-reu-1174884818.jpg?v=1750777684&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m52-xanh-reu-1174884816.jpg?v=1750777579&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải Denim gồm 98% Cotton và 2% Spandex co giãn nhẹ bền và thân thiện với môi trường | Túi hộp lớn có xếp ly nút bóp an toàn. Đựng đồ thoải mái | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Khoác Kaki Co Giãn Chống Nắng No Style M54 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-d-m-1174884925.jpg?v=1750885331&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-d-m-1174884929.jpg?v=1750885441&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-d-m-1174884931.jpg?v=1750776605&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-d-m-1174884933.jpg?v=1750776611&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m54-nau-d-m-1174884932.jpg?v=1750776608&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Vải Pique No Style M55 Xanh Bích",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023495thumb1.jpg?v=1758705924&width=1946",
            "//yame.vn/cdn/shop/files/0023495thumb2.jpg?v=1758705924&width=1946",
            "//yame.vn/cdn/shop/files/0023495thumb3.jpg?v=1758705924&width=1946",
            "//yame.vn/cdn/shop/files/0023495thumb4.jpg?v=1758705924&width=1946",
            "//yame.vn/cdn/shop/files/0023495thumb5.jpg?v=1758705924&width=1946"
        ],
        "GiaBan": 543270.0,
        "GiaMua": 417900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Bích"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thun Chống Nắng Dây Kéo No Style M51 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023490_thumb_1.jpg?v=1758705306&width=1946",
            "//yame.vn/cdn/shop/files/0023490_thumb_2.jpg?v=1758705306&width=1946",
            "//yame.vn/cdn/shop/files/0023490_thumb_3.jpg?v=1758705306&width=1946",
            "//yame.vn/cdn/shop/files/0023490_thumb_4.jpg?v=1758705306&width=1946",
            "//yame.vn/cdn/shop/files/0023490_thumb_5.jpg?v=1758705306&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thun Chống Nắng Dây Kéo No Style M51 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023489thumb1.jpg?v=1758705190&width=1946",
            "//yame.vn/cdn/shop/files/0023489thumb2.jpg?v=1758705190&width=1946",
            "//yame.vn/cdn/shop/files/0023489thumb3.jpg?v=1758705190&width=1946",
            "//yame.vn/cdn/shop/files/0023489thumb4.jpg?v=1758705190&width=1946",
            "//yame.vn/cdn/shop/files/0023489thumb5.jpg?v=1758705190&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "siêu mềm mướt mịn mát thấm hút mồ hôi tốt",
        "TenSP": "Áo Khoác Thun Nam Chống Nắng Cool Touch 02 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-nau-d-m-1174884980.jpg?v=1750886057&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-nau-d-m-1174884979.jpg?v=1750886053&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-nau-d-m-1174884974.jpg?v=1750885939&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-nau-d-m-1174884976.jpg?v=1750886044&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-cool-touch-02-nau-d-m-1174884978.jpg?v=1750886050&width=1946"
        ],
        "GiaBan": 506870.0,
        "GiaMua": 389900,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Vải Sesame Fabric với hệ thống lỗ li ti co giãn và thoáng khí tối ưu | Thiết kế có nón họng nón cao cùng tay áo xỏ ngón bảo vệ toàn diện | Phối lưới ở nách hỗ trợ thoát khí dáng vừa vặn không logo tinh tế | Áo này kỵ nước nóng và chất tẩy nên bạn hãy cân nhắc kỹ để áo luôn tươi mới nhé",
        "TenSP": "Áo Khoác Thun Chống Nắng Thoáng Khí Non Branded 13 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-tr-ng-1174884037.jpg?v=1750874285&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-tr-ng-1174884039.jpg?v=1750874292&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-tr-ng-1174884041.jpg?v=1750874298&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-tr-ng-1174884042.jpg?v=1750874401&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-non-branded-13-tr-ng-1174884040.jpg?v=1750874294&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Parachute co giãn 4 chiều siêu nhẹ thoáng mát vận động thoải mái tối đa | Công nghệ cắt laser tạo lỗ thoát khí lớp lót lưới rã lưng thông gió | Túi hoodie túi ngực có khóa kéo lai tay điều chỉnh được item đa năng | Giặt nhẹ nhàng bằng tay hoặc túi giặt tránh chà xát mạnh vào vùng cắt laser không sử dụng bàn ủi nhiệt độ cao",
        "TenSP": "Áo Khoác Gió Co Giãn 2 Lớp No Style M53 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-be-1174884746.jpg?v=1750884241&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-be-1174884745.jpg?v=1750884141&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-be-1174884743.jpg?v=1750884135&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-be-1174884747.jpg?v=1750884244&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m53-be-1174884742.jpg?v=1750884131&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chất dù Parachute 1 lớp vừa cản gió giữ ấm vừa trượt nước đi mưa nhỏ | Vải siêu nhẹ mặc thoải mái đặc biệt nhanh khô không lo ẩm ướt ngày mưa | Nón và lai áo có viền thun co giãn ôm gọn. Dây kéo an toàn túi tiện lợi | Áo chỉ trượt nước chứ không chống thấm hoàn toàn nên phù hợp để đi dưới mưa nhỏ thôi nhé",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 05 Xanh Bích",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-bich-1174884611.jpg?v=1750882813&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-bich-1174884614.jpg?v=1750882819&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-bich-1174884613.jpg?v=1750882816&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-bich-1174884612.jpg?v=1750882814&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-05-xanh-bich-1174884616.jpg?v=1750778525&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9fa6a914-2dce-4f41-a79f-97bf728030e6",
        "MauSac": "Xanh Bích"
    },
    {
        "MoTa": "Vải có khả năng trượt nước cản gió hiệu quả cứu tinh cho ngày thời tiết ẩm ương | Vải dù Parachute siêu nhẹ nhanh khô dễ dàng gấp gọn mang theo trong balo cốp xe | Thiết kế tối giản cùng màu sắc trung tính dễ dàng layer và phối đồ không cần nghĩ | Không ủi ở nhiệt độ cao. Tránh giặt với chất tẩy mạnh. Phơi nơi thoáng mát để giữ lớp trượt nước",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 40 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xanh-den-1174884756.jpg?v=1750778056&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xanh-den-1174884755.jpg?v=1750778053&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xanh-den-1174884754.jpg?v=1750778051&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xanh-den-1174884753.jpg?v=1750778047&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xanh-den-1174884752.jpg?v=1750778044&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải có khả năng trượt nước cản gió hiệu quả cứu tinh cho ngày thời tiết ẩm ương | Vải dù Parachute siêu nhẹ nhanh khô dễ dàng gấp gọn mang theo trong balo cốp xe | Thiết kế tối giản cùng màu sắc trung tính dễ dàng layer và phối đồ không cần nghĩ | Không ủi ở nhiệt độ cao. Tránh giặt với chất tẩy mạnh. Phơi nơi thoáng mát để giữ lớp trượt nước",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 40 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-den-1174883964.jpg?v=1750873097&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-den-1174883963.jpg?v=1750873094&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-den-1174883962.jpg?v=1750781180&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-den-1174883961.jpg?v=1750781177&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-den-1174883960.jpg?v=1750781173&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải dù Parachute co giãn nhẹ thoáng mát cùng lớp lót Polyester mềm mại thấm hút tốt | Thiết kế rã phối màu ở tay và thân kết hợp dây viền gân năng động | Cổ áo cao che chắn và bảo vệ hiệu quả đồng thời mang lại vẻ ngoài mạnh mẽ cá tính | Áo được tối ưu để chống nắng khi di chuyển nên có thể hơi hầm nếu bạn đứng yên ngoài nắng quá lâu",
        "TenSP": "Áo Khoác Gió Mỏng Nhẹ 2 Lớp No Style M59 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-nau-nh-t-1174884726.jpg?v=1750883897&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-nau-nh-t-1174884724.jpg?v=1750778177&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-nau-nh-t-1174884728.jpg?v=1750884001&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-nau-nh-t-1174884729.jpg?v=1750884006&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-nau-nh-t-1174884723.jpg?v=1750883893&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Gió Naruto 24 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-gio-naruto-24-tr-ng-1194133364.jpg?v=1758592318&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-naruto-24-tr-ng-1194133363.jpg?v=1758592315&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-naruto-24-tr-ng-1194133362.jpg?v=1758592213&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-naruto-24-tr-ng-1194133361.jpg?v=1758592211&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-gio-naruto-24-tr-ng-1194133360.jpg?v=1758592207&width=1946"
        ],
        "GiaBan": 434460.0,
        "GiaMua": 334200,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải có khả năng trượt nước cản gió hiệu quả cứu tinh cho ngày thời tiết ẩm ương | Vải dù Parachute siêu nhẹ nhanh khô dễ dàng gấp gọn mang theo trong balo cốp xe | Thiết kế tối giản cùng màu sắc trung tính dễ dàng layer và phối đồ không cần nghĩ | Không ủi ở nhiệt độ cao. Tránh giặt với chất tẩy mạnh. Phơi nơi thoáng mát để giữ lớp trượt nước",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 40 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-kem-1174884517.jpg?v=1750881853&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-kem-1174884516.jpg?v=1750881850&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-kem-1174884515.jpg?v=1750881848&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-kem-1174884514.jpg?v=1750881845&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-kem-1174884513.jpg?v=1750881841&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Vải Parachute 100% Polyester siêu nhẹ nhanh khô và cản gió hiệu quả | Thiết kế rã phối màu năng động đậm chất thể thao cho vẻ ngoài cực chất | Cổ áo linh hoạt có thể biến đổi từ cổ cao sang cổ bẻ cân mọi style | Hơi nhức đầu vì không biết chốt đơn màu nào vì màu nào cũng keo",
        "TenSP": "Áo Khoác Gió Sporty Phối Màu Siêu Nhẹ No Style M58 Nâu Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-nau-d-1174884778.jpg?v=1750777940&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-nau-d-1174884775.jpg?v=1750777930&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-nau-d-1174884779.jpg?v=1750884376&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-nau-d-1174884781.jpg?v=1750884380&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-nau-d-1174884774.jpg?v=1750777928&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Nâu Đỏ"
    },
    {
        "MoTa": "Vải Parachute 100% Polyester siêu nhẹ nhanh khô và cản gió hiệu quả | Thiết kế rã phối màu năng động đậm chất thể thao cho vẻ ngoài cực chất | Cổ áo linh hoạt có thể biến đổi từ cổ cao sang cổ bẻ cân mọi style | Hơi nhức đầu vì không biết chốt đơn màu nào vì màu nào cũng keo",
        "TenSP": "Áo Khoác Gió Sporty Phối Màu Siêu Nhẹ No Style M58 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-reu-1174884768.jpg?v=1750884367&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-reu-1174884770.jpg?v=1750777921&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-reu-1174884769.jpg?v=1750884371&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-reu-1174884765.jpg?v=1750884259&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-reu-1174884763.jpg?v=1750884255&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải có khả năng trượt nước cản gió hiệu quả cứu tinh cho ngày thời tiết ẩm ương | Vải dù Parachute siêu nhẹ nhanh khô dễ dàng gấp gọn mang theo trong balo cốp xe | Thiết kế tối giản cùng màu sắc trung tính dễ dàng layer và phối đồ không cần nghĩ | Không ủi ở nhiệt độ cao. Tránh giặt với chất tẩy mạnh. Phơi nơi thoáng mát để giữ lớp trượt nước",
        "TenSP": "Áo Khoác Gió Trượt Nước Seventy Seven 40 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xam-tr-ng-1174878814.png?v=1750820528&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xam-tr-ng-1174878822.jpg?v=1750820653&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xam-tr-ng-1174878821.jpg?v=1750820650&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xam-tr-ng-1174878820.jpg?v=1750820647&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-40-xam-tr-ng-1174878819.jpg?v=1750820645&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": "Vải dù Parachute co giãn nhẹ thoáng mát cùng lớp lót Polyester mềm mại thấm hút tốt | Thiết kế rã phối màu ở tay và thân kết hợp dây viền gân năng động | Cổ áo cao che chắn và bảo vệ hiệu quả đồng thời mang lại vẻ ngoài mạnh mẽ cá tính | Áo được tối ưu để chống nắng khi di chuyển nên có thể hơi hầm nếu bạn đứng yên ngoài nắng quá lâu",
        "TenSP": "Áo Khoác Gió Mỏng Nhẹ 2 Lớp No Style M59 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-be-1174884714.jpg?v=1750883774&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-be-1174884718.jpg?v=1750883884&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-be-1174884717.jpg?v=1750883881&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-be-1174884719.jpg?v=1750883888&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m59-be-1174884720.jpg?v=1750883890&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Parachute 100% Polyester siêu nhẹ nhanh khô và cản gió hiệu quả | Thiết kế rã phối màu năng động đậm chất thể thao cho vẻ ngoài cực chất | Cổ áo linh hoạt có thể biến đổi từ cổ cao sang cổ bẻ cân mọi style | Hơi nhức đầu vì không biết chốt đơn màu nào vì màu nào cũng keo",
        "TenSP": "Áo Khoác Gió Sporty Phối Màu Siêu Nhẹ No Style M58 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-den-1174884785.jpg?v=1750884604&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-den-1174884793.jpg?v=1750777325&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-den-1174884786.jpg?v=1750884607&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-den-1174884792.jpg?v=1750777321&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m58-xanh-den-1174884788.jpg?v=1750884615&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "bf4dc586-0ebe-4132-b08e-7bb452b82a34",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí. Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn vừa bền phom bền màu ít nhăn nhanh khô và chăm sóc siêu dễ | Form hoodie basic gam màu trung tính dễ dàng cân mọi outfit xuống phố | Chất poly nên vận động mạnh sẽ hơi hầm nha mặc đi chill trời mát là best choice",
        "TenSP": "Áo Khoác Hoodie Waffle Thoáng Khí Seventy Seven 39 Nâu Đất",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-nau-d-t-1174884570.jpg?v=1750882324&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-nau-d-t-1174884565.jpg?v=1750778767&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-nau-d-t-1174884566.jpg?v=1750778770&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-nau-d-t-1174884567.jpg?v=1750778774&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-nau-d-t-1174884569.jpg?v=1750778779&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Nâu Đất"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí. Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn vừa bền phom bền màu ít nhăn nhanh khô và chăm sóc siêu dễ | Form hoodie basic gam màu trung tính dễ dàng cân mọi outfit xuống phố | Chất poly nên vận động mạnh sẽ hơi hầm nha mặc đi chill trời mát là best choice",
        "TenSP": "Áo Khoác Hoodie Waffle Thoáng Khí Seventy Seven 39 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xanh-den-1174884581.jpg?v=1750882447&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xanh-den-1174884582.jpg?v=1750882450&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xanh-den-1174884583.jpg?v=1750882454&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xanh-den-1174884587.jpg?v=1750882564&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xanh-den-1174884586.jpg?v=1750882561&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí. Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn vừa bền phom bền màu ít nhăn nhanh khô và chăm sóc siêu dễ | Form hoodie basic gam màu trung tính dễ dàng cân mọi outfit xuống phố | Chất poly nên vận động mạnh sẽ hơi hầm nha mặc đi chill trời mát là best choice",
        "TenSP": "Áo Khoác Hoodie Waffle Thoáng Khí Seventy Seven 39 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-den-1174884560.jpg?v=1750882322&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-den-1174884559.jpg?v=1750882220&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-den-1174884556.jpg?v=1750882211&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-den-1174884555.jpg?v=1750882208&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-den-1174884557.jpg?v=1750882215&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí. Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn vừa bền phom bền màu ít nhăn nhanh khô và chăm sóc siêu dễ | Form hoodie basic gam màu trung tính dễ dàng cân mọi outfit xuống phố | Chất poly nên vận động mạnh sẽ hơi hầm nha mặc đi chill trời mát là best choice",
        "TenSP": "Áo Khoác Hoodie Waffle Thoáng Khí Seventy Seven 39 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-be-1174884575.jpg?v=1750882334&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-be-1174884573.jpg?v=1750882328&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-be-1174884579.jpg?v=1750882444&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-be-1174884576.jpg?v=1750882337&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-be-1174884574.jpg?v=1750882331&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Be"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí. Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn vừa bền phom bền màu ít nhăn nhanh khô và chăm sóc siêu dễ | Form hoodie basic gam màu trung tính dễ dàng cân mọi outfit xuống phố | Chất poly nên vận động mạnh sẽ hơi hầm nha mặc đi chill trời mát là best choice",
        "TenSP": "Áo Khoác Hoodie Waffle Thoáng Khí Seventy Seven 39 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xam-1174884548.jpg?v=1750882094&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xam-1174884547.jpg?v=1750882091&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xam-1174884549.jpg?v=1750882096&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xam-1174884546.jpg?v=1750778901&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-39-xam-1174884550.jpg?v=1750882100&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Hoodie 3 Lỗ Streetwear Unisex No Style M126 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23861_thumb_1.jpg?v=1758766082&width=1946",
            "//yame.vn/cdn/shop/files/23861_thumb_2.jpg?v=1758766273&width=1946",
            "//yame.vn/cdn/shop/files/23861_thumb_3.jpg?v=1758766327&width=1946",
            "//yame.vn/cdn/shop/files/23861_thumb_4.jpg?v=1758766082&width=1946",
            "//yame.vn/cdn/shop/files/23861_thumb_5.jpg?v=1758766133&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Hoodie 3 Lỗ Streetwear Unisex No Style M126 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23860_thumb_1.jpg?v=1758765769&width=1946",
            "//yame.vn/cdn/shop/files/23860_thumb_2.jpg?v=1758766020&width=1946",
            "//yame.vn/cdn/shop/files/23860_thumb_3.jpg?v=1758765813&width=1946",
            "//yame.vn/cdn/shop/files/23860_thumb_4.jpg?v=1758766021&width=1946",
            "//yame.vn/cdn/shop/files/23860_thumb_5.jpg?v=1758765950&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Hoodie 3 Lỗ Streetwear Unisex No Style M126 Xám Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23859thumb1.jpg?v=1758765395&width=1946",
            "//yame.vn/cdn/shop/files/23859thumb2.jpg?v=1758765522&width=1946",
            "//yame.vn/cdn/shop/files/23859thumb3.jpg?v=1758765365&width=1946",
            "//yame.vn/cdn/shop/files/23859thumb4.jpg?v=1758765365&width=1946",
            "//yame.vn/cdn/shop/files/23859thumb5.jpg?v=1758765395&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "5ca2ff75-ff72-4d05-b2a8-6894a9b28fd5",
        "MauSac": "Xám Rêu"
    },
    {
        "MoTa": "Kết hợp áo khoác denim cá tính cùng mũ hoodie liền thân tạo hiệu ứng layering sành điệu | Dáng oversize rộng rãi thoải mái không gò bó khi mặc và che khuyết điểm tốt | Kỹ thuật Wash Enzyme giúp chất liệu denim thô cứng trở nên mềm mại và dễ chịu hơn | Chất vải dày dặn nên sẽ cần thêm chút thời gian để khô hoàn toàn nhé",
        "TenSP": "Áo Khoác Jean Phối Nón The Original 039 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-ng-1184461421.jpg?v=1755231369&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-ng-1184461420.jpg?v=1755231366&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-ng-1184461418.jpg?v=1755231360&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-ng-1184461419.jpg?v=1755231363&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-ng-1184461417.jpg?v=1755231358&width=1946"
        ],
        "GiaBan": 464880.0,
        "GiaMua": 357600,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Kết hợp áo khoác denim cá tính cùng mũ hoodie liền thân tạo hiệu ứng layering sành điệu | Dáng oversize rộng rãi thoải mái không gò bó khi mặc và che khuyết điểm tốt | Kỹ thuật Wash Enzyme giúp chất liệu denim thô cứng trở nên mềm mại và dễ chịu hơn | Chất vải dày dặn nên sẽ cần thêm chút thời gian để khô hoàn toàn nhé",
        "TenSP": "Áo Khoác Jean Phối Nón The Original 039 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-nh-t-1184461411.jpg?v=1755231243&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-nh-t-1184461410.jpg?v=1755231240&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-nh-t-1184461409.jpg?v=1755231236&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-nh-t-1184461408.jpg?v=1755231135&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-nh-t-1184461407.jpg?v=1755231132&width=1946"
        ],
        "GiaBan": 464880.0,
        "GiaMua": 357600,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Thiết kế kinh điển không bao giờ lỗi mốt và là item must-have trong tủ đồ của mọi chàng trai | Giặt sấy thả ga phom vẫn đứng nét che mọi khuyết điểm bật mode tự tin flex cá tính | Chống nắng cản gió cân được 4 mùa. Không những đa phong cách mà còn đa-zi-năng | Chất vải dày dặn đồng nghĩa với việc sẽ cần thêm chút thời gian để khô hoàn toàn nhé",
        "TenSP": "Áo Khoác Jeans Classic Bền The Original 36 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-nh-t-1174881209.jpg?v=1750796415&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-nh-t-1174881205.jpg?v=1750796403&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-nh-t-1174881207.jpg?v=1750796409&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-nh-t-1174881203.jpg?v=1750796297&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-nh-t-1174881210.jpg?v=1750796418&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Kết hợp áo khoác denim cá tính cùng mũ hoodie liền thân tạo hiệu ứng layering sành điệu | Dáng oversize rộng rãi thoải mái không gò bó khi mặc và che khuyết điểm tốt | Kỹ thuật Wash Enzyme giúp chất liệu denim thô cứng trở nên mềm mại và dễ chịu hơn | Chất vải dày dặn nên sẽ cần thêm chút thời gian để khô hoàn toàn nhé",
        "TenSP": "Áo Khoác Jean Phối Nón The Original 039 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-m-1184461428.jpg?v=1755231489&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-m-1184461427.jpg?v=1755231486&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-m-1184461426.jpg?v=1755231482&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-m-1184461425.jpg?v=1755231480&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-jean-the-original-m039-xanh-d-m-1184461424.jpg?v=1755231477&width=1946"
        ],
        "GiaBan": 464880.0,
        "GiaMua": 357600,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Chất vải Denim 100% Cotton dày dặn thấm hút tốt chống nắng và giữ ấm hiệu quả | Dáng áo kinh điển đứng form mang lại vẻ ngoài bụi bặm năng động | Nhiều màu sắc để lựa chọn dễ dàng tìm thấy chân ái cho tủ đồ của bạn | Đánh đổi cho sự bền bỉ là áo sẽ cần phơi lâu hơn và nên giặt riêng để tránh lem màu nhé",
        "TenSP": "Áo Khoác Jean Nhuộm Hoạt Tính Bền Màu Multi-Color Jean 73 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-den-1174884829.jpg?v=1750777093&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-den-1174884826.jpg?v=1750777084&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-den-1174884825.jpg?v=1750777080&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-den-1174884830.jpg?v=1750777096&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-den-1174884827.jpg?v=1750777087&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Thiết kế kinh điển không bao giờ lỗi mốt và là item must-have trong tủ đồ của mọi chàng trai | Giặt sấy thả ga phom vẫn đứng nét che mọi khuyết điểm bật mode tự tin flex cá tính | Chống nắng cản gió cân được 4 mùa. Không những đa phong cách mà còn đa-zi-năng | Chất vải dày dặn đồng nghĩa với việc sẽ cần thêm chút thời gian để khô hoàn toàn nhé",
        "TenSP": "Áo Khoác Jeans Classic Bền The Original 36 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-d-m-1174883985.jpg?v=1750873441&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-d-m-1174883980.jpg?v=1750873324&width=1946",
            "//yame.vn/cdn/shop/files/23541thumb3.jpg?v=1758274918&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-d-m-1174883983.jpg?v=1750873333&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-original-36-xanh-d-m-1174883981.jpg?v=1750873327&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Chất vải Denim 100% Cotton dày dặn thấm hút tốt chống nắng và giữ ấm hiệu quả | Dáng áo kinh điển đứng form mang lại vẻ ngoài bụi bặm năng động | Nhiều màu sắc để lựa chọn dễ dàng tìm thấy chân ái cho tủ đồ của bạn | Đánh đổi cho sự bền bỉ là áo sẽ cần phơi lâu hơn và nên giặt riêng để tránh lem màu nhé",
        "TenSP": "Áo Khoác Jean Nhuộm Hoạt Tính Bền Màu Multi-Color Jean 73 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-xanh-reu-1174884854.jpg?v=1750776962&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-xanh-reu-1174884860.jpg?v=1750776979&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-xanh-reu-1174884858.jpg?v=1750776973&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-xanh-reu-1174884857.jpg?v=1750776970&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-xanh-reu-1174884859.jpg?v=1750776976&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất vải Denim 100% Cotton dày dặn thấm hút tốt chống nắng và giữ ấm hiệu quả | Dáng áo kinh điển đứng form mang lại vẻ ngoài bụi bặm năng động | Nhiều màu sắc để lựa chọn dễ dàng tìm thấy chân ái cho tủ đồ của bạn | Đánh đổi cho sự bền bỉ là áo sẽ cần phơi lâu hơn và nên giặt riêng để tránh lem màu nhé",
        "TenSP": "Áo Khoác Jean Nhuộm Hoạt Tính Bền Màu Multi-Color Jean 73 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-1174883998.jpg?v=1750780922&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-1174884004.jpg?v=1750780939&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-1174884002.jpg?v=1750780933&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-1174883997.jpg?v=1750873571&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-1174884003.jpg?v=1750780936&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Chất vải Denim 100% Cotton dày dặn thấm hút tốt chống nắng và giữ ấm hiệu quả | Dáng áo kinh điển đứng form mang lại vẻ ngoài bụi bặm năng động | Nhiều màu sắc để lựa chọn dễ dàng tìm thấy chân ái cho tủ đồ của bạn | Đánh đổi cho sự bền bỉ là áo sẽ cần phơi lâu hơn và nên giặt riêng để tránh lem màu nhé",
        "TenSP": "Áo Khoác Jean Nhuộm Hoạt Tính Bền Màu Multi-Color Jean 73 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-be-1174884838.jpg?v=1750777807&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-be-1174884840.jpg?v=1750777814&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-be-1174884836.jpg?v=1750777801&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-be-1174884837.jpg?v=1750777805&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-be-1174884835.jpg?v=1750777699&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Be"
    },
    {
        "MoTa": "Thiết kế kinh điển không bao giờ lỗi mốt và là item must-have trong tủ đồ của mọi chàng trai | Đừng lo nó cũ đi vì thời gian sẽ giúp nó phai màu tự nhiên tạo nên phiên bản vintage vibe | Đã đẹp màu còn bền phom điều này sẽ khiến bạn quên luôn việc phải mua áo khoác mới | Chất vải dày dặn đồng nghĩa với việc sẽ cần thêm chút thời gian để khô hoàn toàn nhé",
        "TenSP": "Áo Khoác Jeans Wash Rách The Original M069 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-den-1174884878.jpg?v=1750776845&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-den-1174884876.jpg?v=1750884851&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-den-1174884872.jpg?v=1750884740&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-den-1174884875.jpg?v=1750884848&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-den-1174884873.jpg?v=1750884842&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Chất Jean 100% Cotton dày dặn thoáng khí thấm hút mồ hôi cực đỉnh | Thiết kế phối nón thun giả layer tạo cảm giác như đang mặc 2 lớp áo siêu độc đáo | Công nghệ wash nhẹ trên vải jean tạo nên phong cách bụi bặm cá tính riêng biệt",
        "TenSP": "Áo Khoác Jean Nón Hoodie The Original M057 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m57-xanh-d-ng-1174884883.jpg?v=1750776854&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m57-xanh-d-ng-1174884885.jpg?v=1750776860&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m57-xanh-d-ng-1174884887.jpg?v=1750884856&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m57-xanh-d-ng-1174884886.jpg?v=1750884854&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m57-xanh-d-ng-1174884881.jpg?v=1750776848&width=1946"
        ],
        "GiaBan": 776100.0,
        "GiaMua": 597000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Chất vải Denim 100% Cotton dày dặn thấm hút tốt chống nắng và giữ ấm hiệu quả | Dáng áo kinh điển đứng form mang lại vẻ ngoài bụi bặm năng động | Nhiều màu sắc để lựa chọn dễ dàng tìm thấy chân ái cho tủ đồ của bạn | Đánh đổi cho sự bền bỉ là áo sẽ cần phơi lâu hơn và nên giặt riêng để tránh lem màu nhé",
        "TenSP": "Áo Khoác Jean Nhuộm Hoạt Tính Bền Màu Multi-Color Jean 73 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-d-m-1174884523.jpg?v=1750779008&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-d-m-1174884522.jpg?v=1750779005&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-d-m-1174884521.jpg?v=1750779001&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-d-m-1174884520.jpg?v=1750881962&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-premium-73-nau-d-m-1174884519.jpg?v=1750881860&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Thiết kế kinh điển không bao giờ lỗi mốt và là item must-have trong tủ đồ của mọi chàng trai | Đừng lo nó cũ đi vì thời gian sẽ giúp nó phai màu tự nhiên tạo nên phiên bản vintage vibe | Đã đẹp màu còn bền phom điều này sẽ khiến bạn quên luôn việc phải mua áo khoác mới | Chất vải dày dặn đồng nghĩa với việc sẽ cần thêm chút thời gian để khô hoàn toàn nhé",
        "TenSP": "Áo Khoác Jeans Wash Rách The Original M069 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-d-ng-1174884867.jpg?v=1750884730&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-d-ng-1174884866.jpg?v=1750884728&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-d-ng-1174884868.jpg?v=1750884733&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-d-ng-1174884869.jpg?v=1750884736&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-no-style-m69-xanh-d-ng-1174884863.jpg?v=1750777817&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "e86ba613-470b-4036-b920-15ea0b78347d",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Độ bền có thể combat cùng thời gian và không ngại va chạm với thời tiết | Bảng màu đa dạng chỉ cần vơ đại cũng lựa được 1 chiếc màu ưng ý | Chất vải dày dặn không ngại nắng chẳng sợ gió phù hợp mọi khí hậu | Nó sẽ hơi nhăn nhó khó chịu sau mỗi lần giặt nhưng bạn chỉ cần treo lên khi phơi và ủi nhẹ là sẽ lại đẹp ngay",
        "TenSP": "Áo Khoác Kaki Chống Nắng Bền Bỉ Seventy Seven 08 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xam-1174885083.jpg?v=1750887264&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xam-1174885082.jpg?v=1750887259&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xam-1174885086.jpg?v=1750887371&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xam-1174885084.jpg?v=1750887362&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xam-1174885081.jpg?v=1750887257&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Độ bền có thể combat cùng thời gian và không ngại va chạm với thời tiết | Bảng màu đa dạng chỉ cần vơ đại cũng lựa được 1 chiếc màu ưng ý | Chất vải dày dặn không ngại nắng chẳng sợ gió phù hợp mọi khí hậu | Nó sẽ hơi nhăn nhó khó chịu sau mỗi lần giặt nhưng bạn chỉ cần treo lên khi phơi và ủi nhẹ là sẽ lại đẹp ngay",
        "TenSP": "Áo Khoác Kaki Chống Nắng Bền Bỉ Seventy Seven 08 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xanh-reu-1174885045.jpg?v=1750776139&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xanh-reu-1174885043.jpg?v=1750776136&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xanh-reu-1174885049.jpg?v=1750886888&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xanh-reu-1174885046.jpg?v=1750886660&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-xanh-reu-1174885048.jpg?v=1750886885&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Độ bền có thể combat cùng thời gian và không ngại va chạm với thời tiết | Bảng màu đa dạng chỉ cần vơ đại cũng lựa được 1 chiếc màu ưng ý | Chất vải dày dặn không ngại nắng chẳng sợ gió phù hợp mọi khí hậu | Nó sẽ hơi nhăn nhó khó chịu sau mỗi lần giặt nhưng bạn chỉ cần treo lên khi phơi và ủi nhẹ là sẽ lại đẹp ngay",
        "TenSP": "Áo Khoác Kaki Chống Nắng Bền Bỉ Seventy Seven 08 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-den-1174885103.jpg?v=1750887606&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-den-1174885099.jpg?v=1750887374&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-den-1174885100.jpg?v=1750887377&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-den-1174885098.jpg?v=1750887372&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-den-1174885101.jpg?v=1750887380&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Kaki Nhung (Corduroy) ít nhăn bền màu với bề mặt sọc tăm độc đáo | Dáng áo rộng rãi cử động thoải mái phù hợp với mọi vóc dáng | Thiết kế tối giản với nhiều màu trung tính dễ phối đồ nhưng vẫn cực kỳ có gu | Để áo luôn như mới hãy giặt bằng nước lạnh và phơi trong bóng râm nhé",
        "TenSP": "Áo Khoác Kaki Corduroy Ít Nhăn Seventy Seven 37 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-kem-1174884062.jpg?v=1750874762&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-kem-1174884068.jpg?v=1750780565&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-kem-1174884065.jpg?v=1750874770&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-kem-1174884067.jpg?v=1750780562&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-kem-1174884064.jpg?v=1750874768&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Độ bền có thể combat cùng thời gian và không ngại va chạm với thời tiết | Bảng màu đa dạng chỉ cần vơ đại cũng lựa được 1 chiếc màu ưng ý | Chất vải dày dặn không ngại nắng chẳng sợ gió phù hợp mọi khí hậu | Nó sẽ hơi nhăn nhó khó chịu sau mỗi lần giặt nhưng bạn chỉ cần treo lên khi phơi và ủi nhẹ là sẽ lại đẹp ngay",
        "TenSP": "Áo Khoác Kaki Chống Nắng Bền Bỉ Seventy Seven 08 Vàng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-vang-1174885118.jpg?v=1750887722&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-vang-1174885117.jpg?v=1750887620&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-vang-1174885116.jpg?v=1750775779&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-vang-1174885115.jpg?v=1750775776&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-vang-1174885114.jpg?v=1750775773&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Vàng"
    },
    {
        "MoTa": "Chất liệu Kaki Nhung (Corduroy) ít nhăn bền màu với bề mặt sọc tăm độc đáo | Dáng áo rộng rãi cử động thoải mái phù hợp với mọi vóc dáng | Thiết kế tối giản với nhiều màu trung tính dễ phối đồ nhưng vẫn cực kỳ có gu | Để áo luôn như mới hãy giặt bằng nước lạnh và phơi trong bóng râm nhé",
        "TenSP": "Áo Khoác Kaki Corduroy Ít Nhăn Seventy Seven 37 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-reu-1174884994.jpg?v=1750886284&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-reu-1174884998.jpg?v=1750776367&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-reu-1174884993.jpg?v=1750886280&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-reu-1174884997.jpg?v=1750776364&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-reu-1174884995.jpg?v=1750886287&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất liệu Kaki Nhung (Corduroy) ít nhăn bền màu với bề mặt sọc tăm độc đáo | Dáng áo rộng rãi cử động thoải mái phù hợp với mọi vóc dáng | Thiết kế tối giản với nhiều màu trung tính dễ phối đồ nhưng vẫn cực kỳ có gu | Để áo luôn như mới hãy giặt bằng nước lạnh và phơi trong bóng râm nhé",
        "TenSP": "Áo Khoác Kaki Corduroy Ít Nhăn Seventy Seven 37 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-d-ng-1174884544.jpg?v=1750778898&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-d-ng-1174884543.jpg?v=1750778894&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-d-ng-1174884542.jpg?v=1750778892&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-d-ng-1174884541.jpg?v=1750778889&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-xanh-d-ng-1174884540.jpg?v=1750778885&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Độ bền có thể combat cùng thời gian và không ngại va chạm với thời tiết | Bảng màu đa dạng chỉ cần vơ đại cũng lựa được 1 chiếc màu ưng ý | Chất vải dày dặn không ngại nắng chẳng sợ gió phù hợp mọi khí hậu | Nó sẽ hơi nhăn nhó khó chịu sau mỗi lần giặt nhưng bạn chỉ cần treo lên khi phơi và ủi nhẹ là sẽ lại đẹp ngay",
        "TenSP": "Áo Khoác Kaki Chống Nắng Bền Bỉ Seventy Seven 08 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-kem-1174885136.jpg?v=1750888082&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-kem-1174885134.jpg?v=1750887976&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-kem-1174885133.jpg?v=1750887973&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-kem-1174885135.jpg?v=1750887980&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-08-kem-1174885132.jpg?v=1750887970&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Chất liệu Kaki Nhung (Corduroy) ít nhăn bền màu với bề mặt sọc tăm độc đáo | Dáng áo rộng rãi cử động thoải mái phù hợp với mọi vóc dáng | Thiết kế tối giản với nhiều màu trung tính dễ phối đồ nhưng vẫn cực kỳ có gu | Để áo luôn như mới hãy giặt bằng nước lạnh và phơi trong bóng râm nhé",
        "TenSP": "Áo Khoác Kaki Corduroy Ít Nhăn Seventy Seven 37 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-den-1174885016.jpg?v=1750776241&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-den-1174885019.jpg?v=1750776250&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-den-1174885018.jpg?v=1750776247&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-den-1174885022.jpg?v=1750776259&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-seventy-seven-37-den-1174885021.jpg?v=1750776256&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Harrington Nhung Corduroy No Style M66 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023612_thumb_1.jpg?v=1758869971&width=1946",
            "//yame.vn/cdn/shop/files/0023612_thumb_2.jpg?v=1758869971&width=1946",
            "//yame.vn/cdn/shop/files/0023612_thumb_3.jpg?v=1758869971&width=1946",
            "//yame.vn/cdn/shop/files/0023612_thumb_4.jpg?v=1758869971&width=1946",
            "//yame.vn/cdn/shop/files/0023612_thumb_5.jpg?v=1758869971&width=1946"
        ],
        "GiaBan": 543270.0,
        "GiaMua": 417900,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Harrington Nhung Corduroy No Style M66 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023611thumb1.jpg?v=1758869780&width=1946",
            "//yame.vn/cdn/shop/files/0023611thumb2.jpg?v=1758869780&width=1946",
            "//yame.vn/cdn/shop/files/0023611thumb3.jpg?v=1758869780&width=1946",
            "//yame.vn/cdn/shop/files/0023611thumb4.jpg?v=1758869780&width=1946",
            "//yame.vn/cdn/shop/files/0023611thumb5.jpg?v=1758869780&width=1946"
        ],
        "GiaBan": 543270.0,
        "GiaMua": 417900,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Kaki Dragon Ball Z 27 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024424_thumb_1.jpg?v=1758016324&width=1946",
            "//yame.vn/cdn/shop/files/0024424_thumb_2.jpg?v=1758016324&width=1946",
            "//yame.vn/cdn/shop/files/0024424_thumb_3.jpg?v=1758016324&width=1946",
            "//yame.vn/cdn/shop/files/0024424_thumb_5.jpg?v=1758016324&width=1946",
            "//yame.vn/cdn/shop/files/0024424_thumb_4.jpg?v=1758016324&width=1946"
        ],
        "GiaBan": 750100.0,
        "GiaMua": 577000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Kaki Dragon Ball Z 27 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024423_thumb_1.jpg?v=1758015839&width=1946",
            "//yame.vn/cdn/shop/files/0024423_thumb_2.jpg?v=1758015839&width=1946",
            "//yame.vn/cdn/shop/files/0024423_thumb_3.jpg?v=1758016118&width=1946",
            "//yame.vn/cdn/shop/files/0024423_thumb_4.jpg?v=1758016118&width=1946",
            "//yame.vn/cdn/shop/files/0024423_thumb_5.jpg?v=1758016118&width=1946"
        ],
        "GiaBan": 750100.0,
        "GiaMua": 577000,
        "TrangThai": "ACTIVE",
        "MaDM": "fd669233-3cc3-4dc2-a107-821bda169e16",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải thấm hút tốt mềm mại ít nhăn cho bạn cảm giác thoải mái chill cả ngày | Luôn giữ phom chuẩn màu bền đẹp thách thức cả máy giặt và thời gian | Họa tiết caro item không thể thiếu dễ dàng nâng tầm mọi outfit",
        "TenSP": "Áo Sơ Mi Caro Tay Dài Mềm Mịn No Style M62 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884360.jpg?v=1750879573&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884361.jpg?v=1750879576&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884362.jpg?v=1750879579&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884364.jpg?v=1750879806&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884363.jpg?v=1750879802&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải thấm hút tốt mềm mại ít nhăn cho bạn cảm giác thoải mái chill cả ngày | Luôn giữ phom chuẩn màu bền đẹp thách thức cả máy giặt và thời gian | Họa tiết caro item không thể thiếu dễ dàng nâng tầm mọi outfit | Do thấm hút tốt nên cần thêm thời gian để khô hoàn toàn nha",
        "TenSP": "Áo Sơ Mi Caro Tay Dài Mềm Mịn No Style M62 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884357.jpg?v=1750879567&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884356.jpg?v=1750879564&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884355.jpg?v=1750879561&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884354.jpg?v=1750779619&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884353.jpg?v=1750779616&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878764.jpg?v=1750821375&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878763.jpg?v=1750821372&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878761.jpg?v=1750820773&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878760.jpg?v=1750820770&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878759.jpg?v=1750820767&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882875.jpg?v=1750856045&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882877.jpg?v=1750856051&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882876.jpg?v=1750856049&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882878.jpg?v=1750856054&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882880.jpg?v=1750856060&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882892.jpg?v=1750856408&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882891.jpg?v=1750856405&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882893.jpg?v=1750856411&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882889.jpg?v=1750856300&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882894.jpg?v=1750856414&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882898.jpg?v=1750856420&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882897.jpg?v=1750856417&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882900.jpg?v=1750856525&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882902.jpg?v=1750856530&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882899.jpg?v=1750856522&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất Kaki thun (95% Cotton 5% Spandex) co giãn thấm hút mồ hôi thoải mái cả ngày | Vải được xử lý wash màu tạo hiệu ứng bụi bặm mềm mại và cá tính | Thiết kế rã vai và đô sau hình vòng cung đậm chất Western khỏe khoắn | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Kaki Co Giãn No Style M64 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1174878715.jpg?v=1751079421&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660211.jpg?v=1751094019&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660213.jpg?v=1751094121&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660212.jpg?v=1751094021&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660215.jpg?v=1751094128&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất Kaki thun (95% Cotton 5% Spandex) co giãn thấm hút mồ hôi thoải mái cả ngày | Vải được xử lý wash màu tạo hiệu ứng bụi bặm mềm mại và cá tính | Thiết kế rã vai và đô sau hình vòng cung đậm chất Western khỏe khoắn | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Kaki Co Giãn No Style M64 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-be-1174878757.jpg?v=1751079620&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-be-1175660203.jpg?v=1751094002&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-be-1175660205.jpg?v=1751094009&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-be-1175660201.jpg?v=1751093896&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-be-1175660206.jpg?v=1751094012&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chất Kaki thun (95% Cotton 5% Spandex) co giãn thấm hút mồ hôi thoải mái cả ngày | Vải được xử lý wash màu tạo hiệu ứng bụi bặm mềm mại và cá tính | Thiết kế rã vai và đô sau hình vòng cung đậm chất Western khỏe khoắn | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Kaki Co Giãn No Style M64 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649694.jpg?v=1751082979&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649693.jpg?v=1751082976&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649692.jpg?v=1751082973&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649691.jpg?v=1751082970&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649689.jpg?v=1751082964&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xanh-reu-1174882884.jpg?v=1750856288&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xanh-reu-1174882886.jpg?v=1750856294&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xanh-reu-1174882885.jpg?v=1750856291&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xanh-reu-1174882887.jpg?v=1750856297&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xanh-reu-1174882882.jpg?v=1750856281&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cabee181-cfbe-45b9-a463-fe2cdc6887a1",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Tự tin vận động ngoài trời không lo ngại ánh nắng nhờ lớp khiên chống UV hiệu quả | Cấu trúc dệt Diamond độc đáo tăng cường tối đa độ thoáng khí mang lại cảm giác mềm mại | Tay raglan thoải mái nón ôm gọn tay xỏ ngón tiện lợi túi khóa kéo an toàn | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Khoác Thể Thao Chống UV The Beginner 006 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-den-1177437004.jpg?v=1752214083&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-den-1177437003.jpg?v=1752214080&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-den-1177437000.jpg?v=1752213852&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-den-1177436999.jpg?v=1752213849&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-den-1177436996.jpg?v=1752213840&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "867c367e-fe7d-4aba-8dc4-c6fb16d90c23",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Tự tin vận động ngoài trời không lo ngại ánh nắng nhờ lớp khiên chống UV hiệu quả | Cấu trúc dệt Diamond độc đáo tăng cường tối đa độ thoáng khí mang lại cảm giác mềm mại | Tay raglan thoải mái nón ôm gọn tay xỏ ngón tiện lợi túi khóa kéo an toàn | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Khoác Thể Thao Chống UV The Beginner 006 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-xanh-reu-1177436985.jpg?v=1752213620&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-xanh-reu-1177436976.jpg?v=1752213492&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-xanh-reu-1177436977.jpg?v=1752213495&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-xanh-reu-1177436978.jpg?v=1752213498&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-xanh-reu-1177436979.jpg?v=1752213600&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "867c367e-fe7d-4aba-8dc4-c6fb16d90c23",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Tự tin vận động ngoài trời không lo ngại ánh nắng nhờ lớp khiên chống UV hiệu quả | Cấu trúc dệt Diamond độc đáo tăng cường tối đa độ thoáng khí mang lại cảm giác mềm mại | Tay raglan thoải mái nón ôm gọn tay xỏ ngón tiện lợi túi khóa kéo an toàn | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Khoác Thể Thao Chống UV The Beginner 006 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-d-1177436971.jpg?v=1752213480&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-d-1177436965.jpg?v=1752213243&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-d-1177436964.jpg?v=1752213240&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-d-1177436973.jpg?v=1752213486&width=1946",
            "//yame.vn/cdn/shop/files/ao-khoac-the-beginner-m006-d-1177436972.jpg?v=1752213483&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "867c367e-fe7d-4aba-8dc4-c6fb16d90c23",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thể Thao Nam Beginner 09 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023177_thumb_1.jpg?v=1759144659&width=1946",
            "//yame.vn/cdn/shop/files/0023177_thumb_2.jpg?v=1759144659&width=1946",
            "//yame.vn/cdn/shop/files/0023177_thumb_3.jpg?v=1759144659&width=1946",
            "//yame.vn/cdn/shop/files/0023177_thumb_4.jpg?v=1759144659&width=1946",
            "//yame.vn/cdn/shop/files/0023177_thumb_5.jpg?v=1759144659&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "867c367e-fe7d-4aba-8dc4-c6fb16d90c23",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thể Thao Nam Beginner 09 Xám Chì",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023176_thumb_1.jpg?v=1759144574&width=1946",
            "//yame.vn/cdn/shop/files/0023176_thumb_2.jpg?v=1759144574&width=1946",
            "//yame.vn/cdn/shop/files/0023176_thumb_3.jpg?v=1759144574&width=1946",
            "//yame.vn/cdn/shop/files/0023176_thumb_4.jpg?v=1759144574&width=1946",
            "//yame.vn/cdn/shop/files/0023176_thumb_5.jpg?v=1759144574&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "867c367e-fe7d-4aba-8dc4-c6fb16d90c23",
        "MauSac": "Xám Chì"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thể Thao Nam Beginner 09 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023175_thumb_1.jpg?v=1759144471&width=1946",
            "//yame.vn/cdn/shop/files/0023175_thumb_2.jpg?v=1759144471&width=1946",
            "//yame.vn/cdn/shop/files/0023175_thumb_3.jpg?v=1759144471&width=1946",
            "//yame.vn/cdn/shop/files/0023175_thumb_4.jpg?v=1759144471&width=1946",
            "//yame.vn/cdn/shop/files/0023175_thumb_5.jpg?v=1759144471&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "867c367e-fe7d-4aba-8dc4-c6fb16d90c23",
        "MauSac": "Kem"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Thể Thao Nam Beginner 09 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023174thumb1.jpg?v=1759144364&width=1946",
            "//yame.vn/cdn/shop/files/0023174thumb2.jpg?v=1759144364&width=1946",
            "//yame.vn/cdn/shop/files/0023174thumb3.jpg?v=1759144364&width=1946",
            "//yame.vn/cdn/shop/files/0023174thumb4.jpg?v=1759144364&width=1946",
            "//yame.vn/cdn/shop/files/0023174thumb5.jpg?v=1759144364&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "867c367e-fe7d-4aba-8dc4-c6fb16d90c23",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày | Vải mỏng nhẹ nhanh khô Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Tay Dài Modal Ít Nhăn Non Branded 19 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-tr-ng-1174884380.jpg?v=1750779482&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-tr-ng-1174884381.jpg?v=1750779484&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-tr-ng-1174884382.jpg?v=1750779487&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-tr-ng-1174884383.jpg?v=1750779490&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-tr-ng-1174884384.jpg?v=1758357357&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Tay Dài Modal Ít Nhăn Non Branded 19 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xanh-d-ng-1174884367.jpg?v=1750879811&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xanh-d-ng-1174884368.jpg?v=1750879814&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xanh-d-ng-1174884369.jpg?v=1750879817&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xanh-d-ng-1174884370.jpg?v=1750879821&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xanh-d-ng-1174884371.jpg?v=1758361215&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Tay Dài Modal Ít Nhăn Non Branded 19 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-nau-nh-t-1174884389.jpg?v=1750880048&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-nau-nh-t-1174884390.jpg?v=1750880051&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-nau-nh-t-1174884391.jpg?v=1750880053&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-nau-nh-t-1174884392.jpg?v=1750880056&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-nau-nh-t-1174884387.jpg?v=1758361686&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Tay Dài Modal Ít Nhăn Non Branded 19 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-den-1174884397.jpg?v=1750779361&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-den-1174884398.jpg?v=1750779364&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-den-1174884399.jpg?v=1750779367&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-den-1174884394.jpg?v=1750880059&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-den-1174884395.jpg?v=1758359826&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Tay Dài Modal Ít Nhăn Non Branded 19 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xam-tr-ng-1174884375.jpg?v=1750879933&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xam-tr-ng-1174884376.jpg?v=1750879937&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xam-tr-ng-1174884377.jpg?v=1750879940&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xam-tr-ng-1174884378.jpg?v=1750880041&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-xam-tr-ng-1174884373.jpg?v=1758359441&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": "Sợi Microfiber siêu nhỏ tạo nên bề mặt vải mượt mà mềm mại dễ chịu khi chạm vào | Vải rất dễ ủi và không co rút giúp bạn yên tâm về độ thanh lịch cả ngày | Công nghệ Pigment Printing giúp hình ảnh có màu sắc tươi sáng rõ nét và bám đều bề mặt | Vì là gốc Polyester nên mặc lâu ngoài trời nắng có thể hơi bí và hợp với dân văn phòng",
        "TenSP": "Áo Sơ Mi Tay Dài Siêu Mịn Seventy Seven 52 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-seventy-seven-52-tr-ng-1187130541.jpg?v=1756104368&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-seventy-seven-52-tr-ng-1187130540.jpg?v=1756104365&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-seventy-seven-52-tr-ng-1187130537.jpg?v=1756104357&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-seventy-seven-52-tr-ng-1187130534.jpg?v=1756104248&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-seventy-seven-52-tr-ng-1187130535.jpg?v=1756104250&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải thấm hút tốt mềm mại ít nhăn cho bạn cảm giác thoải mái chill cả ngày | Luôn giữ phom chuẩn màu bền đẹp thách thức cả máy giặt và thời gian | Họa tiết caro item không thể thiếu dễ dàng nâng tầm mọi outfit",
        "TenSP": "Áo Sơ Mi Caro Tay Dài Mềm Mịn No Style M62 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884360.jpg?v=1750879573&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884361.jpg?v=1750879576&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884362.jpg?v=1750879579&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884364.jpg?v=1750879806&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-xanh-den-1174884363.jpg?v=1750879802&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải thấm hút tốt mềm mại ít nhăn cho bạn cảm giác thoải mái chill cả ngày | Luôn giữ phom chuẩn màu bền đẹp thách thức cả máy giặt và thời gian | Họa tiết caro item không thể thiếu dễ dàng nâng tầm mọi outfit | Do thấm hút tốt nên cần thêm thời gian để khô hoàn toàn nha",
        "TenSP": "Áo Sơ Mi Caro Tay Dài Mềm Mịn No Style M62 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884357.jpg?v=1750879567&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884356.jpg?v=1750879564&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884355.jpg?v=1750879561&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884354.jpg?v=1750779619&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m62-nau-1174884353.jpg?v=1750779616&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/22998thumb1.jpg?v=1758699411&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-den-1174884336.jpg?v=1750779737&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-den-1174884335.jpg?v=1750779735&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-den-1174884332.jpg?v=1750779727&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-den-1174884331.jpg?v=1750779725&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất jean (75.6% Cotton) mềm mại thấm hút mồ hôi tốt thoải mái suốt ngày dài | Vừa là sơ mi lịch sự vừa là áo khoác ngoài (shacket) dễ dàng biến hóa phong cách | Wash bụi bặm túi đắp ngực lớn nút hợp kim chắc chắn Đầu tư vào chất lượng | Màu áo có thể chênh lệch nhẹ do wash nhưng chất lượng luôn được đảm bảo",
        "TenSP": "Áo Sơ Mi Jean Tay Dài Oversized The Original M051 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-ng-1192199026.jpg?v=1758582838&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-ng-1192199025.jpg?v=1758582835&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-ng-1192199024.jpg?v=1758582733&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-ng-1192199023.jpg?v=1758582730&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-ng-1192199022.jpg?v=1758582727&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Chất jean (75.6% Cotton) mềm mại thấm hút mồ hôi tốt thoải mái suốt ngày dài | Vừa là sơ mi lịch sự vừa là áo khoác ngoài (shacket) dễ dàng biến hóa phong cách | Wash bụi bặm túi đắp ngực lớn nút hợp kim chắc chắn Đầu tư vào chất lượng | Màu áo có thể chênh lệch nhẹ do wash nhưng chất lượng luôn được đảm bảo",
        "TenSP": "Áo Sơ Mi Jean Tay Dài Oversized The Original M051 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-nh-t-1192199038.jpg?v=1757505963&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-nh-t-1192199037.jpg?v=1757505961&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-nh-t-1192199035.jpg?v=1757505954&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-nh-t-1192199032.jpg?v=1757505847&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-nh-t-1192199031.jpg?v=1757505844&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Vải Bamboo thân thiện môi trường co giãn tốt kháng khuẩn thấm hút mồ hôi | Công nghệ Wrinkle Free giúp áo ít nhăn dễ ủi và tiết kiệm thời gian chăm sóc | Đường may đột chỉ tinh tế kết hợp nút kim loại bền chắc sang trọngmay đột chỉ tinh tế kết hợp nút kim loại bền chắc sang trọng | Nên giặt tay hoặc chế độ giặt nhẹ phơi trong bóng râm để áo luôn Stays Perfect",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Bamboo Kháng Khuẩn The CEO 007 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-den-1174882847.jpg?v=1750855573&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-den-1174882849.jpg?v=1750855580&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-den-1174882848.jpg?v=1750855577&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-den-1174882850.jpg?v=1750855681&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-den-1174882844.jpg?v=1750855564&width=1946"
        ],
        "GiaBan": 555100.0,
        "GiaMua": 427000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Sợi Modal Poly mềm mại thấm hút tốt ít nhăn và nhanh khô | Thiết kế cổ trụ (lãnh tụ) mang đến vẻ ngoài thanh lịch hiện đại | Nẹp liền giấu nút tinh tế Đường đột chỉ ở vai hỗ trợ vận động thoải mái | Sau khi giặt cần treo lên và ủi nhẹ là áo sẽ phẳng phiu tinh tươm",
        "TenSP": "Áo Sơ Mi Cổ Trụ Vải Modal Mềm Mịn Ít Nhăn Non Branded 38 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-den-1174884082.jpg?v=1750874895&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-den-1174884081.jpg?v=1750874893&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-den-1174884083.jpg?v=1750874898&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-den-1174884084.jpg?v=1750875121&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-den-1174884087.jpg?v=1750875131&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878764.jpg?v=1750821375&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878763.jpg?v=1750821372&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878761.jpg?v=1750820773&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878760.jpg?v=1750820770&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-d-m-1174878759.jpg?v=1750820767&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Tay Dài Modal Ít Nhăn Non Branded 19 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-h-ng-1174884411.jpg?v=1750880179&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-h-ng-1174884412.jpg?v=1750880401&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-h-ng-1174884413.jpg?v=1750880404&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-h-ng-1174884414.jpg?v=1750880408&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-h-ng-1174884409.jpg?v=1758361313&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Hồng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Cổ Trụ Tay Dài Vải Modal Mềm Mịn Seventy Seven 26 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023276_thumb_1.jpg?v=1758861422&width=1946",
            "//yame.vn/cdn/shop/files/0023276_thumb_2.jpg?v=1758861422&width=1946",
            "//yame.vn/cdn/shop/files/0023276_thumb_3.jpg?v=1758861422&width=1946",
            "//yame.vn/cdn/shop/files/0023276_thumb_4.jpg?v=1758861422&width=1946",
            "//yame.vn/cdn/shop/files/0023273S_MiTD-R_ng5877.jpg?v=1758861422&width=1946"
        ],
        "GiaBan": 252070.0,
        "GiaMua": 193900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Sơ Mi The Original M050 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-m-1174884229.jpg?v=1750878121&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-m-1174884228.jpg?v=1750878017&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-m-1174884224.jpg?v=1750878004&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-m-1174884226.jpg?v=1750878010&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-m-1174884225.jpg?v=1750878008&width=1946"
        ],
        "GiaBan": 415870.0,
        "GiaMua": 319900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Mát kháng khuẩn thấm hút chống tia UV lý tưởng cho thời tiết nóng ẩm | Bề mặt gân nhẹ tự nhiên tạo chiều sâu cuốn hút mang vẻ ngoài khác biệt và cao cấp | Kỹ thuật chiết eo (pence) giúp áo ôm vừa vặn theo vóc dáng đặc biệt khi sơ vin | Nên giặt tay hoặc chọn chế độ giặt nhẹ để giữ cấu trúc vải slub và form áo",
        "TenSP": "Áo Sơ Mi Tay Dài Slubbed Bamboo The CEO 009 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-the-ceo-009-tr-ng-1187130533.jpg?v=1756104245&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-the-ceo-009-tr-ng-1187130529.jpg?v=1758362321&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-the-ceo-009-tr-ng-1187130528.jpg?v=1758362321&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-the-ceo-009-tr-ng-1187130527.jpg?v=1758362321&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-dai-the-ceo-009-tr-ng-1187130531.jpg?v=1758362321&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882875.jpg?v=1750856045&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882877.jpg?v=1750856051&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882876.jpg?v=1750856049&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882878.jpg?v=1750856054&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-nau-1174882880.jpg?v=1750856060&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882892.jpg?v=1750856408&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882891.jpg?v=1750856405&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882893.jpg?v=1750856411&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882889.jpg?v=1750856300&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-den-1174882894.jpg?v=1750856414&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Corduroy 100% Cotton dày dặn giữ ấm tốt thấm hút mồ hôi và ít nhăn | Dáng áo rộng rãi tạo cảm giác thoải mái năng động và dễ dàng layer trang phục | Thiết kế đơn giản dễ phối đồ với túi đắp và nút hợp kim mạnh mẽ | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Corduroy Ít Nhăn No Style M65 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882898.jpg?v=1750856420&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882897.jpg?v=1750856417&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882900.jpg?v=1750856525&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882902.jpg?v=1750856530&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m65-xam-1174882899.jpg?v=1750856522&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Sợi Modal Poly mềm mại thấm hút tốt ít nhăn và nhanh khô | Thiết kế cổ trụ (lãnh tụ) mang đến vẻ ngoài thanh lịch hiện đại | Nẹp liền giấu nút tinh tế Đường đột chỉ ở vai hỗ trợ vận động thoải mái | Sau khi giặt cần treo lên và ủi nhẹ là áo sẽ phẳng phiu tinh tươm",
        "TenSP": "Áo Sơ Mi Cổ Trụ Vải Modal Mềm Mịn Ít Nhăn Non Branded 38 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-nau-1174881249.jpg?v=1750792688&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-nau-1174881255.jpg?v=1750796887&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-nau-1174881254.jpg?v=1750796884&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-nau-1174881250.jpg?v=1750792691&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-nau-1174881256.jpg?v=1750796891&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Sợi Modal Poly mềm mại thấm hút tốt ít nhăn và nhanh khô | Thiết kế cổ trụ (lãnh tụ) mang đến vẻ ngoài thanh lịch hiện đại | Nẹp liền giấu nút tinh tế Đường đột chỉ ở vai hỗ trợ vận động thoải mái | Sau khi giặt cần treo lên và ủi nhẹ là áo sẽ phẳng phiu tinh tươm",
        "TenSP": "Áo Sơ Mi Cổ Trụ Vải Modal Mềm Mịn Ít Nhăn Non Branded 38 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-tr-ng-1174884095.jpg?v=1750780444&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-tr-ng-1174884089.jpg?v=1750875133&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-tr-ng-1174884093.jpg?v=1750875367&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-tr-ng-1174884092.jpg?v=1750875364&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-38-tr-ng-1174884091.jpg?v=1750875362&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-d-ng-1174884286.jpg?v=1750780096&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-d-ng-1174884285.jpg?v=1750780093&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-d-ng-1174884284.jpg?v=1750780090&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-d-ng-1174884283.jpg?v=1750780087&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-d-ng-1174884281.jpg?v=1750780081&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-nh-t-1174884296.jpg?v=1750779979&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-nh-t-1174884295.jpg?v=1750779976&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-nh-t-1174884297.jpg?v=1750878966&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-nh-t-1174884299.jpg?v=1750779842&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-nh-t-1174884298.jpg?v=1750878970&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Tay Dài Modal Ít Nhăn Non Branded 19 Đỏ Đô",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-d-do-1174884404.jpg?v=1750779376&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-d-do-1174884405.jpg?v=1750779379&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-d-do-1174884406.jpg?v=1750880167&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-d-do-1174884407.jpg?v=1750880172&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-19-d-do-1174884402.jpg?v=1758359942&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đỏ Đô"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Cổ Trụ Tay Dài Vải Modal Mềm Mịn Seventy Seven 26 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023275_thumb_1.jpg?v=1758861321&width=1946",
            "//yame.vn/cdn/shop/files/0023275_thumb_2.jpg?v=1758861321&width=1946",
            "//yame.vn/cdn/shop/files/0023275_thumb_3.jpg?v=1758861321&width=1946",
            "//yame.vn/cdn/shop/files/0023275_thumb_4.jpg?v=1758861321&width=1946",
            "//yame.vn/cdn/shop/files/0023273S_MiTD-R_ng5877.jpg?v=1758861422&width=1946"
        ],
        "GiaBan": 252070.0,
        "GiaMua": 193900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Cổ Trụ Tay Dài Vải Modal Mềm Mịn Seventy Seven 26 Xanh Dương Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023274_thumb_1.jpg?v=1758861210&width=1946",
            "//yame.vn/cdn/shop/files/0023274_thumb_2.jpg?v=1758861210&width=1946",
            "//yame.vn/cdn/shop/files/0023274_thumb_3.jpg?v=1758861210&width=1946",
            "//yame.vn/cdn/shop/files/0023274_thumb_4.jpg?v=1758861210&width=1946",
            "//yame.vn/cdn/shop/files/0023274_thumb_5.jpg?v=1758861210&width=1946"
        ],
        "GiaBan": 252070.0,
        "GiaMua": 193900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Dương Nhạt"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Cổ Trụ Tay Dài Vải Modal Mềm Mịn Seventy Seven 26 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023273thumb1.jpg?v=1758861008&width=1946",
            "//yame.vn/cdn/shop/files/0023273thumb2.jpg?v=1758861008&width=1946",
            "//yame.vn/cdn/shop/files/0023273thumb3.jpg?v=1758861008&width=1946",
            "//yame.vn/cdn/shop/files/0023273thumb4.jpg?v=1758861008&width=1946",
            "//yame.vn/cdn/shop/files/0023273thumb5.jpg?v=1758861008&width=1946"
        ],
        "GiaBan": 252070.0,
        "GiaMua": 193900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Trơn Tay Dài Vải Hoa Hồng Kháng Khuẩn WRINKLE FREE 10 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0022558thumb1.jpg?v=1758854131&width=1946",
            "//yame.vn/cdn/shop/files/0022558thumb2.jpg?v=1758854131&width=1946",
            "//yame.vn/cdn/shop/files/0022558thumb3.jpg?v=1758854131&width=1946",
            "//yame.vn/cdn/shop/files/0022558thumb4.jpg?v=1758854131&width=1946",
            "//yame.vn/cdn/shop/files/0022558thumb5.jpg?v=1758854131&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Trơn Tay Dài Vải Hoa Hồng Kháng Khuẩn WRINKLE FREE 10 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0022559_thumb_1.jpg?v=1758856200&width=1946",
            "//yame.vn/cdn/shop/files/0022559_thumb_2.jpg?v=1758856200&width=1946",
            "//yame.vn/cdn/shop/files/0022559_thumb_3.jpg?v=1758856200&width=1946",
            "//yame.vn/cdn/shop/files/0022559_thumb_4.jpg?v=1758856200&width=1946",
            "//yame.vn/cdn/shop/files/0022559_thumb_5.jpg?v=1758856200&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Trơn Tay Dài Vải Hoa Hồng Kháng Khuẩn WRINKLE FREE 11 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0022557_thumb_1.jpg?v=1758853901&width=1946",
            "//yame.vn/cdn/shop/files/0022557_thumb_2.jpg?v=1758853901&width=1946",
            "//yame.vn/cdn/shop/files/0022557_thumb_3.jpg?v=1758853901&width=1946",
            "//yame.vn/cdn/shop/files/0022557_thumb_6.jpg?v=1758853901&width=1946",
            "//yame.vn/cdn/shop/files/0022557_thumb_5.jpg?v=1758853901&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Trơn Tay Dài Vải Hoa Hồng Kháng Khuẩn WRINKLE FREE 11 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0022556thumb1.jpg?v=1758853777&width=1946",
            "//yame.vn/cdn/shop/files/0022556thumb2.jpg?v=1758853777&width=1946",
            "//yame.vn/cdn/shop/files/0022556thumb3.jpg?v=1758853777&width=1946",
            "//yame.vn/cdn/shop/files/0022556thumb4.jpg?v=1758853777&width=1946",
            "//yame.vn/cdn/shop/files/0022556thumb5.jpg?v=1758853777&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Mềm mịn kháng khuẩn thấm hút tốt thân thiện môi trường",
        "TenSP": "Áo Sơ Mi Cổ Trụ Tay Dài Vải Bamboo Ít Nhăn WRINKLE FREE 06 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0022471_thumb_1.jpg?v=1758853536&width=1946",
            "//yame.vn/cdn/shop/files/0022471_thumb_2.jpg?v=1758853536&width=1946",
            "//yame.vn/cdn/shop/files/0022471_thumb_3.jpg?v=1758853536&width=1946",
            "//yame.vn/cdn/shop/files/0022471_thumb_4.jpg?v=1758853536&width=1946",
            "//yame.vn/cdn/shop/files/0022471_thumb_5.jpg?v=1758853536&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Mềm mịn kháng khuẩn thấm hút tốt thân thiện môi trường",
        "TenSP": "Áo Sơ Mi Cổ Trụ Tay Dài Vải Bamboo Ít Nhăn WRINKLE FREE 06 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0022470thumb1.jpg?v=1758852565&width=1946",
            "//yame.vn/cdn/shop/files/0022470thumb2.jpg?v=1758852565&width=1946",
            "//yame.vn/cdn/shop/files/0022470thumb3.jpg?v=1758852565&width=1946",
            "//yame.vn/cdn/shop/files/0022470thumb4.jpg?v=1758852565&width=1946",
            "//yame.vn/cdn/shop/files/0022470thumb5.jpg?v=1758852565&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Sơ Mi The Original M050 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-ng-1174884244.jpg?v=1750878241&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-ng-1174884243.jpg?v=1750878137&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-ng-1174884245.jpg?v=1750878244&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-ng-1174884242.jpg?v=1750878133&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-d-ng-1174884241.jpg?v=1750780340&width=1946"
        ],
        "GiaBan": 415870.0,
        "GiaMua": 319900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Khoác Sơ Mi The Original M050 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-nh-t-1174881192.jpg?v=1750792936&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-nh-t-1174881191.jpg?v=1750792933&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-nh-t-1174881194.jpg?v=1750792939&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-nh-t-1174881195.jpg?v=1750796173&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-50-xanh-nh-t-1174884234.jpg?v=1750780321&width=1946"
        ],
        "GiaBan": 415870.0,
        "GiaMua": 319900,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Chất jean (75.6% Cotton) mềm mại thấm hút mồ hôi tốt thoải mái suốt ngày dài | Vừa là sơ mi lịch sự vừa là áo khoác ngoài (shacket) dễ dàng biến hóa phong cách | Wash bụi bặm túi đắp ngực lớn nút hợp kim chắc chắn Đầu tư vào chất lượng | Màu áo có thể chênh lệch nhẹ do wash nhưng chất lượng luôn được đảm bảo",
        "TenSP": "Áo Sơ Mi Jean Tay Dài Oversized The Original M051 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-m-1192199048.jpg?v=1757506095&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-m-1192199047.jpg?v=1757506092&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-m-1192199044.jpg?v=1757506083&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-m-1192199043.jpg?v=1757506079&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m051-xanh-d-m-1192199040.jpg?v=1757505970&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-nh-t-1174884314.jpg?v=1750879204&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-nh-t-1174884310.jpg?v=1750878975&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-nh-t-1174884311.jpg?v=1750878978&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-nh-t-1174884309.jpg?v=1750878972&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-nh-t-1174884313.jpg?v=1750879201&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-nau-1174884343.jpg?v=1750879451&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-nau-1174884338.jpg?v=1750779740&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-nau-1174884339.jpg?v=1750879442&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-nau-1174884340.jpg?v=1750879446&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-nau-1174884342.jpg?v=1750879448&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải sợi Hoa Hồng mềm mịn thoáng mát co giãn tốt kiểm soát mùi hiệu quả | Dáng rộng thoải mái chuẩn form tôn dáng tự tin trong mọi hoạt động | Kháng khuẩn giảm tia UV ít nhăn điều hòa nhiệt thân thiện với môi trường | Để áo luôn tươi mới bạn chỉ cần giặt nhẹ ủi nhiệt độ thấp và phơi trong bóng râm",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Hoa Hồng Kháng Khuẩn The CEO 003 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-03-tr-ng-1174884261.jpg?v=1750878612&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-03-tr-ng-1174884260.jpg?v=1750878609&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-03-tr-ng-1174884258.jpg?v=1750878603&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-03-tr-ng-1174884257.jpg?v=1750878378&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-03-tr-ng-1174884256.jpg?v=1750878374&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-den-1174884267.jpg?v=1750780213&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-den-1174884266.jpg?v=1750780210&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-den-1174884269.jpg?v=1750780219&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-den-1174884268.jpg?v=1750780216&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-den-1174884265.jpg?v=1750780207&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-reu-1174884323.jpg?v=1750879324&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-reu-1174884325.jpg?v=1750879331&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-reu-1174884324.jpg?v=1750879327&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-reu-1174884327.jpg?v=1750879337&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xanh-reu-1174884328.jpg?v=1750879339&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-be-1174884303.jpg?v=1750779850&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-be-1174884302.jpg?v=1750779847&width=1946",
            "//yame.vn/cdn/shop/files/22994thumb3.jpg?v=1758352294&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-be-1174884304.jpg?v=1750779853&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-be-1174884306.jpg?v=1750779856&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Mugwort Twill độc đáo kháng khuẩn mềm mại thân thiện môi trường | Công nghệ Non-Iron hạn chế nếp nhăn giúp bạn luôn chỉn chu và tiết kiệm thời gian | Thiết kế classic với vòng treo ẩn tiện lợi cùng bảng màu đa dạng dễ dàng phối đồ | Hãy giặt nước lạnh và phơi trong râm đồng thời hạn chế sấy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Ngải Cứu Kháng Khuẩn The CEO 001 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-d-m-1174884349.jpg?v=1750779608&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-d-m-1174884348.jpg?v=1750779604&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-d-m-1174884347.jpg?v=1750779601&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-d-m-1174884346.jpg?v=1750879459&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-iron-01-xam-d-m-1174884345.jpg?v=1750879456&width=1946"
        ],
        "GiaBan": 444080.0,
        "GiaMua": 341600,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Vải Bamboo thân thiện môi trường co giãn tốt kháng khuẩn thấm hút mồ hôi | Công nghệ Wrinkle Free giúp áo ít nhăn dễ ủi và tiết kiệm thời gian chăm sóc | Đường may đột chỉ tinh tế kết hợp nút kim loại bền chắc sang trọngmay đột chỉ tinh tế kết hợp nút kim loại bền chắc sang trọng | Nên giặt tay hoặc chế độ giặt nhẹ phơi trong bóng râm để áo luôn Stays Perfect",
        "TenSP": "Áo Sơ Mi Tay Dài Vải Bamboo Kháng Khuẩn The CEO 007 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-tr-ng-1174882852.jpg?v=1750855688&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-tr-ng-1174882851.jpg?v=1750855684&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-tr-ng-1174882857.jpg?v=1750855801&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-tr-ng-1174882854.jpg?v=1750855693&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-wrinkle-free-07-tr-ng-1174882853.jpg?v=1750855690&width=1946"
        ],
        "GiaBan": 555100.0,
        "GiaMua": 427000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Chất Kaki thun (95% Cotton 5% Spandex) co giãn thấm hút mồ hôi thoải mái cả ngày | Vải được xử lý wash màu tạo hiệu ứng bụi bặm mềm mại và cá tính | Thiết kế rã vai và đô sau hình vòng cung đậm chất Western khỏe khoắn | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Kaki Co Giãn No Style M64 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649694.jpg?v=1751082979&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649693.jpg?v=1751082976&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649692.jpg?v=1751082973&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649691.jpg?v=1751082970&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-den-1175649689.jpg?v=1751082964&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất Kaki thun (95% Cotton 5% Spandex) co giãn thấm hút mồ hôi thoải mái cả ngày | Vải được xử lý wash màu tạo hiệu ứng bụi bặm mềm mại và cá tính | Thiết kế rã vai và đô sau hình vòng cung đậm chất Western khỏe khoắn | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Dài Kaki Co Giãn No Style M64 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1174878715.jpg?v=1751079421&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660211.jpg?v=1751094019&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660213.jpg?v=1751094121&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660212.jpg?v=1751094021&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m64-xam-1175660215.jpg?v=1751094128&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "cbe51b41-2b8c-4db2-ac0b-49bf6eca4c79",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô. Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa. Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Modal Mềm Mịn Ít Nhăn Non Branded 33 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xanh-d-ng-1174884119.jpg?v=1750875842&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xanh-d-ng-1174884114.jpg?v=1750875726&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xanh-d-ng-1174884117.jpg?v=1750875734&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xanh-d-ng-1174884116.jpg?v=1750875731&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xanh-d-ng-1174884118.jpg?v=1750875737&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô. Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa. Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Modal Mềm Mịn Ít Nhăn Non Branded 33 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-tr-ng-1174884128.jpg?v=1750875970&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-tr-ng-1174884127.jpg?v=1750875968&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-tr-ng-1174884124.jpg?v=1750875857&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-tr-ng-1174884123.jpg?v=1750875854&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-tr-ng-1174884122.jpg?v=1750875851&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô. Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa. Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Modal Mềm Mịn Ít Nhăn Non Branded 33 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-den-1174884163.jpg?v=1750876814&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-den-1174884167.jpg?v=1750876928&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-den-1174884166.jpg?v=1750876925&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-den-1174884165.jpg?v=1750876921&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-den-1174884164.jpg?v=1750876817&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô. Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa. Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Modal Mềm Mịn Ít Nhăn Non Branded 33 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-nau-1174884161.jpg?v=1750876811&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-nau-1174884160.jpg?v=1750876808&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-nau-1174884159.jpg?v=1750876805&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-nau-1174884158.jpg?v=1750876802&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-nau-1174884157.jpg?v=1750876697&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải Corduroy 100% Polyester ít nhăn đứng form mang vẻ đẹp retro ấm áp | Thiết kế phối màu hài hòa giữa các tông màu trầm tạo vẻ đẹp cổ điển sang trọng | Họa tiết thêu 2D tạo dấu ấn nổi bật tăng thêm tính thẩm mỹ cho sản phẩm | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Ngắn Vải Nhung Corduroy Retro Ít Nhăn Seventy Seven 22 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-be-1174882837.jpg?v=1750855444&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-be-1174882843.jpg?v=1750855563&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-be-1174882842.jpg?v=1750855459&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-be-1174882841.jpg?v=1750855456&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-be-1174882840.jpg?v=1750855453&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chất vải Linen kết hợp Rayon Nylon Polyester thấm hút tốt thoáng mát ít nhăn | Thiết kế cổ trụ (cổ lãnh tụ) mang đến vẻ ngoài tối giản thanh lịch | Họa tiết thêu 2D cùng tông màu tạo điểm nhấn tinh tế mà không quá nổi bật | Đặc tính vải có thể co rút nhẹ bạn chỉ cần giặt nhẹ và ủi ở nhiệt độ thấp nhé",
        "TenSP": "Áo Sơ Mi Cổ Trụ Linen Thoáng mát Seventy Seven 24 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-tr-ng-1174883160.jpg?v=1750782961&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-tr-ng-1174883156.jpg?v=1750782257&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-tr-ng-1174883163.jpg?v=1750782971&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-tr-ng-1174883159.jpg?v=1750782859&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-tr-ng-1174883158.jpg?v=1750782856&width=1946"
        ],
        "GiaBan": 267280.0,
        "GiaMua": 205600,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Corduroy 100% Polyester ít nhăn đứng form mang vẻ đẹp retro ấm áp | Thiết kế phối màu hài hòa giữa các tông màu trầm tạo vẻ đẹp cổ điển sang trọng | Họa tiết thêu 2D tạo dấu ấn nổi bật tăng thêm tính thẩm mỹ cho sản phẩm | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Ngắn Vải Nhung Corduroy Retro Ít Nhăn Seventy Seven 22 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-den-1174882869.jpg?v=1750855931&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-den-1174882868.jpg?v=1750855928&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-den-1174882870.jpg?v=1750855933&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-den-1174882872.jpg?v=1750855939&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-den-1174882871.jpg?v=1750855937&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất vải Linen kết hợp Rayon Nylon Polyester thấm hút tốt thoáng mát ít nhăn | Thiết kế cổ trụ (cổ lãnh tụ) mang đến vẻ ngoài tối giản thanh lịch | Họa tiết thêu 2D cùng tông màu tạo điểm nhấn tinh tế mà không quá nổi bật | Đặc tính vải có thể co rút nhẹ bạn chỉ cần giặt nhẹ và ủi ở nhiệt độ thấp nhé",
        "TenSP": "Áo Sơ Mi Cổ Trụ Linen Thoáng mát Seventy Seven 24 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xanh-den-1174883277.jpg?v=1750860731&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xanh-den-1174883276.jpg?v=1750860728&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xanh-den-1174883181.jpg?v=1750782131&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xanh-den-1174883182.jpg?v=1750782133&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xanh-den-1174883279.jpg?v=1750860737&width=1946"
        ],
        "GiaBan": 267280.0,
        "GiaMua": 205600,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô. Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa. Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Modal Mềm Mịn Ít Nhăn Non Branded 33 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xam-tr-ng-1174884148.jpg?v=1750876448&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xam-tr-ng-1174884149.jpg?v=1750876451&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xam-tr-ng-1174884153.jpg?v=1750876684&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xam-tr-ng-1174884150.jpg?v=1750876454&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-xam-tr-ng-1174884152.jpg?v=1750876682&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": "Vải Corduroy 100% Polyester ít nhăn đứng form mang vẻ đẹp retro ấm áp | Thiết kế phối màu hài hòa giữa các tông màu trầm tạo vẻ đẹp cổ điển sang trọng | Họa tiết thêu 2D tạo dấu ấn nổi bật tăng thêm tính thẩm mỹ cho sản phẩm | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Ngắn Vải Nhung Corduroy Retro Ít Nhăn Seventy Seven 22 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-xanh-reu-1174882830.jpg?v=1750785499&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-xanh-reu-1174882836.jpg?v=1750855441&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-xanh-reu-1174882835.jpg?v=1750855341&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-xanh-reu-1174882834.jpg?v=1750855337&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-xanh-reu-1174882833.jpg?v=1750855333&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô. Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa. Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Modal Mềm Mịn Ít Nhăn Non Branded 33 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-h-ng-1174884144.jpg?v=1750876217&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-h-ng-1174884146.jpg?v=1750876445&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-h-ng-1174884145.jpg?v=1750876442&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-h-ng-1174884140.jpg?v=1750876205&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-h-ng-1174884142.jpg?v=1750876211&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Hồng"
    },
    {
        "MoTa": "Chất vải Linen kết hợp Rayon Nylon Polyester thấm hút tốt thoáng mát ít nhăn | Thiết kế cổ trụ (cổ lãnh tụ) mang đến vẻ ngoài tối giản thanh lịch | Họa tiết thêu 2D cùng tông màu tạo điểm nhấn tinh tế mà không quá nổi bật | Đặc tính vải có thể co rút nhẹ bạn chỉ cần giặt nhẹ và ủi ở nhiệt độ thấp nhé",
        "TenSP": "Áo Sơ Mi Cổ Trụ Linen Thoáng mát Seventy Seven 24 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-den-1174883121.jpg?v=1750782487&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-den-1174883120.jpg?v=1750782484&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-den-1174883115.jpg?v=1750859409&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-den-1174883119.jpg?v=1750782481&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-den-1174883117.jpg?v=1750859415&width=1946"
        ],
        "GiaBan": 267280.0,
        "GiaMua": 205600,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Họa tiết monogram phủ kín áo tạo điểm nhấn cá tính đậm chất streetwear | Chất Polyester pha Spandex co giãn nhẹ form rộng thoải mái trong mọi hoạt động | Công nghệ in chuyển nhiệt sắc nét bền màu không lo bong tróc sau nhiều lần giặt | Hãy lộn trái khi giặt phơi không ủi trực tiếp và tránh chất tẩy",
        "TenSP": "Áo Sơ Mi Cuban Họa Tiết No Style M79 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m79-den-1174883062.jpg?v=1750785732&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m79-den-1174883061.jpg?v=1750783340&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m79-den-1174883058.jpg?v=1750783330&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m79-den-1174883060.jpg?v=1750783337&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m79-den-1174883057.jpg?v=1750783327&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất vải Linen kết hợp Rayon Nylon Polyester thấm hút tốt thoáng mát ít nhăn | Thiết kế cổ trụ (cổ lãnh tụ) mang đến vẻ ngoài tối giản thanh lịch | Họa tiết thêu 2D cùng tông màu tạo điểm nhấn tinh tế mà không quá nổi bật | Đặc tính vải có thể co rút nhẹ bạn chỉ cần giặt nhẹ và ủi ở nhiệt độ thấp nhé",
        "TenSP": "Áo Sơ Mi Cổ Trụ Linen Thoáng mát Seventy Seven 24 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xam-1174881235.jpg?v=1750796765&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xam-1174881234.jpg?v=1750796761&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xam-1174881232.jpg?v=1750796537&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-xam-1174881233.jpg?v=1750796540&width=1946",
            "//yame.vn/cdn/shop/files/23268_36cfb85b-2094-4cb6-961a-cc50bde2aaea.webp?v=1758354201&width=1946"
        ],
        "GiaBan": 267280.0,
        "GiaMua": 205600,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Tay Ngắn Vải Linen ONE PIECE-WANO 36 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-36-den-1174884098.jpg?v=1750780450&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-36-den-1174884097.jpg?v=1750780448&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-36-den-1174884101.jpg?v=1750780456&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-36-den-1174884104.jpg?v=1750875376&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-36-den-1174884103.jpg?v=1750875373&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất jean 75.6% Cotton mềm mại thấm hút mồ hôi tốt thoải mái suốt ngày dài | Dáng áo rộng rãi phong cách street style dễ dàng phối đồ thể hiện sự năng động | Wash bụi bặm túi đắp ngực lớn nút hợp kim chắc chắn. Đầu tư vào chất lượng | Màu áo có thể chênh lệch nhẹ do wash nhưng chất lượng luôn được đảm bảo",
        "TenSP": "Áo Sơ Mi Jean Tay Ngắn Mềm Oversized The Original 002 Xanh nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-nh-t-1176055456.jpg?v=1751352492&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-nh-t-1176055459.jpg?v=1751352499&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-nh-t-1176055460.jpg?v=1751352721&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-nh-t-1176055453.jpg?v=1751352481&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-nh-t-1176055454.jpg?v=1751352484&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh nhạt"
    },
    {
        "MoTa": "Chất jean 75.6% Cotton mềm mại thấm hút mồ hôi tốt thoải mái suốt ngày dài | Dáng áo rộng rãi phong cách street style dễ dàng phối đồ thể hiện sự năng động | Wash bụi bặm túi đắp ngực lớn nút hợp kim chắc chắn. Đầu tư vào chất lượng | Màu áo có thể chênh lệch nhẹ do wash nhưng chất lượng luôn được đảm bảo",
        "TenSP": "Áo Sơ Mi Jean Tay Ngắn Mềm Oversized The Original 002 Xanh dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-d-ng-1176055469.jpg?v=1751352967&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-d-ng-1176055468.jpg?v=1751352965&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-d-ng-1176055465.jpg?v=1751352736&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-d-ng-1176055464.jpg?v=1751352734&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-the-original-m001-xanh-d-ng-1176055461.jpg?v=1751352724&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh dương"
    },
    {
        "MoTa": "Chất vải Linen kết hợp Rayon Nylon Polyester thấm hút tốt thoáng mát ít nhăn | Thiết kế cổ trụ (cổ lãnh tụ) mang đến vẻ ngoài tối giản thanh lịch | Họa tiết thêu 2D cùng tông màu tạo điểm nhấn tinh tế mà không quá nổi bật | Đặc tính vải có thể co rút nhẹ bạn chỉ cần giặt nhẹ và ủi ở nhiệt độ thấp nhé",
        "TenSP": "Áo Sơ Mi Cổ Trụ Linen Thoáng mát Seventy Seven 24 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-be-1174883242.jpg?v=1750860367&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-be-1174883241.jpg?v=1750860364&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-be-1174883244.jpg?v=1750860373&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-be-1174883245.jpg?v=1750860376&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-24-be-1174883243.jpg?v=1750860371&width=1946"
        ],
        "GiaBan": 267280.0,
        "GiaMua": 205600,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Corduroy 100% Polyester ít nhăn đứng form mang vẻ đẹp retro ấm áp | Thiết kế phối màu hài hòa giữa các tông màu trầm tạo vẻ đẹp cổ điển sang trọng | Họa tiết thêu 2D tạo dấu ấn nổi bật tăng thêm tính thẩm mỹ cho sản phẩm | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Tay Ngắn Vải Nhung Corduroy Retro Ít Nhăn Seventy Seven 22 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-nau-1174882858.jpg?v=1750855804&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-nau-1174882859.jpg?v=1750855808&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-nau-1174882861.jpg?v=1750855813&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-nau-1174882860.jpg?v=1750855810&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-22-nau-1174882863.jpg?v=1750855819&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Chất vải Corduroy 100% Polyester bề mặt nhung ít nhăn giữ form tốt đậm chất retro | Thiết kế cổ mở (cổ Cuban) tạo vẻ ngoài phóng khoáng thời thượng | Dáng rộng unisex phù hợp cho cả nam và nữ dễ dàng thể hiện cá tính | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Cuban Corduroy Ít Nhăn Seventy Seven 23 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-nau-1174882910.jpg?v=1750856652&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-nau-1174882904.jpg?v=1750856533&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-nau-1174882906.jpg?v=1750856539&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-nau-1174882905.jpg?v=1750856536&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-nau-1174882908.jpg?v=1750856646&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Chất vải Corduroy 100% Polyester bề mặt nhung ít nhăn giữ form tốt đậm chất retro | Thiết kế cổ mở (cổ Cuban) tạo vẻ ngoài phóng khoáng thời thượng | Dáng rộng unisex phù hợp cho cả nam và nữ dễ dàng thể hiện cá tính | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Cuban Corduroy Ít Nhăn Seventy Seven 23 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xanh-reu-1174882914.jpg?v=1750856661&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xanh-reu-1174882916.jpg?v=1750856765&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xanh-reu-1174882915.jpg?v=1750856761&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xanh-reu-1174882917.jpg?v=1750856768&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xanh-reu-1174882918.jpg?v=1750856770&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất vải Corduroy 100% Polyester bề mặt nhung ít nhăn giữ form tốt đậm chất retro | Thiết kế cổ mở (cổ Cuban) tạo vẻ ngoài phóng khoáng thời thượng | Dáng rộng unisex phù hợp cho cả nam và nữ dễ dàng thể hiện cá tính | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Cuban Corduroy Ít Nhăn Seventy Seven 23 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-be-1174882940.jpg?v=1750857128&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-be-1174882939.jpg?v=1750857125&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-be-1174882938.jpg?v=1750857122&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-be-1174882937.jpg?v=1750857020&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-be-1174882936.jpg?v=1750857016&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Be"
    },
    {
        "MoTa": "Áo mặc nhẹ tênh chill cả ngày dài | Vải mỏng nhẹ nhanh khô. Giặt tối sáng có đồ mặc cân mọi kèo gấp | 7 màu tha hồ lựa. Cứu tinh cho những ngày lười auto-đẹp trai | Sau khi giặt đừng mong áo auto phẳng nha chỉ cần ủi sơ là áo sẽ phẳng phiu tinh tươm ngay",
        "TenSP": "Áo Sơ Mi Modal Mềm Mịn Ít Nhăn Non Branded 33 Đỏ Đô",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-d-do-1174884131.jpg?v=1750875977&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-d-do-1174884130.jpg?v=1750875974&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-d-do-1174884133.jpg?v=1750876085&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-d-do-1174884132.jpg?v=1750876081&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-non-branded-33-d-do-1174884134.jpg?v=1750876088&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đỏ Đô"
    },
    {
        "MoTa": "Vải thoáng khí nhanh khô và thấm hút tốt | Đường rã uốn lượn tạo điểm nhấn khác biệt thể hiện gu thời trang tinh tế | Vải không nhăn thêm nên cũng không cần ủi mà có ủi cũng không phẳng lỳ được. Quả là item hoàn hảo cho ngày bận rộn | Đặc tính vải có thể co rút khi bạn giặt ở nhiệt độ trên 40 độ hoặc dùng máy sấy khô bằng nhiệt",
        "TenSP": "Áo Sơ Mi Hiệu Ứng Linen Ít Nhăn No Style M117 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23662_thumb_1.jpg?v=1758957653&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-den-1174884214.jpg?v=1758957653&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-den-1174884213.jpg?v=1758957653&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-den-1174884216.jpg?v=1758957653&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-den-1174884217.jpg?v=1758957653&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Tay Ngắn Nhẹ Thoáng Mát ONE PIECE-WANO 20 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-20-tr-ng-1174884111.jpg?v=1750875498&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-20-tr-ng-1174884108.jpg?v=1750875487&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-20-tr-ng-1174884109.jpg?v=1750875490&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-20-tr-ng-1174884107.jpg?v=1750875484&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-one-piece-wano-20-tr-ng-1174884110.jpg?v=1750875493&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Tay Ngắn Dragon Ball Z 23 Trắng Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024421_thumb_1.jpg?v=1758014776&width=1946",
            "//yame.vn/cdn/shop/files/0024421_thumb_2.jpg?v=1758014776&width=1946",
            "//yame.vn/cdn/shop/files/0024421_thumb_3.jpg?v=1758014776&width=1946",
            "//yame.vn/cdn/shop/files/0024421_thumb_4.jpg?v=1758014776&width=1946",
            "//yame.vn/cdn/shop/files/0024421_thumb_5.jpg?v=1758014776&width=1946"
        ],
        "GiaBan": 555100.0,
        "GiaMua": 427000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng Xám"
    },
    {
        "MoTa": "Chất liệu Wave Wrinkle-RS mới lạ tạo hiệu ứng nhăn sóng nổi bật cá tính | Vải thấm hút tốt thoáng mát nhanh khô và đặc biệt là không cần ủi | Thành phần 5% Spandex giúp áo co giãn nhẹ thoải mái trong mọi hoạt động | Nên giặt tay hoặc dùng túi giặt và cẩn thận với các vật sắc nhọn bạn nhé",
        "TenSP": "Áo Sơ Mi Họa Tiết Nổi Thoáng Mát No Style M146 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-den-1174884175.jpg?v=1750877051&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-den-1174884173.jpg?v=1750877046&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-den-1174884172.jpg?v=1750877042&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-den-1174884174.jpg?v=1750877048&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-tr-ng-1174884176.jpg?v=1758271572&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất vải Corduroy 100% Polyester bề mặt nhung ít nhăn giữ form tốt đậm chất retro | Thiết kế cổ mở (cổ Cuban) tạo vẻ ngoài phóng khoáng thời thượng | Dáng rộng unisex phù hợp cho cả nam và nữ dễ dàng thể hiện cá tính | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Cuban Corduroy Ít Nhăn Seventy Seven 23 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-den-1174882979.jpg?v=1750857968&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-den-1174882978.jpg?v=1750857966&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-den-1174882981.jpg?v=1750857974&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-den-1174882980.jpg?v=1750857972&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-den-1174882982.jpg?v=1750857978&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Fragrant Style-RS (95% Polyester 5% Spandex) co giãn dệt thưa thoáng khí tối đa | Họa tiết ô vuông lạ mắt tạo điểm nhấn độc đáo cho trang phục | Thiết kế cổ mở (Cuban) phóng khoáng mát mẻ hoàn hảo cho ngày hè năng động | Nên giặt tay hoặc dùng túi giặt và cẩn thận với các vật sắc nhọn",
        "TenSP": "Áo Sơ Mi Cuban Họa Tiết Nổi Thoáng Mát No Style M145 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-tr-ng-1174883064.jpg?v=1750785733&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-tr-ng-1174883066.jpg?v=1750785740&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-tr-ng-1174883065.jpg?v=1750785736&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-tr-ng-1174883067.jpg?v=1750785841&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-tr-ng-1174883068.jpg?v=1758271652&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải thoáng khí nhanh khô và thấm hút tốt | Đường rã uốn lượn tạo điểm nhấn khác biệt thể hiện gu thời trang tinh tế | Vải không nhăn thêm nên cũng không cần ủi mà có ủi cũng không phẳng lỳ được. Quả là item hoàn hảo cho ngày bận rộn | Đặc tính vải có thể co rút khi bạn giặt ở nhiệt độ trên 40 độ hoặc dùng máy sấy khô bằng nhiệt",
        "TenSP": "Áo Sơ Mi Hiệu Ứng Linen Ít Nhăn No Style M117 Xanh Đá",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-xanh-da-1174884202.jpg?v=1750877651&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-xanh-da-1174884201.jpg?v=1750877649&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-xanh-da-1174884203.jpg?v=1750877654&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-xanh-da-1174884197.jpg?v=1750877533&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m117-xanh-da-1174884200.jpg?v=1750877645&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh Đá"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Tay Ngắn No Style M150 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23984_thumb_1.jpg?v=1758767050&width=1946",
            "//yame.vn/cdn/shop/files/23984_thumb_2.jpg?v=1758766832&width=1946",
            "//yame.vn/cdn/shop/files/23984_thumb_3.jpg?v=1758766832&width=1946",
            "//yame.vn/cdn/shop/files/23984_thumb_4.jpg?v=1758767050&width=1946",
            "//yame.vn/cdn/shop/files/23984_thumb_5.jpg?v=1758766977&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Cuban Tay Ngắn Vải Họa Tiết No Style M60 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023621thumb1.jpg?v=1758709367&width=1946",
            "//yame.vn/cdn/shop/files/0023621_thumb_2.jpg?v=1759207202&width=1946",
            "//yame.vn/cdn/shop/files/0023621thumb2.jpg?v=1759207202&width=1946",
            "//yame.vn/cdn/shop/files/0023621thumb3.jpg?v=1759207202&width=1946",
            "//yame.vn/cdn/shop/files/0023621thumb4.jpg?v=1759207202&width=1946"
        ],
        "GiaBan": 252070.0,
        "GiaMua": 193900,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Độ bền cao ít nhăn nhanh khô và thấm mực tốt phù hợp với in chuyển nhiệt",
        "TenSP": "Áo Sơ Cuban Mi Tay Ngắn Họa Tiết No Style 74 Trắng Xanh",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023620thumb1.jpg?v=1758709109&width=1946",
            "//yame.vn/cdn/shop/files/0023620thumb2.jpg?v=1758709109&width=1946",
            "//yame.vn/cdn/shop/files/0023620thumb3.jpg?v=1758709109&width=1946",
            "//yame.vn/cdn/shop/files/0023620thumb4.jpg?v=1758709109&width=1946",
            "//yame.vn/cdn/shop/files/0023620thumb5.jpg?v=1758709265&width=1946"
        ],
        "GiaBan": 261170.0,
        "GiaMua": 200900,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng Xanh"
    },
    {
        "MoTa": "nhẹ chống nhăn ít phai màu độ bền cao",
        "TenSP": "Áo Sơ Mi Tay Ngắn No Style M70 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023513thumb1.jpg?v=1758707006&width=1946",
            "//yame.vn/cdn/shop/files/0023513thumb2.jpg?v=1758707006&width=1946",
            "//yame.vn/cdn/shop/files/0023513thumb3.jpg?v=1758707006&width=1946",
            "//yame.vn/cdn/shop/files/0023513thumb4.jpg?v=1758707006&width=1946",
            "//yame.vn/cdn/shop/files/0023513S_MiTN-R_ng6274.jpg?v=1758707006&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Nhẹ chống nhăn ít phai màu độ bền cao",
        "TenSP": "Áo Sơ Mi Tay Ngắn No Style M71 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023512thumb1.jpg?v=1758706839&width=1946",
            "//yame.vn/cdn/shop/files/0023512thumb2.jpg?v=1758706839&width=1946",
            "//yame.vn/cdn/shop/files/0023512thumb3.jpg?v=1758706839&width=1946",
            "//yame.vn/cdn/shop/files/0023512thumb4.jpg?v=1758706839&width=1946",
            "//yame.vn/cdn/shop/files/0023512S_MiTN-R_ng6277.jpg?v=1758706839&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Đặc điểm của dệt twill là có các đường chéo nổi bật tạo chiều sâu",
        "TenSP": "Áo Sơ Mi Tay Ngắn Naruto 21 Cam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-21-cam-1194137357.jpg?v=1758599287&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-21-cam-1194137358.jpg?v=1758599290&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-21-cam-1194137355.jpg?v=1758599281&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-21-cam-1194137354.jpg?v=1758599278&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-21-cam-1194137356.jpg?v=1758599284&width=1946"
        ],
        "GiaBan": 278460.0,
        "GiaMua": 214200,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Cam"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Cuban Mi Tay Ngắn Họa Tiết Naruto 22 Cam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-cuban-mi-tay-ng-n-h-a-ti-t-naruto-22-cam-1194137359.jpg?v=1758599294&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-cuban-mi-tay-ng-n-h-a-ti-t-naruto-22-cam-1194137362.jpg?v=1758599402&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-cuban-mi-tay-ng-n-h-a-ti-t-naruto-22-cam-1194137360.jpg?v=1758599396&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-cuban-mi-tay-ng-n-h-a-ti-t-naruto-22-cam-1194137361.jpg?v=1758599399&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-20-xam-1194137363.jpg?v=1758599405&width=1946"
        ],
        "GiaBan": 278460.0,
        "GiaMua": 214200,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Cam"
    },
    {
        "MoTa": "Đặc điểm của dệt twill là có các đường chéo nổi bật tạo chiều sâu",
        "TenSP": "Áo Sơ Mi Tay Ngắn Naruto 20 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-20-xam-1194137368.jpg?v=1758599518&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-20-xam-1194137367.jpg?v=1758599515&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-20-xam-1194137366.jpg?v=1758599413&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-20-xam-1194137365.jpg?v=1758599411&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-tay-ng-n-naruto-20-xam-1194137364.jpg?v=1758599408&width=1946"
        ],
        "GiaBan": 309660.0,
        "GiaMua": 238200,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Sơ Mi Tay Ngắn Dragon Ball Z 24 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024422_thumb_1.jpg?v=1758015725&width=1946",
            "//yame.vn/cdn/shop/files/0024422_thumb_2.jpg?v=1758015725&width=1946",
            "//yame.vn/cdn/shop/files/0024422_thumb_3.jpg?v=1758015725&width=1946",
            "//yame.vn/cdn/shop/files/0024422_thumb_4.jpg?v=1758015725&width=1946",
            "//yame.vn/cdn/shop/files/0024422_thumb_5.jpg?v=1758015725&width=1946"
        ],
        "GiaBan": 555100.0,
        "GiaMua": 427000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Chất vải Corduroy 100% Polyester bề mặt nhung ít nhăn giữ form tốt đậm chất retro | Thiết kế cổ mở (cổ Cuban) tạo vẻ ngoài phóng khoáng thời thượng | Dáng rộng unisex phù hợp cho cả nam và nữ dễ dàng thể hiện cá tính | Nên phơi trong bóng râm và không dùng chất tẩy để áo luôn như mới nhé",
        "TenSP": "Áo Sơ Mi Cuban Corduroy Ít Nhăn Seventy Seven 23 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xam-1174882920.jpg?v=1750856773&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xam-1174882923.jpg?v=1750856881&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xam-1174882922.jpg?v=1750856780&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-xam-1174882921.jpg?v=1750856776&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-seventy-seven-23-be-1174882924.jpg?v=1758357663&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Kiểu dệt lạ mắt tạo hiệu ứng ô vuông nổi chìm mang đến sự khác biệt | Chất liệu Polyester pha Spandex co giãn nhẹ bền màu thoải mái trong mọi cử động | Hai túi đắp có nắp che bảo vệ đồ vật tạo điểm nhấn thời trang | Nên giặt ở nhiệt độ thường và hạn chế sấy nóng để áo luôn như mới",
        "TenSP": "Áo Sơ Mi Cuban Họa Tiết Nổi Co Giãn No Style M82 Trắng Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-tr-ng-kem-1174882997.jpg?v=1750858330&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-tr-ng-kem-1174882996.jpg?v=1750858327&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-tr-ng-kem-1174883000.jpg?v=1750858340&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-tr-ng-kem-1174883003.jpg?v=1750858447&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-tr-ng-kem-1174883002.jpg?v=1750858444&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng Kem"
    },
    {
        "MoTa": "Kiểu dệt lạ mắt tạo hiệu ứng ô vuông nổi chìm mang đến sự khác biệt | Chất liệu Polyester pha Spandex co giãn nhẹ bền màu thoải mái trong mọi cử động | Hai túi đắp có nắp che bảo vệ đồ vật tạo điểm nhấn thời trang | Nên giặt ở nhiệt độ thường và hạn chế sấy nóng để áo luôn như mới",
        "TenSP": "Áo Sơ Mi Cuban Họa Tiết Nổi Co Giãn No Style M82 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-den-1174883037.jpg?v=1750859056&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-den-1174883036.jpg?v=1750859053&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-den-1174883035.jpg?v=1750859051&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-den-1174883038.jpg?v=1750859059&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m82-den-1174883034.jpg?v=1750859047&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Công nghệ dệt Jacquard tạo họa tiết sọc nổi bật mang đến vẻ ngoài trẻ trung | Chất liệu Jacquard Knitting (95% Polyester 5% Spandex) co giãn thoải mái khi mặc | Thiết kế cổ mở tay ngắn phù hợp với thời tiết nóng ẩm và phong cách hiện đại | Nên giặt ở nhiệt độ thường và hạn chế sấy nóng để áo luôn như mới",
        "TenSP": "Áo Sơ Mi Cuban Jacquard Co Giãn No Style M81 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-den-1174883052.jpg?v=1750785725&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-den-1174883051.jpg?v=1750785721&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-den-1174883054.jpg?v=1750783321&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-den-1174883055.jpg?v=1750783325&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-den-1174883053.jpg?v=1750785727&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Công nghệ dệt Jacquard tạo họa tiết sọc nổi bật mang đến vẻ ngoài trẻ trung | Chất liệu Jacquard Knitting (95% Polyester 5% Spandex) co giãn thoải mái khi mặc | Thiết kế cổ mở tay ngắn phù hợp với thời tiết nóng ẩm và phong cách hiện đại | Nên giặt ở nhiệt độ thường và hạn chế sấy nóng để áo luôn như mới",
        "TenSP": "Áo Sơ Mi Cuban Jacquard Co Giãn No Style M81 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-kem-1174883045.jpg?v=1750859176&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-kem-1174883041.jpg?v=1750859164&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-kem-1174883040.jpg?v=1750859161&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-kem-1174883046.jpg?v=1750859179&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m81-kem-1174883043.jpg?v=1750859171&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Fragrant Style-RS (95% Polyester 5% Spandex) co giãn dệt thưa thoáng khí tối đa | Họa tiết ô vuông lạ mắt tạo điểm nhấn độc đáo cho trang phục | Thiết kế cổ mở (Cuban) phóng khoáng mát mẻ hoàn hảo cho ngày hè năng động | Nên giặt tay hoặc dùng túi giặt và cẩn thận với các vật sắc nhọn",
        "TenSP": "Áo Sơ Mi Cuban Họa Tiết Nổi Thoáng Mát No Style M145 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-den-1174883079.jpg?v=1750783205&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-den-1174883081.jpg?v=1750783211&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-den-1174883080.jpg?v=1750783208&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-den-1174883084.jpg?v=1750783222&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m145-den-1174883082.jpg?v=1758271608&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Wave Wrinkle-RS mới lạ tạo hiệu ứng nhăn sóng nổi bật cá tính | Vải thấm hút tốt thoáng mát nhanh khô và đặc biệt là không cần ủi | Thành phần 5% Spandex giúp áo co giãn nhẹ thoải mái trong mọi hoạt động | Nên giặt tay hoặc dùng túi giặt và cẩn thận với các vật sắc nhọn bạn nhé",
        "TenSP": "Áo Sơ Mi Họa Tiết Nổi Thoáng Mát No Style M146 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-tr-ng-1174884181.jpg?v=1750877170&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-tr-ng-1174884180.jpg?v=1750877167&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-tr-ng-1174884179.jpg?v=1750877165&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-tr-ng-1174884178.jpg?v=1750877161&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m146-tr-ng-1174884176.jpg?v=1758271572&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải lưới nhẹ tênh thoáng mát | Thiết kế phá cách dành cho những ai thích sự khác biệt và muốn flex cá tính | Áo này không cần ủi tiết kiệm biết bao nhiêu là thời gian | Vải lưới nên hơi  mong manh Cẩn thận với vật sắc nhọn để áo không bị xước nha",
        "TenSP": "Áo Sơ Mi Lưới Họa Tiết Sọc Thoáng Mát No Style M144 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-nau-1174884187.jpg?v=1750877287&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-nau-1174884186.jpg?v=1750877284&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-nau-1174884183.jpg?v=1750877173&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-nau-1174884188.jpg?v=1750877290&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-nau-1174884184.jpg?v=1750877176&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải lưới nhẹ tênh thoáng mát Tạm biệt cảm giác ẩm ương bí bách khó chịu | Thiết kế phá cách dành cho những ai thích sự khác biệt và muốn flex cá tính | Áo này không cần ủi tiết kiệm biết bao nhiêu là thời gian | Vải lưới nên hơi  mong manh Cẩn thận với vật sắc nhọn để áo không bị xước nha",
        "TenSP": "Áo Sơ Mi Lưới Họa Tiết Sọc Thoáng Mát No Style M144 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-kem-1174884190.jpg?v=1750877293&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-kem-1174884192.jpg?v=1750877521&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-kem-1174884191.jpg?v=1750877297&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-kem-1174884195.jpg?v=1750877530&width=1946",
            "//yame.vn/cdn/shop/files/ao-s-mi-no-style-m144-kem-1174884193.jpg?v=1758271774&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "9cc8fa06-357a-4b5b-aaff-7cc3bb2a72d0",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Trải nghiệm khác biệt với chiếc áo siêu nhẹ siêu mỏng đến kinh ngạc dày chỉ 0.07mm | Chất liệu Diamond Pique Polyester thấm hút mồ hôi siêu tốc và khô nhanh luôn khô ráo | Phom dáng ôm vừa vặn cổ tim cách điệu làm nổi bật bờ vai và ngực săn chắc | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Thin The Beginner 004 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24484_thumb_1.jpg?v=1758956918&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-den-1174884484.jpg?v=1758956918&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-den-1174884483.jpg?v=1758956918&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-den-1174884486.jpg?v=1758956918&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-den-1174884485.jpg?v=1758956918&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Trải nghiệm khác biệt với chiếc áo siêu nhẹ siêu mỏng đến kinh ngạc dày chỉ 0.07mm | Chất liệu Diamond Pique Polyester thấm hút mồ hôi siêu tốc và khô nhanh luôn khô ráo | Phom dáng ôm vừa vặn cổ tim cách điệu làm nổi bật bờ vai và ngực săn chắc | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Thin The Beginner 004 Xám Xanh",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24486_thumb_1.jpg?v=1758956965&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-xam-1174884499.jpg?v=1758956965&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-xam-1174884502.jpg?v=1758956965&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-xam-1174884501.jpg?v=1758956965&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-xam-1174884498.jpg?v=1758956965&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám Xanh"
    },
    {
        "MoTa": "Trải nghiệm khác biệt với chiếc áo siêu nhẹ siêu mỏng đến kinh ngạc dày chỉ 0.07mm | Chất liệu Diamond Pique Polyester thấm hút mồ hôi siêu tốc và khô nhanh luôn khô ráo | Phom dáng ôm vừa vặn cổ tim cách điệu làm nổi bật bờ vai và ngực săn chắc | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Thin The Beginner 004 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24485_thumb_1.jpg?v=1758956878&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-d-1174884492.jpg?v=1758956878&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-d-1174884491.jpg?v=1758956878&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-d-1174884494.jpg?v=1758956878&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m004-d-1174884493.jpg?v=1758956878&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Basic Tank với nhiều gam màu trung tính dễ dàng cân mọi outfit xuống phố | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun 3 Lỗ Waffle Non Branded 02 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23715_thumb_1.jpg?v=1758957081&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-tr-ng-1174885004.jpg?v=1758957081&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-tr-ng-1174885007.jpg?v=1758957081&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-tr-ng-1174885003.jpg?v=1758957081&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-tr-ng-1174885006.jpg?v=1758957081&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Basic Tank với nhiều gam màu trung tính dễ dàng cân mọi outfit xuống phố | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun 3 Lỗ Waffle Non Branded 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23714_thumb_1.jpg?v=1758957904&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-den-1174885025.jpg?v=1758957904&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-den-1174885024.jpg?v=1758957904&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-den-1174885023.jpg?v=1758957904&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-den-1174885027.jpg?v=1758957904&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Basic Tank với nhiều gam màu trung tính dễ dàng cân mọi outfit xuống phố | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun 3 Lỗ Waffle Non Branded 02 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23718_thumb_1.jpg?v=1758957207&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-tr-ng-1174884435.jpg?v=1758957207&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-tr-ng-1174884437.jpg?v=1758957207&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-tr-ng-1174884436.jpg?v=1758957207&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-tr-ng-1174884438.jpg?v=1758957207&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Basic Tank với nhiều gam màu trung tính dễ dàng cân mọi outfit xuống phố | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun 3 Lỗ Waffle Non Branded 02 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23716_thumb_1.jpg?v=1758957121&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-1174885011.jpg?v=1758957121&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-1174885010.jpg?v=1758957121&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-1174885009.jpg?v=1758957121&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xam-1174885013.jpg?v=1758957121&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Basic Tank với nhiều gam màu trung tính dễ dàng cân mọi outfit xuống phố | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun 3 Lỗ Waffle Non Branded 02 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23719_thumb_1.jpg?v=1758957243&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xanh-den-1174885031.jpg?v=1758957243&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xanh-den-1174885030.jpg?v=1758957243&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xanh-den-1174885029.jpg?v=1758957243&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-xanh-den-1174885033.jpg?v=1758957243&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "60% Cotton 40% Polyester Thoáng khí hút ẩm nhanh khô co giãn 2 chiều | Dáng vừa cổ tròn item không thể thiếu cho mùa hè năng động | In dẻo con số biểu tượng 7.7 phối màu tương phản tạo phong cách riêng | Lộn trái khi giặt phơi không ủi trực tiếp lên hình in và hạn chế sấy ở nhiệt độ cao",
        "TenSP": "Áo Thun 3 Lỗ Cotton Thoáng Khí Seventy Seven 14 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23222_thumb_1.jpg?v=1758957311&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-den-1174884466.jpg?v=1758957311&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-den-1174884469.jpg?v=1758957311&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-den-1174884468.jpg?v=1758957311&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-den-1174884467.jpg?v=1758957311&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "60% Cotton 40% Polyester Thoáng khí hút ẩm nhanh khô co giãn 2 chiều | Dáng vừa cổ tròn item không thể thiếu cho mùa hè năng động | In dẻo con số biểu tượng 7.7 phối màu tương phản tạo phong cách riêng | Lộn trái khi giặt phơi không ủi trực tiếp lên hình in và hạn chế sấy ở nhiệt độ cao",
        "TenSP": "Áo Thun 3 Lỗ Cotton Thoáng Khí Seventy Seven 14 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23224_thumb_1.jpg?v=1758957523&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xanh-reu-1174884475.jpg?v=1758957523&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xanh-reu-1174884476.jpg?v=1758957523&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xanh-reu-1174884478.jpg?v=1758957523&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xanh-reu-1174884477.jpg?v=1758957523&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "60% Cotton 40% Polyester Thoáng khí hút ẩm nhanh khô co giãn 2 chiều | Dáng vừa cổ tròn item không thể thiếu cho mùa hè năng động | In dẻo con số biểu tượng 7.7 phối màu tương phản tạo phong cách riêng | Lộn trái khi giặt phơi không ủi trực tiếp lên hình in và hạn chế sấy ở nhiệt độ cao",
        "TenSP": "Áo Thun 3 Lỗ Cotton Thoáng Khí Seventy Seven 14 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23223_thumb_1.jpg?v=1758957362&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-tr-ng-1174884442.jpg?v=1758957362&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-tr-ng-1174884443.jpg?v=1758957362&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-tr-ng-1174884445.jpg?v=1758957362&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-tr-ng-1174884444.jpg?v=1758957362&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Basic Tank với nhiều gam màu trung tính dễ dàng cân mọi outfit xuống phố | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun 3 Lỗ Waffle Non Branded 02 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23717_thumb_1.jpg?v=1758957160&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-nau-1174885038.jpg?v=1758957160&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-nau-1174885037.jpg?v=1758957160&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-nau-1174885036.jpg?v=1758957160&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-02-nau-1174885040.jpg?v=1758957160&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "60% Cotton 40% Polyester Thoáng khí hút ẩm nhanh khô co giãn 2 chiều | Dáng vừa cổ tròn item không thể thiếu cho mùa hè năng động | In dẻo con số biểu tượng 7.7 phối màu tương phản tạo phong cách riêng | Lộn trái khi giặt phơi không ủi trực tiếp lên hình in và hạn chế sấy ở nhiệt độ cao",
        "TenSP": "Áo Thun 3 Lỗ Cotton Thoáng Khí Seventy Seven 14 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23225_thumb_1.jpg?v=1758957601&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-be-1174884458.jpg?v=1758957601&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-be-1174884459.jpg?v=1758957601&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-be-1174884461.jpg?v=1758957601&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-be-1174884460.jpg?v=1758957601&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Be"
    },
    {
        "MoTa": "60% Cotton 40% Polyester Thoáng khí hút ẩm nhanh khô co giãn 2 chiều | Dáng vừa cổ tròn item không thể thiếu cho mùa hè năng động | In dẻo con số biểu tượng 7.7 phối màu tương phản tạo phong cách riêng | Lộn trái khi giặt phơi không ủi trực tiếp lên hình in và hạn chế sấy ở nhiệt độ cao",
        "TenSP": "Áo Thun 3 Lỗ Cotton Thoáng Khí Seventy Seven 14 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23226_thumb_1.jpg?v=1758957950&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xam-1174884450.jpg?v=1758957950&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xam-1174884451.jpg?v=1758957950&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xam-1174884453.jpg?v=1758957950&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-14-xam-1174884452.jpg?v=1758957950&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất liệu 100% Cotton mềm mại thấm hút tốt kiểm soát mùi hiệu quả | Thiết kế basic là item không thể thiếu để mặc lót hoặc phối đồ layer | Thiết kế nhấn mạnh vào phần viền vòng nách tạo sự khác biệt tinh tế | Vì là Cotton \\\\real\\\\ nên sẽ hơi nhăn khi giặt chỉ cần giũ nhẹ và treo lên là sẽ đẹp ngay",
        "TenSP": "Áo Thun 3 Lỗ Basic Mềm Mại Thoáng Mát No Style M22 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-tr-ng-1174885070.jpg?v=1750887014&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-tr-ng-1174885069.jpg?v=1750887011&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-tr-ng-1174885075.jpg?v=1750887250&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-tr-ng-1174885074.jpg?v=1750887248&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-tr-ng-1174885073.jpg?v=1750887244&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Công nghệ Askin trên nền vải Pique giúp hạ nhiệt bề mặt da mang lại cảm giác mát lạnh tức thì | Chất liệu mềm mịn với 15% Spandex co giãn 4 chiều ôm vừa vặn theo cơ thể vận động thoải mái | Cảm giác nhẹ tênh nhờ trọng lượng siêu nhẹ và hàng ngàn lỗ thoát khí li ti giúp da luôn khô thoáng",
        "TenSP": "Áo Thun 3 Lỗ ASKIN Giải Nhiệt The HomeBody AT001 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24465thumb1.jpg?v=1757737618&width=1946",
            "//yame.vn/cdn/shop/files/24465thumb6.jpg?v=1757737618&width=1946",
            "//yame.vn/cdn/shop/files/24465thumb2.jpg?v=1757737618&width=1946",
            "//yame.vn/cdn/shop/files/24465thumb3.jpg?v=1757737618&width=1946",
            "//yame.vn/cdn/shop/files/24465thumb4.jpg?v=1757737618&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Co giãn tối đa linh hoạt theo từng chuyển động của cơ thể không gây cảm giác gò bó | Thiết kế phối vải Mesh ở các vị trí chiến lược giúp tối ưu hóa sự lưu thông không khí | Bất chấp cường độ tập luyện khắc nghiệt áo vẫn luôn bền bỉ giữ form dáng ổn định | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 009 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-den-1175660146.jpg?v=1751092576&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-den-1175660145.jpg?v=1751092573&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-den-1175660141.jpg?v=1751092561&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-den-1175660144.jpg?v=1751092570&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-den-1175660147.jpg?v=1751092579&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu siêu co giãn của áo giúp bạn vận động không giới hạn giải phóng tiềm năng | Áo bền bỉ và không lo bai dão",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 011 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24093thumb1.jpg?v=1757668644&width=1946",
            "//yame.vn/cdn/shop/files/24093thumb2.jpg?v=1757668644&width=1946",
            "//yame.vn/cdn/shop/files/24093thumb3.jpg?v=1757668644&width=1946",
            "//yame.vn/cdn/shop/files/24093thumb4.jpg?v=1757668644&width=1946",
            "//yame.vn/cdn/shop/files/24093thumb5.jpg?v=1757668644&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu siêu co giãn của áo giúp bạn vận động không giới hạn giải phóng tiềm năng | Áo bền bỉ và không lo bai dão",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 011 Xanh Bích",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24095thumb1.jpg?v=1757668825&width=1946",
            "//yame.vn/cdn/shop/files/24095thumb2.jpg?v=1757668825&width=1946",
            "//yame.vn/cdn/shop/files/24095thumb3a.jpg?v=1757668825&width=1946",
            "//yame.vn/cdn/shop/files/24095thumb4.jpg?v=1757668825&width=1946",
            "//yame.vn/cdn/shop/files/24095thumb5.jpg?v=1757668825&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Bích"
    },
    {
        "MoTa": "Bề mặt vải mềm mại mịn màng lướt nhẹ trên da giảm tối đa ma sát khi luyện tập | Mang đến khả năng co giãn đa chiều vượt trội linh hoạt trong mọi chuyển động | Thân sau bằng vải Mesh với hàng ngàn lỗ thông minh giúp không khí lưu thông liên tục",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 010 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xam-1175660063.jpg?v=1751090657&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xam-1175660062.jpg?v=1751090653&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xam-1175660064.jpg?v=1751090660&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xam-1175660060.jpg?v=1751090649&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xam-1175660065.jpg?v=1751090762&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Bề mặt vải mềm mại mịn màng lướt nhẹ trên da giảm tối đa ma sát khi luyện tập | Mang đến khả năng co giãn đa chiều vượt trội linh hoạt trong mọi chuyển động | Thân sau bằng vải Mesh với hàng ngàn lỗ thông minh giúp không khí lưu thông liên tục",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 010 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-d-1175660068.jpg?v=1751090770&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-d-1175660070.jpg?v=1751090776&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-d-1175660069.jpg?v=1751090773&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-d-1175660071.jpg?v=1751090779&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-d-1175660072.jpg?v=1751091001&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": "Bề mặt vải mềm mại mịn màng lướt nhẹ trên da giảm tối đa ma sát khi luyện tập | Mang đến khả năng co giãn đa chiều vượt trội linh hoạt trong mọi chuyển động | Thân sau bằng vải Mesh với hàng ngàn lỗ thông minh giúp không khí lưu thông liên tục",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 010 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-tr-ng-1175660076.jpg?v=1751091016&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-tr-ng-1175660078.jpg?v=1751091020&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-tr-ng-1175660073.jpg?v=1751091004&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-tr-ng-1175660074.jpg?v=1751091007&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-tr-ng-1175660079.jpg?v=1751091120&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Co giãn tối đa linh hoạt theo từng chuyển động của cơ thể không gây cảm giác gò bó | Thiết kế phối vải Mesh ở các vị trí chiến lược giúp tối ưu hóa sự lưu thông không khí | Bất chấp cường độ tập luyện khắc nghiệt áo vẫn luôn bền bỉ giữ form dáng ổn định | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 009 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xam-d-m-1175660123.jpg?v=1751092093&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xam-d-m-1175660130.jpg?v=1751092333&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xam-d-m-1175660131.jpg?v=1751092335&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xam-d-m-1175660129.jpg?v=1751092330&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xam-d-m-1175660125.jpg?v=1751092099&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Chất liệu 100% Cotton mềm mại thấm hút tốt kiểm soát mùi hiệu quả | Thiết kế basic là item không thể thiếu để mặc lót hoặc phối đồ layer | Thiết kế nhấn mạnh vào phần viền vòng nách tạo sự khác biệt tinh tế | Vì là Cotton \\\\real\\\\ nên sẽ hơi nhăn khi giặt chỉ cần giũ nhẹ và treo lên là sẽ đẹp ngay",
        "TenSP": "Áo Thun 3 Lỗ Basic Mềm Mại Thoáng Mát No Style M22 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-nau-1174885056.jpg?v=1750776009&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-nau-1174885055.jpg?v=1750776006&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-nau-1174885054.jpg?v=1750776003&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-nau-1174885059.jpg?v=1750776018&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-nau-1174885058.jpg?v=1750776015&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải Cotton Compact (92% Cotton 8% Spandex) co giãn 4 chiều siêu mềm mịn | Thiết kế ôm vừa vặn tôn lên vóc dáng tạo cảm giác thon gọn khỏe khoắn | Họa tiết thêu nhãn ép PU Metallic lazer cắt rã tạo điểm nhấn tinh tế | Vì là Cotton real nên sẽ hơi nhăn khi giặt chỉ cần giũ nhẹ và treo lên là sẽ đẹp ngay",
        "TenSP": "Áo Thun 3 Lỗ Cotton Siêu Mềm No Style M21 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-xanh-d-ng-1174885108.jpg?v=1750887618&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-xanh-d-ng-1174885107.jpg?v=1750887615&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-xanh-d-ng-1174885106.jpg?v=1750887611&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-xanh-d-ng-1174885110.jpg?v=1750775764&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-xanh-d-ng-1174885111.jpg?v=1750775767&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "nhẹ và thoáng khí",
        "TenSP": "Áo Thun 3 Lỗ Vải Hexagon \"Biết Thở\" Beginner 03 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023146_thumb_1.jpg?v=1759140478&width=1946",
            "//yame.vn/cdn/shop/files/0023146_thumb_2.jpg?v=1759140478&width=1946",
            "//yame.vn/cdn/shop/files/0023146_thumb_3.jpg?v=1759140478&width=1946",
            "//yame.vn/cdn/shop/files/0023146_thumb_5.jpg?v=1759140478&width=1946",
            "//yame.vn/cdn/shop/files/0023146_thumb_6.jpg?v=1759140478&width=1946"
        ],
        "GiaBan": 88270.0,
        "GiaMua": 67900,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "nhẹ và thoáng khí",
        "TenSP": "Áo Thun 3 Lỗ Vải Hexagon \"Biết Thở\" Beginner 03 Xám Chì",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023145_thumb_1.jpg?v=1759140360&width=1946",
            "//yame.vn/cdn/shop/files/0023145_thumb_2.jpg?v=1759140360&width=1946",
            "//yame.vn/cdn/shop/files/0023145_thumb_3.jpg?v=1759140360&width=1946",
            "//yame.vn/cdn/shop/files/0023145_thumb_4.jpg?v=1759140360&width=1946",
            "//yame.vn/cdn/shop/files/0023145_thumb_5.jpg?v=1759140360&width=1946"
        ],
        "GiaBan": 88270.0,
        "GiaMua": 67900,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám Chì"
    },
    {
        "MoTa": "nhẹ và thoáng khí",
        "TenSP": "Áo Thun 3 Lỗ Vải Hexagon \"Biết Thở\" Beginner 03 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023144_thumb_1.jpg?v=1759140235&width=1946",
            "//yame.vn/cdn/shop/files/0023144_thumb_2.jpg?v=1759140235&width=1946",
            "//yame.vn/cdn/shop/files/0023144_thumb_3.jpg?v=1759140235&width=1946",
            "//yame.vn/cdn/shop/files/0023144_thumb_4.jpg?v=1759140235&width=1946",
            "//yame.vn/cdn/shop/files/0023144_thumb_5.jpg?v=1759140235&width=1946"
        ],
        "GiaBan": 88270.0,
        "GiaMua": 67900,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Kem"
    },
    {
        "MoTa": "nhẹ và thoáng khí",
        "TenSP": "Áo Thun 3 Lỗ Vải Hexagon \"Biết Thở\" Beginner 03 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023143_thumb_1.jpg?v=1759140053&width=1946",
            "//yame.vn/cdn/shop/files/0023143_thumb_2.jpg?v=1759140053&width=1946",
            "//yame.vn/cdn/shop/files/0023143_thumb_3.jpg?v=1759140053&width=1946",
            "//yame.vn/cdn/shop/files/0023143_thumb_4.jpg?v=1759140053&width=1946",
            "//yame.vn/cdn/shop/files/0023143_thumb_5.jpg?v=1759140053&width=1946"
        ],
        "GiaBan": 88270.0,
        "GiaMua": 67900,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám"
    },
    {
        "MoTa": "nhẹ và thoáng khí",
        "TenSP": "Áo Thun 3 Lỗ Vải Hexagon \"Biết Thở\" Beginner 03 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023141thumb1.jpg?v=1759139845&width=1946",
            "//yame.vn/cdn/shop/files/0023141thumb2.jpg?v=1759139845&width=1946",
            "//yame.vn/cdn/shop/files/0023141thumb3.jpg?v=1759139845&width=1946",
            "//yame.vn/cdn/shop/files/0023141thumb4.jpg?v=1759139845&width=1946",
            "//yame.vn/cdn/shop/files/0023141thumb5.jpg?v=1759139845&width=1946"
        ],
        "GiaBan": 88270.0,
        "GiaMua": 67900,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun 3 Lỗ Sọc Cotton No Style M23 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023572_thumb_1.jpg?v=1758869514&width=1946",
            "//yame.vn/cdn/shop/files/0023572_thumb_2.jpg?v=1758869514&width=1946",
            "//yame.vn/cdn/shop/files/0023572_thumb_3.jpg?v=1758869514&width=1946",
            "//yame.vn/cdn/shop/files/0023572_thumb_4.jpg?v=1758869514&width=1946",
            "//yame.vn/cdn/shop/files/0023572_thumb_5.jpg?v=1758869514&width=1946"
        ],
        "GiaBan": 206570.0,
        "GiaMua": 158900,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun 3 Lỗ Sọc Cotton No Style M23 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023571thumb1.jpg?v=1758869388&width=1946",
            "//yame.vn/cdn/shop/files/0023571thumb2.jpg?v=1758869388&width=1946",
            "//yame.vn/cdn/shop/files/0023571thumb3.jpg?v=1758869388&width=1946",
            "//yame.vn/cdn/shop/files/0023571thumb4.jpg?v=1758869388&width=1946",
            "//yame.vn/cdn/shop/files/0023571thumb5.jpg?v=1758869388&width=1946"
        ],
        "GiaBan": 206570.0,
        "GiaMua": 158900,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun 3 Lỗ Cotton ONE PIECE-WANO 17 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024262Thumb1.jpg?v=1758265552&width=1946",
            "//yame.vn/cdn/shop/files/0024262Thumb2.jpg?v=1758265552&width=1946",
            "//yame.vn/cdn/shop/files/0024262Thumb3.jpg?v=1758265552&width=1946",
            "//yame.vn/cdn/shop/files/0024262Thumb4.jpg?v=1758265553&width=1946",
            "//yame.vn/cdn/shop/files/0024262Thumb5.jpg?v=1758265552&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất liệu siêu co giãn của áo giúp bạn vận động không giới hạn giải phóng tiềm năng | Áo bền bỉ và không lo bai dão",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 011 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24092_thumb_1.jpg?v=1757668571&width=1946",
            "//yame.vn/cdn/shop/files/24092_thumb_2.jpg?v=1757668571&width=1946",
            "//yame.vn/cdn/shop/files/24092_thumb_3.jpg?v=1757668571&width=1946",
            "//yame.vn/cdn/shop/files/24092_thumb_4.jpg?v=1757668571&width=1946",
            "//yame.vn/cdn/shop/files/24092_thumb_5.jpg?v=1757668571&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Chất liệu siêu co giãn của áo giúp bạn vận động không giới hạn giải phóng tiềm năng | Áo bền bỉ và không lo bai dão",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 011 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24094thumb1.jpg?v=1757668725&width=1946",
            "//yame.vn/cdn/shop/files/24094thumb3.jpg?v=1757668725&width=1946",
            "//yame.vn/cdn/shop/files/24094thumb2.jpg?v=1757668725&width=1946",
            "//yame.vn/cdn/shop/files/24094thumb4.jpg?v=1757668725&width=1946",
            "//yame.vn/cdn/shop/files/24094thumb5.jpg?v=1757668725&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Chất liệu có tỷ lệ Spandex cao co giãn đa chiều vượt trội vận động không giới hạn | Tăng cường lưu thông khí thoát mồ hôi vượt trội giữ cho bạn luôn khô ráo | Tăng độ bền và sự thoải mái khi vận động cường độ cao không gây ma sát | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 007 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24077_thumb_1.jpg?v=1757669090&width=1946",
            "//yame.vn/cdn/shop/files/24077_thumb_2.jpg?v=1757669090&width=1946",
            "//yame.vn/cdn/shop/files/24077_thumb_3.jpg?v=1757669090&width=1946",
            "//yame.vn/cdn/shop/files/24077_thumb_4.jpg?v=1757669090&width=1946",
            "//yame.vn/cdn/shop/files/24077_thumb_8.jpg?v=1757669090&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu có tỷ lệ Spandex cao co giãn đa chiều vượt trội vận động không giới hạn | Tăng cường lưu thông khí thoát mồ hôi vượt trội giữ cho bạn luôn khô ráo | Tăng độ bền và sự thoải mái khi vận động cường độ cao không gây ma sát | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 007 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vn-11134207-7ras8-mbg4vd09cdwg1f_916d55f8-cdd0-4956-9aaa-7afad741980d.jpg?v=1758958274&width=1946",
            "//yame.vn/cdn/shop/files/24076thumb2.jpg?v=1758958274&width=1946",
            "//yame.vn/cdn/shop/files/24076thumb5.jpg?v=1758958274&width=1946",
            "//yame.vn/cdn/shop/files/24076thumb4.jpg?v=1758958274&width=1946",
            "//yame.vn/cdn/shop/files/24076thumb6.jpg?v=1758958274&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Chất liệu có tỷ lệ Spandex cao co giãn đa chiều vượt trội vận động không giới hạn | Tăng cường lưu thông khí thoát mồ hôi vượt trội giữ cho bạn luôn khô ráo | Tăng độ bền và sự thoải mái khi vận động cường độ cao không gây ma sát | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 007 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24078thumb1.jpg?v=1757669172&width=1946",
            "//yame.vn/cdn/shop/files/24078thumb2.jpg?v=1757669172&width=1946",
            "//yame.vn/cdn/shop/files/24078thumb3.jpg?v=1757669172&width=1946",
            "//yame.vn/cdn/shop/files/24078thumb4.jpg?v=1757669172&width=1946",
            "//yame.vn/cdn/shop/files/24078thumb5.jpg?v=1757669172&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Bề mặt vải mềm mại mịn màng lướt nhẹ trên da giảm tối đa ma sát khi luyện tập | Mang đến khả năng co giãn đa chiều vượt trội linh hoạt trong mọi chuyển động | Thân sau bằng vải Mesh với hàng ngàn lỗ thông minh giúp không khí lưu thông liên tục",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 010 Xanh Bích",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xanh-bich-1175660053.jpg?v=1751090407&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xanh-bich-1175660055.jpg?v=1751090414&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xanh-bich-1175660054.jpg?v=1751090412&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xanh-bich-1175660057.jpg?v=1751090418&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-xanh-bich-1175660056.jpg?v=1751090416&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Bích"
    },
    {
        "MoTa": "Bề mặt vải mềm mại mịn màng lướt nhẹ trên da giảm tối đa ma sát khi luyện tập | Mang đến khả năng co giãn đa chiều vượt trội linh hoạt trong mọi chuyển động | Thân sau bằng vải Mesh với hàng ngàn lỗ thông minh giúp không khí lưu thông liên tục",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 010 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-den-1175660082.jpg?v=1751091127&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-den-1175660081.jpg?v=1751091124&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-den-1175660083.jpg?v=1751091131&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-den-1175660087.jpg?v=1751091361&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-010-den-1175660084.jpg?v=1751091133&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Co giãn tối đa linh hoạt theo từng chuyển động của cơ thể không gây cảm giác gò bó | Thiết kế phối vải Mesh ở các vị trí chiến lược giúp tối ưu hóa sự lưu thông không khí | Bất chấp cường độ tập luyện khắc nghiệt áo vẫn luôn bền bỉ giữ form dáng ổn định | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 009 Xanh Bích",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xanh-bich-1175660116.jpg?v=1751091859&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xanh-bich-1175660114.jpg?v=1751091853&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xanh-bich-1175660119.jpg?v=1751092087&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xanh-bich-1175660120.jpg?v=1751092090&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-xanh-bich-1175660117.jpg?v=1751092081&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Bích"
    },
    {
        "MoTa": "Co giãn tối đa linh hoạt theo từng chuyển động của cơ thể không gây cảm giác gò bó | Thiết kế phối vải Mesh ở các vị trí chiến lược giúp tối ưu hóa sự lưu thông không khí | Bất chấp cường độ tập luyện khắc nghiệt áo vẫn luôn bền bỉ giữ form dáng ổn định | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 009 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-tr-ng-1175660149.jpg?v=1751092805&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-tr-ng-1175660151.jpg?v=1751092810&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-tr-ng-1175660154.jpg?v=1751092819&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-tr-ng-1175660153.jpg?v=1751092815&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-009-tr-ng-1175660156.jpg?v=1751093044&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Linh hoạt không giới hạn với tỷ lệ Spandex cao co giãn đa chiều vượt trội | Mặt sau áo là vải Mesh với hàng ngàn lỗ thoáng khí hoạt động như hệ thống điều hòa | Chất liệu vải cao cấp siêu nhẹ và mềm mịn lướt nhẹ trên da giúp giảm thiểu ma sát | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 008 Xanh Bích",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-xanh-bich-1175660161.jpg?v=1751093056&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-xanh-bich-1175660165.jpg?v=1751093167&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-xanh-bich-1175660164.jpg?v=1751093165&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-xanh-bich-1175660159.jpg?v=1751093050&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-xanh-bich-1175660162.jpg?v=1751093059&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Xanh Bích"
    },
    {
        "MoTa": "Linh hoạt không giới hạn với tỷ lệ Spandex cao co giãn đa chiều vượt trội | Mặt sau áo là vải Mesh với hàng ngàn lỗ thoáng khí hoạt động như hệ thống điều hòa | Chất liệu vải cao cấp siêu nhẹ và mềm mịn lướt nhẹ trên da giúp giảm thiểu ma sát | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun 3 Lỗ Thể Thao Ultra Stretch The Trainer 008 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-d-1175660167.jpg?v=1751093174&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-d-1175660166.jpg?v=1751093171&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-d-1175660170.jpg?v=1751093401&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-d-1175660168.jpg?v=1751093176&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-008-d-1175660171.jpg?v=1751093404&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": "Chất liệu 100% Cotton mềm mại thấm hút tốt kiểm soát mùi hiệu quả | Thiết kế basic là item không thể thiếu để mặc lót hoặc phối đồ layer | Thiết kế nhấn mạnh vào phần viền vòng nách tạo sự khác biệt tinh tế | Vì là Cotton \\\\real\\\\ nên sẽ hơi nhăn khi giặt chỉ cần giũ nhẹ và treo lên là sẽ đẹp ngay",
        "TenSP": "Áo Thun 3 Lỗ Basic Mềm Mại Thoáng Mát No Style M22 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-den-1174885063.jpg?v=1750886898&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-den-1174885062.jpg?v=1750886894&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-den-1174885061.jpg?v=1750776021&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-den-1174885067.jpg?v=1750887008&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-den-1174885066.jpg?v=1750887005&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu 100% Cotton mềm mại thấm hút tốt kiểm soát mùi hiệu quả | Thiết kế basic là item không thể thiếu để mặc lót hoặc phối đồ layer | Thiết kế nhấn mạnh vào phần viền vòng nách tạo sự khác biệt tinh tế | Vì là Cotton \\\\real\\\\ nên sẽ hơi nhăn khi giặt chỉ cần giũ nhẹ và treo lên là sẽ đẹp ngay",
        "TenSP": "Áo Thun 3 Lỗ Basic Mềm Mại Thoáng Mát No Style M22 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-be-1174878745.jpg?v=1750821013&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-be-1174878744.jpg?v=1750820896&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-be-1174878740.jpg?v=1750820886&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-be-1174878739.jpg?v=1750820881&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m22-be-1174878738.jpg?v=1750821010&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Cotton Compact (92% Cotton 8% Spandex) co giãn 4 chiều siêu mềm mịn | Thiết kế ôm vừa vặn tôn lên vóc dáng tạo cảm giác thon gọn khỏe khoắn | Họa tiết thêu nhãn ép PU Metallic lazer cắt rã tạo điểm nhấn tinh tế | Vì là Cotton real nên sẽ hơi nhăn khi giặt chỉ cần giũ nhẹ và treo lên là sẽ đẹp ngay",
        "TenSP": "Áo Thun 3 Lỗ Cotton Siêu Mềm No Style M21 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-nau-1174885089.jpg?v=1750775885&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-nau-1174885088.jpg?v=1750775882&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-nau-1174885094.jpg?v=1750775897&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-nau-1174885093.jpg?v=1750775894&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-nau-1174885092.jpg?v=1750775891&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải Cotton Compact (92% Cotton 8% Spandex) co giãn 4 chiều siêu mềm mịn | Thiết kế ôm vừa vặn tôn lên vóc dáng tạo cảm giác thon gọn khỏe khoắn | Họa tiết thêu nhãn ép PU Metallic lazer cắt rã tạo điểm nhấn tinh tế | Vì là Cotton real nên sẽ hơi nhăn khi giặt chỉ cần giũ nhẹ và treo lên là sẽ đẹp ngay",
        "TenSP": "Áo Thun 3 Lỗ Cotton Siêu Mềm No Style M21 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-tr-ng-1174884422.jpg?v=1750880526&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-tr-ng-1174884421.jpg?v=1750880523&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-tr-ng-1174884427.jpg?v=1750880541&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-tr-ng-1174884426.jpg?v=1750880537&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m21-tr-ng-1174884425.jpg?v=1750880535&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "f44d1314-a3aa-4628-8dd2-0b01597ca223",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-den-1174885437.jpg?v=1750891801&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-den-1174885436.jpg?v=1750891700&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-den-1174885435.jpg?v=1750891697&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-den-1174885438.jpg?v=1750891805&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885409.jpg?v=1750891456&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Pique xịn mềm thấm hút tốt. Tạm biệt nỗi lo ẩm ương khó chịu | Flex nhẹ độ bền Bo cổ và tay áo nói không với bai nhão bền vững vibes | Chút nhấn nhá màu sắc ở cổ và tay áo cũng đủ làm bạn trông hay ho hơn hẳn rồi đó | Tụi mình chọn vải pha Poly để áo bền vô đối. Ai thuộc hệ 100% Cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Mềm Mại Thoáng Mát No Style 78 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-den-1174885461.jpg?v=1750774937&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-den-1174885460.jpg?v=1750774934&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-den-1174885459.jpg?v=1750774930&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-den-1174885458.jpg?v=1750774927&width=1946",
            "//yame.vn/cdn/shop/files/0021849_c38611d5-9d1d-48cf-8cbe-e4e6191319e9.jpg?v=1758093813&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-tr-ng-1174885418.jpg?v=1750775044&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-tr-ng-1174885417.jpg?v=1750775043&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-tr-ng-1174885420.jpg?v=1750775051&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-tr-ng-1174885419.jpg?v=1750775048&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885409.jpg?v=1750891456&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Polo dáng rộng mix classic trendy mặc lên là auto icon thời trang | Vải Pique thấm hút co giãn 4 chiều siêu thoáng khí không xù lông mặc cực thoải mái | In Rubber nét căng không bong tróc đảm bảo xịn mịn từ A đến Z | Dáng áo rộng có thể không tôn dáng nếu bạn thích phong cách slim-fit nhé",
        "TenSP": "Áo Polo Pique Thoáng Khí Seventy Seven 17 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-tr-ng-1174885483.jpg?v=1750892174&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-tr-ng-1174885487.jpg?v=1750892286&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-tr-ng-1174885486.jpg?v=1750892283&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-tr-ng-1174885485.jpg?v=1750892180&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-tr-ng-1174885484.jpg?v=1750892178&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Phối màu basic rã phối ngang eo hack dáng siêu đỉnh auto cao ráo | Form polo chuẩn ôm vừa vặn tôn body thoải mái vận động | Vải Pique co giãn 4 chiều không xù lông In Rubber bền màu bo cổ tay form chuẩn từng milimet | Dáng vừa tôn body team thích oversized nên chọn lớn hơn một size nhé",
        "TenSP": "Áo Polo Phối Màu Pique Thoáng Mát Seventy Seven 19 Đen Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-tr-ng-1174885293.jpg?v=1750890127&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-tr-ng-1174885297.jpg?v=1750890141&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-tr-ng-1174885296.jpg?v=1750890136&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-tr-ng-1174885295.jpg?v=1750890134&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-tr-ng-1174885294.jpg?v=1750890130&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen Trắng"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Xám Ghi",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xam-ghi-1174885358.jpg?v=1750890973&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xam-ghi-1174885357.jpg?v=1750890970&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xam-ghi-1174885356.jpg?v=1750890967&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xam-ghi-1174885359.jpg?v=1750890977&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885360.jpg?v=1750775282&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám Ghi"
    },
    {
        "MoTa": "Polo dáng rộng mix classic trendy mặc lên là auto icon thời trang | Vải Pique thấm hút co giãn 4 chiều siêu thoáng khí không xù lông mặc cực thoải mái | In Rubber nét căng không bong tróc đảm bảo xịn mịn từ A đến Z | Dáng áo rộng có thể không tôn dáng nếu bạn thích phong cách slim-fit nhé",
        "TenSP": "Áo Polo Pique Thoáng Khí Seventy Seven 17 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-be-1174885480.jpg?v=1750774816&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-be-1174885479.jpg?v=1750774813&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-be-1174885478.jpg?v=1750774810&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-be-1174885477.jpg?v=1750774807&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-be-1174885481.jpg?v=1750774819&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-reu-1174885362.jpg?v=1750775284&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-reu-1174885365.jpg?v=1750775294&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-reu-1174885364.jpg?v=1750775291&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-reu-1174885363.jpg?v=1750775288&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885360.jpg?v=1750775282&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885397.jpg?v=1750775161&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885396.jpg?v=1750891444&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885398.jpg?v=1750775164&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885395.jpg?v=1750891441&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885360.jpg?v=1750775282&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chạm vào là mát với công nghệ Cool Touch độc đáo giúp bạn luôn dễ chịu và tự tin | Chất liệu thun 4 chiều cao cấp co giãn lý tưởng giải phóng mọi cử động của bạn | Nẹp áo giấu nút tỉ mỉ tạo vẻ ngoài liền mạch sang trọng và cực kỳ thanh lịch | Thành phần Cotton cao thấm hút tốt nhưng sẽ cần chút thời gian để khô hoàn toàn",
        "TenSP": "Áo Polo Mềm Mát Co Giãn The CEO 045 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-tr-ng-1174885328.jpg?v=1750890499&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-tr-ng-1174885331.jpg?v=1750890729&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-tr-ng-1174885332.jpg?v=1750890732&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-tr-ng-1174885330.jpg?v=1750890726&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-tr-ng-1174885329.jpg?v=1750890722&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Phối màu basic rã phối ngang eo hack dáng siêu đỉnh auto cao ráo | Form polo chuẩn ôm vừa vặn tôn body thoải mái vận động | Vải Pique co giãn 4 chiều không xù lông In Rubber bền màu bo cổ tay form chuẩn từng milimet | Dáng vừa tôn body team thích oversized nên chọn lớn hơn một size nhé",
        "TenSP": "Áo Polo Phối Màu Pique Thoáng Mát Seventy Seven 19 Trắng Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-xam-1174885302.jpg?v=1750890250&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-xam-1174885301.jpg?v=1750890247&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-xam-1174885300.jpg?v=1750890244&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-xam-1174885299.jpg?v=1750890242&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-xam-1174885303.jpg?v=1750890254&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng Xám"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-xam-1174885406.jpg?v=1750891447&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-xam-1174885405.jpg?v=1750775180&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-xam-1174885408.jpg?v=1750891453&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-xanh-xam-1174885407.jpg?v=1750891451&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885409.jpg?v=1750891456&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": "Polo dáng rộng mix classic trendy mặc lên là auto icon thời trang | Vải Pique thấm hút co giãn 4 chiều siêu thoáng khí không xù lông mặc cực thoải mái | In Rubber nét căng không bong tróc đảm bảo xịn mịn từ A đến Z | Dáng áo rộng có thể không tôn dáng nếu bạn thích phong cách slim-fit nhé",
        "TenSP": "Áo Polo Pique Thoáng Khí Seventy Seven 17 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-nau-1174885471.jpg?v=1750892164&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-nau-1174885475.jpg?v=1750774804&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-nau-1174885473.jpg?v=1750892171&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-nau-1174885472.jpg?v=1750892167&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-17-nau-1174885474.jpg?v=1750774801&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Khóa kéo bền bỉ tiện tùy chỉnh biến hóa phong cách cực dễ | Nâng cấp sự đơn giản Polo Jacquard 3D dệt nổi chất Polyester xịn sò giữ form đỉnh | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Polo Cổ Khóa Kéo No Style M128 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-nau-1174885623.jpg?v=1750894564&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-nau-1174885622.jpg?v=1750894561&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-nau-1174885626.jpg?v=1750894570&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-nau-1174885625.jpg?v=1750894568&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-nau-1174885627.jpg?v=1750894574&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Vải Pique xịn mềm thấm hút tốt. Tạm biệt nỗi lo ẩm ương khó chịu | Flex nhẹ độ bền Bo cổ và tay áo nói không với bai nhão bền vững vibes | Chút nhấn nhá màu sắc ở cổ và tay áo cũng đủ làm bạn trông hay ho hơn hẳn rồi đó | Tụi mình chọn vải pha Poly để áo bền vô đối. Ai thuộc hệ 100% Cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Mềm Mại Thoáng Mát No Style 78 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-tr-ng-1174885590.jpg?v=1750894098&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-tr-ng-1174885594.jpg?v=1750894211&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-tr-ng-1174885593.jpg?v=1750894208&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-78-tr-ng-1174885592.jpg?v=1750894204&width=1946",
            "//yame.vn/cdn/shop/files/0021848.jpg?v=1758091972&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Dáng rộng trendy giấu nhẹm mọi khuyết điểm mặc là tự tin 200% | Polo đơn giản upgrade với đường chỉ nổi trông trẻ trung và độc đáo hơn hẳn | Bề mặt vải mềm mại mang lại cảm giác mát mẻ thoáng khí thấm hút kiểm soát mùi | Vải 100% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Áo Polo Cotton Thoáng Khí No Style M27 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-den-1174885578.jpg?v=1750893973&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-den-1174885577.jpg?v=1750893971&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-den-1174885573.jpg?v=1750893857&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-den-1174885576.jpg?v=1750893968&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-den-1174885575.jpg?v=1750893964&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-h-ng-1174885368.jpg?v=1750775300&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-h-ng-1174885367.jpg?v=1750775298&width=1946",
            "//yame.vn/cdn/shop/files/23746thumb3.jpg?v=1758616528&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-h-ng-1174885369.jpg?v=1750890980&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-be-1174885360.jpg?v=1750775282&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Hồng"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Áo nhanh khô gần như không nhăn giúp bạn luôn chỉn chu mà không tốn công là ủi | Cổ kéo zip hiện đại cùng tay raglan phối mà giúp tôn lên bờ vai khỏe khoắn năng động | Tụi mình chọn vải Poly để áo bền vô đối và ai thuộc hệ 100% Cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Raglan Pique Co Giãn No Style M218 Xám Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024753_thumb_1.jpg?v=1758698097&width=1946",
            "//yame.vn/cdn/shop/files/0024753_thumb_2.jpg?v=1758698097&width=1946",
            "//yame.vn/cdn/shop/files/0024753_thumb_3.jpg?v=1758698097&width=1946",
            "//yame.vn/cdn/shop/files/0024753_thumb_4.jpg?v=1758698097&width=1946",
            "//yame.vn/cdn/shop/files/0024753_thumb_6.jpg?v=1758698097&width=1946"
        ],
        "GiaBan": 321100.0,
        "GiaMua": 247000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám Đen"
    },
    {
        "MoTa": "Mát mẻ chống tia UV khô nhanh khử mùi hôi | Tăng cường tính thẩm mỹ không đường may",
        "TenSP": "Áo Polo Tay Ngắn Vải Pique Khử Mùi The Minimalist 001 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xanh-den-1174885416.jpg?v=1750891571&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xanh-den-1174885415.jpg?v=1750891568&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xanh-den-1174885414.jpg?v=1750891565&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xanh-den-1174885412.jpg?v=1750891462&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xanh-den-1174885413.jpg?v=1750891561&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Phối màu basic rã phối ngang eo hack dáng siêu đỉnh auto cao ráo | Form polo chuẩn ôm vừa vặn tôn body thoải mái vận động | Vải Pique co giãn 4 chiều không xù lông In Rubber bền màu bo cổ tay form chuẩn từng milimet | Dáng vừa tôn body team thích oversized nên chọn lớn hơn một size nhé",
        "TenSP": "Áo Polo Phối Màu Pique Thoáng Mát Seventy Seven 19 Đen Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-xam-1174885285.jpg?v=1750889889&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-xam-1174885287.jpg?v=1750889894&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-xam-1174885286.jpg?v=1750889891&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-xam-1174885289.jpg?v=1750889900&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-den-xam-1174885288.jpg?v=1750889897&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen Xám"
    },
    {
        "MoTa": "Dây kéo kim loại cao cấp bền chắc. Bo cổ mềm mại không bai dão giữ form cổ áo luôn đẹp | Kiểu dệt Mesh Jacquard với bề mặt vải đẹp lạ thoáng khí mang lại cảm giác mát mẻ | Thành phần Polyester ít nhăn khô nhanh giữ form dáng và bền màu sau nhiều lần giặt | Chất liệu Polyester có thể không phù hợp với người có làn da quá nhạy cảm",
        "TenSP": "Áo Thun Polo Mesh Jacquard Thoáng Khí The Weekend 032 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-xam-d-m-1187130572.jpg?v=1756102688&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-xam-d-m-1187130571.jpg?v=1756102685&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-xam-d-m-1187130567.jpg?v=1756102575&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-xam-d-m-1187130570.jpg?v=1756102682&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-xam-d-m-1187130569.jpg?v=1756102679&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Dây kéo kim loại cao cấp bền chắc. Bo cổ mềm mại không bai dão giữ form cổ áo luôn đẹp | Kiểu dệt Mesh Jacquard với bề mặt vải đẹp lạ thoáng khí mang lại cảm giác mát mẻ | Thành phần Polyester ít nhăn khô nhanh giữ form dáng và bền màu sau nhiều lần giặt | Chất liệu Polyester có thể không phù hợp với người có làn da quá nhạy cảm",
        "TenSP": "Áo Thun Polo Mesh Jacquard Thoáng Khí The Weekend 032 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-tr-ng-1187130580.jpg?v=1756102317&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-tr-ng-1187130579.jpg?v=1756102808&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-tr-ng-1187130577.jpg?v=1756102802&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-tr-ng-1187130576.jpg?v=1756102799&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-c-polo-tay-ng-n-the-weekend-032-tr-ng-1187130575.jpg?v=1756102796&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Phối màu basic rã phối ngang eo hack dáng siêu đỉnh auto cao ráo | Form polo chuẩn ôm vừa vặn tôn body thoải mái vận động | Vải Pique co giãn 4 chiều không xù lông In Rubber bền màu bo cổ tay form chuẩn từng milimet | Dáng vừa tôn body team thích oversized nên chọn lớn hơn một size nhé",
        "TenSP": "Áo Polo Phối Màu Pique Thoáng Mát Seventy Seven 19 Trắng Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-d-1174885306.jpg?v=1750890260&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-d-1174885305.jpg?v=1750890256&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-d-1174885308.jpg?v=1750890365&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-d-1174885307.jpg?v=1750890361&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-seventy-seven-19-tr-ng-d-1174885309.jpg?v=1750775536&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng Đỏ"
    },
    {
        "MoTa": "Chạm vào là mát với công nghệ Cool Touch độc đáo giúp bạn luôn dễ chịu và tự tin | Nẹp áo giấu nút tỉ mỉ tạo vẻ ngoài liền mạch sang trọng và cực kỳ thanh lịch | Chất liệu thun 4 chiều cao cấp co giãn lý tưởng giải phóng mọi cử động của bạn | Thành phần Cotton cao thấm hút tốt nhưng sẽ cần chút thời gian để khô hoàn toàn",
        "TenSP": "Áo Polo Mềm Mát Co Giãn The CEO 045 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-xam-1174885338.jpg?v=1750890961&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-xam-1174885337.jpg?v=1750890740&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-xam-1174885339.jpg?v=1750890964&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-xam-1174885336.jpg?v=1750890737&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-xam-1174885340.jpg?v=1750775404&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chạm vào là mát với công nghệ Cool Touch độc đáo giúp bạn luôn dễ chịu và tự tin | Chất liệu thun 4 chiều cao cấp co giãn lý tưởng giải phóng mọi cử động của bạn | Nẹp áo giấu nút tỉ mỉ tạo vẻ ngoài liền mạch sang trọng và cực kỳ thanh lịch | Thành phần Cotton cao thấm hút tốt nhưng sẽ cần chút thời gian để khô hoàn toàn",
        "TenSP": "Áo Polo Mềm Mát Co Giãn The CEO 045 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-den-1174885348.jpg?v=1750775406&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-den-1174885353.jpg?v=1750775421&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-den-1174885352.jpg?v=1750775418&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-den-1174885351.jpg?v=1750775416&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-den-1174885349.jpg?v=1758162249&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Giặt máy thả ga không lo lắng bay dão hay xù lông Màu sắc giữ như mới sau hàng chục lần giặt | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười mặc đại cũng auto thanh lịch | Tụi mình chọn vải Poly để áo bền vô đối Ai thuộc hệ 100% cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Pique Thoáng Mát Non Branded 03 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885456.jpg?v=1750774925&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885453.jpg?v=1750892057&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885452.jpg?v=1750892054&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885454.jpg?v=1750774922&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-03-nau-1174885409.jpg?v=1750891456&width=1946"
        ],
        "GiaBan": 184080.0,
        "GiaMua": 141600,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Khóa kéo bền bỉ tiện tùy chỉnh biến hóa phong cách cực dễ | Nâng cấp sự đơn giản Polo Jacquard 3D dệt nổi chất Polyester xịn sò giữ form đỉnh | Phom rộng thoải mái giúp bạn cân mọi phong cách từ đi học đi chơi hay đi chill | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Polo Cổ Khóa Kéo No Style M128 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-kem-1174885620.jpg?v=1750894457&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-kem-1174885619.jpg?v=1750894454&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-kem-1174885618.jpg?v=1750894451&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-kem-1174885614.jpg?v=1750894338&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m128-kem-1174885616.jpg?v=1750894445&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Áo nhanh khô gần như không nhăn giúp bạn luôn chỉn chu mà không tốn công là ủi | Cổ kéo zip hiện đại cùng tay raglan phối mà giúp tôn lên bờ vai khỏe khoắn năng động | Tụi mình chọn vải Poly để áo bền vô đối và ai thuộc hệ 100% Cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Raglan Pique Co Giãn No Style M218 Đen Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024752_thumb_1.jpg?v=1758697521&width=1946",
            "//yame.vn/cdn/shop/files/0024752_thumb_1a.jpg?v=1758699618&width=1946",
            "//yame.vn/cdn/shop/files/0024752_thumb_2.jpg?v=1758699618&width=1946",
            "//yame.vn/cdn/shop/files/0024752_thumb_3.jpg?v=1758699618&width=1946",
            "//yame.vn/cdn/shop/files/0024752_thumb_4.jpg?v=1758699618&width=1946"
        ],
        "GiaBan": 321100.0,
        "GiaMua": 247000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen Xám"
    },
    {
        "MoTa": "Vải Pique thoáng mát co giãn tốt giúp bạn cảm giác luôn khô ráo chill cả ngày | Áo nhanh khô gần như không nhăn giúp bạn luôn chỉn chu mà không tốn công là ủi | Cổ kéo zip hiện đại cùng tay raglan phối mà giúp tôn lên bờ vai khỏe khoắn năng động | Tụi mình chọn vải Poly để áo bền vô đối và ai thuộc hệ 100% Cotton thì cân nhắc nhẹ nha",
        "TenSP": "Áo Polo Raglan Pique Co Giãn No Style M218 Nâu Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024750thumb1.jpg?v=1758697049&width=1946",
            "//yame.vn/cdn/shop/files/0024750thumb2.jpg?v=1758697049&width=1946",
            "//yame.vn/cdn/shop/files/0024750thumb4.jpg?v=1758697049&width=1946",
            "//yame.vn/cdn/shop/files/0024750thumb3.jpg?v=1758697049&width=1946",
            "//yame.vn/cdn/shop/files/0024750thumb5.jpg?v=1758697049&width=1946"
        ],
        "GiaBan": 321100.0,
        "GiaMua": 247000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Nâu Kem"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Sweater Cổ Khóa Kéo No Style M41 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133568.jpg?v=1758594479&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133567.jpg?v=1758594476&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133566.jpg?v=1758594373&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133565.jpg?v=1758594370&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133564.jpg?v=1758594367&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Vải Mesh Thoáng Khí ONE PIECE-WANO 06 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024264Thumb1.jpg?v=1758267558&width=1946",
            "//yame.vn/cdn/shop/files/0024264Thumb2.jpg?v=1758267558&width=1946",
            "//yame.vn/cdn/shop/files/0024264Thumb3.jpg?v=1758267559&width=1946",
            "//yame.vn/cdn/shop/files/0024264Thumb4.jpg?v=1758267558&width=1946",
            "//yame.vn/cdn/shop/files/0024264Thumb5.jpg?v=1758267558&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Mát mẻ chống tia UV khô nhanh khử mùi hôi | Tăng cường tính thẩm mỹ không đường may",
        "TenSP": "Áo Polo Tay Ngắn Vải Pique Khử Mùi The Minimalist 001 Đỏ Cam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-d-cam-1174885377.jpg?v=1750891098&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-d-cam-1174885378.jpg?v=1750891101&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-d-cam-1174885373.jpg?v=1750891086&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-d-cam-1174885375.jpg?v=1750891092&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-d-cam-1174885374.jpg?v=1750891088&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đỏ Cam"
    },
    {
        "MoTa": "Mát mẻ chống tia UV khô nhanh khử mùi hôi | Tăng cường tính thẩm mỹ không đường may",
        "TenSP": "Áo Polo Tay Ngắn Vải Pique Khử Mùi The Minimalist 001 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-den-1174885284.jpg?v=1750889885&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-den-1174885283.jpg?v=1750889882&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-den-1174885281.jpg?v=1750889777&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-den-1174885279.jpg?v=1750889770&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-den-1174885280.jpg?v=1750889773&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Mát mẻ chống tia UV khô nhanh khử mùi hôi | Tăng cường tính thẩm mỹ không đường may",
        "TenSP": "Áo Polo Tay Ngắn Vải Pique Khử Mùi The Minimalist 001 Đỏ Đô",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-d-do-1174885383.jpg?v=1750891214&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-d-do-1174885384.jpg?v=1750891216&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-d-do-1174885382.jpg?v=1750891210&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-d-do-1174885379.jpg?v=1750891201&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-d-do-1174885380.jpg?v=1750891205&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đỏ Đô"
    },
    {
        "MoTa": "Mát mẻ chống tia UV khô nhanh khử mùi hôi | Tăng cường tính thẩm mỹ không đường may",
        "TenSP": "Áo Polo Tay Ngắn Vải Pique Khử Mùi The Minimalist 001 Xám Chì",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xam-chi-1174885403.jpg?v=1750775173&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xam-chi-1174885404.jpg?v=1750775177&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xam-chi-1174885402.jpg?v=1750775171&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-xam-chi-1174885401.jpg?v=1750775167&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-vang-1174885385.jpg?v=1750891219&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám Chì"
    },
    {
        "MoTa": "Mát mẻ chống tia UV khô nhanh khử mùi hôi | Tăng cường tính thẩm mỹ không đường may",
        "TenSP": "Áo Polo Tay Ngắn Vải Pique Khử Mùi The Minimalist 001 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-tr-ng-1174885441.jpg?v=1750891808&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-tr-ng-1174885449.jpg?v=1750892051&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-tr-ng-1174885448.jpg?v=1750892048&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-tr-ng-1174885447.jpg?v=1750892045&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-the-minimalist-001-tr-ng-1174885446.jpg?v=1750892042&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Chạm vào là mát với công nghệ Cool Touch độc đáo giúp bạn luôn dễ chịu và tự tin | Nẹp áo giấu nút tỉ mỉ tạo vẻ ngoài liền mạch sang trọng và cực kỳ thanh lịch | Chất liệu thun 4 chiều cao cấp co giãn lý tưởng giải phóng mọi cử động của bạn | Thành phần Cotton cao thấm hút tốt nhưng sẽ cần chút thời gian để khô hoàn toàn",
        "TenSP": "Áo Polo Mềm Mát Co Giãn The CEO 045 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-be-1174885323.jpg?v=1750890491&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-be-1174885325.jpg?v=1750890496&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-be-1174885324.jpg?v=1750890493&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-non-branded-45-be-1174885322.jpg?v=1750890487&width=1946",
            "//yame.vn/cdn/shop/files/24445thumb5.jpg?v=1750775462&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Be"
    },
    {
        "MoTa": "Kết hợp Cotton và Polyester giúp vải có kết cấu bền vững không biến dạng sau nhiều lần giặt | Việc thay thế hàng cúc ở cổ áo mang lại sự tiện lợi hiện đại và khỏe khoắn hơn | Cách phối rã màu color block tạo điểm nhấn thị giác giúp bạn nổi bật một cách thật riêng | Sản phẩm co giãn 2 chiều đàn hồi tốt lưu ý chọn đúng size để có trải nghiệm thoải mái nhất",
        "TenSP": "Áo Polo Cotton Thoáng Mát No Style M31 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polono-style-m31-tr-ng-1174885500.jpg?v=1750892417&width=1946",
            "//yame.vn/cdn/shop/files/ao-polono-style-m31-tr-ng-1174885499.jpg?v=1750892413&width=1946",
            "//yame.vn/cdn/shop/files/ao-polono-style-m31-tr-ng-1174885503.jpg?v=1750892648&width=1946",
            "//yame.vn/cdn/shop/files/ao-polono-style-m31-tr-ng-1174885502.jpg?v=1750892644&width=1946",
            "//yame.vn/cdn/shop/files/ao-polono-style-m31-tr-ng-1174885501.jpg?v=1750892642&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Chất liệu thoáng mát co giãn 2 chiều diện cả ngày vẫn ok lắm luôn | Dây kéo nhựa dễ chịu với da đầu kim loại bền chắc xài lâu khỏi lo | Tay áo raglan phối màu siêu đỉnh vừa giúp hack dáng vai thon vừa thể hiện cá tính riêng | Sản phẩm co giãn 2 chiều đàn hồi tốt lưu ý chọn đúng size để có trải nghiệm thoải mái nhất",
        "TenSP": "Áo Polo Cổ Khóa Kéo No Style M29 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m29-den-1174885528.jpg?v=1750893134&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m29-den-1174885525.jpg?v=1750893125&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m29-den-1174885530.jpg?v=1750893241&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m29-den-1174885527.jpg?v=1750893130&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m29-den-1174885529.jpg?v=1750893137&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Điểm nhấn tone-sur-tone màu cổ và sọc tay in Rubber chữ CALIFORNIA | Cotton Compact siêu mềm mịn thoáng mát mang lại trải nghiệm cực chill | Form oversized che dáng thần sầu tự tin cân mọi outfit | Để hình in và form áo bền đẹp cần chú ý giặt ủi kỹ đừng auto vứt máy",
        "TenSP": "Áo Polo Tay Ngắn Sporty Siêu Mềm Mịn No Style M27 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-kem-1174885537.jpg?v=1750893362&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-kem-1174885534.jpg?v=1750893250&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-kem-1174885533.jpg?v=1750893247&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-kem-1174885532.jpg?v=1750893245&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-kem-1174885536.jpg?v=1750893257&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Điểm nhấn tone-sur-tone màu cổ và sọc tay in Rubber chữ CALIFORNIA | Cotton Compact siêu mềm mịn thoáng mát mang lại trải nghiệm cực chill | Form oversized che dáng thần sầu tự tin cân mọi outfit | Để hình in và form áo bền đẹp cần chú ý giặt ủi kỹ đừng auto vứt máy",
        "TenSP": "Áo Polo Tay Ngắn Sporty Siêu Mềm Mịn No Style M27 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-tr-ng-1174885559.jpg?v=1750893721&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-tr-ng-1174885558.jpg?v=1750893616&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-tr-ng-1174885560.jpg?v=1750893724&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-tr-ng-1174885557.jpg?v=1750893613&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m28-tr-ng-1174885561.jpg?v=1750893728&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Dáng rộng trendy giấu nhẹm mọi khuyết điểm mặc là tự tin 200% | Polo đơn giản upgrade với đường chỉ nổi trông trẻ trung và độc đáo hơn hẳn | Bề mặt vải mềm mại mang lại cảm giác mát mẻ thoáng khí thấm hút kiểm soát mùi | Vải 100% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Áo Polo Cotton Thoáng Khí No Style M27 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-xam-1174885602.jpg?v=1750894333&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-xam-1174885595.jpg?v=1750894214&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-xam-1174885598.jpg?v=1750894326&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-xam-1174885597.jpg?v=1750894323&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-xam-1174885596.jpg?v=1750894217&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Dáng rộng trendy giấu nhẹm mọi khuyết điểm mặc là tự tin 200% | Polo đơn giản upgrade với đường chỉ nổi trông trẻ trung và độc đáo hơn hẳn | Bề mặt vải mềm mại mang lại cảm giác mát mẻ thoáng khí thấm hút kiểm soát mùi | Vải 100% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Áo Polo Cotton Thoáng Khí No Style M27 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-nau-1174885580.jpg?v=1750893977&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-nau-1174885585.jpg?v=1750894095&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-nau-1174885584.jpg?v=1750894091&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-nau-1174885581.jpg?v=1750894083&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-no-style-m27-nau-1174885583.jpg?v=1750894088&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Vải Coffee Thoáng Mát Khử Mùi Non-Iron 06 Đỏ Đô",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024237_thumb_1.jpg?v=1758872200&width=1946",
            "//yame.vn/cdn/shop/files/0024237_thumb_2.jpg?v=1758872200&width=1946",
            "//yame.vn/cdn/shop/files/0024237_thumb_3.jpg?v=1758872200&width=1946",
            "//yame.vn/cdn/shop/files/0024237_thumb_5.jpg?v=1758872200&width=1946",
            "//yame.vn/cdn/shop/files/0024228Polo-V_a5675_xxl.jpg?v=1759227542&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đỏ Đô"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Vải Coffee Thoáng Mát Khử Mùi Non-Iron 06 Đỏ Cam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024235_thumb_1.jpg?v=1758871961&width=1946",
            "//yame.vn/cdn/shop/files/0024235_thumb_2.jpg?v=1758871961&width=1946",
            "//yame.vn/cdn/shop/files/0024235_thumb_3.jpg?v=1758871961&width=1946",
            "//yame.vn/cdn/shop/files/0024235_thumb_4.jpg?v=1758871961&width=1946",
            "//yame.vn/cdn/shop/files/0024235_thumb_5.jpg?v=1758871961&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Đỏ Cam"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Vải Coffee Thoáng Mát Khử Mùi Non-Iron 06 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024233_thumb_1.jpg?v=1758871773&width=1946",
            "//yame.vn/cdn/shop/files/0024233_thumb_2.jpg?v=1758871773&width=1946",
            "//yame.vn/cdn/shop/files/0024233_thumb_3.jpg?v=1758871773&width=1946",
            "//yame.vn/cdn/shop/files/0024233_thumb_4.jpg?v=1758871773&width=1946",
            "//yame.vn/cdn/shop/files/0024233_thumb_5.jpg?v=1758871773&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Vải Coffee Thoáng Mát Khử Mùi Non-Iron 06 Nâu Cafe",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024232_thumb_1.jpg?v=1758871661&width=1946",
            "//yame.vn/cdn/shop/files/0024232_thumb_2.jpg?v=1758871661&width=1946",
            "//yame.vn/cdn/shop/files/0024232_thumb_3.jpg?v=1758871661&width=1946",
            "//yame.vn/cdn/shop/files/0024232_thumb_4.jpg?v=1758871661&width=1946",
            "//yame.vn/cdn/shop/files/0024232_thumb_5.jpg?v=1758871661&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Nâu Cafe"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Vải Coffee Thoáng Mát Khử Mùi Non-Iron 06 Xám Chì",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024231_thumb_1.jpg?v=1758871567&width=1946",
            "//yame.vn/cdn/shop/files/0024231_thumb_2.jpg?v=1758871567&width=1946",
            "//yame.vn/cdn/shop/files/0024231_thumb_3.jpg?v=1758871567&width=1946",
            "//yame.vn/cdn/shop/files/0024231_thumb_4.jpg?v=1758871567&width=1946",
            "//yame.vn/cdn/shop/files/0024231_thumb_5.jpg?v=1758871567&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "e1809622-c506-4ac9-927b-ff7cc7439699",
        "MauSac": "Xám Chì"
    },
    {
        "MoTa": "Vải Pique co giãn thấm hút mồ hôi tốt Chất vải thoáng khí hạn chế xù lông | Thiết kế trẻ trung năng động với phần phối sọc trên cánh tay tạo điểm nhấn nổi bật | Áo dáng rộng phù hợp với mọi người đặc biệt là những người yêu thích sự thoải mái | Nên lộn trái sản phẩm khi giặt và phơi để bảo vệ hình in và màu sắc áo",
        "TenSP": "Áo Thun Pique Thoáng Mát Seventy Seven 13 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-den-1174883530.jpg?v=1750865060&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-den-1174883529.jpg?v=1750865057&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-den-1174883525.jpg?v=1750865044&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-den-1174883531.jpg?v=1750865284&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-den-1174883528.jpg?v=1750865053&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Pique co giãn thấm hút mồ hôi tốt Chất vải thoáng khí hạn chế xù lông | Thiết kế trẻ trung năng động với phần phối sọc trên cánh tay tạo điểm nhấn nổi bật | Áo dáng rộng phù hợp với mọi người đặc biệt là những người yêu thích sự thoải mái | Nên lộn trái sản phẩm khi giặt và phơi để bảo vệ hình in và màu sắc áo",
        "TenSP": "Áo Thun Pique Thoáng Mát Seventy Seven 13 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-tr-ng-1174883539.jpg?v=1750865401&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-tr-ng-1174883538.jpg?v=1750865303&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-tr-ng-1174883537.jpg?v=1750865300&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-tr-ng-1174883540.jpg?v=1750865404&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-tr-ng-1174883536.jpg?v=1750865297&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Bề mặt waffle tạo hiệu ứng thị giác đơn giản nhưng không hề đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Dáng rộng màu trung tính cân mọi outfit khi xuống phố | Chất liệu Polyester ưu tiên độ bền cân nhắc nếu bạn thuộc team mỏng nhẹ nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Thoáng Khí Seventy Seven 10 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-den-1174883597.jpg?v=1750866367&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-den-1174883592.jpg?v=1750866253&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-den-1174883591.jpg?v=1750866250&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-den-1174883594.jpg?v=1750866261&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-den-1174883595.jpg?v=1750866361&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-h-ng-1174883171.jpg?v=1750859527&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-h-ng-1174883168.jpg?v=1750859422&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-h-ng-1174883165.jpg?v=1750782974&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-h-ng-1174883167.jpg?v=1750782979&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-h-ng-1174883170.jpg?v=1750859524&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Hồng"
    },
    {
        "MoTa": "Trải nghiệm Nhẹ nhàng như không khí với chiếc áo trọng lượng siêu mỏng nhẹ mặc như không | Cấu trúc dệt kim cương độc đáo tạo lỗ thoáng khí giúp không khí lưu thông tối đa | Thiết kế tay raglan hạ đô chiết pence rã sườn giúp tôn dáng tạo vẻ ngoài mạnh mẽ | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Thể Thao Ultra Thin The Beginner 001 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-d-1174883881.jpg?v=1750871888&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-d-1174883875.jpg?v=1750871647&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-d-1174883880.jpg?v=1750871886&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-d-1174883884.jpg?v=1750871897&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-d-1174883876.jpg?v=1750871650&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Xám Ghi",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xam-ghi-1174883153.jpg?v=1750782254&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xam-ghi-1174883150.jpg?v=1750782246&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xam-ghi-1174883147.jpg?v=1750782850&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xam-ghi-1174883149.jpg?v=1750782242&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xam-ghi-1174883152.jpg?v=1750782252&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám Ghi"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-tr-ng-1174883207.jpg?v=1750859778&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-tr-ng-1174883208.jpg?v=1750859779&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-tr-ng-1174883204.jpg?v=1750782014&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-tr-ng-1174883202.jpg?v=1750782009&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-tr-ng-1174883205.jpg?v=1750782017&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Pique co giãn thấm hút mồ hôi tốt Chất vải thoáng khí hạn chế xù lông | Thiết kế trẻ trung năng động với phần phối sọc trên cánh tay tạo điểm nhấn nổi bật | Áo dáng rộng phù hợp với mọi người đặc biệt là những người yêu thích sự thoải mái | Nên lộn trái sản phẩm khi giặt và phơi để bảo vệ hình in và màu sắc áo",
        "TenSP": "Áo Thun Pique Thoáng Mát Seventy Seven 13 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-be-1174883511.jpg?v=1750864810&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-be-1174883510.jpg?v=1750864808&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-be-1174883513.jpg?v=1750864817&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-be-1174883514.jpg?v=1750864819&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-be-1174883512.jpg?v=1750864813&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Pique co giãn thấm hút mồ hôi tốt Chất vải thoáng khí hạn chế xù lông | Thiết kế trẻ trung năng động với phần phối sọc trên cánh tay tạo điểm nhấn nổi bật | Áo dáng rộng phù hợp với mọi người đặc biệt là những người yêu thích sự thoải mái | Nên lộn trái sản phẩm khi giặt và phơi để bảo vệ hình in và màu sắc áo",
        "TenSP": "Áo Thun Pique Thoáng Mát Seventy Seven 13 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xam-1174883483.jpg?v=1750864441&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xam-1174883479.jpg?v=1750864210&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xam-1174883478.jpg?v=1750864207&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xam-1174883480.jpg?v=1750864213&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xam-1174883482.jpg?v=1750864219&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-den-1174882387.jpg?v=1750852213&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-den-1174882389.jpg?v=1750852220&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-den-1174882388.jpg?v=1750852216&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-den-1174882392.jpg?v=1750852448&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-den-1174882391.jpg?v=1750852444&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Trải nghiệm Nhẹ nhàng như không khí với chiếc áo trọng lượng siêu mỏng nhẹ mặc như không | Cấu trúc dệt kim cương độc đáo tạo lỗ thoáng khí giúp không khí lưu thông tối đa | Thiết kế tay raglan hạ đô chiết pence rã sườn giúp tôn dáng tạo vẻ ngoài mạnh mẽ | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Thể Thao Ultra Thin The Beginner 001 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-den-1174883846.jpg?v=1750871056&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-den-1174883849.jpg?v=1750871168&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-den-1174883853.jpg?v=1750871283&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-den-1174883854.jpg?v=1750871286&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-den-1174883852.jpg?v=1750871177&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-ng-1174883110.jpg?v=1750786448&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-ng-1174883114.jpg?v=1750786460&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-ng-1174883112.jpg?v=1750786454&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-ng-1174883109.jpg?v=1750783100&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-ng-1174883111.jpg?v=1750786451&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Trải nghiệm Nhẹ nhàng như không khí với chiếc áo trọng lượng siêu mỏng nhẹ mặc như không | Cấu trúc dệt kim cương độc đáo tạo lỗ thoáng khí giúp không khí lưu thông tối đa | Thiết kế tay raglan hạ đô chiết pence rã sườn giúp tôn dáng tạo vẻ ngoài mạnh mẽ | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Thể Thao Ultra Thin The Beginner 001 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xanh-reu-1174883871.jpg?v=1750871536&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xanh-reu-1174883873.jpg?v=1750871643&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xanh-reu-1174883872.jpg?v=1750871641&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xanh-reu-1174883868.jpg?v=1750871528&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xanh-reu-1174883864.jpg?v=1750871414&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải Pique co giãn thấm hút mồ hôi tốt Chất vải thoáng khí hạn chế xù lông | Thiết kế trẻ trung năng động với phần phối sọc trên cánh tay tạo điểm nhấn nổi bật | Áo dáng rộng phù hợp với mọi người đặc biệt là những người yêu thích sự thoải mái | Nên lộn trái sản phẩm khi giặt và phơi để bảo vệ hình in và màu sắc áo",
        "TenSP": "Áo Thun Pique Thoáng Mát Seventy Seven 13 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xanh-reu-1174883489.jpg?v=1750864457&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xanh-reu-1174883488.jpg?v=1750864453&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xanh-reu-1174883490.jpg?v=1750864462&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xanh-reu-1174883485.jpg?v=1750864444&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-13-xanh-reu-1174883486.jpg?v=1750864448&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-nh-t-1174883076.jpg?v=1750786084&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-nh-t-1174883071.jpg?v=1750785851&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-nh-t-1174883074.jpg?v=1750785861&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-nh-t-1174883073.jpg?v=1750785856&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-nh-t-1174883072.jpg?v=1750785853&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Trải nghiệm Nhẹ nhàng như không khí với chiếc áo trọng lượng siêu mỏng nhẹ mặc như không | Cấu trúc dệt kim cương độc đáo tạo lỗ thoáng khí giúp không khí lưu thông tối đa | Thiết kế tay raglan hạ đô chiết pence rã sườn giúp tôn dáng tạo vẻ ngoài mạnh mẽ | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Thể Thao Ultra Thin The Beginner 001 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xam-1174883895.jpg?v=1750872127&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xam-1174883887.jpg?v=1750872004&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xam-1174883890.jpg?v=1750872011&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xam-1174883894.jpg?v=1750872124&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m001-xam-1174883893.jpg?v=1750872121&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Bề mặt waffle tạo hiệu ứng thị giác đơn giản nhưng không hề đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Dáng rộng màu trung tính cân mọi outfit khi xuống phố | Chất liệu Polyester ưu tiên độ bền cân nhắc nếu bạn thuộc team mỏng nhẹ nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Thoáng Khí Seventy Seven 10 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-nau-1174883556.jpg?v=1750865644&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-nau-1174883549.jpg?v=1750865524&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-nau-1174883550.jpg?v=1750865528&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-nau-1174883552.jpg?v=1750865534&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-nau-1174883551.jpg?v=1750865531&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ mặc như không mặc không gây cảm giác nặng nề khi vận động | Cấu trúc dệt kim cương tạo hàng ngàn lỗ thở siêu nhỏ giải phóng cơ thể khỏi mồ hôi | Tay raglan đường rã đánh bong đường sườn chòm ra trước giúp tôn lên vóc dáng cân đối | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Thể Thao Ultra Thin The Beginner 002 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-xam-1174883210.jpg?v=1750859881&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-xam-1174883215.jpg?v=1750859896&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-xam-1174883213.jpg?v=1750859890&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-xam-1174883214.jpg?v=1750859893&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-xam-1174883212.jpg?v=1750859887&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-1174882326.jpg?v=1750808536&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-1174882325.jpg?v=1750808533&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-1174882321.jpg?v=1750808522&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-1174882322.jpg?v=1750808525&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-1174882323.jpg?v=1750808528&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ mặc như không mặc không gây cảm giác nặng nề khi vận động | Cấu trúc dệt kim cương tạo hàng ngàn lỗ thở siêu nhỏ giải phóng cơ thể khỏi mồ hôi | Tay raglan đường rã đánh bong đường sườn chòm ra trước giúp tôn lên vóc dáng cân đối | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Thể Thao Ultra Thin The Beginner 002 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-reu-1174883934.jpg?v=1750872961&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-reu-1174883930.jpg?v=1750872848&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-reu-1174883927.jpg?v=1750872736&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-reu-1174883928.jpg?v=1750872842&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-xanh-reu-1174883933.jpg?v=1750872857&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Bề mặt waffle tạo hiệu ứng thị giác đơn giản nhưng không hề đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Dáng rộng màu trung tính cân mọi outfit khi xuống phố | Chất liệu Polyester ưu tiên độ bền cân nhắc nếu bạn thuộc team mỏng nhẹ nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Thoáng Khí Seventy Seven 10 Be Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-be-d-m-1174883618.jpg?v=1750866620&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-be-d-m-1174883625.jpg?v=1750866739&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-be-d-m-1174883620.jpg?v=1750866724&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-be-d-m-1174883621.jpg?v=1750866727&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-be-d-m-1174883619.jpg?v=1750866721&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Be Đậm"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ mặc như không mặc không gây cảm giác nặng nề khi vận động | Cấu trúc dệt kim cương tạo hàng ngàn lỗ thở siêu nhỏ giải phóng cơ thể khỏi mồ hôi | Tay raglan đường rã đánh bong đường sườn chòm ra trước giúp tôn lên vóc dáng cân đối | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Thể Thao Ultra Thin The Beginner 002 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-den-1174883908.jpg?v=1750872605&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-den-1174883912.jpg?v=1750872616&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-den-1174883911.jpg?v=1750872613&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-den-1174883916.jpg?v=1750781527&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m002-den-1174883914.jpg?v=1750781521&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải có kết cấu vững chắc không chỉ bền về mặt vật lý mà còn bền vững về phong cách không bao giờ lỗi mốt | Chi tiết phối đường le mí nổi bật chạy dọc thân áo tạo điểm nhấn thị giác thu hút | Vải dệt gân rib không chỉ mang lại hiệu ứng lạ mắt mà còn giúp tăng độ co giãn và đàn hồi | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Co Giãn Seventy Seven 44 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xanh-den-1174883419.jpg?v=1750863365&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xanh-den-1174883418.jpg?v=1750863361&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xanh-den-1174883414.jpg?v=1750863250&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xanh-den-1174883420.jpg?v=1750863367&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xanh-den-1174883413.jpg?v=1750863248&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-d-m-1174883091.jpg?v=1750786324&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-d-m-1174883087.jpg?v=1750786094&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-d-m-1174883089.jpg?v=1750786100&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-d-m-1174883088.jpg?v=1750786096&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-nau-d-m-1174883090.jpg?v=1750786321&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Xanh Đậu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-u-1174883093.jpg?v=1750786330&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-u-1174883095.jpg?v=1750786333&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-u-1174883097.jpg?v=1750786340&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-u-1174883099.jpg?v=1750786445&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-d-u-1174883094.jpg?v=1750786331&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Đậu"
    },
    {
        "MoTa": "Bề mặt waffle tạo hiệu ứng thị giác đơn giản nhưng không hề đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Dáng rộng màu trung tính cân mọi outfit khi xuống phố | Chất liệu Polyester ưu tiên độ bền cân nhắc nếu bạn thuộc team mỏng nhẹ nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Thoáng Khí Seventy Seven 10 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-tr-ng-1174883606.jpg?v=1750866490&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-tr-ng-1174883600.jpg?v=1750866373&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-tr-ng-1174883607.jpg?v=1750866494&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-tr-ng-1174883602.jpg?v=1750866379&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-tr-ng-1174883603.jpg?v=1750866482&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-kem-1174882413.jpg?v=1750852688&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-kem-1174882412.jpg?v=1750852684&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-kem-1174882416.jpg?v=1750852696&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-kem-1174882415.jpg?v=1750852693&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-kem-1174882414.jpg?v=1750852690&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-h-ng-1174882451.jpg?v=1750788617&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-h-ng-1174882450.jpg?v=1750788613&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-h-ng-1174882449.jpg?v=1750788610&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-h-ng-1174882454.jpg?v=1750853050&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-h-ng-1174882452.jpg?v=1750788620&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Hồng"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Xanh Đá",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-da-1174883199.jpg?v=1750782006&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-da-1174883194.jpg?v=1750859764&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-da-1174883197.jpg?v=1750859773&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-da-1174883196.jpg?v=1750859771&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-xanh-da-1174883195.jpg?v=1750859767&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Đá"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-den-1191799765.jpg?v=1757317811&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-den-1191799764.jpg?v=1757317808&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-den-1191799763.jpg?v=1757317805&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-den-1191799762.jpg?v=1757317802&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-den-1191799761.jpg?v=1757317799&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-tr-ng-1174882372.jpg?v=1750852085&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-tr-ng-1174882371.jpg?v=1750852083&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-tr-ng-1174882370.jpg?v=1750851980&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-tr-ng-1174882374.jpg?v=1750852092&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-tr-ng-1174882369.jpg?v=1750851977&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-d-1174882430.jpg?v=1750852810&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-d-1174882431.jpg?v=1750852814&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-d-1174882428.jpg?v=1750788739&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-d-1174882426.jpg?v=1750788733&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-d-1174882427.jpg?v=1750788737&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": "Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-tr-ng-1174882211.jpg?v=1750807093&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-tr-ng-1174882213.jpg?v=1750807100&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-tr-ng-1174882212.jpg?v=1750807096&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-tr-ng-1174882215.jpg?v=1750807326&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xam-tr-ng-1174882216.jpg?v=1750807328&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": "Vải Waffle với thành phần 95% Polyester và 5% Spandex đảm bảo độ bền và co giãn tốt | Rã vai và thân trước được chạy viền Line Art gân thun tạo điểm nhấn thời trang | Kỹ thuật thêu 2D được áp dụng tạo ra hình ảnh độc đáo và tinh tế cho chiếc áo | Chất liệu Polyester bền nhưng có thể gây cảm giác hơi nóng khi mặc trong thời tiết oi bức",
        "TenSP": "Áo Thun Waffle Co Giãn Seventy Seven 41 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-xam-1174881284.jpg?v=1750792574&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-xam-1174881287.jpg?v=1750797241&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-xam-1174881286.jpg?v=1750792580&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-xam-1174881288.jpg?v=1750797244&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-xam-1174881285.jpg?v=1750792578&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Vải Waffle kết hợp sợi Polyester và Spandex giúp áo thun chống rách và bền bỉ | Thành phần Spandex giúp áo thun co giãn linh hoạt tạo sự thoải mái khi bạn vận động | Thiết kế phối dây viền và bo cổ nổi bật phá vỡ sự nhàm chán cho tủ đồ của bạn | Chất liệu Polyester bền nhưng có thể gây cảm giác hơi nóng khi mặc trong thời tiết oi bức",
        "TenSP": "Áo Thun Waffle Line Art Co Giãn Seventy Seven 46 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-tr-ng-1174882926.jpg?v=1750856891&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-tr-ng-1174882930.jpg?v=1750857001&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-tr-ng-1174882929.jpg?v=1750856900&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-tr-ng-1174882931.jpg?v=1750857004&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-tr-ng-1174882932.jpg?v=1750857007&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Bề mặt waffle tạo hiệu ứng thị giác đơn giản nhưng không hề đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Dáng rộng màu trung tính cân mọi outfit khi xuống phố | Chất liệu Polyester ưu tiên độ bền cân nhắc nếu bạn thuộc team mỏng nhẹ nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Thoáng Khí Seventy Seven 10 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-xam-1174883575.jpg?v=1750865890&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-xam-1174883577.jpg?v=1750865896&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-xam-1174883576.jpg?v=1750865893&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-xam-1174883579.jpg?v=1750866121&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-10-xam-1174883578.jpg?v=1750865899&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Vải Waffle với thành phần 95% Polyester và 5% Spandex đảm bảo độ bền và co giãn tốt | Rã vai và thân trước được chạy viền Line Art gân thun tạo điểm nhấn thời trang | Kỹ thuật thêu 2D được áp dụng tạo ra hình ảnh độc đáo và tinh tế cho chiếc áo | Chất liệu Polyester bền nhưng có thể gây cảm giác hơi nóng khi mặc trong thời tiết oi bức",
        "TenSP": "Áo Thun Waffle Co Giãn Seventy Seven 41 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-den-1174881279.jpg?v=1750792565&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-den-1174881277.jpg?v=1750797139&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-den-1174881278.jpg?v=1750792562&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-den-1174881280.jpg?v=1750792569&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-den-1174881281.jpg?v=1750792571&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Bề mặt vải dệt cấu trúc tổ ong lạ mắt thoáng khí Ai bảo đơn giản là đơn điệu | Độ bền của vải Poly thì khỏi bàn đã bền phom bền màu lại còn ít nhăn nhanh khô chăm sóc siêu dễ | Thiết kế tối giản màu sắc nhã nhặn Cứu tinh ngày lười | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Waffle Thoáng Mát Non Branded 01 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-d-ng-1174882464.jpg?v=1750853291&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-d-ng-1174882460.jpg?v=1750853060&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-d-ng-1174882459.jpg?v=1750853056&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-d-ng-1174882463.jpg?v=1750853288&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-non-branded-01-xanh-d-ng-1174882461.jpg?v=1750853282&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Vải có kết cấu vững chắc không chỉ bền về mặt vật lý mà còn bền vững về phong cách không bao giờ lỗi mốt | Chi tiết phối đường le mí nổi bật chạy dọc thân áo tạo điểm nhấn thị giác thu hút | Vải dệt gân rib không chỉ mang lại hiệu ứng lạ mắt mà còn giúp tăng độ co giãn và đàn hồi | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Co Giãn Seventy Seven 44 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-tr-ng-1174883399.jpg?v=1750862897&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-tr-ng-1174883398.jpg?v=1750862894&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-tr-ng-1174883397.jpg?v=1750862891&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-tr-ng-1174883400.jpg?v=1750862900&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-tr-ng-1174883395.jpg?v=1750862885&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Waffle với thành phần 95% Polyester và 5% Spandex đảm bảo độ bền và co giãn tốt | Rã vai và thân trước được chạy viền Line Art gân thun tạo điểm nhấn thời trang | Kỹ thuật thêu 2D được áp dụng tạo ra hình ảnh độc đáo và tinh tế cho chiếc áo | Chất liệu Polyester bền nhưng có thể gây cảm giác hơi nóng khi mặc trong thời tiết oi bức",
        "TenSP": "Áo Thun Waffle Co Giãn Seventy Seven 41 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-h-ng-1174881272.jpg?v=1750797124&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-h-ng-1174881276.jpg?v=1750797137&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-h-ng-1174881273.jpg?v=1750797127&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-h-ng-1174881274.jpg?v=1750797130&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-41-h-ng-1174881275.jpg?v=1750797134&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Hồng"
    },
    {
        "MoTa": "Vải có kết cấu vững chắc không chỉ bền về mặt vật lý mà còn bền vững về phong cách không bao giờ lỗi mốt | Chi tiết phối đường le mí nổi bật chạy dọc thân áo tạo điểm nhấn thị giác thu hút | Vải dệt gân rib không chỉ mang lại hiệu ứng lạ mắt mà còn giúp tăng độ co giãn và đàn hồi | Vải bền giữ form tốt nhưng trời oi bức thì nên cân nhắc nhé",
        "TenSP": "Áo Thun Tay Ngắn Waffle Co Giãn Seventy Seven 44 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xam-d-m-1174883435.jpg?v=1750863605&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xam-d-m-1174883434.jpg?v=1750863601&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xam-d-m-1174883433.jpg?v=1750863499&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xam-d-m-1174883437.jpg?v=1750863611&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-44-xam-d-m-1174883436.jpg?v=1750863607&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Bề mặt vải đẹp ít nhăn và thoáng mát vượt trội Hoàn hảo cho ngày hè năng động | Màu sắc trung tính kết hợp phom vừa giúp bạn trông thanh lịch và gọn gàng hơn | Cấu trúc dệt vải đôi giúp áo thun bền tốt giữ phom dáng tốt và ít nhăn | Vải Polyester chiếm phần lớn ai là fan 100% Cotton thì nên cân nhắc kĩ trước khi mua nhé",
        "TenSP": "Áo Thun Cổ Tròn Tay Ngắn Pique Ít Nhăn Dáng Vừa Non Branded 46 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-02-den-1174878775.jpg?v=1750822328&width=1946",
            "//yame.vn/cdn/shop/files/21929_thumb_2.jpg?v=1758190491&width=1946",
            "//yame.vn/cdn/shop/files/21929_thumb_3.jpg?v=1758190492&width=1946",
            "//yame.vn/cdn/shop/files/21929_thumb_4.jpg?v=1758190492&width=1946",
            "//yame.vn/cdn/shop/files/21929_thumb_5.jpg?v=1758190491&width=1946"
        ],
        "GiaBan": 113100.0,
        "GiaMua": 87000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Áo co giãn đa chiều vượt trội cho phép bạn tự do thực hiện những động tác phức tạp | Thiết kế sườn liền mạch cùng bề mặt vải siêu mềm mịn mang lại cảm giác thoải mái | Phom áo ôm vừa vặn kết hợp tay raglan giúp tôn lên bờ vai và cơ ngực rắn rỏi | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun Thể Thao Ultra Stretch The Trainer 004 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-004-tr-ng-1178529222.jpg?v=1752732842&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-004-tr-ng-1178529217.jpg?v=1752732608&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-004-tr-ng-1178529216.jpg?v=1752732604&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-004-tr-ng-1178529215.jpg?v=1752732602&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-004-tr-ng-1178529214.jpg?v=1752732599&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải mang đến cảm giác mềm mại mịn màng thoáng mát và co giãn tốt mặc siêu thích | Form rộng cổ tròn kết hợp với slogan ấn tượng tạo nên phong cách thời trang hiện đại | Chữ thêu 2D trước ngực với thông điệp LIFE ISNT PERFECT BUT YOUR OUTFIT CAN BE | Nên giặt tay hoặc sử dụng túi giặt để bảo vệ bề mặt vải da lộn và hình thêu",
        "TenSP": "Áo Thun Suede Mềm Mịn The Weekend 014 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m14-xam-1174883787.jpg?v=1750869967&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m14-xam-1174883786.jpg?v=1750869964&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m14-xam-1174883785.jpg?v=1750869961&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m14-xam-1174883788.jpg?v=1750869970&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m14-xam-1174883782.jpg?v=1750869732&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Bề mặt vải đẹp ít nhăn và thoáng mát vượt trội Hoàn hảo cho ngày hè năng động | Màu sắc trung tính kết hợp phom vừa giúp bạn trông thanh lịch và gọn gàng hơn | Cấu trúc dệt vải đôi giúp áo thun bền tốt giữ phom dáng tốt và ít nhăn | Vải Polyester chiếm phần lớn ai là fan 100% Cotton thì nên cân nhắc kĩ trước khi mua nhé",
        "TenSP": "Áo Thun Bird’s Eye Pique Ít Nhăn Non Branded 46 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-02-be-1174883351.jpg?v=1750862057&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-02-be-1174883350.jpg?v=1750862054&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-02-be-1174883347.jpg?v=1750862044&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-02-be-1174883352.jpg?v=1750862059&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-02-be-1174883349.jpg?v=1750862051&width=1946"
        ],
        "GiaBan": 113100.0,
        "GiaMua": 87000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chất liệu Ultra Stretch siêu co giãn hỗ trợ tối đa cho các bài tập thân trên | Thiết kế phối lưới thông minh ở hai bên sườn và dưới cánh tay giúp thoát mồ hôi nhanh | Phom áo Slim-fit kết hợp cùng tay Raglan không chỉ tôn dáng mà còn mang lại sự linh hoạt | Bí quyết giữ phom bền lâu luôn giặt với nước lạnh và phơi trong bóng râm",
        "TenSP": "Áo Thun Thể Thao Ultra Stretch The Trainer 003 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-003-xam-1177437097.jpg?v=1752216009&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-003-xam-1177437096.jpg?v=1752216006&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-003-xam-1177437093.jpg?v=1752215898&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-003-xam-1177437092.jpg?v=1752215896&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-trainer-003-xam-1177437089.jpg?v=1752215887&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Vải Waffle kết hợp sợi Polyester và Spandex giúp áo thun chống rách và bền bỉ | Thành phần Spandex giúp áo thun co giãn linh hoạt tạo sự thoải mái khi bạn vận động | Thiết kế phối dây viền và bo cổ nổi bật phá vỡ sự nhàm chán cho tủ đồ của bạn | Chất liệu Polyester bền nhưng có thể gây cảm giác hơi nóng khi mặc trong thời tiết oi bức",
        "TenSP": "Áo Thun Waffle Line Art Co Giãn Seventy Seven 46 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-den-1174882955.jpg?v=1750857488&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-den-1174882950.jpg?v=1750857373&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-den-1174882951.jpg?v=1750857376&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-den-1174882956.jpg?v=1750857491&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-46-den-1174882952.jpg?v=1750857380&width=1946"
        ],
        "GiaBan": 230100.0,
        "GiaMua": 177000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu co giãn 4 chiều giúp dễ dàng vận động mà không bị gò bó khó chịu | Giữ cho cơ thể luôn khô ráo và thoáng mát phù hợp cho ngày hè năng động | Vải 92% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi để áo đẹp hơn",
        "TenSP": "Áo Thun Cotton Line Art Co Giãn Seventy Seven 04 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-den-1174883133.jpg?v=1750782373&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-den-1174883134.jpg?v=1750782377&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-den-1174883131.jpg?v=1750782368&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-den-1174883129.jpg?v=1750782361&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-seventy-seven-04-den-1174883135.jpg?v=1750782380&width=1946"
        ],
        "GiaBan": 204100.0,
        "GiaMua": 157000,
        "TrangThai": "ACTIVE",
        "MaDM": "1b28bb7b-beb3-4d04-ba02-b984315b3c26",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Mặc như không mặc áo siêu nhẹ thoáng mát không gây cảm giác nặng nề khi vận động | Công nghệ Ultra Thin và cấu trúc dệt pique giúp mồ hôi nhanh chóng bay hơi khô ráo | Chòm vai cong đường rã đánh bong ở thân trước và sau giúp tôn dáng tạo hiệu ứng cân đối | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Tay Dài Thể Thao Ultra Thin The Beginner 003 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-den-1174883186.jpg?v=1750859644&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-den-1174883185.jpg?v=1750859641&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-den-1174883191.jpg?v=1750859659&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-den-1174883184.jpg?v=1750782140&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-den-1174883183.jpg?v=1750782137&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu dày dặn giữ ấm tốt tạo cảm giác thoải mái phù hợp tiết trời se lạnh | Chất liệu Cotton Blend giúp áo bền màu và ít bị xù lông sau nhiều lần giặt | Kết hợp thêu họa tiết 2D và 3D nổi bật mang đến vẻ ngoài năng động cá tính | Không nên dùng máy sấy khô quần áo giặt máy ở điều kiện bình thường là ổn áp nhất]",
        "TenSP": "Áo Thun Sweater Cotton Giữ Ấm No Style M20 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-be-1174883770.jpg?v=1750869376&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-be-1174883766.jpg?v=1750869365&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-be-1174883769.jpg?v=1750869373&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-be-1174883763.jpg?v=1750869256&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-be-1174883767.jpg?v=1750869367&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Be"
    },
    {
        "MoTa": "Giúp vải luôn mát mẻ thoáng khí không gây bí bách khi mặc cực kỳ dễ chịu | Sợi Cotton High TPI siêu mềm mịn co giãn 4 chiều mang lại sự thoải mái tối đa | Vải Mini Zurry 4 chiều kết hợp công nghệ Cool Touch đảm bảo chất lượng và độ bền cao | Vải 94% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Áo Thun Sweater Mềm Mịn Mát The Minimalist 008 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-den-1174883616.jpg?v=1750866616&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-den-1174883614.jpg?v=1750866611&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-den-1174883615.jpg?v=1750866614&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-den-1174883611.jpg?v=1750866602&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-den-1174883612.jpg?v=1750866605&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu dày dặn giữ ấm tốt tạo cảm giác thoải mái phù hợp tiết trời se lạnh | Chất liệu Cotton Blend giúp áo bền màu và ít bị xù lông sau nhiều lần giặt | Kết hợp thêu họa tiết 2D và 3D nổi bật mang đến vẻ ngoài năng động cá tính | Không nên dùng máy sấy khô quần áo giặt máy ở điều kiện bình thường là ổn áp nhất]",
        "TenSP": "Áo Thun Sweater Cotton Giữ Ấm No Style M20 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-d-1174883777.jpg?v=1750869494&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-d-1174883779.jpg?v=1750869724&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-d-1174883780.jpg?v=1750869726&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-d-1174883776.jpg?v=1750869491&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-d-1174883774.jpg?v=1750869486&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": "Giúp vải luôn mát mẻ thoáng khí không gây bí bách khi mặc cực kỳ dễ chịu | Sợi Cotton High TPI siêu mềm mịn co giãn 4 chiều mang lại sự thoải mái tối đa | Vải Mini Zurry 4 chiều kết hợp công nghệ Cool Touch đảm bảo chất lượng và độ bền cao | Vải 94% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Áo Thun Sweater Mềm Mịn Mát The Minimalist 008 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-xam-1174883656.jpg?v=1750867337&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-xam-1174883660.jpg?v=1750867570&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-xam-1174883661.jpg?v=1750867571&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-xam-1174883654.jpg?v=1750867331&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-xam-1174883659.jpg?v=1750867564&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Mặc như không mặc áo siêu nhẹ thoáng mát không gây cảm giác nặng nề khi vận động | Công nghệ Ultra Thin và cấu trúc dệt pique giúp mồ hôi nhanh chóng bay hơi khô ráo | Chòm vai cong đường rã đánh bong ở thân trước và sau giúp tôn dáng tạo hiệu ứng cân đối | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Tay Dài Thể Thao Ultra Thin The Beginner 003 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xanh-xam-1174883106.jpg?v=1750783090&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xanh-xam-1174883105.jpg?v=1750783087&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xanh-xam-1174883104.jpg?v=1750783084&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xanh-xam-1174883103.jpg?v=1750783081&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xanh-xam-1174883123.jpg?v=1750782495&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": "Mặc như không mặc áo siêu nhẹ thoáng mát không gây cảm giác nặng nề khi vận động | Công nghệ Ultra Thin và cấu trúc dệt pique giúp mồ hôi nhanh chóng bay hơi khô ráo | Chòm vai cong đường rã đánh bong ở thân trước và sau giúp tôn dáng tạo hiệu ứng cân đối | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư áo",
        "TenSP": "Áo Thun Tay Dài Thể Thao Ultra Thin The Beginner 003 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xam-1174883141.jpg?v=1750782733&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xam-1174883140.jpg?v=1750782730&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xam-1174883146.jpg?v=1750782847&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xam-1174883139.jpg?v=1750782728&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-the-beginner-m003-xam-1174883145.jpg?v=1750782844&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất liệu dày dặn giữ ấm tốt tạo cảm giác thoải mái phù hợp tiết trời se lạnh | Chất liệu Cotton Blend giúp áo bền màu và ít bị xù lông sau nhiều lần giặt | Kết hợp thêu họa tiết 2D và 3D nổi bật mang đến vẻ ngoài năng động cá tính | Không nên dùng máy sấy khô quần áo giặt máy ở điều kiện bình thường là ổn áp nhất]",
        "TenSP": "Áo Thun Sweater Cotton Giữ Ấm No Style M20 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-den-1174883825.jpg?v=1750870696&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-den-1174883823.jpg?v=1750870691&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-den-1174883824.jpg?v=1750870694&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-den-1174883818.jpg?v=1750870575&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-den-1174883820.jpg?v=1750870683&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu dày dặn giữ ấm tốt tạo cảm giác thoải mái phù hợp tiết trời se lạnh | Chất liệu Cotton Blend giúp áo bền màu và ít bị xù lông sau nhiều lần giặt | Kết hợp thêu họa tiết 2D và 3D nổi bật mang đến vẻ ngoài năng động cá tính | Không nên dùng máy sấy khô quần áo giặt máy ở điều kiện bình thường là ổn áp nhất]",
        "TenSP": "Áo Thun Sweater Cotton Giữ Ấm No Style M20 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-nau-1174883755.jpg?v=1750869011&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-nau-1174883760.jpg?v=1750869250&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-nau-1174883759.jpg?v=1750869247&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-nau-1174883754.jpg?v=1750869009&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-nau-1174883761.jpg?v=1750869252&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Chất liệu dày dặn giữ ấm tốt tạo cảm giác thoải mái phù hợp tiết trời se lạnh | Chất liệu Cotton Blend giúp áo bền màu và ít bị xù lông sau nhiều lần giặt | Kết hợp thêu họa tiết 2D và 3D nổi bật mang đến vẻ ngoài năng động cá tính | Không nên dùng máy sấy khô quần áo giặt máy ở điều kiện bình thường là ổn áp nhất]",
        "TenSP": "Áo Thun Sweater Cotton Giữ Ấm No Style M20 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-xam-1174883752.jpg?v=1750869004&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-xam-1174883749.jpg?v=1750868893&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-xam-1174883751.jpg?v=1750869002&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-xam-1174883746.jpg?v=1750868885&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m20-xam-1174883745.jpg?v=1750868881&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Vải Minizury (94% Cotton 6% Spandex) mềm mại co giãn tốt thoải mái khi mặc | Chiếc áo này phù hợp cho mọi điều kiện thời tiết từ nắng đến gió sáng đến tối | Thêu đắp giống 3D chừa rìa vải tạo sự sinh động cho hình thêu tạo điểm nhấn cá tính | Nên lộn trái sản phẩm khi giặt và phơi để bảo vệ hình thêu và màu sắc áo",
        "TenSP": "Áo Thun Sweater Cotton Co Giãn No Style M19 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-den-1174883676.jpg?v=1750867807&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-den-1174883678.jpg?v=1750867814&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-den-1174883677.jpg?v=1750867810&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-den-1174883679.jpg?v=1750867816&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-den-1174883673.jpg?v=1750867700&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Minizury (94% Cotton 6% Spandex) mềm mại co giãn tốt thoải mái khi mặc | Chiếc áo này phù hợp cho mọi điều kiện thời tiết từ nắng đến gió sáng đến tối | Thêu đắp giống 3D chừa rìa vải tạo sự sinh động cho hình thêu tạo điểm nhấn cá tính | Nên lộn trái sản phẩm khi giặt và phơi để bảo vệ hình thêu và màu sắc áo",
        "TenSP": "Áo Thun Sweater Cotton Co Giãn No Style M19 Xám Ghi",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-xam-ghi-1174883681.jpg?v=1750867921&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-xam-ghi-1174883687.jpg?v=1750867940&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-xam-ghi-1174883685.jpg?v=1750867933&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-xam-ghi-1174883680.jpg?v=1750867819&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-no-style-m19-xam-ghi-1174883682.jpg?v=1750867924&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám Ghi"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Sweater Raglan No Style M16 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023483_thumb_1.jpg?v=1758704737&width=1946",
            "//yame.vn/cdn/shop/files/0023483_thumb_2.jpg?v=1758704737&width=1946",
            "//yame.vn/cdn/shop/files/0023483_thumb_3.jpg?v=1758704737&width=1946",
            "//yame.vn/cdn/shop/files/0023483_thumb_4.jpg?v=1758704737&width=1946",
            "//yame.vn/cdn/shop/files/0023483_thumb_5.jpg?v=1758704737&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Sweater Cổ Khóa Kéo No Style M41 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133568.jpg?v=1758594479&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133567.jpg?v=1758594476&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133566.jpg?v=1758594373&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133565.jpg?v=1758594370&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-xanh-den-1194133564.jpg?v=1758594367&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Giúp vải luôn mát mẻ thoáng khí không gây bí bách khi mặc cực kỳ dễ chịu | Sợi Cotton High TPI siêu mềm mịn co giãn 4 chiều mang lại sự thoải mái tối đa | Vải Mini Zurry 4 chiều kết hợp công nghệ Cool Touch đảm bảo chất lượng và độ bền cao | Vải 94% Cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Áo Thun Sweater Mềm Mịn Mát The Minimalist 008 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-tr-ng-1174883631.jpg?v=1750866854&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-tr-ng-1174883634.jpg?v=1750866961&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-tr-ng-1174883633.jpg?v=1750866859&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-tr-ng-1174883632.jpg?v=1750866857&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-cool-touch-05-tr-ng-1174883627.jpg?v=1750866842&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M37 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023406_thumb_1.jpg?v=1758868349&width=1946",
            "//yame.vn/cdn/shop/files/0023406_thumb_2.jpg?v=1758868349&width=1946",
            "//yame.vn/cdn/shop/files/0023406_thumb_3.jpg?v=1758868349&width=1946",
            "//yame.vn/cdn/shop/files/0023406_thumb_4.jpg?v=1758868349&width=1946",
            "//yame.vn/cdn/shop/files/0023406_thumb_5.jpg?v=1758868349&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M37 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023405_thumb_1.jpg?v=1758868248&width=1946",
            "//yame.vn/cdn/shop/files/0023405_thumb_2.jpg?v=1758868248&width=1946",
            "//yame.vn/cdn/shop/files/0023405_thumb_3.jpg?v=1758868248&width=1946",
            "//yame.vn/cdn/shop/files/0023405_thumb_4.jpg?v=1758868248&width=1946",
            "//yame.vn/cdn/shop/files/0023405_thumb_5.jpg?v=1758868248&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M37 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023404thumb1.jpg?v=1758868137&width=1946",
            "//yame.vn/cdn/shop/files/0023404thumb2.jpg?v=1758868137&width=1946",
            "//yame.vn/cdn/shop/files/0023404thumb3.jpg?v=1758868137&width=1946",
            "//yame.vn/cdn/shop/files/0023404thumb4.jpg?v=1758868137&width=1946",
            "//yame.vn/cdn/shop/files/0023404thumb5.jpg?v=1758868137&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Tay Dài Seventy Seven 20 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023251_thumb_1.jpg?v=1758861853&width=1946",
            "//yame.vn/cdn/shop/files/0023251_thumb_2.jpg?v=1758861853&width=1946",
            "//yame.vn/cdn/shop/files/0023251_thumb_3.jpg?v=1758861853&width=1946",
            "//yame.vn/cdn/shop/files/0023251_thumb_4.jpg?v=1758861853&width=1946",
            "//yame.vn/cdn/shop/files/0023248AoSweater-V_a5475.jpg?v=1758861853&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Tay Dài Seventy Seven 20 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023250_thumb_1.jpg?v=1758860636&width=1946",
            "//yame.vn/cdn/shop/files/0023250_thumb_2.jpg?v=1758860636&width=1946",
            "//yame.vn/cdn/shop/files/0023250_thumb_3.jpg?v=1758860636&width=1946",
            "//yame.vn/cdn/shop/files/0023250_thumb_4.jpg?v=1758860636&width=1946",
            "//yame.vn/cdn/shop/files/0023248AoSweater-V_a5475.jpg?v=1758861853&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Tay Dài Seventy Seven 20 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023249_thumb_1.jpg?v=1758860339&width=1946",
            "//yame.vn/cdn/shop/files/0023249_thumb_2.jpg?v=1758860339&width=1946",
            "//yame.vn/cdn/shop/files/0023249_thumb_3.jpg?v=1758860339&width=1946",
            "//yame.vn/cdn/shop/files/0023249_thumb_4.jpg?v=1758860339&width=1946",
            "//yame.vn/cdn/shop/files/0023248AoSweater-V_a5475.jpg?v=1758861853&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Tay Dài Seventy Seven 20 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023248thumb1.jpg?v=1758859676&width=1946",
            "//yame.vn/cdn/shop/files/0023248thumb2.jpg?v=1758859676&width=1946",
            "//yame.vn/cdn/shop/files/0023248thumb3.jpg?v=1758859676&width=1946",
            "//yame.vn/cdn/shop/files/0023248thumb4.jpg?v=1758859676&width=1946",
            "//yame.vn/cdn/shop/files/0023248AoSweater-V_a5475.jpg?v=1758861853&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Cotton Phối Màu Seventy Seven 16 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023236_thumb_1.jpg?v=1758858693&width=1946",
            "//yame.vn/cdn/shop/files/0023236_thumb_2.jpg?v=1758858693&width=1946",
            "//yame.vn/cdn/shop/files/0023236_thumb_3.jpg?v=1758858693&width=1946",
            "//yame.vn/cdn/shop/files/0023236_thumb_4.jpg?v=1758858693&width=1946",
            "//yame.vn/cdn/shop/files/0023236_thumb_5.jpg?v=1758858693&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Cotton Phối Màu Seventy Seven 16 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023235_thumb_1.jpg?v=1758858561&width=1946",
            "//yame.vn/cdn/shop/files/0023235_thumb_2.jpg?v=1758858561&width=1946",
            "//yame.vn/cdn/shop/files/0023235_thumb_3.jpg?v=1758858561&width=1946",
            "//yame.vn/cdn/shop/files/0023235_thumb_4.jpg?v=1758858561&width=1946",
            "//yame.vn/cdn/shop/files/0023235_thumb_5.jpg?v=1758858561&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Cotton Phối Màu Seventy Seven 16 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023234_thumb_1.jpg?v=1758858459&width=1946",
            "//yame.vn/cdn/shop/files/0023234_thumb_2.jpg?v=1758858459&width=1946",
            "//yame.vn/cdn/shop/files/0023234_thumb_3.jpg?v=1758858459&width=1946",
            "//yame.vn/cdn/shop/files/0023234_thumb_4.jpg?v=1758858459&width=1946",
            "//yame.vn/cdn/shop/files/0023234_thumb_5.jpg?v=1758858459&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Cotton Phối Màu Seventy Seven 16 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023232thumb1.jpg?v=1758858350&width=1946",
            "//yame.vn/cdn/shop/files/0023232thumb2.jpg?v=1758858350&width=1946",
            "//yame.vn/cdn/shop/files/0023232thumb3.jpg?v=1758858350&width=1946",
            "//yame.vn/cdn/shop/files/0023232thumb4.jpg?v=1758858350&width=1946",
            "//yame.vn/cdn/shop/files/0023232thumb5.jpg?v=1758858350&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Line Art Seventy Seven 15 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023229thumb1.jpg?v=1758858165&width=1946",
            "//yame.vn/cdn/shop/files/0023229Thumb2.jpg?v=1758858165&width=1946",
            "//yame.vn/cdn/shop/files/0023229Thumb3.jpg?v=1758858165&width=1946",
            "//yame.vn/cdn/shop/files/0023229Thumb4.jpg?v=1758858165&width=1946",
            "//yame.vn/cdn/shop/files/0023229Thumb5.jpg?v=1758858165&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Sweater Raglan No Style M16 Xanh Lam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023482_thumb_1.jpg?v=1758704635&width=1946",
            "//yame.vn/cdn/shop/files/0023482_thumb_2.jpg?v=1758704635&width=1946",
            "//yame.vn/cdn/shop/files/0023482_thumb_3.jpg?v=1758704635&width=1946",
            "//yame.vn/cdn/shop/files/0023482_thumb_5.jpg?v=1758704635&width=1946",
            "//yame.vn/cdn/shop/files/0023482_thumb_4.jpg?v=1758704635&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Lam"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Sweater Raglan No Style M16 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023481_thumb_1.jpg?v=1758704516&width=1946",
            "//yame.vn/cdn/shop/files/0023481_thumb_2.jpg?v=1758704516&width=1946",
            "//yame.vn/cdn/shop/files/0023481_thumb_3.jpg?v=1758704516&width=1946",
            "//yame.vn/cdn/shop/files/0023481_thumb_4.jpg?v=1758704516&width=1946",
            "//yame.vn/cdn/shop/files/0023481_thumb_5.jpg?v=1758704516&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Sweater Raglan No Style M16 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023480thumb1.jpg?v=1758704124&width=1946",
            "//yame.vn/cdn/shop/files/0023480thumb2.jpg?v=1758704124&width=1946",
            "//yame.vn/cdn/shop/files/0023480thumb3.jpg?v=1758704124&width=1946",
            "//yame.vn/cdn/shop/files/0023480thumb4.jpg?v=1758704124&width=1946",
            "//yame.vn/cdn/shop/files/0023480thumb5.jpg?v=1758704124&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Phối Màu No Style M17 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-xam-1194133372.jpg?v=1758592441&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-xam-1194133374.jpg?v=1758592447&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-xam-1194133373.jpg?v=1758592445&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-xam-1194133370.jpg?v=1758592435&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-xam-1194133371.jpg?v=1758592438&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Phối Màu No Style M17 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-nau-1194133381.jpg?v=1758592567&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-nau-1194133380.jpg?v=1758592564&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-nau-1194133379.jpg?v=1758592561&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-nau-1194133378.jpg?v=1758592557&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-nau-1194133377.jpg?v=1758592554&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Phối Màu No Style M17 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-den-1194133386.jpg?v=1758592682&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-den-1194133385.jpg?v=1758592679&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-den-1194133384.jpg?v=1758592676&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-den-1194133383.jpg?v=1758592573&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m17-den-1194133382.jpg?v=1758592570&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Phối Màu No Style M15 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-den-1194133392.jpg?v=1758592798&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-den-1194133391.jpg?v=1758592796&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-den-1194133390.jpg?v=1758592693&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-den-1194133389.jpg?v=1758592691&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-tr-ng-1194133388.jpg?v=1758592688&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Phối Màu No Style M15 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-kem-1194133397.jpg?v=1758592813&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-kem-1194133396.jpg?v=1758592810&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-kem-1194133395.jpg?v=1758592807&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-kem-1194133394.jpg?v=1758592804&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-kem-1194133393.jpg?v=1758592801&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Kem"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Thun Tay Dài Phối Màu No Style M15 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-tr-ng-1194133402.jpg?v=1758592928&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-tr-ng-1194133401.jpg?v=1758592925&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-tr-ng-1194133400.jpg?v=1758592922&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-tr-ng-1194133399.jpg?v=1758592919&width=1946",
            "//yame.vn/cdn/shop/files/ao-thun-tay-dai-ph-i-mau-no-style-m15-tr-ng-1194133398.jpg?v=1758592915&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Nhanh khô thoáng khí co giãn tốt",
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M35 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-nau-nh-t-1194133415.jpg?v=1758593048&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-nau-nh-t-1194133414.jpg?v=1758593044&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-nau-nh-t-1194133413.jpg?v=1758593041&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-nau-nh-t-1194133412.jpg?v=1758593038&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-nau-nh-t-1194133411.jpg?v=1758593035&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Nhanh khô thoáng khí co giãn tốt",
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M35 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-xanh-reu-1194133420.jpg?v=1758593161&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-xanh-reu-1194133419.jpg?v=1758593158&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-xanh-reu-1194133418.jpg?v=1758593155&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-xanh-reu-1194133417.jpg?v=1758593053&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-xanh-reu-1194133416.jpg?v=1758593050&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Nhanh khô thoáng khí co giãn tốt",
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M35 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-den-1194133425.jpg?v=1758593274&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-den-1194133424.jpg?v=1758593173&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-den-1194133423.jpg?v=1758593171&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-den-1194133421.jpg?v=1758593164&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m35-den-1194133422.jpg?v=1758593167&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Nhanh khô thoáng khí co giãn tốt",
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M36 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-d-1194133433.jpg?v=1758593398&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-d-1194133432.jpg?v=1758593395&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-d-1194133431.jpg?v=1758593293&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-d-1194133430.jpg?v=1758593290&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-d-1194133429.jpg?v=1758593287&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": "Nhanh khô thoáng khí co giãn tốt",
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M36 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-den-1194133449.jpg?v=1758593515&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-den-1194133448.jpg?v=1758593413&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-den-1194133447.jpg?v=1758593411&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-den-1194133446.jpg?v=1758593407&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-den-1194133445.jpg?v=1758593405&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Nhanh khô thoáng khí co giãn tốt",
        "TenSP": "Áo Polo Sweater Cotton Phối Màu No Style M36 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-nau-1194133455.jpg?v=1758593534&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-nau-1194133454.jpg?v=1758593531&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-nau-1194133453.jpg?v=1758593528&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-nau-1194133452.jpg?v=1758593524&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-cotton-ph-i-mau-no-style-m36-nau-1194133451.jpg?v=1758593521&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Mềm mại bề mặt đẹp ít nhăn thoáng khí",
        "TenSP": "Áo Polo Sweater Cổ Khóa Kéo No Style M38 Xám Xi Măng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-xi-mang-1194133468.jpg?v=1758593758&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-xi-mang-1194133467.jpg?v=1758593755&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-xi-mang-1194133466.jpg?v=1758593653&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-xi-mang-1194133465.jpg?v=1758593650&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-xi-mang-1194133464.jpg?v=1758593649&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám Xi Măng"
    },
    {
        "MoTa": "Mềm mại bề mặt đẹp ít nhăn thoáng khí",
        "TenSP": "Áo Polo Sweater Cổ Khóa Kéo No Style M38 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-1194133479.jpg?v=1758593878&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-1194133478.jpg?v=1758593875&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-1194133477.jpg?v=1758593773&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-1194133476.jpg?v=1758593770&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xam-1194133475.jpg?v=1758593768&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Mềm mại bề mặt đẹp ít nhăn thoáng khí",
        "TenSP": "Áo Polo Sweater Cổ Khóa Kéo No Style M38 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xanh-den-1194133495.jpg?v=1758594000&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xanh-den-1194133494.jpg?v=1758593995&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xanh-den-1194133493.jpg?v=1758593893&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xanh-den-1194133492.jpg?v=1758593891&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m38-xanh-den-1194133491.jpg?v=1758593887&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Thoáng khí nhanh khô ít nhăn bền màu",
        "TenSP": "Áo Polo Tay Dài Vải Cotna Thoáng Khí No Style M39 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-be-1194133509.jpg?v=1758594118&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-be-1194133508.jpg?v=1758594115&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-be-1194133507.jpg?v=1758594013&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-be-1194133506.jpg?v=1758594011&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-be-1194133505.jpg?v=1758594008&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Be"
    },
    {
        "MoTa": "Thoáng khí nhanh khô ít nhăn bền màu",
        "TenSP": "Áo Polo Tay Dài Vải Cotna Thoáng Khí No Style M39 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-xam-1194133549.jpg?v=1758594133&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-xam-1194133548.jpg?v=1758594130&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-xam-1194133547.jpg?v=1758594128&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-xam-1194133546.jpg?v=1758594124&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-tay-dai-v-i-cotna-thoang-khi-no-style-m39-xam-1194133545.jpg?v=1758594122&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Áo Polo Sweater Cổ Khóa Kéo No Style M41 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-be-1194133558.jpg?v=1758594358&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-be-1194133557.jpg?v=1758594355&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-be-1194133556.jpg?v=1758594253&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-be-1194133555.jpg?v=1758594250&width=1946",
            "//yame.vn/cdn/shop/files/ao-polo-sweater-c-khoa-keo-no-style-m41-be-1194133554.jpg?v=1758594248&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "7cb9376a-a172-47b5-b0a3-2ee4cb238385",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Chống Sốc #Y2010 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-02-den-1174880986.jpg?v=1750793526&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-02-den-1174880985.jpg?v=1750793523&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-02-den-1174880990.jpg?v=1750793537&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-02-den-1174880992.jpg?v=1750794133&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-02-den-1174880989.jpg?v=1750793535&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Trượt Nước Đai Gắn Vali #Y2010 M01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-m01-den-1174881163.jpg?v=1750795816&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-den-1174881160.jpg?v=1750795806&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-den-1174881164.jpg?v=1750795818&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-den-1174881159.jpg?v=1750795803&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-den-1174881162.jpg?v=1750795813&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Nhiều Ngăn Khởi Nguyên 16 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-16-den-1174881046.jpg?v=1750793292&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-16-den-1174881045.jpg?v=1750793287&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-16-den-1174881043.jpg?v=1750793282&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-16-den-1174881044.jpg?v=1750793285&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-16-den-1174881042.jpg?v=1750795097&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Trượt Nước Đai Gắn Vali #Y2010 M01 Xanh Đậu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-u-1174881124.jpg?v=1750850177&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-u-1174881127.jpg?v=1750850284&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-u-1174881121.jpg?v=1750850168&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-u-1174881126.jpg?v=1750850281&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-u-1174881120.jpg?v=1750850164&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Xanh Đậu"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Chống Sốc Khởi Nguyên 13 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-13-den-1174881028.jpg?v=1750794964&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-13-den-1174881023.jpg?v=1750794849&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-13-den-1174881027.jpg?v=1750794961&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-13-den-1174881026.jpg?v=1750794859&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-13-den-1174881025.jpg?v=1750794855&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Chống Sốc Khởi Nguyên 15 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-15-den-1174881013.jpg?v=1750794726&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-15-den-1174881012.jpg?v=1750794723&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-15-den-1174881017.jpg?v=1750794738&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-15-den-1174881016.jpg?v=1750794735&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-15-den-1174881018.jpg?v=1750794742&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Trượt Nước Đai Gắn Vali #Y2010 M01 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xam-1174881173.jpg?v=1750795939&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xam-1174881171.jpg?v=1750795933&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xam-1174881169.jpg?v=1750795929&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xam-1174881172.jpg?v=1750795937&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xam-1174881170.jpg?v=1750795930&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Với kích thước 42x30x13cm",
        "TenSP": "Balo Essential Nhiều Ngăn Chống Sốc Khởi Nguyên 11 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-11-den-1174881031.jpg?v=1750794970&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-11-den-1174881030.jpg?v=1750794967&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-11-den-1174881032.jpg?v=1750794974&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-11-den-1174881037.jpg?v=1750795088&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-11-den-1174881035.jpg?v=1750795082&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Trượt Nước Đai Gắn Vali #Y2010 M01 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-m01-nau-1174881151.jpg?v=1750850642&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-nau-1174881150.jpg?v=1750850540&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-nau-1174881152.jpg?v=1750850646&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-nau-1174881148.jpg?v=1750850534&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-nau-1174881155.jpg?v=1750850653&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Trượt Nước Đai Gắn Vali #Y2010 M01 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-ng-1174881145.jpg?v=1750850528&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-ng-1174881142.jpg?v=1750850419&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-ng-1174881146.jpg?v=1750850530&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-ng-1174881143.jpg?v=1750850522&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-xanh-d-ng-1174881139.jpg?v=1750850411&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Trượt Nước Đai Gắn Vali #Y2010 M01 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-m01-kem-1174881131.jpg?v=1750850290&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-kem-1174881133.jpg?v=1750850297&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-kem-1174881135.jpg?v=1750850401&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-kem-1174881136.jpg?v=1750850404&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-m01-kem-1174881134.jpg?v=1750850299&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Kích thước 42x29x12cm dễ dàng mang theo hàng ngày",
        "TenSP": "Balo Essential Chống Sốc Khởi Nguyên 10 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-10-den-1174880979.jpg?v=1750794017&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-10-den-1174880978.jpg?v=1750794013&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-10-den-1174880983.jpg?v=1750794128&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-10-den-1174880982.jpg?v=1750794125&width=1946",
            "//yame.vn/cdn/shop/files/balo-kh-i-nguyen-10-den-1174880981.jpg?v=1750794122&width=1946"
        ],
        "GiaBan": 324870.0,
        "GiaMua": 249900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Kẻ Caro Nhiều Ngăn #Y2010 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-y2010-03-den-1174881050.jpg?v=1750793300&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-03-den-1174881049.jpg?v=1750793297&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-03-den-1174881056.jpg?v=1750795214&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-03-den-1174881055.jpg?v=1750795212&width=1946",
            "//yame.vn/cdn/shop/files/balo-y2010-03-den-1174881054.jpg?v=1750795208&width=1946"
        ],
        "GiaBan": 406770.0,
        "GiaMua": 312900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Essential Caro Chống Sốc Nguyên Bản M7 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-nguyen-b-n-m7-den-1174880997.jpg?v=1750794246&width=1946",
            "//yame.vn/cdn/shop/files/balo-nguyen-b-n-m7-den-1174880996.jpg?v=1750794242&width=1946",
            "//yame.vn/cdn/shop/files/balo-nguyen-b-n-m7-den-1174881001.jpg?v=1750794256&width=1946",
            "//yame.vn/cdn/shop/files/balo-nguyen-b-n-m7-den-1174881000.jpg?v=1750794254&width=1946",
            "//yame.vn/cdn/shop/files/balo-nguyen-b-n-m7-den-1174880998.jpg?v=1750794248&width=1946"
        ],
        "GiaBan": 297570.0,
        "GiaMua": 228900,
        "TrangThai": "ACTIVE",
        "MaDM": "45c483e4-6bd7-489c-9e45-ac11451ca94b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Smart Cao Cấp Nhiều Ngăn Ẩn First Class 04 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-04-den-1174881117.jpg?v=1750850161&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-04-den-1174881115.jpg?v=1750850056&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-04-den-1174881111.jpg?v=1750850044&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-04-den-1174881113.jpg?v=1750850050&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-04-den-1174881112.jpg?v=1750850047&width=1946"
        ],
        "GiaBan": 452270.0,
        "GiaMua": 347900,
        "TrangThai": "ACTIVE",
        "MaDM": "31aa893c-320f-4be1-a0e7-a99ec34c2e99",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Smart Cao Cấp Cổng Sạc Tích Hợp First Class 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-02-den-1174881106.jpg?v=1750849933&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-02-den-1174881107.jpg?v=1750849937&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-02-den-1174881099.jpg?v=1750849813&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-02-den-1174881108.jpg?v=1750849939&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-02-den-1174881103.jpg?v=1750849925&width=1946"
        ],
        "GiaBan": 816270.0,
        "GiaMua": 627900,
        "TrangThai": "ACTIVE",
        "MaDM": "31aa893c-320f-4be1-a0e7-a99ec34c2e99",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Balo Smart Cao Cấp Cổng Sạc Tích Hợp First Class 06 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-06-den-1174881097.jpg?v=1750849810&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-06-den-1174881093.jpg?v=1750795687&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-06-den-1174881090.jpg?v=1750795583&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-06-den-1174881089.jpg?v=1750795579&width=1946",
            "//yame.vn/cdn/shop/files/balo-doanh-nhan-first-class-06-den-1174881094.jpg?v=1750795691&width=1946"
        ],
        "GiaBan": 634270.0,
        "GiaMua": 487900,
        "TrangThai": "ACTIVE",
        "MaDM": "31aa893c-320f-4be1-a0e7-a99ec34c2e99",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Tự Động #Y2010 D15 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d15-den-1174880703.jpg?v=1750810216&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d15-den-1174880704.jpg?v=1750810219&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d15-den-1174880701.jpg?v=1750810210&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d15-den-1174880700.jpg?v=1750810207&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d15-den-1174880702.jpg?v=1750810214&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Tự Động #Y2010 D17 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d17-den-1174880662.jpg?v=1750845617&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d17-den-1174880663.jpg?v=1750845619&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d17-den-1174880665.jpg?v=1750845724&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d17-den-1174880664.jpg?v=1750845722&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d17-den-1174880661.jpg?v=1750845613&width=1946"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Tự Động #Y2010 D14 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d14-den-1174880622.jpg?v=1750845244&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d14-den-1174880625.jpg?v=1750810561&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d14-den-1174880624.jpg?v=1750845250&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d14-den-1174880623.jpg?v=1750845247&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d14-den-1174880622.jpg?v=1750845244&width=416"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Tự Động #Y2010 D18 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d18-den-1174880655.jpg?v=1750845499&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d18-den-1174880656.jpg?v=1750845601&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d18-den-1174880659.jpg?v=1750845610&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d18-den-1174880657.jpg?v=1750845604&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d18-den-1174880658.jpg?v=1750845607&width=1946"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Tự Động #Y2010 D11 Đen Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d11-den-nau-1174880635.jpg?v=1750845259&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d11-den-nau-1174880634.jpg?v=1750845256&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d11-den-nau-1174880633.jpg?v=1750845253&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d11-den-nau-1174880632.jpg?v=1750810579&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d11-den-nau-1174880635.jpg?v=1750845259&width=416"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Tự Động #Y2010 D08 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d08-den-1174880673.jpg?v=1750845843&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d08-den-1174880674.jpg?v=1750845847&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d08-den-1174880671.jpg?v=1750845738&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d08-den-1174880672.jpg?v=1750845740&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d08-den-1174880675.jpg?v=1750810322&width=1946"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Gài Kim #Y2010 D01 Đen Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d01-den-nau-1174880645.jpg?v=1750845380&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d01-den-nau-1174880644.jpg?v=1750845376&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d01-den-nau-1174880643.jpg?v=1750845373&width=1946",
            "//yame.vn/cdn/shop/files/20428Thumb4.jpg?v=1750810480&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d01-den-nau-1174880647.jpg?v=1750845482&width=1946"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Gài Kim #Y2010 D07 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d07-den-1174880640.jpg?v=1750845369&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d07-den-1174880641.jpg?v=1750845370&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d07-den-1174880639.jpg?v=1750845364&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d07-den-1174880638.jpg?v=1750845362&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-y2010-d07-den-1174880640.jpg?v=1750845369&width=416"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Khóa Tự Động #Y2010 D09 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/19744_Thumb_1.jpg?v=1757673119&width=1946",
            "//yame.vn/cdn/shop/files/19744_Thumb_2.jpg?v=1757673119&width=1946",
            "//yame.vn/cdn/shop/files/19744_Thumb_3.jpg?v=1757673065&width=1946",
            "//yame.vn/cdn/shop/files/19744_Thumb_4.jpg?v=1757673065&width=1946",
            "//yame.vn/cdn/shop/files/19744_Thumb_1.jpg?v=1757673119&width=416"
        ],
        "GiaBan": 296400.0,
        "GiaMua": 228000,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Dây Nịt Da Bò Ý Khóa Tự Động Kim Bảo 04 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/day-n-t-kim-b-o-04-den-1174880717.jpg?v=1750845964&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-kim-b-o-04-den-1174880719.jpg?v=1750845970&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-kim-b-o-04-den-1174880714.jpg?v=1750845858&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-kim-b-o-04-den-1174880716.jpg?v=1750845961&width=1946",
            "//yame.vn/cdn/shop/files/day-n-t-kim-b-o-04-den-1174880715.jpg?v=1750845861&width=1946"
        ],
        "GiaBan": 808080.0,
        "GiaMua": 621600,
        "TrangThai": "ACTIVE",
        "MaDM": "52c06c3f-a9b0-4d6b-8d2d-81b1cf4bb92f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Găng Tay Ngắn Chống Nắng Chống Trượt #Y2010 05 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-xam-1174879959.jpg?v=1750836244&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-xam-1174879961.jpg?v=1750813803&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-xam-1174879960.jpg?v=1750836247&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-xam-1174879963.jpg?v=1750813808&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-xam-1174879962.jpg?v=1750813805&width=1946"
        ],
        "GiaBan": 74100.0,
        "GiaMua": 57000,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Găng Tay Ngắn Chống Nắng #Y2010 01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-den-1174879980.jpg?v=1750813682&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-den-1174879976.jpg?v=1750836365&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-den-1174879978.jpg?v=1750836370&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-den-1174879977.jpg?v=1750836368&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-den-1174879979.jpg?v=1750836375&width=1946"
        ],
        "GiaBan": 29835.0,
        "GiaMua": 22950,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Găng Tay Ngắn Chống Nắng Chống Trượt #Y2010 05 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-den-1174879949.jpg?v=1750836001&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-den-1174879947.jpg?v=1750835896&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-den-1174879948.jpg?v=1750835900&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-den-1174879946.jpg?v=1750835893&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-05-den-1174879945.jpg?v=1750835892&width=1946"
        ],
        "GiaBan": 74100.0,
        "GiaMua": 57000,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Găng Tay Dài Chống Nắng #Y2010 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0019813_thumb_1.jpg?v=1759218892&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-03-den-1174879965.jpg?v=1759218892&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-03-den-1174879966.jpg?v=1759218892&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-03-den-1174879967.jpg?v=1759218892&width=1946",
            "//yame.vn/cdn/shop/files/0019813_thumb_1.jpg?v=1759218892&width=416"
        ],
        "GiaBan": 63700.0,
        "GiaMua": 49000,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Găng Tay Dài Chống Nắng UPF 50+ #Y2010 04 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/gang-tay-y2010-04-den-1174879952.jpg?v=1750836008&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-04-den-1174879955.jpg?v=1750836016&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-04-den-1174879951.jpg?v=1750836004&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-04-den-1174879954.jpg?v=1750836014&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-04-den-1174879956.jpg?v=1750836019&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Găng Tay Ngắn Chống Nắng #Y2010 01 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-xam-1174879989.jpg?v=1750836484&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-xam-1174879988.jpg?v=1750836482&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-xam-1174879992.jpg?v=1750836494&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-xam-1174879991.jpg?v=1750836491&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-y2010-01-xam-1174879990.jpg?v=1750836488&width=1946"
        ],
        "GiaBan": 29835.0,
        "GiaMua": 22950,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Găng Tay Thể Thao Chống Trượt BG 91 Đen Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/gang-tay-beginner-91-den-d-1174879938.jpg?v=1750835655&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-beginner-91-den-d-1174879940.jpg?v=1750835659&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-beginner-91-den-d-1174879939.jpg?v=1750835656&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-beginner-91-den-d-1174879942.jpg?v=1750835884&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-beginner-91-den-d-1174879941.jpg?v=1750835881&width=1946"
        ],
        "GiaBan": 99060.0,
        "GiaMua": 76200,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Đen Đỏ"
    },
    {
        "MoTa": "Giảm nguy cơ chấn thương cổ tay khi nâng tạ hỗ trợ người có vấn đề về khớp tay mang lại sự tự tin và an toàn khi tập luyện",
        "TenSP": "Găng Tay Thể Thao Chống Trượt Nẹp Định Hình BG 92 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/gang-tay-beginner-92-den-1174879932.jpg?v=1750835641&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-beginner-92-den-1174879934.jpg?v=1750835644&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-beginner-92-den-1174879936.jpg?v=1750835650&width=1946",
            "//yame.vn/cdn/shop/files/gang-tay-beginner-92-den-1174879935.jpg?v=1750835647&width=1946",
            "//yame.vn/cdn/shop/files/0023954thumb4.jpg?v=1750813949&width=1946"
        ],
        "GiaBan": 114660.0,
        "GiaMua": 88200,
        "TrangThai": "ACTIVE",
        "MaDM": "94ef4c7a-315d-489d-9f9e-93acd479f318",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-den-1174879791.jpg?v=1759221532&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-den-1174879790.jpg?v=1759221532&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-den-1174879789.jpg?v=1750815260&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-den-1174879786.jpg?v=1750815250&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-den-1174879788.jpg?v=1750815257&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Corduroy Bền Bỉ NB 17 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-non-branded-17-den-1174879100.jpg?v=1750825447&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-den-1174879102.jpg?v=1750825453&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-den-1174879098.jpg?v=1750818605&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-den-1174879099.jpg?v=1750825445&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-den-1174879101.jpg?v=1750825450&width=1946"
        ],
        "GiaBan": 165100.0,
        "GiaMua": 127000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Corduroy Bền Bỉ NB 17 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-non-branded-17-nau-1174879116.jpg?v=1750825690&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-nau-1174879120.jpg?v=1750825804&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-nau-1174879118.jpg?v=1750825696&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-nau-1174879119.jpg?v=1750825802&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-17-nau-1174879117.jpg?v=1750825692&width=1946"
        ],
        "GiaBan": 165100.0,
        "GiaMua": 127000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Xanh đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-den-1184461349.jpg?v=1755230170&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-den-1184461348.jpg?v=1755230166&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-den-1184461346.jpg?v=1755230160&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-den-1184461345.jpg?v=1755230157&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-den-1184461344.jpg?v=1755230056&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Xanh đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Corduroy Bền Bỉ NS M151 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-xam-1174879189.jpg?v=1750818606&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-xam-1174879190.jpg?v=1750818610&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-xam-1174879187.jpg?v=1750827244&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-xam-1174879188.jpg?v=1750827247&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-xam-1174879186.jpg?v=1750827242&width=1946"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Thoáng Khí ONE PIECE-WANO 35 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-one-piece-wano-35-be-1174879807.jpg?v=1750815137&width=1946",
            "//yame.vn/cdn/shop/files/non-one-piece-wano-35-be-1174879805.jpg?v=1750815130&width=1946",
            "//yame.vn/cdn/shop/files/non-one-piece-wano-35-be-1174879806.jpg?v=1750815134&width=1946",
            "//yame.vn/cdn/shop/files/non-one-piece-wano-35-be-1174879804.jpg?v=1750815128&width=1946",
            "//yame.vn/cdn/shop/files/non-one-piece-wano-35-be-1174879803.jpg?v=1750815124&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form NS M141 Cam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-no-style-m141-cam-1174879532.jpg?v=1750816566&width=1946",
            "//yame.vn/cdn/shop/files/non-no-style-m141-cam-1174879533.jpg?v=1750816568&width=1946",
            "//yame.vn/cdn/shop/files/non-no-style-m141-cam-1174879530.jpg?v=1750831325&width=1946",
            "//yame.vn/cdn/shop/files/non-no-style-m141-cam-1174879529.jpg?v=1750831322&width=1946",
            "//yame.vn/cdn/shop/files/non-no-style-m141-cam-1174879531.jpg?v=1750816563&width=1946"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Cam"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Xanh Đá",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-da-1184461393.jpg?v=1755230895&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-da-1184461389.jpg?v=1755230883&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-da-1184461391.jpg?v=1755230889&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-da-1184461390.jpg?v=1755230886&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-da-1184461392.jpg?v=1755230892&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Xanh Đá"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Nâu đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-d-m-1184461355.jpg?v=1755230287&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-d-m-1184461354.jpg?v=1755230282&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-d-m-1184461352.jpg?v=1755230277&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-d-m-1184461351.jpg?v=1755230176&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-d-m-1184461350.jpg?v=1755230173&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Nâu đậm"
    },
    {
        "MoTa": "Chất liệu Kaki 100% Cotton xử lý ép keo (Fusible interlining) giúp form nón cứng cáp đội lên là auto phong cách | Khóa điều chỉnh đa zi năng vừa vặn mọi vòng đầu vừa mọi cỡ đầu lỗ thoáng khí không lo bí bách | Nón được ghép từ sáu mảnh đảm bảo bền đẹp không lo bị mất form vừa chất vừa bền đỉnh của chóp luôn",
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 154 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-l-i-trai-y2010-154-den-1192199017.jpg?v=1758582614&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-y2010-154-den-1192199016.jpg?v=1758582611&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-y2010-154-den-1192199015.jpg?v=1758582608&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-y2010-154-den-1192199014.jpg?v=1758582605&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-y2010-154-den-1192199013.jpg?v=1758582602&width=1946"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-nh-t-1184461406.jpg?v=1755231130&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-nh-t-1184461405.jpg?v=1755231126&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-nh-t-1184461401.jpg?v=1755231016&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-nh-t-1184461402.jpg?v=1755231117&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-nh-t-1184461404.jpg?v=1755231123&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form 77 47 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-seventy-seven-47-den-1174878999.jpg?v=1750824128&width=1946",
            "//yame.vn/cdn/shop/files/non-seventy-seven-47-den-1174879000.jpg?v=1750824132&width=1946",
            "//yame.vn/cdn/shop/files/non-seventy-seven-47-den-1174879001.jpg?v=1750824135&width=1946",
            "//yame.vn/cdn/shop/files/non-seventy-seven-47-den-1174878998.jpg?v=1750824125&width=1946",
            "//yame.vn/cdn/shop/files/non-seventy-seven-47-den-1174878999.jpg?v=1750824128&width=416"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Xám đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-d-m-1184461358.jpg?v=1755230295&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-d-m-1184461357.jpg?v=1755230292&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-d-m-1184461361.jpg?v=1755230404&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-d-m-1184461360.jpg?v=1755230401&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xam-d-m-1184461359.jpg?v=1755230398&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Xám đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-d-1184461374.jpg?v=1755230640&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-d-1184461373.jpg?v=1755230636&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-d-1184461372.jpg?v=1755230535&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-d-1184461371.jpg?v=1755230533&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-d-1184461370.jpg?v=1755230530&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Corduroy Bền Bỉ NS M151 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-nau-nh-t-1174879193.jpg?v=1750818616&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-nau-nh-t-1174879194.jpg?v=1750827250&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-nau-nh-t-1174879196.jpg?v=1750827259&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-nau-nh-t-1174879192.jpg?v=1750818613&width=1946",
            "//yame.vn/cdn/shop/files/non-l-i-trai-no-style-m151-nau-nh-t-1174879195.jpg?v=1750827252&width=1946"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Xanh rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-reu-1184461368.jpg?v=1755230524&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-reu-1184461367.jpg?v=1755230521&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-reu-1184461365.jpg?v=1755230416&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-reu-1184461363.jpg?v=1755230411&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-xanh-reu-1184461364.jpg?v=1755230414&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Xanh rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-nh-t-1184461377.jpg?v=1755230650&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-nh-t-1184461376.jpg?v=1755230645&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-nh-t-1184461380.jpg?v=1755230757&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-nh-t-1184461378.jpg?v=1755230651&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-nau-nh-t-1184461381.jpg?v=1755230760&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Kaki Đứng Form #Y2010 02 Vàng Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-02-vang-nau-1184461387.jpg?v=1755230877&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-vang-nau-1184461386.jpg?v=1755230775&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-vang-nau-1184461384.jpg?v=1755230769&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-vang-nau-1184461385.jpg?v=1755230772&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-02-vang-nau-1184461382.jpg?v=1755230764&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Vàng Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Logo Làng Lá Naruto 29 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024177thumb1.jpg?v=1758876541&width=1946",
            "//yame.vn/cdn/shop/files/0024177thumb2.jpg?v=1758876541&width=1946",
            "//yame.vn/cdn/shop/files/0024177thumb3.jpg?v=1758876541&width=1946",
            "//yame.vn/cdn/shop/files/0024177thumb4.jpg?v=1758876541&width=1946",
            "//yame.vn/cdn/shop/files/0024177thumb5.jpg?v=1758876542&width=1946"
        ],
        "GiaBan": 177060.0,
        "GiaMua": 136200,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Baseball Cap Logo Akatsuki Naruto 30 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024176thumb1.jpg?v=1758876204&width=1946",
            "//yame.vn/cdn/shop/files/0024176thumb2.jpg?v=1758876204&width=1946",
            "//yame.vn/cdn/shop/files/0024176thumb3.jpg?v=1758876204&width=1946",
            "//yame.vn/cdn/shop/files/0024176thumb4.jpg?v=1758876205&width=1946",
            "//yame.vn/cdn/shop/files/0024176thumb5.jpg?v=1758876205&width=1946"
        ],
        "GiaBan": 177060.0,
        "GiaMua": 136200,
        "TrangThai": "ACTIVE",
        "MaDM": "727b09db-7129-44f2-b544-957de5481aeb",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Mỏng Nhẹ Mesh Thoáng Khí #Y2010 04 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-04-den-1174878956.jpg?v=1750819453&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-den-1174878957.jpg?v=1750819457&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-den-1174878958.jpg?v=1750819563&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-den-1174878959.jpg?v=1750819565&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-den-1174878956.jpg?v=1750819453&width=416"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Lỗ Lazer Thoáng Khí NB 12 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-tr-ng-1174878926.jpg?v=1750823288&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-tr-ng-1174878927.jpg?v=1750823290&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-tr-ng-1174878929.jpg?v=1750823296&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-tr-ng-1174878928.jpg?v=1750823293&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-tr-ng-1174878926.jpg?v=1750823288&width=416"
        ],
        "GiaBan": 162435.0,
        "GiaMua": 124950,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Mỏng Nhẹ Mesh Thoáng Khí #Y2010 04 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-04-xanh-den-1174878968.jpg?v=1750819687&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xanh-den-1174878969.jpg?v=1750819690&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xanh-den-1174878967.jpg?v=1750819684&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xanh-den-1174878966.jpg?v=1750819681&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xanh-den-1174878968.jpg?v=1750819687&width=416"
        ],
        "GiaBan": 162435.0,
        "GiaMua": 124950,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Gấp Gọn Thông Minh Ready To Go 15 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-be-1174878897.jpg?v=1750820048&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-be-1174878895.jpg?v=1750820041&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-be-1174878899.jpg?v=1750820053&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-be-1174878900.jpg?v=1750820056&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-be-1174878896.jpg?v=1750820044&width=1946"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Mỏng Nhẹ Mesh Thoáng Khí #Y2010 04 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-04-xam-tr-ng-1174878952.jpg?v=1750819444&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xam-tr-ng-1174878953.jpg?v=1750819448&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xam-tr-ng-1174878951.jpg?v=1750819441&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xam-tr-ng-1174878954.jpg?v=1750819450&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-04-xam-tr-ng-1174878952.jpg?v=1750819444&width=416"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Lỗ Lazer Thoáng Khí NB 12 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-d-m-1174878923.jpg?v=1750819934&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-d-m-1174878924.jpg?v=1750819936&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-d-m-1174878922.jpg?v=1750819930&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-d-m-1174878921.jpg?v=1750819928&width=1946",
            "//yame.vn/cdn/shop/files/non-non-branded-12-xam-d-m-1174878923.jpg?v=1750819934&width=416"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Mỏng Nhẹ #Y2010 03 Xám Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-03-xam-den-1174879770.jpg?v=1759222504&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-xam-den-1174879766.jpg?v=1759222504&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-xam-den-1174879765.jpg?v=1759222504&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-xam-den-1174879768.jpg?v=1750834090&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-xam-den-1174879769.jpg?v=1750815380&width=1946"
        ],
        "GiaBan": 113100.0,
        "GiaMua": 87000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Xám Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Gấp Gọn Thông Minh Ready To Go 15 Xanh Ngọc",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-xanh-ng-c-1174878889.jpg?v=1750822925&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-xanh-ng-c-1174878890.jpg?v=1750822927&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-xanh-ng-c-1174878892.jpg?v=1750822933&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-xanh-ng-c-1174878888.jpg?v=1750822921&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-xanh-ng-c-1174878887.jpg?v=1750822816&width=1946"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Xanh Ngọc"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Gấp Gọn Thông Minh Ready To Go 15 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-tr-ng-1174878905.jpg?v=1750823049&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-tr-ng-1174878903.jpg?v=1750823044&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-tr-ng-1174878908.jpg?v=1750823161&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-tr-ng-1174878904.jpg?v=1750823046&width=1946",
            "//yame.vn/cdn/shop/files/non-ready-to-go-15-tr-ng-1174878909.jpg?v=1750823164&width=1946"
        ],
        "GiaBan": 191100.0,
        "GiaMua": 147000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Mỏng Nhẹ #Y2010 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-03-den-1174879734.jpg?v=1759222427&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-den-1174879733.jpg?v=1759222427&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-den-1174879732.jpg?v=1750833600&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-den-1174879735.jpg?v=1750833609&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-den-1174879736.jpg?v=1750833613&width=1946"
        ],
        "GiaBan": 113100.0,
        "GiaMua": 87000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Mỏng Nhẹ #Y2010 03 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/non-y2010-03-tr-ng-1174879754.jpg?v=1759222473&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-tr-ng-1174879757.jpg?v=1759222473&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-tr-ng-1174879758.jpg?v=1759222473&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-tr-ng-1174879756.jpg?v=1750833961&width=1946",
            "//yame.vn/cdn/shop/files/non-y2010-03-tr-ng-1174879755.jpg?v=1750833860&width=1946"
        ],
        "GiaBan": 113100.0,
        "GiaMua": 87000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Nón Dad Hat Dù Mỏng Nhẹ #Y2010 03 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/23116Thumb1.jpg?v=1759222389&width=1946",
            "//yame.vn/cdn/shop/files/23116Thumb2.jpg?v=1759222389&width=1946",
            "//yame.vn/cdn/shop/files/23116Thumb3.jpg?v=1759222389&width=1946",
            "//yame.vn/cdn/shop/files/23116Thumb4.jpg?v=1759222389&width=1946",
            "//yame.vn/cdn/shop/files/23116Thumb5.jpg?v=1759222389&width=1946"
        ],
        "GiaBan": 113100.0,
        "GiaMua": 87000,
        "TrangThai": "ACTIVE",
        "MaDM": "272d2f63-d08f-48b2-a556-10efc4fa5f6e",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải Jean thường có độ bền cao chịu được sự mài mòn và kéo căng nên mặc rất bền | Chất liệu cotton giúp quần Jean thấm hút mồ hôi tốt giữ bạn luôn khô ráo thoải mái | Quần Jean giữ form dáng tốt không bị bai dão hay co rút sau nhiều lần giặt | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Jogger Bền The Original M101 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-d-ng-1174882525.jpg?v=1750787171&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-d-ng-1174882518.jpg?v=1750788019&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-d-ng-1174882519.jpg?v=1750788241&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-d-ng-1174882522.jpg?v=1750787162&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-d-ng-1174882521.jpg?v=1750788247&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "90295d0a-4eee-48ef-85c8-e181dfc56293",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Vải Jean thường có độ bền cao chịu được sự mài mòn và kéo căng nên mặc rất bền | Chất liệu cotton giúp quần Jean thấm hút mồ hôi tốt giữ bạn luôn khô ráo thoải mái | Quần Jean giữ form dáng tốt không bị bai dão hay co rút sau nhiều lần giặt | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Jogger Bền The Original M101 Xanh Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-tr-ng-1174882532.jpg?v=1750788256&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-tr-ng-1174882533.jpg?v=1750788260&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-tr-ng-1174882529.jpg?v=1750787180&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-tr-ng-1174882534.jpg?v=1750788361&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m101-xanh-tr-ng-1174882531.jpg?v=1750788253&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "90295d0a-4eee-48ef-85c8-e181dfc56293",
        "MauSac": "Xanh Trắng"
    },
    {
        "MoTa": "Chất liệu vải jean cao cấp đảm bảo độ bền vượt trội không lo sờn rách | Thành phần 2% Spandex mang lại sự thoải mái tối đa khi di chuyển và không gây gò bó | Thiết kế và chất liệu giúp quần giữ form dáng chuẩn tạo vẻ ngoài gọn gàng và phong cách | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Jogger Co Giãn The Original M102 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-den-1174882684.jpg?v=1750784165&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-den-1174882685.jpg?v=1750784168&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-den-1174882686.jpg?v=1750784171&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-den-1174882689.jpg?v=1750784044&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-den-1174882688.jpg?v=1750784042&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "90295d0a-4eee-48ef-85c8-e181dfc56293",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Không bạc màu không rách không cũ không dây màu không khô cứng siêu bền bỉ | Nhờ vào sợi Modal vải mang lại cảm giác mềm mại vượt trội và khả năng thấm hút ẩm | Vải có khả năng co giãn linh hoạt giúp giữ được phom dáng và giảm thiểu tình trạng giãn",
        "TenSP": "Quần Jeans Jogger Mềm Mại Co Giãn Tek Black Jean 020 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461437.jpg?v=1755231615&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461436.jpg?v=1755231612&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461435.jpg?v=1755231609&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461434.jpg?v=1755231606&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461433.jpg?v=1755231603&width=1946"
        ],
        "GiaBan": 620100.0,
        "GiaMua": 477000,
        "TrangThai": "ACTIVE",
        "MaDM": "90295d0a-4eee-48ef-85c8-e181dfc56293",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu vải jean cao cấp đảm bảo độ bền vượt trội không lo sờn rách | Thành phần 2% Spandex mang lại sự thoải mái tối đa khi di chuyển và không gây gò bó | Thiết kế và chất liệu giúp quần giữ form dáng chuẩn tạo vẻ ngoài gọn gàng và phong cách | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Jogger Co Giãn The Original M102 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-xanh-xam-1174882693.jpg?v=1750784053&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-xanh-xam-1174882694.jpg?v=1750784057&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-xanh-xam-1174882695.jpg?v=1750784060&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-xanh-xam-1174882698.jpg?v=1750784282&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-original-m102-xanh-xam-1174882697.jpg?v=1750784180&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "90295d0a-4eee-48ef-85c8-e181dfc56293",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": "Dáng quần Loose fit chuẩn xu hướng vừa che khuyết điểm chân vừa hack dáng cực đỉnh | Chất vải 100% Cotton thấm hút tốt độ bền cao mang lại vẻ ngoài bụi bặm theo thời gian | Miệng túi cách điệu phối nhãn dệt vừa tạo nét khác biệt vừa là điểm nhận diện tinh tế | Vải 100% Cotton sẽ không có độ co giãn cần thời gian để \\break-in\\ nhé",
        "TenSP": "Quần Jeans Loose Bền Bỉ The Original M038 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024723_Thumb_1.jpg?v=1758005470&width=1946",
            "//yame.vn/cdn/shop/files/0024723_Thumb_2a.jpg?v=1758005470&width=1946",
            "//yame.vn/cdn/shop/files/0024723_Thumb_2.jpg?v=1758005470&width=1946",
            "//yame.vn/cdn/shop/files/0024723_Thumb_3.jpg?v=1758005470&width=1946",
            "//yame.vn/cdn/shop/files/0024723_Thumb_4.jpg?v=1758005470&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": "Dáng quần Loose fit chuẩn xu hướng vừa che khuyết điểm chân vừa hack dáng cực đỉnh | Chất vải 100% Cotton thấm hút tốt độ bền cao mang lại vẻ ngoài bụi bặm theo thời gian | Miệng túi cách điệu phối nhãn dệt vừa tạo nét khác biệt vừa là điểm nhận diện tinh tế | Vải 100% Cotton sẽ không có độ co giãn cần thời gian để \\break-in\\ nhé",
        "TenSP": "Quần Jeans Loose Bền Bỉ The Original M038 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024722Thumb1.jpg?v=1758004142&width=1946",
            "//yame.vn/cdn/shop/files/0024722Thumb2.jpg?v=1758004142&width=1946",
            "//yame.vn/cdn/shop/files/0024722Thumb3.jpg?v=1758004142&width=1946",
            "//yame.vn/cdn/shop/files/0024722Thumb4.jpg?v=1758004143&width=1946",
            "//yame.vn/cdn/shop/files/0024722Thumb5.jpg?v=1758004142&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Kaki Cotton có độ dày và khả năng chịu lực tốt chống mài mòn tốt đứng phom | Tạo điểm nhấn thị giác mạnh mẽ và tăng cường độ bền cho khu vực hay ma sát va chạm | Co giãn ngang tốt mang lại sự thoải mái khi vận động đồng thời thoáng khí và thấm hút tự nhiên | Vải 97% Cotton nên sẽ hơi nhăn sau khi giặt chỉ cần ủi nhẹ là sẽ đẹp trai ngay",
        "TenSP": "Quần Jeans Loose Fit Bền Bỉ Multi-Color Jean 011 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024647_thumb_1.jpg?v=1758689878&width=1946",
            "//yame.vn/cdn/shop/files/0024647_thumb_2.jpg?v=1758689878&width=1946",
            "//yame.vn/cdn/shop/files/0024647_thumb_3.jpg?v=1758689878&width=1946",
            "//yame.vn/cdn/shop/files/0024647_thumb_4.jpg?v=1758689878&width=1946",
            "//yame.vn/cdn/shop/files/0024647_thumb_5.jpg?v=1758689878&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Kaki Cotton có độ dày và khả năng chịu lực tốt chống mài mòn tốt đứng phom | Tạo điểm nhấn thị giác mạnh mẽ và tăng cường độ bền cho khu vực hay ma sát va chạm | Co giãn ngang tốt mang lại sự thoải mái khi vận động đồng thời thoáng khí và thấm hút tự nhiên | Vải 97% Cotton nên sẽ hơi nhăn sau khi giặt chỉ cần ủi nhẹ là sẽ đẹp trai ngay",
        "TenSP": "Quần Jeans Loose Fit Bền Bỉ Multi-Color Jean 011 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024646_thumb_1.jpg?v=1758689730&width=1946",
            "//yame.vn/cdn/shop/files/0024646_thumb_2.jpg?v=1758689730&width=1946",
            "//yame.vn/cdn/shop/files/0024646_thumb_3.jpg?v=1758689730&width=1946",
            "//yame.vn/cdn/shop/files/0024646_thumb_4.jpg?v=1758689730&width=1946",
            "//yame.vn/cdn/shop/files/0024646_thumb_5.jpg?v=1758689730&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Kaki Cotton có độ dày và khả năng chịu lực tốt chống mài mòn tốt đứng phom | Tạo điểm nhấn thị giác mạnh mẽ và tăng cường độ bền cho khu vực hay ma sát va chạm | Co giãn ngang tốt mang lại sự thoải mái khi vận động đồng thời thoáng khí và thấm hút tự nhiên | Vải 97% Cotton nên sẽ hơi nhăn sau khi giặt chỉ cần ủi nhẹ là sẽ đẹp trai ngay",
        "TenSP": "Quần Jeans Loose Fit Bền Bỉ Multi-Color Jean 011 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024645_thumb_1.jpg?v=1758689575&width=1946",
            "//yame.vn/cdn/shop/files/0024645_thumb_2.jpg?v=1758689575&width=1946",
            "//yame.vn/cdn/shop/files/0024645_thumb_3.jpg?v=1758689575&width=1946",
            "//yame.vn/cdn/shop/files/0024645_thumb_4.jpg?v=1758689575&width=1946",
            "//yame.vn/cdn/shop/files/0024645_thumb_5.jpg?v=1758689575&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Kaki Cotton có độ dày và khả năng chịu lực tốt chống mài mòn tốt đứng phom | Tạo điểm nhấn thị giác mạnh mẽ và tăng cường độ bền cho khu vực hay ma sát va chạm | Co giãn ngang tốt mang lại sự thoải mái khi vận động đồng thời thoáng khí và thấm hút tự nhiên | Vải 97% Cotton nên sẽ hơi nhăn sau khi giặt chỉ cần ủi nhẹ là sẽ đẹp trai ngay",
        "TenSP": "Quần Jeans Loose Fit Bền Bỉ Multi-Color Jean 011 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024644_thumb_1.jpg?v=1758689401&width=1946",
            "//yame.vn/cdn/shop/files/0024644_thumb_2.jpg?v=1758689401&width=1946",
            "//yame.vn/cdn/shop/files/0024644_thumb_3.jpg?v=1758689401&width=1946",
            "//yame.vn/cdn/shop/files/0024644_thumb_4.jpg?v=1758689401&width=1946",
            "//yame.vn/cdn/shop/files/0024644_thumb_5.jpg?v=1758689401&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Kaki Cotton có độ dày và khả năng chịu lực tốt chống mài mòn tốt đứng phom | Tạo điểm nhấn thị giác mạnh mẽ và tăng cường độ bền cho khu vực hay ma sát va chạm | Co giãn ngang tốt mang lại sự thoải mái khi vận động đồng thời thoáng khí và thấm hút tự nhiên | Vải 97% Cotton nên sẽ hơi nhăn sau khi giặt chỉ cần ủi nhẹ là sẽ đẹp trai ngay",
        "TenSP": "Quần Jeans Loose Fit Bền Bỉ Multi-Color Jean 011 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jeans-loose-fit-b-n-b-multi-color-jean-011-xam-1194483958.jpg?v=1758691444&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-loose-fit-b-n-b-multi-color-jean-011-xam-1194483957.jpg?v=1758691442&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-loose-fit-b-n-b-multi-color-jean-011-xam-1194483956.jpg?v=1758691439&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-loose-fit-b-n-b-multi-color-jean-011-xam-1194483955.jpg?v=1758691436&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-loose-fit-b-n-b-multi-color-jean-011-xam-1194483954.jpg?v=1758691333&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Dáng quần Loose fit chuẩn xu hướng vừa che khuyết điểm chân vừa hack dáng cực đỉnh | Chất vải 100% Cotton thấm hút tốt độ bền cao mang lại vẻ ngoài bụi bặm theo thời gian | Miệng túi cách điệu phối nhãn dệt vừa tạo nét khác biệt vừa là điểm nhận diện tinh tế | Vải 100% Cotton sẽ không có độ co giãn cần thời gian để \\break-in\\ nhé",
        "TenSP": "Quần Jeans Loose Bền Bỉ The Original M038 Xanh Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024724_Thumb_1.jpg?v=1758005623&width=1946",
            "//yame.vn/cdn/shop/files/0024724_Thumb_3.jpg?v=1758005623&width=1946",
            "//yame.vn/cdn/shop/files/0024724_Thumb_5.jpg?v=1758005623&width=1946",
            "//yame.vn/cdn/shop/files/0024724_Thumb_6.jpg?v=1758005623&width=1946",
            "//yame.vn/cdn/shop/files/0024724_Thumb_4.jpg?v=1758005623&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "b6a28006-2d76-4055-914c-5f7d70c87bfc",
        "MauSac": "Xanh Trắng"
    },
    {
        "MoTa": "Khả năng chịu bền tốt. Sợi Spandex giúp sản phẩm có độ co giãn nhẹ tạo sự thoải mái | Không bị nhão hay biến dạng sau nhiều lần giặt và luôn giữ được form dáng như mới | Dễ phối đồ và lựa chọn phù hợp với nhiều phong cách và sở thích khác nhau | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original 28 Xanh Đậm 1",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1-1174882642.jpg?v=1750786684&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1-1174882643.jpg?v=1750786688&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1-1174882645.jpg?v=1750786693&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1-1174882644.jpg?v=1750786691&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1-1174882646.jpg?v=1750786697&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": ""
    },
    {
        "MoTa": "Khả năng chịu bền tốt. Sợi Spandex giúp sản phẩm có độ co giãn nhẹ tạo sự thoải mái | Không bị nhão hay biến dạng sau nhiều lần giặt và luôn giữ được form dáng như mới | Dễ phối đồ và lựa chọn phù hợp với nhiều phong cách và sở thích khác nhau | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original 28 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-den-1174882647.jpg?v=1750786700&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-den-1174882648.jpg?v=1750854736&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-den-1174882650.jpg?v=1750854962&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-den-1174882649.jpg?v=1750854739&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-den-1174882651.jpg?v=1750854965&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Khả năng chịu bền tốt. Sợi Spandex giúp sản phẩm có độ co giãn nhẹ tạo sự thoải mái | Không bị nhão hay biến dạng sau nhiều lần giặt và luôn giữ được form dáng như mới | Dễ phối đồ và lựa chọn phù hợp với nhiều phong cách và sở thích khác nhau | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original 28 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-ng-1174882630.jpg?v=1750854610&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-ng-1174882631.jpg?v=1750854613&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-ng-1174882633.jpg?v=1750854621&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-ng-1174882632.jpg?v=1750854617&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-ng-1174882634.jpg?v=1750854721&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Chất liệu denim mềm mại co giãn tốt mang lại sự thoải mái tuyệt đối khi mặc | Thiết kế rách gối độc đáo và túi đồng hồ tinh xảo giúp bạn thể hiện phong cách riêng | Mỗi đường may đều được chăm chút tỉ mỉ để đảm bảo độ bền cao và mang lại sự thoải mái | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chi tiết rách gối",
        "TenSP": "Quần Jeans Slimfit Rách Gối Co Giãn The Original M052 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-m-1174882571.jpg?v=1750853885&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-m-1174882572.jpg?v=1750853888&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-m-1174882569.jpg?v=1750853780&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-m-1174882567.jpg?v=1750853775&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-m-1174882573.jpg?v=1750853890&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Khả năng chịu bền tốt. Sợi Spandex giúp sản phẩm có độ co giãn nhẹ tạo sự thoải mái | Không bị nhão hay biến dạng sau nhiều lần giặt và luôn giữ được form dáng như mới | Dễ phối đồ và lựa chọn phù hợp với nhiều phong cách và sở thích khác nhau | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original 28 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1174882636.jpg?v=1750854724&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1174882637.jpg?v=1750854727&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1174882639.jpg?v=1750854733&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1174882638.jpg?v=1750854731&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-d-m-1174882640.jpg?v=1750786681&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Khả năng chịu bền tốt. Sợi Spandex giúp sản phẩm có độ co giãn nhẹ tạo sự thoải mái | Không bị nhão hay biến dạng sau nhiều lần giặt và luôn giữ được form dáng như mới | Dễ phối đồ và lựa chọn phù hợp với nhiều phong cách và sở thích khác nhau | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original 28 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882665.jpg?v=1750855084&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882666.jpg?v=1750855087&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882667.jpg?v=1750855090&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882668.jpg?v=1750855095&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882669.jpg?v=1750855097&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Không bạc màu không rách không cũ không dây màu không khô cứng siêu bền bỉ | Nhờ vào sợi Modal vải mang lại cảm giác mềm mại vượt trội và khả năng thấm hút ẩm | Vải có khả năng co giãn linh hoạt giúp giữ được phom dáng và giảm thiểu tình trạng giãn",
        "TenSP": "Quần Jeans Slim Fit Tek Black Jean 009 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jeans-slim-fit-the-original-m009-den-1176074117.jpg?v=1751364132&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-slim-fit-the-original-m009-den-1176074116.jpg?v=1751364128&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-slim-fit-the-original-m009-den-1176074113.jpg?v=1751364019&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-slim-fit-the-original-m009-den-1176074112.jpg?v=1751364017&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-slim-fit-the-original-m009-den-1176074111.jpg?v=1751364016&width=1946"
        ],
        "GiaBan": 620100.0,
        "GiaMua": 477000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Khả năng chịu bền tốt. Sợi Spandex giúp sản phẩm có độ co giãn nhẹ tạo sự thoải mái | Không bị nhão hay biến dạng sau nhiều lần giặt và luôn giữ được form dáng như mới | Dễ phối đồ và lựa chọn phù hợp với nhiều phong cách và sở thích khác nhau | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original 28 Xanh Trắng 1",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882623.jpg?v=1750854493&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882624.jpg?v=1750854496&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882626.jpg?v=1750854601&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882625.jpg?v=1750854499&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xam-1174882627.jpg?v=1750854604&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": ""
    },
    {
        "MoTa": "Chất liệu denim mềm mại co giãn tốt mang lại sự thoải mái tuyệt đối khi mặc | Thiết kế rách gối độc đáo và túi đồng hồ tinh xảo giúp bạn thể hiện phong cách riêng | Mỗi đường may đều được chăm chút tỉ mỉ để đảm bảo độ bền cao và mang lại sự thoải mái | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chi tiết rách gối",
        "TenSP": "Quần Jeans Slimfit Rách Gối Co Giãn The Original M052 Xanh Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-tr-ng-1174882555.jpg?v=1750853523&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-tr-ng-1174882556.jpg?v=1750853526&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-tr-ng-1174882561.jpg?v=1750853540&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-tr-ng-1174882559.jpg?v=1750853534&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-tr-ng-1174882558.jpg?v=1750853531&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Trắng"
    },
    {
        "MoTa": "Chất liệu Jean Cotton Spandex mềm mại mịn màng và mát mẻ mặc cực kỳ dễ chịu | Sản phẩm có 4 màu phục vụ nhiều sở thích về màu sắc dễ dàng lựa chọn và phối đồ | Tạo sự thoải mái khi vận động không gây cảm giác gò bó khó chịu khi mặc | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slim Fit Mềm Mịn Mát The Original 02 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-den-1174882618.jpg?v=1750786816&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-den-1174882619.jpg?v=1750786820&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-den-1174882620.jpg?v=1750854487&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-den-1174882617.jpg?v=1750786814&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-den-1174882614.jpg?v=1750854485&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Khả năng chịu bền tốt. Sợi Spandex giúp sản phẩm có độ co giãn nhẹ tạo sự thoải mái | Không bị nhão hay biến dạng sau nhiều lần giặt và luôn giữ được form dáng như mới | Dễ phối đồ và lựa chọn phù hợp với nhiều phong cách và sở thích khác nhau | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original 28 Xanh Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-tr-ng-1174882653.jpg?v=1750854968&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-tr-ng-1174882654.jpg?v=1750854972&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-tr-ng-1174882655.jpg?v=1750854975&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-tr-ng-1174882657.jpg?v=1750854980&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-28-xanh-tr-ng-1174882656.jpg?v=1750854978&width=1946"
        ],
        "GiaBan": 340080.0,
        "GiaMua": 261600,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Trắng"
    },
    {
        "MoTa": "Chất liệu vải Jean cao cấp giúp quần có độ bền vượt trội co giãn nhẹ thoải mái | Thiết kế ống đứng và chất liệu vải dày giúp quần giữ form dáng chuẩn gọn gàng | Quần được wash nhẹ mang lại vẻ ngoài đơn giản nhưng tinh tế và không kém phần thời trang | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original M100 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-d-m-1174882677.jpg?v=1750786577&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-d-m-1174882678.jpg?v=1750786579&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-d-m-1174882679.jpg?v=1750855099&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-d-m-1174882680.jpg?v=1750855321&width=1946",
            "//yame.vn/cdn/shop/files/0023537.jpg?v=1758104789&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Chất liệu denim mềm mại co giãn tốt mang lại sự thoải mái tuyệt đối khi mặc | Thiết kế rách gối độc đáo và túi đồng hồ tinh xảo giúp bạn thể hiện phong cách riêng | Mỗi đường may đều được chăm chút tỉ mỉ để đảm bảo độ bền cao và mang lại sự thoải mái | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chi tiết rách gối",
        "TenSP": "Quần Jeans Slimfit Rách Gối Co Giãn The Original M052 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-ng-1174882579.jpg?v=1750854125&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-ng-1174882580.jpg?v=1750786921&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-ng-1174882578.jpg?v=1750854122&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-ng-1174882581.jpg?v=1750786924&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-seventy-seven-51-xanh-d-ng-1174882575.jpg?v=1750853893&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Chất liệu Jean Cotton Spandex mềm mại mịn màng và mát mẻ mặc cực kỳ dễ chịu | Sản phẩm có 4 màu phục vụ nhiều sở thích về màu sắc dễ dàng lựa chọn và phối đồ | Tạo sự thoải mái khi vận động không gây cảm giác gò bó khó chịu khi mặc | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slim Fit Mềm Mịn Mát The Original 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-den-1174882607.jpg?v=1750854373&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-den-1174882608.jpg?v=1750854376&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-den-1174882610.jpg?v=1750854481&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-den-1174882609.jpg?v=1750854379&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-den-1174882606.jpg?v=1750854370&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Công nghệ S.Café® vừa khử mùi hiệu quả vừa giúp chống tia UV tự nhiên và bảo vệ bạn toàn diện | Hành trình từ phế phẩm trở thành thời trang giảm thiểu khí CO₂ và chất thải ra môi trường | Do đặc tính tự nhiên của sợi nên hiệu năng khử mùi chống UV sẽ tối ưu nhất trong 40 lần giặt đầu",
        "TenSP": "Quần Jeans Slimfit S.Café® Co Giãn Khử Mùi The Original M040 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024730_Thumb_1.jpg?v=1758007490&width=1946",
            "//yame.vn/cdn/shop/files/0024730_Thumb_2.jpg?v=1758007490&width=1946",
            "//yame.vn/cdn/shop/files/0024730_Thumb_6.jpg?v=1758007490&width=1946",
            "//yame.vn/cdn/shop/files/0024730_Thumb_3.jpg?v=1758007490&width=1946",
            "//yame.vn/cdn/shop/files/0024730_Thumb_4.jpg?v=1758007490&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Chất liệu vải Jean cao cấp giúp quần có độ bền vượt trội co giãn nhẹ thoải mái | Thiết kế ống đứng và chất liệu vải dày giúp quần giữ form dáng chuẩn gọn gàng | Quần được wash nhẹ mang lại vẻ ngoài đơn giản nhưng tinh tế và không kém phần thời trang | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slimfit Co Giãn The Original M100 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-nh-t-1174882671.jpg?v=1750786562&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-nh-t-1174882672.jpg?v=1750786564&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-nh-t-1174882673.jpg?v=1750786568&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-no-style-m100-xanh-nh-t-1174882674.jpg?v=1750786571&width=1946",
            "//yame.vn/cdn/shop/files/0023538.jpg?v=1758104835&width=1946"
        ],
        "GiaBan": 464100.0,
        "GiaMua": 357000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Thoáng Mát Tối Đa - Khô Thoáng Tức Thì | Sợi Lycra cao cấp ôm vừa vặn thoải mái vận động giữ phom dáng chuẩn sau nhiều lần giặt | Chất Cotton và Rayon siêu mềm mại nuông chiều làn da mặc là ghiền ngay",
        "TenSP": "Quần Jeans Slimfit Coolmax® Thoáng Mát The Original 007 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-nh-t-1176074109.jpg?v=1751364009&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-nh-t-1176074108.jpg?v=1751364006&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-nh-t-1176074105.jpg?v=1751363899&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-nh-t-1176074104.jpg?v=1751363896&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-nh-t-1176074101.jpg?v=1751363887&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Công nghệ S.Café® vừa khử mùi hiệu quả vừa giúp chống tia UV tự nhiên và bảo vệ bạn toàn diện | Hành trình từ phế phẩm trở thành thời trang giảm thiểu khí CO₂ và chất thải ra môi trường | Do đặc tính tự nhiên của sợi nên hiệu năng khử mùi chống UV sẽ tối ưu nhất trong 40 lần giặt đầu",
        "TenSP": "Quần Jeans Slimfit S.Café® Co Giãn Khử Mùi The Original M040 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024729_Thumb_1.jpg?v=1758007315&width=1946",
            "//yame.vn/cdn/shop/files/0024729_Thumb_2.jpg?v=1758007315&width=1946",
            "//yame.vn/cdn/shop/files/0024729_Thumb_3.jpg?v=1758007315&width=1946",
            "//yame.vn/cdn/shop/files/0024729_Thumb_4.jpg?v=1758007315&width=1946",
            "//yame.vn/cdn/shop/files/0024729_Thumb_5.jpg?v=1758007315&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Công nghệ S.Café® vừa khử mùi hiệu quả vừa giúp chống tia UV tự nhiên và bảo vệ bạn toàn diện | Hành trình từ phế phẩm trở thành thời trang giảm thiểu khí CO₂ và chất thải ra môi trường | Do đặc tính tự nhiên của sợi nên hiệu năng khử mùi chống UV sẽ tối ưu nhất trong 40 lần giặt đầu",
        "TenSP": "Quần Jeans Slimfit S.Café® Co Giãn Khử Mùi The Original M040 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024728Thumb1.jpg?v=1758006428&width=1946",
            "//yame.vn/cdn/shop/files/0024728Thumb2_2.jpg?v=1758006427&width=1946",
            "//yame.vn/cdn/shop/files/0024728Thumb3_2.jpg?v=1758006427&width=1946",
            "//yame.vn/cdn/shop/files/0024728Thumb4_2.jpg?v=1758006427&width=1946",
            "//yame.vn/cdn/shop/files/0024728Thumb5_2.jpg?v=1758006427&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Thoáng Mát Tối Đa - Khô Thoáng Tức Thì | Sợi Lycra cao cấp ôm vừa vặn thoải mái vận động giữ phom dáng chuẩn sau nhiều lần giặt | Chất Cotton và Rayon siêu mềm mại nuông chiều làn da mặc là ghiền ngay",
        "TenSP": "Quần Jeans Slimfit Coolmax® Thoáng Mát The Original 007 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-ng-1176074086.jpg?v=1751363647&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-ng-1176074085.jpg?v=1751363644&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-ng-1176074087.jpg?v=1751363652&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-ng-1176074088.jpg?v=1751363653&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-ng-1176074089.jpg?v=1751363656&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Thoáng Mát Tối Đa - Khô Thoáng Tức Thì | Sợi Lycra cao cấp ôm vừa vặn thoải mái vận động giữ phom dáng chuẩn sau nhiều lần giặt | Chất Cotton và Rayon siêu mềm mại nuông chiều làn da mặc là ghiền ngay",
        "TenSP": "Quần Jeans Slimfit Coolmax® Thoáng Mát The Original 007 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-m-1176074099.jpg?v=1751363884&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-m-1176074098.jpg?v=1751363881&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-m-1176074095.jpg?v=1751363773&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-m-1176074094.jpg?v=1751363770&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-the-original-m003-xanh-d-m-1176074092.jpg?v=1751363764&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Chất liệu Jean Cotton Spandex mềm mại mịn màng và mát mẻ mặc cực kỳ dễ chịu | Tạo sự thoải mái khi vận động không gây cảm giác gò bó khó chịu khi mặc | Sản phẩm có 4 màu phục vụ nhiều sở thích về màu sắc dễ dàng lựa chọn và phối đồ | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slim Fit Mềm Mịn Mát The Original 02 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-d-m-1174882592.jpg?v=1750854137&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-d-m-1174882593.jpg?v=1750854141&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-d-m-1174882591.jpg?v=1750854135&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-d-m-1174882587.jpg?v=1750786939&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-d-m-1174882590.jpg?v=1750854132&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Chất liệu Jean Cotton Spandex mềm mại mịn màng và mát mẻ mặc cực kỳ dễ chịu | Tạo sự thoải mái khi vận động không gây cảm giác gò bó khó chịu khi mặc | Sản phẩm có 4 màu phục vụ nhiều sở thích về màu sắc dễ dàng lựa chọn và phối đồ | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Jeans Slim Fit Mềm Mịn Mát The Original 02 Xanh Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-nh-t-1174882602.jpg?v=1750854361&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-nh-t-1174882595.jpg?v=1750854242&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-nh-t-1174882598.jpg?v=1750854252&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-nh-t-1174882597.jpg?v=1750854249&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-02-xanh-nh-t-1174882601.jpg?v=1750854261&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "1f0cd19a-dd11-4c6a-83fb-f5409c8c0f47",
        "MauSac": "Xanh Nhạt"
    },
    {
        "MoTa": "Trải nghiệm thoải mái tuyệt đối với chất liệu sợi Sorona mềm mại thoáng khí dễ chịu | Mang đến cảm giác thoải mái tối đa trong mọi hoạt động không gây gò bó | Giúp bạn luôn khô ráo và dễ chịu ngay cả khi vận động cường độ cao siêu tiện lợi | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Jogger Thun Sorona Mềm Mại Non Branded 41 Xám Chì",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-chi-1174881463.jpg?v=1750798819&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-chi-1174881462.jpg?v=1750798816&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-chi-1174881460.jpg?v=1750798811&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-chi-1174881461.jpg?v=1750798814&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-chi-1174881470.jpg?v=1750798933&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám Chì"
    },
    {
        "MoTa": "Trải nghiệm thoải mái tuyệt đối với chất liệu sợi Sorona mềm mại thoáng khí dễ chịu | Mang đến cảm giác thoải mái tối đa trong mọi hoạt động không gây gò bó | Giúp bạn luôn khô ráo và dễ chịu ngay cả khi vận động cường độ cao siêu tiện lợi | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Jogger Thun Sorona Mềm Mại Non Branded 41 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-den-1174881418.jpg?v=1750851010&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-den-1174881417.jpg?v=1750851007&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-den-1174881419.jpg?v=1750851013&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-den-1174881416.jpg?v=1750851003&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-den-1174881415.jpg?v=1750851001&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dù Nam Naruto 25 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-du-nam-naruto-25-den-1194143142.jpg?v=1758606850&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-du-nam-naruto-25-den-1194143141.jpg?v=1758606847&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-du-nam-naruto-25-den-1194143140.jpg?v=1758606844&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-du-nam-naruto-25-den-1194143139.jpg?v=1758606841&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-du-nam-naruto-25-den-1194143138.jpg?v=1758606838&width=1946"
        ],
        "GiaBan": 356460.0,
        "GiaMua": 274200,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Giúp vải luôn mát mẻ mang lại cảm giác dễ chịu và thoải mái cho người mặc | Sợi Cotton cao cấp mang lại cảm giác mềm mại khi chạm vào co giãn tốt thoải mái | Đường rã phối làm tăng độ bền khu vực đầu gối giúp quần ôm dáng tôn dáng | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Jogger Mềm Mịn Mát The Minimalist 003 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-den-1174881341.jpg?v=1750792330&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-den-1174881344.jpg?v=1750792339&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-den-1174881343.jpg?v=1750792336&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-den-1174881342.jpg?v=1750792332&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-den-1174881345.jpg?v=1750798202&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Co giãn 2 chiều chất liệu nhẹ giúp người mặc thoải mái vận động cả ngày dài | Vải dù thun có khả năng thấm hút mồ hôi tốt tạo cảm giác khô thoáng dễ chịu | Túi hộp lớn hai bên dây rút điều chỉnh vòng eo linh hoạt vị trí gối may xếp ly | Nên giặt bằng nước lạnh không ủi ở nhiệt độ cao để tránh làm hỏng chất liệu vải",
        "TenSP": "Quần Dù Cargo Nhẹ Co Giãn No Style M99 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-nau-1174882700.jpg?v=1750784285&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-nau-1174882701.jpg?v=1750784288&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-nau-1174882707.jpg?v=1750784405&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-nau-1174882706.jpg?v=1750784402&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-nau-1174882705.jpg?v=1750784300&width=1946"
        ],
        "GiaBan": 402480.0,
        "GiaMua": 309600,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Không bạc màu không rách không cũ không dây màu không khô cứng siêu bền bỉ | Nhờ vào sợi Modal vải mang lại cảm giác mềm mại vượt trội và khả năng thấm hút ẩm | Vải có khả năng co giãn linh hoạt giúp giữ được phom dáng và giảm thiểu tình trạng giãn",
        "TenSP": "Quần Jeans Jogger Mềm Mại Co Giãn Tek Black Jean 020 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461437.jpg?v=1755231615&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461436.jpg?v=1755231612&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461435.jpg?v=1755231609&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461434.jpg?v=1755231606&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jeans-jogger-tek-black-jean-020-1184461433.jpg?v=1755231603&width=1946"
        ],
        "GiaBan": 620100.0,
        "GiaMua": 477000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu vải Parachute giúp quần khô nhanh chóng sau khi giặt siêu tiện lợi | Khả năng thoát hơi ẩm giảm cảm giác nóng bức phù hợp cho mọi hoạt động | Độ co giãn tốt dễ dàng vận động mà không bị hạn chế thoải mái cả ngày dài | Nên lộn trái sản phẩm khi giặt để bảo vệ hình in và màu sắc của quần",
        "TenSP": "Quần Jogger Dù Nhẹ Nhanh Khô Seventy Seven 34 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-den-1174881314.jpg?v=1750797607&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-den-1174881312.jpg?v=1750797601&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-den-1174881309.jpg?v=1750792453&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-den-1174881311.jpg?v=1750792459&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-den-1174881313.jpg?v=1750797604&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Trải nghiệm thoải mái tuyệt đối với chất liệu sợi Sorona mềm mại thoáng khí dễ chịu | Mang đến cảm giác thoải mái tối đa trong mọi hoạt động không gây gò bó | Giúp bạn luôn khô ráo và dễ chịu ngay cả khi vận động cường độ cao siêu tiện lợi | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Jogger Thun Sorona Mềm Mại Non Branded 41 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-d-m-1174881240.jpg?v=1750796767&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-d-m-1174881247.jpg?v=1750792685&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-d-m-1174881246.jpg?v=1750792681&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-d-m-1174881245.jpg?v=1750796881&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-d-m-1174881244.jpg?v=1750796780&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "Chất liệu vải Parachute giúp quần khô nhanh chóng sau khi giặt siêu tiện lợi | Khả năng thoát hơi ẩm giảm cảm giác nóng bức phù hợp cho mọi hoạt động | Độ co giãn tốt dễ dàng vận động mà không bị hạn chế thoải mái cả ngày dài | Nên lộn trái sản phẩm khi giặt để bảo vệ hình in và màu sắc của quần",
        "TenSP": "Quần Jogger Dù Nhẹ Nhanh Khô Seventy Seven 34 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-den-1174881316.jpg?v=1750797610&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-den-1174881319.jpg?v=1750797619&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-den-1174881317.jpg?v=1750797614&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-den-1174881320.jpg?v=1750797842&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-den-1174881318.jpg?v=1750797616&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Chất liệu vải Parachute giúp quần khô nhanh chóng sau khi giặt siêu tiện lợi | Khả năng thoát hơi ẩm giảm cảm giác nóng bức phù hợp cho mọi hoạt động | Độ co giãn tốt dễ dàng vận động mà không bị hạn chế thoải mái cả ngày dài | Nên lộn trái sản phẩm khi giặt để bảo vệ hình in và màu sắc của quần",
        "TenSP": "Quần Jogger Dù Nhẹ Nhanh Khô Seventy Seven 34 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-reu-1174881332.jpg?v=1750797970&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-reu-1174881329.jpg?v=1750797961&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-reu-1174881330.jpg?v=1750797964&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-reu-1174881331.jpg?v=1750797967&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-xanh-reu-1174881328.jpg?v=1750797861&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Thiết kế lưng thun co giãn mang lại sự thoải mái và linh hoạt cho người mặc | Dáng quần rộng giúp tạo cảm giác thoải mái và phong cách hiện đại không lỗi mốt | Vải cotton double face giúp quần thoáng khí giữ cho người mặc luôn cảm thấy mát mẻ",
        "TenSP": "Quần Jogger Cotton Co Giãn No Style M121 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-den-1174882506.jpg?v=1750787892&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-den-1174882505.jpg?v=1750787890&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-den-1174882508.jpg?v=1750787899&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-den-1174882504.jpg?v=1750787299&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-den-1174882507.jpg?v=1750787896&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Parachute co giãn ít nhăn nhanh khô và độ bền cao mặc cực thích | 6 túi lớn có dây kéo và nút bóp cố định giúp bạn mang theo nhiều vật dụng | May rã thân trước hỗ trợ co giãn khi vận động lai quần bo thun dày dặn",
        "TenSP": "Quần Jogger Dù Co Giãn No Style M97 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-nau-d-m-1174881295.jpg?v=1750797259&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-nau-d-m-1174881298.jpg?v=1750797368&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-nau-d-m-1174881299.jpg?v=1750797370&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-nau-d-m-1174881294.jpg?v=1750797256&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-nau-d-m-1174881292.jpg?v=1750797250&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Sự kết hợp Cotton Poly và Spandex tạo ra chất vải vừa co giãn thấm hút tốt vừa bền bỉ | Dáng jogger chiết pence gối giúp bạn vận động đứng ngồi vô cùng thoải mái không gò bó | Nhiều màu trung tính kết hợp cùng dáng quần hiện đại dễ dàng phối cho cả đi chơi và vận động | Để giữ độ bền màu tốt nhất nên lộn trái và giặt với nước lạnh tránh chất tẩy mạnh",
        "TenSP": "Quần Jogger Jeans Co Giãn Multi-Color Jean 002 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xanh-reu-1174878748.jpg?v=1751079968&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xanh-reu-1175660191.jpg?v=1751093773&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xanh-reu-1175660192.jpg?v=1751093776&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xanh-reu-1175660188.jpg?v=1751093764&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xanh-reu-1175660189.jpg?v=1758162533&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Trải nghiệm thoải mái tuyệt đối với chất liệu sợi Sorona mềm mại thoáng khí dễ chịu | Mang đến cảm giác thoải mái tối đa trong mọi hoạt động không gây gò bó | Giúp bạn luôn khô ráo và dễ chịu ngay cả khi vận động cường độ cao siêu tiện lợi | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Jogger Thun Sorona Mềm Mại Non Branded 41 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-nh-t-1174881399.jpg?v=1750850890&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-nh-t-1174881398.jpg?v=1750850887&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-nh-t-1174881400.jpg?v=1750808762&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-nh-t-1174881402.jpg?v=1750808768&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-nh-t-1174881403.jpg?v=1750808772&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Co giãn 2 chiều chất liệu nhẹ giúp người mặc thoải mái vận động cả ngày dài | Vải dù thun có khả năng thấm hút mồ hôi tốt tạo cảm giác khô thoáng dễ chịu | Túi hộp lớn hai bên dây rút điều chỉnh vòng eo linh hoạt vị trí gối may xếp ly | Nên giặt bằng nước lạnh không ủi ở nhiệt độ cao để tránh làm hỏng chất liệu vải",
        "TenSP": "Quần Dù Cargo Nhẹ Co Giãn No Style M99 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-xam-1174882732.jpg?v=1750784537&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-xam-1174882733.jpg?v=1750784540&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-xam-1174882739.jpg?v=1750783806&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-xam-1174882738.jpg?v=1750783803&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-xam-1174882737.jpg?v=1750783801&width=1946"
        ],
        "GiaBan": 402480.0,
        "GiaMua": 309600,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Co giãn 2 chiều chất liệu nhẹ giúp người mặc thoải mái vận động cả ngày dài | Vải dù thun có khả năng thấm hút mồ hôi tốt tạo cảm giác khô thoáng dễ chịu | Túi hộp lớn hai bên dây rút điều chỉnh vòng eo linh hoạt vị trí gối may xếp ly | Nên giặt bằng nước lạnh không ủi ở nhiệt độ cao để tránh làm hỏng chất liệu vải",
        "TenSP": "Quần Dù Cargo Nhẹ Co Giãn No Style M99 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-den-1174882720.jpg?v=1750784417&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-den-1174882721.jpg?v=1750784420&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-den-1174882726.jpg?v=1750784534&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-den-1174882725.jpg?v=1750784532&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m98-den-1174882724.jpg?v=1750784528&width=1946"
        ],
        "GiaBan": 402480.0,
        "GiaMua": 309600,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Parachute co giãn ít nhăn nhanh khô và độ bền cao mặc cực thích | 6 túi lớn có dây kéo và nút bóp cố định giúp bạn mang theo nhiều vật dụng | May rã thân trước hỗ trợ co giãn khi vận động lai quần bo thun dày dặn",
        "TenSP": "Quần Jogger Dù Co Giãn No Style M97 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-kem-1174878750.jpg?v=1750821131&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-kem-1174878752.jpg?v=1750821136&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-kem-1174878753.jpg?v=1750821361&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-kem-1174878755.jpg?v=1750821368&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-kem-1174878756.jpg?v=1750821370&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Sự kết hợp Cotton Poly và Spandex tạo ra chất vải vừa co giãn thấm hút tốt vừa bền bỉ | Dáng jogger chiết pence gối giúp bạn vận động đứng ngồi vô cùng thoải mái không gò bó | Nhiều màu trung tính kết hợp cùng dáng quần hiện đại dễ dàng phối cho cả đi chơi và vận động | Để giữ độ bền màu tốt nhất nên lộn trái và giặt với nước lạnh tránh chất tẩy mạnh",
        "TenSP": "Quần Jogger Jeans Co Giãn Multi-Color Jean 002 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-1175660176.jpg?v=1751093416&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-1175660178.jpg?v=1751093642&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-1175660177.jpg?v=1751093419&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-1175660179.jpg?v=1751093644&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-1175660174.jpg?v=1751093410&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ mang đến cảm giác nhẹ nhàng thoáng mát hoàn hảo cho những buổi tập luyện cường độ cao | Công nghệ thấm hút mồ hôi vượt trội kết hợp kiểu dệt Diamond tạo sự thoáng khí | Chi tiết đai vắt khăn tiện lợi túi khóa kéo kín đáo nhãn phản quang an toàn | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư quần",
        "TenSP": "Quần Jogger Thể Thao Quick Dry The Beginner 007 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xanh-xam-1177437007.jpg?v=1752214086&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xanh-xam-1177437012.jpg?v=1752214202&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xanh-xam-1177437011.jpg?v=1752214098&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xanh-xam-1177437009.jpg?v=1752214091&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xanh-xam-1177437010.jpg?v=1752214095&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": "Trải nghiệm thoải mái tuyệt đối với chất liệu sợi Sorona mềm mại thoáng khí dễ chịu | Mang đến cảm giác thoải mái tối đa trong mọi hoạt động không gây gò bó | Giúp bạn luôn khô ráo và dễ chịu ngay cả khi vận động cường độ cao siêu tiện lợi | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Jogger Thun Sorona Mềm Mại Non Branded 41 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-reu-1174881389.jpg?v=1750808899&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-reu-1174881387.jpg?v=1750808894&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-reu-1174881384.jpg?v=1750808885&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-reu-1174881388.jpg?v=1750808897&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xanh-reu-1174881385.jpg?v=1750808888&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Giúp vải luôn mát mẻ mang lại cảm giác dễ chịu và thoải mái cho người mặc | Sợi Cotton cao cấp mang lại cảm giác mềm mại khi chạm vào co giãn tốt thoải mái | Đường rã phối làm tăng độ bền khu vực đầu gối giúp quần ôm dáng tôn dáng | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Jogger Mềm Mịn Mát The Minimalist 003 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-be-1174881361.jpg?v=1750798337&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-be-1174881360.jpg?v=1750798333&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-be-1174881356.jpg?v=1750798321&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-be-1174881359.jpg?v=1750798330&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-be-1174881358.jpg?v=1750798327&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chất liệu vải Parachute giúp quần khô nhanh chóng sau khi giặt siêu tiện lợi | Khả năng thoát hơi ẩm giảm cảm giác nóng bức phù hợp cho mọi hoạt động | Độ co giãn tốt dễ dàng vận động mà không bị hạn chế thoải mái cả ngày dài | Nên lộn trái sản phẩm khi giặt để bảo vệ hình in và màu sắc của quần",
        "TenSP": "Quần Jogger Dù Nhẹ Nhanh Khô Seventy Seven 34 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-nau-1174881325.jpg?v=1750797854&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-nau-1174881324.jpg?v=1750797850&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-nau-1174881326.jpg?v=1750797856&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-nau-1174881322.jpg?v=1750797844&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-seventy-seven-34-nau-1174881323.jpg?v=1750797847&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Thiết kế lưng thun co giãn mang lại sự thoải mái và linh hoạt cho người mặc | Dáng quần rộng giúp tạo cảm giác thoải mái và phong cách hiện đại không lỗi mốt | Vải cotton double face giúp quần thoáng khí giữ cho người mặc luôn cảm thấy mát mẻ",
        "TenSP": "Quần Jogger Cotton Co Giãn No Style M121 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-tr-ng-1174882513.jpg?v=1750788010&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-tr-ng-1174882514.jpg?v=1750788013&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-tr-ng-1174882511.jpg?v=1750788004&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-tr-ng-1174882512.jpg?v=1750788007&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m121-tr-ng-1174882515.jpg?v=1750788016&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Dù Thể Thao Nhanh Khô Beginner 15 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024160_thumb_1.jpg?v=1759144058&width=1946",
            "//yame.vn/cdn/shop/files/0024160_thumb_2.jpg?v=1759144058&width=1946",
            "//yame.vn/cdn/shop/files/0024160_thumb_3.jpg?v=1759144058&width=1946",
            "//yame.vn/cdn/shop/files/0024160_thumb_4.jpg?v=1759144058&width=1946",
            "//yame.vn/cdn/shop/files/0024160_thumb_5.jpg?v=1759144058&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Dù Thể Thao Nhanh Khô Beginner 15 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024159_thumb_1.jpg?v=1759143958&width=1946",
            "//yame.vn/cdn/shop/files/0024159_thumb_2.jpg?v=1759143958&width=1946",
            "//yame.vn/cdn/shop/files/0024159_thumb_4.jpg?v=1759143958&width=1946",
            "//yame.vn/cdn/shop/files/0024159_thumb_5.jpg?v=1759143958&width=1946",
            "//yame.vn/cdn/shop/files/0024159_thumb_3.jpg?v=1759143958&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Thể Thao Beginner 08 Xám Xanh",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023172_thumb_1.jpg?v=1759143655&width=1946",
            "//yame.vn/cdn/shop/files/0023172_thumb_2.jpg?v=1759143655&width=1946",
            "//yame.vn/cdn/shop/files/0023172_thumb_3.jpg?v=1759143655&width=1946",
            "//yame.vn/cdn/shop/files/0023172_thumb_4.jpg?v=1759143655&width=1946",
            "//yame.vn/cdn/shop/files/0023172_thumb_5.jpg?v=1759143655&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám Xanh"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Thể Thao Beginner 08 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023171_thumb_1.jpg?v=1759143509&width=1946",
            "//yame.vn/cdn/shop/files/0023171_thumb_2.jpg?v=1759143509&width=1946",
            "//yame.vn/cdn/shop/files/0023171_thumb_3.jpg?v=1759143509&width=1946",
            "//yame.vn/cdn/shop/files/0023171_thumb_4.jpg?v=1759143509&width=1946",
            "//yame.vn/cdn/shop/files/0023171_thumb_5.jpg?v=1759143509&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Thể Thao Beginner 08 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023170thumb1.jpg?v=1759142543&width=1946",
            "//yame.vn/cdn/shop/files/0023170thumb2.jpg?v=1759142542&width=1946",
            "//yame.vn/cdn/shop/files/0023170thumb3.jpg?v=1759142542&width=1946",
            "//yame.vn/cdn/shop/files/0023170thumb4.jpg?v=1759142543&width=1946",
            "//yame.vn/cdn/shop/files/0023170thumb5.jpg?v=1759142542&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Vải Bird Eye Mesh Non Branded 07 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023733_thumb_1.jpg?v=1758870796&width=1946",
            "//yame.vn/cdn/shop/files/0023733_thumb_2.jpg?v=1758870796&width=1946",
            "//yame.vn/cdn/shop/files/0023733_thumb_3.jpg?v=1758870796&width=1946",
            "//yame.vn/cdn/shop/files/0023733_thumb_4.jpg?v=1758870796&width=1946",
            "//yame.vn/cdn/shop/files/0023733_thumb_5.jpg?v=1758870796&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Vải Bird Eye Mesh Non Branded 07 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023732_thumb_1.jpg?v=1758870689&width=1946",
            "//yame.vn/cdn/shop/files/0023732_thumb_2.jpg?v=1758870689&width=1946",
            "//yame.vn/cdn/shop/files/0023732_thumb_3.jpg?v=1758870689&width=1946",
            "//yame.vn/cdn/shop/files/0023732_thumb_4.jpg?v=1758870689&width=1946",
            "//yame.vn/cdn/shop/files/0023732_thumb_5.jpg?v=1758870689&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Vải Bird Eye Mesh Non Branded 07 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023731_thumb_1.jpg?v=1758870582&width=1946",
            "//yame.vn/cdn/shop/files/0023731_thumb_2.jpg?v=1758870582&width=1946",
            "//yame.vn/cdn/shop/files/0023731_thumb_3.jpg?v=1758870582&width=1946",
            "//yame.vn/cdn/shop/files/0023731_thumb_4.jpg?v=1758870582&width=1946",
            "//yame.vn/cdn/shop/files/0023731_thumb_5.jpg?v=1758870582&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Vải Bird Eye Mesh Non Branded 07 Nâu Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023730_thumb_1.jpg?v=1758870426&width=1946",
            "//yame.vn/cdn/shop/files/0023730_thumb_2.jpg?v=1758870426&width=1946",
            "//yame.vn/cdn/shop/files/0023730_thumb_3.jpg?v=1758870426&width=1946",
            "//yame.vn/cdn/shop/files/0023730_thumb_4.jpg?v=1758870426&width=1946",
            "//yame.vn/cdn/shop/files/0023730_thumb_5.jpg?v=1758870426&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Vải Bird Eye Mesh Non Branded 07 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023729thumb1.jpg?v=1758870316&width=1946",
            "//yame.vn/cdn/shop/files/0023729thumb2.jpg?v=1758870316&width=1946",
            "//yame.vn/cdn/shop/files/0023729thumb3.jpg?v=1758870316&width=1946",
            "//yame.vn/cdn/shop/files/0023729thumb4.jpg?v=1758870316&width=1946",
            "//yame.vn/cdn/shop/files/0023729thumb5.jpg?v=1758870316&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Seventy Seven 35 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023307_thumb_1.jpg?v=1758870175&width=1946",
            "//yame.vn/cdn/shop/files/0023307_thumb_2.jpg?v=1758870175&width=1946",
            "//yame.vn/cdn/shop/files/0023307_thumb_3.jpg?v=1758867692&width=1946",
            "//yame.vn/cdn/shop/files/0023307_thumb_4.jpg?v=1758867692&width=1946",
            "//yame.vn/cdn/shop/files/0023307_thumb_5.jpg?v=1758867692&width=1946"
        ],
        "GiaBan": 252070.0,
        "GiaMua": 193900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Kem"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Jogger Thun Seventy Seven 35 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023306thumb1.jpg?v=1758867552&width=1946",
            "//yame.vn/cdn/shop/files/0023306thumb2.jpg?v=1758867552&width=1946",
            "//yame.vn/cdn/shop/files/0023306thumb3.jpg?v=1758867552&width=1946",
            "//yame.vn/cdn/shop/files/0023306thumb4.jpg?v=1758867552&width=1946",
            "//yame.vn/cdn/shop/files/0023306thumb5.jpg?v=1758867552&width=1946"
        ],
        "GiaBan": 252070.0,
        "GiaMua": 193900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dù Ống Rộng Phối Màu No Style M114 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023701_thumb_1.jpg?v=1758711200&width=1946",
            "//yame.vn/cdn/shop/files/0023701_thumb_2.jpg?v=1758711200&width=1946",
            "//yame.vn/cdn/shop/files/0023701_thumb_4.jpg?v=1758711200&width=1946",
            "//yame.vn/cdn/shop/files/0023701_thumb_3.jpg?v=1758711200&width=1946",
            "//yame.vn/cdn/shop/files/0023701_thumb_5.jpg?v=1758711200&width=1946"
        ],
        "GiaBan": 388570.0,
        "GiaMua": 298900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dù Ống Rộng Phối Màu No Style M114 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023700thumb1_1de61c1d-d4c3-4bce-aab3-b5106c8f5f2d.jpg?v=1758710763&width=1946",
            "//yame.vn/cdn/shop/files/0023700thumb2_911d0501-07ee-4680-a87e-6f75beae7dc0.jpg?v=1758710764&width=1946",
            "//yame.vn/cdn/shop/files/0023700thumb4_e20e71bd-10ec-4997-aa1d-dfa6e452436a.jpg?v=1758710764&width=1946",
            "//yame.vn/cdn/shop/files/0023700thumb3_0f44cea0-1295-4121-a7b4-69f70d7194dc.jpg?v=1758710764&width=1946",
            "//yame.vn/cdn/shop/files/0023700thumb5_40a82104-3821-4bbd-a0ba-6482e84d40b3.jpg?v=1758710764&width=1946"
        ],
        "GiaBan": 388570.0,
        "GiaMua": 298900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dù Ống Rộng Phối Màu No Style M99 Đen Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023639_thumb_1.jpg?v=1758709995&width=1946",
            "//yame.vn/cdn/shop/files/0023639_thumb_2.jpg?v=1758709995&width=1946",
            "//yame.vn/cdn/shop/files/0023639_thumb_3.jpg?v=1758709995&width=1946",
            "//yame.vn/cdn/shop/files/0023639_thumb_4.jpg?v=1758709995&width=1946",
            "//yame.vn/cdn/shop/files/0023639_thumb_5.jpg?v=1758709995&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen Đỏ"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dù Ống Rộng Phối Màu No Style M99 Đen Xanh",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023638_thumb_1.jpg?v=1758709864&width=1946",
            "//yame.vn/cdn/shop/files/0023638_thumb_2.jpg?v=1758709864&width=1946",
            "//yame.vn/cdn/shop/files/0023638_thumb_3.jpg?v=1758709864&width=1946",
            "//yame.vn/cdn/shop/files/0023638_thumb_6.jpg?v=1758709864&width=1946",
            "//yame.vn/cdn/shop/files/0023638_thumb_4.jpg?v=1758709864&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen Xanh"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dù Ống Rộng Phối Màu No Style M99 Đen Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0023637thumb1.jpg?v=1758709733&width=1946",
            "//yame.vn/cdn/shop/files/0023637thumb2.jpg?v=1758709733&width=1946",
            "//yame.vn/cdn/shop/files/0023637thumb3.jpg?v=1758709733&width=1946",
            "//yame.vn/cdn/shop/files/0023637thumb4.jpg?v=1758709733&width=1946",
            "//yame.vn/cdn/shop/files/0023637thumb5.jpg?v=1758709733&width=1946"
        ],
        "GiaBan": 361270.0,
        "GiaMua": 277900,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen Rêu"
    },
    {
        "MoTa": "Chất liệu Parachute co giãn ít nhăn nhanh khô và độ bền cao mặc cực thích | 6 túi lớn có dây kéo và nút bóp cố định giúp bạn mang theo nhiều vật dụng | May rã thân trước hỗ trợ co giãn khi vận động lai quần bo thun dày dặn",
        "TenSP": "Quần Jogger Dù Co Giãn No Style M97 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-xanh-reu-1174881307.jpg?v=1750792451&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-xanh-reu-1174881305.jpg?v=1750792445&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-xanh-reu-1174881303.jpg?v=1750797380&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-xanh-reu-1174881304.jpg?v=1750792442&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m97-xanh-reu-1174881302.jpg?v=1750797377&width=1946"
        ],
        "GiaBan": 594100.0,
        "GiaMua": 457000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ mang đến cảm giác nhẹ nhàng thoáng mát hoàn hảo cho những buổi tập luyện cường độ cao | Công nghệ thấm hút mồ hôi vượt trội kết hợp kiểu dệt Diamond tạo sự thoáng khí | Chi tiết đai vắt khăn tiện lợi túi khóa kéo kín đáo nhãn phản quang an toàn | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư quần",
        "TenSP": "Quần Jogger Thể Thao Quick Dry The Beginner 007 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xam-1177437029.jpg?v=1752214686&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xam-1177437028.jpg?v=1752214683&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xam-1177437025.jpg?v=1752214456&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xam-1177437024.jpg?v=1752214454&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-xam-1177437021.jpg?v=1752214445&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Trọng lượng siêu nhẹ mang đến cảm giác nhẹ nhàng thoáng mát hoàn hảo cho những buổi tập luyện cường độ cao | Công nghệ thấm hút mồ hôi vượt trội kết hợp kiểu dệt Diamond tạo sự thoáng khí | Chi tiết đai vắt khăn tiện lợi túi khóa kéo kín đáo nhãn phản quang an toàn | Chất liệu Polyester ít nhăn bền màu không ủi nóng với nhiệt độ >100°C để tránh hư quần",
        "TenSP": "Quần Jogger Thể Thao Quick Dry The Beginner 007 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-den-1177437041.jpg?v=1752214818&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-den-1177437040.jpg?v=1752214816&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-den-1177437035.jpg?v=1752214800&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-den-1177437034.jpg?v=1752214698&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-the-beginner-m007-den-1177437033.jpg?v=1752214695&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Sự kết hợp Cotton Poly và Spandex tạo ra chất vải vừa co giãn thấm hút tốt vừa bền bỉ | Dáng jogger chiết pence gối giúp bạn vận động đứng ngồi vô cùng thoải mái không gò bó | Nhiều màu trung tính kết hợp cùng dáng quần hiện đại dễ dàng phối cho cả đi chơi và vận động | Để giữ độ bền màu tốt nhất nên lộn trái và giặt với nước lạnh tránh chất tẩy mạnh",
        "TenSP": "Quần Jogger Jeans Co Giãn Multi-Color Jean 002 Xám Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-nau-1175660186.jpg?v=1751093761&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-nau-1175660182.jpg?v=1751093650&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-nau-1175660181.jpg?v=1751093648&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-nau-1175660183.jpg?v=1751093654&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-xam-nau-1175660184.jpg?v=1751093657&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám Nâu"
    },
    {
        "MoTa": "Sự kết hợp Cotton Poly và Spandex tạo ra chất vải vừa co giãn thấm hút tốt vừa bền bỉ | Dáng jogger chiết pence gối giúp bạn vận động đứng ngồi vô cùng thoải mái không gò bó | Nhiều màu trung tính kết hợp cùng dáng quần hiện đại dễ dàng phối cho cả đi chơi và vận động | Để giữ độ bền màu tốt nhất nên lộn trái và giặt với nước lạnh tránh chất tẩy mạnh",
        "TenSP": "Quần Jogger Jeans Co Giãn Multi-Color Jean 002 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-nau-1175660195.jpg?v=1751093881&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-nau-1175660194.jpg?v=1751093779&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-nau-1175660196.jpg?v=1751093885&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-nau-1175660197.jpg?v=1751093887&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-jean-the-original-m002-nau-1175660198.jpg?v=1751093891&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Trải nghiệm thoải mái tuyệt đối với chất liệu sợi Sorona mềm mại thoáng khí dễ chịu | Mang đến cảm giác thoải mái tối đa trong mọi hoạt động không gây gò bó | Giúp bạn luôn khô ráo và dễ chịu ngay cả khi vận động cường độ cao siêu tiện lợi | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Jogger Thun Sorona Mềm Mại Non Branded 41 Xám Xanh",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-xanh-1174881455.jpg?v=1750798801&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-xanh-1174881453.jpg?v=1750798696&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-xanh-1174881454.jpg?v=1750798699&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-xanh-1174881452.jpg?v=1750798693&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-xam-xanh-1174881451.jpg?v=1750798691&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám Xanh"
    },
    {
        "MoTa": "Trải nghiệm thoải mái tuyệt đối với chất liệu sợi Sorona mềm mại thoáng khí dễ chịu | Mang đến cảm giác thoải mái tối đa trong mọi hoạt động không gây gò bó | Giúp bạn luôn khô ráo và dễ chịu ngay cả khi vận động cường độ cao siêu tiện lợi | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Jogger Thun Sorona Mềm Mại Non Branded 41 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-d-m-1174881371.jpg?v=1750798454&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-d-m-1174881375.jpg?v=1750850659&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-d-m-1174881372.jpg?v=1750798457&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-d-m-1174881373.jpg?v=1750798460&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-41-nau-d-m-1174881374.jpg?v=1750850656&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Giúp vải luôn mát mẻ mang lại cảm giác dễ chịu và thoải mái cho người mặc | Sợi Cotton cao cấp mang lại cảm giác mềm mại khi chạm vào co giãn tốt thoải mái | Đường rã phối làm tăng độ bền khu vực đầu gối giúp quần ôm dáng tôn dáng | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt",
        "TenSP": "Quần Jogger Thun Mềm Mát The Minimalist 003 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-xam-1174881336.jpg?v=1750797979&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-xam-1174881338.jpg?v=1750792324&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-xam-1174881339.jpg?v=1750792328&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-xam-1174881334.jpg?v=1750797973&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-cool-touch-03-xam-1174881335.jpg?v=1750797976&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "ded15e90-8df0-4db6-9ff7-617ee4f95499",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Ống đứng vừa vặn tôn dáng người mặc với thiết kế tinh tế và đường may tỉ mỉ | Chất liệu denim co giãn thoáng mát thân thiện với môi trường an toàn cho người sử dụng | Dễ dàng kết hợp với nhiều loại áo khác nhau và phù hợp với nhiều hoàn cảnh | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần",
        "TenSP": "Quần Kaki Chinos Co Giãn Thoáng Mát The Minimalist 011 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-1174882798.jpg?v=1750785364&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-1174882799.jpg?v=1750785367&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-1174882801.jpg?v=1750785374&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-1174882800.jpg?v=1750785370&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174881196.jpg?v=1758106362&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Tinh tế trong từng đường nét basic là chìa khóa để bạn tự tin biến hóa phong cách | Vừa thoải mái vận động vừa bền bỉ và giữ form hoàn hảo không lo bai dão | Dễ dàng bắt cặp cùng mọi trang phục từ casual đến formal gam màu trung tính | Để giữ màu và form quần tốt nhất nên giặt với nước lạnh và phơi ở nơi thoáng mát",
        "TenSP": "Quần Kaki Chinos Co Giãn Non Branded 32 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-kem-1174882786.jpg?v=1750783561&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-kem-1174882787.jpg?v=1750783564&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-kem-1174882790.jpg?v=1750783573&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-kem-1174882789.jpg?v=1750783571&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-kem-1174882788.jpg?v=1750783567&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Ống đứng vừa vặn tôn dáng người mặc với thiết kế tinh tế và đường may tỉ mỉ | Chất liệu denim co giãn thoáng mát thân thiện với môi trường an toàn cho người sử dụng | Dễ dàng kết hợp với nhiều loại áo khác nhau và phù hợp với nhiều hoàn cảnh | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần",
        "TenSP": "Quần Kaki Chinos Co Giãn Thoáng Mát The Minimalist 011 Xám Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-den-1174882812.jpg?v=1750783443&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-den-1174882813.jpg?v=1750783445&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-den-1174882815.jpg?v=1750783452&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-xam-den-1174882814.jpg?v=1750783448&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174881196.jpg?v=1758106362&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Xám Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dài Kaki Dragon Ball Z 26 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024426_thumb_1.jpg?v=1758076292&width=1946",
            "//yame.vn/cdn/shop/files/0024426_thumb_2.jpg?v=1758076292&width=1946",
            "//yame.vn/cdn/shop/files/0024426_thumb_3.jpg?v=1758076292&width=1946",
            "//yame.vn/cdn/shop/files/0024426_thumb_4.jpg?v=1758076292&width=1946",
            "//yame.vn/cdn/shop/files/0024426_thumb_5.jpg?v=1758076292&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Be"
    },
    {
        "MoTa": "Tinh tế trong từng đường nét basic là chìa khóa để bạn tự tin biến hóa phong cách | Vừa thoải mái vận động vừa bền bỉ và giữ form hoàn hảo không lo bai dão | Dễ dàng bắt cặp cùng mọi trang phục từ casual đến formal gam màu trung tính | Để giữ màu và form quần tốt nhất nên giặt với nước lạnh và phơi ở nơi thoáng mát",
        "TenSP": "Quần Kaki Chinos Co Giãn Non Branded 32 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-den-1174882743.jpg?v=1750783816&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-den-1174882744.jpg?v=1750783819&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-den-1174882747.jpg?v=1750784656&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-den-1174882746.jpg?v=1750784653&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-den-1174882745.jpg?v=1750784650&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Ống đứng vừa vặn tôn dáng người mặc với thiết kế tinh tế và đường may tỉ mỉ | Chất liệu denim co giãn thoáng mát thân thiện với môi trường an toàn cho người sử dụng | Dễ dàng kết hợp với nhiều loại áo khác nhau và phù hợp với nhiều hoàn cảnh | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần",
        "TenSP": "Quần Kaki Chinos Co Giãn Thoáng Mát The Minimalist 011 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-den-1174881201.jpg?v=1750796290&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-den-1174881197.jpg?v=1750796179&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-den-1174881200.jpg?v=1750796287&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-den-1174881199.jpg?v=1750796284&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-den-1174881198.jpg?v=1750796281&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Tinh tế trong từng đường nét basic là chìa khóa để bạn tự tin biến hóa phong cách | Vừa thoải mái vận động vừa bền bỉ và giữ form hoàn hảo không lo bai dão | Dễ dàng bắt cặp cùng mọi trang phục từ casual đến formal gam màu trung tính | Để giữ màu và form quần tốt nhất nên giặt với nước lạnh và phơi ở nơi thoáng mát",
        "TenSP": "Quần Kaki Chinos Co Giãn Non Branded 32 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xanh-reu-1174882779.jpg?v=1750785019&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xanh-reu-1174882780.jpg?v=1750785241&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xanh-reu-1174882783.jpg?v=1750785252&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xanh-reu-1174882782.jpg?v=1750785246&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xanh-reu-1174882781.jpg?v=1750785244&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Ống đứng vừa vặn tôn dáng người mặc với thiết kế tinh tế và đường may tỉ mỉ | Chất liệu denim co giãn thoáng mát thân thiện với môi trường an toàn cho người sử dụng | Dễ dàng kết hợp với nhiều loại áo khác nhau và phù hợp với nhiều hoàn cảnh | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần",
        "TenSP": "Quần Kaki Chinos Co Giãn Thoáng Mát The Minimalist 011 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174882817.jpg?v=1750783453&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174882818.jpg?v=1750783459&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174882819.jpg?v=1750783461&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174882820.jpg?v=1750785376&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174881196.jpg?v=1758106362&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dài Kaki Dragon Ball Z 26 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024427_thumb_1.jpg?v=1758076413&width=1946",
            "//yame.vn/cdn/shop/files/0024427_thumb_2.jpg?v=1758076413&width=1946",
            "//yame.vn/cdn/shop/files/0024427_thumb_3.jpg?v=1758076413&width=1946",
            "//yame.vn/cdn/shop/files/0024427_thumb_4.jpg?v=1758076413&width=1946",
            "//yame.vn/cdn/shop/files/0024427_thumb_5.jpg?v=1758076413&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Dài Kaki Dragon Ball Z 26 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024425_thumb_1.jpg?v=1758017785&width=1946",
            "//yame.vn/cdn/shop/files/0024425_thumb_2.jpg?v=1758017785&width=1946",
            "//yame.vn/cdn/shop/files/0024425_thumb_3.jpg?v=1758017785&width=1946",
            "//yame.vn/cdn/shop/files/0024425_thumb_4.jpg?v=1758017785&width=1946",
            "//yame.vn/cdn/shop/files/0024425_thumb_5.jpg?v=1758017785&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Kaki Basic Mềm Mịn Non Branded 50 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-xam-1192185485.jpg?v=1757498037&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-xam-1192185484.jpg?v=1757498035&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-xam-1192185480.jpg?v=1757497927&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-xam-1192185479.jpg?v=1757497924&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-xam-1192185478.jpg?v=1757497921&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Kaki Basic Mềm Mịn Non Branded 50 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-nau-1192185476.jpg?v=1757497915&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-nau-1192185475.jpg?v=1757497813&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-nau-1192185474.jpg?v=1757497810&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-nau-1192185473.jpg?v=1757497807&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-nau-1192185472.jpg?v=1757497806&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Kaki Basic Mềm Mịn Non Branded 50 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-den-1192185493.jpg?v=1757498161&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-den-1192185492.jpg?v=1757498158&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-den-1192185488.jpg?v=1757498047&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-den-1192185487.jpg?v=1757498045&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-kaki-non-branded-50-den-1192185486.jpg?v=1757498041&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Tinh tế trong từng đường nét basic là chìa khóa để bạn tự tin biến hóa phong cách | Vừa thoải mái vận động vừa bền bỉ và giữ form hoàn hảo không lo bai dão | Dễ dàng bắt cặp cùng mọi trang phục từ casual đến formal gam màu trung tính | Để giữ màu và form quần tốt nhất nên giặt với nước lạnh và phơi ở nơi thoáng mát",
        "TenSP": "Quần Kaki Chinos Co Giãn Non Branded 32 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-1174882751.jpg?v=1750784765&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-1174882752.jpg?v=1750784767&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-1174882755.jpg?v=1750784779&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-1174882754.jpg?v=1750784774&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-1174882753.jpg?v=1750784771&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Tinh tế trong từng đường nét basic là chìa khóa để bạn tự tin biến hóa phong cách | Vừa thoải mái vận động vừa bền bỉ và giữ form hoàn hảo không lo bai dão | Dễ dàng bắt cặp cùng mọi trang phục từ casual đến formal gam màu trung tính | Để giữ màu và form quần tốt nhất nên giặt với nước lạnh và phơi ở nơi thoáng mát",
        "TenSP": "Quần Kaki Chinos Co Giãn Non Branded 32 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xam-1174882765.jpg?v=1750784884&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xam-1174882766.jpg?v=1750784887&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xam-1174882769.jpg?v=1750784896&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xam-1174882768.jpg?v=1750784893&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-xam-1174882767.jpg?v=1750784890&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Tinh tế trong từng đường nét basic là chìa khóa để bạn tự tin biến hóa phong cách | Vừa thoải mái vận động vừa bền bỉ và giữ form hoàn hảo không lo bai dão | Dễ dàng bắt cặp cùng mọi trang phục từ casual đến formal gam màu trung tính | Để giữ màu và form quần tốt nhất nên giặt với nước lạnh và phơi ở nơi thoáng mát",
        "TenSP": "Quần Kaki Chinos Co Giãn Non Branded 32 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-nh-t-1174882772.jpg?v=1750785001&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-nh-t-1174882773.jpg?v=1750785004&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-nh-t-1174882776.jpg?v=1750785014&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-nh-t-1174882775.jpg?v=1750785010&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-non-branded-32-nau-nh-t-1174882774.jpg?v=1750785007&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Ống đứng vừa vặn tôn dáng người mặc với thiết kế tinh tế và đường may tỉ mỉ | Chất liệu denim co giãn thoáng mát thân thiện với môi trường an toàn cho người sử dụng | Dễ dàng kết hợp với nhiều loại áo khác nhau và phù hợp với nhiều hoàn cảnh | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần",
        "TenSP": "Quần Kaki Chinos Co Giãn Thoáng Mát The Minimalist 011 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-d-m-1174882793.jpg?v=1750783580&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-d-m-1174882794.jpg?v=1750785256&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-d-m-1174882796.jpg?v=1750785362&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-d-m-1174882795.jpg?v=1750785259&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-dai-no-style-m115-nau-nh-t-1174881196.jpg?v=1758106362&width=1946"
        ],
        "GiaBan": 646100.0,
        "GiaMua": 497000,
        "TrangThai": "ACTIVE",
        "MaDM": "0f91b13c-5aab-4cf0-ae76-4a6b215c8b3d",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L01 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-xam-1174879371.jpg?v=1750829164&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-xam-1174879370.jpg?v=1750829161&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-xam-1174879372.jpg?v=1750829167&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-xam-1174879369.jpg?v=1750829059&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-xam-1174879365.jpg?v=1750817172&width=1946"
        ],
        "GiaBan": 85085.0,
        "GiaMua": 65450,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-den-1174879305.jpg?v=1750828450&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-den-1174879304.jpg?v=1750828447&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-den-1174879303.jpg?v=1750828443&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-den-1174879302.jpg?v=1750828441&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-den-1174879306.jpg?v=1750828452&width=1946"
        ],
        "GiaBan": 100100.0,
        "GiaMua": 77000,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L02 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-xam-1174879325.jpg?v=1750827651&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-xam-1174879329.jpg?v=1750817419&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-xam-1174879328.jpg?v=1750817416&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-xam-1174879327.jpg?v=1750817413&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-xam-1174879326.jpg?v=1750817410&width=1946"
        ],
        "GiaBan": 100100.0,
        "GiaMua": 77000,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L02 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-den-1174879318.jpg?v=1750828684&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-den-1174879317.jpg?v=1750828681&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-den-1174879316.jpg?v=1750828581&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-den-1174879321.jpg?v=1750817402&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xanh-den-1174879320.jpg?v=1750828690&width=1946"
        ],
        "GiaBan": 100100.0,
        "GiaMua": 77000,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-den-1174879356.jpg?v=1750829044&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-den-1174879355.jpg?v=1750829041&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-den-1174879354.jpg?v=1750828940&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-den-1174879357.jpg?v=1750829047&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-den-1174879349.jpg?v=1750828926&width=1946"
        ],
        "GiaBan": 85085.0,
        "GiaMua": 65450,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L01 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xam-1174879389.jpg?v=1750817059&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xam-1174879388.jpg?v=1750817056&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xam-1174879395.jpg?v=1750829404&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xam-1174879398.jpg?v=1750829413&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xam-1174879397.jpg?v=1750829410&width=1946"
        ],
        "GiaBan": 100100.0,
        "GiaMua": 77000,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L01 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-den-1174879386.jpg?v=1750817053&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-den-1174879381.jpg?v=1750829287&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-den-1174879380.jpg?v=1750829285&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-den-1174879384.jpg?v=1750817048&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l01-xanh-den-1174879383.jpg?v=1750817044&width=1946"
        ],
        "GiaBan": 100100.0,
        "GiaMua": 77000,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Vải Lụa Băng #Y2010 L02 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xam-1174879339.jpg?v=1750828819&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xam-1174879338.jpg?v=1750828817&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xam-1174879337.jpg?v=1750828813&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xam-1174879340.jpg?v=1750817281&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-l02-xam-1174879341.jpg?v=1750817284&width=1946"
        ],
        "GiaBan": 100100.0,
        "GiaMua": 77000,
        "TrangThai": "ACTIVE",
        "MaDM": "a935b62c-784b-4702-b27b-64cc2b7a5df1",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Seamless Mềm Siêu Co Giãn #Y2010 M2 Combo 3 Free Color",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m2-combo-3-1174879441.jpg?v=1750830373&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m2-combo-3-1174879440.jpg?v=1750830370&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m2-combo-3-1174879439.jpg?v=1750830367&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m2-combo-3-1174879438.jpg?v=1750830364&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m2-combo-3-1174879441.jpg?v=1750830373&width=416"
        ],
        "GiaBan": 351000.0,
        "GiaMua": 270000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Free Color"
    },
    {
        "MoTa": null,
        "TenSP": "Quần lót nam Tam Giác Seamless Mềm Siêu Co Giãn #Y2010 M7 Combo 3 Free Color",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m7-combo-3-1174879260.jpg?v=1750817770&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m7-combo-3-1174879262.jpg?v=1750817776&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m7-combo-3-1174879261.jpg?v=1750817773&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m7-combo-3-1174879258.jpg?v=1750817764&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m7-combo-3-1174879259.jpg?v=1750817767&width=1946"
        ],
        "GiaBan": 351000.0,
        "GiaMua": 270000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Free Color"
    },
    {
        "MoTa": null,
        "TenSP": "Quần lót nam Tam Giác Seamless Mềm Siêu Co Giãn #Y2010 M6 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-tr-ng-1174879234.jpg?v=1750818371&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-tr-ng-1174879235.jpg?v=1750818373&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-tr-ng-1174879233.jpg?v=1750818367&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-tr-ng-1174879231.jpg?v=1750818362&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-tr-ng-1174879232.jpg?v=1750818364&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Seamless Mềm Siêu Co Giãn #Y2010 M1 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-den-1174879408.jpg?v=1750829656&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-den-1174879407.jpg?v=1750829651&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-den-1174879409.jpg?v=1750829658&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-den-1174879410.jpg?v=1750829659&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-den-1174879408.jpg?v=1750829656&width=416"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần lót nam Tam Giác Seamless Mềm Siêu Co Giãn #Y2010 M6 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0020968thumb1.jpg?v=1750818347&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-den-1174879228.jpg?v=1750827723&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-den-1174879227.jpg?v=1750827616&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-den-1174879226.jpg?v=1750827614&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-den-1174879225.jpg?v=1750827610&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần lót nam Tam Giác Seamless Mềm Siêu Co Giãn #Y2010 M6 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-1174879240.jpg?v=1750827732&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-1174879238.jpg?v=1750827726&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-1174879239.jpg?v=1750827729&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-1174879241.jpg?v=1750827735&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m6-xam-1174879237.jpg?v=1750818376&width=1946"
        ],
        "GiaBan": 109395.0,
        "GiaMua": 84150,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Seamless Mềm Siêu Co Giãn #Y2010 M1 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-xam-tr-ng-1174879403.jpg?v=1750829641&width=1946",
            "//yame.vn/cdn/shop/files/0020802thumb2.jpg?v=1750816925&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-xam-tr-ng-1174879401.jpg?v=1750829422&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-xam-tr-ng-1174879405.jpg?v=1750829647&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-a02-xam-tr-ng-1174879404.jpg?v=1750829644&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Seamless Mềm Siêu Co Giãn Beginner 82 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-den-1174879491.jpg?v=1750816807&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-den-1174879490.jpg?v=1750816805&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-den-1174879489.jpg?v=1750816801&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-den-1174879492.jpg?v=1750816811&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-den-1174879488.jpg?v=1750830967&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Seamless Mềm Siêu Co Giãn Beginner 82 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-1174879464.jpg?v=1750830731&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-1174879462.jpg?v=1750830724&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-1174879465.jpg?v=1750830733&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-1174879463.jpg?v=1750830727&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-1174879458.jpg?v=1750830615&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Seamless Mềm Siêu Co Giãn Beginner 82 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-tr-ng-1174879448.jpg?v=1750830491&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-tr-ng-1174879443.jpg?v=1750830376&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-tr-ng-1174879449.jpg?v=1750830493&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-tr-ng-1174879445.jpg?v=1750830482&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-82-xam-tr-ng-1174879444.jpg?v=1750830379&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Seamless Mềm Siêu Co Giãn Beginner 83 Free Color",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-83-combo-3-1174878858.jpg?v=1750820296&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-83-combo-3-1174878855.jpg?v=1750820287&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-83-combo-3-1174878860.jpg?v=1750822570&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-83-combo-3-1174878856.jpg?v=1750820290&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-dai-beginner-83-combo-3-1174878861.jpg?v=1750822573&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "c2c731ec-5db5-4ee2-9e6f-2d01d2c365b2",
        "MauSac": "Free Color"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Tam Giác Bamboo Mềm Mại Kháng Khuẩn #Y2010 M3 Combo 3 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-den-1174879426.jpg?v=1750830016&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-den-1174879425.jpg?v=1750830013&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-den-1174879427.jpg?v=1750830019&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-den-1174879420.jpg?v=1750829899&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-den-1174879421.jpg?v=1750830001&width=1946"
        ],
        "GiaBan": 298350.0,
        "GiaMua": 229500,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Tam Giác Bamboo Mềm Mại Kháng Khuẩn #Y2010 M3 Combo 3 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-xam-1174879433.jpg?v=1750830135&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-xam-1174879429.jpg?v=1750830123&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-xam-1174879436.jpg?v=1750830361&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-xam-1174879430.jpg?v=1750830126&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-m3-combo-3-xam-1174879435.jpg?v=1750830141&width=1946"
        ],
        "GiaBan": 298350.0,
        "GiaMua": 229500,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Bamboo Mềm Mại Kháng Khuẩn #Y2010 M2 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-den-1174879278.jpg?v=1750818257&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-den-1174879277.jpg?v=1750818254&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-den-1174879274.jpg?v=1750818130&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-den-1174879275.jpg?v=1750818133&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-den-1174879273.jpg?v=1750818127&width=1946"
        ],
        "GiaBan": 109395.0,
        "GiaMua": 84150,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Tam Giác Bamboo Mềm Mại Kháng Khuẩn #Y2010 M8 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-xam-1174879290.jpg?v=1750828208&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-xam-1174879294.jpg?v=1750828219&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-xam-1174879288.jpg?v=1750828201&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-xam-1174879291.jpg?v=1750828210&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-xam-1174879292.jpg?v=1750828213&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Tam Giác Bamboo Mềm Mại Kháng Khuẩn #Y2010 M8 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-den-1174879281.jpg?v=1750817644&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-den-1174879284.jpg?v=1750817653&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-den-1174879282.jpg?v=1750817647&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-den-1174879285.jpg?v=1750817657&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m8-den-1174879280.jpg?v=1750817641&width=1946"
        ],
        "GiaBan": 126100.0,
        "GiaMua": 97000,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Boxer Bamboo Mềm Mại Kháng Khuẩn #Y2010 M2 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-xam-1174879264.jpg?v=1750818002&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-xam-1174879269.jpg?v=1750818016&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-xam-1174879265.jpg?v=1750818005&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-xam-1174879270.jpg?v=1750818121&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-boxer-ng-n-y2010-ver3-xam-1174879266.jpg?v=1750818008&width=1946"
        ],
        "GiaBan": 128700.0,
        "GiaMua": 99000,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Tam Giác Bamboo Mềm Mại Kháng Khuẩn #Y2010 M8 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-xam-1174879250.jpg?v=1750827973&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-xam-1174879254.jpg?v=1750818248&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-xam-1174879249.jpg?v=1750827971&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-xam-1174879255.jpg?v=1750818251&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-xam-1174879251.jpg?v=1750827976&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Lót Nam Tam Giác Bamboo Mềm Mại Kháng Khuẩn #Y2010 M8 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-den-1174879248.jpg?v=1750827967&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-den-1174879245.jpg?v=1750827741&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-den-1174879247.jpg?v=1750827964&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-den-1174879244.jpg?v=1750827738&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-lot-tam-giac-y2010-m9-combo-3-den-1174879246.jpg?v=1750827961&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "3e250d29-f8a5-4d30-aba7-4d36ef32869c",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-nh-t-1174882366.jpg?v=1750851967&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-nh-t-1174882365.jpg?v=1750851965&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-nh-t-1174882367.jpg?v=1750851970&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-nh-t-1174882364.jpg?v=1750851962&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-nh-t-1174882368.jpg?v=1750851973&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-1174882417.jpg?v=1750852700&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-1174882418.jpg?v=1750852801&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-1174882422.jpg?v=1750788727&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-1174882421.jpg?v=1750788724&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xam-1174882420.jpg?v=1750788722&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Vàng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-vang-1174882289.jpg?v=1750808174&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-vang-1174882288.jpg?v=1750808171&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-vang-1174882287.jpg?v=1750808167&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-vang-1174882292.jpg?v=1750808282&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-vang-1174882291.jpg?v=1750808179&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Vàng"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-den-1174882337.jpg?v=1750808661&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-den-1174882342.jpg?v=1750851617&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-den-1174882341.jpg?v=1750851613&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-den-1174882340.jpg?v=1750851611&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-den-1174882339.jpg?v=1750851608&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Xanh Bích",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-bich-1174878726.jpg?v=1750821968&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-bich-1174878725.jpg?v=1750821964&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-bich-1174878724.jpg?v=1750821961&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-bich-1174878723.jpg?v=1750821856&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-bich-1174878722.jpg?v=1750821853&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Xanh Bích"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-reu-1174882395.jpg?v=1750852456&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-reu-1174882394.jpg?v=1750852453&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-reu-1174882393.jpg?v=1750852450&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-reu-1174882398.jpg?v=1750852564&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-xanh-reu-1174882397.jpg?v=1750852561&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Cam",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-cam-1174882377.jpg?v=1750852098&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-cam-1174882376.jpg?v=1750852094&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-cam-1174882381.jpg?v=1750852208&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-cam-1174882380.jpg?v=1750852204&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-cam-1174882379.jpg?v=1750852201&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Cam"
    },
    {
        "MoTa": "Chất liệu dù parachute nhẹ mỏng có khả năng thấm hút mồ hôi tốt nhanh khô | Tăng độ thoải mái khi vận động giúp bạn tự tin hơn trong mọi hoạt động | Túi lót lưới giúp đồ vật bên trong luôn khô ráo lưng thun co giãn thoải mái",
        "TenSP": "Quần Short 5 Inch Dù Mỏng Nhẹ Non Branded 06 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-d-1174882305.jpg?v=1750808407&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-d-1174882304.jpg?v=1750808404&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-d-1174882309.jpg?v=1750788965&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-d-1174882308.jpg?v=1750788962&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-06-d-1174882307.jpg?v=1750808413&width=1946"
        ],
        "GiaBan": 173680.0,
        "GiaMua": 133600,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short 5 Inch Vải Mesh Thoáng Khí No Style M153 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24032_thumb_1.jpg?v=1758768444&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_2.jpg?v=1758768292&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_3.jpg?v=1758768274&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_4.jpg?v=1758768273&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_5.jpg?v=1758768445&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short 5 Inch Vải Mesh Thoáng Khí No Style M153 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24031_thumb_1.jpg?v=1758768134&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_2.jpg?v=1758768145&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_3.jpg?v=1758768285&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_4.jpg?v=1758768134&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_5.jpg?v=1758768338&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short 5 Inch Vải Mesh Thoáng Khí No Style M153 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24030thumb1.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb2.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb3.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb4.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb5.jpg?v=1758767763&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "dae9648f-ed9f-41ed-b659-5dc7114e0b3f",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Parachute (vải dù) có khả năng chống thấm nước tốt phù hợp hoạt động ngoài trời | Quần short lưng thun dài trên gối dáng rộng thoải mái vận động không gây gò bó | Đánh bọ tại các vị trí miệng túi để tăng cường độ bền và giúp quần thêm chắc chắn | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ lớp chống thấm",
        "TenSP": "Quần Short Cargo 7 Inch Dù Trượt Nước Seventy Seven 31 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-den-1174881881.jpg?v=1750790419&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-den-1174881880.jpg?v=1750790416&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-den-1174881884.jpg?v=1750790288&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-den-1174881883.jpg?v=1750790285&width=1946",
            "//yame.vn/cdn/shop/files/0023290.jpg?v=1758963017&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Parachute (vải dù) có khả năng chống thấm nước tốt phù hợp hoạt động ngoài trời | Quần short lưng thun dài trên gối dáng rộng thoải mái vận động không gây gò bó | Đánh bọ tại các vị trí miệng túi để tăng cường độ bền và giúp quần thêm chắc chắn | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ lớp chống thấm",
        "TenSP": "Quần Short Cargo 7 Inch Dù Trượt Nước Seventy Seven 31 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-den-1174881867.jpg?v=1750803362&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-den-1174881866.jpg?v=1750803259&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-den-1174881870.jpg?v=1750803371&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-den-1174881869.jpg?v=1750803369&width=1946",
            "//yame.vn/cdn/shop/files/0023288.jpg?v=1758963102&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải Parachute (vải dù) có khả năng chống thấm nước tốt phù hợp hoạt động ngoài trời | Quần short lưng thun dài trên gối dáng rộng thoải mái vận động không gây gò bó | Đánh bọ tại các vị trí miệng túi để tăng cường độ bền và giúp quần thêm chắc chắn | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ lớp chống thấm",
        "TenSP": "Quần Short Cargo 7 Inch Dù Trượt Nước Seventy Seven 31 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-reu-1174881888.jpg?v=1750790294&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-reu-1174881887.jpg?v=1750790291&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-reu-1174881891.jpg?v=1750790522&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-xanh-reu-1174881890.jpg?v=1750790300&width=1946",
            "//yame.vn/cdn/shop/files/0023289.jpg?v=1758963070&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải Parachute (vải dù) có khả năng chống thấm nước tốt phù hợp hoạt động ngoài trời | Quần short lưng thun dài trên gối dáng rộng thoải mái vận động không gây gò bó | Đánh bọ tại các vị trí miệng túi để tăng cường độ bền và giúp quần thêm chắc chắn | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ lớp chống thấm",
        "TenSP": "Quần Short Cargo 7 Inch Dù Trượt Nước Seventy Seven 31 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-nau-1174881874.jpg?v=1750790404&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-nau-1174881873.jpg?v=1750790401&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-nau-1174881877.jpg?v=1750790413&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-seventy-seven-31-nau-1174881876.jpg?v=1750790411&width=1946",
            "//yame.vn/cdn/shop/files/0023291.jpg?v=1758962969&width=1946"
        ],
        "GiaBan": 295100.0,
        "GiaMua": 227000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Tính năng trượt nước vải bền màu sắc thời trang và bền màu không lo mưa nhỏ | Túi lớn chứa nhiều vật dụng khoen kim loại trang trí dưới túi tạo điểm nhấn cá tính | Lưng thun phối nút gài lai quần tạo cảm giác 2 lớp thêu logo 2D trên túi | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ lớp trượt nước",
        "TenSP": "Quần Short 7 Inch Dù Trượt Nước No Style M90 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-den-1174882088.jpg?v=1750805647&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-den-1174882087.jpg?v=1750805645&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-den-1174882086.jpg?v=1750805641&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-den-1174882090.jpg?v=1750805652&width=1946",
            "//yame.vn/cdn/shop/files/0023580.jpg?v=1758169927&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Tính năng trượt nước vải bền màu sắc thời trang và bền màu không lo mưa nhỏ | Túi lớn chứa nhiều vật dụng khoen kim loại trang trí dưới túi tạo điểm nhấn cá tính | Lưng thun phối nút gài lai quần tạo cảm giác 2 lớp thêu logo 2D trên túi | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ lớp trượt nước",
        "TenSP": "Quần Short 7 Inch Dù Trượt Nước No Style M90 Nâu Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-nau-nh-t-1174882068.jpg?v=1750805401&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-nau-nh-t-1174882067.jpg?v=1750805300&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-nau-nh-t-1174882066.jpg?v=1750805296&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-nau-nh-t-1174882070.jpg?v=1750805407&width=1946",
            "//yame.vn/cdn/shop/files/0023579.jpg?v=1758169883&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Nâu Nhạt"
    },
    {
        "MoTa": "Tính năng trượt nước vải bền màu sắc thời trang và bền màu không lo mưa nhỏ | Túi lớn chứa nhiều vật dụng khoen kim loại trang trí dưới túi tạo điểm nhấn cá tính | Lưng thun phối nút gài lai quần tạo cảm giác 2 lớp thêu logo 2D trên túi | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ lớp trượt nước",
        "TenSP": "Quần Short 7 Inch Dù Trượt Nước No Style M90 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-xanh-reu-1174882101.jpg?v=1750805774&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-xanh-reu-1174882105.jpg?v=1750805884&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-xanh-reu-1174882104.jpg?v=1750805881&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m90-xanh-reu-1174882103.jpg?v=1750805781&width=1946",
            "//yame.vn/cdn/shop/files/0023581.jpg?v=1758169972&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải dù siêu nhẹ và nhanh khô với hiệu ứng nhăn tự nhiên không sợ nhăn nhàu giặt máy thả ga | Đai gài tùy chỉnh ở lưng thun giúp cố định vừa vặn và tối ưu sự thoải mái | Lót túi được diễu cố định vào thân quần làm điểm nhấn và không bị lòi ra ngoài khi sử dụng | Vì là vải dù tổng hợp nên quần có thể tạo cảm giác hơi bí khi bạn vận động dưới thời tiết nóng ẩm",
        "TenSP": "Quần Short Dù Siêu Nhẹ Trượt Nước The Weekend 039 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024744_thumb_1.jpg?v=1758696336&width=1946",
            "//yame.vn/cdn/shop/files/0024744_thumb_2.jpg?v=1758696336&width=1946",
            "//yame.vn/cdn/shop/files/0024744_thumb_3.jpg?v=1758696336&width=1946",
            "//yame.vn/cdn/shop/files/0024744_thumb_4.jpg?v=1758696336&width=1946",
            "//yame.vn/cdn/shop/files/0024744_thumb_5.jpg?v=1758696336&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Vải dù siêu nhẹ và nhanh khô với hiệu ứng nhăn tự nhiên không sợ nhăn nhàu giặt máy thả ga | Đai gài tùy chỉnh ở lưng thun giúp cố định vừa vặn và tối ưu sự thoải mái | Lót túi được diễu cố định vào thân quần làm điểm nhấn và không bị lòi ra ngoài khi sử dụng | Vì là vải dù tổng hợp nên quần có thể tạo cảm giác hơi bí khi bạn vận động dưới thời tiết nóng ẩm",
        "TenSP": "Quần Short Dù Siêu Nhẹ Trượt Nước The Weekend 039 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024743_thumb_1.jpg?v=1758696190&width=1946",
            "//yame.vn/cdn/shop/files/0024743_thumb_2.jpg?v=1758696190&width=1946",
            "//yame.vn/cdn/shop/files/0024743_thumb_3.jpg?v=1758696190&width=1946",
            "//yame.vn/cdn/shop/files/0024743_thumb_4.jpg?v=1758696190&width=1946",
            "//yame.vn/cdn/shop/files/0024743_thumb_5.jpg?v=1758696190&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải dù siêu nhẹ và nhanh khô với hiệu ứng nhăn tự nhiên không sợ nhăn nhàu giặt máy thả ga | Đai gài tùy chỉnh ở lưng thun giúp cố định vừa vặn và tối ưu sự thoải mái | Lót túi được diễu cố định vào thân quần làm điểm nhấn và không bị lòi ra ngoài khi sử dụng | Vì là vải dù tổng hợp nên quần có thể tạo cảm giác hơi bí khi bạn vận động dưới thời tiết nóng ẩm",
        "TenSP": "Quần Short Dù Siêu Nhẹ Trượt Nước The Weekend 039 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024742_thumb_1.jpg?v=1758696026&width=1946",
            "//yame.vn/cdn/shop/files/0024742_thumb_2.jpg?v=1758696026&width=1946",
            "//yame.vn/cdn/shop/files/0024742_thumb_3.jpg?v=1758696026&width=1946",
            "//yame.vn/cdn/shop/files/0024742_thumb_4.jpg?v=1758696026&width=1946",
            "//yame.vn/cdn/shop/files/0024742_thumb_5.jpg?v=1758696026&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Vải dù siêu nhẹ và nhanh khô với hiệu ứng nhăn tự nhiên không sợ nhăn nhàu giặt máy thả ga | Đai gài tùy chỉnh ở lưng thun giúp cố định vừa vặn và tối ưu sự thoải mái | Lót túi được diễu cố định vào thân quần làm điểm nhấn và không bị lòi ra ngoài khi sử dụng | Vì là vải dù tổng hợp nên quần có thể tạo cảm giác hơi bí khi bạn vận động dưới thời tiết nóng ẩm",
        "TenSP": "Quần Short Dù Siêu Nhẹ Trượt Nước The Weekend 039 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024741thumb1.jpg?v=1758695759&width=1946",
            "//yame.vn/cdn/shop/files/0024741thumb2.jpg?v=1758695759&width=1946",
            "//yame.vn/cdn/shop/files/0024741thumb3.jpg?v=1758695759&width=1946",
            "//yame.vn/cdn/shop/files/0024741thumb4.jpg?v=1758695759&width=1946",
            "//yame.vn/cdn/shop/files/0024741thumb5.jpg?v=1758695759&width=1946"
        ],
        "GiaBan": 256100.0,
        "GiaMua": 197000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất vải mỏng nhẹ mang lại cảm giác mặc như không mặc co giãn 4 chiều thoải mái | Thành phần Nylon giúp chống nhăn và giữ form quần luôn gọn gàng không cần ủi | Lưng gài phía trước lịch sự kết hợp thun phía sau co giãn linh hoạt thoải mái | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ độ bền",
        "TenSP": "Quần Short Dù Co Giãn The Weekend 019 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024624_thumb_1.jpg?v=1757997425&width=1946",
            "//yame.vn/cdn/shop/files/0024624_thumb_2.jpg?v=1757997425&width=1946",
            "//yame.vn/cdn/shop/files/0024624_thumb_3.jpg?v=1757997425&width=1946",
            "//yame.vn/cdn/shop/files/0024624_thumb_4.jpg?v=1757997425&width=1946",
            "//yame.vn/cdn/shop/files/0024624_thumb_5.jpg?v=1757997425&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "Chất vải mỏng nhẹ mang lại cảm giác mặc như không mặc co giãn 4 chiều thoải mái | Thành phần Nylon giúp chống nhăn và giữ form quần luôn gọn gàng không cần ủi | Lưng gài phía trước lịch sự kết hợp thun phía sau co giãn linh hoạt thoải mái | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ độ bền",
        "TenSP": "Quần Short Dù Co Giãn The Weekend 019 Xám Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024623_thumb_1.jpg?v=1757997294&width=1946",
            "//yame.vn/cdn/shop/files/0024623_thumb_2.jpg?v=1757997294&width=1946",
            "//yame.vn/cdn/shop/files/0024623_thumb_3.jpg?v=1757997294&width=1946",
            "//yame.vn/cdn/shop/files/0024623_thumb_4.jpg?v=1757997294&width=1946",
            "//yame.vn/cdn/shop/files/0024623_thumb_5.jpg?v=1757997294&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xám Be"
    },
    {
        "MoTa": "Chất vải mỏng nhẹ mang lại cảm giác mặc như không mặc co giãn 4 chiều thoải mái | Thành phần Nylon giúp chống nhăn và giữ form quần luôn gọn gàng không cần ủi | Lưng gài phía trước lịch sự kết hợp thun phía sau co giãn linh hoạt thoải mái | Không ủi ở nhiệt độ cao tránh giặt với chất tẩy mạnh để giữ độ bền",
        "TenSP": "Quần Short Dù Co Giãn The Weekend 019 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024622thumb1.jpg?v=1757994990&width=1946",
            "//yame.vn/cdn/shop/files/0024622thumb2.jpg?v=1757994990&width=1946",
            "//yame.vn/cdn/shop/files/0024622thumb3.jpg?v=1757994991&width=1946",
            "//yame.vn/cdn/shop/files/0024622thumb4.jpg?v=1757994991&width=1946",
            "//yame.vn/cdn/shop/files/0024622thumb5.jpg?v=1757994991&width=1946"
        ],
        "GiaBan": 360100.0,
        "GiaMua": 277000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Co giãn tốt nhờ sợi SORONA vải nhẹ và mềm mại thoải mái vận động cả ngày | Độ bền cao và dễ giặt ủi không tốn nhiều thời gian chăm sóc siêu tiện lợi | Kiểu dáng quần short cargo phom rộng có túi hộp ở hai bên với nút bóp ẩn | Chất liệu 100% Polyester có thể gây cảm giác bí nếu mặc lâu trong thời tiết quá nóng]",
        "TenSP": "Quần Short 7 Inch Dù Nhẹ No Style M91 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-nau-1174881983.jpg?v=1750789939&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-nau-1174881982.jpg?v=1750789937&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-nau-1174881981.jpg?v=1750789933&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-nau-1174881985.jpg?v=1750804447&width=1946",
            "//yame.vn/cdn/shop/files/0023566.jpg?v=1758169527&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Co giãn tốt nhờ sợi SORONA vải nhẹ và mềm mại thoải mái vận động cả ngày | Độ bền cao và dễ giặt ủi không tốn nhiều thời gian chăm sóc siêu tiện lợi | Kiểu dáng quần short cargo phom rộng có túi hộp ở hai bên với nút bóp ẩn | Chất liệu 100% Polyester có thể gây cảm giác bí nếu mặc lâu trong thời tiết quá nóng]",
        "TenSP": "Quần Short 7 Inch Dù Nhẹ No Style M91 Xám Chì",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-chi-1174882024.jpg?v=1750804810&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-chi-1174882023.jpg?v=1750804807&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-chi-1174882022.jpg?v=1750804804&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-chi-1174882031.jpg?v=1750804930&width=1946",
            "//yame.vn/cdn/shop/files/0023568.jpg?v=1758169614&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xám Chì"
    },
    {
        "MoTa": "Co giãn tốt nhờ sợi SORONA vải nhẹ và mềm mại thoải mái vận động cả ngày | Độ bền cao và dễ giặt ủi không tốn nhiều thời gian chăm sóc siêu tiện lợi | Kiểu dáng quần short cargo phom rộng có túi hộp ở hai bên với nút bóp ẩn | Chất liệu 100% Polyester có thể gây cảm giác bí nếu mặc lâu trong thời tiết quá nóng]",
        "TenSP": "Quần Short 7 Inch Dù Nhẹ No Style M91 Xám Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-reu-1174882044.jpg?v=1750805054&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-reu-1174882043.jpg?v=1750805051&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-reu-1174882047.jpg?v=1750805161&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-reu-1174882046.jpg?v=1750805059&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-xam-reu-1174882045.jpg?v=1750805057&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Xám Rêu"
    },
    {
        "MoTa": "Co giãn tốt nhờ sợi SORONA vải nhẹ và mềm mại thoải mái vận động cả ngày | Độ bền cao và dễ giặt ủi không tốn nhiều thời gian chăm sóc siêu tiện lợi | Kiểu dáng quần short cargo phom rộng có túi hộp ở hai bên với nút bóp ẩn | Chất liệu 100% Polyester có thể gây cảm giác bí nếu mặc lâu trong thời tiết quá nóng]",
        "TenSP": "Quần Short 7 Inch Dù Nhẹ No Style M91 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-den-1174878774.jpg?v=1750822327&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-den-1174878773.jpg?v=1750822321&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-den-1174878772.jpg?v=1750822215&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m91-den-1174878771.jpg?v=1750822213&width=1946",
            "//yame.vn/cdn/shop/files/0023570.jpg?v=1758169700&width=1946"
        ],
        "GiaBan": 373100.0,
        "GiaMua": 287000,
        "TrangThai": "ACTIVE",
        "MaDM": "743f04c5-761d-4327-9042-4018f92dd75c",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-den-1174882099.jpg?v=1750805767&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-den-1174882098.jpg?v=1750805765&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-den-1174882097.jpg?v=1750805762&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-den-1174882096.jpg?v=1750805659&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-den-1174882095.jpg?v=1750805657&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-den-1174882061.jpg?v=1750805291&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-den-1174882060.jpg?v=1750805288&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-den-1174882059.jpg?v=1750805285&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-den-1174882058.jpg?v=1750805283&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-den-1174882057.jpg?v=1750805179&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-be-1174882076.jpg?v=1750805521&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-be-1174882075.jpg?v=1750805419&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-be-1174882074.jpg?v=1750805417&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-be-1174882073.jpg?v=1750805413&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-be-1174882072.jpg?v=1750805410&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Nâu Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-reu-1174882113.jpg?v=1750805899&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-reu-1174882112.jpg?v=1750805896&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-reu-1174882111.jpg?v=1750805893&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-reu-1174882110.jpg?v=1750805890&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-reu-1174882109.jpg?v=1750805889&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu Rêu"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-d-ng-1174882141.jpg?v=1750789693&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-d-ng-1174882140.jpg?v=1750789692&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-d-ng-1174882139.jpg?v=1750789687&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-d-ng-1174882138.jpg?v=1750789685&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-d-ng-1174882137.jpg?v=1750789681&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Xanh Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-reu-1174882127.jpg?v=1750806130&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-reu-1174882126.jpg?v=1750806128&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-reu-1174882125.jpg?v=1750806125&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-reu-1174882124.jpg?v=1750806121&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-xanh-reu-1174882123.jpg?v=1750806021&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xanh Rêu"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Hồng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-h-ng-1174882155.jpg?v=1750806372&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-h-ng-1174882154.jpg?v=1750806370&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-h-ng-1174882153.jpg?v=1750806366&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-h-ng-1174882152.jpg?v=1750806364&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-h-ng-1174882151.jpg?v=1750806361&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Hồng"
    },
    {
        "MoTa": "Chất liệu Bird Eye Mesh dệt lưới với các lỗ nhỏ li ti giúp thoáng khí và nhanh khô | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Dễ dàng phối đồ với nhiều kiểu áo khác nhau tạo nên phong cách đa dạng | Giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun 9 Inch Thoáng Mát Non Branded 05 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-1174882169.jpg?v=1750806726&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-1174882168.jpg?v=1750806722&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-1174882167.jpg?v=1750806619&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-1174882166.jpg?v=1750806616&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-non-branded-05-nau-1174882165.jpg?v=1750806613&width=1946"
        ],
        "GiaBan": 217100.0,
        "GiaMua": 167000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun Mềm Mịn Mát The Minimalist 009 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-den-1174882037.jpg?v=1750805045&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-den-1174882036.jpg?v=1750805042&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-den-1174882035.jpg?v=1750804939&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-den-1174882034.jpg?v=1750804936&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-den-1174882033.jpg?v=1750804933&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun Mềm Mịn Mát The Minimalist 009 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-be-1174881741.jpg?v=1750791130&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-be-1174881740.jpg?v=1750791127&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-be-1174881743.jpg?v=1750791136&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-be-1174881739.jpg?v=1750791124&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-be-1174881738.jpg?v=1750791122&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun Mềm Mịn Mát The Minimalist 009 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-1174881762.jpg?v=1750791002&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-1174881761.jpg?v=1750802293&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-1174881763.jpg?v=1750791004&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-1174881758.jpg?v=1750802284&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-1174881760.jpg?v=1750802290&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Thấm hút tốt thoát ẩm mềm mại co giãn và đàn hồi tốt thân thiện với môi trường | Kỹ thuật in Trame tạo hiệu ứng Ombre độc đáo mang đến phong cách bụi bặm cá tính | Form quần rộng rãi thoải mái phù hợp với nhiều gu thời trang khác nhau dễ phối đồ | Để giữ màu bền lâu hãy lộn trái sản phẩm khi giặt phơi và hạn chế chất tẩy",
        "TenSP": "Quần Short Thun Ombre 7 Inch No Style M88 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-den-1174882117.jpg?v=1750806012&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-den-1174882116.jpg?v=1750806011&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-den-1174882115.jpg?v=1750806005&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-den-1174882119.jpg?v=1750806017&width=1946",
            "//yame.vn/cdn/shop/files/0023576.jpg?v=1758169748&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Họa tiết Jacquard độc đáo và đường thêu 2D tinh xảo giúp bạn thể hiện phong cách riêng | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Thiết kế lưng thun có dây luồn dễ dàng điều chỉnh phù hợp với mọi vóc dáng | Nên giặt tay hoặc sử dụng túi giặt để bảo vệ cấu trúc dệt jacquard của vải",
        "TenSP": "Quần Short Thun 7 Inch Nhanh Khô No Style M129 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-kem-1174882201.jpg?v=1750789460&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-kem-1174882200.jpg?v=1750789457&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-kem-1174882206.jpg?v=1750807090&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-kem-1174882205.jpg?v=1750807087&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-kem-1174882204.jpg?v=1750807084&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Họa tiết Jacquard độc đáo và đường thêu 2D tinh xảo giúp bạn thể hiện phong cách riêng | Sợi 100% Polyester có độ bền cao chống mài mòn và ít nhăn thách thức các loại máy giặt | Thiết kế lưng thun có dây luồn dễ dàng điều chỉnh phù hợp với mọi vóc dáng | Nên giặt tay hoặc sử dụng túi giặt để bảo vệ cấu trúc dệt jacquard của vải",
        "TenSP": "Quần Short Thun 7 Inch Nhanh Khô No Style M129 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-nau-d-m-1174882225.jpg?v=1750789340&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-nau-d-m-1174882224.jpg?v=1750789338&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-nau-d-m-1174882230.jpg?v=1750807448&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-nau-d-m-1174882229.jpg?v=1750807445&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m129-nau-d-m-1174882228.jpg?v=1750807340&width=1946"
        ],
        "GiaBan": 334100.0,
        "GiaMua": 257000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short 5 Inch Vải Mesh Thoáng Khí No Style M153 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24032_thumb_1.jpg?v=1758768444&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_2.jpg?v=1758768292&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_3.jpg?v=1758768274&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_4.jpg?v=1758768273&width=1946",
            "//yame.vn/cdn/shop/files/24032_thumb_5.jpg?v=1758768445&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun 9 Inch Mềm Mịn Mát The Minimalist 009 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-tr-ng-1174881935.jpg?v=1750803842&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-tr-ng-1174881934.jpg?v=1750803741&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-tr-ng-1174881933.jpg?v=1750803738&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-tr-ng-1174881932.jpg?v=1750803735&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-tr-ng-1174881931.jpg?v=1750803732&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Vải Mesh Thoáng Mát No Style M158 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24127_thumb_1.jpg?v=1758770747&width=1946",
            "//yame.vn/cdn/shop/files/24127_thumb_2.jpg?v=1758770616&width=1946",
            "//yame.vn/cdn/shop/files/24127_thumb_3.jpg?v=1758770589&width=1946",
            "//yame.vn/cdn/shop/files/24127_thumb_4.jpg?v=1758770590&width=1946",
            "//yame.vn/cdn/shop/files/24127_thumb_5.jpg?v=1758770617&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short 5 Inch Vải Mesh Thoáng Khí No Style M153 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24031_thumb_1.jpg?v=1758768134&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_2.jpg?v=1758768145&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_3.jpg?v=1758768285&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_4.jpg?v=1758768134&width=1946",
            "//yame.vn/cdn/shop/files/24031_thumb_5.jpg?v=1758768338&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short 5 Inch Vải Mesh Thoáng Khí No Style M153 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24030thumb1.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb2.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb3.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb4.jpg?v=1758767763&width=1946",
            "//yame.vn/cdn/shop/files/24030thumb5.jpg?v=1758767763&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Cotton Single Dragon Ball Z 25 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024428_thumb_1.jpg?v=1758078631&width=1946",
            "//yame.vn/cdn/shop/files/0024428_thumb_2.jpg?v=1758078631&width=1946",
            "//yame.vn/cdn/shop/files/0024428_thumb_3.jpg?v=1758078631&width=1946",
            "//yame.vn/cdn/shop/files/0024428_thumb_4.jpg?v=1758078631&width=1946",
            "//yame.vn/cdn/shop/files/0024428_thumb_6.jpg?v=1758078631&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Cotton Single Dragon Ball Z 25 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024433_thumb_1.jpg?v=1758078442&width=1946",
            "//yame.vn/cdn/shop/files/0024433_thumb_2.jpg?v=1758078442&width=1946",
            "//yame.vn/cdn/shop/files/0024433_thumb_3.jpg?v=1758078442&width=1946",
            "//yame.vn/cdn/shop/files/0024433_thumb_4.jpg?v=1758078442&width=1946",
            "//yame.vn/cdn/shop/files/0024433_thumb_5.jpg?v=1758078442&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Be"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun 9 Inch Mềm Mịn Mát The Minimalist 009 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xanh-den-1174881942.jpg?v=1750790041&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xanh-den-1174881941.jpg?v=1750803856&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xanh-den-1174881940.jpg?v=1750803855&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xanh-den-1174881939.jpg?v=1750803850&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xanh-den-1174881938.jpg?v=1750803847&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun 9 Inch Mềm Mịn Mát The Minimalist 009 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-kem-1174881999.jpg?v=1750804576&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-kem-1174881998.jpg?v=1750804573&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-kem-1174881997.jpg?v=1750804571&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-kem-1174881996.jpg?v=1750804568&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-kem-1174881995.jpg?v=1750804564&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Kem"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Vải Mesh Thoáng Mát No Style M158 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24126_thumb_1.jpg?v=1758770592&width=1946",
            "//yame.vn/cdn/shop/files/24126_thumb_2.jpg?v=1758770418&width=1946",
            "//yame.vn/cdn/shop/files/24126_thumb_3.jpg?v=1758770418&width=1946",
            "//yame.vn/cdn/shop/files/24126_thumb_4.jpg?v=1758770418&width=1946",
            "//yame.vn/cdn/shop/files/24126_thumb_5.jpg?v=1758770592&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Vải Mesh Thoáng Mát No Style M158 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24125thumb1.jpg?v=1758770258&width=1946",
            "//yame.vn/cdn/shop/files/24125thumb2.jpg?v=1758770440&width=1946",
            "//yame.vn/cdn/shop/files/24125thumb3.jpg?v=1758770440&width=1946",
            "//yame.vn/cdn/shop/files/24125thumb4.jpg?v=1758770464&width=1946",
            "//yame.vn/cdn/shop/files/24125thumb5.jpg?v=1758770464&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Vải Shiny Ít Nhăn No Style M157 Xanh Lá",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24124_thumb_1.jpg?v=1758770112&width=1946",
            "//yame.vn/cdn/shop/files/24124_thumb_2.jpg?v=1758770279&width=1946",
            "//yame.vn/cdn/shop/files/24124_thumb_3.jpg?v=1758770253&width=1946",
            "//yame.vn/cdn/shop/files/24124_thumb_4.jpg?v=1758770253&width=1946",
            "//yame.vn/cdn/shop/files/24124_thumb_5.jpg?v=1758770114&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xanh Lá"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Vải Shiny Ít Nhăn No Style M157 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24123_thumb_1.jpg?v=1758769596&width=1946",
            "//yame.vn/cdn/shop/files/24123_thumb_3.jpg?v=1758769596&width=1946",
            "//yame.vn/cdn/shop/files/24123_thumb_4.jpg?v=1758769596&width=1946",
            "//yame.vn/cdn/shop/files/24123_thumb_5.jpg?v=1758769596&width=1946",
            "//yame.vn/cdn/shop/files/24123_thumb_6.jpg?v=1758769596&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Vải Shiny Ít Nhăn No Style M157 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24122thumb1.jpg?v=1758769151&width=1946",
            "//yame.vn/cdn/shop/files/24122thumb2.jpg?v=1758769151&width=1946",
            "//yame.vn/cdn/shop/files/24122thumb3.jpg?v=1758769152&width=1946",
            "//yame.vn/cdn/shop/files/24122thumb4.jpg?v=1758769319&width=1946",
            "//yame.vn/cdn/shop/files/24122thumb5.jpg?v=1758769319&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Cotton Compact co giãn tốt tạo cảm giác thoải mái khi vận động không gò bó | Đường phối màu tạo điểm nhấn mang đến vẻ ngoài năng động cá tính và hiện đại | Lưng thun đảm bảo sự thoải mái và linh hoạt túi lưới tăng tính thông thoáng | Chất liệu có 55% Polyester ai là fan 100% cotton thì nên cân nhắc kĩ trước khi mua nhé",
        "TenSP": "Quần Short Thun Cotton Phối Màu 7 Inch No Style M87 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m87-nau-1174882174.jpg?v=1750806738&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m87-nau-1174882173.jpg?v=1750806735&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m87-nau-1174882172.jpg?v=1750806732&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m87-nau-1174882176.jpg?v=1750806841&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m87-nau-1174882175.jpg?v=1750806741&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Cotton Single Dragon Ball Z 25 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024432_thumb_1.jpg?v=1758078537&width=1946",
            "//yame.vn/cdn/shop/files/0024432_thumb_3.jpg?v=1758078537&width=1946",
            "//yame.vn/cdn/shop/files/0024432_thumb_4.jpg?v=1758078537&width=1946",
            "//yame.vn/cdn/shop/files/0024432_thumb_5.jpg?v=1758078537&width=1946",
            "//yame.vn/cdn/shop/files/0024432_thumb_6.jpg?v=1758078537&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Cotton Single Dragon Ball Z 25 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024429_thumb_1.jpg?v=1758078341&width=1946",
            "//yame.vn/cdn/shop/files/0024429_thumb_2.jpg?v=1758078341&width=1946",
            "//yame.vn/cdn/shop/files/0024429_thumb_3.jpg?v=1758078341&width=1946",
            "//yame.vn/cdn/shop/files/0024429_thumb_4.jpg?v=1758078341&width=1946",
            "//yame.vn/cdn/shop/files/0024429_thumb_5.jpg?v=1758078341&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Cotton Single Dragon Ball Z 25 Đỏ Đô",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024431_thumb_1.jpg?v=1758077453&width=1946",
            "//yame.vn/cdn/shop/files/0024431_thumb_2.jpg?v=1758077453&width=1946",
            "//yame.vn/cdn/shop/files/0024431_thumb_3.jpg?v=1758077453&width=1946",
            "//yame.vn/cdn/shop/files/0024431_thumb_4.jpg?v=1758077453&width=1946",
            "//yame.vn/cdn/shop/files/0024431_thumb_5.jpg?v=1758077453&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đỏ Đô"
    },
    {
        "MoTa": null,
        "TenSP": "Quần Short Thun Cotton Single Dragon Ball Z 25 Xanh Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024430_thumb_1.jpg?v=1758078174&width=1946",
            "//yame.vn/cdn/shop/files/0024430_thumb_2.jpg?v=1758078174&width=1946",
            "//yame.vn/cdn/shop/files/0024430_thumb_3.jpg?v=1758078174&width=1946",
            "//yame.vn/cdn/shop/files/0024430_thumb_4.jpg?v=1758078174&width=1946",
            "//yame.vn/cdn/shop/files/0024430_thumb_5.jpg?v=1758078174&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xanh Đậm"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun Mềm Mịn Mát The Minimalist 009 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-tr-ng-1174881753.jpg?v=1750802170&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-tr-ng-1174881757.jpg?v=1750802281&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-tr-ng-1174881756.jpg?v=1750802179&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-tr-ng-1174881755.jpg?v=1750802176&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-tr-ng-1174881754.jpg?v=1750802174&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun 9 Inch Mềm Mịn Mát The Minimalist 009 Xám Ghi",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-ghi-1174881750.jpg?v=1750802161&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-ghi-1174881749.jpg?v=1750801939&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-ghi-1174881748.jpg?v=1750801936&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-ghi-1174881751.jpg?v=1750802164&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-xam-ghi-1174881745.jpg?v=1750801933&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xám Ghi"
    },
    {
        "MoTa": "Vải Mini Zurry High TPI Cool Touch mang đến cảm giác mềm mại mịn màng và mát lạnh | Sự kết hợp giữa cotton và spandex tạo nên chất liệu vải vừa thoáng mát vừa mềm mịn | Lưng quần sử dụng chất liệu thun và có dây luồn bên trong eo giúp dễ dàng điều chỉnh | Vải 94% cotton nên sẽ hơi nhăn sau khi giặt cần giũ phẳng khi phơi là đẹp ngay",
        "TenSP": "Quần Short Thun 9 Inch Mềm Mịn Mát The Minimalist 009 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-nau-d-m-1174882011.jpg?v=1750804685&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-nau-d-m-1174882010.jpg?v=1750804682&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-nau-d-m-1174882009.jpg?v=1750804579&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-nau-d-m-1174882008.jpg?v=1750789819&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-cool-touch-04-nau-d-m-1174882007.jpg?v=1750789816&width=1946"
        ],
        "GiaBan": 298480.0,
        "GiaMua": 229600,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "Thấm hút tốt thoát ẩm mềm mại co giãn và đàn hồi tốt thân thiện với môi trường | Kỹ thuật in Trame tạo hiệu ứng Ombre độc đáo mang đến phong cách bụi bặm cá tính | Form quần rộng rãi thoải mái phù hợp với nhiều gu thời trang khác nhau dễ phối đồ | Để giữ màu bền lâu hãy lộn trái sản phẩm khi giặt phơi và hạn chế chất tẩy",
        "TenSP": "Quần Short Thun Ombre 7 Inch No Style M88 Xanh Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-xanh-xam-1174882130.jpg?v=1750806140&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-xanh-xam-1174882129.jpg?v=1750806136&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-xanh-xam-1174882133.jpg?v=1750806248&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-xanh-xam-1174882132.jpg?v=1750806245&width=1946",
            "//yame.vn/cdn/shop/files/0023578.jpg?v=1758169842&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xanh Xám"
    },
    {
        "MoTa": "Thấm hút tốt thoát ẩm mềm mại co giãn và đàn hồi tốt thân thiện với môi trường | Kỹ thuật in Trame tạo hiệu ứng Ombre độc đáo mang đến phong cách bụi bặm cá tính | Form quần rộng rãi thoải mái phù hợp với nhiều gu thời trang khác nhau dễ phối đồ | Để giữ màu bền lâu hãy lộn trái sản phẩm khi giặt phơi và hạn chế chất tẩy",
        "TenSP": "Quần Short Thun Ombre 7 Inch No Style M88 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-nau-1174882145.jpg?v=1750806254&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-nau-1174882144.jpg?v=1750806252&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-nau-1174882143.jpg?v=1750789700&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-nau-1174882147.jpg?v=1750806260&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m88-nau-1174882146.jpg?v=1750806256&width=1946"
        ],
        "GiaBan": 386100.0,
        "GiaMua": 297000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Chất liệu Cotton Double Face cao cấp co giãn thoáng khí mềm mịn mang đến cảm giác thoải mái | Thiết kế trẻ trung năng động cùng những đường rã phối sọc trắng thể thao cá tính | Lưng thun linh hoạt cùng dây rút điều chỉnh tiện lợi phù hợp với mọi vóc dáng | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun Cotton Thoáng Khí No Style M127 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-11-inch-no-style-m127-den-1174882436.jpg?v=1750852929&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-11-inch-no-style-m127-den-1174882435.jpg?v=1750852927&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-11-inch-no-style-m127-den-1174882434.jpg?v=1750852923&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-11-inch-no-style-m127-den-1174882433.jpg?v=1750852820&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-11-inch-no-style-m127-den-1174882432.jpg?v=1750852817&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Cotton Double Face cao cấp co giãn thoáng khí mềm mịn mang đến cảm giác thoải mái | Thiết kế trẻ trung năng động cùng những đường rã phối sọc trắng thể thao cá tính | Lưng thun linh hoạt cùng dây rút điều chỉnh tiện lợi phù hợp với mọi vóc dáng | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun Cotton Thoáng Khí No Style M127 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-be-1174882445.jpg?v=1750853044&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-be-1174882444.jpg?v=1750853041&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-be-1174882443.jpg?v=1750852941&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-be-1174882442.jpg?v=1750852940&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-be-1174882448.jpg?v=1750788607&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Be"
    },
    {
        "MoTa": "Chất liệu Cotton Double Face cao cấp co giãn thoáng khí mềm mịn mang đến cảm giác thoải mái | Thiết kế trẻ trung năng động cùng những đường rã phối sọc trắng thể thao cá tính | Lưng thun linh hoạt cùng dây rút điều chỉnh tiện lợi phù hợp với mọi vóc dáng | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Short Thun Cotton Thoáng Khí No Style M127 Xám Rêu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-xam-reu-1174882468.jpg?v=1750787409&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-xam-reu-1174882467.jpg?v=1750787405&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-xam-reu-1174882473.jpg?v=1750787523&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-xam-reu-1174882472.jpg?v=1750787420&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-short-no-style-m127-xam-reu-1174882471.jpg?v=1750787418&width=1946"
        ],
        "GiaBan": 425100.0,
        "GiaMua": 327000,
        "TrangThai": "ACTIVE",
        "MaDM": "01cfe9e2-55a9-4cc9-91d9-553b51815f21",
        "MauSac": "Xám Rêu"
    },
    {
        "MoTa": "Thiết kế phom dáng vừa phù hợp nhiều lứa tuổi và môi trường khác nhau dễ mặc | Chất liệu vải ít nhăn dễ dàng ủi phẳng giúp bạn tiết kiệm thời gian chăm sóc | Co giãn trung bình giúp quần luôn giữ được form dáng kháng khuẩn mềm mịn bền màu | Để quần luôn giữ được form dáng tốt nhất thì nên treo quần thay vì gấp lại",
        "TenSP": "Quần Tây Nam Co giãn Ít Nhăn Non-Iron 19 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-den-1174881694.jpg?v=1750801443&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-den-1174881693.jpg?v=1750801339&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-den-1174881692.jpg?v=1750801336&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-den-1174881691.jpg?v=1750801334&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-den-1174881690.jpg?v=1750791861&width=1946"
        ],
        "GiaBan": 451100.0,
        "GiaMua": 347000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Jean Cotton Spandex mềm mại mịn màng và mát mẻ mặc cực kỳ dễ chịu | Tạo sự thoải mái khi vận động không gây cảm giác gò bó khó chịu khi mặc | Sản phẩm có 4 màu phục vụ nhiều sở thích về màu sắc dễ dàng lựa chọn và phối đồ | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Tây Casual Mềm Mại Non-Iron 010 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-den-1174881533.jpg?v=1750800017&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-den-1174881530.jpg?v=1750800007&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-den-1174881535.jpg?v=1750800122&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-den-1174881529.jpg?v=1750800005&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-den-1174881532.jpg?v=1750800013&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Thiết kế rã đáy quần thông minh mang đến không gian rộng rãi giúp bạn tự do vận động | Bản lưng được trang bị khuy luồn dây tinh chỉnh giúp dễ dàng điều chỉnh độ rộng | Luôn giữ form dáng phẳng phiu lịch lãm tiết kiệm thời gian ủi đồ tiện lợi | Nên giặt tay hoặc chọn chế độ giặt nhẹ để giữ form dáng và chất lượng quần tốt nhất",
        "TenSP": "Quần Tây Smart Casual Ít Nhăn The CEO 018 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-den-1174881621.jpg?v=1750800974&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-den-1174881620.jpg?v=1750800970&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-den-1174881618.jpg?v=1750800964&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-den-1174881619.jpg?v=1750800968&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-den-1174881617.jpg?v=1750792099&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Form dáng vừa vặn ống quần không quá ôm kết hợp chất liệu co giãn thoải mái | Dễ dàng phối đồ với nhiều loại áo khác nhau từ áo sơ mi đến áo thun | Vải Twill bền màu ít nhăn dễ dàng chăm sóc không tốn nhiều thời gian | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Co Giãn Ít Nhăn Non Branded 30 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-den-1174881265.jpg?v=1750797008&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-den-1174881266.jpg?v=1750797011&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-den-1174881268.jpg?v=1750797017&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-den-1174881269.jpg?v=1750797021&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-den-1174881267.jpg?v=1750797014&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Thiết kế phom dáng vừa phù hợp nhiều lứa tuổi môi trường khác nhau dễ mặc | Chất liệu vải ít nhăn dễ dàng ủi phẳng giúp bạn tiết kiệm thời gian chăm sóc | Co giãn trung bình giúp quần luôn giữ được form dáng kháng khuẩn mềm mịn bền màu | Để quần luôn giữ được form dáng tốt nhất nên treo quần thay vì gấp lại",
        "TenSP": "Quần Tây Nam Co giãn Ít Nhăn Non-Iron 19 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-xam-1174881704.jpg?v=1750801568&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-xam-1174881700.jpg?v=1750801457&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-xam-1174881703.jpg?v=1750801565&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-xam-1174881699.jpg?v=1750801455&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-19-xam-1174881702.jpg?v=1750801562&width=1946"
        ],
        "GiaBan": 451100.0,
        "GiaMua": 347000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Chất liệu co giãn giúp thoải mái vận động không gây cảm giác gò bó hay khó chịu | Chất liệu woven fabric cao cấp ít nhăn bền màu dễ dàng chăm sóc tiết kiệm thời gian | Thiết kế đơn giản nhưng tinh tế phù hợp với nhiều hoàn cảnh từ công sở đến dạo phố | Giặt với nước lạnh và không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Co giãn Non-Iron 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24121thumb1.jpg?v=1750809964&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-02-den-1174881576.jpg?v=1750851482&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-02-den-1174881574.jpg?v=1750851376&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-02-den-1174881578.jpg?v=1750851485&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-02-den-1174881575.jpg?v=1750851381&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Jean Cotton Spandex mềm mại mịn màng và mát mẻ mặc cực kỳ dễ chịu | Tạo sự thoải mái khi vận động không gây cảm giác gò bó khó chịu khi mặc | Sản phẩm có 4 màu phục vụ nhiều sở thích về màu sắc dễ dàng lựa chọn và phối đồ | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Tây Casual Mềm Mại Non-Iron 010 Xám Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-xam-tr-ng-1174881502.jpg?v=1750799524&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-xam-tr-ng-1174881505.jpg?v=1750799534&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-xam-tr-ng-1174881503.jpg?v=1750799527&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-xam-tr-ng-1174881504.jpg?v=1750799530&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-xam-tr-ng-1174881501.jpg?v=1750799521&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Xám Trắng"
    },
    {
        "MoTa": "Form dáng vừa vặn ống quần không quá ôm kết hợp chất liệu co giãn thoải mái | Dễ dàng phối đồ với nhiều loại áo khác nhau từ áo sơ mi đến áo thun | Vải Twill bền màu ít nhăn dễ dàng chăm sóc không tốn nhiều thời gian | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Co Giãn Ít Nhăn Non Branded 30 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xanh-den-1174881543.jpg?v=1750800137&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xanh-den-1174881544.jpg?v=1750800140&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xanh-den-1174881542.jpg?v=1750800134&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xanh-den-1174881545.jpg?v=1750800242&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xanh-den-1174881541.jpg?v=1750800130&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": "Đảm bảo giữ dáng quần không lo bai dão sau nhiều lần giặt luôn như mới | Chắc chắn tăng cường nút gài bên trong túi sau đánh khuy gài nút tinh tế | Ít nhăn và bền màu tương đối tốt form Slimfit tôn dáng hiện đại và thanh lịch | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Co giãn Non-Iron 05 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-05-den-1174881584.jpg?v=1750851499&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-05-den-1174881583.jpg?v=1750851497&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-05-den-1174881582.jpg?v=1750851493&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-05-den-1174881581.jpg?v=1750851490&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-05-den-1174881580.jpg?v=1750851487&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Đen"
    },
    {
        "MoTa": "Chất liệu Jean Cotton Spandex mềm mại mịn màng và mát mẻ mặc cực kỳ dễ chịu | Tạo sự thoải mái khi vận động không gây cảm giác gò bó khó chịu khi mặc | Sản phẩm có 4 màu phục vụ nhiều sở thích về màu sắc dễ dàng lựa chọn và phối đồ | Nên lộn trái sản phẩm khi giặt để bảo vệ màu sắc và chất liệu của quần jean",
        "TenSP": "Quần Tây Casual Mềm Mại Non-Iron 010 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-kem-1174881510.jpg?v=1750799642&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-kem-1174881511.jpg?v=1750799645&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-kem-1174881512.jpg?v=1750799647&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-kem-1174881513.jpg?v=1750799651&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-kem-1174881509.jpg?v=1750799540&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Kết hợp hài hòa giữa phong cách công sở và thời trang đường phố phù hợp nhiều hoàn cảnh | Vải Twill mềm mại thoáng mát có độ bền cao và ít nhăn giúp bạn tự tin | Lưng thun tăng cường độ co giãn giúp bạn thoải mái vận động và ống đứng tôn dáng | Giặt với nước lạnh và không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Mềm Mại Non-Iron 010 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-nau-1174881484.jpg?v=1750799285&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-nau-1174881489.jpg?v=1750799300&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-nau-1174881488.jpg?v=1750799298&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-nau-1174881487.jpg?v=1750799294&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-no-style-m116-nau-1174881486.jpg?v=1750799291&width=1946"
        ],
        "GiaBan": 516100.0,
        "GiaMua": 397000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Nâu"
    },
    {
        "MoTa": "Form dáng vừa vặn ống quần không quá ôm kết hợp chất liệu co giãn thoải mái | Dễ dàng phối đồ với nhiều loại áo khác nhau từ áo sơ mi đến áo thun | Vải Twill bền màu ít nhăn dễ dàng chăm sóc không tốn nhiều thời gian | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Co Giãn Ít Nhăn Non Branded 30 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xam-1174881562.jpg?v=1750800601&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xam-1174881564.jpg?v=1750851258&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xam-1174881561.jpg?v=1750800499&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xam-1174881563.jpg?v=1750800604&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-xam-1174881559.jpg?v=1750800493&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Thiết kế rã đáy quần thông minh mang đến không gian rộng rãi giúp bạn tự do vận động | Bản lưng được trang bị khuy luồn dây tinh chỉnh giúp dễ dàng điều chỉnh độ rộng | Luôn giữ form dáng phẳng phiu lịch lãm tiết kiệm thời gian ủi đồ tiện lợi | Nên giặt tay hoặc chọn chế độ giặt nhẹ để giữ form dáng và chất lượng quần tốt nhất",
        "TenSP": "Quần Tây Smart Casual Ít Nhăn The CEO 018 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-1174881632.jpg?v=1750801201&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-1174881631.jpg?v=1750801100&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-1174881639.jpg?v=1750791970&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-1174881630.jpg?v=1750801096&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-1174881638.jpg?v=1750791967&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Xám"
    },
    {
        "MoTa": "Form dáng vừa vặn ống quần không quá ôm kết hợp chất liệu co giãn thoải mái | Dễ dàng phối đồ với nhiều loại áo khác nhau từ áo sơ mi đến áo thun | Vải Twill bền màu ít nhăn dễ dàng chăm sóc không tốn nhiều thời gian | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Co Giãn Ít Nhăn Non Branded 30 Kem",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-kem-1174881571.jpg?v=1750851373&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-kem-1174881569.jpg?v=1750851366&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-kem-1174881568.jpg?v=1750851364&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-kem-1174881570.jpg?v=1750851370&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-kem-1174881567.jpg?v=1750851361&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Kem"
    },
    {
        "MoTa": "Form dáng vừa vặn ống quần không quá ôm kết hợp chất liệu co giãn thoải mái | Dễ dàng phối đồ với nhiều loại áo khác nhau từ áo sơ mi đến áo thun | Vải Twill bền màu ít nhăn dễ dàng chăm sóc không tốn nhiều thời gian | Nên giặt với nước lạnh không dùng chất tẩy mạnh để giữ độ bền cho sản phẩm",
        "TenSP": "Quần Tây Casual Co Giãn Ít Nhăn Non Branded 30 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-be-1174881555.jpg?v=1750800484&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-be-1174881556.jpg?v=1750800487&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-be-1174881552.jpg?v=1750800257&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-be-1174881554.jpg?v=1750800481&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-branded-30-be-1174881553.jpg?v=1750800260&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Be"
    },
    {
        "MoTa": "Thiết kế rã đáy quần thông minh mang đến không gian rộng rãi giúp bạn tự do vận động | Bản lưng được trang bị khuy luồn dây tinh chỉnh giúp dễ dàng điều chỉnh độ rộng | Luôn giữ form dáng phẳng phiu lịch lãm tiết kiệm thời gian ủi đồ tiện lợi | Nên giặt tay hoặc chọn chế độ giặt nhẹ để giữ form dáng và chất lượng quần tốt nhất",
        "TenSP": "Quần Tây Smart Casual Ít Nhăn The CEO 018 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-nh-t-1174881608.jpg?v=1750800860&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-nh-t-1174881607.jpg?v=1750800857&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-nh-t-1174881605.jpg?v=1750800851&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-nh-t-1174881606.jpg?v=1750800854&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-xam-nh-t-1174881604.jpg?v=1750800848&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "Thiết kế rã đáy quần thông minh mang đến không gian rộng rãi giúp bạn tự do vận động | Bản lưng được trang bị khuy luồn dây tinh chỉnh giúp dễ dàng điều chỉnh độ rộng | Luôn giữ form dáng phẳng phiu lịch lãm tiết kiệm thời gian ủi đồ tiện lợi | Nên giặt tay hoặc chọn chế độ giặt nhẹ để giữ form dáng và chất lượng quần tốt nhất",
        "TenSP": "Quần Tây Smart Casual Ít Nhăn The CEO 018 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-nau-1174881598.jpg?v=1750800733&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-nau-1174881597.jpg?v=1750800730&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-nau-1174881595.jpg?v=1750800724&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-nau-1174881596.jpg?v=1750800727&width=1946",
            "//yame.vn/cdn/shop/files/qu-n-tay-non-iron-07-nau-1174881594.jpg?v=1750800721&width=1946"
        ],
        "GiaBan": 724100.0,
        "GiaMua": 557000,
        "TrangThai": "ACTIVE",
        "MaDM": "e853be9f-b4f4-419b-9ae7-c16e9e9145a6",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 23 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-23-den-1174880903.jpg?v=1750809122&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-23-den-1174880902.jpg?v=1750849088&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-23-den-1174880904.jpg?v=1750809124&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-23-den-1174880908.jpg?v=1750809137&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-23-den-1174880905.jpg?v=1750809127&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 24 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-24-den-1174880899.jpg?v=1750849082&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-24-den-1174880898.jpg?v=1750848859&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-24-den-1174880897.jpg?v=1750848856&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-24-den-1174880896.jpg?v=1750848853&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-24-den-1174880895.jpg?v=1750848850&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 34 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-35x20-non-branded-34-den-1174880855.jpg?v=1750848133&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-35x20-non-branded-34-den-1174880852.jpg?v=1750848125&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-35x20-non-branded-34-den-1174880856.jpg?v=1750848136&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-35x20-non-branded-34-den-1174880857.jpg?v=1750848140&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-35x20-non-branded-34-den-1174880853.jpg?v=1750848127&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 35 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-28x16-non-branded-35-den-1174880850.jpg?v=1750847900&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-28x16-non-branded-35-den-1174880849.jpg?v=1750847898&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-28x16-non-branded-35-den-1174880851.jpg?v=1750848121&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-28x16-non-branded-35-den-1174880848.jpg?v=1750847894&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-28x16-non-branded-35-den-1174880847.jpg?v=1750847891&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 25 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-25-den-1174880887.jpg?v=1750809244&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-25-den-1174880888.jpg?v=1750809247&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-25-den-1174880892.jpg?v=1750809259&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-25-den-1174880891.jpg?v=1750809257&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-25-den-1174880890.jpg?v=1750809253&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 37 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-xanh-den-1174880876.jpg?v=1750848606&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-xanh-den-1174880875.jpg?v=1750848601&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-xanh-den-1174880878.jpg?v=1750848610&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-xanh-den-1174880874.jpg?v=1750848501&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-xanh-den-1174880873.jpg?v=1750848499&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước #Y2010 B001 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-y2010-b001-den-1184384591.jpg?v=1755179652&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-y2010-b001-den-1184461398.jpg?v=1755231010&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-y2010-b001-den-1184461399.jpg?v=1755231012&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-y2010-b001-den-1184461395.jpg?v=1755231001&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-y2010-b001-den-1184461396.jpg?v=1755231004&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 37 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-den-1174880871.jpg?v=1750848495&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-den-1174880870.jpg?v=1750848492&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-den-1174880869.jpg?v=1750848489&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-den-1174880868.jpg?v=1750848485&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-37-den-1174880866.jpg?v=1750848379&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 31 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-31-den-1174880860.jpg?v=1750848365&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-31-den-1174880859.jpg?v=1750848361&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-31-den-1174880864.jpg?v=1750848376&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-31-den-1174880863.jpg?v=1750848374&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-31-den-1174880862.jpg?v=1750848373&width=1946"
        ],
        "GiaBan": 270270.0,
        "GiaMua": 207900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Trượt Nước NB 26 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-26-den-1174880885.jpg?v=1750809242&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-26-den-1174880884.jpg?v=1750848844&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-26-den-1174880883.jpg?v=1750848841&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-26-den-1174880881.jpg?v=1750848616&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-26-den-1174880880.jpg?v=1750848613&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Đeo Cross Bag Cao Cấp Trượt Nước First Class 01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-doanh-nhan-first-class-01-den-1174880929.jpg?v=1750849341&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-doanh-nhan-first-class-01-den-1174880926.jpg?v=1750849331&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-doanh-nhan-first-class-01-den-1174880924.jpg?v=1750849325&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-doanh-nhan-first-class-01-den-1174880921.jpg?v=1750849218&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-doanh-nhan-first-class-01-den-1174880920.jpg?v=1750849213&width=1946"
        ],
        "GiaBan": 634270.0,
        "GiaMua": 487900,
        "TrangThai": "ACTIVE",
        "MaDM": "d7353535-1077-4030-a042-fc114e641624",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Bao Tử Hip Sack Nhỏ Gọn NB 27 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-d-1174880965.jpg?v=1750793881&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-d-1174880959.jpg?v=1750793648&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-d-1174880960.jpg?v=1750793651&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-d-1174880963.jpg?v=1750793660&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-d-1174880962.jpg?v=1750793656&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "0bc7c8d6-6857-432f-ac30-5f72d894672f",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Bao Tử Hip Sack Nhỏ Gọn NB 27 Vàng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-vang-1174880972.jpg?v=1750793900&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-vang-1174880970.jpg?v=1750793892&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-vang-1174880969.jpg?v=1750793890&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-vang-1174880968.jpg?v=1750793887&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-vang-1174880975.jpg?v=1750794007&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "0bc7c8d6-6857-432f-ac30-5f72d894672f",
        "MauSac": "Vàng"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Bao Tử Hip Sack Nhỏ Gọn NB 27 Xanh Dương",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-xanh-d-ng-1174880952.jpg?v=1750793770&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-xanh-d-ng-1174880950.jpg?v=1750793765&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-xanh-d-ng-1174880949.jpg?v=1750793762&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-xanh-d-ng-1174880956.jpg?v=1750793645&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-xanh-d-ng-1174880955.jpg?v=1750793641&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "0bc7c8d6-6857-432f-ac30-5f72d894672f",
        "MauSac": "Xanh Dương"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Bao Tử Hip Sack Nhẹ Siêu Bền Khởi Nguyên 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-3-den-1174880731.jpg?v=1750845980&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-3-den-1174880724.jpg?v=1750809721&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-3-den-1174880726.jpg?v=1750809728&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-3-den-1174880727.jpg?v=1750809731&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-3-den-1174880728.jpg?v=1750809734&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "0bc7c8d6-6857-432f-ac30-5f72d894672f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Bao Tử Hip Sack Nhẹ Siêu Bền Khởi Nguyên 17 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-17-den-1174880933.jpg?v=1750849567&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-17-den-1174880931.jpg?v=1750849561&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-17-den-1174880937.jpg?v=1750849579&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-17-den-1174880936.jpg?v=1750849577&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-kh-i-nguyen-17-den-1174880935.jpg?v=1750849574&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "0bc7c8d6-6857-432f-ac30-5f72d894672f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Bao Tử Hip Sack Nhỏ Gọn NB 27 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-den-1174880942.jpg?v=1750849690&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-den-1174880944.jpg?v=1750849697&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-den-1174880943.jpg?v=1750849694&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-den-1174880947.jpg?v=1750849804&width=1946",
            "//yame.vn/cdn/shop/files/tui-deo-non-branded-27-den-1174880946.jpg?v=1750849801&width=1946"
        ],
        "GiaBan": 179270.0,
        "GiaMua": 137900,
        "TrangThai": "ACTIVE",
        "MaDM": "0bc7c8d6-6857-432f-ac30-5f72d894672f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Túi Bao Tử Hip Sack Nhẹ Siêu Bền #Y2010 05 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024214thumb1.jpg?v=1758874894&width=1946",
            "//yame.vn/cdn/shop/files/0024214thumb2.jpg?v=1758874894&width=1946",
            "//yame.vn/cdn/shop/files/0024214thumb3.jpg?v=1758874894&width=1946",
            "//yame.vn/cdn/shop/files/0024214thumb4.jpg?v=1758874894&width=1946",
            "//yame.vn/cdn/shop/files/0024214thumb5.jpg?v=1758874894&width=1946"
        ],
        "GiaBan": 233870.0,
        "GiaMua": 179900,
        "TrangThai": "ACTIVE",
        "MaDM": "0bc7c8d6-6857-432f-ac30-5f72d894672f",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Canvas Bền Nhẹ #Y2010 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-02-den-1174880616.jpg?v=1750845010&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-02-den-1174880617.jpg?v=1750845013&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-02-den-1174880620.jpg?v=1750845241&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-02-den-1174880615.jpg?v=1750845008&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-02-den-1174880618.jpg?v=1750845016&width=1946"
        ],
        "GiaBan": 163280.0,
        "GiaMua": 125600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Da Bò #Y2010 DB002 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db002-den-1180969017.jpg?v=1753338373&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-den-1180969016.jpg?v=1753338371&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-den-1180969013.jpg?v=1753338362&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-den-1180969012.jpg?v=1753338358&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-den-1180969009.jpg?v=1753338251&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Da Bò #Y2010 DB002 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xanh-den-1180968991.jpg?v=1753337759&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xanh-den-1180968994.jpg?v=1753337768&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xanh-den-1180968989.jpg?v=1753337535&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xanh-den-1180968990.jpg?v=1753337539&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xanh-den-1180968987.jpg?v=1753337529&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Da Bò #Y2010 DB002 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xam-1180969004.jpg?v=1753338016&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xam-1180969003.jpg?v=1753338014&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xam-1180969002.jpg?v=1753338011&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xam-1180969007.jpg?v=1753338245&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-xam-1180969006.jpg?v=1753338242&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Canvas Bền Nhẹ NB 15 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-non-branded-15-den-1174880602.jpg?v=1750844779&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-15-den-1174880606.jpg?v=1750844888&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-15-den-1174880605.jpg?v=1750844885&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-15-den-1174880604.jpg?v=1750844882&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-15-den-1174880603.jpg?v=1750844780&width=1946"
        ],
        "GiaBan": 163280.0,
        "GiaMua": 125600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Canvas Bền Nhẹ #Y2010 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-03-den-1174880311.jpg?v=1750840681&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-03-den-1174880306.jpg?v=1750840568&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-03-den-1174880309.jpg?v=1750840576&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-03-den-1174880310.jpg?v=1750840580&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-03-den-1174880308.jpg?v=1750840573&width=1946"
        ],
        "GiaBan": 163280.0,
        "GiaMua": 125600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Da Bò ONE PIECE-WANO 33 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-den-1174880551.jpg?v=1750843697&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-den-1174880553.jpg?v=1750843922&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-den-1174880552.jpg?v=1750843701&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-den-1174880556.jpg?v=1750843930&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-den-1174880555.jpg?v=1750843927&width=1946"
        ],
        "GiaBan": 371280.0,
        "GiaMua": 285600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Da Bò #Y2010 DB002 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db002-nau-1180969001.jpg?v=1753338008&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-nau-1180969000.jpg?v=1753338005&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-nau-1180968997.jpg?v=1753337777&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-nau-1180968996.jpg?v=1753337774&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db002-nau-1180968995.jpg?v=1753337771&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Đứng Da Bò ONE PIECE-WANO 33 Be",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-be-1174880559.jpg?v=1750843937&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-be-1174880560.jpg?v=1750843940&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-be-1174880565.jpg?v=1750844054&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-be-1174880564.jpg?v=1750844051&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-33-be-1174880563.jpg?v=1750844048&width=1946"
        ],
        "GiaBan": 371280.0,
        "GiaMua": 285600,
        "TrangThai": "ACTIVE",
        "MaDM": "4636b715-3d32-4ed5-a959-61da4f3bfc4b",
        "MauSac": "Be"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Canvas Bền Nhẹ #Y2010 01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-01-den-1174880527.jpg?v=1750843441&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-01-den-1174880526.jpg?v=1750843340&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-01-den-1174880525.jpg?v=1750843337&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-01-den-1174880522.jpg?v=1750843328&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-01-den-1174880524.jpg?v=1750843335&width=1946"
        ],
        "GiaBan": 163280.0,
        "GiaMua": 125600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò #Y2010 DB001 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db001-den-1180968968.jpg?v=1753337056&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-den-1180968967.jpg?v=1753337053&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-den-1180968969.jpg?v=1753337059&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-den-1180968966.jpg?v=1753337050&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-den-1180968971.jpg?v=1753337162&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Canvas Bền Nhẹ NB 16 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-non-branded-16-den-1174880502.jpg?v=1750843083&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-16-den-1174880505.jpg?v=1750843092&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-16-den-1174880504.jpg?v=1750843088&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-16-den-1174880503.jpg?v=1750843085&width=1946",
            "//yame.vn/cdn/shop/files/vi-non-branded-16-den-1174880501.jpg?v=1750842982&width=1946"
        ],
        "GiaBan": 163280.0,
        "GiaMua": 125600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò #Y2010 DB001 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xanh-den-1180968980.jpg?v=1753337408&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xanh-den-1180968979.jpg?v=1753337405&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xanh-den-1180968976.jpg?v=1753337177&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xanh-den-1180968975.jpg?v=1753337174&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xanh-den-1180968973.jpg?v=1753337169&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò #Y2010 DB001 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xam-1180968983.jpg?v=1753337417&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xam-1180968982.jpg?v=1753337415&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xam-1180968981.jpg?v=1753337410&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xam-1180968985.jpg?v=1753337523&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-xam-1180968984.jpg?v=1753337520&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò #Y2010 DB001 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-y2010-db001-nau-1180968965.jpg?v=1753337047&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-nau-1180968964.jpg?v=1753337045&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-nau-1180968961.jpg?v=1753336814&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-nau-1180968960.jpg?v=1753336811&width=1946",
            "//yame.vn/cdn/shop/files/vi-y2010-db001-nau-1180968958.jpg?v=1753336805&width=1946"
        ],
        "GiaBan": 204880.0,
        "GiaMua": 157600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Ý Alfa Tài Lộc 02 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-tai-l-c-02-den-1174880230.jpg?v=1750839604&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-02-den-1174880231.jpg?v=1750839607&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-02-den-1174880474.jpg?v=1750842601&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-02-den-1174880472.jpg?v=1750842497&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-02-den-1174880475.jpg?v=1750842604&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da ONE PIECE-WANO 34 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-34-den-1174880433.jpg?v=1750842019&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-34-den-1174880434.jpg?v=1750842123&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-34-den-1174880435.jpg?v=1750842126&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-34-den-1174880430.jpg?v=1750842011&width=1946",
            "//yame.vn/cdn/shop/files/vi-one-piece-wano-34-den-1174880432.jpg?v=1750842016&width=1946"
        ],
        "GiaBan": 371280.0,
        "GiaMua": 285600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò Thịnh Vượng 5 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-5-den-1174880383.jpg?v=1750841761&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-5-den-1174880377.jpg?v=1750841644&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-5-den-1174880378.jpg?v=1750841647&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-5-den-1174880379.jpg?v=1750841650&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-5-den-1174880382.jpg?v=1750841659&width=1946"
        ],
        "GiaBan": 308880.0,
        "GiaMua": 237600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò Thịnh Vượng 7 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-7-den-1174880367.jpg?v=1750841521&width=1946",
            "//yame.vn/cdn/shop/files/22411Thumb2.jpg?v=1750811801&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-7-den-1174880362.jpg?v=1750841407&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-7-den-1174880363.jpg?v=1750841410&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-7-den-1174880365.jpg?v=1750841416&width=1946"
        ],
        "GiaBan": 308880.0,
        "GiaMua": 237600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò Thịnh Vượng 10 Xanh Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-10-xanh-den-1174880428.jpg?v=1750842007&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-10-xanh-den-1174880422.jpg?v=1750841891&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-10-xanh-den-1174880424.jpg?v=1750841896&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-10-xanh-den-1174880423.jpg?v=1750841893&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-10-xanh-den-1174880426.jpg?v=1750842001&width=1946"
        ],
        "GiaBan": 308880.0,
        "GiaMua": 237600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Xanh Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò Thịnh Vượng 6 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-6-den-1174880375.jpg?v=1750841641&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-6-den-1174880369.jpg?v=1750841524&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-6-den-1174880371.jpg?v=1750841531&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-6-den-1174880370.jpg?v=1750841527&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-6-den-1174880373.jpg?v=1750841536&width=1946"
        ],
        "GiaBan": 308880.0,
        "GiaMua": 237600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Ý Saffiano Tài Lộc 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-tai-l-c-03-den-1174880465.jpg?v=1750811056&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-03-den-1174880468.jpg?v=1750842489&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-03-den-1174880469.jpg?v=1750842491&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-03-den-1174880466.jpg?v=1750811060&width=1946",
            "//yame.vn/cdn/shop/files/vi-tai-l-c-03-den-1174880467.jpg?v=1750842485&width=1946"
        ],
        "GiaBan": 412880.0,
        "GiaMua": 317600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Canvas Bền Nhẹ Naruto 33 Đen Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024181thumb1.jpg?v=1759202146&width=1946",
            "//yame.vn/cdn/shop/files/0024181thumb2.jpg?v=1759202146&width=1946",
            "//yame.vn/cdn/shop/files/0024181thumb3.jpg?v=1759202146&width=1946",
            "//yame.vn/cdn/shop/files/0024181thumb4.jpg?v=1759202146&width=1946",
            "//yame.vn/cdn/shop/files/0024181thumb5.jpg?v=1759202146&width=1946"
        ],
        "GiaBan": 177060.0,
        "GiaMua": 136200,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Canvas Bền Nhẹ Naruto 32 Đen Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024180thumb1.jpg?v=1759201881&width=1946",
            "//yame.vn/cdn/shop/files/0024180thumb2.jpg?v=1759201881&width=1946",
            "//yame.vn/cdn/shop/files/0024180thumb3.jpg?v=1759201881&width=1946",
            "//yame.vn/cdn/shop/files/0024180thumb4.jpg?v=1759201881&width=1946",
            "//yame.vn/cdn/shop/files/0024180thumb5.jpg?v=1759201881&width=1946"
        ],
        "GiaBan": 177060.0,
        "GiaMua": 136200,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò Naruto 34 Đen Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024179thumb1.jpg?v=1759201732&width=1946",
            "//yame.vn/cdn/shop/files/0024179thumb2.jpg?v=1759201732&width=1946",
            "//yame.vn/cdn/shop/files/0024179thumb3.jpg?v=1759201732&width=1946",
            "//yame.vn/cdn/shop/files/0024179thumb4.jpg?v=1759201732&width=1946",
            "//yame.vn/cdn/shop/files/0024179thumb5.jpg?v=1759201732&width=1946"
        ],
        "GiaBan": 255060.0,
        "GiaMua": 196200,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò Naruto 31 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/0024178thumb1.jpg?v=1759201453&width=1946",
            "//yame.vn/cdn/shop/files/0024178thumb2.jpg?v=1759201454&width=1946",
            "//yame.vn/cdn/shop/files/0024178thumb3.jpg?v=1759201454&width=1946",
            "//yame.vn/cdn/shop/files/0024178thumb4.jpg?v=1759201454&width=1946",
            "//yame.vn/cdn/shop/files/0024178thumb5.jpg?v=1759201454&width=1946"
        ],
        "GiaBan": 255060.0,
        "GiaMua": 196200,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Nappa Kim Bảo 01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-kim-b-o-01-den-1174880458.jpg?v=1750842259&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-01-den-1174880457.jpg?v=1750842256&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-01-den-1174880459.jpg?v=1750842483&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-01-den-1174880462.jpg?v=1750811049&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-01-den-1174880460.jpg?v=1750811043&width=1946"
        ],
        "GiaBan": 808080.0,
        "GiaMua": 621600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Bò Epsom Thịnh Vượng 8 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-8-den-1174880359.jpg?v=1750811900&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-8-den-1174880353.jpg?v=1750811881&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-8-den-1174880354.jpg?v=1750811884&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-8-den-1174880355.jpg?v=1750811887&width=1946",
            "//yame.vn/cdn/shop/files/vi-th-nh-v-ng-8-den-1174880356.jpg?v=1750811890&width=1946"
        ],
        "GiaBan": 308880.0,
        "GiaMua": 237600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Ví Ngang Da Ý Hạt Kim Bảo 03 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/vi-kim-b-o-03-den-1174880438.jpg?v=1750842130&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-03-den-1174880439.jpg?v=1750842133&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-03-den-1174880445.jpg?v=1750811171&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-03-den-1174880443.jpg?v=1750811164&width=1946",
            "//yame.vn/cdn/shop/files/vi-kim-b-o-03-den-1174880442.jpg?v=1750811162&width=1946"
        ],
        "GiaBan": 808080.0,
        "GiaMua": 621600,
        "TrangThai": "ACTIVE",
        "MaDM": "6b9ff7e8-73a2-497a-8544-a1b193371ae1",
        "MauSac": "Đen"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L)",
        "TenSP": "Vớ Cổ Ngắn Công Thái Học 90° Dệt Lưới Thoáng Khí #Y2010 TAB001 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-den-1180972214.jpg?v=1753343171&width=1946",
            "//yame.vn/cdn/shop/files/24515_thumb_4.jpg?v=1759228310&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-den-1180972213.jpg?v=1759228310&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-den-1180972212.jpg?v=1759228310&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-den-1180972211.jpg?v=1759228310&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Cổ Ngắn Bền Form Nhiều Màu NB 09 Xám Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-d-m-1174879598.jpg?v=1750815850&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-d-m-1174879597.jpg?v=1750815849&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-d-m-1174879596.jpg?v=1750815844&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-d-m-1174879599.jpg?v=1750815854&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-d-m-1174879595.jpg?v=1750815841&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Xám Đậm"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L)",
        "TenSP": "Vớ Cổ Ngắn Công Thái Học 90° Đệm Xù Giảm Chấn #Y2010 TAB002 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-xam-1180972191.jpg?v=1753342685&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-xam-1180972190.jpg?v=1753342682&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-xam-1180972187.jpg?v=1753342455&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-xam-1180972186.jpg?v=1753342451&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-xam-1180972185.jpg?v=1753342447&width=1946"
        ],
        "GiaBan": 48100.0,
        "GiaMua": 37000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Xám"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Cổ Ngắn Bền Form Nhiều Màu NB 09 Xám Nhạt",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-nh-t-1174879584.jpg?v=1750831452&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-nh-t-1174879587.jpg?v=1750831562&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-nh-t-1174879586.jpg?v=1750831458&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-nh-t-1174879585.jpg?v=1750831456&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-xam-nh-t-1174879583.jpg?v=1750815979&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Xám Nhạt"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L)",
        "TenSP": "Vớ Cổ Ngắn Công Thái Học 90° Dệt Lưới Thoáng Khí #Y2010 TAB001 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-xam-1180972209.jpg?v=1753343057&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-xam-1180972208.jpg?v=1753343054&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-xam-1180972206.jpg?v=1753343048&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-xam-1180972205.jpg?v=1753343045&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-xam-1180972204.jpg?v=1753343042&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Xám"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L)",
        "TenSP": "Vớ Cổ Ngắn Công Thái Học 90° Đệm Xù Giảm Chấn #Y2010 TAB002 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-tr-ng-1180972197.jpg?v=1753342922&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-tr-ng-1180972196.jpg?v=1753342919&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-tr-ng-1180972194.jpg?v=1753342695&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-tr-ng-1180972192.jpg?v=1753342688&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-tr-ng-1180972193.jpg?v=1753342691&width=1946"
        ],
        "GiaBan": 48100.0,
        "GiaMua": 37000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Cổ Ngắn Bền Form Nhiều Màu NB 09 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-09-den-1174879621.jpg?v=1750815734&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-den-1174879620.jpg?v=1750815731&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-den-1174879623.jpg?v=1750815740&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-den-1174879622.jpg?v=1750815736&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-den-1174879619.jpg?v=1750815728&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Cổ Ngắn Bền Form Nhiều Màu NB 09 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-09-tr-ng-1174879603.jpg?v=1750831580&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-tr-ng-1174879605.jpg?v=1750831804&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-tr-ng-1174879604.jpg?v=1750831802&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-tr-ng-1174879602.jpg?v=1750815859&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-tr-ng-1174879601.jpg?v=1750815856&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Trắng"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L)",
        "TenSP": "Vớ Cổ Ngắn Công Thái Học 90° Đệm Xù Giảm Chấn #Y2010 TAB002 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-den-1180972203.jpg?v=1753343039&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-den-1180972202.jpg?v=1753342937&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-den-1180972201.jpg?v=1753342934&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-den-1180972200.jpg?v=1753342933&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab002-den-1180972199.jpg?v=1753342928&width=1946"
        ],
        "GiaBan": 48100.0,
        "GiaMua": 37000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Đen"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L)",
        "TenSP": "Vớ Cổ Ngắn Công Thái Học 90° Dệt Lưới Thoáng Khí #Y2010 TAB001 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-tr-ng-1180968951.jpg?v=1759228142&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-tr-ng-1180968950.jpg?v=1759228142&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-tr-ng-1180968949.jpg?v=1753336558&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-tr-ng-1180968952.jpg?v=1753336568&width=1946",
            "//yame.vn/cdn/shop/files/v-c-th-p-y2010-tab001-tr-ng-1180968956.jpg?v=1753336799&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Cổ Ngắn Bền Form Nhiều Màu NB 09 Nâu",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-1174879609.jpg?v=1750831810&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-1174879610.jpg?v=1750831815&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-1174879608.jpg?v=1750831808&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-1174879611.jpg?v=1750831816&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-1174879612.jpg?v=1750831819&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Nâu"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Cổ Ngắn Bền Form Nhiều Màu NB 09 Đỏ",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-09-d-1174879558.jpg?v=1750816454&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-d-1174879560.jpg?v=1750816456&width=1946",
            "//yame.vn/cdn/shop/files/0023773thumb3.jpg?v=1750816021&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-d-1174879561.jpg?v=1750816461&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-d-1174879562.jpg?v=1750816577&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Đỏ"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Cổ Ngắn Bền Form Nhiều Màu NB 09 Nâu Đậm",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-d-m-1174879572.jpg?v=1750831441&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-d-m-1174879571.jpg?v=1750831340&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-d-m-1174879574.jpg?v=1750831446&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-d-m-1174879573.jpg?v=1750831443&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-09-nau-d-m-1174879575.jpg?v=1750831450&width=1946"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "5b239079-263e-475c-9845-12713690e259",
        "MauSac": "Nâu Đậm"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L) | giúp thoải mái gót chân hơn",
        "TenSP": "Vớ Lười Công Thái Học 90° Mềm Mịn Khử Mùi NS01 Xám",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24522thumb4.jpg?v=1759228714&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-xam-1184384579.jpg?v=1759228714&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-xam-1184461331.jpg?v=1759228714&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-xam-1184461329.jpg?v=1759228714&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-xam-1184461328.jpg?v=1759228714&width=1946"
        ],
        "GiaBan": 48100.0,
        "GiaMua": 37000,
        "TrangThai": "ACTIVE",
        "MaDM": "494b8ea8-1a64-4d2d-a7b8-9ec3c115b75c",
        "MauSac": "Xám"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L) | giúp thoải mái gót chân hơn",
        "TenSP": "Vớ Lười Công Thái Học 90° Mềm Mịn Khử Mùi NS01 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-den-1184461338.jpg?v=1759228627&width=1946",
            "//yame.vn/cdn/shop/files/24520thumb4.jpg?v=1759228627&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-den-1184461341.jpg?v=1759228587&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-den-1184461339.jpg?v=1759228587&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-den-1184461342.jpg?v=1759228587&width=1946"
        ],
        "GiaBan": 40885.0,
        "GiaMua": 31450,
        "TrangThai": "ACTIVE",
        "MaDM": "494b8ea8-1a64-4d2d-a7b8-9ec3c115b75c",
        "MauSac": "Đen"
    },
    {
        "MoTa": "38-41 (M) và 42-45 (L) | giúp thoải mái gót chân hơn",
        "TenSP": "Vớ Lười Công Thái Học 90° Mềm Mịn Khử Mùi NS01 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/24521thumb4.jpg?v=1759228670&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-tr-ng-1184384580.jpg?v=1759228670&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-tr-ng-1184461334.jpg?v=1759228670&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-tr-ng-1184461333.jpg?v=1759228670&width=1946",
            "//yame.vn/cdn/shop/files/v-l-i-y2010-ns001-tr-ng-1184461335.jpg?v=1759228670&width=1946"
        ],
        "GiaBan": 48100.0,
        "GiaMua": 37000,
        "TrangThai": "ACTIVE",
        "MaDM": "494b8ea8-1a64-4d2d-a7b8-9ec3c115b75c",
        "MauSac": "Trắng"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Lười Thoáng Khí Giữ Form NB 10 Đen",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-10-den-1174879549.jpg?v=1750816330&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-den-1174879548.jpg?v=1750816327&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-den-1174879547.jpg?v=1750816324&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-den-1174879550.jpg?v=1750816333&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-den-1174879549.jpg?v=1750816330&width=416"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "494b8ea8-1a64-4d2d-a7b8-9ec3c115b75c",
        "MauSac": "Đen"
    },
    {
        "MoTa": null,
        "TenSP": "Vớ Lười Thoáng Khí Giữ Form NB 10 Trắng",
        "HinhAnh": [
            "//yame.vn/cdn/shop/files/v-non-branded-10-tr-ng-1174879542.jpg?v=1750816216&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-tr-ng-1174879541.jpg?v=1750816213&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-tr-ng-1174879544.jpg?v=1750816321&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-tr-ng-1174879543.jpg?v=1750816220&width=1946",
            "//yame.vn/cdn/shop/files/v-non-branded-10-tr-ng-1174879542.jpg?v=1750816216&width=416"
        ],
        "GiaBan": 35100.0,
        "GiaMua": 27000,
        "TrangThai": "ACTIVE",
        "MaDM": "494b8ea8-1a64-4d2d-a7b8-9ec3c115b75c",
        "MauSac": "Trắng"
    }
],
            skipDuplicates: true,
        })
    
    ]);
  // Thêm các lệnh tạo dữ liệu khác ở đây
}

main()
  .catch(async (e) => {
    console.error('❌ Lỗi khi seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });