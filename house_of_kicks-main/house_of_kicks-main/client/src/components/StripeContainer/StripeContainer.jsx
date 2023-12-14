import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "../Payment/Payment"

const PUBLIC_KEY = "pk_test_51OKxIlLV3xZUCUi6lzGNaensHIgzdKmMWHltosyZLQplgjx6aUBpNoOWhJdILvc8spq19AxbYattyHktixCbqnjz00HeqhB3Ck"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}