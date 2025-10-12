"use client";

import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  PayPalScriptProvider,
  ReactPayPalScriptOptions,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useCallback } from "react";

interface OrderData {
  id: string;
  details?: Array<{
    issue: string;
    description: string;
  }>;
  debug_id?: string;
}

export default function PayPal() {
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",
    components: "buttons",
    currency: "USD",
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Thanh toán qua PayPal (Sandbox)
      </h2>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtonsWrapper />
      </PayPalScriptProvider>
    </div>
  );
}

function PayPalButtonsWrapper() {
  const [{ isPending, isResolved }] = usePayPalScriptReducer();

  const styles: PayPalButtonsComponentProps["style"] = {
    shape: "rect",
    layout: "vertical",
    color: "gold",
    label: "paypal",
  };

  // Hàm tạo đơn hàng (gọi API backend)
  const createOrder: PayPalButtonsComponentProps["createOrder"] =
    useCallback(async () => {
      try {
        const response = await fetch("/api/create-paypal-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cart: [{ id: "product_1", quantity: 1 }],
          }),
        });

        const orderData: OrderData = await response.json();

        if (!orderData.id) {
          const errorDetail = orderData?.details?.[0];
          const errorMessage = errorDetail
            ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
            : "Unexpected error occurred, please try again.";
          throw new Error(errorMessage);
        }

        return orderData.id;
      } catch (error) {
        console.error("Create Order Error:", error);
        alert("Lỗi khi tạo đơn hàng PayPal, vui lòng thử lại.");
        throw error;
      }
    }, []);

  if (isPending) return <div>Đang tải PayPal...</div>;
  if (!isResolved) return null;

  return (
    <div className="w-full max-w-xs">
      <PayPalButtons
        style={styles}
        createOrder={createOrder}
        fundingSource="paypal"
      />
    </div>
  );
}
