import {
  PayPalButtons,
  PayPalScriptProvider,
  PayPalButtonsComponentProps,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import { useCart } from "@/contexts/cart-context";

interface PayPalProps {
  value: string;
  reference_id: string;
}

export default function PayPal({ value, reference_id }: PayPalProps) {
  const { clearCart } = useCart();
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
    components: "buttons",
  };

  const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/paypal/create-paypal-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            value: String(value),
            currency_code: "USD",
            reference_id,
          }),
        }
      );

      const orderData = await response.json();
      console.log("Order created:", orderData);

      if (!orderData?.data?.id)
        throw new Error("Failed to create PayPal order");
      return orderData.data.id;
    } catch (error) {
      console.error("Error creating PayPal order:", error);
      throw error;
    }
  };

  const onApprove: PayPalButtonsComponentProps["onApprove"] = async (data) => {
    const response = await fetch(
      "http://localhost:8080/api/paypal/capture-paypal-order",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID: data.orderID }),
      }
    );

    const details = await response.json();
    console.log("Capture result:", details);

    alert("Thanh toán thành công! " + details?.payer?.name?.given_name);
    clearCart();
    window.location.href = `/checkout/success?orderID=${data.orderID}`;
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
}
