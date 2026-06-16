"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PAQUETES, getPaquete } from "../../lib/content";

const C = { card: "#171E27", border: "#243042", mut: "#9AA7B8", cyan: "#37D0E0" };
const grad = "linear-gradient(100deg,#2E75B6,#37D0E0)";
const COMPRABLES = ["quickstart", "foundations", "comunidad", "bootcamp"];

function ComprarInner() {
  const sp = useSearchParams();
  const planParam = sp.get("plan");
  const [loading, setLoading] = useState("");
  const [aviso, setAviso] = useState("");

  const lista = planParam && getPaquete(planParam) ? [getPaquete(planParam)] : PAQUETES.filter((p) => COMPRABLES.includes(p.slug));

  async function comprar(slug) {
    setLoading(slug); setAviso("");
    try {
      const r = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ plan: slug }) });
      const d = await r.json();
      if (d.url) { window.location.href = d.url; return; }
      setAviso("Estamos activando los pagos con Stripe. Dejanos tu mail en la home y te avisamos apenas esté — o escribinos y te lo habilitamos a mano hoy.");
    } catch (e) {
      setAviso("Estamos activando los pagos con Stripe. Escribinos y te lo habilitamos a mano hoy.");
    }
    setLoading("");
  }

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 22px 90px" }}>
      <div style={{ marginBottom: 24 }}><Link href="/" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>← KAIRO</Link></div>
      <h1 style={{ textAlign: "center", fontSize: 40, marginBottom: 8 }}>Elegí tu camino con KAIRO</h1>
      <p style={{ textAlign: "center", color: C.mut, marginBottom: 32 }}>Pago seguro con Stripe.</p>
      {aviso && <div style={{ maxWidth: 620, margin: "0 auto 28px", background: "rgba(55,208,224,0.08)", border: `1px solid ${C.cyan}`, borderRadius: 12, padding: 16, color: "#EAF0F7", textAlign: "center", lineHeight: 1.5 }}>{aviso} <Link href="/#contacto" style={{ color: C.cyan }}>Contacto →</Link></div>}
      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        {lista.map((p) => (
          <div key={p.slug} style={{ background: C.card, border: `1px solid ${p.destacado ? C.cyan : C.border}`, borderRadius: 18, padding: 26 }}>
            <h3 style={{ fontSize: 20, margin: 0 }}>{p.nombre}</h3>
            <div style={{ color: C.cyan, fontWeight: 800, fontSize: 30, margin: "10px 0" }}>{p.precio}</div>
            <p style={{ color: C.mut, minHeight: 48, lineHeight: 1.5 }}>{p.tagline}</p>
            <button onClick={() => comprar(p.slug)} disabled={loading === p.slug}
              style={{ width: "100%", background: grad, color: "#06121c", border: "none", padding: "12px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
              {loading === p.slug ? "Redirigiendo…" : "Comprar"}
            </button>
            <p style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}><Link href={`/curso/${p.slug}`} style={{ color: C.mut, fontSize: 13, textDecoration: "none" }}>Ver qué incluye →</Link></p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function Comprar() {
  return <Suspense fallback={<main style={{ padding: "120px 22px", textAlign: "center", color: C.mut }}>Cargando…</main>}><ComprarInner /></Suspense>;
}
