'use client';

import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function RopeWave() {
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
      { amplitude: 50, frequency: 0.005, speed: 0.016, yOffset: 0.2, width: 40, glow: 60, colors: ['#4A00E0', '#0044FF', '#00E5FF'] },
      { amplitude: 40, frequency: 0.007, speed: 0.02, yOffset: 0.38, width: 32, glow: 50, colors: ['#3B00D1', '#0033E6', '#00D1FF'] },
      { amplitude: 55, frequency: 0.004, speed: 0.013, yOffset: 0.55, width: 45, glow: 70, colors: ['#5C00F0', '#0055FF', '#00F5FF'] },
      { amplitude: 35, frequency: 0.008, speed: 0.024, yOffset: 0.7, width: 28, glow: 45, colors: ['#4A00E0', '#0044FF', '#00E5FF'] },
      { amplitude: 45, frequency: 0.006, speed: 0.015, yOffset: 0.85, width: 36, glow: 55, colors: ['#3B00D1', '#0033E6', '#00D1FF'] },
    ];

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const isDark = theme === 'dark';

      ctx.clearRect(0, 0, w, h);

      ropes.forEach((rope) => {
        const gradient = ctx.createLinearGradient(0, 0, w, 0);
        rope.colors.forEach((color, i) => {
          gradient.addColorStop(i / (rope.colors.length - 1), color);
        });

        const baseY = h * rope.yOffset;

        const points: [number, number][] = [];
        for (let x = 0; x <= w; x += 2) {
          const wave1 = Math.sin(x * rope.frequency + time * rope.speed) * rope.amplitude;
          const wave2 = Math.sin(x * rope.frequency * 1.5 + time * rope.speed * 0.7 + 1) * rope.amplitude * 0.4;
          const wave3 = Math.cos(x * rope.frequency * 0.5 + time * rope.speed * 1.3 + 2) * rope.amplitude * 0.25;
          points.push([x, baseY + wave1 + wave2 + wave3]);
        }

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = rope.glow;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = isDark ? 0.15 : 0.1;
        ctx.filter = 'blur(20px)';
        points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = rope.width * 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = isDark ? 0.25 : 0.15;
        ctx.filter = 'blur(8px)';
        points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = rope.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = isDark ? 0.6 : 0.4;
        points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = rope.width * 0.15;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = isDark ? 0.2 : 0.12;
        points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.stroke();
        ctx.restore();
      });

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
      style={{ zIndex: 0 }}
    />
  );
}
