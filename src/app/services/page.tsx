import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Drumstick,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Home,
  Hotel,
  Leaf,
  Moon,
  PartyPopper,
  Sun,
  Utensils,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SERVICES_LIST } from '@/data/services';
import { SITE_CONFIG } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "All Food & Catering Services in Ranchi | Student's Mess",
  description:
    "Explore all 13 meal subscription, corporate lunch, student tiffin, and institutional catering services in Ranchi by Student's Mess.",
  keywords:
    'tiffin service in ranchi, mess in ranchi, corporate lunch ranchi, student tiffin ranchi, bulk catering ranchi',
  path: '/services',
});

function getServiceIcon(iconKey: string): ReactNode {
  const map: Record<string, ReactNode> = {
    'fa-briefcase': <Briefcase className="size-5 text-[#C59B27]" />,
    'fa-building': <Building2 className="size-5 text-[#C59B27]" />,
    'fa-home': <Home className="size-5 text-[#C59B27]" />,
    'fa-hotel': <Hotel className="size-5 text-[#C59B27]" />,
    'fa-graduation-cap': <GraduationCap className="size-5 text-[#C59B27]" />,
    'fa-leaf': <Leaf className="size-5 text-[#C59B27]" />,
    'fa-drumstick-bite': <Drumstick className="size-5 text-[#C59B27]" />,
    'fa-sun': <Sun className="size-5 text-[#C59B27]" />,
    'fa-moon': <Moon className="size-5 text-[#C59B27]" />,
    'fa-hard-hat': <HardHat className="size-5 text-[#C59B27]" />,
    'fa-briefcase-medical': <HeartPulse className="size-5 text-[#C59B27]" />,
    'fa-industry': <Factory className="size-5 text-[#C59B27]" />,
    'fa-glass-cheers': <PartyPopper className="size-5 text-[#C59B27]" />,
    'fa-utensils': <Utensils className="size-5 text-[#C59B27]" />,
  };
  return map[iconKey] ?? <Utensils className="size-5 text-[#C59B27]" />;
}

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete Culinary Services • Ranchi Mess"
        title="Food & Catering Services in Ranchi"
        breadcrumbs={[{ label: 'Services' }]}
        subtitle="From daily student tiffins and office lunch deliveries to large-scale hostel, hospital, and event catering across Ranchi since 1999."
      />

      <Section tone="surface">
        <SectionHeader
          eyebrow="Institutional Specializations"
          title="Tailored Meal Solutions for Every Requirement"
          subtitle="Select a service below to explore detailed menus, pricing models, and ordering options."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {SERVICES_LIST.map((service) => (
            <Card key={service.slug} as="article" interactive className="group relative flex h-full flex-col p-5 sm:p-6 border border-[#E8E2D8] bg-white shadow-card hover:border-[#C59B27]/70 transition-colors">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#EEF7F1] text-[#0F2B18]">
                {getServiceIcon(service.icon)}
              </div>
              <h3 className="font-display text-lg font-bold text-[#0F2B18] mt-4">
                <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 hover:text-[#C59B27] transition-colors">
                  {service.title}
                </Link>
              </h3>
              <p className="text-xs font-bold text-[#C59B27] mt-1">{service.angle}</p>
              <p className="text-xs text-[#526055] mt-2.5 flex-1 line-clamp-3 leading-relaxed">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 border-t border-[#E8E2D8]/70 pt-3 text-xs font-bold text-[#0F2B18] group-hover:text-[#C59B27] transition-colors">
                <span>Learn More &amp; Inquire</span>
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#C59B27]" />
              </span>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBanner
        tone="dark"
        title={
          <>
            Need a Customized Catering <span className="text-[#F3CF7A]">Setup?</span>
          </>
        }
        subtitle="Contact our central kitchen directly to arrange customized portions, shift timings, or group billing."
        primaryCta={{
          href: '/bulk-orders#quote-form',
          label: 'Request Institutional RFQ',
        }}
        secondaryCta={{
          href: SITE_CONFIG.phoneHref,
          label: `Call Us (${SITE_CONFIG.phoneDisplay})`,
        }}
      />
    </>
  );
}
