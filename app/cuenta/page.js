"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";
import { PAQUETES } from "../../lib/content";

const C = { card: "#171E27", border: "#243042", mut: "#9AA7B8", cyan: "#37D0E0" };

export default function Cuenta() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => { setUser(data.user); setReady(true); });
  }, []);

  async function salir() { await supabase.auth.signOut(); location.reload(); }
  async function entrar() {
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: (process.env.NEXT_PUBLIC_SITE_URL || window.location.origin) + "/cuenta" } });
  }

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "40px 22px 90px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <Link href="/" style={{ color: C.mut, textDecoration: "none", fontSize: 14 }}>← KAIRO</Link>
        {user && <button onClick={salir} style={{ background: "none", border: `1px solid ${C.border}`, color: C.mut, borderRadius: 10, padding: "8px 14px", cursor: "pointer" }}>Salir</button>}
      </div>

      <h1 style={{ fontSize: 34, marginBottom: 6 }}>Tu cuenta</h1>
      {ready && (user
        ? <p style={{ color: C.mut, marginTop: 0 }}>Hola <strong style={{ color: "#EAF0F7" }}>{user.email}</strong> 👋 Acá vas a ver tus paquetes y acceder a los contenidos.</p>
        : <div style={{ color: C.mut, marginTop: 0 }}>
            <p>Entrá con Google para acceder a tus paquetes.</p>
            <button onClick={entrar} style={{ display: "inline-flex", gap: 10, alignItems: "center", background: "#fff", color: "#111", border: "none", padding: "12px 20px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41.8 35.6 44 30.3 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
              Entrar con Google
            </button>
          </div>)}

      <h2 style={{ fontSize: 20, marginTop: 40, marginBottom: 4 }}>{user ? "Tus accesos" : "Lo que podés desbloquear"}</h2>
      <p style={{ color: C.mut, marginTop: 0, fontSize: 14 }}>{user ? "Cuando conectemos los pagos, tus paquetes comprados aparecen acá habilitados." : "Mirá el detalle de cada paquete y elegí por dónde empezar."}</p>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginTop: 18 }}>
        {PAQUETES.map((p) => (
          <Link key={p.slug} href={`/curso/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ background: C.card, border: `1px solid ${p.destacado ? C.cyan : C.border}`, borderRadius: 16, padding: 20, height: "100%" }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 17 }}>{p.nombre}</h3>
              <div style={{ color: C.cyan, fontWeight: 800, fontSize: 22, margin: "4px 0 8px" }}>{p.precio}</div>
              <p style={{ color: C.mut, margin: 0, fontSize: 14, lineHeight: 1.5 }}>{p.tagline}</p>
              <p style={{ color: C.cyan, fontSize: 14, marginTop: 12, marginBottom: 0 }}>Ver detalle →</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
