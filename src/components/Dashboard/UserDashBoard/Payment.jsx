import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    const bookings = useLoaderData();
    const { patient, treatment, price, appointmentDate, slot } = bookings;
    const stripePromise = loadStripe(import.meta.env.VITE_PaymentPK)
    return (
        <div>
            <h1 className="text-center text-2xl textColor">Payment For {treatment}</h1>
            <div className="flex justify-center p-3 text-lg ">
                <h2>Please Pay ${price} for your appointment on {appointmentDate} at {slot}</h2>
            </div>
            <div className=" p-12 border bg-base-200 ">
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookings={bookings}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;