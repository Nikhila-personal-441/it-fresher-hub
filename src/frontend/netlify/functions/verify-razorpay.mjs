/**
 * Netlify Serverless Function: verify-razorpay
 *
 * Verifies Razorpay payment using:
 * 1) Signature verification: HMAC_SHA256(order_id|payment_id, key_secret)
 * 2) Razorpay Payments API lookup to confirm status/amount/order_id
 *
 * Env required:
 *   RAZORPAY_KEY_ID
 *   RAZORPAY_KEY_SECRET
 */
import crypto from "crypto";

function safeEqual(a, b) {
  const aa = Buffer.from(String(a || ""), "utf8");
  const bb = Buffer.from(String(b || ""), "utf8");
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ verified: false, error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const expectedAmount = Number(body?.expectedAmount);
    const razorpayPaymentId = String(body?.razorpayPaymentId || "");
    const razorpayOrderId = String(body?.razorpayOrderId || "");
    const razorpaySignature = String(body?.razorpaySignature || "");

    if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      return new Response(
        JSON.stringify({ verified: false, error: "Missing payment verification data" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    if (!Number.isFinite(expectedAmount) || expectedAmount <= 0) {
      return new Response(
        JSON.stringify({ verified: false, error: "Invalid expected amount" }),
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

    // 1) Signature verification
    const payload = `${razorpayOrderId}|${razorpayPaymentId}`;
    const digest = crypto
      .createHmac("sha256", keySecret)
      .update(payload)
      .digest("hex");

    if (!safeEqual(digest, razorpaySignature)) {
      return new Response(
        JSON.stringify({ verified: false, error: "Invalid payment signature" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // 2) Razorpay payment lookup to confirm captured + amount
    const credentials = btoa(`${keyId}:${keySecret}`);
    const rzpResponse = await fetch(
      `https://api.razorpay.com/v1/payments/${encodeURIComponent(razorpayPaymentId)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      },
    );

    const payment = await rzpResponse.json().catch(() => null);
    if (!rzpResponse.ok || !payment) {
      console.error("Razorpay payment lookup error:", rzpResponse.status, payment);
      return new Response(
        JSON.stringify({ verified: false, error: "Unable to verify payment with Razorpay" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const isCaptured = payment.status === "captured";
    const amountMatch = Number(payment.amount) === Math.round(expectedAmount * 100);
    const orderMatch = String(payment.order_id || "") === razorpayOrderId;

    if (!orderMatch) {
      return new Response(
        JSON.stringify({ verified: false, error: "Order mismatch" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    if (!isCaptured) {
      return new Response(
        JSON.stringify({ verified: false, error: `Payment status is "${payment.status}"` }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    if (!amountMatch) {
      return new Response(
        JSON.stringify({ verified: false, error: "Amount mismatch" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        verified: true,
        status: payment.status,
        paymentId: payment.id,
        orderId: payment.order_id,
        amount: payment.amount,
        currency: payment.currency,
        method: payment.method,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("verify-razorpay error:", err);
    return new Response(
      JSON.stringify({ verified: false, error: "Verification failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

export const config = {
  path: "/api/verify-razorpay",
};

