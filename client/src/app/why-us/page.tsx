import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, Cpu, Cloud, Globe, TrendingUp, RefreshCw, DollarSign, CalendarClock, Users } from 'lucide-react';
import { DIFFERENTIATORS } from '@cipher/shared';

export const metadata: Metadata = {
  title: 'Why Us',
  description: 'Discover what makes Cipher the right operations partner for your enterprise.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  handshake: Handshake, cpu: Cpu, cloud: Cloud, globe: Globe,
  'trending-up': TrendingUp, refresh: RefreshCw, 'dollar-sign': DollarSign,
  calendar: CalendarClock, users: Users,
};

export default function WhyUsPage() {
  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">Why Cipher</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">
          The operations partner built for scale
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">
          We combine AI-powered automation, multi-cloud expertise, and a global team to deliver
          operations that are reliable, cost-effective, and continuously improving.
        </p>
        <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">
          Talk to us <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>

      <div className="gradient-line" />

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Our Differentiators</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What sets us apart</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">Nine core strengths that define the Cipher difference.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((d) => {
            const Icon = iconMap[d.icon];
            return (
              <div key={d.title} className="gradient-border">
                <div className="bg-white dark:bg-black p-6 h-full">
                  {Icon && <Icon className="h-5 w-5 text-[#06B6D4] mb-4" />}
                  <h3 className="font-semibold mb-2">{d.title}</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{d.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>

    </>
  );
}
