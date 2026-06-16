"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PAQUETES, getPaquete, tr } from "../../lib/content";
import { detectLang, saveLang } from "../../lib/lang";

const C = { card: "#171E27", border: "#243042", mut: "#9AA7B8", cyan: "#37D0E0" };
const grad = "linear-gradient(100deg,#2E75B6,#37D0E0)";
const COMPRABLES = ["quickstart", "foundations", "comunidad", "bootcamp"];

const UI = {
  es: { title: "Elegí tu camino con KAIRO", sub: "Pago seguro con Stripe.", comprar: "Comprar", redir: "Redirigiendo…", ver: "Ver qué incluye →", aviso: "Estamos activando los pagos con Stripe. Dejanos tu mail en la home y te avisamos apenas esté — o escribinos y te lo habilitamos a mano hoy.", contacto: "Contacto →" },
  en: { title: "Choose your path with KAIRO", sub: "Secure payment with Stripe.", comprar: "Buy", redir: "Redirecting…", ver: "See what's included →", aviso: "We're activating Stripe payments. Leave your email on the home page and we'll let you know the moment it's live — or message us and we'll enable it by hand today.", contacto: "Contact →" },
};

function ComprarInner() {
  const sp = useSearchParams();
  const planParam = sp.get("plan");
  const [loading, setLoading] = useState("");
  const [aviso, setAviso] = useState(false);
  const [lang, setLang] = useState("es");
  useEffect(() => { setLang(detectLang()); }, []);
  const t = UI[lang];
  function toggle() { const n = lang === "es" ? "en" : "es"; saveLang(n); setLang(n); }

  const lista = planParam && getPaquete(planParam) ? [getPaquete(planParam)] : PAQUETES.filter((p) => COMPRABLES.includes(p.slug));

  async function comprar(slug) {
    setLoading(slug); setAviso(false);
    try {
      const r = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ plan: slug }) });
      const d = await r.json();
      if (d.url) { window.location.href = d.url; return; }
      setAviso(true);
    } catch (e) { setAviso(true); }
    setLoading("");
  }

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 22px 90px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <Link href="/" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>← KAIRO</Link>
        <button onClick={toggle} style={{ background: "none", border: `1px solid ${C.border}`, color: C.mut, borderRadius: 8, padding: "5px 10px", cursor: "pointer", fontSize: 13 }}>{lang === "es" ? "EN" : "ES"}</button>
      </div>
      <h1 style={{ textAlign: "center", fontSize: 40, marginBottom: 8 }}>{t.title}</h1>
      <p style={{ textAlign: "center", color: C.mut, marginBottom: 32 }}>{t.sub}</p>
      {aviso && <div style={{ maxWidth: 620, margin: "0 auto 28px", background: "rgba(55,208,224,0.08)", border: `1px solid ${C.cyan}`, borderRadius: 12, padding: 16, color: "#EAF0F7", textAlign: "center", lineHeight: 1.5 }}>{t.aviso} <Link href="/#contacto" style={{ color: C.cyan }}>{t.contacto}</Link></div>}
      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        {lista.map((p) => (
          <div key={p.slug} style={{ background: C.card, border: `1px solid ${p.destacado ? C.cyan : C.border}`, borderRadius: 18, padding: 26 }}>
            <h3 style={{ fontSize: 20, margin: 0 }}>{tr(p.nombre, lang)}</h3>
            <div style={{ color: C.cyan, fontWeight: 800, fontSize: 30, margin: "10px 0" }}>{p.precio}</div>
            <p style={{ color: C.mut, minHeight: 48, lineHeight: 1.5 }}>{tr(p.tagline, lang)}</p>
            <button onClick={() => comprar(p.slug)} disabled={loading === p.slug}
              style={{ width: "100%", background: grad, color: "#06121c", border: "none", padding: "12px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
              {loading === p.slug ? t.redir : t.comprar}
            </button>
            <p style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}><Link href={`/curso/${p.slug}`} style={{ color: C.mut, fontSize: 13, textDecoration: "none" }}>{t.ver}</Link></p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function Comprar() {
  return <Suspense fallback={<main style={{ padding: "120px 22px", textAlign: "center", color: C.mut }}>…</main>}><ComprarInner /></Suspense>;
}
