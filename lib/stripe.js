import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
export const PRICES = {
  entrada: process.env.STRIPE_PRICE_ENTRADA,
  core: process.env.STRIPE_PRICE_CORE,
  comunidad: process.env.STRIPE_PRICE_COMUNIDAD,
};
