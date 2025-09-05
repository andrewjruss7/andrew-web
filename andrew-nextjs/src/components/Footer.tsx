'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Función para generar URL de Google Calendar con fechas
  const generateCalendarUrl = () => {
    const start = new Date();
    const end = new Date(start.getTime() + 30 * 60 * 1000); // +30 minutos
    const formatDate = (date: Date) => 
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const baseUrl = "https://calendar.google.com/calendar/u/0/r/eventedit?text=Reunión%20con%20Andrew%20—%20Web%20Developer&details=Hablemos%20de%20tu%20proyecto%20web%20y%20cómo%20puedo%20ayudarte%20a%20construirlo.&location=Google%20Meet&add=andrewjruss7@gmail.com&dates=";
    return `${baseUrl}${formatDate(start)}/${formatDate(end)}`;
  };

  return (
    <footer className="site-footer py-12 bg-black text-white mt-10">
      <div className="container">
        {/* Sección de contacto distribuida */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="m-0 mb-3 font-bold text-white text-xl">Agenda una reunión</h4>
              <p className="m-0 mb-4 text-gray-300">Abre un evento en Google Calendar pre-cargado:</p>
              <a 
                className="btn"
                href={generateCalendarUrl()}
                target="_blank" 
                rel="noopener"
              >
                Agendar en Google Calendar
              </a>
            </div>

            <div className="text-center">
              <h4 className="m-0 mb-3 font-bold text-white text-xl">WhatsApp</h4>
              <p className="m-0 mb-4 text-gray-300">Conversemos por WhatsApp ahora:</p>
              <a 
                className="btn"
                href="https://wa.me/573152802343?text=Hola%20Andrew%2C%20quiero%20hablar%20contigo%20de%20un%20proyecto!"
                target="_blank" 
                rel="noopener"
              >
                Escríbeme
              </a>
            </div>
          </div>
        </div>

        {/* Footer meta en una línea */}
        <div className="footer-meta border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-base">🇨🇴</span>
              <span>Trabajando desde Sincelejo, Colombia para el mundo, © {currentYear} Andrew — Web Developer</span>
            </div>
            <a href="#hero" className="top-link no-underline text-gray-400 hover:text-white font-medium transition-colors">
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

