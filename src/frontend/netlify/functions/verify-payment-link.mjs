import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function handler(event) {
    try {
        const params = event.queryStringParameters || {};

        const paymentLinkId = params.razorpay_payment_link_id;

        if (!paymentLinkId) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    success: false,
                    error: "Payment link id missing",
                }),
            };
        }

        const payment = await razorpay.paymentLink.fetch(paymentLinkId);

        if (payment.status === "paid") {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    success: true,
                    paid: true,
                }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                paid: false,
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                error: error.message,
            }),
        };
    }
}
