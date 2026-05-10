import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export default function PaymentSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        verifyPayment();
    }, []);

    const verifyPayment = async () => {
        try {
            const params = new URLSearchParams(window.location.search);

            const paymentLinkId = params.get(
                "razorpay_payment_link_id",
            );

            if (!paymentLinkId) {
                navigate({ to: "/" });

                return;
            }

            const response = await fetch(
                `/api/verify-payment-link?razorpay_payment_link_id=${paymentLinkId}`,
            );

            const data = await response.json();

            if (data.paid) {
                localStorage.setItem(
                    "itfresherhub_subscription_v2",
                    JSON.stringify({
                        active: true,
                        plan: "premium",
                        activatedAt: new Date().toISOString(),
                    }),
                );

                navigate({ to: "/" });

                window.location.reload();
            } else {
                navigate({ to: "/" });
            }
        } catch (error) {
            console.error(error);

            navigate({ to: "/" });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-3">
                <p className="text-2xl font-bold">
                    Verifying Payment...
                </p>

                <p className="text-muted-foreground">
                    Please wait while we confirm your payment.
                </p>
            </div>
        </div>
    );
}