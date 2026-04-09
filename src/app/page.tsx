"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function GlowOrb({ className, size = 400 }: { className?: string; size?: number }) {
  return (
    <div
      className={`absolute rounded-full blur-[150px] pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

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

function MarqueeItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="inline-block px-8 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
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

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`backdrop-blur-xl bg-surface-container/60 rounded-[2rem] border border-white/5 p-8 md:p-12 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ServiceCard({ number, icon, title, description, tags, index }: { number: string; icon: React.ReactNode; title: string; description: string; tags: string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group relative flex flex-col h-full"
      style={{ perspective: "1000px" }}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
      <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

      <div className="relative backdrop-blur-xl bg-surface-container/60 rounded-[2rem] border border-white/5 p-8 md:p-10 flex flex-col h-full overflow-hidden group-hover:border-primary/30 transition-all duration-500">
        {/* Animated background glow */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Particle sparkles on hover */}
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

        {/* Header */}
        <div className="flex justify-between items-start mb-8 relative z-10">
          <motion.span
            className="font-headline text-xs font-black text-white/20 group-hover:text-primary/40 transition-colors duration-500"
            whileHover={{ scale: 1.1 }}
          >
            {number}
          </motion.span>
          <motion.div
            className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 border border-white/5 group-hover:border-primary/30"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            {icon}
          </motion.div>
        </div>

        {/* Title with animated underline */}
        <div className="relative mb-6">
          <h4 className="font-headline text-2xl font-bold text-white group-hover:text-white transition-colors">{title}</h4>
          <motion.div
            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          />
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-10 flex-grow font-light group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>

        {/* Tags with stagger animation */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 + 0.4 }}
              className="px-3 py-1.5 bg-white/5 rounded-full text-[9px] uppercase font-bold text-neutral-400 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Bottom accent line */}
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const clients = [
    "Abhinandan Lodha", "Expert Exim", "Sourimpex", "Muscle Gear",
    "OneX Nutrition", "The Neon Art", "Mechano Robust", "Vatsalya Trust",
    "National Bulls", "Child Learning Centre", "SVJCT", "Kaffe Nostalgic", "Mintt CRM"
  ];

  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <ScanlineOverlay />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-surface/80 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-white font-headline flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Mintt
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex gap-10 font-headline tracking-tight text-xs uppercase font-bold"
          >
            {["About", "Services", "Clients", "CRM", "Blog", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-primary transition-colors duration-300">
                {item}
              </a>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] transition-all"
          >
            Start a Project
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <GlowOrb className="bg-primary/20 -top-24 -left-24" size={500} />
        <GlowOrb className="bg-primary/10 top-1/2 -right-32" size={600} />

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-6 flex items-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[1px] bg-primary"
              />
              <span className="font-headline text-primary tracking-[0.3em] text-[10px] uppercase font-bold">
                The Future of Digital Marketing
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] xl:text-[11rem] font-black text-white leading-[0.85] tracking-tighter mb-6 md:mb-8 relative">
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                className="inline-block"
              >
                MARKETING
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="inline-block text-primary italic font-light"
              >
                Reimagined.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-neutral-400 text-xl max-w-lg mb-12 leading-relaxed font-light"
            >
              No hype. No technical jargon. We engineer performance-driven digital ecosystems for visionary brands that demand measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 sm:gap-8 mb-8 sm:mb-12 py-6 sm:py-8 border-y border-white/10"
            >
              {[
                { value: "4.5+", label: "Years" },
                { value: "30+", label: "Brands" },
                { value: "14+", label: "Experts" },
                { value: "4.2★", label: "Rated" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-col"
                >
                  <span className="text-white font-headline text-3xl font-black">{stat.value}</span>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-4 sm:gap-6"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 sm:px-10 py-4 sm:py-5 font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full flex items-center gap-3 hover:shadow-[0_0_40px_rgba(255,106,0,0.5)] transition-all"
              >
                Our Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 text-white px-10 py-5 font-bold text-sm tracking-widest uppercase rounded-full border border-white/10 hover:bg-white/10 transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-[150px]" />

              {/* Animated 3D Cube */}
              <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                <motion.div
                  animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative w-48 h-48 transform-style-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Cube faces */}
                  {[
                    { transform: 'translateZ(96px)', bg: 'bg-primary/40' },
                    { transform: 'rotateY(180deg) translateZ(96px)', bg: 'bg-primary/30' },
                    { transform: 'rotateY(90deg) translateZ(96px)', bg: 'bg-primary/35' },
                    { transform: 'rotateY(-90deg) translateZ(96px)', bg: 'bg-primary/35' },
                    { transform: 'rotateX(90deg) translateZ(96px)', bg: 'bg-primary/45' },
                    { transform: 'rotateX(-90deg) translateZ(96px)', bg: 'bg-primary/25' },
                  ].map((face, i) => (
                    <motion.div
                      key={i}
                      className={`absolute inset-0 ${face.bg} border border-primary/50 backdrop-blur-sm`}
                      style={{
                        transform: face.transform,
                        backfaceVisibility: 'hidden'
                      }}
                    />
                  ))}

                  {/* Inner glow core */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-1/4 bg-primary/60 rounded-full blur-xl"
                  />
                </motion.div>
              </div>

              {/* Orbiting particles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full"
                    style={{
                      top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                      left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: 'center' }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="25%"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: 'center' }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A00" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A00" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FFB694" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating HUD elements - GROWTH (top-right) */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute top-8 right-4 sm:right-0 glass-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl z-20 w-48 sm:w-auto"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                    <motion.svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </motion.svg>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Growth</span>
                </div>
                <div className="h-1.5 w-32 bg-white/5 rounded-full mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 2, duration: 1 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-headline font-bold text-white">+124.5%</span>
                  <motion.span
                    className="text-xs text-green-500 font-bold"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ↑
                  </motion.span>
                </div>
              </motion.div>

              {/* Floating HUD elements - LEADS (bottom-right) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-12 right-4 sm:right-12 glass-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl z-20 w-40 sm:w-auto"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <motion.svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Leads</span>
                </div>
                <span className="text-2xl font-headline font-bold text-white">2,847</span>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/50 border-2 border-surface"
                        initial={{ scale: 0, x: -10 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 2.2 + i * 0.1 }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-500">+128 this week</span>
                </div>
              </motion.div>

              {/* Additional stat card - bottom-left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1 }}
                className="absolute bottom-24 left-0 glass-card p-4 rounded-2xl border border-white/10 shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Conversion</div>
                    <div className="text-lg font-headline font-bold text-white">8.4%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface border-y border-white/5 py-12"
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-wrap justify-between items-center gap-10">
          {[
            { icon: "👩‍💼", label: "Women-Led Startup" },
            { icon: "✓", label: "MSME Registered" },
            { icon: "📍", label: "Vashi, Navi Mumbai" },
            { icon: "★", label: "4.2★ Rated Agency" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-all cursor-default"
            >
              <span className="text-primary text-xl">{item.icon}</span>
              <span className="font-headline font-bold text-xs tracking-[0.2em] uppercase">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Who We Are */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                eyebrow="Who We Are"
                headline={
                  <>
                    From coffee <span className="italic font-light text-primary">conversations</span> to creative growth.
                  </>
                }
              />

              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-xl mb-12 font-light">
                <p>
                  Mintt is a women-led startup born from a simple coffee conversation, driven by creativity and ambition. With 4.5+ years of experience and 30+ brands served, we specialize in SEO, web development, SaaS solutions, and Meta ads.
                </p>
                <p>
                  We focus on building strong digital foundations, creating impactful designs, and delivering measurable growth. Our approach blends innovation, strategy, and deep understanding of modern business needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-5xl font-headline font-black text-white mb-2 tracking-tighter">4.2★</div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Rating · 50+ Reviews</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-5xl font-headline font-black text-white mb-2 tracking-tighter">30+</div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Brands Served</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                  title: "MSME Registered Company",
                  desc: "Certified credibility enabling us to work with startups to established enterprises with strong professional standards.",
                  color: "from-amber-500/20 to-amber-600/10",
                  borderColor: "border-amber-500/20",
                  textColor: "text-amber-500",
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0zM12 3v18M3 12h18" /></svg>,
                  title: "End-to-End Digital Solutions",
                  desc: "From strategy and design to development and performance marketing — all under one roof in Vashi, Navi Mumbai.",
                  color: "from-primary/20 to-primary/10",
                  borderColor: "border-primary/20",
                  textColor: "text-primary",
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                  title: "Women-Led Innovation",
                  desc: "Founded with passion and purpose — a creative-technical agency built from the ground up in India's entrepreneurial ecosystem.",
                  color: "from-purple-500/20 to-purple-600/10",
                  borderColor: "border-purple-500/20",
                  textColor: "text-purple-500",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-8 rounded-3xl bg-surface-container/50 border border-white/5 group-hover:border-white/10 transition-all duration-500"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border ${card.borderColor} ${card.textColor} group-hover:scale-110 transition-transform duration-500`}
                        >
                          {card.icon}
                        </div>

                        <motion.div
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </div>

                      <h4 className="text-white font-headline text-xl font-bold mb-3 group-hover:text-white transition-colors">{card.title}</h4>

                      <p className="text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors">{card.desc}</p>

                      {/* Animated underline */}
                      <div className={`h-0.5 w-0 group-hover:w-16 bg-gradient-to-r ${card.color.replace('/20', '').replace('/10', '')} mt-6 transition-all duration-500 rounded-full`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 lg:px-12 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <SectionHeading
              eyebrow="Our Core Services"
              headline={
                <>
                  Solutions built for the <span className="text-primary italic font-light">digital age.</span>
                </>
              }
            />
            <p className="text-neutral-500 font-headline text-xs uppercase tracking-[0.3em] font-bold pb-4">Comprehensive 360° Growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              index={0}
              number="01"
              icon={<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              title="SEO Mastery"
              description="Technical SEO, content strategy, and authority building that delivers lasting, compounding results."
              tags={["On-Page SEO", "Link Building", "Local SEO"]}
            />
            <ServiceCard
              index={1}
              number="02"
              icon={<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
              title="Web Development"
              description="From landing pages to complex web applications — every pixel precision-crafted for performance."
              tags={["React", "Next.js", "Laravel"]}
            />
            <ServiceCard
              index={2}
              number="03"
              icon={<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
              title="SaaS Solutions"
              description="Multi-tenancy, CI/CD pipelines, and cloud-native architecture built for enterprise scale."
              tags={["AWS/Azure", "CI/CD", "Custom SaaS"]}
            />
            <ServiceCard
              index={3}
              number="04"
              icon={<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>}
              title="Meta Ads"
              description="Data-driven targeting combined with creative storytelling for maximum ROI across funnels."
              tags={["Facebook", "Instagram", "Lead Gen"]}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 lg:px-12 bg-surface relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="absolute inset-0 border border-primary/5 rounded-full" />
          <div className="absolute inset-1/4 border border-white/5 rounded-full" />
        </motion.div>

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading eyebrow="Technologies" headline="Our Tech Stack" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Front-End",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
                color: "from-cyan-500 to-blue-500",
                items: [
                  { name: "React & Next.js", desc: "Fast, SEO-friendly web apps", icon: ">" },
                  { name: "TypeScript", desc: "Error catching at scale", icon: ">" },
                  { name: "Tailwind CSS", desc: "Modern, responsive designs", icon: ">" },
                  { name: "Framer Motion", desc: "Fluid animations", icon: ">" },
                ],
              },
              {
                category: "PHP Builder",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                color: "from-purple-500 to-indigo-500",
                items: [
                  { name: "Laravel", desc: "Rapid product to market", icon: ">" },
                  { name: "Artisan CLI", desc: "Database automation", icon: ">" },
                  { name: "Blade & Livewire", desc: "Dynamic JS-less interfaces", icon: ">" },
                ],
              },
              {
                category: "Back-End",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
                color: "from-emerald-500 to-teal-500",
                items: [
                  { name: "Node.js", desc: "Fast event-driven engine", icon: ">" },
                  { name: ".NET 10", desc: "Enterprise-grade systems", icon: ">" },
                  { name: "PostgreSQL", desc: "Complex data relations", icon: ">" },
                  { name: "Microservices", desc: "Scalable architecture", icon: ">" },
                ],
              },
              {
                category: "SaaS & Ops",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
                color: "from-orange-500 to-red-500",
                items: [
                  { name: "Multi-tenancy", desc: "Strict isolated data", icon: ">" },
                  { name: "CI/CD Pipelines", desc: "Push-to-live automation", icon: ">" },
                  { name: "Cloud-Native", desc: "AWS/Azure auto-scaling", icon: ">" },
                  { name: "Security First", desc: "Encryption & RBAC", icon: ">" },
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-surface-container/50 border border-white/5 p-8 h-full group-hover:border-white/20 transition-all duration-500"
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />

                  {/* Header */}
                  <div className="relative flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.color} p-[1px] group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h4 className="font-headline text-white text-xl font-bold">{section.category}</h4>
                  </div>

                  {/* Divider with animation */}
                  <motion.div
                    className={`h-0.5 bg-gradient-to-r ${section.color} mb-6`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  />

                  {/* Items */}
                  <ul className="relative space-y-4">
                    {section.items.map((item, j) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.1 + 0.4 }}
                        className="group/item"
                      >
                        <motion.div
                          className="relative p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 cursor-default"
                          whileHover={{ x: 8 }}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <strong className="text-white block text-sm mb-1 group-hover/item:text-primary transition-colors">{item.name}</strong>
                              <span className="text-neutral-500 text-xs">{item.desc}</span>
                            </div>
                            <motion.span
                              className={`text-transparent bg-clip-text bg-gradient-to-r ${section.color} opacity-0 group-hover/item:opacity-100 text-sm font-bold`}
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                            >
                              {item.icon}
                            </motion.span>
                          </div>
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section id="clients" className="py-32 bg-surface overflow-hidden relative">
        {/* Top border line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section Header */}
        <div className="mb-16 px-6 max-w-screen-2xl mx-auto">
          <SectionHeading eyebrow="Portfolio" headline="Brands We've Helped Grow" />
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface via-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-surface via-surface to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients].map((client, i) => (
                <motion.div
                  key={`${client}-${i}`}
                  className="flex items-center gap-12"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Brand Card */}
                  <div className="group relative px-8 py-6 glass-card rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      {/* Logo placeholder / Initial */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-all">
                        <span className="text-lg font-headline font-black text-white/60 group-hover:text-primary transition-colors">
                          {client.charAt(0)}
                        </span>
                      </div>

                      {/* Brand Name */}
                      <div>
                        <span className="text-white/60 text-lg font-headline font-bold uppercase tracking-wider group-hover:text-white transition-colors whitespace-nowrap">
                          {client}
                        </span>
                      </div>

                      {/* Arrow indicator on hover */}
                      <div className="w-8 h-8 rounded-full bg-primary/0 group-hover:bg-primary/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Stats bar below marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center gap-16"
        >
          {[
            { value: "30+", label: "Partner Brands" },
            { value: "4.5+", label: "Years of Trust" },
            { value: "50+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-headline font-black text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* CRM Section */}
      <section id="crm" className="py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] rounded-[3rem] p-12 lg:p-24 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,106,0,0.5)]">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="font-headline text-2xl font-bold text-white tracking-tighter">Mintt CRM</span>
                </div>

                <h3 className="font-headline text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tighter leading-[1.1]">
                  Intelligent Automation for <span className="text-primary italic font-light">Global Sales Teams.</span>
                </h3>

                <p className="text-neutral-400 text-lg mb-12 font-light leading-relaxed">
                  Join 15,000+ companies using Mintt to streamline sales, automate follow-ups, and harvest better data without the clutter. Grow your relationships the natural way.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {[
                    { title: "Data-Driven Decisions", desc: "Real-time pipeline visualization" },
                    { title: "Enhanced Accountability", desc: "Detailed logs & performance tracking" },
                    { title: "Operational Efficiency", desc: "Automated deadline tracking" },
                    { title: "Secure Cloud Access", desc: "Encrypted logins & high uptime" },
                  ].map((feature) => (
                    <li key={feature.title} className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="text-white font-bold text-sm">{feature.title}</h5>
                        <p className="text-neutral-500 text-xs mt-1">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-10 py-5 font-bold text-sm tracking-widest uppercase rounded-full hover:shadow-[0_0_40px_rgba(255,106,0,0.5)] transition-all"
                >
                  Book a Demo →
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Main Dashboard Card */}
                <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="bg-gradient-to-br from-surface-container to-surface rounded-2xl p-6 overflow-hidden">
                    {/* Header Stats Row */}
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Active Users</div>
                        <div className="text-3xl font-headline font-black text-white">15k+</div>
                        <div className="flex items-center gap-1 mt-1">
                          <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          <span className="text-green-500 text-xs font-bold">+18.2%</span>
                          <span className="text-neutral-600 text-[10px]">vs last month</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">Live</span>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="relative h-40 mb-6">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-neutral-600 font-bold">
                        <span>12k</span>
                        <span>8k</span>
                        <span>4k</span>
                        <span>0</span>
                      </div>

                      {/* Chart Grid Lines */}
                      <div className="absolute left-8 right-0 top-0 h-full flex flex-col justify-between">
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className="h-px bg-white/5 w-full" />
                        ))}
                      </div>

                      {/* SVG Line Chart */}
                      <svg className="absolute left-8 right-0 top-0 h-full w-[calc(100%-2rem)]" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          d="M0,80 Q30,70 60,60 T120,50 T180,35 T240,25 T300,15 L300,100 L0,100 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Line */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          d="M0,80 Q30,70 60,60 T120,50 T180,35 T240,25 T300,15"
                          fill="none"
                          stroke="#FF6A00"
                          strokeWidth="2"
                        />
                        {/* Data points */}
                        {[
                          { x: 0, y: 80 },
                          { x: 60, y: 60 },
                          { x: 120, y: 50 },
                          { x: 180, y: 35 },
                          { x: 240, y: 25 },
                          { x: 300, y: 15 },
                        ].map((point, i) => (
                          <motion.circle
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i + 1 }}
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="#FF6A00"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                          />
                        ))}
                      </svg>
                    </div>

                    {/* X-axis labels */}
                    <div className="flex justify-between pl-8 text-[10px] text-neutral-600 font-bold">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>
                </div>

                {/* Revenue Growth Card - Floating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white text-black p-5 rounded-[1.5rem] shadow-2xl min-w-[140px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-50">Revenue</span>
                  </div>
                  <span className="block text-2xl font-black mb-1">+24.5%</span>
                  <div className="flex items-center gap-1">
                    <div className="flex-1 h-1 bg-black/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Small Stats Card - Floating Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="absolute -top-4 -right-4 glass-card p-4 rounded-xl border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Conversion</div>
                      <div className="text-lg font-headline font-black text-white">3.2%</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 lg:px-12 bg-surface relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <SectionHeading eyebrow="Methodology" headline="Our Process" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your brand, market, and goals. No templates — pure tailored insight.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
              { step: "02", title: "Design", desc: "Wireframes, moodboards, and blueprints. Creative and technical direction locked.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
              { step: "03", title: "Build", desc: "Development sprints, campaign setup, and production delivered on time.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
              { step: "04", title: "Launch", desc: "Go live, track every metric, and iterate. Strong focus on lasting ROI growth.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.7, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                {/* Connector line for desktop */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent z-0"
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                )}

                {/* Card */}
                <div className="relative p-8 rounded-3xl bg-surface-container/40 border border-white/5 overflow-hidden h-full group-hover:border-primary/30 transition-all duration-500"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(4)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="absolute w-1 h-1 bg-primary/60 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                          y: ["100%", "-10%"],
                          x: [`${15 + j * 25}%`, `${15 + j * 25 + (j % 2 === 0 ? 5 : -5)}%`],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + j * 0.5,
                          repeat: Infinity,
                          delay: j * 0.6,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>

                  {/* Step number with animated circle */}
                  <div className="relative mb-8">
                    <motion.div
                      className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center group-hover:from-primary/50 group-hover:to-primary/20 transition-all duration-500"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <span className="text-lg font-black text-white font-headline">{item.step}</span>
                      </motion.div>
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                  </div>

                  {/* Title with animated underline */}
                  <div className="relative mb-4">
                    <h4 className="font-headline text-white text-xl font-bold group-hover:text-white transition-colors">{item.title}</h4>
                    <motion.div
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.4, duration: 0.6 }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-300">{item.desc}</p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>

                  {/* Progress bar at bottom */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 lg:px-12 bg-surface-container/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <SectionHeading
              eyebrow="Advantages"
              headline={
                <>
                  Engineered for <span className="italic font-light text-primary">Excellence.</span>
                </>
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Result-Driven Approach", desc: "Everything we do is tied to measurable outcomes. ROI isn't a buzzword — it's our benchmark.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, gradient: "from-emerald-500/20 to-emerald-600/5" },
              { title: "Creative + Technical Blend", desc: "Rare combination of strong design sensibility and deep technical expertise under one roof.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, gradient: "from-purple-500/20 to-purple-600/5" },
              { title: "Customized Strategies", desc: "No cookie-cutter solutions. Every brand gets a strategy built from scratch for their goals.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>, gradient: "from-blue-500/20 to-blue-600/5" },
              { title: "Data-Driven Decisions", desc: "Decisions backed by real analytics — from campaign performance to website behavior.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, gradient: "from-orange-500/20 to-orange-600/5" },
              { title: "On-Time Delivery", desc: "Deadlines are commitments. Our structured process ensures every project ships on schedule.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, gradient: "from-pink-500/20 to-pink-600/5" },
              { title: "Transparent Communication", desc: "Regular updates and honest reporting. You're never left in the dark about progress.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, gradient: "from-cyan-500/20 to-cyan-600/5" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Animated border glow */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/10 via-primary/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

                <div className={`relative p-8 rounded-3xl bg-surface-container/40 border border-white/5 overflow-hidden h-full group-hover:border-white/15 transition-all duration-500`}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: 20, y: -20 }}
                    whileHover={{ x: 0, y: 0 }}
                  />

                  {/* Floating sparkles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {[...Array(3)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                          y: ["100%", "-20%"],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2.5 + j * 0.5,
                          repeat: Infinity,
                          delay: j * 0.8 + i * 0.2,
                          ease: "easeOut",
                        }}
                        style={{
                          left: `${20 + j * 30}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Icon container */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Animated line */}
                    <motion.div
                      className="absolute top-7 left-16 h-[1px] bg-gradient-to-r from-primary/50 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h4 className="text-white font-headline text-lg font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">{item.desc}</p>
                  </div>

                  {/* Bottom indicator bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.5, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>

                  {/* Number badge */}
                  <div className="absolute top-6 right-6">
                    <span className="text-4xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 px-6 lg:px-12 bg-surface overflow-hidden">
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
              <span className="text-neutral-400 font-light">"</span>
              Mintt started with a simple idea over a cup of coffee — to create something{" "}
              <span className="text-primary font-black">meaningful, creative, and impactful.</span>
              <span className="text-neutral-400 font-light">"</span>
            </h3>

            <p className="text-neutral-400 text-lg mb-12 font-light leading-relaxed">
              Today, seeing it grow into a trusted digital partner for 30+ brands with a talented team of 14+ is truly fulfilling. Every project reflects our passion, dedication, and commitment to quality.
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
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="text-6xl font-headline font-black text-white mb-2">4.2</div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold">Client Rating</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-6 h-6 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-6 h-6 text-primary" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { label: "On-Time Delivery", value: 95 },
                { label: "Communication", value: 92 },
                { label: "Quality of Work", value: 90 },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                    <span>{metric.label}</span>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MSME Banner */}
      <section className="py-24 px-6 lg:px-12 bg-primary relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="font-headline text-[12rem] lg:text-[16rem] font-black text-white select-none whitespace-nowrap">MSME</span>
        </motion.div>

        <div className="max-w-screen-2xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-grow">
            <h2 className="font-headline text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Trusted & Certified</h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-4xl">
              Mintt is a proudly MSME registered company, reflecting our commitment to credibility, growth, and supporting India's entrepreneurial ecosystem. This enables us to collaborate with a wider range of businesses while maintaining strong standards of quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 lg:px-12 bg-surface relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 106, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(255, 106, 0, 0.03))",
          backgroundSize: "100% 2px, 3px 100%",
        }} />
        <GlowOrb className="bg-primary/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={600} />

        <div className="max-w-screen-xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-8 md:mb-10"
          >
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="text-primary italic font-light">ACTUALLY</span> WORKS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-neutral-500 font-headline text-xl uppercase tracking-[0.3em] font-bold mb-16"
          >
            No hype. Just results.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-10 sm:px-16 py-6 sm:py-8 rounded-full text-base sm:text-xl font-black uppercase tracking-widest hover:shadow-[0_0_60px_rgba(255,106,0,0.6)] transition-all"
          >
            Start a Project
          </motion.button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-surface-container/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading eyebrow="Contact" headline="Let's build together" />

            <p className="text-neutral-400 text-lg mb-12 font-light">
              Ready to transform your brand? Drop us a message and we'll respond within 24 hours. No fluff — just action and measurable results.
            </p>

            <div className="space-y-10">
              {[
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>, label: "Call Us", value: "+91 8108405170", href: "tel:+918108405170" },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>, label: "Email Us", value: "contact.mintt.ai@gmail.com", href: "mailto:contact.mintt.ai@gmail.com" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-xl glass-card border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 text-white/60"
                  >
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
                  { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.22 13.63c-.24.68-1.37 1.21-1.91 1.29-.51.08-1.02.24-3.42-.83-2.89-1.23-4.75-4.34-4.89-4.54-.15-.2-1.17-1.55-1.17-2.96 0-1.41.74-2.1.99-2.39.25-.29.68-.38.89-.38.22 0 .43 0 .61.01.19 0 .45-.07.7.54.26.64.88 2.23.96 2.39.08.16.13.35.03.56-.1.21-.15.35-.29.54-.15.19-.31.4-.44.54-.15.15-.3.32-.15.6.15.27.68 1.12 1.45 1.81.99.9 1.82 1.18 2.09 1.31.26.13.42.11.58-.06.16-.18.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.87.27.14.45.21.52.32.06.11.06.64-.18 1.32z"/></svg>, href: "https://wa.me/918108405170", label: "WhatsApp" },
                  { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, href: "https://instagram.com/mintt.ai", label: "Instagram" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-white/60 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[2rem] border border-white/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Your Name</label>
                  <input
                    className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white placeholder-neutral-600 font-light outline-none transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Email Address</label>
                  <input
                    className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white placeholder-neutral-600 font-light outline-none transition-all"
                    placeholder="john@company.com"
                    type="email"
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
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Service</label>
                  <select className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white font-light outline-none transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-surface">Select a service</option>
                    <option value="seo" className="bg-surface">SEO Mastery</option>
                    <option value="web" className="bg-surface">Web Development</option>
                    <option value="saas" className="bg-surface">SaaS Solutions</option>
                    <option value="meta" className="bg-surface">Meta Ads</option>
                    <option value="crm" className="bg-surface">Mintt CRM Demo</option>
                    <option value="full" className="bg-surface">Full 360° Package</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">About Your Project</label>
                <textarea
                  className="w-full bg-white/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary text-white placeholder-neutral-600 h-40 font-light outline-none transition-all resize-none"
                  placeholder="Describe your vision..."
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

      {/* Footer */}
      <footer className="bg-surface pt-32 pb-12 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-16 mb-24">
            <div className="col-span-12 md:col-span-5">
              <div className="text-3xl font-black text-white font-headline mb-8 flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full" />
                Mintt
              </div>
              <p className="text-neutral-500 font-light text-base leading-loose max-w-sm mb-10">
                A 360° marketing & development agency rooted in Vashi, Navi Mumbai. Women-led. MSME registered. 4.2★ rated. From coffee conversations to creative growth.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, href: "https://instagram.com/mintt.ai", label: "Instagram" },
                  { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.22 13.63c-.24.68-1.37 1.21-1.91 1.29-.51.08-1.02.24-3.42-.83-2.89-1.23-4.75-4.34-4.89-4.54-.15-.2-1.17-1.55-1.17-2.96 0-1.41.74-2.1.99-2.39.25-.29.68-.38.89-.38.22 0 .43 0 .61.01.19 0 .45-.07.7.54.26.64.88 2.23.96 2.39.08.16.13.35.03.56-.1.21-.15.35-.29.54-.15.19-.31.4-.44.54-.15.15-.3.32-.15.6.15.27.68 1.12 1.45 1.81.99.9 1.82 1.18 2.09 1.31.26.13.42.11.58-.06.16-.18.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.87.27.14.45.21.52.32.06.11.06.64-.18 1.32z"/></svg>, href: "https://wa.me/918108405170", label: "WhatsApp" },
                  { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>, href: "#", label: "YouTube" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl glass-card border border-white/10 flex items-center justify-center text-white/60 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h5 className="text-white font-headline text-xs font-black uppercase tracking-[0.2em] mb-10">Services</h5>
              <ul className="space-y-6 text-sm text-neutral-500 font-light">
                {["SEO", "Web Development", "SaaS Solutions", "Meta Ads", "Mintt CRM"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-primary transition-all">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h5 className="text-white font-headline text-xs font-black uppercase tracking-[0.2em] mb-10">Company</h5>
              <ul className="space-y-6 text-sm text-neutral-500 font-light">
                {["About Us", "Our Clients", "Our Process", "Why Choose Us", "From the Founder"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-primary transition-all">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-3">
              <h5 className="text-white font-headline text-xs font-black uppercase tracking-[0.2em] mb-10">Contact</h5>
              <ul className="space-y-6 text-sm text-neutral-500 font-light">
                {["www.mintt.space", "+91 8108405170", "contact.mintt.ai@gmail.com", "Vashi, Navi Mumbai"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-primary transition-all">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/5 gap-8">
            <span className="text-xs font-bold text-neutral-700 tracking-[0.1em] uppercase">
              © 2025 Mintt. All rights reserved. MSME Registered · Vashi
            </span>
            <div className="flex gap-8 text-neutral-700 text-[10px] uppercase font-black tracking-widest">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="hover:text-primary transition-all">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
