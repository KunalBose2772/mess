import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Award,
  Phone,
  Truck,
  Utensils,
  ShieldCheck,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { FeatureCard } from '@/components/ui/Card';
import { CheckList } from '@/components/ui/CheckList';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { JsonLd } from '@/components/ui/JsonLd';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SERVICES_LIST, getServiceBySlug } from '@/data/services';
import { SITE_CONFIG, whatsappUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

const TRUST_POINTS = [
  {
    icon: <Award className="size-5 text-[#C59B27]" />,
    title: '26+ Years Trust',
    desc: 'One of the oldest local institutional kitchens in Ranchi since 1999.',
  },
  {
    icon: <Utensils className="size-5 text-[#C59B27]" />,
    title: 'Homestyle Quality',
    desc: 'Clean traditional recipes with hand-ground spices and low oil.',
  },
  {
    icon: <Truck className="size-5 text-[#C59B27]" />,
    title: 'Punctual Dispatch',
    desc: 'Strict route timings ensuring warm deliveries before lunch breaks.',
  },
];

export function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} | Student's Mess Ranchi`,
    description: `${service.description} Trusted tiffin service in Ranchi and mess in Ranchi since 1999.`,
    keywords:
      'tiffin service in ranchi, mess in ranchi, tiffin services near me, lunch box service, mess menu, lunch box meals near me, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service',
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_CONFIG.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_CONFIG.baseUrl}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SITE_CONFIG.baseUrl}/services/${slug}`,
      },
    ],
  };

  const hasFaqs = service.faqs.length > 0;

  const faqSchema = hasFaqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <PageHero
        eyebrow="Catering Service • Ranchi Mess"
        title={service.title}
        subtitle={service.angle}
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
      />

      <Section tone="surface">
        <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div>
            <Eyebrow>Scope of Service</Eyebrow>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18] mt-2">
              What This Service Includes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#526055] leading-relaxed">{service.description}</p>
            <CheckList className="mt-6 font-semibold text-[#0F2B18]" items={service.includes} />
          </div>

          <aside className="rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-card lg:sticky lg:top-28 hover:border-[#C59B27]/70 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C59B27] mb-2">
              <ShieldCheck className="size-4" />
              <span>Tailored Meal Proposals</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0F2B18]">Custom Organization Proposal</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#526055] leading-relaxed">
              Experience the <strong>best tiffin service in Ranchi</strong> and institutional{' '}
              <strong>lunch box service</strong> with flexible billing, trial meals, and scheduled dispatch.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <ButtonLink href="/bulk-orders#quote-form" variant="accent" block className="font-bold">
                Request Custom Quote
              </ButtonLink>
              <ButtonLink href={SITE_CONFIG.phoneHref} variant="outline" block className="gap-2 font-bold">
                <Phone className="size-4 text-[#0F2B18]" />
                <span>Call Kitchen Desk</span>
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeader
          eyebrow="Our Commitment"
          title="Why Choose Student's Mess?"
          subtitle="Experience regional culinary excellence and operational reliability trusted since 1999."
        />
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {TRUST_POINTS.map((point) => (
            <FeatureCard key={point.title} icon={point.icon} title={point.title}>
              {point.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {hasFaqs && (
        <Section tone="surface">
          <SectionHeader
            eyebrow="Common Questions"
            title="Service Specific FAQs"
            subtitle="Frequently asked operational queries regarding this specific food supply line."
          />
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={service.faqs} />
          </div>
        </Section>
      )}

      <CtaBanner
        tone="dark"
        title={
          <>
            Ready to Partner With <span className="text-[#F3CF7A]">Ranchi&apos;s Best</span>?
          </>
        }
        subtitle="Get in touch to organize your meal subscriptions, hostel tiffins, or trial runs."
        primaryCta={{ href: '/bulk-orders#quote-form', label: service.cta }}
        secondaryCta={{
          href: whatsappUrl(`Hi, I'd like to inquire about ${service.title}.`),
          label: 'WhatsApp Kitchen Desk',
        }}
      />
    </>
  );
}
