"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { tr, getPaquete } from "../../../lib/content";
import { detectLang, saveLang } from "../../../lib/lang";

const C = { bg: "#0E1116", card: "#171E27", border: "#243042", text: "#EAF0F7", mut: "#9AA7B8", cyan: "#37D0E0" };
const grad = "linear-gradient(100deg,#2E75B6,#37D0E0)";

const UI = {
  es: { cuenta: "Mi cuenta", paraQuien: "¿Para quién es?", queLlevas: "Qué te llevás", deQue: "De qué se trata", queIncluye: "Qué incluye", programa: "El programa, paso a paso", adentro: "Qué hay adentro", escalon: "Cada módulo es un escalón de tu transformación.", resultadoLbl: "Resultado", comoTrab: "Cómo trabajamos", cuandoTermines: "Cuando termines, vas a tener", preguntas: "Preguntas", arrancamos: "¿Arrancamos?", yaCompraste: "¿Ya compraste? Entrá con Google →", verTambien: "Ver también:", tipoServicio: "Servicio", tipoConsult: "Consultoría 1-a-1", tipoMembresia: "Membresía", tipoCurso: "Curso" },
  en: { cuenta: "My account", paraQuien: "Who is it for?", queLlevas: "What you get", deQue: "What it's about", queIncluye: "What's included", programa: "The program, step by step", adentro: "What's inside", escalon: "Each module is a step in your transformation.", resultadoLbl: "Result", comoTrab: "How we work", cuandoTermines: "When you finish, you'll have", preguntas: "Questions", arrancamos: "Ready to start?", yaCompraste: "Already purchased? Sign in with Google →", verTambien: "See also:", tipoServicio: "Service", tipoConsult: "1:1 consulting", tipoMembresia: "Membership", tipoCurso: "Course" },
};

function CTAButton({ p, lang }) {
  const label = tr(p.cta.label, lang);
  if (p.cta.tipo === "comprar") {
    return <Link href={`/comprar?plan=${p.cta.plan}`} style={{ display: "inline-block", background: grad, color: "#06121c", padding: "15px 30px", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: 16 }}>{label}</Link>;
  }
  return <Link href="/#contacto" style={{ display: "inline-block", background: grad, color: "#06121c", padding: "15px 30px", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: 16 }}>{label}</Link>;
}

export default function CursoView({ slug }) {
  const [lang, setLang] = useState("es");
  useEffect(() => { const d=detectLang(); setLang(d); try{document.documentElement.lang=d;}catch(e){} }, []);
  function toggle() { const n = lang === "es" ? "en" : "es"; saveLang(n); setLang(n); try{document.documentElement.lang=n;}catch(e){} }

  const p = getPaquete(slug);
  const t = UI[lang];
  if (!p) {
    return <main style={{ maxWidth: 700, margin: "0 auto", padding: "120px 22px", textAlign: "center" }}><h1>404</h1><p style={{ color: C.mut }}><Link href="/" style={{ color: C.cyan }}>← Home</Link></p></main>;
  }
  const precio = p.precio === "A medida" ? (lang === "en" ? "Custom" : "A medida") : p.precio;
  const tipoLbl = p.tipo === "dfy" ? t.tipoServicio : p.tipo === "consultoria" ? t.tipoConsult : p.tipo === "comunidad" ? t.tipoMembresia : t.tipoCurso;
  const siguiente = getPaquete(p.siguiente);

  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "32px 22px 90px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <Link href="/" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>← KAIRO</Link>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <button onClick={toggle} style={{ background: "none", border: `1px solid ${C.border}`, color: C.mut, borderRadius: 8, padding: "5px 10px", cursor: "pointer", fontSize: 13 }}>{lang === "es" ? "EN" : "ES"}</button>
          <Link href="/cuenta" style={{ color: C.cyan, textDecoration: "none", fontSize: 14 }}>{t.cuenta}</Link>
        </div>
      </div>

      <span style={{ color: C.cyan, fontWeight: 700, letterSpacing: 1, fontSize: 13, textTransform: "uppercase" }}>{tipoLbl} · {tr(p.nivel, lang)}</span>
      <h1 style={{ fontSize: "clamp(30px,5vw,48px)", lineHeight: 1.08, margin: "14px 0 10px" }}>{tr(p.nombre, lang)}</h1>
      <p style={{ fontSize: 20, color: C.text, margin: "0 0 18px" }}>{tr(p.tagline, lang)}</p>
      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginBottom: 26 }}>
        <span style={{ color: C.cyan, fontWeight: 800, fontSize: 34 }}>{precio}</span>
        <span style={{ color: C.mut, fontSize: 14 }}>{tr(p.duracion, lang)}</span>
      </div>
      <CTAButton p={p} lang={lang} />

      <section style={{ marginTop: 44, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 16, color: C.cyan }}>{t.paraQuien}</h3>
          <p style={{ color: C.mut, margin: 0, lineHeight: 1.6 }}>{tr(p.paraQuien, lang)}</p>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 16, color: C.cyan }}>{t.queLlevas}</h3>
          <p style={{ color: C.mut, margin: 0, lineHeight: 1.6 }}>{tr(p.promesa, lang)}</p>
        </div>
      </section>

      <section style={{ marginTop: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 14 }}>{t.deQue}</h2>
        <p style={{ color: "#c7d0dc", lineHeight: 1.8, fontSize: 16.5 }}>{tr(p.textoLargo, lang)}</p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 14 }}>{t.queIncluye}</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {tr(p.incluye, lang).map((it, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: C.text, lineHeight: 1.5 }}><span style={{ color: C.cyan, fontWeight: 800 }}>✓</span><span>{it}</span></li>
          ))}
        </ul>
      </section>

      {p.modulos && (
        <section style={{ marginTop: 44 }}>
          <h2 style={{ fontSize: 24, marginBottom: 6 }}>{p.tipo === "comunidad" ? t.adentro : t.programa}</h2>
          <p style={{ color: C.mut, marginTop: 0, marginBottom: 20, fontSize: 14 }}>{t.escalon}</p>
          <div style={{ display: "grid", gap: 14 }}>
            {p.modulos.map((m) => (
              <div key={m.n} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ color: C.cyan, fontWeight: 800, fontSize: 20 }}>{String(m.n).padStart(2, "0")}</span>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{tr(m.titulo, lang)}</h3>
                </div>
                <ul style={{ color: C.mut, margin: "10px 0 0", paddingLeft: 20, lineHeight: 1.6 }}>
                  {tr(m.lecciones, lang).map((l, i) => <li key={i}>{l}</li>)}
                </ul>
                <p style={{ color: C.cyan, fontSize: 14, margin: "12px 0 0" }}>→ {t.resultadoLbl}: {tr(m.resultado, lang)}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {p.proceso && (
        <section style={{ marginTop: 44 }}>
          <h2 style={{ fontSize: 24, marginBottom: 20 }}>{t.comoTrab}</h2>
          <div style={{ display: "grid", gap: 14 }}>
            {p.proceso.map((s) => (
              <div key={s.paso} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ color: C.cyan, fontWeight: 800, fontSize: 20 }}>{s.paso}</span>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{tr(s.titulo, lang)}</h3>
                </div>
                <p style={{ color: C.mut, margin: "10px 0 0", lineHeight: 1.6 }}>{tr(s.detalle, lang)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={{ marginTop: 44, background: "rgba(55,208,224,0.06)", border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
        <h2 style={{ fontSize: 22, marginTop: 0, marginBottom: 14 }}>{t.cuandoTermines}</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {tr(p.resultados, lang).map((r, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: C.text, fontSize: 16 }}><span style={{ color: C.cyan }}>★</span><span>{r}</span></li>
          ))}
        </ul>
      </section>

      {p.faq && (
        <section style={{ marginTop: 44 }}>
          <h2 style={{ fontSize: 24, marginBottom: 14 }}>{t.preguntas}</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {p.faq.map((f, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 12 }}>
                <p style={{ fontWeight: 700, margin: "0 0 4px" }}>{tr(f.q, lang)}</p>
                <p style={{ color: C.mut, margin: 0, lineHeight: 1.6 }}>{tr(f.a, lang)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={{ marginTop: 44, textAlign: "center" }}>
        <h2 style={{ fontSize: 26, marginBottom: 16 }}>{t.arrancamos}</h2>
        <CTAButton p={p} lang={lang} />
        <p style={{ marginTop: 14 }}><Link href="/login" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>{t.yaCompraste}</Link></p>
      </section>

      {siguiente && (
        <section style={{ marginTop: 40, textAlign: "center" }}>
          <Link href={`/curso/${siguiente.slug}`} style={{ color: C.cyan, textDecoration: "none", fontSize: 14 }}>{t.verTambien} {tr(siguiente.nombre, lang)} →</Link>
        </section>
      )}
    </main>
  );
}
