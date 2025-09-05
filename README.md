# Andrew — Web Developer Landing Page

Una landing page moderna desarrollada con **Next.js 15**, **TypeScript** y **Tailwind CSS**, migrada desde HTML/CSS/JS vanilla.

## 🚀 Características

- ⚡ **Next.js 15** con App Router
- 🎨 **Tailwind CSS** para estilos
- 📱 **Responsive Design** completo
- 🎭 **Animaciones suaves** con IntersectionObserver
- 📝 **Formulario funcional** con simulación de integraciones
- 🔧 **TypeScript** para type safety
- 🎯 **SEO optimizado** con metadata de Next.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Animaciones**: CSS + IntersectionObserver
- **Deployment**: Vercel (recomendado)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <tu-repo>
cd andrew-nextjs

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🎨 Componentes

- **DeployBar**: Barra superior con información de deploy
- **Header**: Navegación responsive con menú móvil
- **Hero**: Sección principal con CTA
- **About**: Información personal y background
- **Features**: Proceso de trabajo
- **ContactForm**: Formulario con simulación de integraciones
- **Plans**: Tarjetas de precios
- **Footer**: Enlaces de contacto y calendario

## 🔧 Funcionalidades

### Formulario de Contacto
- Validación de campos
- Simulación de integración con Customer.io
- Simulación de envío de email
- Payload JSON mostrado al usuario

### Animaciones
- Reveal on scroll con IntersectionObserver
- Transiciones suaves
- Efectos hover en botones

### Responsive Design
- Mobile-first approach
- Breakpoints: 720px, 980px
- Menú hamburguesa en móvil
- Grid adaptativo

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Conectar con Vercel
npx vercel

# O conectar GitHub repo en vercel.com
```

### Variables de Entorno
```env
# Para integraciones reales (opcional)
CUSTOMER_IO_API_KEY=tu_api_key
EMAIL_SERVICE_API_KEY=tu_api_key
```

## 📱 Responsive Breakpoints

- **Desktop**: > 980px
- **Tablet**: 720px - 980px  
- **Mobile**: < 720px

## 🎯 SEO

- Metadata optimizada en `layout.tsx`
- Títulos y descripciones semánticas
- Estructura HTML semántica
- Alt texts en imágenes

## 🔄 Migración desde HTML/CSS/JS

Este proyecto fue migrado desde:
- HTML vanilla → JSX/TSX
- CSS vanilla → Tailwind CSS
- JavaScript vanilla → React hooks
- IntersectionObserver → Custom hook

## 📄 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── DeployBar.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── ContactForm.tsx
│   ├── Plans.tsx
│   └── Footer.tsx
└── hooks/
    └── useRevealOnScroll.ts
```

## 🎨 Personalización

### Colores
Los colores están definidos en `tailwind.config.ts`:
- `bg`: Fondo principal
- `ink`: Texto principal
- `muted`: Texto secundario
- `brand`: Color de marca
- `accent`: Color de acento

### Fuentes
- **Poppins** (400, 600, 800) desde Google Fonts

## 📞 Contacto

- **WhatsApp**: +57 315 280 2343
- **Email**: andrew@tu-dominio.com
- **Calendario**: Google Calendar integrado

---

Desarrollado con ❤️ por Andrew