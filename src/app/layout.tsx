import type { Metadata, Viewport } from 'next';
import { Figtree, Fraunces } from 'next/font/google';
import '@/styles/globals.css';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { QuickCallbackWidget } from '@/components/forms/QuickCallbackWidget';
import { JsonLd } from '@/components/ui/JsonLd';
import { LOCAL_BUSINESS_SCHEMA, SITE_CONFIG } from '@/data/site';

/* Body + UI copy */
const figtree = Figtree({
  subsets: ['latin', 'latin-ext'], // latin-ext carries the ₹ glyph
  variable: '--font-figtree',
  display: 'swap',
});

/* Headings: prestigious, warm editorial culinary serif */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: SITE_CONFIG.defaultTitle,
  description: SITE_CONFIG.defaultDescription,
  keywords: SITE_CONFIG.defaultKeywords,
  icons: {
    icon: '/images/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F2B18',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-[#FCFBF7] text-[#0F1E13] antialiased selection:bg-[#C59B27]/30 selection:text-[#0F2B18]">
        <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-brand-900 focus:shadow-lift"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
        <QuickCallbackWidget />
      </body>
    </html>
  );
}
