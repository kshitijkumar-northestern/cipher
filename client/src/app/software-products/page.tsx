import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SOFTWARE_PRODUCTS_CONTENT } from '@cipher/shared';

export const metadata = { title: 'Software Products — Cipher' };

export default function SoftwareProductsPage() {
  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">Software Products</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">
          A unified suite of business, infrastructure, and automation tools
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">
          {SOFTWARE_PRODUCTS_CONTENT.overview}
        </p>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">Get started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          <Link href="/contact" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/80 dark:bg-black/40 backdrop-blur-xl text-sm sm:text-base font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.97] transition-all">Contact Sales</Link>
        </div>
      </section>

      <div className="gradient-line" />

      {([
        { label: 'Business Suite', data: SOFTWARE_PRODUCTS_CONTENT.businessSuite },
        { label: 'Infrastructure Suite', data: SOFTWARE_PRODUCTS_CONTENT.infraSuite },
        { label: 'AI Suite', data: SOFTWARE_PRODUCTS_CONTENT.aiSuite },
      ] as const).map((suite, idx) => (
        <div key={suite.label}>
          <section className={`py-20 lg:py-28 ${idx % 2 === 1 ? 'bg-neutral-50 dark:bg-neutral-900/50' : ''}`}>
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">{suite.label}</p>
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${idx % 2 === 0 ? '' : 'gradient-heading'}`}>{suite.data.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {suite.data.products.map((product) => (
                  <div key={product.name} className="gradient-border">
                    <div className="bg-white dark:bg-black p-6 h-full">
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}

    </>
  );
}
