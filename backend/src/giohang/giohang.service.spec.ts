import { Test, TestingModule } from '@nestjs/testing';
import { GioHangService } from './giohang.service';
import { GioHangRepository } from '../repositories/giohang.repository';
import { NotFoundException, BadRequestException } from '@nestjs/common';

// Simple in-memory mock behaviors
const mockRepo = () => ({
  findChiTietSanPhamByMa: jest.fn(),
  findGioHangByMaTKKH: jest.fn(),
  createGioHang: jest.fn(),
  findChiTietGioHangExist: jest.fn(),
  updateSoLuongChiTietGioHang: jest.fn(),
  createChiTietGioHang: jest.fn(),
  findChiTietGioHangByMa: jest.fn(),
  deleteChiTietGioHang: jest.fn(),
  getGioHangForCheckout: jest.fn(),
});

describe('GioHangService', () => {
  let service: GioHangService;
  let repository: ReturnType<typeof mockRepo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GioHangService,
        { provide: GioHangRepository, useFactory: mockRepo }
      ]
    }).compile();

    service = module.get<GioHangService>(GioHangService);
    repository = module.get(GioHangRepository);
  });

  describe('themSanPhamVaoGioHang', () => {
    const MaTKKH = 'user-1';
    const MaCTSP = 'ctsp-1';

    it('adds new product to new cart', async () => {
      repository.findChiTietSanPhamByMa.mockResolvedValue({ MaCTSP, SoLuong: 10, SANPHAM: { GiaBan: 10000 } });
      repository.findGioHangByMaTKKH.mockResolvedValue(null);
      repository.createGioHang.mockResolvedValue({ MaGH: 'gh-1', MaTKKH });
      repository.findChiTietGioHangExist.mockResolvedValue(null);
      repository.createChiTietGioHang.mockResolvedValue({ MaCTGH: 'ctgh-1', MaCTSP, SoLuong: 2 });

      const result = await service.themSanPhamVaoGioHang({ MaTKKH, MaCTSP, SoLuong: 2 });
      expect(repository.createGioHang).toHaveBeenCalled();
      expect(repository.createChiTietGioHang).toHaveBeenCalledWith('gh-1', MaCTSP, 2);
      expect(result).toEqual({ MaCTGH: 'ctgh-1', MaCTSP, SoLuong: 2 });
    });

    it('increments quantity if item exists', async () => {
      repository.findChiTietSanPhamByMa.mockResolvedValue({ MaCTSP, SoLuong: 10, SANPHAM: { GiaBan: 10000 } });
      repository.findGioHangByMaTKKH.mockResolvedValue({ MaGH: 'gh-1', MaTKKH });
      repository.findChiTietGioHangExist.mockResolvedValue({ MaCTGH: 'ctgh-1', SoLuong: 3 });
      repository.updateSoLuongChiTietGioHang.mockResolvedValue({ MaCTGH: 'ctgh-1', SoLuong: 5 });

      const result = await service.themSanPhamVaoGioHang({ MaTKKH, MaCTSP, SoLuong: 2 });
      expect(repository.updateSoLuongChiTietGioHang).toHaveBeenCalledWith('ctgh-1', 5);
      expect(result.SoLuong).toBe(5);
    });

    it('throws when product not found', async () => {
      repository.findChiTietSanPhamByMa.mockResolvedValue(null);
      await expect(
        service.themSanPhamVaoGioHang({ MaTKKH, MaCTSP, SoLuong: 1 })
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('throws when stock insufficient on add', async () => {
      repository.findChiTietSanPhamByMa.mockResolvedValue({ MaCTSP, SoLuong: 1, SANPHAM: { GiaBan: 10000 } });
      await expect(
        service.themSanPhamVaoGioHang({ MaTKKH, MaCTSP, SoLuong: 5 })
      ).rejects.toBeInstanceOf(BadRequestException);
    });
  });

  describe('laySanPhamDeMua', () => {
    it('throws if cart empty', async () => {
      repository.getGioHangForCheckout.mockResolvedValue(null);
      await expect(service.laySanPhamDeMua('user')).rejects.toBeInstanceOf(NotFoundException);
    });

    it('returns totals when cart populated', async () => {
      repository.getGioHangForCheckout.mockResolvedValue({
        MaGH: 'gh-1',
        CHITIETGIOHANG: [
          { SoLuong: 2, CHITIETSANPHAM: { SANPHAM: { GiaBan: 10000, TenSP: 'Áo' }, KichCo: 'M', MauSac: 'Red', HinhAnh: 'a.jpg' } },
          { SoLuong: 1, CHITIETSANPHAM: { SANPHAM: { GiaBan: 50000, TenSP: 'Quần' }, KichCo: 'L', MauSac: 'Black', HinhAnh: 'b.jpg' } }
        ]
      });
      const result = await service.laySanPhamDeMua('user');
      expect(result.tongTien).toBe(2 * 10000 + 1 * 50000);
      expect(result.soLuongSanPham).toBe(2);
    });
  });
});
