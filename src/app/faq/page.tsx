"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ChatWidget from "../_components/chat-widget";
import { FAQ, FAQ_CATEGORIES, type FaqCat } from "../_components/faq-data";
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

export default function FaqPage() {
  // Track an open question per category so each can have one expanded at a time.
  const [openByCat, setOpenByCat] = useState<Record<FaqCat, number | null>>({
    general: null,
    web: null,
    marketing: null,
    content: null,
    pricing: null,
    support: null,
  });
  const [activeCat, setActiveCat] = useState<FaqCat>("general");

  function toggle(cat: FaqCat, idx: number) {
    setOpenByCat((prev) => ({ ...prev, [cat]: prev[cat] === idx ? null : idx }));
    setActiveCat(cat);
  }

  const activeItems = FAQ[activeCat].items;

  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-12 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            headline={
              <>
                Questions, <span className="italic font-light text-primary">answered.</span>
              </>
            }
            subheadline="Everything you need to know about working with mintt. Can't find what you're looking for? Drop us a message — or chat with Aria, our AI assistant."
          />
        </div>
      </section>

      {/* Category tabs */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {FAQ_CATEGORIES.map((c) => (
              <motion.button
                key={c.cat}
                type="button"
                onClick={() => setActiveCat(c.cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest font-headline border transition-all ${
                  activeCat === c.cat
                    ? "bg-primary text-white border-primary shadow-[0_0_30px_rgba(255,106,0,0.35)]"
                    : "bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span className="mr-2">{c.icon}</span>
                {c.title.replace(/^\S+\s/, "")}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Active category accordion */}
      <section className="py-12 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="sticky top-32"
            >
              <div className="text-6xl mb-4">{FAQ_CATEGORIES.find((c) => c.cat === activeCat)?.icon}</div>
              <h3 className="font-headline text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                {FAQ[activeCat].title}
              </h3>
              <p className="text-neutral-400 text-base font-light leading-relaxed mb-8">
                {FAQ_CATEGORIES.find((c) => c.cat === activeCat)?.sub}
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">
                {activeItems.length} questions
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {activeItems.map((item, i) => {
                  const isOpen = openByCat[activeCat] === i;
                  return (
                    <motion.div
                      key={`${activeCat}-${i}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="rounded-2xl border border-white/5 overflow-hidden bg-surface-container/40 hover:border-white/10 transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(activeCat, i)}
                        className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left"
                      >
                        <span className="font-headline text-base md:text-lg font-bold text-white">
                          {item.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="w-8 h-8 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center text-primary"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 md:px-8 pb-6 text-neutral-400 font-light leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-32 px-6 lg:px-12 bg-surface-container/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6"
          >
            Still have <span className="italic font-light text-primary">questions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-xl mx-auto font-light mb-10"
          >
            Chat with Aria in the corner of the screen, or reach out directly — we usually reply within an hour.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-10 py-5 font-bold text-sm tracking-widest uppercase rounded-full hover:shadow-[0_0_40px_rgba(255,106,0,0.5)] transition-all"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      <SiteFooter />
      <ChatWidget />
    </main>
  );
}