# KAIRO — App real (Next.js + Supabase + Stripe)

## YA configurado por mí
- **Supabase KAIRO** (proyecto propio, separado de Ovo Flow): `https://llbpdbtseoamwvagbice.supabase.co`
  - Tablas creadas: `leads`, `profiles` (+ trigger que crea el perfil al loguearse con Google).
  - Key pública ya puesta en `.env.local`.
- **Login con Google** (código listo en `/login`).
- **Botones de paquetes** + **checkout de Stripe** (código listo en `/precios` y `/api/checkout`).

## Lo que falta (con tus llaves)
1. **Activar Google en Supabase**: Supabase → Authentication → Providers → Google → pegá tu Google OAuth Client ID + Secret (de Google Cloud) y la redirect URL que te muestra Supabase. (Si querés, te guío en 5 min.)
2. **Stripe**: creá los 4 productos, pegá `STRIPE_SECRET_KEY` y los `STRIPE_PRICE_*` en `.env.local`.
3. **Deploy**: subí esta carpeta a un repo de GitHub → en el proyecto **kairo** de Vercel hacé "Connect Git Repository" → pegá las variables de `.env.local` → Deploy. Como imkairo.com ya está en ese proyecto, queda online solo.

> Probar local: `npm install && npm run dev` → http://localhost:3000
