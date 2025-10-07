import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AddToCartDto, UpdateQuantityDto, CartResponseDto } from './dto/giohang.dto';

@Injectable()
export class GiohangService {
  constructor(private prisma: PrismaService) {}

  // Lấy hoặc tạo giỏ hàng cho user
  private async getOrCreateCart(MaTKKH?: string) {
    if (!MaTKKH) {
      // Tạo giỏ hàng tạm thời cho guest user
      return await this.prisma.gIOHANG.create({
        data: {},
      });
    }

    let cart = await this.prisma.gIOHANG.findFirst({
      where: { MaTKKH }
    });

    if (!cart) {
      cart = await this.prisma.gIOHANG.create({
        data: { MaTKKH },
      });
    }

    return cart;
  }

  // Thêm sản phẩm vào giỏ hàng
  async addToCart(addToCartDto: AddToCartDto) {
    const { MaCTSP, SoLuong, MaTKKH } = addToCartDto;

    // Kiểm tra chi tiết sản phẩm có tồn tại
    const chiTietSanPham = await this.prisma.cHITIETSANPHAM.findUnique({
      where: { MaCTSP },
      include: {
        SANPHAM: true
      }
    });

    if (!chiTietSanPham) {
      throw new NotFoundException('Không tìm thấy chi tiết sản phẩm');
    }

    // Kiểm tra số lượng tồn kho
    if (chiTietSanPham.SoLuong < SoLuong) {
      throw new BadRequestException(`Không đủ hàng trong kho. Chỉ còn ${chiTietSanPham.SoLuong} sản phẩm`);
    }

    // Lấy hoặc tạo giỏ hàng
    const cart = await this.getOrCreateCart(MaTKKH);

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingItem = await this.prisma.cHITIETGIOHANG.findFirst({
      where: {
        MaGH: cart.MaGH,
        MaCTSP
      }
    });

    if (existingItem) {
      // Cập nhật số lượng
      const newQuantity = existingItem.SoLuong + SoLuong;
      
      if (chiTietSanPham.SoLuong < newQuantity) {
        throw new BadRequestException(`Không đủ hàng trong kho. Chỉ còn ${chiTietSanPham.SoLuong} sản phẩm`);
      }

      return await this.prisma.cHITIETGIOHANG.update({
        where: { MaCTGH: existingItem.MaCTGH },
        data: { SoLuong: newQuantity },
        include: {
          CHITIETSANPHAM: {
            include: {
              SANPHAM: true
            }
          }
        }
      });
    } else {
      // Thêm sản phẩm mới vào giỏ
      return await this.prisma.cHITIETGIOHANG.create({
        data: {
          MaGH: cart.MaGH,
          MaCTSP,
          SoLuong
        },
        include: {
          CHITIETSANPHAM: {
            include: {
              SANPHAM: true
            }
          }
        }
      });
    }
  }

  // Lấy tất cả sản phẩm trong giỏ hàng
  async getCartItems(MaTKKH?: string): Promise<CartResponseDto> {
    const cart = await this.getOrCreateCart(MaTKKH);

    const cartItems = await this.prisma.cHITIETGIOHANG.findMany({
      where: { MaGH: cart.MaGH },
      include: {
        CHITIETSANPHAM: {
          include: {
            SANPHAM: true
          }
        }
      }
    });

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.SoLuong, 0);
    const totalValue = cartItems.reduce((sum, item) => 
      sum + (item.SoLuong * item.CHITIETSANPHAM.SANPHAM.GiaBan), 0
    );

    return {
      MaGH: cart.MaGH,
      created_at: cart.created_at,
      totalQuantity,
      totalValue,
      items: cartItems
    };
  }

  // Cập nhật số lượng sản phẩm trong giỏ
  async updateQuantity(MaCTGH: string, updateQuantityDto: UpdateQuantityDto) {
    const { SoLuong } = updateQuantityDto;

    const cartItem = await this.prisma.cHITIETGIOHANG.findUnique({
      where: { MaCTGH },
      include: {
        CHITIETSANPHAM: true
      }
    });

    if (!cartItem) {
      throw new NotFoundException('Không tìm thấy sản phẩm trong giỏ hàng');
    }

    // Kiểm tra số lượng tồn kho
    if (cartItem.CHITIETSANPHAM.SoLuong < SoLuong) {
      throw new BadRequestException(`Không đủ hàng trong kho. Chỉ còn ${cartItem.CHITIETSANPHAM.SoLuong} sản phẩm`);
    }

    return await this.prisma.cHITIETGIOHANG.update({
      where: { MaCTGH },
      data: { SoLuong },
      include: {
        CHITIETSANPHAM: {
          include: {
            SANPHAM: true
          }
        }
      }
    });
  }

  // Xóa sản phẩm khỏi giỏ hàng
  async removeFromCart(MaCTGH: string) {
    const cartItem = await this.prisma.cHITIETGIOHANG.findUnique({
      where: { MaCTGH }
    });

    if (!cartItem) {
      throw new NotFoundException('Không tìm thấy sản phẩm trong giỏ hàng');
    }

    await this.prisma.cHITIETGIOHANG.delete({
      where: { MaCTGH }
    });

    return { message: 'Đã xóa sản phẩm khỏi giỏ hàng' };
  }

  // Lấy sản phẩm để chuẩn bị mua (checkout)
  async getItemsForPurchase(MaTKKH?: string) {
    const cartData = await this.getCartItems(MaTKKH);
    
    if (cartData.items.length === 0) {
      throw new BadRequestException('Giỏ hàng trống');
    }

    // Kiểm tra tồn kho cho tất cả sản phẩm
    const outOfStockItems = cartData.items.filter(item => 
      item.CHITIETSANPHAM.SoLuong < item.SoLuong
    );

    if (outOfStockItems.length > 0) {
      const outOfStockNames = outOfStockItems.map(item => 
        item.CHITIETSANPHAM.SANPHAM.TenSP
      ).join(', ');
      throw new BadRequestException(`Các sản phẩm sau không đủ hàng: ${outOfStockNames}`);
    }

    return {
      ...cartData,
      readyForPurchase: true,
      message: 'Tất cả sản phẩm sẵn sàng để mua'
    };
  }

  // Xóa toàn bộ giỏ hàng
  async clearCart(MaTKKH?: string) {
    const cart = await this.getOrCreateCart(MaTKKH);

    await this.prisma.cHITIETGIOHANG.deleteMany({
      where: { MaGH: cart.MaGH }
    });

    return { message: 'Đã xóa toàn bộ giỏ hàng' };
  }
}