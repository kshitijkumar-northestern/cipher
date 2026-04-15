'use client';

import dynamic from 'next/dynamic';

const PresenceWave = dynamic(
  () => import('@/components/presence-wave').then((m) => ({ default: m.PresenceWave })),
  { ssr: false }
);

export function GlobalPresenceRope() {
  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white py-20 lg:py-28 overflow-hidden min-h-[50vh] flex items-center">
      <PresenceWave />
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block rounded-3xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] px-12 py-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Global Presence</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Operating across 4 countries</h2>
            <p className="text-base lg:text-lg font-semibold tracking-tighter text-neutral-700 dark:text-neutral-300 leading-normal">
              Our distributed team delivers 24/7 coverage across every major time zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
