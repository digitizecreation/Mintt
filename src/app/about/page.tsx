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

const PILLARS = [
  {
    title: "MSME Registered Company",
    desc: "Certified credibility enabling us to work with startups to established enterprises with strong professional standards.",
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/20",
    text: "text-amber-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Digital Solutions",
    desc: "From strategy and design to development and performance marketing — all under one roof in Vashi, Navi Mumbai.",
    color: "from-primary/20 to-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Women-Led Innovation",
    desc: "Founded with passion and purpose — a creative-technical agency built from the ground up in India's entrepreneurial ecosystem.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20",
    text: "text-purple-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "10+", label: "Years", desc: "Of measurable growth" },
  { value: "40+", label: "Brands", desc: "Trusted long-term partners" },
  { value: "20+", label: "Team", desc: "Designers, devs, marketers" },
  { value: "100+", label: "Reviews", desc: "4.2★ average rating" },
];

const WHY_LEADERS = [
  {
    title: "Industry Specialization",
    desc: "We focus on B2B, manufacturing, and healthcare — verticals where deep domain understanding compounds into real ROI.",
  },
  {
    title: "360° Capabilities",
    desc: "Marketing, technology, AI & intelligence, and design under one roof. No handoffs, no fragmented execution.",
  },
  {
    title: "Outcome-Based Pricing",
    desc: "Tied to KPIs you care about. We win when you win — that's why 90% of clients stay with us year over year.",
  },
  {
    title: "Data-First Decisions",
    desc: "Every campaign, every line of code, every design choice is informed by analytics and customer behavior.",
  },
  {
    title: "Senior-Led Engagements",
    desc: "Senior strategists own every account — not handed off to juniors after the contract is signed.",
  },
];

const TRUSTED_BY = ["ASA", "Vatsalya", "Orthocare Physio", "Swastika Hospital", "Panocean"];

export default function AboutPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="About Us"
            headline={
              <>
                Who we <span className="italic font-light text-primary">are.</span>
              </>
            }
            subheadline="A women-led, MSME registered 360° marketing & development agency — born from a simple coffee conversation, built for measurable growth."
          />
        </div>
      </section>

      {/* Intro two-column */}
      <section className="py-16 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-xl mb-12 font-light">
              <p>
                Mintt is a women-led startup born from a simple coffee conversation, driven by creativity and ambition. With 10+ years of experience and 40+ brands served, we specialize in SEO, web development, SaaS solutions, and Meta ads.
              </p>
              <p>
                We focus on building strong digital foundations, creating impactful designs, and delivering measurable growth. Our approach blends innovation, strategy, and deep understanding of modern business needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
              <div>
                <div className="text-5xl font-headline font-black text-white mb-2 tracking-tighter">4.2★</div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Rating · 100+ Reviews</p>
              </div>
              <div>
                <div className="text-5xl font-headline font-black text-white mb-2 tracking-tighter">MSME</div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Registered · Vashi</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {PILLARS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group relative overflow-hidden"
              >
                <div className="relative p-8 rounded-3xl bg-surface-container/50 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border ${card.border} ${card.text} group-hover:scale-110 transition-transform duration-500`}>
                        {card.icon}
                      </div>
                    </div>

                    <h4 className="text-white font-headline text-xl font-bold mb-3">{card.title}</h4>
                    <p className="text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-20 px-6 lg:px-12 bg-surface-container/20 border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-headline text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                {s.value}
              </div>
              <div className="font-headline text-sm font-bold text-primary uppercase tracking-widest mb-1">
                {s.label}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-16 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 font-headline">
              Trusted by industry leaders
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {TRUSTED_BY.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl md:text-3xl font-headline font-black text-white/30 hover:text-white transition-colors cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why industry leaders choose mintt */}
      <section className="py-32 px-6 lg:px-12 bg-surface-container/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Why Industry Leaders Choose Mintt"
            headline={
              <>
                90% client <span className="italic font-light text-primary">retention.</span>
              </>
            }
            subheadline="Nine out of ten brands that work with mintt continue to scale with us. Here's why."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_LEADERS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl bg-surface-container/40 border border-white/5 overflow-hidden h-full group-hover:border-white/15 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 right-6">
                    <span className="text-4xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative">
                    <h4 className="text-white font-headline text-lg font-bold mb-3">{item.title}</h4>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.4, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-surface text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6"
          >
            Ready to <span className="italic font-light text-primary">build together?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-xl mx-auto font-light mb-12"
          >
            Browse our services or jump straight to a conversation with the team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/services"
              className="bg-white/5 text-white px-10 py-5 font-bold text-sm tracking-widest uppercase rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-10 py-5 font-bold text-sm tracking-widest uppercase rounded-full hover:shadow-[0_0_40px_rgba(255,106,0,0.5)] transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <ChatWidget />
    </main>
  );
}