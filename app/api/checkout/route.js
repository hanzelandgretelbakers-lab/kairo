import { NextResponse } from "next/server";
import { stripe, PRICES } from "../../../lib/stripe";

export async function POST(req) {
  try {
    const { plan } = await req.json();
    const price = PRICES[plan];
    if (!price) return NextResponse.json({ error: "Plan invalido" }, { status: 400 });
    const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const mode = plan === "comunidad" ? "subscription" : "payment";
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price, quantity: 1 }],
      success_url: `${site}/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site}/comprar`,
      allow_promotion_codes: true,
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
