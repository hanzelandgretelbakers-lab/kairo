"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";
import { PAQUETES, tr } from "../../lib/content";
import { detectLang, saveLang } from "../../lib/lang";

const C = { card: "#171E27", border: "#243042", mut: "#9AA7B8", cyan: "#37D0E0" };

const UI = {
  es: { title: "Tu cuenta", hola: "Hola", bienv: "Acá vas a ver tus paquetes y acceder a los contenidos.", entraGoogle: "Entrá con Google para acceder a tus paquetes.", btnGoogle: "Entrar con Google", salir: "Salir", tusAccesos: "Tus accesos", desbloquear: "Lo que podés desbloquear", subAcc: "Cuando conectemos los pagos, tus paquetes comprados aparecen acá habilitados.", subDes: "Mirá el detalle de cada paquete y elegí por dónde empezar.", verDetalle: "Ver detalle →" },
  en: { title: "Your account", hola: "Hi", bienv: "Here you'll see your packages and access the content.", entraGoogle: "Sign in with Google to access your packages.", btnGoogle: "Sign in with Google", salir: "Sign out", tusAccesos: "Your access", desbloquear: "What you can unlock", subAcc: "Once payments are connected, your purchased packages show up here, unlocked.", subDes: "Check the details of each package and pick where to start.", verDetalle: "View details →" },
};

export default function Cuenta() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState("es");
  useEffect(() => {
    const d=detectLang(); setLang(d); try{document.documentElement.lang=d;}catch(e){}
    supabase.auth.getUser().then(({ data }) => { setUser(data.user); setReady(true); });
  }, []);
  const t = UI[lang];
  function toggle() { const n = lang === "es" ? "en" : "es"; saveLang(n); setLang(n); try{document.documentElement.lang=n;}catch(e){} }
  async function salir() { await supabase.auth.signOut(); location.reload(); }
  async function entrar() {
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: (process.env.NEXT_PUBLIC_SITE_URL || window.location.origin) + "/cuenta" } });
  }

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "40px 22px 90px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <Link href="/" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>← KAIRO</Link>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={toggle} style={{ background: "none", border: `1px solid ${C.border}`, color: C.mut, borderRadius: 8, padding: "5px 10px", cursor: "pointer", fontSize: 13 }}>{lang === "es" ? "EN" : "ES"}</button>
          {user && <button onClick={salir} style={{ background: "none", border: `1px solid ${C.border}`, color: C.mut, borderRadius: 10, padding: "8px 14px", cursor: "pointer" }}>{t.salir}</button>}
        </div>
      </div>

      <h1 style={{ fontSize: 34, marginBottom: 6 }}>{t.title}</h1>
      {ready && (user
        ? <p style={{ color: C.mut, marginTop: 0 }}>{t.hola} <strong style={{ color: "#EAF0F7" }}>{user.email}</strong> 👋 {t.bienv}</p>
        : <div style={{ color: C.mut, marginTop: 0 }}>
            <p>{t.entraGoogle}</p>
            <button onClick={entrar} style={{ display: "inline-flex", gap: 10, alignItems: "center", background: "#fff", color: "#111", border: "none", padding: "12px 20px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41.8 35.6 44 30.3 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
              {t.btnGoogle}
            </button>
          </div>)}

      <h2 style={{ fontSize: 20, marginTop: 40, marginBottom: 4 }}>{user ? t.tusAccesos : t.desbloquear}</h2>
      <p style={{ color: C.mut, marginTop: 0, fontSize: 14 }}>{user ? t.subAcc : t.subDes}</p>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginTop: 18 }}>
        {PAQUETES.map((p) => {
          const precio = p.precio === "A medida" ? (lang === "en" ? "Custom" : "A medida") : p.precio;
          return (
            <Link key={p.slug} href={`/curso/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ background: C.card, border: `1px solid ${p.destacado ? C.cyan : C.border}`, borderRadius: 16, padding: 20, height: "100%" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: 17 }}>{tr(p.nombre, lang)}</h3>
                <div style={{ color: C.cyan, fontWeight: 800, fontSize: 22, margin: "4px 0 8px" }}>{precio}</div>
                <p style={{ color: C.mut, margin: 0, fontSize: 14, lineHeight: 1.5 }}>{tr(p.tagline, lang)}</p>
                <p style={{ color: C.cyan, fontSize: 14, marginTop: 12, marginBottom: 0 }}>{t.verDetalle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
