'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-neutral-100/30 dark:bg-neutral-900/30 animate-pulse" />,
});

export function HeroSection() {
  return (
    <section className="container pt-0 pb-16 lg:pt-8 lg:pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center -mt-12 lg:-mt-20">
          
          <div className="block lg:hidden w-full aspect-square max-w-[500px] relative">
            <Spline scene="https://prod.spline.design/QOei3V6-5mRMLYvw/scene.splinecode" />
          </div>

          <div className="hidden lg:block w-full lg:h-[700px] xl:h-[800px] relative lg:-translate-x-24 xl:-translate-x-32">
            <Spline scene="https://prod.spline.design/HCb8uXSsXdyX6Lix/scene.splinecode" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5 animate-fade-up" style={{ opacity: 0 }}>
            AI-Powered Cloud Operations
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-up text-balance hero-outline-text"
            data-text="Operations infrastructure for modern enterprises"
            style={{ opacity: 0 }}
          >
            Operations infrastructure for modern enterprises
          </h1>

          <p className="text-base lg:text-lg font-semibold tracking-tighter text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-normal animate-fade-up-1" style={{ opacity: 0 }}>
            Automate workflows, manage multi-cloud infrastructure, and scale DevOps
            with built-in auto-healing and cost optimization.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up-2" style={{ opacity: 0 }}>
            <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/80 dark:bg-black/40 backdrop-blur-xl text-neutral-900 dark:text-white text-sm sm:text-base font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.97] transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
