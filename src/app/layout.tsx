import type { Metadata } from "next";
import { Space_Grotesk, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Used by the chat widget for its UI copy ("Hi! I'm Aria", FAQ text, etc.).
// Distinct from the headline/body pair so the widget reads as its own little island.
const dmSans = DM_Sans({
  variable: "--font-widget",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mintt | Engineered for Performance - Digital Marketing Agency",
  description: "Mintt is a women-led 360° marketing & development agency based in Vashi, Navi Mumbai. 4.5+ years, 30+ brands, 14+ professionals driving measurable growth through SEO, Web Development, SaaS Solutions, and Meta Ads.",
  keywords: ["digital marketing", "SEO", "web development", "SaaS", "Meta Ads", "brand identity", "Navi Mumbai", "Vashi", "agency"],
  authors: [{ name: "Mintt" }],
  openGraph: {
    title: "Mintt | Engineered for Performance",
    description: "A 360° marketing & development agency driving real, measurable results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${dmSans.variable} font-body antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
