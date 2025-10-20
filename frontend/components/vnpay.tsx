// frontend/components/PaymentButton.tsx
import { useState } from "react";
import type { VerifyReturnUrl } from "vnpay/types-only"; // ✅ Chỉ import types

interface PaymentButtonProps {
  amount: number;
  orderId: string;
  onPaymentResult?: (result: VerifyReturnUrl) => void;
}
export const VNPAY: React.FC<PaymentButtonProps> = ({
  amount,
  orderId,
  onPaymentResult,
}) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // ✅ Gọi API backend thay vì import trực tiếp
      const response = await fetch(
        "http://localhost:8080/api/vnpay/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, orderId }),
        }
      );

      const payment = await response.json();

      if (payment.statusCode == "201") {
        // Chuyển hướng đến VNPay
        window.location.href = payment.data;
      } else {
        alert("Lỗi tạo thanh toán");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Lỗi kết nối");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
      {loading ? "Đang xử lý..." : `Thanh toán VNPay`}
    </button>
  );
};
