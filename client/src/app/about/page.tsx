import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT, LOCATIONS } from '@cipher/shared';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Cipher — a global technology, SaaS, and operations partner for modern enterprises.',
};

const values = [
  { title: 'Reliability', description: 'We deliver consistent, dependable operations you can count on 24/7.' },
  { title: 'Innovation', description: 'We continuously adopt and integrate the latest AI and cloud technologies.' },
  { title: 'Transparency', description: 'Open communication, clear reporting, and honest partnerships.' },
  { title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we do.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">About Cipher</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">
          {ABOUT_CONTENT.whoWeAre}
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">
          We implement, manage, and operate your workflows, cloud, data, and DevOps systems
          end-to-end — so you can focus on what matters most: your core business.
        </p>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">
            Get in touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/why-us" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/80 dark:bg-black/40 backdrop-blur-xl text-sm sm:text-base font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.97] transition-all">
            Why Cipher
          </Link>
        </div>
      </section>

      <div className="gradient-line" />

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Who We Are</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for modern operations</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Everything we do is driven by our mission, our people, and our approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Our Mission', sub: ABOUT_CONTENT.mission, body: 'We take ownership of your operations so your team can focus on strategy, growth, and innovation.' },
            { title: 'Our Team', sub: ABOUT_CONTENT.team, body: 'Our engineers, architects, and operations specialists work across time zones to deliver round-the-clock excellence.' },
            { title: 'Our Approach', sub: ABOUT_CONTENT.approach, body: 'We lead with service, enable with products, and drive everything through operational rigor and continuous improvement.' },
          ].map((item) => (
            <div key={item.title} className="gradient-border">
              <div className="bg-white dark:bg-black p-6 lg:p-8 h-full">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#06B6D4] mb-3">{item.sub}</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Our Values</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What drives us every day</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Our values shape the way we work, the partnerships we build, and the results we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="gradient-border">
                <div className="bg-white dark:bg-black p-6 flex gap-4 h-full">
                  <div className="w-1 rounded-full bg-neutral-200 dark:bg-neutral-800 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{v.title}</h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Global Presence</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">We operate around the world</h2>
        </div>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {LOCATIONS.map((l) => (
            <div key={l.country} className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-5 py-3">
              <span className="text-2xl">{l.flag}</span>
              <span className="text-sm font-medium">{l.country}</span>
            </div>
          ))}
        </div>
      </div>
      </section>

    </>
  );
}
