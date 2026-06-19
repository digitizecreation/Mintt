// FAQ data shared between the dedicated /faq page and the chat widget.
// Adding/editing categories here updates both surfaces at once.

export type FaqCat = "general" | "web" | "marketing" | "content" | "pricing" | "support";

export type FaqItem = { q: string; a: string };
export type FaqCategory = { title: string; items: FaqItem[] };

export const FAQ: Record<FaqCat, FaqCategory> = {
  general: {
    title: "🏢 General FAQs",
    items: [
      { q: "Where is mintt located?", a: "Mintt is based in Vashi, Navi Mumbai, Maharashtra, India." },
      { q: "How can I contact mintt?", a: "Call us at +91 81084 05170, WhatsApp at +91 95944 01644, or email contact.mintt.ai@gmail.com" },
      { q: "Is mintt an MSME registered company?", a: "Yes! Mintt is a proudly women-led, MSME registered startup." },
      { q: "How many brands has mintt served?", a: "We have served 40+ brands across manufacturing, healthcare, real estate, and technology." },
    ],
  },
  web: {
    title: "💻 Website Development",
    items: [
      { q: "What types of websites does mintt build?", a: "Corporate websites, landing pages, e-commerce stores, portals, and fully custom web apps." },
      { q: "How long does a website take?", a: "Standard websites: 2–4 weeks. Complex projects: 6–8 weeks depending on scope." },
      { q: "Will my website be mobile-friendly?", a: "Absolutely! Every site we build is fully responsive across mobile, tablet, and desktop." },
      { q: "Do you provide hosting?", a: "Yes, we help you set up and manage hosting — or work with your existing setup." },
    ],
  },
  marketing: {
    title: "📣 Digital Marketing",
    items: [
      { q: "What digital marketing services do you offer?", a: "SEO, Meta Ads (Facebook/Instagram), Google Ads, content marketing, and CRM-led growth systems." },
      { q: "How long before I see SEO results?", a: "Typically 3–6 months for meaningful results. We provide monthly progress reports." },
      { q: "Do you run Meta and Google Ads?", a: "Yes! End-to-end campaign management on Meta and Google for lead generation and brand growth." },
      { q: "Can you help B2B businesses get leads?", a: "Yes — we specialize in B2B digital marketing for manufacturing, healthcare, and engineering sectors." },
    ],
  },
  content: {
    title: "🎨 Content & Branding",
    items: [
      { q: "Do you create social media content?", a: "Yes — reels, posts, carousels, and stories for Instagram, LinkedIn, and Facebook." },
      { q: "Can you design a logo for my brand?", a: "Yes! Full branding packages: logo, brand guidelines, and complete visual identity." },
      { q: "Do you write website copy?", a: "Our copywriting team creates compelling, SEO-friendly content tailored to your industry." },
      { q: "Do you offer video production?", a: "We create short-form videos for social media. Contact us for custom video packages." },
    ],
  },
  pricing: {
    title: "💰 Pricing & Payments",
    items: [
      { q: "How much does a website cost?", a: "Pricing depends on scope. Contact us for a custom quote — we have packages for all budgets." },
      { q: "What payment methods do you accept?", a: "Bank transfer, UPI, and online payment. Advance payment required to start." },
      { q: "Do you require an advance?", a: "Yes — typically 50% advance to begin, with balance on delivery." },
      { q: "Are there monthly retainer options?", a: "Yes! Monthly retainers available for digital marketing, SEO, and social media management." },
    ],
  },
  support: {
    title: "🛠️ Support FAQs",
    items: [
      { q: "How many revisions are included?", a: "2–3 revision rounds in standard packages. Additional revisions can be quoted separately." },
      { q: "Do you offer post-launch support?", a: "Yes — monthly maintenance and support packages are available after project completion." },
      { q: "How do I track project progress?", a: "We share regular updates via WhatsApp and email, plus scheduled calls with your project manager." },
      { q: "What if I need urgent changes after launch?", a: "WhatsApp us at +91 95944 01644 for priority support requests." },
    ],
  },
};

export const FAQ_CATEGORIES: { cat: FaqCat; icon: string; title: string; sub: string }[] = [
  { cat: "general", icon: "🏢", title: "General FAQs", sub: "About mintt, location, contact" },
  { cat: "web", icon: "💻", title: "Website Development", sub: "Types, timeline, hosting, mobile" },
  { cat: "marketing", icon: "📣", title: "Digital Marketing", sub: "SEO, Meta Ads, Google, leads" },
  { cat: "content", icon: "🎨", title: "Content & Branding", sub: "Reels, logos, copywriting" },
  { cat: "pricing", icon: "💰", title: "Pricing & Payments", sub: "Plans, payment methods, advance" },
  { cat: "support", icon: "🛠️", title: "Support FAQs", sub: "Post-project, revisions, tracking" },
];