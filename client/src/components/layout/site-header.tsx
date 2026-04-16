'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Brain, Cloud, Layers } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { HeaderRope } from '@/components/animations/header-rope';

const services = [
  { label: 'AI Automation', href: '/ai-automation', icon: Brain },
  { label: 'Infrastructure', href: '/infrastructure', icon: Cloud },
  { label: 'Software Products', href: '/software-products', icon: Layers },
];

const links = [
  { label: 'Staffing', href: '/staffing' },
  { label: 'About', href: '/about' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Careers', href: '/careers' },
  { label: 'Resources', href: '/resources' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-2xl backdrop-saturate-[1.8]">
      <HeaderRope />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex h-16 items-center">
        <Link href="/" className="mr-10 text-xl font-bold">Cipher</Link>

        <nav className="hidden lg:flex items-center gap-8 flex-1">
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button className="flex items-center h-16 gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${drop ? 'rotate-180' : ''}`} />
            </button>
            {drop && (
              <div className="absolute top-full left-0 w-64 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl p-2 shadow-lg animate-fade-in">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setDrop(false)} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all">
                    <s.icon className="h-4 w-4 opacity-50" />
                    <span className="font-medium">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-xs font-medium transition-colors ${pathname === l.href ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ml-auto">
          <ThemeToggle />
          <button 
            className="lg:hidden p-1.5 relative w-8 h-8 flex items-center justify-center" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu className={`absolute h-5 w-5 transition-all duration-300 ${open ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`absolute h-5 w-5 transition-all duration-300 ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-black/95 backdrop-blur-2xl p-5 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          open ? 'max-h-[500px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
        }`}
      >
        <nav className="flex flex-col gap-0.5">
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all">
                <s.icon className="h-4 w-4 opacity-40" /> {s.label}
              </Link>
            ))}
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all">
                {l.label}
              </Link>
            ))}
          </nav>
      </div>
    </header>
  );
}
