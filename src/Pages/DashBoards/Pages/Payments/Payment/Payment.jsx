import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import useCart from "../../../../../hook/useCart/useCart";

const paymentGatewayToken = import.meta.env.VITE_PAYMENT_GATEWAY_TOKEN;
const stripePromise = loadStripe(paymentGatewayToken);
const Payment = () => {
  const [cart] = useCart();
  const total = cart?.reduce((sum, item) => sum + item.price, 0);

  const price = parseFloat(total).toFixed(2);

  return (
    <div className="py-20 mx-auto text-center max-w-[500px]">
      <h1 className="text-center text-neutral-900 text-[40px] font-normal font-['Inter']">
        Payment
      </h1>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
