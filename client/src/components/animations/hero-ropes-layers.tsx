'use client';

import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Rope {
  group: number;
  offsetInGroup: number;
  width: number;
  colors: string[];
  phase: number;
  waveAmp: number;
  speed: number;
}

const COLORS = [
  ['#4A00E0', '#0044FF', '#00E5FF'],
  ['#3B00D1', '#0033E6', '#00D1FF'],
  ['#5C00F0', '#0055FF', '#00F5FF'],
  ['#4A00E0', '#0044FF', '#00E5FF'],
  ['#3B00D1', '#0033E6', '#00D1FF'],
  ['#5C00F0', '#0055FF', '#00F5FF'],
];

const GROUPS = [
  
  { startY: 0.65, endY: 0.65, curveDir: 1, curveMag: 0.06, twist: 0.4 },
  { startY: 0.68, endY: 0.7, curveDir: -1, curveMag: 0.07, twist: 0.5 },
  { startY: 0.72, endY: 0.74, curveDir: 1, curveMag: 0.08, twist: 0.45 },
  { startY: 0.75, endY: 0.76, curveDir: -1, curveMag: 0.06, twist: 0.6 },
  { startY: 0.78, endY: 0.8, curveDir: 1, curveMag: 0.09, twist: 0.5 },
  { startY: 0.82, endY: 0.82, curveDir: -1, curveMag: 0.07, twist: 0.55 },
  { startY: 0.85, endY: 0.86, curveDir: 1, curveMag: 0.08, twist: 0.45 },
  { startY: 0.88, endY: 0.88, curveDir: -1, curveMag: 0.06, twist: 0.5 },
  { startY: 0.91, endY: 0.92, curveDir: -1, curveMag: 0.07, twist: 0.5 },
  { startY: 0.95, endY: 0.95, curveDir: 1, curveMag: 0.05, twist: 0.45 },
];

function makeRopes(perGroup: number, behind: boolean): Rope[] {
  const ropes: Rope[] = [];
  GROUPS.forEach((_, gi) => {
    for (let i = 0; i < perGroup; i++) {
      const t = i / Math.max(perGroup - 1, 1);
      ropes.push({
        group: gi,
        offsetInGroup: (t - 0.5) * 0.06,
        width: behind ? 0.8 + t * 1 : 0.4 + t * 0.5,
        colors: COLORS[(gi * perGroup + i) % COLORS.length],
        phase: gi * 2 + i * 0.4 + Math.random(),
        waveAmp: 8 + Math.random() * 14,
        speed: 0.012 + Math.random() * 0.01,
      });
    }
  });
  return ropes;
}

const backRopes = makeRopes(5, true);
const frontRopes = makeRopes(3, false);

function drawRopes(canvas: HTMLCanvasElement, ropes: Rope[], theme: string | undefined) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let animationId: number;
  let time = 0;
  const isDark = theme === 'dark';

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio, 1.5);
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
  };

  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    ropes.forEach((rope) => {
      const g = GROUPS[rope.group];
      const gradient = ctx.createLinearGradient(w, 0, 0, h);
      rope.colors.forEach((c, i) => gradient.addColorStop(i / (rope.colors.length - 1), c));

      const steps = 150;
      const sY = h * (g.startY + rope.offsetInGroup);
      const eY = h * (g.endY + rope.offsetInGroup);
      const twist = (g as any).twist || 0.5;

      ctx.beginPath();

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const baseX = w * 1.1 - w * 1.1 * t;
        const baseY = sY + (eY - sY) * t;
        const curve = Math.sin(t * Math.PI) * h * g.curveMag * g.curveDir;
        const tF = 0.15 + 0.85 * t;
        const twirl = Math.sin(t * Math.PI * 5 + time * rope.speed * 0.8 + rope.phase) * 18 * twist * tF;
        const twirlX = Math.cos(t * Math.PI * 5 + time * rope.speed * 0.8 + rope.phase) * 8 * twist * tF;
        const wave = Math.sin(t * 28 + time * rope.speed + rope.phase) * rope.waveAmp * tF;
        const sway = Math.sin(time * 0.007 + rope.phase) * 12 * tF;
        const x = baseX + twirlX;
        const y = baseY + curve + twirl + wave + sway;

        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }

      ctx.save();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = rope.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = rope.colors[1];
      ctx.shadowBlur = 14;
      ctx.globalAlpha = isDark ? 0.25 : 0.12;
      ctx.stroke();
      ctx.restore();

      ctx.strokeStyle = gradient;
      ctx.lineWidth = rope.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.globalAlpha = isDark ? 0.4 : 0.22;
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    time += 1;
    animationId = requestAnimationFrame(draw);
  };

  draw();

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', resize);
  };
}

export function HeroRopesBack() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  useEffect(() => { if (canvasRef.current) return drawRopes(canvasRef.current, backRopes, theme); }, [theme]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export function HeroRopesFront() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  useEffect(() => { if (canvasRef.current) return drawRopes(canvasRef.current, frontRopes, theme); }, [theme]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
