/**
 * Netlify Serverless Function: create-order
 *
 * Creates a Razorpay Order server-side and returns orderId.
 *
 * Env required:
 *   RAZORPAY_KEY_ID
 *   RAZORPAY_KEY_SECRET
 */
export default async function handler(request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const amountInr = Number(body?.amount);
    const currency = String(body?.currency || "INR");
    const plan = String(body?.plan || "premium");
    const userId = body?.userId ? String(body.userId) : null;
    const userEmail = body?.userEmail ? String(body.userEmail) : null;

    if (!Number.isFinite(amountInr) || amountInr <= 0) {
      return new Response(JSON.stringify({ error: "Invalid amount" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return new Response(JSON.stringify({ error: "Payment not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const receipt = `itfh_${plan}_${Date.now()}_${userId ?? "anon"}`;

    const credentials = btoa(`${keyId}:${keySecret}`);
    const rzpResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Math.round(amountInr * 100),
        currency,
        receipt,
        notes: {
          plan,
          userId: userId ?? "",
          userEmail: userEmail ?? "",
        },
      }),
    });

    const json = await rzpResponse.json().catch(() => null);
    if (!rzpResponse.ok) {
      console.error("Razorpay create order error:", rzpResponse.status, json);
      return new Response(JSON.stringify({ error: "Failed to create order" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        orderId: json?.id,
        amount: json?.amount,
        currency: json?.currency,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("create-order error:", err);
    return new Response(JSON.stringify({ error: "Failed to create order" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  path: "/api/create-order",
};

