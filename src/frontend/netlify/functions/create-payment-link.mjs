import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({
                success: false,
                error: "Method not allowed",
            }),
        };
    }

    try {
        const body = JSON.parse(event.body || "{}");

        const paymentLink = await razorpay.paymentLink.create({
            amount: body.amount || 19900,
            currency: "INR",
            description: body.plan === "capstone" ? "IT Freshers Hub Capstone Access" : "IT Freshers Hub Premium Access",

            customer: {
                name: body.name || "Student",
                email: body.email || "student@example.com",
            },

            notify: {
                email: true,
            },

            reminder_enable: true,

            callback_url:
                body.return_url || "https://itfreshershub.netlify.app/payment-success",

            callback_method: "get",
        });

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                success: true,
                url: paymentLink.short_url,
            }),
        };
    } catch (error) {
        console.error("Payment link creation failed:", error);

        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                success: false,
                error: error.message,
            }),
        };
    }
}