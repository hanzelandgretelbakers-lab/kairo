export const metadata = {
  title: "KAIRO — IA, automatización y contenido",
  description: "Te ayudo a ahorrar horas y ganar plata automatizando con IA. Bilingüe ES/EN.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "-apple-system,Segoe UI,Roboto,Arial,sans-serif", background: "#0E1116", color: "#EAF0F7" }}>
        {children}
      </body>
    </html>
  );
}
