import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GiohangRepository } from 'src/repositories/giohang.repository';
import { AddToCartDto, UpdateQuantityDto, CartResponseDto } from './dto/giohang.dto';

@Injectable()
export class GiohangService {
  constructor(
    private prisma: PrismaService,
    private giohangRepository: GiohangRepository,
  ) {}

  // Lấy hoặc tạo giỏ hàng cho user
  private async getOrCreateCart(MaTKKH?: string) {
    if (!MaTKKH) {
      // Tạo giỏ hàng tạm thời cho guest user
      return await this.giohangRepository.createCart({});
    }

    let cart = await this.giohangRepository.findCartByUserId(MaTKKH);

    if (!cart) {
      cart = await this.giohangRepository.createCart({ MaTKKH });
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
    const existingItem = await this.giohangRepository.findCartItemByProductDetail(
      cart.MaGH,
      MaCTSP,
    );

    if (existingItem) {
      // Cập nhật số lượng
      const newQuantity = existingItem.SoLuong + SoLuong;
      
      if (chiTietSanPham.SoLuong < newQuantity) {
        throw new BadRequestException(`Không đủ hàng trong kho. Chỉ còn ${chiTietSanPham.SoLuong} sản phẩm`);
      }

      return await this.giohangRepository.updateCartItemQuantity(
        existingItem.MaCTGH,
        newQuantity,
      );
    } else {
      // Thêm sản phẩm mới vào giỏ
      return await this.giohangRepository.createCartItem({
        MaGH: cart.MaGH,
        MaCTSP,
        SoLuong,
      });
    }
  }

  // Lấy tất cả sản phẩm trong giỏ hàng
  async getCartItems(MaTKKH?: string): Promise<CartResponseDto> {
    const cart = await this.getOrCreateCart(MaTKKH);

    const rawCartItems = await this.giohangRepository.findAllCartItems(cart.MaGH);

    const { totalQuantity, totalValue } =
      await this.giohangRepository.calculateCartTotal(cart.MaGH);

    // Transform the data to match DTO structure
    const cartItems = rawCartItems.map(item => ({
      MaCTGH: item.MaCTGH,
      SoLuong: item.SoLuong,
      created_at: item.created_at,
      CHITIETSANPHAM: {
        MaCTSP: item.CHITIETSANPHAM.MaCTSP,
        KichCo: item.CHITIETSANPHAM.KichCo,
        SoLuong: item.CHITIETSANPHAM.SoLuong,
        SANPHAM: {
          MaSP: item.CHITIETSANPHAM.SANPHAM.MaSP,
          TenSP: item.CHITIETSANPHAM.SANPHAM.TenSP,
          GiaBan: item.CHITIETSANPHAM.SANPHAM.GiaBan,
          MoTa: item.CHITIETSANPHAM.SANPHAM.MoTa,
          MauSac: item.CHITIETSANPHAM.SANPHAM.MauSac,
          HinhAnh: item.CHITIETSANPHAM.SANPHAM.HinhAnh[0] || null,
        }
      }
    }));

    return {
      MaGH: cart.MaGH,
      created_at: cart.created_at,
      totalQuantity,
      totalValue,
      items: cartItems,
    };
  }

  // Cập nhật số lượng sản phẩm trong giỏ
  async updateQuantity(MaCTGH: string, updateQuantityDto: UpdateQuantityDto) {
    const { SoLuong } = updateQuantityDto;

    const cartItem = await this.giohangRepository.findCartItemById(MaCTGH);

    if (!cartItem) {
      throw new NotFoundException('Không tìm thấy sản phẩm trong giỏ hàng');
    }

    // Kiểm tra số lượng tồn kho
    if (cartItem.CHITIETSANPHAM.SoLuong < SoLuong) {
      throw new BadRequestException(
        `Không đủ hàng trong kho. Chỉ còn ${cartItem.CHITIETSANPHAM.SoLuong} sản phẩm`,
      );
    }

    return await this.giohangRepository.updateCartItemQuantity(MaCTGH, SoLuong);
  }

  // Xóa sản phẩm khỏi giỏ hàng
  async removeFromCart(MaCTGH: string) {
    const cartItem = await this.giohangRepository.findCartItemById(MaCTGH);

    if (!cartItem) {
      throw new NotFoundException('Không tìm thấy sản phẩm trong giỏ hàng');
    }

    await this.giohangRepository.deleteCartItem(MaCTGH);

    return { message: 'Đã xóa sản phẩm khỏi giỏ hàng' };
  }

  // Lấy sản phẩm để chuẩn bị mua (checkout)
  async getItemsForPurchase(MaTKKH?: string) {
    const cartData = await this.getCartItems(MaTKKH);

    if (cartData.items.length === 0) {
      throw new BadRequestException('Giỏ hàng trống');
    }

    // Kiểm tra tồn kho cho tất cả sản phẩm
    const validation = await this.giohangRepository.validateStockForCheckout(
      cartData.MaGH,
    );

    if (!validation.isValid) {
      const outOfStockNames = validation.outOfStockItems
        .map((item) => item.TenSP)
        .join(', ');
      throw new BadRequestException(
        `Các sản phẩm sau không đủ hàng: ${outOfStockNames}`,
      );
    }

    return {
      ...cartData,
      readyForPurchase: true,
      message: 'Tất cả sản phẩm sẵn sàng để mua',
    };
  }

  // Xóa toàn bộ giỏ hàng
  async clearCart(MaTKKH?: string) {
    const cart = await this.getOrCreateCart(MaTKKH);

    await this.giohangRepository.deleteAllCartItems(cart.MaGH);

    return { message: 'Đã xóa toàn bộ giỏ hàng' };
  }
}