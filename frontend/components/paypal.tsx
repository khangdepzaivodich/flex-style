import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  PayPalScriptProvider,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
interface OrderData {
  id: string;
  details?: Array<{
    issue: string;
    description: string;
  }>;
  debug_id?: string;
}
export default function PayPal(value: number, reference_id: string) {
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
  };

  const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
    try {
      const response = await fetch("/paypal/create-paypal-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          value: value,
          currency_code: "USD",
          reference_id: reference_id,
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
      console.error(error);
      throw error;
    }
  };

  const onApprove: PayPalButtonsComponentProps["onApprove"] = async (data) => {
    const response = await fetch("/paypal/capture-paypal-order", {
      method: "POST",
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    });

    const details = await response.json();

    window.location.href = "/checkout/success";
    alert("Transaction completed by " + details.payer.name.given_name);
  };
  const onCancel: PayPalButtonsComponentProps["onCancel"] = () => {
    window.location.assign("/checkout");
  };

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={onCancel}
          fundingSource="paypal"
        />
      </PayPalScriptProvider>
    </div>
  );
}
