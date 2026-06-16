"use client";
import { useState } from "react";

const OFERTAS = [
  { plan: "entrada", titulo: "Mini-curso de entrada", precio: "$47", desc: "Tu primer agente de IA en 1 hora + plantillas." },
  { plan: "core", titulo: "Curso KAIRO Core", precio: "$297", desc: "De cero a tu primer sistema de IA que factura." },
  { plan: "comunidad", titulo: "Comunidad KAIRO", precio: "$49/mes", desc: "Cursos + automatizaciones + comunidad + lives." },
];

export default function Comprar() {
  const [loading, setLoading] = useState("");
  async function comprar(plan) {
    setLoading(plan);
    const r = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ plan }) });
    const d = await r.json();
    if (d.url) window.location.href = d.url; else { alert(d.error || "Error"); setLoading(""); }
  }
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "70px 22px" }}>
      <h1 style={{ textAlign: "center", fontSize: 40, marginBottom: 8 }}>Elegí tu camino con KAIRO</h1>
      <p style={{ textAlign: "center", color: "#9AA7B8", marginBottom: 40 }}>Pago seguro con Stripe.</p>
      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        {OFERTAS.map((o) => (
          <div key={o.plan} style={{ background: "#171E27", border: "1px solid #243042", borderRadius: 18, padding: 26 }}>
            <h3 style={{ fontSize: 20, margin: 0 }}>{o.titulo}</h3>
            <div style={{ color: "#37D0E0", fontWeight: 800, fontSize: 30, margin: "10px 0" }}>{o.precio}</div>
            <p style={{ color: "#9AA7B8", minHeight: 48 }}>{o.desc}</p>
            <button onClick={() => comprar(o.plan)} disabled={loading === o.plan}
              style={{ width: "100%", background: "linear-gradient(100deg,#2E75B6,#37D0E0)", color: "#06121c", border: "none", padding: "12px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
              {loading === o.plan ? "Redirigiendo…" : "Comprar"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
