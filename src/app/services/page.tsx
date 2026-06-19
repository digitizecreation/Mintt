"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ChatWidget from "../_components/chat-widget";
import SiteFooter from "../_components/site-footer";
import SiteNav from "../_components/site-nav";

function ScanlineOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]"
      style={{
        background:
          "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 106, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(255, 106, 0, 0.03))",
        backgroundSize: "100% 2px, 3px 100%",
      }}
    />
  );
}

function SectionHeading({ eyebrow, headline, subheadline }: { eyebrow: string; headline: string | React.ReactNode; subheadline?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-16 md:mb-24"
    >
      <div className="flex items-center gap-4 mb-8">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-[1px] bg-primary"
        />
        <span className="font-headline text-primary tracking-[0.3em] text-[10px] uppercase font-bold">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
        {headline}
      </h2>
      {subheadline && (
        <p className="mt-8 text-neutral-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          {subheadline}
        </p>
      )}
    </motion.div>
  );
}

function ServiceCard({
  number,
  icon,
  title,
  description,
  tags,
  index,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.7, type: "spring", stiffness: 100 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group relative flex flex-col h-full"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
      <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

      <div className="relative backdrop-blur-xl bg-surface-container/60 rounded-[2rem] border border-white/5 p-8 md:p-10 flex flex-col h-full overflow-hidden group-hover:border-primary/30 transition-all duration-500">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
              initial={{ y: "100%", x: `${20 + i * 30}%` }}
              animate={{
                y: "-20%",
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <div className="flex justify-between items-start mb-8 relative z-10">
          <motion.span className="font-headline text-xs font-black text-white/20 group-hover:text-primary/40 transition-colors duration-500">
            {number}
          </motion.span>
          <motion.div
            className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 border border-white/5 group-hover:border-primary/30"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            {icon}
          </motion.div>
        </div>

        <div className="relative mb-6">
          <h4 className="font-headline text-2xl font-bold text-white group-hover:text-white transition-colors">{title}</h4>
          <motion.div
            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 0.3, duration: 0.6 }}
          />
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-10 flex-grow font-light group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 relative z-10">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + i * 0.05 + 0.4 }}
              className="px-3 py-1.5 bg-white/5 rounded-full text-[9px] uppercase font-bold text-neutral-400 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

const SERVICES = [
  {
    title: "SEO Mastery",
    description: "Technical SEO, content strategy, and authority building that delivers lasting, compounding results across search engines.",
    tags: ["On-Page SEO", "Link Building", "Local SEO"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "From landing pages to complex web applications — every pixel precision-crafted for performance, SEO, and conversion.",
    tags: ["React", "Next.js", "Laravel"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "SaaS Solutions",
    description: "Multi-tenancy, CI/CD pipelines, and cloud-native architecture built for enterprise scale and long-term reliability.",
    tags: ["AWS/Azure", "CI/CD", "Custom SaaS"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Meta Ad Campaigns",
    description: "Data-driven targeting combined with creative storytelling for maximum ROI across the full marketing funnel.",
    tags: ["Facebook", "Instagram", "Lead Gen"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "CRM-Led Growth Systems",
    description: "Pipeline automation, lead nurturing, and CRM workflows that turn cold prospects into long-term revenue.",
    tags: ["Mintt CRM", "Automation", "Pipelines"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Branding",
    description: "Identity systems, brand guidelines, and visual language built for long-term recognition across every channel.",
    tags: ["Identity", "Guidelines", "Voice"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Content Creation",
    description: "Reels, carousels, copy, and editorial calendars designed to grow audiences and convert engagement into leads.",
    tags: ["Reels", "Carousels", "Copy"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "AI Solutions",
    description: "Practical AI agents, automation, and analytics that turn your data into decisions and your operations into leverage.",
    tags: ["Automation", "Insights", "Agents"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Our Core Services"
            headline={
              <>
                Four disciplines, <span className="italic font-light text-primary">one system.</span>
              </>
            }
            subheadline="Comprehensive 360° growth — marketing, technology, AI & intelligence, and design — under one roof in Vashi, Navi Mumbai."
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 lg:px-12 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                index={i}
                number={`0${i + 1}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                tags={service.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-surface relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 106, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(255, 106, 0, 0.03))",
          backgroundSize: "100% 2px, 3px 100%",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-6"
          >
            Comprehensive 360° Growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 font-headline text-sm uppercase tracking-[0.3em] font-bold mb-12"
          >
            No hype. Just results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-12 py-6 rounded-full text-base font-black uppercase tracking-widest hover:shadow-[0_0_60px_rgba(255,106,0,0.5)] transition-all"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <ChatWidget />
    </main>
  );
}