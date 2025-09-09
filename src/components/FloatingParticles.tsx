'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      const isDark = document.documentElement.classList.contains('dark');
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 15; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Efecto de flotación suave
        particle.y += Math.sin(time * 0.001 + particle.x * 0.01) * 0.1;
        particle.x += Math.cos(time * 0.001 + particle.y * 0.01) * 0.05;

        // Reaparecer si sale de la pantalla
        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height || 
            particle.life > particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    const drawParticles = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? '255, 255, 255' : '0, 0, 0';
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        const alpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.fillStyle = `rgba(${particleColor}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      time += 16;
      updateParticles();
      drawParticles();
      animationIdRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FloatingParticles;
