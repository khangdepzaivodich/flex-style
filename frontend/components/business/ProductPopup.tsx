"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";

interface ProductData {
	id: string; // Mã sản phẩm
	name: string; // Tên sản phẩm
	category?: string; // Danh mục
	stock?: number; // Tồn kho
	minStock?: number; // Tồn kho tối thiểu
	price?: number; // Giá sản phẩm
	image?: string; // url/base64 của hình ảnh
	color?: string; // màu sắc (text)
}

interface ProductPopupProps {
	open: boolean;
	onClose: () => void; // Hàm gọi khi đóng popup
	onSave: (data: ProductData) => void; // Hàm gọi khi lưu sản phẩm
	initialData?: ProductData | null; // Dữ liệu ban đầu để chỉnh sửa
}

// Component hiển thị popup thêm / sửa sản phẩm
export default function ProductPopup({ open, onClose, onSave, initialData }: ProductPopupProps) {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [id, setId] = useState("");
	const [stock, setStock] = useState<number | undefined>(undefined);
	const [minStock, setMinStock] = useState<number | undefined>(undefined);
	const [price, setPrice] = useState<number | undefined>(undefined);
	const [color, setColor] = useState<string>("");
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [errors, setErrors] = useState<Record<string, string>>({});

	// Cập nhật trạng thái khi mở popup hoặc dữ liệu ban đầu thay đổi
	useEffect(() => {
		if (open) {
			if (initialData) {
				setId(initialData.id ?? "");
				setName(initialData.name ?? "");
				setCategory(initialData.category ?? "");
				setStock(typeof initialData.stock === "number" ? initialData.stock : undefined);
				setMinStock(typeof initialData.minStock === "number" ? initialData.minStock : undefined);
				setPrice(typeof initialData.price === "number" ? initialData.price : undefined);
				setColor((initialData as any).color ?? "");
				// Hỗ trợ trường hợp legacy `images` dưới dạng mảng bằng cách lấy ảnh đầu tiên nếu có
				const legacyImages = (initialData as any).images;
				if ((initialData as any).image) {
					setImagePreview((initialData as any).image as string);
					setImageFile(null);
				} else if (legacyImages && Array.isArray(legacyImages) && legacyImages.length > 0) {
					setImagePreview(legacyImages[0] as string);
					setImageFile(null);
				}
			} else {
				setId("");
				setName("");
				setCategory("");
				setStock(undefined);
				setMinStock(undefined);
				setPrice(undefined);
				setColor("");
				setImageFile(null);
				setImagePreview(null);
				setErrors({});
			}
		} else {
			setId("");
			setName("");
			setCategory("");
			setStock(undefined);
			setMinStock(undefined);
			setPrice(undefined);
			setColor("");
			setImageFile(null);
			setImagePreview(null);
			setErrors({});
		}
	}, [open, initialData]);

	// Xử lý khi người dùng chọn ảnh
	function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const file = files[0];
		if (file.size > 5 * 1024 * 1024) {
			setErrors((prev) => ({ ...prev, image: 'Kích thước ảnh không được vượt quá 5MB' }));
			return;
		}
		const reader = new FileReader();
		reader.onload = (ev) => {
			const result = ev.target?.result as string | null;
			if (result) {
				setImagePreview(result);
				setImageFile(file);
			}
		};
		reader.readAsDataURL(file);
		setErrors((prev) => {
			const c = { ...prev };
			delete c.image;
			return c;
		});
	}

	function removeImage() {
		setImageFile(null);
		setImagePreview(null);
		setErrors((prev) => {
			const c = { ...prev };
			delete c.image;
			return c;
		});
	}

	// Hàm validate dữ liệu trước khi lưu
	function validate(): boolean {
		const e: Record<string, string> = {};
		if (!name || !name.trim()) e.name = 'Tên sản phẩm không được để trống';
		if (!id || !id.trim()) e.id = 'Mã sản phẩm không được để trống';
		if (!category || !category.trim()) e.category = 'Vui lòng chọn danh mục';
		if (typeof price !== 'number' || isNaN(price) || price <= 0) e.price = 'Giá bán phải lớn hơn 0';
		if (typeof stock !== 'number' || isNaN(stock) || stock <= 0) e.stock = 'Số lượng tồn kho phải lớn hơn 0';
		if (typeof minStock !== 'number' || isNaN(minStock) || minStock <= 0) e.minStock = 'Tồn tối thiểu phải lớn hơn 0';
		if (typeof stock === 'number' && typeof minStock === 'number' && minStock > stock) e.minStock = 'Tồn tối thiểu không được lớn hơn tồn kho';
		if (!color || !color.trim()) {
			e.color = 'Màu sắc không được để trống';
		} else {
			const trimmed = color.trim();
			if (!isNaN(Number(trimmed))) {
				e.color = 'Sai định dạng';
			}
		}
		if (!imagePreview) e.image = 'Vui lòng chọn ảnh';
			setErrors(e);
			return Object.keys(e).length === 0;
		}

	return (
		<Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Thêm sản phẩm</DialogTitle>
				</DialogHeader>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Tên sản phẩm</label>
						<Input
							className={errors.name ? 'py-2 border-red-300 focus:border-red-500' : 'py-2'}
							placeholder="Nhập tên sản phẩm"
							value={name}
							onChange={(e) => {
								setName((e.target as HTMLInputElement).value);
								if (errors.name) {
									setErrors((prev) => {
										const c = { ...prev };
										delete c.name;
										return c;
									});
								}
							}}
						/>
						{errors.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
					</div>
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Mã sản phẩm</label>
						<Input
							className={errors.id ? 'py-2 border-red-300 focus:border-red-500' : 'py-2'}
							placeholder="Nhập mã sản phẩm"
							value={id}
							onChange={(e) => {
								setId((e.target as HTMLInputElement).value);
								if (errors.id) {
									setErrors((prev) => {
										const c = { ...prev };
										delete c.id;
										return c;
									});
								}
							}}
						/>
						{errors.id && <div className="text-xs text-red-600 mt-1">{errors.id}</div>}
					</div>

					<div>
						<label className="text-sm text-gray-700 mb-1 block">Chọn danh mục</label>
						<Select
							value={category}
							onValueChange={(v) => {
								setCategory(v);
								if (errors.category) {
									setErrors((prev) => {
										const c = { ...prev };
										delete c.category;
										return c;
									});
								}
							}}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Chọn danh mục" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Danh mục 1">Danh mục 1</SelectItem>
								<SelectItem value="Danh mục 2">Danh mục 2</SelectItem>
								<SelectItem value="Danh mục 3">Danh mục 3</SelectItem>
							</SelectContent>
						</Select>
						{errors.category && <div className="text-xs text-red-600 mt-1">{errors.category}</div>}
					</div>
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Giá bán</label>
						<Input
							className={errors.price ? 'py-2 border-red-300 focus:border-red-500' : 'py-2'}
							placeholder="Nhập giá bán"
							type="number"
							value={price ?? ""}
							onChange={(e) => {
								setPrice((e.target as HTMLInputElement).value ? Number((e.target as HTMLInputElement).value) : undefined);
								if (errors.price) {
									setErrors((prev) => {
										const c = { ...prev };
										delete c.price;
										return c;
									});
								}
							}}
						/>
						{errors.price && <div className="text-xs text-red-600 mt-1">{errors.price}</div>}
					</div>

					<div>
						<label className="text-sm text-gray-700 mb-1 block">Số lượng tồn kho</label>
						<Input
							className={errors.stock ? 'py-2 border-red-300 focus:border-red-500' : 'py-2'}
							placeholder="Nhập số lượng tồn kho"
							type="number"
							value={stock ?? ""}
							onChange={(e) => {
								const v = (e.target as HTMLInputElement).value ? Number((e.target as HTMLInputElement).value) : undefined;
								setStock(v);
								if (errors.stock || errors.minStock) {
									setErrors((prev) => {
										const c = { ...prev };
										delete c.stock;
										delete c.minStock;
										return c;
									});
								}
							}}
						/>
						{errors.stock && <div className="text-xs text-red-600 mt-1">{errors.stock}</div>}
					</div>
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Tồn tối thiểu</label>
						<Input
							className={errors.minStock ? 'py-2 border-red-300 focus:border-red-500' : 'py-2'}
							placeholder="Nhập tồn tối thiểu"
							type="number"
							value={minStock ?? ""}
							onChange={(e) => {
								setMinStock((e.target as HTMLInputElement).value ? Number((e.target as HTMLInputElement).value) : undefined);
								if (errors.minStock) {
									setErrors((prev) => {
										const c = { ...prev };
										delete c.minStock;
										return c;
									});
								}
							}}
						/>
						{errors.minStock && <div className="text-xs text-red-600 mt-1">{errors.minStock}</div>}
					</div>

					<div className="sm:col-span-2">
						<label className="text-sm text-gray-700 mb-1 block">Màu sắc</label>
						<Input
							className={errors.color ? 'py-2 border-red-300 focus:border-red-500' : 'py-2'}
							placeholder="Nhập màu (ví dụ: Đỏ, Xanh, #FFFFFF)"
							value={color}
							onChange={(e) => {
								setColor((e.target as HTMLInputElement).value);
								if (errors.color) {
									setErrors((prev) => {
										const c = { ...prev };
										delete c.color;
										return c;
									});
								}
							}}
						/>
						{errors.color && <div className="text-xs text-red-600 mt-1">{errors.color}</div>}
					</div>
					{/* Hình ảnh sản phẩm */}
					<div className="sm:col-span-2">
						<label className="text-sm text-gray-700 mb-1 block">Hình ảnh</label>
						<div className="flex items-center gap-3">
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								className={errors.image ? 'rounded border px-2 py-1 bg-white border-red-300' : 'rounded border px-2 py-1 bg-white'}
							/>
							<span className="text-sm text-gray-500">{!imagePreview ? 'No file chosen' : '1 file selected'}</span>
						</div>
						{errors.image && <div className="text-xs text-red-600 mt-1">{errors.image}</div>}
						{imagePreview && (
							<div className="mt-3 grid grid-cols-1 gap-3">
								<div className="relative border rounded overflow-hidden">
									<img src={imagePreview} className="w-full h-auto max-h-[420px] object-contain bg-white" alt={`preview`} />
									<button type="button" onClick={() => removeImage()} className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1">
										<X className="w-4 h-4" />
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				<DialogFooter className="justify-center gap-4">
					<Button variant="outline" className="flex items-center gap-2 bg-white border" onClick={onClose}>
						<X className="w-4 h-4" />
						Hủy
					</Button>
					<Button className="bg-[#8B5CF6] text-white flex items-center gap-2 px-4 py-2 rounded-md" onClick={() => {
						if (!validate()) return;
						onSave({ id, name, category, stock, minStock, price, image: imagePreview ?? undefined, color });
					}}>
						<Save className="w-4 h-4" />
						Lưu
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
