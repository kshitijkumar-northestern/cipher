'use client';

import dynamic from 'next/dynamic';

const Globe = dynamic(
  () => import('@/components/globe').then((m) => ({ default: m.Globe })),
  { ssr: false, loading: () => <div className="w-full h-[500px] lg:h-[600px]" /> }
);

const locations = [
  { country: 'United States', flag: '🇺🇸' },
  { country: 'Canada', flag: '🇨🇦' },
  { country: 'India', flag: '🇮🇳' },
  { country: 'Australia', flag: '🇦🇺' },
];

export function GlobalPresenceSection() {
  return (
    <section className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30 py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Global Presence</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Operating across 4 countries
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Round-the-clock operations and local expertise wherever you need it.
          </p>
        </div>

        <Globe />

        <div className="flex items-center justify-center gap-8 lg:gap-14 mt-4">
          {locations.map((l) => (
            <div key={l.country} className="flex items-center gap-2">
              <span className="text-2xl">{l.flag}</span>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{l.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
