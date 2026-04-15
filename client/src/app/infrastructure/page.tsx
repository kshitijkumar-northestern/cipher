import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { INFRASTRUCTURE_CONTENT } from '@cipher/shared';

export const metadata = { title: 'Infrastructure Operations — Cipher' };

export default function InfrastructurePage() {
  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">Infrastructure</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">
          Infrastructure operations across every cloud
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">
          {INFRASTRUCTURE_CONTENT.overview}
        </p>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">Get started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/80 dark:bg-black/40 backdrop-blur-xl text-sm sm:text-base font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.97] transition-all">Contact Sales</Link>
        </div>
      </section>

      <div className="gradient-line" />

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Cloud & Infrastructure</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Cloud Operations</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">Multi-cloud management across AWS, Azure, GCP, OCI, and Private Cloud.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INFRASTRUCTURE_CONTENT.cloudOps.map((item) => (
            <div key={item.title} className="gradient-border">
              <div className="bg-white dark:bg-black p-6 lg:p-8 h-full">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Data & Database</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Data Operations</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">End-to-end data management from databases to data lakes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFRASTRUCTURE_CONTENT.dataOps.map((item) => (
              <div key={item.title} className="gradient-border">
                <div className="bg-white dark:bg-black p-6 h-full">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">DevOps & Delivery</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">DevOps Operations</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">CI/CD, release automation, IaC, and full-stack observability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFRASTRUCTURE_CONTENT.devOps.map((item) => (
            <div key={item.title} className="gradient-border">
              <div className="bg-white dark:bg-black p-6 h-full">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Outcomes</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client outcomes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INFRASTRUCTURE_CONTENT.clientOutcomes.map((outcome) => (
              <div key={outcome} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-5 flex items-center gap-3">
                <Check className="h-4 w-4 text-[#06B6D4] shrink-0" />
                <span className="text-sm font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
