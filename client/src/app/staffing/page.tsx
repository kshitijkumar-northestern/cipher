import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Staffing & Teams',
  description: 'Flexible staffing models — remote hands, shared teams, and dedicated teams for your operations.',
};

const models = [
  { title: 'Remote Hands', desc: 'On-demand access to skilled engineers for specific tasks, incidents, or short-term projects.', features: ['Pay-per-task or hourly', 'Fast onboarding', 'Flexible scope', 'Ideal for ad-hoc needs'], popular: false },
  { title: 'Shared Team', desc: 'A dedicated pool of engineers shared across a limited number of clients for consistent, cost-effective support.', features: ['Cost-effective coverage', 'Consistent team', '24/7 availability', 'Ideal for growing teams'], popular: true },
  { title: 'Dedicated Team', desc: 'A fully dedicated team that works exclusively on your operations, embedded into your workflows.', features: ['100% dedicated resources', 'Deep domain expertise', 'Full integration', 'Ideal for enterprise ops'], popular: false },
];

const skills = ['AWS / Azure / GCP / OCI', 'Kubernetes & Docker', 'Terraform & IaC', 'CI/CD Pipelines', 'Database Administration', 'AI / ML Operations', 'Security & Compliance', 'Monitoring & Observability', 'Data Engineering'];

const steps = [
  { n: '01', title: 'Discovery', desc: 'We assess your requirements, tech stack, and team structure.' },
  { n: '02', title: 'Matching', desc: 'We match you with engineers who have the right skills and experience.' },
  { n: '03', title: 'Onboarding', desc: 'Your team is onboarded into your tools, processes, and workflows.' },
  { n: '04', title: 'Delivery', desc: 'Continuous operations with regular reviews, reporting, and optimization.' },
];

export default function StaffingPage() {
  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">Staffing & Teams</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">Scale your team with global talent</h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">Flexible staffing models designed for modern operations — from on-demand remote hands to fully dedicated teams embedded in your workflow.</p>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">Build your team <ArrowRight className="ml-2 h-4 w-4" /></Link>
          <Link href="/why-us" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/80 dark:bg-black/40 backdrop-blur-xl text-sm sm:text-base font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.97] transition-all">Why Cipher</Link>
        </div>
      </section>

      <div className="gradient-line" />

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Staffing Models</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose your model</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">Three flexible engagement models to match your needs and budget.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.title} className={`gradient-border ${m.popular ? 'ring-2 ring-[#06B6D4]/30' : ''}`}>
              <div className="bg-white dark:bg-black p-6 h-full relative">
                {m.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#06B6D4] text-white px-3 py-1 text-xs font-medium">
                      <Star className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}
                <div className={m.popular ? 'pt-3' : ''}>
                  <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">{m.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-3.5 w-3.5 text-[#06B6D4] shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`inline-flex items-center justify-center w-full h-10 rounded-full text-sm font-medium transition-all ${m.popular ? 'bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-80' : 'border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}>
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Expertise</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills across every layer</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">Our engineers bring deep expertise across the full operations stack.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {skills.map((s) => (
              <div key={s} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-4 flex items-center gap-3">
                <Check className="h-3.5 w-3.5 text-[#06B6D4] shrink-0" />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Process</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">From discovery to delivery in four simple steps.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div key={s.n} className="gradient-border">
              <div className="bg-white dark:bg-black p-6 h-full">
                <span className="text-2xl font-bold text-neutral-300 dark:text-neutral-700 block mb-2">{s.n}</span>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

    </>
  );
}
