import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = ({ bookings }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false)
    const { price, patient, email, _id } = bookings;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setCardSuccess('')
        setLoading(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,

                    }
                }
            }
        )
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                patient,
                bookingId: _id

            }
            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setCardSuccess("Your Payment Complete");
                        setTransactionId(paymentIntent.id)
                    }
                })

        }
        setLoading(false);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary my-5 flex justify-center" type="submit" disabled={!stripe || !clientSecret || loading} >
                    Payment
                </button>
            </form>
            {cardError && <p className="text-center text-red-500 text-lg py-3">{cardError}</p>}
            {
                cardSuccess && <div>
                    <p className="text-center text-green-500">{cardSuccess}</p>
                    <p className="text-center">TransactionId:  <span>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;