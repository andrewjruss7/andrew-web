// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Barra de despliegue (simulación “último deploy”)
(function setDeployBar(){
  const el = document.getElementById('deployText');
  try{
    // Simula fecha/hora del último deploy (puedes reemplazar por una fecha real de un endpoint)
    const now = new Date();
    const f = new Intl.DateTimeFormat('es-CO', { dateStyle:'medium', timeStyle:'short' }).format(now);
    el.textContent = `Último despliegue: ${f} por Vercel`;
  }catch(e){ /* noop */ }
})();

// Animaciones de entrada con IntersectionObserver (suaves, estilo que prefieres)
(function revealOnScroll(){
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry, idx)=>{
      if(entry.isIntersecting){
        // pequeño “stagger”
        setTimeout(()=> entry.target.classList.add('visible'), idx * 180);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
})();

// Formulario de Demo de Integraciones
const form = document.getElementById('leadForm');
const statusEl = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');
const payloadPanel = document.getElementById('payloadPanel');
const payloadJson = document.getElementById('payloadJson');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'Enviando…';
  submitBtn.disabled = true;

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
    consent: form.consent.checked,
    source: 'andrew-landing-demo',
    timestamp: new Date().toISOString()
  };

  // Simulación de doble integración:
  // 1) Customer.io: track/identify
  // 2) Email: envío a tu inbox (simulado)
  // Aquí solo mostramos el payload. En prod: fetch(...) a tus endpoints.
  await new Promise(r => setTimeout(r, 900)); // latencia simulada

  statusEl.textContent = '¡Integraciones OK! (simulado)';
  payloadPanel.hidden = false;
  payloadJson.textContent = JSON.stringify({
    customerIO: {
      endpoint: 'https://track.customer.io/api/v1/customers',
      payload: { email: data.email, name: data.name, traits: { message: data.message, source: data.source } }
    },
    emailService: {
      to: 'andrew@tu-dominio.com',
      subject: 'Nuevo lead — Andrew Landing',
      text: `Nombre: ${data.name}\nEmail: ${data.email}\nMensaje: ${data.message}`,
      meta: { receivedAt: data.timestamp }
    }
  }, null, 2);

  submitBtn.disabled = false;
});

// Enlace de Calendar: puedes calcular un rango por defecto (ahora + 30 min)
(function patchCalendarLink(){
  const a = document.querySelector('.site-footer a[href*="calendar.google.com"]');
  if(!a) return;
  const start = new Date();
  const end = new Date(start.getTime() + 30*60*1000);
  const fmt = (d)=> d.toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
  const url = new URL(a.href);
  url.searchParams.set('dates', `${fmt(start)}/${fmt(end)}`);
  a.href = url.toString();
})();
