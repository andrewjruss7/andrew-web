# 📧 Configuración de EmailJS

## 🚀 Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate con tu email: `andrewjruss7@gmail.com`
- Confirma tu cuenta

### 2. Configurar servicio de email
- En el dashboard, ve a **Email Services**
- Haz clic en **Add New Service**
- Selecciona **Gmail** (o tu proveedor de email)
- Conecta tu cuenta de Gmail
- Copia el **Service ID** (ej: `service_xxxxxxx`)

### 3. Crear template de email
- Ve a **Email Templates**
- Haz clic en **Create New Template**
- Usa este template básico:

```html
Subject: {{subject}}

{{message}}
```

- Guarda el template
- Copia el **Template ID** (ej: `template_xxxxxxx`)

### 4. Obtener Public Key
- Ve a **Account** → **General**
- Copia tu **Public Key** (ej: `xxxxxxxxxxxxxxx`)

### 5. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 6. Límites gratuitos de EmailJS
- ✅ **200 emails/mes** (perfecto para tu caso)
- ✅ **2 servicios de email**
- ✅ **2 templates**
- ✅ **1,000 contactos**

## 🎯 ¿Qué hace nuestro sistema?

1. **Usuario completa el formulario** → Se envía email automáticamente
2. **Email al cliente** → Recibe información del plan Starter
3. **Email a ti** → Notificación del nuevo lead
4. **Template personalizado** → Diseño profesional con tu branding

## 🔧 Estructura del proyecto

```
src/
├── services/
│   └── emailService.ts          # Lógica de envío de emails
├── utils/
│   └── emailTemplates.ts        # Templates HTML personalizados
└── components/
    └── ContactForm.tsx          # Formulario integrado
```

## 🚨 Importante

- **No subas** el archivo `.env.local` a Git
- **Usa HTTPS** en producción
- **Prueba** con tu email primero
- **Monitorea** el uso en el dashboard de EmailJS

## 🎨 Template personalizado

Nuestro template incluye:
- ✅ Diseño responsive
- ✅ Tu branding y colores
- ✅ Información del plan Starter
- ✅ Call-to-action para agendar reunión
- ✅ Tu experiencia profesional
- ✅ Enlaces a calendario

¡Listo para usar! 🚀
