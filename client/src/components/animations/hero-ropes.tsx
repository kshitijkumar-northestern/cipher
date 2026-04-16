'use client';

import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function HeroRopes() {
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

    const ropes = [
      { amplitude: 80, frequency: 0.004, speed: 0.012, yBase: 0.35, width: 6, glowWidth: 24, colors: ['#4A00E0', '#0044FF', '#00E5FF'], phase: 0 },
      { amplitude: 60, frequency: 0.005, speed: 0.016, yBase: 0.45, width: 4, glowWidth: 18, colors: ['#3B00D1', '#0033E6', '#00D1FF'], phase: 1.5 },
      { amplitude: 90, frequency: 0.003, speed: 0.01, yBase: 0.55, width: 7, glowWidth: 28, colors: ['#5C00F0', '#0055FF', '#00F5FF'], phase: 3 },
      { amplitude: 50, frequency: 0.006, speed: 0.02, yBase: 0.42, width: 3, glowWidth: 14, colors: ['#4A00E0', '#0044FF', '#00E5FF'], phase: 4.5 },
      { amplitude: 70, frequency: 0.0045, speed: 0.014, yBase: 0.58, width: 5, glowWidth: 22, colors: ['#3B00D1', '#0033E6', '#00D1FF'], phase: 2 },
      { amplitude: 40, frequency: 0.007, speed: 0.022, yBase: 0.5, width: 2.5, glowWidth: 10, colors: ['#5C00F0', '#0055FF', '#00F5FF'], phase: 5 },
    ];

    const drawRope = (
      rope: typeof ropes[0],
      w: number,
      h: number,
      isDark: boolean
    ) => {
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      rope.colors.forEach((color, i) => {
        gradient.addColorStop(i / (rope.colors.length - 1), color);
      });

      const baseY = h * rope.yBase;
      const points: [number, number][] = [];

      for (let x = -20; x <= w + 20; x += 2) {
        const wave1 = Math.sin(x * rope.frequency + time * rope.speed + rope.phase) * rope.amplitude;
        const wave2 = Math.sin(x * rope.frequency * 2.3 + time * rope.speed * 0.6 + rope.phase + 1) * rope.amplitude * 0.3;
        const wave3 = Math.cos(x * rope.frequency * 0.7 + time * rope.speed * 1.4 + rope.phase + 2) * rope.amplitude * 0.2;
        points.push([x, baseY + wave1 + wave2 + wave3]);
      }

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = rope.glowWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = isDark ? 0.08 : 0.05;
      ctx.filter = 'blur(16px)';
      points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = rope.width * 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = isDark ? 0.12 : 0.08;
      ctx.filter = 'blur(6px)';
      points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = rope.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = isDark ? 0.45 : 0.3;
      points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = rope.width * 0.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = isDark ? 0.15 : 0.08;
      points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const isDark = theme === 'dark';

      ctx.clearRect(0, 0, w, h);

      ropes.filter((_, i) => i % 2 === 0).forEach((r) => drawRope(r, w, h, isDark));

      ropes.filter((_, i) => i % 2 === 1).forEach((r) => drawRope(r, w, h, isDark));

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
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
