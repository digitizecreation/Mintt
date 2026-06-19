"use client";

import { motion } from "framer-motion";
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

export default function ContactPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeading
            eyebrow="Contact"
            headline={
              <>
                Let&apos;s <span className="italic font-light text-primary">build together.</span>
              </>
            }
            subheadline="Ready to transform your brand? Drop us a message and we'll respond within 24 hours. No fluff — just action and measurable results."
          />
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-10">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Call Us",
                  value: "+91 81084 05170",
                  href: "tel:+918108405170",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email Us",
                  value: "contact.mintt.ai@gmail.com",
                  href: "mailto:contact.mintt.ai@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.22 13.63c-.24.68-1.37 1.21-1.91 1.29-.51.08-1.02.24-3.42-.83-2.89-1.23-4.75-4.34-4.89-4.54-.15-.2-1.17-1.55-1.17-2.96 0-1.41.74-2.1.99-2.39.25-.29.68-.38.89-.38.22 0 .43 0 .61.01.19 0 .45-.07.7.54.26.64.88 2.23.96 2.39.08.16.13.35.03.56-.1.21-.15.35-.29.54-.15.19-.31.4-.44.54-.15.15-.3.32-.15.6.15.27.68 1.12 1.45 1.81.99.9 1.82 1.18 2.09 1.31.26.13.42.11.58-.06.16-.18.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.87.27.14.45.21.52.32.06.11.06.64-.18 1.32z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "+91 95944 01644",
                  href: "https://wa.me/919594401644",
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-xl glass-card border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 text-white/60">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">{item.label}</div>
                    <div className="text-white font-bold text-xl group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}

              <div className="flex gap-4 pt-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.22 13.63c-.24.68-1.37 1.21-1.91 1.29-.51.08-1.02.24-3.42-.83-2.89-1.23-4.75-4.34-4.89-4.54-.15-.2-1.17-1.55-1.17-2.96 0-1.41.74-2.1.99-2.39.25-.29.68-.38.89-.38.22 0 .43 0 .61.01.19 0 .45-.07.7.54.26.64.88 2.23.96 2.39.08.16.13.35.03.56-.1.21-.15.35-.29.54-.15.19-.31.4-.44.54-.15.15-.3.32-.15.6.15.27.68 1.12 1.45 1.81.99.9 1.82 1.18 2.09 1.31.26.13.42.11.58-.06.16-.18.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.87.27.14.45.21.52.32.06.11.06.64-.18 1.32z" />
                      </svg>
                    ),
                    href: "https://wa.me/918108405170",
                    label: "WhatsApp",
                    hover: "hover:text-[#25D366] hover:border-[#25D366]/50",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                    href: "https://instagram.com/mintt.co.in",
                    label: "Instagram",
                    hover: "hover:text-[#E1306C] hover:border-[#E1306C]/50",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    href: "https://www.linkedin.com/company/minttagency",
                    label: "LinkedIn",
                    hover: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 ${social.hover}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5">
                <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-2">Visit Us</div>
                <div className="text-white text-lg font-light">
                  Vashi, Navi Mumbai,
                  <br />
                  Maharashtra, India
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[2rem] border border-white/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Your Name</label>
                  <input
                    className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white placeholder-neutral-600 font-light outline-none transition-all"
                    placeholder="John Doe"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Email Address</label>
                  <input
                    className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white placeholder-neutral-600 font-light outline-none transition-all"
                    placeholder="john@company.com"
                    type="email"
                    name="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Phone</label>
                  <input
                    className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white placeholder-neutral-600 font-light outline-none transition-all"
                    placeholder="+91 00000 00000"
                    type="tel"
                    name="phone"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Service</label>
                  <select
                    name="service"
                    className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white font-light outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-surface">
                      Select a service
                    </option>
                    <option value="seo" className="bg-surface">
                      SEO Mastery
                    </option>
                    <option value="web" className="bg-surface">
                      Web Development
                    </option>
                    <option value="saas" className="bg-surface">
                      SaaS Solutions
                    </option>
                    <option value="meta" className="bg-surface">
                      Meta Ads
                    </option>
                    <option value="crm" className="bg-surface">
                      Mintt CRM Demo
                    </option>
                    <option value="branding" className="bg-surface">
                      Branding
                    </option>
                    <option value="content" className="bg-surface">
                      Content Creation
                    </option>
                    <option value="ai" className="bg-surface">
                      AI Solutions
                    </option>
                    <option value="full" className="bg-surface">
                      Full 360° Package
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">About Your Project</label>
                <textarea
                  className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white placeholder-neutral-600 h-40 font-light outline-none transition-all resize-none"
                  placeholder="Describe your vision..."
                  name="message"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-6 font-bold text-sm tracking-widest uppercase rounded-xl hover:shadow-[0_0_40px_rgba(255,106,0,0.4)] transition-all flex items-center justify-center gap-3"
              >
                Send Message ✦
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <ChatWidget />
    </main>
  );
}