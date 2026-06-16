"use client";
// Detección de idioma del visitante: elección guardada > idioma del navegador.
// Español para locales 'es*', inglés para el resto.
export function detectLang() {
  if (typeof window === "undefined") return "es";
  try {
    const s = localStorage.getItem("kairo_lang");
    if (s === "es" || s === "en") return s;
  } catch (e) {}
  const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || "en"];
  for (let i = 0; i < langs.length; i++) {
    const L = (langs[i] || "").toLowerCase();
    if (L.indexOf("es") === 0) return "es";
    if (L.indexOf("en") === 0) return "en";
  }
  return "en";
}
export function saveLang(l) {
  try { localStorage.setItem("kairo_lang", l); } catch (e) {}
}
