import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Layers, Shield, Zap, Globe, BarChart3, RefreshCw } from 'lucide-react';
import { HeroSection } from '@/components/sections/hero-section';
import { CTAWave } from '@/components/sections/cta-wave';
import { CORE_PILLARS, WHY_CHOOSE_US, DIFFERENTIATORS } from '@cipher/shared';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  cloud: Cloud,
  layers: Layers,
};

const FEATURES = [
  { icon: Zap, title: 'Auto-Healing', desc: 'Self-healing systems that detect and correct failures automatically.' },
  { icon: BarChart3, title: 'Cost Optimization', desc: 'AI-driven cost reduction across compute, storage, and ops.' },
  { icon: Shield, title: 'Secure by Design', desc: 'Encrypted data handling, access controls, and fleet security scans.' },
  { icon: Globe, title: '24/7 Global Ops', desc: 'Round-the-clock monitoring and support across 4 countries.' },
  { icon: RefreshCw, title: 'Auto-Scaling', desc: 'Dynamic scaling of workloads that adapts to your business demands.' },
  { icon: Brain, title: 'Adaptive AI', desc: 'Systems that learn from patterns and continuously improve performance.' },
];

const METRICS = [
  { value: '99.9%', label: 'Uptime', desc: 'across all clouds' },
  { value: '24/7', label: 'Operations', desc: 'global coverage' },
  { value: '40%', label: 'Cost Savings', desc: 'avg reduction' },
  { value: '4', label: 'Countries', desc: 'US, CA, IN, AU' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="gradient-line" />

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Our Solutions</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The core of smarter operations
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            AI automation, cloud infrastructure, and enterprise software — unified under one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PILLARS.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <Link key={p.href} href={p.href} className="gradient-border group">
                <div className="bg-white dark:bg-black p-6 lg:p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon className="h-5 w-5 text-[#06B6D4]" />}
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[#06B6D4] gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{m.value}</div>
                <div className="text-sm font-medium mb-0.5">{m.label}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Features</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Powerful features that drive growth
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Enterprise-grade capabilities designed for scale, security, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="gradient-border">
              <div className="bg-white dark:bg-black p-6 h-full">
                <f.icon className="h-5 w-5 text-[#06B6D4] mb-4" />
                <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Why Cipher</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why enterprises choose us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-4 text-sm font-medium text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAWave />
    </>
  );
}
