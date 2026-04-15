import Link from 'next/link';
import { FOOTER_NAV, COMPANY_NAME, LOCATIONS } from '@cipher/shared';

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="text-[17px] font-semibold">Cipher</Link>
            <p className="mt-3 text-[13px] text-neutral-600 dark:text-neutral-300 max-w-xs leading-relaxed">
              AI & Cloud Operations Partner for Modern Enterprises.
            </p>
            <div className="mt-4 flex gap-2">{LOCATIONS.map((l) => <span key={l.country} title={l.country}>{l.flag}</span>)}</div>
          </div>
          {([
            ['Services', FOOTER_NAV.services],
            ['Company', FOOTER_NAV.company],
            ['Products', FOOTER_NAV.products],
          ] as const).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[11px] font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">{title}</h4>
              <ul className="space-y-2.5">{items.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-xs text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">{l.label}</Link></li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <div className="flex gap-5 text-[11px] text-neutral-500 dark:text-neutral-400">
          <Link href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
