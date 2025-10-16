"use client";

import type React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import PayPal from "@/components/paypal";

export default function CheckoutPage() {
  const { items, total } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: user?.user_metadata?.name?.split(" ")[0] || "",
    lastName: user?.user_metadata?.name?.split(" ")[1] || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Vietnam",
    paymentMethod: "card",
    shippingMethod: "standard",
    saveInfo: false,
    newsletter: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenPopup = () => {
    // Validate form before opening popup
    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "phone",
      "address",
      "city",
      "postalCode",
    ];
    const isValid = requiredFields.every(
      (field) => formData[field as keyof typeof formData] !== ""
    );
    if (!isValid) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const orderId = uuidv4();

  const shippingCost = total * 0.05;
  const finalTotal = total + shippingCost;

  const invoiceData = {
    orderId,
    customerName: `${formData.firstName} ${formData.lastName}`,
    totalAmount: finalTotal.toLocaleString("vi-VN") + "₫",
    items: items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: (item.price * item.quantity).toLocaleString("vi-VN") + "₫",
    })),
  };
  const usdTotal = finalTotal / 25000; // chuyển VNĐ sang USD

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Giỏ hàng trống</h1>
          <p className="text-muted-foreground mb-6">
            Thêm sản phẩm vào giỏ hàng để tiếp tục thanh toán
          </p>
          <Button onClick={() => router.push("/products")}>
            Tiếp tục mua sắm
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Thanh toán</h1>
        <p className="text-muted-foreground">Hoàn tất đơn hàng của bạn</p>
      </div>

      <form className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Thông tin liên hệ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) =>
                    handleInputChange("newsletter", checked as boolean)
                  }
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Đăng ký nhận tin khuyến mãi
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Địa chỉ giao hàng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Họ *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Tên *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="address">Địa chỉ *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Thành phố *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Mã bưu điện *</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) =>
                      handleInputChange("postalCode", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="saveInfo"
                  checked={formData.saveInfo}
                  onCheckedChange={(checked) =>
                    handleInputChange("saveInfo", checked as boolean)
                  }
                />
                <Label htmlFor="saveInfo" className="text-sm">
                  Lưu thông tin cho lần mua tiếp theo
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Tóm tắt đơn hàng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="flex gap-3"
                  >
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.size && `Size: ${item.size}`}
                        {item.size && item.color && " • "}
                        {item.color && `Màu: ${item.color}`}
                      </p>
                      <p className="font-medium text-sm">
                        {(item.price * item.quantity).toLocaleString("vi-VN")}₫
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Order Totals */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span>{total.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển</span>
                  <span>{shippingCost.toLocaleString("vi-VN")}₫</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Tổng cộng</span>
                  <span>{finalTotal.toLocaleString("vi-VN")}₫</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={handleOpenPopup}
                className="w-full"
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? "Đang xử lý..." : "Hoàn tất đơn hàng"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Bằng cách đặt hàng, bạn đồng ý với{" "}
                <a href="/terms" className="underline">
                  Điều khoản dịch vụ
                </a>{" "}
                và{" "}
                <a href="/privacy" className="underline">
                  Chính sách bảo mật
                </a>{" "}
                của chúng tôi.
              </p>
            </CardContent>
          </Card>
        </div>
      </form>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md w-11/12 max-h-[80vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-center mb-5 text-xl font-bold">
              Hóa đơn đơn hàng
            </h2>

            {/* Invoice Section */}
            <div className="mb-5">
              <p className="mb-2">
                <strong>Mã đơn hàng:</strong> {invoiceData.orderId}
              </p>
              <p className="mb-3">
                <strong>Khách hàng:</strong> {invoiceData.customerName}
              </p>
              <table className="w-full border-collapse mb-3">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      Sản phẩm
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Số lượng
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Giá
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">
                        {item.name}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.quantity}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="font-bold text-right">
                Tổng tiền: {invoiceData.totalAmount}
              </p>
            </div>

            {/* Payment Methods */}
            <h3 className="mb-3 font-semibold">Chọn phương thức thanh toán:</h3>
            <div className="flex flex-wrap gap-3 mb-5 ">
              {PayPal({
                value: usdTotal.toFixed(2),
                reference_id: invoiceData.orderId,
              })}
            </div>

            {/* Confirm Buttons */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handleClosePopup}
                disabled={isProcessing}
              >
                Hủy
              </Button>
              {/* <Button
                type="button"
                onClick={handleConfirmPayment}
                disabled={isProcessing || !selectedPayment}
              >
                {isProcessing ? "Đang xử lý..." : "Xác nhận"}
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
