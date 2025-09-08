'use client';

import { useFadeInUp, useScaleIn } from '@/hooks/useScrollAnimation';

export default function Plans() {
  const titleRef = useFadeInUp();
  const cardsRef = useScaleIn();
  const plans = [
    {
      title: "Landing Page",
      price: "Desde 250 USD",
      features: [
        "Página única con hero y secciones personalizadas",
        "Diseño responsive (móvil, tablet, desktop)",
        "Construida con HTML, CSS, JavaScript, React y Next.js",
        "SEO básico optimizado",
        "Entrega en GitHub con código limpio",
        "Diseño personalizado en Figma (opcional)"
      ],
      buttonText: "Quiero mi landing",
      whatsappMessage: "Hola Andrew! Me interesa el servicio de Landing Page. ¿Podemos hablar sobre mi proyecto?",
      featured: true
    },
    {
      title: "Soporte Mensual",
      price: "Desde 99 USD/mes",
      features: [
        "2 actualizaciones por semana incluidas",
        "Soporte ante cualquier bug o error",
        "Respuesta en máximo 24 horas",
        "Mantenimiento preventivo",
        "No incluye nuevas funcionalidades",
        "Perfecto para páginas existentes"
      ],
      buttonText: "Contratar soporte",
      whatsappMessage: "Hola Andrew! Me interesa el servicio de Soporte Mensual. ¿Podemos hablar sobre el mantenimiento de mi página?",
      featured: false
    },
    {
      title: "Soporte Específico",
      price: "Desde 20 USD",
      features: [
        "Revisión completa de tu sitio web",
        "Renovación de hosting y dominio",
        "Corrección de bugs y errores",
        "Soporte general a tu página",
        "Optimización de performance",
        "Pago único por servicio"
      ],
      buttonText: "Necesito ayuda",
      whatsappMessage: "Hola Andrew! Necesito ayuda con mi sitio web. ¿Podemos hablar sobre el servicio de Soporte Específico?",
      featured: false
    }
  ];

  return (
    <section id="plans" className="plans container">
      <h2 
        ref={titleRef.ref} 
        className={`text-2xl sm:text-3xl m-0 mb-8 font-bold fade-in-up ${titleRef.isVisible ? 'animate' : ''}`}
      >
        Servicios
      </h2>
      <div 
        ref={cardsRef.ref} 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scale-in ${cardsRef.isVisible ? 'animate' : ''}`}
      >
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`service-card bg-soft rounded-2xl p-6 border-2 border-line hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col fade-in-up stagger-${index + 1} ${cardsRef.isVisible ? 'animate' : ''}`}
          >
            {/* Título */}
            <h3 className="text-2xl font-bold text-ink mb-6 text-center">
              {plan.title}
            </h3>
            
            {/* Lista de características */}
            <ul className="space-y-3 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <span className="text-ink font-bold text-lg mt-0.5">•</span>
                  <span className="text-muted font-medium leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Precio y Botón al final */}
            <div className="mt-auto">
              {/* Precio */}
              <div className="text-center mb-6">
                <p className="text-2xl font-bold text-ink">
                  {plan.price}
                </p>
              </div>
              
              {/* Botón */}
              <a 
                href={`https://wa.me/573152802343?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full"
              >
                {plan.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
