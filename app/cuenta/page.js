"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
export default function Cuenta() {
  const [user, setUser] = useState(null);
  useEffect(() => { supabase.auth.getUser().then(({ data }) => setUser(data.user)); }, []);
  return (
    <main style={{ maxWidth: 560, margin: "0 auto", padding: "120px 22px", textAlign: "center" }}>
      <h1 style={{ fontSize: 34 }}>Tu cuenta</h1>
      {user ? <p style={{ color: "#9AA7B8" }}>Hola {user.email} 👋 Bienvenido a KAIRO.</p>
            : <p style={{ color: "#9AA7B8" }}>Iniciá sesión para ver tu cuenta. <a href="/login" style={{color:"#37D0E0"}}>Entrar</a></p>}
    </main>
  );
}
