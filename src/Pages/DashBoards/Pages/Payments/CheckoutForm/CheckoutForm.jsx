import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hook/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../../hook/useAuth/useAuth";
import { Spinner } from "@chakra-ui/react";

const CheckoutForm = ({ cart, price }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
    } else {
      //   console.log("Payment Method", paymentMethod);
      //   toast.success("Your Payment SuccessFull");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      toast.error(confirmError.message);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date().toISOString().slice(0, 10),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.itemId),
        itemNames: cart.map((item) => item.name),
        status: "Pending",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          toast.success("Payment SuccessFull");
        }
      });
    }
  };

  return (
    <div className="pt-10">
      {processing && (
        <>
          <div className="mb-4">
            <Spinner />
          </div>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement
          className="px-3 py-4 shadow-2xl"
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="py-8">
          <button
            className="py-3 w-full sm:w-2/5 rounded-lg bg-violet-700 text-white text-xl font-bold font-['Inter'] disabled:opacity-50"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
