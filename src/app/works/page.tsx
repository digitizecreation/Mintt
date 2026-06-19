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

const VERTICALS = [
  {
    name: "Manufacturing",
    description: "Lead generation and digital ecosystems for factory and industrial B2B brands — built to convert technical buyers.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    text: "text-orange-500",
  },
  {
    name: "Engineering",
    description: "Web platforms and marketing systems for engineering service firms, OEMs, and precision manufacturing exporters.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    text: "text-cyan-500",
  },
  {
    name: "Healthcare",
    description: "Patient acquisition and trust-building digital presence for hospitals, diagnostics, and specialty clinics.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/20",
    text: "text-pink-500",
  },
  {
    name: "Real Estate",
    description: "High-intent lead funnels for developers, brokers, and luxury property brands — landing pages built to convert.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
  },
  {
    name: "Technology",
    description: "SaaS marketing, product launches, and developer-friendly content for B2B tech and software companies.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    text: "text-blue-500",
  },
  {
    name: "B2B",
    description: "Account-based marketing, sales enablement, and CRM-led growth systems built for complex B2B sales cycles.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    text: "text-purple-500",
  },
];

const CLIENTS = [
  "Abhinandan Lodha", "Expert Exim", "Sourimpex", "Muscle Gear",
  "OneX Nutrition", "The Neon Art", "Mechano Robust", "Vatsalya Trust",
  "National Bulls", "Child Learning Centre", "SVJCT", "Kaffe Nostalgic", "Mintt CRM",
];

export default function WorksPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Industries / Verticals"
            headline={
              <>
                Built for B2B. <span className="italic font-light text-primary">Engineered for results.</span>
              </>
            }
            subheadline="We focus on B2B, manufacturing, and healthcare — but our systems adapt to any brand that demands measurable growth."
          />
        </div>
      </section>

      {/* Verticals grid */}
      <section className="py-16 px-6 lg:px-12 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERTICALS.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                <div className="relative p-8 rounded-3xl bg-surface-container/40 border border-white/5 overflow-hidden h-full group-hover:border-white/20 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border ${v.border} flex items-center justify-center mb-6 ${v.text} group-hover:scale-110 transition-transform duration-500`}>
                      {v.icon}
                    </div>
                    <h4 className="font-headline text-2xl font-bold text-white mb-3">{v.name}</h4>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {v.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <section className="py-32 bg-surface overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mb-16 px-6 max-w-screen-2xl mx-auto">
          <SectionHeading eyebrow="Portfolio" headline="Brands We've Helped Grow" />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface via-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-surface via-surface to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div key={`${client}-${i}`} className="flex items-center gap-12">
                  <div className="group relative px-8 py-6 glass-card rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 cursor-default">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-all">
                        <span className="text-lg font-headline font-black text-white/60 group-hover:text-primary transition-colors">
                          {client.charAt(0)}
                        </span>
                      </div>
                      <span className="text-white/60 text-lg font-headline font-bold uppercase tracking-wider group-hover:text-white transition-colors whitespace-nowrap">
                        {client}
                      </span>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center gap-16"
        >
          {[
            { value: "40+", label: "Partner Brands" },
            { value: "10+", label: "Years of Trust" },
            { value: "50+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-headline font-black text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-surface text-center">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6"
          >
            See the work, <span className="italic font-light text-primary">in detail.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-xl mx-auto font-light mb-12"
          >
            Three featured case studies showing the journey from strategy to measurable ROI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/case-studies"
              className="inline-block bg-primary text-white px-12 py-6 rounded-full text-base font-black uppercase tracking-widest hover:shadow-[0_0_60px_rgba(255,106,0,0.5)] transition-all"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <ChatWidget />
    </main>
  );
}