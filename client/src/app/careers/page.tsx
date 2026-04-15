import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Cpu, BookOpen, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Cipher and help build the future of AI-powered operations.',
};

const whyJoin = [
  { icon: Globe, title: 'Global & Remote-First', desc: 'Work from anywhere across our offices in the US, Canada, India, and Australia — or fully remote.' },
  { icon: Cpu, title: 'Cutting-Edge Technology', desc: 'Work with AI, multi-cloud platforms, Kubernetes, Terraform, and the latest DevOps toolchains.' },
  { icon: BookOpen, title: 'Continuous Learning', desc: 'Access certifications, training budgets, mentorship programs, and cross-functional rotations.' },
];

const jobs = [
  { title: 'Senior Cloud Engineer', dept: 'Infrastructure', loc: 'Remote — US / Canada', type: 'Full-time' },
  { title: 'AI/ML Operations Engineer', dept: 'AI Automation', loc: 'Remote — Global', type: 'Full-time' },
  { title: 'DevOps Lead', dept: 'Infrastructure', loc: 'India — Hybrid', type: 'Full-time' },
  { title: 'Full-Stack Developer', dept: 'Software Products', loc: 'Remote — US', type: 'Full-time' },
  { title: 'Site Reliability Engineer', dept: 'Infrastructure', loc: 'Australia — Hybrid', type: 'Full-time' },
  { title: 'Technical Project Manager', dept: 'Operations', loc: 'Remote — Global', type: 'Contract' },
];

export default function CareersPage() {
  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">Careers</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">Build the future of operations</h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">Join a global team of engineers, architects, and operations experts who are redefining how enterprises run their technology.</p>
        <Link href="#openings" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">
          View open positions <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>

      <div className="gradient-line" />

      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Why Join</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">A workplace built for builders</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">We invest in our people so they can do the best work of their careers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyJoin.map((item) => (
            <div key={item.title} className="gradient-border">
              <div className="bg-white dark:bg-black p-6 h-full">
                <item.icon className="h-5 w-5 text-[#06B6D4] mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section id="openings" className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Open Positions</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Current openings</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">Explore roles across engineering, operations, and product.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <div key={job.title} className="gradient-border">
                <div className="bg-white dark:bg-black p-6 h-full">
                  <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2.5 py-0.5 text-[10px] font-medium mb-3">{job.dept}</span>
                  <h3 className="font-semibold mb-3">{job.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-300 mb-1">
                    <MapPin className="h-3 w-3" /> {job.loc}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">{job.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
