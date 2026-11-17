import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/ui/JsonLd';
import { LocationDetailTemplate } from '@/components/sections/shared/LocationDetailTemplate';
import { getAreaBySlug } from '@/data/areas';
import { LOCATIONS_LIST, getLocationBySlug } from '@/data/locations';
import { SITE_CONFIG } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return LOCATIONS_LIST.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return buildMetadata({
    title: `Best Mess & Tiffin Service in ${area.name}, Ranchi | Student's Mess`,
    description: `Looking for the best mess in ${area.name} Ranchi or top tiffin services near me? Student's Mess offers daily rotating mess menu, hygienic lunch box service, and nutritious lunch box meals near me. Call +91 62010 16720.`,
    keywords: `mess in ${area.name.toLowerCase()} ranchi, tiffin services near me, mess menu, mess in ranchi, tiffin service in ranchi, lunch box meals near me, lunch box service, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service, mess khana`,
    path: `/mess-and-tiffin-service-in-${slug}-ranchi`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  const area = getAreaBySlug(slug);

  if (!location || !area) {
    notFound();
  }

  const pageUrl = `${SITE_CONFIG.baseUrl}/mess-and-tiffin-service-in-${slug}-ranchi`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_CONFIG.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${SITE_CONFIG.baseUrl}/areas` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Mess & Tiffin Service in ${area.name}, Ranchi`,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Mess & Tiffin Service in ${area.name}, Ranchi`,
    serviceType: 'Meal Delivery & Tiffin Service',
    provider: {
      '@type': 'LocalBusiness',
      name: "Student's Mess",
      image: SITE_CONFIG.logoUrl,
      telephone: SITE_CONFIG.telephoneSchema,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nizam Nagar, Hindpiri',
        addressLocality: 'Ranchi',
        addressRegion: 'Jharkhand',
        postalCode: '834001',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${area.name}, Ranchi`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you deliver tiffin and mess meals in ${area.name}, Ranchi?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, Student's Mess delivers fresh home-style lunch and dinner tiffins across ${area.name}, Ranchi. Doorstep delivery is available for groups or hostels with 5 or more subscriptions, and takeaway meal pick-up is available from our Hindpiri kitchen.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Can I pause my tiffin subscription when I travel or during exams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can pause any upcoming meal by notifying us via WhatsApp 12 hours in advance (before 8:00 PM for lunch; before 8:00 AM for dinner), extending your monthly billing cycle by the paused days (up to 5 skips per month).',
        },
      },
      {
        '@type': 'Question',
        name: `What are the lunch and dinner delivery timings in ${area.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our daily lunch delivery slot runs from 12:00 PM to 1:30 PM, and dinner delivery runs from 7:45 PM to 9:00 PM.',
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <LocationDetailTemplate location={location} area={area} />
    </>
  );
}

