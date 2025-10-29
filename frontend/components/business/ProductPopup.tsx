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
	price?: number; // Giá sản phẩm
	image?: string; // url/base64 của hình ảnh (first)
	images?: string[]; // multiple previews
	color?: string; // màu sắc (text)
	size?: string | string[]; // kích thước (S/M/L/...)
	status?: string; // ACTIVE | INACTIVE
	description?: string; // mô tả sản phẩm
}

interface ProductPopupProps {
	open: boolean;
	onClose: () => void; // Hàm gọi khi đóng popup
	onSave: (data: ProductData) => void; // Hàm gọi khi lưu sản phẩm (edit existing)
	initialData?: ProductData | null; // Dữ liệu ban đầu để chỉnh sửa
}

// Component hiển thị popup thêm / sửa sản phẩm
export default function ProductPopup({ open, onClose, onSave, initialData }: ProductPopupProps) {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [id, setId] = useState("");
	const [status, setStatus] = useState<string>("ACTIVE");
	const [price, setPrice] = useState<number | undefined>(undefined);
	const [color, setColor] = useState<string>("");
	const [size, setSize] = useState<string[]>([]);
	const [description, setDescription] = useState<string>("");
	const [imageFiles, setImageFiles] = useState<File[]>([]); // Lưu trữ file ảnh người dùng chọn (ảnh thật upload lên server hay j đó)
	const [imagePreviews, setImagePreviews] = useState<string[]>([]); // Lưu trữ preview (data URL hoặc URL) dùng để hiển thị
	const [variants, setVariants] = useState<Record<string, { quantity: number; detailStatus: string }>>({}); // Lưu trữ thông tin chi tiết sản phẩm (per-size)
	const [errors, setErrors] = useState<Record<string, string>>({}); // Lưu trữ lỗi validate
	

	// Cập nhật trạng thái khi mở popup hoặc dữ liệu ban đầu thay đổi
useEffect(() => {
	if (open) {
		if (initialData) {
			setId(initialData.id ?? "");
			setName(initialData.name ?? "");
			setCategory(initialData.category ?? "");
			setPrice(typeof initialData.price === "number" ? initialData.price : undefined);
			setColor((initialData as any).color ?? "");
			const s = (initialData as any).size;
			const sizesArr = Array.isArray(s) ? s : s ? [s] : [];
			setSize(sizesArr);
			setStatus((initialData as any).status ?? "ACTIVE");
			setDescription((initialData as any).description ?? "");

			// Load hình ảnh từ dữ liệu ban đầu
			const imgs = (initialData as any).images;
			const single = (initialData as any).image;
			if (imgs && Array.isArray(imgs) && imgs.length > 0) {
				setImagePreviews(imgs as string[]);
				setImageFiles([]);
			} else if (single) {
				setImagePreviews([single as string]);
				setImageFiles([]);
			} else {
				setImagePreviews([]);
				setImageFiles([]);
			}

			// Khởi tạo variants từ dữ liệu ban đầu và đảm bảo có dữ liệu cho tất cả kích cỡ
			const vlist: Record<string, { quantity: number; detailStatus: string }> = {};
			if (Array.isArray((initialData as any).variants)) {
				for (const v of (initialData as any).variants) {
					if (v && v.size) vlist[String(v.size)] = { quantity: typeof v.quantity === 'number' ? v.quantity : 0, detailStatus: (v.detailStatus ?? v.status) ?? (v.quantity > 0 ? 'Còn hàng' : 'Hết hàng') };
				}
			}
			for (const sz of sizesArr) {
				if (!vlist[sz]) vlist[sz] = { quantity: 0, detailStatus: 'Hết hàng' };
			}
			setVariants(vlist);

			setErrors({});
		} else {
			setId("");
			setName("");
			setCategory("");
			setPrice(undefined);
			setColor("");
			setSize([]);
			setStatus("ACTIVE");
			setDescription("");
			setImageFiles([]);
			setImagePreviews([]);
			setErrors({});
			setVariants({});
		}
		} else {
			setId("");
			setName("");
			setCategory("");
			setPrice(undefined);
			setColor("");
			setSize([]);
			setStatus("ACTIVE");
			setDescription("");
			setImageFiles([]);
			setImagePreviews([]);
			setErrors({});
			setVariants({});
		}
}, [open, initialData]);

		// Xử lý khi người dùng chọn ảnh
		function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
			const files = e.target.files;
			if (!files || files.length === 0) return;
			const selected = Array.from(files);
			if (selected.length + imagePreviews.length > 10) {
				setErrors((prev) => ({ ...prev, image: 'Số lượng ảnh không được vượt quá 10' }));
				return;
			}
		const oversized = selected.find((f) => f.size > 5 * 1024 * 1024);
		if (oversized) {
			setErrors((prev) => ({ ...prev, image: 'Kích thước ảnh không được vượt quá 5MB' }));
			return;
		}

		// Đọc file ảnh thành data URL để hiển thị preview
		const readers = selected.map((file) => {
			return new Promise<string>((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = (ev) => {
					const result = ev.target?.result as string | null;
					if (result) resolve(result);
					else reject(new Error('No result'));
				};
				reader.onerror = () => reject(new Error('Read error'));
				reader.readAsDataURL(file);
			});
		});

		// Đọc tất cả ảnh và cập nhật state
		Promise.all(readers)
			.then((results) => {
				setImageFiles((prev) => [...prev, ...selected]);
				setImagePreviews((prev) => [...prev, ...results]);
				setErrors((prev) => {
					const c = { ...prev };
					delete c.image;
					return c;
				});
			})
			.catch(() => {
				setErrors((prev) => ({ ...prev, image: 'Lỗi khi đọc ảnh' }));
			});
	}

	// Xóa ảnh ở vị trí index
	function removeImageAt(index: number) {
		setImageFiles((prev) => prev.filter((_, i) => i !== index));
		setImagePreviews((prev) => prev.filter((_, i) => i !== index));
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
		if (!category || !category.trim()) e.category = 'Vui lòng chọn danh mục';
		if (!size || (Array.isArray(size) && size.length === 0)) e.size = 'Vui lòng chọn kích thước';
		if (typeof price !== 'number' || isNaN(price) || price <= 0) e.price = 'Giá bán phải lớn hơn 0';
		if (!description || !description.trim()) e.description = 'Mô tả không được để trống';
		if (!color || !color.trim()) {
			e.color = 'Màu sắc không được để trống';
		} else {
			const trimmed = color.trim();
			if (!isNaN(Number(trimmed))) {
				e.color = 'Sai định dạng';
			}
		}
	if (!imagePreviews || imagePreviews.length === 0) e.image = 'Vui lòng chọn ít nhất 1 ảnh';
		setErrors(e);
		return Object.keys(e).length === 0;
		}

	return (
		<Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
			<DialogContent className="w-[1200px] max-w-[98vw] max-h-[90vh] overflow-y-auto" style={{ scrollbarGutter: 'stable' as any }}>
				<DialogHeader>
					<DialogTitle>Thêm sản phẩm</DialogTitle>
				</DialogHeader>

				{/*Tên sản phẩm*/}
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

					{/* Variant inputs per selected size - moved lower so it appears after Kích thước block */}

					{/* Chọn danh mục */}
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

					{/* Giá bán */}
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
					
					{/* Màu sắc */}
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Màu sắc</label>
						<Input
							className={errors.color ? 'py-2 border-red-300 focus:border-red-500' : 'py-2'}
							placeholder="Nhập màu (ví dụ: Đỏ, Xanh,...)"
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
				
					{/* Trạng thái */}
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Trạng thái</label>
						<Select value={status} onValueChange={(v) => setStatus(v)}>
							<SelectTrigger className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ACTIVE">Đang hoạt động</SelectItem>
								<SelectItem value="INACTIVE">Ngừng hoạt động</SelectItem>
							</SelectContent>
						</Select>
					</div>
					
					{/* Kích thước */}
					<div>
						<label className="text-sm text-gray-700 mb-1 block">Kích thước</label>
						<div className="grid grid-cols-5 gap-2 items-center">
							{['S','M','L','XL','XXL'].map((sz) => (
								<label key={sz} className="inline-flex items-center gap-1 px-2 py-1 rounded-sm">
									<input
										type="checkbox"
										value={sz}
										className="w-4 h-4"
										checked={size.includes(sz)}
										onChange={(e) => {
											const v = e.target.value;
											setSize((prev) => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
											if (errors.size) {
												setErrors((prevErr) => {
													const c = { ...prevErr };
													delete c.size;
													return c;
												});
											}
										}}
									/>
									<span className="text-sm">{sz}</span>
								</label>
							))}
						</div>
						{errors.size && <div className="text-xs text-red-600 mt-1">{errors.size}</div>}
					</div>

					{/* Chi tiết sản phẩm */}
					{size.length > 0 && (
						<div className="sm:col-span-2 mt-2">
							<label className="text-sm text-gray-700 mb-1 block">Chi tiết sản phẩm</label>
							<div className="overflow-auto border rounded">
								<table className="min-w-full text-sm">
									<thead className="bg-gray-50 text-left">
										<tr>
											<th className="px-3 py-2">Kích cỡ</th>
											<th className="px-3 py-2">Số lượng</th>
											<th className="px-3 py-2">Trạng thái</th>
										</tr>
									</thead>
									<tbody>
										{size.map((sz) => (
											<tr key={sz} className="border-t">
												<td className="px-3 py-2 font-medium">{sz}</td>
												<td className="px-3 py-2 w-28">
													<Input
														type="number"
														className="w-28"
														value={String(variants[sz]?.quantity ?? 0)}
														onChange={(e) => {
															const v = Number((e.target as HTMLInputElement).value);
															setVariants((prev) => {
																const prevEntry = prev[sz] ?? { quantity: 0, detailStatus: 'Hết hàng' };
																const qty = Number.isNaN(v) ? 0 : v;
																const newStatus = prevEntry.detailStatus === 'Tạm ngưng' ? 'Tạm ngưng' : (qty > 0 ? 'Còn hàng' : 'Hết hàng');
																return { ...prev, [sz]: { ...prevEntry, quantity: qty, detailStatus: newStatus } };
															});
														}}
													/>
												</td>
												<td className="px-3 py-2">
													<Select value={variants[sz]?.detailStatus ?? 'Hết hàng'} 
														onValueChange={(v) => setVariants((prev) => 
														({ ...prev, [sz]: { ...(prev[sz] ?? { quantity: 0, detailStatus: 'Hết hàng' }), detailStatus: v } }))}>
														<SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
														<SelectContent>
															<SelectItem value="Hết hàng">Hết hàng</SelectItem>
															<SelectItem value="Còn hàng">Còn hàng</SelectItem>
															<SelectItem value="Tạm ngưng">Tạm ngưng</SelectItem>
														</SelectContent>
													</Select>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}
					
					{/* Mô tả sản phẩm */}
					<div className="sm:col-span-2">
						<label className="text-sm text-gray-700 mb-1 block">Mô tả</label>
						<textarea
							className={`w-full rounded border px-3 py-2 h-28 resize-y 
							${errors.description ? 'border-red-300 focus:border-red-500' : ''}`}
							placeholder="Nhập mô tả ngắn về sản phẩm"
							value={description}
							onChange={(e) => setDescription((e.target as HTMLTextAreaElement).value)}
						/>
						{errors.description && <div className="text-xs text-red-600 mt-1">{errors.description}</div>}
					</div>

					{/* Hình ảnh sản phẩm */}
					<div className="sm:col-span-2">
						<label className="text-sm text-gray-700 mb-1 block">Hình ảnh (tối đa 10 ảnh)</label>
						<div className="flex items-center gap-3">
							<input
								type="file"
								accept="image/*"
								multiple
								onChange={handleImageChange}
								className={errors.image ? 'rounded border px-2 py-1 bg-white border-red-300' : 'rounded border px-2 py-1 bg-white'}
							/>
							<span className="text-sm text-gray-500">{imagePreviews.length === 0 ? 'No files chosen' : `${imagePreviews.length} file(s) selected`}</span>
						</div>
						{errors.image && <div className="text-xs text-red-600 mt-1">{errors.image}</div>}
						{imagePreviews.length > 0 && (
							<div className="mt-3 grid grid-cols-3 gap-2">
								{imagePreviews.map((src, i) => (
									<div key={i} className="relative border rounded overflow-hidden">
										<img src={src} className="w-full h-24 object-cover bg-white" alt={`preview-${i}`} />
										<button type="button" onClick={() => removeImageAt(i)} className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1">
											<X className="w-4 h-4" />
										</button>
									</div>
								))}
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

						const finalId = id && id.trim()
							? id
							: (typeof crypto !== 'undefined' && (crypto as any).randomUUID)
								? (crypto as any).randomUUID()
								: `prod-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

						const payload: ProductData = {
							id: finalId,
							name,
							category,
							price,
							status,
							image: imagePreviews[0] ?? undefined,
							images: imagePreviews.length ? imagePreviews : undefined,
							color,
							size,
							description,
						};

						const variantsArr = Object.keys(variants).map((sz) => ({
							size: sz,
							quantity: variants[sz].quantity,
							detailStatus: variants[sz].detailStatus,
						}));

						const payloadWithVariants = {
							...payload,
							variants: variantsArr,
						} as ProductData & { variants?: any[] };

						onSave(payloadWithVariants as any);
					}}>
						<Save className="w-4 h-4" />
						Lưu
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
