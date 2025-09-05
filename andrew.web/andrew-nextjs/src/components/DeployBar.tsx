'use client';

import { useEffect, useState } from 'react';

export default function DeployBar() {
  const [deployTime, setDeployTime] = useState<string>('—');

  useEffect(() => {
    setDeployTime('Disponible para proyectos freelance ahora');
  }, []);

  return (
    <div className="deploy-bar relative py-2 px-3 border-b border-line bg-soft text-sm text-muted overflow-hidden" aria-live="polite">
      <div className="flex gap-2.5 items-center animate-scroll whitespace-nowrap">
        <div className="availability-indicator">
          <span className="availability-dot" aria-hidden="true"></span>
        </div>
        <span>Disponible ahora</span>
        <span className="deploy-sep opacity-50">•</span>
        <span id="deployText">{deployTime}</span>
        <span className="deploy-sep opacity-50">•</span>
        <span>Puedes realizar tu cotización completamente gratis</span>
        <span className="deploy-sep opacity-50">•</span>
        <a href="https://wa.me/573152802343?text=Hola%20Andrew%2C%20quiero%20una%20landing%20con%20integraciones%20y%20deploy%20en%20Vercel." target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">Escribeme y hablemos por WhatsApp sobre tu proyecto</a>
        <span className="deploy-sep opacity-50">•</span>
        <span>Estoy trabajando justo ahora, escribeme y hablemos por WhatsApp sobre tu proyecto</span>
        <span className="deploy-sep opacity-50">•</span>
        <span>Puedes realizar tu cotización completamente gratis</span>
        <span className="deploy-sep opacity-50">•</span>
        <a href="https://wa.me/573152802343?text=Hola%20Andrew%2C%20quiero%20una%20landing%20con%20integraciones%20y%20deploy%20en%20Vercel." target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">Escribeme y hablemos por WhatsApp sobre tu proyecto</a>
        <span className="deploy-sep opacity-50">•</span>
        <span>Disponible ahora</span>
        <span className="deploy-sep opacity-50">•</span>
        <span>Estoy trabajando justo ahora, escribeme y hablemos por WhatsApp sobre tu proyecto</span>
        <span className="deploy-sep opacity-50">•</span>
        <span>Puedes realizar tu cotización completamente gratis</span>
        <span className="deploy-sep opacity-50">•</span>
        <a href="https://wa.me/573152802343?text=Hola%20Andrew%2C%20quiero%20una%20landing%20con%20integraciones%20y%20deploy%20en%20Vercel." target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">Escribeme y hablemos por WhatsApp sobre tu proyecto</a>
      </div>
    </div>
  );
}

