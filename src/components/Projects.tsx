'use client';

import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const revealRef = useRevealOnScroll();

  return (
    <section ref={revealRef} id="projects" className="projects container reveal">
      <h2 className="text-2xl sm:text-3xl m-0 mb-3.5 font-bold">Proyectos Destacados</h2>
      <p className="sub text-[#68707d] m-0 mb-8 font-medium text-sm sm:text-base">
        Algunos de los proyectos en los que he trabajado, desarrollando soluciones web modernas y escalables.
      </p>
      
      <div className="project-grid grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-4xl mx-auto">
        <div className="project-card">
          <div className="project-preview">
            <iframe
              src="https://sumawealth.com/suma-app-charlie"
              title="Suma Wealth - Charlie Landing"
              className="project-iframe"
              loading="lazy"
            />
            <div className="project-overlay">
              <a 
                href="https://sumawealth.com/suma-app-charlie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={24} />
                Ver proyecto completo
              </a>
            </div>
          </div>
          <div className="project-info">
            <h3 className="font-bold text-xl mb-2">Suma Wealth - Charlie Landing</h3>
            <p className="text-[#68707d] font-medium mb-3">
              Landing page para la presentación de Charlie, el asistente financiero de Suma Wealth. 
              Desarrollé el diseño y la implementación completa de esta página promocional.
            </p>
            <div className="project-tech">
              <span className="tech-tag">WordPress</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-preview">
            <iframe
              src="https://programamos-studio-nafg.vercel.app"
              title="Programamos Studio"
              className="project-iframe"
              loading="lazy"
            />
            <div className="project-overlay">
              <a 
                href="https://programamos-studio-nafg.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={24} />
                Ver proyecto completo
              </a>
            </div>
          </div>
          <div className="project-info">
            <h3 className="font-bold text-xl mb-2">Programamos Studio</h3>
            <p className="text-[#68707d] font-medium mb-3">
              Fábrica de software y escuela de programación en Sincelejo. Landing page completa con servicios, 
              planes de desarrollo y proceso de trabajo. Incluye integración de formularios y diseño responsive.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-preview">
            <iframe
              src="https://programamos-seven.vercel.app"
              title="Programamos Seven"
              className="project-iframe"
              loading="lazy"
            />
            <div className="project-overlay">
              <a 
                href="https://programamos-seven.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={24} />
                Ver proyecto completo
              </a>
            </div>
          </div>
          <div className="project-info">
            <h3 className="font-bold text-xl mb-2">Programamos Seven</h3>
            <p className="text-[#68707d] font-medium mb-3">
              Escuela de programación en Sincelejo. Plataforma web moderna con cursos de Frontend, Backend y Fullstack. 
              Incluye sistema de inscripciones, galería de proyectos y diseño responsive.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-preview">
            <iframe
              src="https://demo-vanessa.vercel.app"
              title="Demo Vanessa - Skate Facilities"
              className="project-iframe"
              loading="lazy"
            />
            <div className="project-overlay">
              <a 
                href="https://demo-vanessa.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={24} />
                Ver proyecto completo
              </a>
            </div>
          </div>
          <div className="project-info">
            <h3 className="font-bold text-xl mb-2">Skate Facilities</h3>
            <p className="text-[#68707d] font-medium mb-3">
              Landing page para instalaciones de patinaje portátiles. Diseño moderno con enfoque en sostenibilidad, 
              materiales reutilizables y instalación rápida. Incluye hero section impactante y sección de características.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
