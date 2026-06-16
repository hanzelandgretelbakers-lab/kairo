import Link from "next/link";
import { PAQUETES, getPaquete } from "../../../lib/content";

export function generateStaticParams() {
  return PAQUETES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPaquete(params.slug);
  if (!p) return { title: "KAIRO" };
  return { title: `${p.nombre} — KAIRO`, description: p.tagline };
}

const C = { bg: "#0E1116", card: "#171E27", border: "#243042", text: "#EAF0F7", mut: "#9AA7B8", cyan: "#37D0E0" };
const grad = "linear-gradient(100deg,#2E75B6,#37D0E0)";

function Pill({ children }) {
  return <span style={{ display: "inline-block", fontSize: 13, color: C.cyan, border: `1px solid ${C.border}`, borderRadius: 999, padding: "5px 12px", marginRight: 8, marginTop: 8 }}>{children}</span>;
}

export default function CursoPage({ params }) {
  const p = getPaquete(params.slug);
  if (!p) {
    return (
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "120px 22px", textAlign: "center" }}>
        <h1>No encontramos ese paquete</h1>
        <p style={{ color: C.mut }}><Link href="/" style={{ color: C.cyan }}>← Volver al inicio</Link></p>
      </main>
    );
  }
  const esCurso = p.tipo === "curso" || p.tipo === "comunidad";
  const siguiente = getPaquete(p.siguiente);

  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "32px 22px 90px" }}>
      {/* nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <Link href="/" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>← KAIRO</Link>
        <Link href="/cuenta" style={{ color: C.cyan, textDecoration: "none", fontSize: 14 }}>Mi cuenta</Link>
      </div>

      {/* hero */}
      <span style={{ color: C.cyan, fontWeight: 700, letterSpacing: 1, fontSize: 13, textTransform: "uppercase" }}>{p.tipo === "dfy" ? "Servicio" : p.tipo === "consultoria" ? "Consultoría 1-a-1" : p.tipo === "comunidad" ? "Membresía" : "Curso"} · {p.nivel}</span>
      <h1 style={{ fontSize: "clamp(30px,5vw,48px)", lineHeight: 1.08, margin: "14px 0 10px" }}>{p.nombre}</h1>
      <p style={{ fontSize: 20, color: C.text, margin: "0 0 18px" }}>{p.tagline}</p>
      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginBottom: 26 }}>
        <span style={{ color: C.cyan, fontWeight: 800, fontSize: 34 }}>{p.precio}</span>
        <span style={{ color: C.mut, fontSize: 14 }}>{p.duracion}</span>
      </div>
      <CTAButton p={p} />

      {/* para quién + promesa */}
      <section style={{ marginTop: 44, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 16, color: C.cyan }}>¿Para quién es?</h3>
          <p style={{ color: C.mut, margin: 0, lineHeight: 1.6 }}>{p.paraQuien}</p>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 16, color: C.cyan }}>Qué te llevás</h3>
          <p style={{ color: C.mut, margin: 0, lineHeight: 1.6 }}>{p.promesa}</p>
        </div>
      </section>

      {/* texto largo */}
      <section style={{ marginTop: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 14 }}>De qué se trata</h2>
        <p style={{ color: "#c7d0dc", lineHeight: 1.8, fontSize: 16.5 }}>{p.textoLargo}</p>
      </section>

      {/* incluye */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 14 }}>Qué incluye</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {p.incluye.map((it, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: C.text, lineHeight: 1.5 }}>
              <span style={{ color: C.cyan, fontWeight: 800 }}>✓</span><span>{it}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* modulos o proceso */}
      {p.modulos && (
        <section style={{ marginTop: 44 }}>
          <h2 style={{ fontSize: 24, marginBottom: 6 }}>{p.tipo === "comunidad" ? "Qué hay adentro" : "El programa, paso a paso"}</h2>
          <p style={{ color: C.mut, marginTop: 0, marginBottom: 20, fontSize: 14 }}>Cada módulo es un escalón de tu transformación.</p>
          <div style={{ display: "grid", gap: 14 }}>
            {p.modulos.map((m) => (
              <div key={m.n} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ color: C.cyan, fontWeight: 800, fontSize: 20 }}>{String(m.n).padStart(2, "0")}</span>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{m.titulo}</h3>
                </div>
                <ul style={{ color: C.mut, margin: "10px 0 0", paddingLeft: 20, lineHeight: 1.6 }}>
                  {m.lecciones.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
                <p style={{ color: C.cyan, fontSize: 14, margin: "12px 0 0" }}>→ {m.resultado}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {p.proceso && (
        <section style={{ marginTop: 44 }}>
          <h2 style={{ fontSize: 24, marginBottom: 20 }}>Cómo trabajamos</h2>
          <div style={{ display: "grid", gap: 14 }}>
            {p.proceso.map((s) => (
              <div key={s.paso} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 22 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ color: C.cyan, fontWeight: 800, fontSize: 20 }}>{s.paso}</span>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{s.titulo}</h3>
                </div>
                <p style={{ color: C.mut, margin: "10px 0 0", lineHeight: 1.6 }}>{s.detalle}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* resultados */}
      <section style={{ marginTop: 44, background: "rgba(55,208,224,0.06)", border: `1px solid ${C.border}`, borderRadius: 18, padding: 26 }}>
        <h2 style={{ fontSize: 22, marginTop: 0, marginBottom: 14 }}>Cuando termines, vas a tener</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {p.resultados.map((r, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: C.text, fontSize: 16 }}>
              <span style={{ color: C.cyan }}>★</span><span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* faq */}
      {p.faq && (
        <section style={{ marginTop: 44 }}>
          <h2 style={{ fontSize: 24, marginBottom: 14 }}>Preguntas</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {p.faq.map((f, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 12 }}>
                <p style={{ fontWeight: 700, margin: "0 0 4px" }}>{f.q}</p>
                <p style={{ color: C.mut, margin: 0, lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA final */}
      <section style={{ marginTop: 44, textAlign: "center" }}>
        <h2 style={{ fontSize: 26, marginBottom: 16 }}>¿Arrancamos?</h2>
        <CTAButton p={p} />
        <p style={{ marginTop: 14 }}>
          <Link href="/login" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>¿Ya compraste? Entrá con Google →</Link>
        </p>
      </section>

      {/* siguiente */}
      {siguiente && (
        <section style={{ marginTop: 40, textAlign: "center" }}>
          <Link href={`/curso/${siguiente.slug}`} style={{ color: C.cyan, textDecoration: "none", fontSize: 14 }}>
            Ver también: {siguiente.nombre} →
          </Link>
        </section>
      )}
    </main>
  );
}

function CTAButton({ p }) {
  const grad = "linear-gradient(100deg,#2E75B6,#37D0E0)";
  if (p.cta.tipo === "comprar") {
    return (
      <Link href={`/comprar?plan=${p.cta.plan}`} style={{ display: "inline-block", background: grad, color: "#06121c", padding: "15px 30px", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: 16 }}>
        {p.cta.label}
      </Link>
    );
  }
  return (
    <Link href="/#contacto" style={{ display: "inline-block", background: grad, color: "#06121c", padding: "15px 30px", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: 16 }}>
      {p.cta.label}
    </Link>
  );
}
