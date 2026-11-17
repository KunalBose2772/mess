import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Truck,
  Utensils,
  CreditCard,
  MessageCircle,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { JsonLd } from '@/components/ui/JsonLd';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DEDICATED_PLANS, getPlanBySlug, PLANS_SLUGS } from '@/data/plans';
import { SITE_CONFIG, whatsappUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PLANS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);
  if (!plan) return {};

  return buildMetadata({
    title: plan.metaTitle,
    description: plan.metaDescription,
    path: `/monthly-meal-plans/${plan.slug}`,
  });
}

export default async function DedicatedPlanPage({ params }: Props) {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  // Schema.org Product / Service & FAQ Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: plan.title,
    description: plan.metaDescription,
    image: `${SITE_CONFIG.baseUrl}${plan.image}`,
    brand: {
      '@type': 'Brand',
      name: "Student's Mess",
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: plan.price.replace(/[^\d]/g, '') || '4000',
      availability: 'https://schema.org/InStock',
      url: `${SITE_CONFIG.baseUrl}/monthly-meal-plans/${plan.slug}`,
      seller: {
        '@type': 'LocalBusiness',
        name: "Student's Mess",
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: plan.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const otherPlans = Object.values(DEDICATED_PLANS).filter((p) => p.slug !== plan.slug);

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Monthly Meal Subscription • Ranchi Mess"
        title={plan.title}
        breadcrumbs={[
          { label: 'Monthly Plans', href: '/monthly-meal-plans' },
          { label: plan.title },
        ]}
        subtitle={plan.overview}
      />

      {/* Plan Pricing & Overview Metrics Banner */}
      <Section tone="surface" className="border-b border-[#E8E2D8]">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF7F1] border border-[#A3D9B8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F2B18]">
              <ShieldCheck className="size-4 text-[#C59B27]" />
              <span>{plan.badge}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18]">
              {plan.tagline}
            </h2>

            <p className="text-[#526055] text-sm sm:text-base leading-relaxed">
              {plan.overview}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-[#E8E2D8] bg-white p-4 shadow-card hover:border-[#C59B27]/60 transition-colors">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479] block">Monthly Tariff</span>
                <p className="font-display text-2xl font-bold text-[#0F2B18] mt-1">{plan.price}</p>
                <span className="text-xs text-[#768479]">/ month</span>
              </div>
              <div className="rounded-xl border border-[#A3D9B8] bg-[#EEF7F1]/60 p-4 shadow-card hover:border-[#C59B27]/60 transition-colors">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#0F2B18] block">Effective Cost</span>
                <p className="font-display text-2xl font-bold text-[#0F2B18] mt-1">{plan.perMealPrice}</p>
                <span className="text-xs text-[#0F2B18]/80">/ meal course</span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-[#E8E2D8] bg-white p-4 shadow-card hover:border-[#C59B27]/60 transition-colors">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479] block">Meal Schedule</span>
                <p className="font-display text-base font-bold text-[#0F2B18] mt-1 leading-tight">{plan.mealsPerDay}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <ButtonLink
                href={whatsappUrl(plan.waMessage)}
                variant="accent"
                size="md"
                className="gap-2 text-sm font-bold shadow-xs"
              >
                <MessageCircle className="size-4" />
                <span>Subscribe via WhatsApp</span>
              </ButtonLink>
              <ButtonLink
                href={SITE_CONFIG.phoneHref}
                variant="outline"
                size="md"
                className="gap-2 text-sm font-bold"
              >
                <Phone className="size-4 text-[#0F2B18]" />
                <span>Call Kitchen Desk</span>
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E8E2D8] shadow-card bg-[#FAF7F2]">
              <Image
                src={plan.image}
                alt={plan.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07170C]/80 via-[#07170C]/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="rounded-full bg-[#0F2B18] text-[#F3CF7A] border border-[#C59B27]/40 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider inline-block">
                  Prepared Fresh Twice Daily
                </span>
                <p className="font-display text-lg font-bold mt-1 text-white">
                  100% Home Style Mess Khana
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Plan Details & Features Grid */}
      <Section tone="subtle">
        <SectionHeader
          eyebrow="Specifications"
          title="What Is Included in this Subscription"
          subtitle="Clear, transparent meal specifications and kitchen hygiene standards."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Key Inclusions */}
          <div className="rounded-2xl border border-[#E8E2D8] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-[#C59B27]/60 transition-colors">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F2B18] mb-4 flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#EEF7F1] text-[#0F2B18] text-sm">
                  <Utensils className="size-4 text-[#C59B27]" />
                </span>
                <span>Included Features &amp; Hygiene Standards</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#334139]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C59B27] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-[#E8E2D8]/70 pt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#526055]">
              <span className="flex items-center gap-1.5 font-bold text-[#0F2B18]">
                <CreditCard className="size-3.5 text-[#C59B27]" /> 100% Advance Payment Policy
              </span>
              <span className="flex items-center gap-1.5 font-bold text-[#0F2B18]">
                <Truck className="size-3.5 text-[#C59B27]" /> Delivery for 5+ Subscribers
              </span>
            </div>
          </div>

          {/* Card 2: Ideal For */}
          <div className="rounded-2xl border border-[#E8E2D8] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-[#C59B27]/60 transition-colors">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F2B18] mb-4 flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#FAF7F2] text-[#0F2B18] text-sm border border-[#E8E2D8]">
                  <ShieldCheck className="size-4 text-[#C59B27]" />
                </span>
                <span>Recommended Audience</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#334139]">
                {plan.suitableFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#EEF7F1] text-[#0F2B18] text-[0.625rem] font-bold mt-0.5 border border-[#A3D9B8]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-[#E8E2D8] bg-[#FAF7F2] p-4">
              <p className="text-xs text-[#526055] leading-relaxed">
                <strong className="text-[#0F2B18]">Need custom meal shifts?</strong> We accommodate coaching class and office shift schedules.
                Chat with our manager on WhatsApp for personalized meal packing times.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Weekly Rotation Matrix */}
      <Section tone="surface">
        <SectionHeader
          eyebrow="Weekly Rotation"
          title="Sample 7-Day Menu Schedule"
          subtitle="Explore the exact meal combinations prepared throughout the week under this plan."
        />

        <div className="overflow-x-auto rounded-2xl border border-[#E8E2D8] bg-white shadow-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#C59B27]/30 bg-[#0F2B18] text-white text-xs font-bold uppercase tracking-wider">
                <th className="py-3 px-4 w-32 text-[#F3CF7A]">Day</th>
                <th className="py-3 px-4 text-[#F3CF7A]">Midday Lunch Rotation</th>
                <th className="py-3 px-4 text-[#F3CF7A]">Evening Dinner Rotation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E2D8]/70 text-xs sm:text-sm">
              {plan.weeklyHighlights.map((row) => (
                <tr key={row.day} className="transition-colors hover:bg-[#FAF7F2]">
                  <td className="py-3.5 px-4 font-bold text-[#0F2B18] align-top">
                    {row.day}
                  </td>
                  <td className="py-3.5 px-4 text-[#334139] align-top">
                    {row.lunch}
                  </td>
                  <td className="py-3.5 px-4 text-[#334139] align-top">
                    {row.dinner}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#768479]">
          <span>&bull; Note: Vegetable curries rotate with seasonal farmer markets in Ranchi.</span>
          <Link href="/todays-menu" className="font-bold text-[#0F2B18] hover:text-[#C59B27] transition-colors">
            View Live Today&apos;s Menu &amp; Single-Page A4 PDF &rarr;
          </Link>
        </div>
      </Section>

      {/* Plan Specific FAQs */}
      <Section tone="subtle">
        <SectionHeader
          eyebrow="Common Questions"
          title={`FAQs: ${plan.title}`}
          subtitle="Clear logistical guidance on pausing, payments, and dining policies."
        />
        <div className="max-w-3xl mx-auto">
          <FaqAccordion
            items={plan.faqs.map((f) => ({
              q: f.question,
              a: f.answer,
            }))}
          />
        </div>
      </Section>

      {/* Compare Other Plans */}
      <Section tone="surface" className="border-t border-[#E8E2D8]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <span className="eyebrow block">Explore Subscriptions</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F2B18]">
              Compare Other Monthly Subscriptions
            </h3>
          </div>
          <ButtonLink href="/monthly-meal-plans" variant="outline" size="sm" className="font-bold">
            <span>Compare All Plans Matrix</span>
            <ArrowRight className="size-3.5" />
          </ButtonLink>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherPlans.map((other) => (
            <Link
              key={other.slug}
              href={`/monthly-meal-plans/${other.slug}`}
              className="group rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C59B27]/70 hover:shadow-lift flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.625rem] font-bold uppercase tracking-wider text-[#C59B27] block">
                  {other.badge}
                </span>
                <h4 className="font-display text-base font-bold text-[#0F2B18] mt-1 group-hover:text-[#C59B27] transition-colors">
                  {other.title}
                </h4>
                <p className="text-xs text-[#526055] mt-1 line-clamp-2 leading-relaxed">
                  {other.tagline}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E2D8]/70 flex items-center justify-between">
                <span className="font-display text-base font-bold text-[#0F2B18]">{other.price}</span>
                <span className="text-xs font-bold text-[#0F2B18] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  View <ArrowRight className="size-3 text-[#C59B27]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        tone="dark"
        title={
          <>
            Ready to Start with <span className="text-[#F3CF7A]">{plan.title}?</span>
          </>
        }
        subtitle={
          <>
            Subscribe directly on WhatsApp. Meals start the next day with hot home-style dining across Ranchi.
          </>
        }
        primaryCta={{
          href: whatsappUrl(plan.waMessage),
          label: 'Subscribe on WhatsApp',
        }}
        secondaryCta={{
          href: SITE_CONFIG.phoneHref,
          label: `Call Us (${SITE_CONFIG.phoneDisplay})`,
        }}
      />
    </>
  );
}
