import { ReactNode } from "react";

export default function Section({ id, title, children }:{ id?: string; title: string; children: ReactNode }) {
  return (
<section id={id} className="container mx-auto px-4 py-16 md:py-24">
  <h2 className="section-title mb-8">{title}</h2>
  {children}
</section>
  )
}
