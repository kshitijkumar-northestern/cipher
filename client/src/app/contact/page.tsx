'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { submitContactForm, resetContact } from '@/store/slices/contactSlice';
import { SERVICE_CATEGORIES, COMPANY_EMAIL, COMPANY_PHONE, LOCATIONS } from '@cipher/shared';

export default function ContactPage() {
  const dispatch = useAppDispatch();
  const { status, error, message } = useAppSelector((s) => s.contact);

  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(submitContactForm(form));
    if (submitContactForm.fulfilled.match(result)) {
      setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }
  };

  const inputCls = 'h-11 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20 focus:border-[#06B6D4]/50 transition-all';

  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">Contact</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">
          Let&apos;s talk about your operations
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed">
          Whether you need AI automation, cloud infrastructure, or a dedicated team —
          we&apos;re ready to help. Fill out the form and we&apos;ll get back to you within 24 hours.
        </p>
      </section>

      <div className="gradient-line" />

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium mb-0.5">Email</p>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-neutral-600 dark:text-neutral-300 hover:text-[#06B6D4] transition-colors">{COMPANY_EMAIL}</a>
                </div>
                <div>
                  <p className="font-medium mb-0.5">Phone</p>
                  <a href={`tel:${COMPANY_PHONE}`} className="text-neutral-600 dark:text-neutral-300 hover:text-[#06B6D4] transition-colors">{COMPANY_PHONE}</a>
                </div>
              </div>
            </div>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
            <div>
              <h3 className="font-semibold mb-4">Our Locations</h3>
              <div className="space-y-2.5">
                {LOCATIONS.map((loc) => (
                  <div key={loc.country} className="flex items-center text-sm">
                    <span className="font-medium">{loc.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {status === 'succeeded' ? (
              <div className="gradient-border">
                <div className="bg-white dark:bg-black p-8 lg:p-12 text-center">
                  <div className="h-14 w-14 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center mx-auto mb-6">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message sent successfully</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-8 max-w-md mx-auto">
                    {message || 'Thank you for reaching out. Our team will get back to you within 24 hours.'}
                  </p>
                  <button onClick={() => dispatch(resetContact())} className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <div className="gradient-border">
                <div className="bg-white dark:bg-black p-6 lg:p-8">
                  <h3 className="font-semibold mb-1">Send us a message</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6">Fill out the form below and we&apos;ll respond as soon as possible.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-medium">Name *</label>
                        <input id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className={inputCls} />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-medium">Email *</label>
                        <input id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required className={inputCls} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-xs font-medium">Company</label>
                        <input id="company" name="company" placeholder="Your company" value={form.company} onChange={handleChange} className={inputCls} />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-medium">Phone</label>
                        <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} className={inputCls} />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-xs font-medium">Service</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange} className={inputCls}>
                        <option value="">Select a service...</option>
                        {SERVICE_CATEGORIES.map((cat) => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-medium">Message *</label>
                      <textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} value={form.message} onChange={handleChange} required className={`${inputCls} h-auto min-h-[120px] py-3`} />
                    </div>
                    {error && (
                      <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
                        <p className="text-sm text-red-400">{error}</p>
                      </div>
                    )}
                    <button type="submit" disabled={status === 'loading'} className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all disabled:opacity-50 disabled:pointer-events-none">
                      {status === 'loading' ? 'Sending...' : 'Send message'}
                      {status !== 'loading' && <ArrowRight className="ml-2 h-4 w-4" />}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
