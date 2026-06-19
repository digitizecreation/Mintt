"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SERVICES = [
  { href: "/services", label: "SEO" },
  { href: "/services", label: "Web Development" },
  { href: "/services", label: "SaaS Solutions" },
  { href: "/services", label: "Meta Ads" },
  { href: "/services", label: "Mintt CRM" },
];

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/works", label: "Our Works" },
  { href: "/our-story", label: "Our Story" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact Us" },
];

const CONTACT_LINES = [
  { label: "www.mintt.space", href: "https://www.mintt.space" },
  { label: "+91 81084 05170", href: "tel:+918108405170" },
  { label: "+91 95944 01644 (WhatsApp)", href: "https://wa.me/919594401644" },
  { label: "contact.mintt.ai@gmail.com", href: "mailto:contact.mintt.ai@gmail.com" },
  { label: "Vashi, Navi Mumbai", href: "https://maps.google.com/?q=Vashi+Navi+Mumbai" },
];

const SOCIALS = [
  {
    href: "https://instagram.com/mintt.co.in",
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/918108405170",
    label: "WhatsApp",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.22 13.63c-.24.68-1.37 1.21-1.91 1.29-.51.08-1.02.24-3.42-.83-2.89-1.23-4.75-4.34-4.89-4.54-.15-.2-1.17-1.55-1.17-2.96 0-1.41.74-2.1.99-2.39.25-.29.68-.38.89-.38.22 0 .43 0 .61.01.19 0 .45-.07.7.54.26.64.88 2.23.96 2.39.08.16.13.35.03.56-.1.21-.15.35-.29.54-.15.19-.31.4-.44.54-.15.15-.3.32-.15.6.15.27.68 1.12 1.45 1.81.99.9 1.82 1.18 2.09 1.31.26.13.42.11.58-.06.16-.18.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.87.27.14.45.21.52.32.06.11.06.64-.18 1.32z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/minttagency",
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const FOOTER_LINKS = ["Privacy", "Terms", "Cookies"];

export default function SiteFooter() {
  return (
    <footer className="bg-surface pt-32 pb-12 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-16 mb-24">
          <div className="col-span-12 md:col-span-5">
            <Link href="/" className="text-3xl font-black text-white font-headline mb-8 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Mintt
            </Link>
            <p className="text-neutral-500 font-light text-base leading-loose max-w-sm mb-10">
              A 360° marketing &amp; development agency rooted in Vashi, Navi Mumbai. Women-led. MSME registered. 4.2★ rated. From coffee conversations to creative growth.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
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
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primary transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h5 className="text-white font-headline text-xs font-black uppercase tracking-[0.2em] mb-10">Company</h5>
            <ul className="space-y-6 text-sm text-neutral-500 font-light">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primary transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h5 className="text-white font-headline text-xs font-black uppercase tracking-[0.2em] mb-10">Contact</h5>
            <ul className="space-y-6 text-sm text-neutral-500 font-light">
              {CONTACT_LINES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="hover:text-primary transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/5 gap-8">
          <span className="text-xs font-bold text-neutral-700 tracking-[0.1em] uppercase">
            © 2026 Mintt. All rights reserved. MSME Registered · Vashi
          </span>
          <div className="flex gap-8 text-neutral-700 text-[10px] uppercase font-black tracking-widest">
            {FOOTER_LINKS.map((item) => (
              <Link key={item} href="/contact" className="hover:text-primary transition-all">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}