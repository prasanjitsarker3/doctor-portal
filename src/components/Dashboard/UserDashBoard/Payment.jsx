import { useLoaderData } from "react-router-dom";

const Payment = () => {
    const bookings = useLoaderData()
    console.log("Loaded Data", bookings);
    const { patient, treatment, price, appointmentDate ,slot} = bookings;
    return (
        <div>
            <h1 className="text-center text-2xl textColor">Payment For {treatment}</h1>
            <div className="flex justify-center p-3 text-lg ">
               <h2>Please Pay ${price} for your appointment on {appointmentDate} at {slot}</h2>
            </div>
        </div>
    );
};

export default Payment;