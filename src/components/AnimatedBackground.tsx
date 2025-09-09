'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      const gridSize = 60;
      const lineWidth = 1;
      const opacity = 0.08;
      
      // Detectar si está en modo oscuro
      const isDark = document.documentElement.classList.contains('dark');
      const gridColor = isDark ? '255, 255, 255' : '0, 0, 0';
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(${gridColor}, ${opacity})`;
      ctx.lineWidth = lineWidth;

      // Líneas verticales
      for (let x = 0; x < canvas.width; x += gridSize) {
        const offsetX = (Math.sin(time * 0.001 + x * 0.01) * 10);
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
        ctx.stroke();
      }

      // Líneas horizontales
      for (let y = 0; y < canvas.height; y += gridSize) {
        const offsetY = (Math.cos(time * 0.001 + y * 0.01) * 10);
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
        ctx.stroke();
      }

      // Puntos de intersección
      ctx.fillStyle = `rgba(${gridColor}, ${opacity * 0.5})`;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const offsetX = (Math.sin(time * 0.001 + x * 0.01) * 10);
          const offsetY = (Math.cos(time * 0.001 + y * 0.01) * 10);
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const animate = () => {
      time += 16;
      drawGrid();
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
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

export default AnimatedBackground;
