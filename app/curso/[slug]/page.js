import { PAQUETES, getPaquete, tr } from "../../../lib/content";
import CursoView from "./CursoView";

export function generateStaticParams() {
  return PAQUETES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPaquete(params.slug);
  if (!p) return { title: "KAIRO" };
  return { title: `${tr(p.nombre, "es")} — KAIRO`, description: tr(p.tagline, "es") };
}

export default function Page({ params }) {
  return <CursoView slug={params.slug} />;
}
