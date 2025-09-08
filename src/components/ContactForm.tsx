'use client';

import { useState } from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { emailService, ContactFormData } from '@/services/emailService';

export default function ContactForm() {
  const revealRef = useRevealOnScroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayload, setShowPayload] = useState(false);
  const [payload, setPayload] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando email con plan Starter...');
    setIsSubmitting(true);

    const data: ContactFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim()
    };

    try {
      // Enviar email con EmailJS (funciona)
      const result = await emailService.processContactForm(data);
      
      if (result.success) {
        setStatus(result.message);
        setShowPayload(false); // Ocultar el payload técnico
        
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          message: '',
          consent: false
        });
      } else {
        setStatus(result.message);
      }
    } catch (error) {
      console.error('Error en el formulario:', error);
      setStatus('Error al enviar el email. Por favor, inténtalo de nuevo.');
    }

    setIsSubmitting(false);
  };

  return (
    <section ref={revealRef} id="form" className="form-section container reveal">
      <h2 className="text-2xl sm:text-3xl m-0 mb-3.5 font-bold">Demo: Integración de Email Automático</h2>
      <p className="sub text-[#68707d] m-0 mb-3 font-medium text-sm sm:text-base">Esta es una demostración de cómo funciona la integración de email automático en las páginas web que desarrollo. Completa el formulario y verás cómo tus clientes recibirán emails automáticamente.</p>
      
      <form onSubmit={handleSubmit} className="form grid grid-cols-1 md:grid-cols-2 gap-3.5 border border-line rounded-2xl p-4 md:p-4.5 bg-soft">
        <div className="field flex flex-col gap-1.5">
          <label htmlFor="name" className="font-semibold">Nombre</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Tu nombre" 
            required 
            value={formData.name}
            onChange={handleInputChange}
            className="border border-line rounded-xl py-3 px-3.5 font-inherit outline-0 bg-soft"
          />
        </div>
        <div className="field flex flex-col gap-1.5">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="tucorreo@ejemplo.com" 
            required 
            value={formData.email}
            onChange={handleInputChange}
            className="border border-line rounded-xl py-3 px-3.5 font-inherit outline-0 bg-soft"
          />
        </div>
        <div className="field flex flex-col gap-1.5">
          <label htmlFor="message" className="font-semibold">Mensaje</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            placeholder="Cuéntame brevemente tu proyecto"
            value={formData.message}
            onChange={handleInputChange}
            className="border border-line rounded-xl py-3 px-3.5 font-inherit outline-0 bg-soft"
          />
        </div>
        <div className="field check flex flex-row items-center gap-2">
          <input 
            id="consent" 
            name="consent" 
            type="checkbox" 
            required 
            checked={formData.consent}
            onChange={handleInputChange}
          />
          <label htmlFor="consent">Acepto recibir la demo del email automático</label>
        </div>
        <button 
          className="btn" 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Probar demo de email'}
        </button>
        <p className="status mt-1.5 text-[#68707d] font-medium" role="status" aria-live="polite">{status}</p>
      </form>

      {showPayload && (
        <div className="payload border border-dashed border-line rounded-custom p-3.5 bg-soft mt-3">
          <div className="payload-header flex gap-2 items-center mb-2">
            <strong>✅ Demo de email automático funcionando</strong>
            <span className="tag border border-line rounded-full py-1 px-2 text-xs text-[#68707d] font-medium">EmailJS</span>
            <span className="tag border border-line rounded-full py-1 px-2 text-xs text-[#68707d] font-medium">Integración</span>
          </div>
          <pre className="code m-0 p-3 bg-slate-900 text-slate-100 rounded-lg overflow-auto">
            {payload}
          </pre>
        </div>
      )}
    </section>
  );
}
