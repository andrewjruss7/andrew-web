'use client';

import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function Features() {
  const revealRef = useRevealOnScroll();
  const features = [
    {
      title: "Diagnóstico rápido",
      description: "Analizo objetivos, estructura del sitio y métricas iniciales."
    },
    {
      title: "Diseño funcional",
      description: "Wireframe → UI limpia → microinteracciones sutiles (sin ruido)."
    },
    {
      title: "Integraciones reales",
      description: "Formularios conectados a sistemas de email + implementaciones."
    },
    {
      title: "Medición y mejora",
      description: "Performance, accesibilidad y conversiones como parte del entregable."
    }
  ];

  return (
    <section ref={revealRef} id="features" className="features container reveal">
      <h2 className="text-2xl sm:text-3xl m-0 mb-3.5">Cómo trabajo</h2>
      <ul className="steps list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto lg:max-w-none lg:mx-0">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 items-start border border-line rounded-custom p-3 sm:p-4 bg-white">
            <span className="icon-check inline-grid place-items-center w-6 h-6 rounded-md border-2 border-ink font-extrabold flex-shrink-0" aria-hidden="true">
              ✓
            </span>
            <div>
              <h4 className="m-0 mb-1 text-sm sm:text-base font-semibold">{feature.title}</h4>
              <p className="m-0 text-xs sm:text-sm text-[#68707d] font-medium">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
