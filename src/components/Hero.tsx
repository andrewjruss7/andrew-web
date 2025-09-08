'use client';

import { Code, Globe, Zap } from 'lucide-react';
import { useFadeInUp, useSlideInRight } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const textRef = useFadeInUp();
  const photoRef = useSlideInRight();
  
  return (
    <section id="hero" className="hero container">
      <div className="hero-content flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        <div 
          ref={textRef.ref} 
          className={`hero-text flex-1 fade-in-up ${textRef.isVisible ? 'animate' : ''}`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight m-0 mb-4 tracking-tight font-black">Web Developer</h1>
          <p className="text-[#68707d] text-base sm:text-lg m-0 mb-6 font-medium">
            Diseño y desarrollo <strong>landing pages</strong> modernas con <strong>integraciones reales</strong>:
            formularios conectados a sistemas de email, implementaciones, animaciones sutiles y enfoque en performance.
          </p>
          <div className="hero-cta flex gap-3 flex-wrap mb-6">
            <a className="btn" href="#form">
              Quiero una demo
            </a>
            <a className="btn" href="#plans">
              Ver planes
            </a>
          </div>
          <ul className="badges flex flex-wrap gap-3 sm:gap-3.5 list-none p-0 m-0 text-[#68707d] text-sm font-medium" aria-label="Habilidades clave">
            <li title="HTML/CSS/JS" className="flex items-center">
              <Code className="w-4.5 h-4.5 mr-1.5" />
              HTML • CSS • JS
            </li>
            <li title="WordPress" className="flex items-center">
              <Globe className="w-4.5 h-4.5 mr-1.5" />
              WordPress
            </li>
            <li title="Integraciones" className="flex items-center">
              <Zap className="w-4.5 h-4.5 mr-1.5" />
              Integraciones
            </li>
          </ul>
        </div>
        <div 
          ref={photoRef.ref} 
          className={`hero-photo flex-shrink-0 w-full max-w-[400px] lg:max-w-[500px] mx-auto lg:mx-0 aspect-[191/100] overflow-hidden rounded-custom shadow-custom slide-in-right ${photoRef.isVisible ? 'animate' : ''}`}
        >
          <img 
            src="/andrew.jpg" 
            alt="Foto de Andrew" 
            className="block w-full h-full object-cover object-[50%_60%]"
          />
        </div>
      </div>
    </section>
  );
}
