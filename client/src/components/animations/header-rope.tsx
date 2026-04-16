'use client';

import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function HeaderRope() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const isDark = theme === 'dark';

      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, '#4A00E0');
      gradient.addColorStop(0.5, '#0044FF');
      gradient.addColorStop(1, '#00E5FF');

      const points: [number, number][] = [];
      for (let x = 0; x <= w; x += 2) {
        const wave = Math.sin(x * 0.01 + time * 0.03) * 1.5 +
                     Math.sin(x * 0.02 + time * 0.02) * 0.8;
        points.push([x, h / 2 + wave]);
      }

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.globalAlpha = isDark ? 0.2 : 0.12;
      ctx.filter = 'blur(6px)';
      points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.globalAlpha = isDark ? 0.7 : 0.5;
      points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
      ctx.stroke();
      ctx.restore();

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full pointer-events-none"
      style={{ height: '4px', display: 'block' }}
    />
  );
}
