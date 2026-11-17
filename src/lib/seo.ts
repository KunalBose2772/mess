import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = SITE_CONFIG.defaultKeywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = path === '/' ? `${SITE_CONFIG.baseUrl}/` : `${SITE_CONFIG.baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.siteName,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: SITE_CONFIG.logoUrl,
          alt: "Student's Mess Ranchi",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SITE_CONFIG.logoUrl],
    },
  };
}

