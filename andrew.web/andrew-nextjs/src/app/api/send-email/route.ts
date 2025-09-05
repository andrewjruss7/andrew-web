import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validar datos
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Nombre y email son requeridos' },
        { status: 400 }
      );
    }

    // Crear template HTML para el plan Starter
    const emailHtml = `
      <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
        <!-- Header con foto -->
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="width: 80px; height: 80px; border-radius: 50%; overflow: hidden; margin: 0 auto 15px auto; border: 3px solid #eceff3;">
            <img src="https://i.imgur.com/placeholder.jpg" alt="Andrew" style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 30%;">
          </div>
          <h1 style="color: #0e1116; font-size: 28px; font-weight: 800; margin: 0;">Andrew</h1>
          <p style="color: #68707d; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">Web Developer</p>
        </div>

        <!-- Saludo personalizado -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #0e1116; font-size: 24px; font-weight: 600; margin: 0 0 15px 0;">Hola ${name},</h2>
          <p style="color: #68707d; font-size: 16px; line-height: 1.6; margin: 0;">
            Gracias por tu interés en construir tu página web conmigo. Me emociona la posibilidad de trabajar contigo.
          </p>
        </div>

        <!-- Plan Starter -->
        <div style="background: #f6f8fb; padding: 30px; border-radius: 22px; margin: 30px 0; border: 1px solid #eceff3; box-shadow: 0 8px 28px rgba(0,0,0,.08);">
          <div style="text-align: center; margin-bottom: 25px;">
            <h3 style="color: #0e1116; font-size: 24px; font-weight: 800; margin: 0 0 15px 0;">🚀 PLAN STARTER</h3>
            <div style="background: #0e1116; color: #ffffff; padding: 12px 24px; border-radius: 25px; display: inline-block; font-weight: 600; font-size: 18px;">
              $250 USD
            </div>
          </div>
          
          <h4 style="color: #0e1116; font-size: 18px; font-weight: 600; margin: 25px 0 15px 0;">¿Qué incluye?</h4>
          <ul style="color: #68707d; font-size: 16px; line-height: 1.7; margin: 0; padding-left: 0; list-style: none;">
            <li style="margin-bottom: 12px; padding-left: 25px; position: relative;">
              <span style="position: absolute; left: 0; color: #0e1116; font-weight: 600;">✓</span>
              Página única con hero y secciones personalizadas
            </li>
            <li style="margin-bottom: 12px; padding-left: 25px; position: relative;">
              <span style="position: absolute; left: 0; color: #0e1116; font-weight: 600;">✓</span>
              Diseño responsive (móvil, tablet, desktop)
            </li>
            <li style="margin-bottom: 12px; padding-left: 25px; position: relative;">
              <span style="position: absolute; left: 0; color: #0e1116; font-weight: 600;">✓</span>
              SEO básico optimizado
            </li>
            <li style="margin-bottom: 12px; padding-left: 25px; position: relative;">
              <span style="position: absolute; left: 0; color: #0e1116; font-weight: 600;">✓</span>
              Entrega en GitHub con código limpio
            </li>
            <li style="margin-bottom: 12px; padding-left: 25px; position: relative;">
              <span style="position: absolute; left: 0; color: #0e1116; font-weight: 600;">✓</span>
              Soporte técnico por 30 días
            </li>
            <li style="margin-bottom: 12px; padding-left: 25px; position: relative;">
              <span style="position: absolute; left: 0; color: #0e1116; font-weight: 600;">✓</span>
              2 revisiones incluidas
            </li>
          </ul>
        </div>

        <!-- Próximos pasos -->
        <div style="margin: 30px 0;">
          <h3 style="color: #0e1116; font-size: 20px; font-weight: 600; margin: 0 0 15px 0;">📋 Próximos pasos</h3>
          <ol style="color: #68707d; font-size: 15px; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>Agendar reunión:</strong> 15 minutos para conocer tus objetivos</li>
            <li style="margin-bottom: 10px;"><strong>Definir estructura:</strong> Planificamos juntos el contenido y diseño</li>
            <li style="margin-bottom: 10px;"><strong>Desarrollo:</strong> Construyo tu página en 5-7 días hábiles</li>
            <li style="margin-bottom: 10px;"><strong>Entrega:</strong> Recibes tu página lista para usar</li>
          </ol>
        </div>

        <!-- Call to Action -->
        <div style="text-align: center; margin: 40px 0;">
          <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Reunión%20con%20Andrew%20—%20Web%20Developer&details=Reunión%20para%20discutir%20tu%20proyecto%20web&location=Google%20Meet" 
             style="background: #0e1116; color: #ffffff; padding: 18px 36px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 8px 28px rgba(0,0,0,.12); transition: all 0.3s ease;">
            📅 Agendar reunión gratuita
          </a>
        </div>

        <!-- Experiencia profesional -->
        <div style="background: #f6f8fb; padding: 25px; border-radius: 16px; margin: 30px 0; border: 1px solid #eceff3;">
          <h4 style="color: #0e1116; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">💼 Mi experiencia</h4>
          <p style="color: #68707d; font-size: 16px; line-height: 1.6; margin: 0; font-weight: 500;">
            He trabajado en empresas de tecnología como <strong style="color: #0e1116;">Merqueo</strong>, <strong style="color: #0e1116;">Tangelo</strong>, <strong style="color: #0e1116;">Simetrik</strong> y <strong style="color: #0e1116;">Suma Wealth (USA)</strong>, 
            desarrollando soluciones web modernas y escalables.
          </p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eceff3;">
          <p style="color: #68707d; font-size: 14px; margin: 0 0 10px 0;">
            ¿Tienes preguntas? Responde este email y te ayudo.
          </p>
          <p style="color: #68707d; font-size: 14px; margin: 0;">
            Saludos,<br>
            <strong style="color: #0e1116;">Andrew</strong><br>
            <span style="font-size: 12px;">Web Developer</span>
          </p>
        </div>
      </div>
    `;

    // Enviar email al cliente
    const clientResult = await resend.emails.send({
      from: 'Andrew <onboarding@resend.dev>',
      to: [email],
      subject: 'Tu plan Starter para construir tu página web - Andrew',
      html: emailHtml,
    });

    // Enviar notificación al admin
    const notificationHtml = `
      <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0e1116;">Nuevo lead recibido</h2>
        
        <div style="background: #f6f8fb; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
        </div>
        
        <p style="color: #68707d;">Se ha enviado automáticamente el email con el plan Starter.</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Andrew <onboarding@resend.dev>',
      to: ['andrewjruss7@gmail.com'],
      subject: `Nuevo lead: ${name}`,
      html: notificationHtml,
    });

    return NextResponse.json({
      success: true,
      message: '¡Perfecto! Revisa tu email, te hemos enviado toda la información del plan Starter.'
    });

  } catch (error) {
    console.error('Error en API route:', error);
    return NextResponse.json(
      { success: false, message: 'Error al enviar el email. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}
