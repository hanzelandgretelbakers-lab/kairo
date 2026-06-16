"use client";
import { supabase } from "../../lib/supabaseClient";
export default function Login() {
  async function google() {
    const site = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: site + "/cuenta" } });
  }
  return (
    <main style={{ maxWidth: 460, margin: "0 auto", padding: "120px 22px", textAlign: "center" }}>
      <h1 style={{ fontSize: 34, marginBottom: 10 }}>Entrá a KAIRO</h1>
      <p style={{ color: "#9AA7B8", marginBottom: 30 }}>Accedé con tu cuenta de Google.</p>
      <button onClick={google} style={{ display: "inline-flex", gap: 10, alignItems: "center", background: "#fff", color: "#111", border: "none", padding: "14px 24px", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontSize: 16 }}>
        <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41.8 35.6 44 30.3 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
        Continuar con Google
      </button>
    </main>
  );
}
