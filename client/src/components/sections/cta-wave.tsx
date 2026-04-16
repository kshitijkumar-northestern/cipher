'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTAWaveBg = dynamic(
  () => import('@/components/animations/cta-wave-bg').then((m) => ({ default: m.CTAWaveBg })),
  { ssr: false }
);

export function CTAWave() {
  return (
    <section className="w-full relative overflow-hidden py-24 lg:py-32 bg-white dark:bg-black">
      <div className="absolute inset-0 bg-[url('/cta-bg.png')] bg-cover bg-center bg-no-repeat opacity-100">
        <div className="absolute inset-0 bg-transparent dark:bg-black/40" />
      </div>
      <div className="absolute inset-0 backdrop-blur-md lg:backdrop-blur-xl" />
      <div className="relative z-10 container max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">Ready to get started?</h2>
        <p className="text-base lg:text-lg font-medium tracking-tight text-white/95 leading-normal mb-10 max-w-lg mx-auto">
          Transform your operations with AI and Cloud.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:opacity-90 active:scale-[0.97] transition-all shadow-lg">
            Start now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full border border-white/30 bg-black/20 backdrop-blur-xl text-white text-sm sm:text-base font-medium hover:bg-black/40 active:scale-[0.97] transition-all">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
