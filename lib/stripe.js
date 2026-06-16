import Stripe from "stripe";

// Stripe se inicializa solo si hay clave (evita romper el build sin claves).
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" })
  : null;

// Mapa de planes -> Price ID de Stripe (se completan con las claves reales).
export const PRICES = {
  quickstart: process.env.STRIPE_PRICE_QUICKSTART,
  foundations: process.env.STRIPE_PRICE_FOUNDATIONS,
  comunidad: process.env.STRIPE_PRICE_COMUNIDAD,
  bootcamp: process.env.STRIPE_PRICE_BOOTCAMP,
};
