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

const TIMELINE = [
  {
    year: "2015",
    title: "A coffee conversation",
    body: "Mintt was born over a single cup of coffee — a founder with 4.5+ years of marketing experience and a stubborn belief that B2B brands deserve better than template agencies.",
  },
  {
    year: "2017",
    title: "First 10 brands",
    body: "Word-of-mouth carried us through the early years. We worked with manufacturers, hospitals, and engineering firms across Maharashtra — every engagement, a long-term partnership.",
  },
  {
    year: "2019",
    title: "Women-led, MSME registered",
    body: "Mintt formalized as an MSME-registered women-led startup — opening the door to enterprise clients and government-aligned programs.",
  },
  {
    year: "2021",
    title: "Expanding into SaaS",
    body: "We launched web-app and SaaS practices, building internal products like Mintt CRM while continuing to deliver marketing systems for our brand partners.",
  },
  {
    year: "2023",
    title: "AI & Intelligence",
    body: "We added AI and intelligence services — practical agents, automation, and analytics that turn real data into decisions.",
  },
  {
    year: "2026",
    title: "10 years, 40+ brands, 20+ team",
    body: "Today mintt is a 360° marketing & development agency trusted by 40+ brands across manufacturing, healthcare, real estate, and technology — with a 20+ team in Vashi, Navi Mumbai.",
  },
];

const NEWS = [
  {
    title: "IMTEX 2026",
    date: "January 2026",
    location: "Bangalore International Exhibition Centre",
    desc: "mintt at IMTEX 2026 — meeting manufacturing leaders and showcasing the systems we build for factory and industrial B2B brands.",
  },
  {
    title: "78th All India Textile Conference 2025",
    date: "December 2025",
    location: "India",
    desc: "Sponsor and digital partner for the 78th All India Textile Conference, supporting one of the country's most important textile industry gatherings.",
  },
  {
    title: "NTC 2025 Coimbatore",
    date: "November 2025",
    location: "Coimbatore, Tamil Nadu",
    desc: "Engagement with the National Textile Corporation conclave in Coimbatore — bringing digital growth strategies to India's textile capital.",
  },
];

export default function OurStoryPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Our Story / Our Journey"
            headline={
              <>
                From coffee <span className="italic font-light text-primary">conversations</span> to creative growth.
              </>
            }
            subheadline="A decade-long journey built one partnership at a time — and a stubborn refusal to do generic work."
          />
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-16 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 text-primary/10 select-none">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <h3 className="font-headline text-3xl lg:text-4xl font-bold text-white mb-10 leading-relaxed relative z-10">
              <span className="text-neutral-400 font-light">&ldquo;</span>
              Mintt started with a simple idea over a cup of coffee — to create something{" "}
              <span className="text-primary font-black">meaningful, creative, and impactful.</span>
              <span className="text-neutral-400 font-light">&rdquo;</span>
            </h3>

            <p className="text-neutral-400 text-lg mb-12 font-light leading-relaxed">
              Today, seeing it grow into a trusted digital partner for 40+ brands with a talented team of 20+ is truly fulfilling. Every project reflects our passion, dedication, and commitment to quality.
            </p>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center font-headline font-black text-white text-2xl">
                M
              </div>
              <div>
                <h5 className="text-white font-bold text-lg">Founder, Mintt</h5>
                <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold">Women-Led · MSME Registered · Vashi</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[3rem] border border-white/5"
          >
            <div className="space-y-8">
              {[
                { label: "10+", suffix: "Years", desc: "Of building measurable growth" },
                { label: "40+", suffix: "Brands", desc: "Trusted long-term partners" },
                { label: "20+", suffix: "Team", desc: "Designers, devs, marketers, strategists" },
                { label: "90%", suffix: "Retention", desc: "Of clients stay with us year over year" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-baseline gap-4 pb-6 border-b border-white/5 last:border-b-0"
                >
                  <div className="font-headline text-4xl font-black text-white tracking-tighter w-24">{metric.label}</div>
                  <div>
                    <div className="text-white font-bold text-sm uppercase tracking-widest">{metric.suffix}</div>
                    <div className="text-neutral-500 text-xs">{metric.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 lg:px-12 bg-surface-container/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading eyebrow="10-Year Journey" headline="Milestones along the way." />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

            <div className="space-y-16">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(255,106,0,0.6)] z-10" />

                  <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                    <div className="font-headline text-5xl md:text-6xl font-black text-primary tracking-tighter mb-3">
                      {item.year}
                    </div>
                    <h4 className="font-headline text-2xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-neutral-400 font-light leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeading eyebrow="News & Events" headline="Where we've been lately." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative p-8 rounded-3xl bg-surface-container/40 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-primary mb-3 font-headline">
                    {item.date}
                  </div>
                  <h4 className="font-headline text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h4>
                  <div className="text-xs text-neutral-500 mb-4 uppercase tracking-widest">{item.location}</div>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto relative z-10"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Write your story with us.
          </h2>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto mb-10">
            Whether you&apos;re starting from a coffee conversation or scaling an established brand — let&apos;s build something that lasts.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-12 py-6 rounded-full text-base font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
      <ChatWidget />
    </main>
  );
}