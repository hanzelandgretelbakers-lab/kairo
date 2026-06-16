import Link from "next/link";
export default function Home() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "90px 22px", textAlign: "center" }}>
      <span style={{ color: "#37D0E0", fontWeight: 700, letterSpacing: 1 }}>⚡ IA · AUTOMATIZACIÓN · CONTENIDO</span>
      <h1 style={{ fontSize: "clamp(34px,6vw,60px)", lineHeight: 1.05, margin: "20px 0" }}>
        El momento de la IA <span style={{ background: "linear-gradient(100deg,#2E75B6,#37D0E0)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>es ahora</span>.
      </h1>
      <p style={{ color: "#9AA7B8", fontSize: 20, maxWidth: 640, margin: "0 auto 30px" }}>
        Te ayudo a ahorrar 10+ horas por semana automatizando tu trabajo y tu negocio con IA — sin saber programar.
      </p>
      <Link href="/comprar" style={{ background: "linear-gradient(100deg,#2E75B6,#37D0E0)", color: "#06121c", padding: "14px 28px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>
        Ver opciones
      </Link>
      <p style={{ marginTop: 50, color: "#5b6675", fontSize: 13 }}>
        (Landing completa con animación en la versión estática · esta es la app con checkout)
      </p>
    </main>
  );
}
