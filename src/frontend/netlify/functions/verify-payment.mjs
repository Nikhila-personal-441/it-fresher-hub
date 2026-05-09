/**
 * Netlify Serverless Function: verify-payment
 *
 * Receives a Razorpay Payment ID from the frontend,
 * calls Razorpay API to verify the payment status,
 * and returns whether the payment is valid.
 *
 * Environment variables required (set in Netlify Dashboard):
 *   RAZORPAY_KEY_ID     — Razorpay Key ID (rzp_live_xxx or rzp_test_xxx)
 *   RAZORPAY_KEY_SECRET — Razorpay Key Secret
 */

export default async function handler(request) {
  // Only allow POST
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const { paymentId, expectedAmount } = body;

    if (!paymentId || typeof paymentId !== "string") {
      return new Response(
        JSON.stringify({ verified: false, error: "Payment ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return new Response(
        JSON.stringify({ verified: false, error: "Payment verification not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    // Call Razorpay Payments API
    const credentials = btoa(`${keyId}:${keySecret}`);
    const rzpResponse = await fetch(
      `https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!rzpResponse.ok) {
      const errText = await rzpResponse.text();
      console.error("Razorpay API error:", rzpResponse.status, errText);
      return new Response(
        JSON.stringify({
          verified: false,
          error: "Invalid Payment ID. Please check and try again.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const payment = await rzpResponse.json();

    // Verify payment status
    // Razorpay statuses: created, authorized, captured, refunded, failed
    const isCaptured = payment.status === "captured";
    const isAuthorized = payment.status === "authorized";
    const isValid = isCaptured || isAuthorized;

    // Optionally verify amount (in paise)
    let amountMatch = true;
    if (expectedAmount && payment.amount) {
      const expectedPaise = expectedAmount * 100;
      amountMatch = payment.amount >= expectedPaise;
    }

    if (isValid && amountMatch) {
      return new Response(
        JSON.stringify({
          verified: true,
          paymentId: payment.id,
          amount: payment.amount / 100, // Convert paise to rupees
          currency: payment.currency,
          status: payment.status,
          method: payment.method,
          email: payment.email || null,
          contact: payment.contact || null,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        verified: false,
        error: isCaptured === false && isAuthorized === false
          ? `Payment status is "${payment.status}". Only captured/authorized payments are accepted.`
          : "Payment amount does not match the expected amount.",
        status: payment.status,
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("verify-payment error:", err);
    return new Response(
      JSON.stringify({ verified: false, error: "Verification failed. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

export const config = {
  path: "/api/verify-payment",
};
