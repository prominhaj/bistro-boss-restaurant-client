import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hook/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../../hook/useAuth/useAuth";

const CheckoutForm = ({ cart, price }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // swal(
    //   {
    //     title: "Are you sure?",
    //     text: "You will not be able to recover this imaginary file!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Yes, delete it!",
    //     closeOnConfirm: false,
    //   },
    //   function () {
    //     // swal("Deleted!", "Your imaginary file has been deleted.", "success");
    //   }
    // );
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
      console.log(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: cart.length,
        items: cart.map((item) => item._id),
        itemNames: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertedId) {
          toast.success("Payment SuccessFull");
        }
      });
    }
  };

  return (
    <div className="pt-10">
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
