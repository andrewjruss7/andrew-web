import emailjs from '@emailjs/browser';
import { createPlanStarterTemplate, createNotificationTemplate } from '@/utils/emailTemplates';

// Configuración de EmailJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export interface ContactFormData {
  name: string;
  email: string;
  message?: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
}

export class EmailService {
  private static instance: EmailService;
  
  private constructor() {
    // Inicializar EmailJS
    if (typeof window !== 'undefined') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }
  
  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }
  
  /**
   * Envía el email con el plan Starter al cliente
   */
  public async sendPlanStarterEmail(userData: ContactFormData): Promise<EmailResult> {
    try {
      // Debug: Log de las variables de entorno
      console.log('EmailJS Config Debug:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY ? 'Presente' : 'Ausente'
      });
      
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS no está configurado correctamente');
      }
      
      // Preparar los datos para EmailJS con template simple
      const templateParams = {
        to_name: userData.name,
        to_email: userData.email,
        subject: 'Prueba de EmailJS - Andrew',
        message: userData.message || 'Mensaje de prueba',
        user_name: userData.name,
        user_email: userData.email,
        user_message: userData.message || ''
      };
      
      // Enviar el email
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log('Email enviado exitosamente:', result);
      
      return {
        success: true,
        message: 'Email enviado exitosamente'
      };
      
    } catch (error) {
      console.error('Error enviando email:', error);
      return {
        success: false,
        message: 'Error al enviar el email. Por favor, inténtalo de nuevo.'
      };
    }
  }
  
  /**
   * Envía notificación al administrador (opcional)
   */
  public async sendNotificationEmail(userData: ContactFormData): Promise<EmailResult> {
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS no está configurado correctamente');
      }
      
      // Crear el template de notificación
      const template = createNotificationTemplate(userData);
      
      // Preparar los datos para EmailJS
      const templateParams = {
        to_email: 'andrewjruss7@gmail.com',
        to_name: 'Andrew',
        subject: template.subject,
        message: template.html,
        from_name: userData.name,
        from_email: userData.email
      };
      
      // Enviar el email
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log('Notificación enviada exitosamente:', result);
      
      return {
        success: true,
        message: 'Notificación enviada'
      };
      
    } catch (error) {
      console.error('Error enviando notificación:', error);
      return {
        success: false,
        message: 'Error al enviar notificación'
      };
    }
  }
  
  /**
   * Procesa el formulario completo: envía email al cliente y notificación al admin
   */
  public async processContactForm(userData: ContactFormData): Promise<EmailResult> {
    try {
      // Enviar email al cliente
      const clientResult = await this.sendPlanStarterEmail(userData);
      
      if (!clientResult.success) {
        return clientResult;
      }
      
      // Enviar notificación al admin (opcional)
      await this.sendNotificationEmail(userData);
      
      return {
        success: true,
        message: '¡Perfecto! Revisa tu email, te hemos enviado toda la información del plan Starter.'
      };
      
    } catch (error) {
      console.error('Error procesando formulario:', error);
      return {
        success: false,
        message: 'Error al procesar el formulario. Por favor, inténtalo de nuevo.'
      };
    }
  }
}

// Exportar instancia singleton
export const emailService = EmailService.getInstance();
