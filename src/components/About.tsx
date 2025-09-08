'use client';

import { useFadeInUp, useSlideInLeft } from '@/hooks/useScrollAnimation';

export default function About() {
  const photoRef = useSlideInLeft();
  const textRef = useFadeInUp();
  
  const features = [
    {
      title: "Aterrizar requerimientos",
      description: "Definimos objetivos, funcionalidades y alcance del proyecto de manera clara y detallada."
    },
    {
      title: "Diseño con UI/UX",
      description: "Trabajo colaborativo con diseñadora para crear wireframes, prototipos y diseño final."
    },
    {
      title: "Desarrollo y construcción",
      description: "Construcción del sitio web con las mejores prácticas, código limpio y responsive."
    },
    {
      title: "Entrega y despliegue",
      description: "Deploy, soporte técnico y seguimiento para asegurar el funcionamiento óptimo."
    }
  ];

  return (
    <section id="about" className="about container">
      <div className="about-main flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-12 w-full">
        <div 
          ref={photoRef.ref} 
          className={`about-photo hidden lg:block slide-in-left ${photoRef.isVisible ? 'animate' : ''}`}
        >
          <div className="photo-frame">
            <img 
              src="/andrew-2.jpg" 
              alt="Andrew trabajando en desarrollo web" 
              className="block w-full h-full object-cover object-[50%_15%]"
            />
          </div>
        </div>
        
        <div 
          ref={textRef.ref} 
          className={`flex-1 w-full fade-in-up ${textRef.isVisible ? 'animate' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl m-0 mb-3.5 font-black">Quién soy</h2>
          <p className="text-[#68707d] text-base sm:text-lg mb-6 font-medium">
            Soy Andrew, desarrollador web con <strong>+7 años de experiencia</strong> en diseño, animaciones con After Effects y asegurador de calidad de software, actualmente enfocado en <strong>desarrollo frontend</strong>.
          </p>
          <p className="text-[#68707d] text-base sm:text-lg mb-6 font-medium">
            He trabajado en empresas de tecnología nacionales como <strong>Merqueo</strong>, <strong>Tangelo</strong>, <strong>Simetrik</strong> e internacionales como <strong>Suma Wealth (Los Angeles)</strong>, donde he participado en la calidad de desarrollo de plataformas web, apps mobile y APIs.
          </p>
          <p className="text-[#68707d] text-base sm:text-lg mb-6 font-medium">
            Ahora construyendo sitios web que tienen formularios, integraciones, blogs, etc. que construyo con <strong>animaciones limpias, modernas, escalables</strong> y desde 0 guiado por <strong>Figma</strong>.
          </p>
          
          <h3 className="text-xl sm:text-2xl m-0 mb-4 font-bold">Cómo trabajo</h3>
          <ul className="steps list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className={`flex gap-3 sm:gap-4 items-start border border-line rounded-custom p-3 sm:p-4 bg-white fade-in-up stagger-${index + 1} ${textRef.isVisible ? 'animate' : ''}`}
              >
                <span className="icon-check inline-grid place-items-center w-6 h-6 sm:w-7 sm:h-7 rounded-lg border-2 border-ink font-extrabold flex-shrink-0" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h4 className="m-0 mb-1 font-semibold text-sm sm:text-base">{feature.title}</h4>
                  <p className="m-0 text-xs sm:text-sm text-[#68707d] font-medium">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
