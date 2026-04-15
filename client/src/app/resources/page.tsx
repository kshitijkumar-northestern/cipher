import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, BookOpen, Video, Newspaper, BarChart3, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Insights, guides, and case studies on AI automation, cloud operations, and DevOps.',
};

const resources = [
  { type: 'Guide', icon: BookOpen, title: 'The Complete Guide to AI-Powered Operations', desc: 'Learn how to automate workflows, reduce manual effort, and build self-healing systems with AI.', href: '#' },
  { type: 'Case Study', icon: BarChart3, title: 'How We Reduced Cloud Costs by 40%', desc: 'A deep dive into how we helped an enterprise optimize their multi-cloud spend with AI-driven insights.', href: '#' },
  { type: 'Whitepaper', icon: FileText, title: 'Multi-Cloud Operations at Scale', desc: 'Strategies for managing AWS, Azure, GCP, and private cloud environments under a unified operations model.', href: '#' },
  { type: 'Blog', icon: Newspaper, title: 'Auto-Healing Infrastructure: Beyond Monitoring', desc: "Why monitoring alone isn't enough — and how auto-healing closes the loop on incident response.", href: '#' },
  { type: 'Video', icon: Video, title: 'DevOps Pipeline Automation Demo', desc: 'Watch a live walkthrough of our CI/CD pipeline automation, from commit to production in minutes.', href: '#' },
  { type: 'Insight', icon: Lightbulb, title: 'The Future of IT Staffing', desc: 'How modern staffing models are reshaping the way enterprises build and scale their tech teams.', href: '#' },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="container pt-32 pb-16 lg:pt-40 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-5">Resources</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.1]">Insights for modern operations</h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">
          Explore guides, case studies, and thought leadership on AI automation,
          cloud infrastructure, DevOps, and enterprise operations.
        </p>
        <Link href="#resources" className="inline-flex items-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-80 active:scale-[0.97] transition-all">
          Browse resources <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>

      <div className="gradient-line" />

      <section id="resources" className="bg-neutral-50 dark:bg-neutral-900/50 py-20 lg:py-28">
        <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Latest</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured content</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">Practical knowledge from our team of cloud, AI, and operations experts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <Link key={r.title} href={r.href} className="gradient-border group">
              <div className="bg-white dark:bg-black p-6 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <r.icon className="h-4 w-4 text-[#06B6D4]" />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{r.type}</span>
                </div>
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">{r.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-[#06B6D4] gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </section>

    </>
  );
}
