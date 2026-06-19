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

const CASE_STUDIES = [
  {
    client: "Bharat Fritz Werner Ltd",
    industry: "Manufacturing",
    summary:
      "A legacy machine-tool manufacturer needed digital presence that matched the precision of their products. We rebuilt the website, launched targeted LinkedIn funnels, and built a CRM pipeline that turned trade-show leads into qualified opportunities.",
    kpis: [
      { value: "+187%", label: "Qualified Leads" },
      { value: "3.4×", label: "Website Engagement" },
      { value: "6 mo", label: "Engagement" },
    ],
    accent: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/30",
  },
  {
    client: "RedTaxi Enterprise",
    industry: "B2B / Technology",
    summary:
      "Enterprise mobility platform scaling from regional to national. We built end-to-end growth systems — SEO content, paid campaigns, and an ABM playbook — that took them from a regional player to a recognized national brand.",
    kpis: [
      { value: "+312%", label: "Pipeline Growth" },
      { value: "2.1×", label: "MQL-to-SQL" },
      { value: "8 mo", label: "Engagement" },
    ],
    accent: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
  },
  {
    client: "GKNM Medical Center",
    industry: "Healthcare",
    summary:
      "Multi-specialty hospital group needed to compete with larger chains on patient acquisition. We built department-level landing pages, optimized for local SEO, and ran Meta campaigns that drove consistent appointment bookings.",
    kpis: [
      { value: "+248%", label: "Appointments" },
      { value: "−42%", label: "Cost per Lead" },
      { value: "12 mo", label: "Engagement" },
    ],
    accent: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/30",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Case Studies"
            headline={
              <>
                Stories of <span className="italic font-light text-primary">measurable growth.</span>
              </>
            }
            subheadline="Three featured engagements showing how our 360° approach turns strategy into compounding ROI."
          />
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-16 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto space-y-8">
          {CASE_STUDIES.map((cs, i) => (
            <motion.article
              key={cs.client}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.7, type: "spring", stiffness: 80 }}
              className={`group relative rounded-[2rem] bg-surface-container/40 border ${cs.border} overflow-hidden hover:border-white/20 transition-all duration-500`}
            >
              {/* Accent background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cs.accent} opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`} />

              {/* Decorative glow */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="relative p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest font-headline">
                      {cs.industry}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 font-headline">
                      Case Study / 0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-headline text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                    {cs.client}
                  </h3>

                  <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                    {cs.summary}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-white font-headline font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    Discuss a similar project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="lg:col-span-5">
                  <div className="grid grid-cols-1 gap-4">
                    {cs.kpis.map((kpi, j) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.1 + 0.3 }}
                        className="glass-card p-6 rounded-2xl border border-white/10 flex items-baseline justify-between"
                      >
                        <div>
                          <div className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter mb-1">
                            {kpi.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                            {kpi.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 90% retention claim */}
      <section className="py-32 px-6 lg:px-12 bg-primary relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="font-headline text-[12rem] lg:text-[16rem] font-black text-white select-none whitespace-nowrap">
            90%
          </span>
        </motion.div>

        <div className="max-w-screen-2xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              90% Client Retention
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed">
              Nine out of ten brands that work with mintt continue to scale with us. We measure success by long-term partnerships, not one-off engagements.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-12 py-6 rounded-full text-base font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Become a Case Study
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <ChatWidget />
    </main>
  );
}