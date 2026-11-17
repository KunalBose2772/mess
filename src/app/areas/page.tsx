import Link from 'next/link';
import {
  ArrowRight,
  Landmark,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AREAS_LIST } from '@/data/areas';
import { whatsappUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Areas We Serve Across Ranchi | Student's Mess Delivery Coverage",
  description:
    'Discover our fresh home-style meal and tiffin delivery coverage across 15 key localities in Ranchi including Lalpur, Kanke, Doranda, Morabadi, and Hindpiri.',
  keywords:
    'tiffin service in ranchi areas, mess in ranchi locations, tiffin service lalpur, tiffin service kanke, tiffin service doranda',
  path: '/areas',
});

export default function AreasIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Local Delivery Network • Ranchi Mess"
        title="Areas We Serve Across Ranchi"
        breadcrumbs={[{ label: 'Areas We Serve' }]}
        subtitle="Wholesome home-style meal subscriptions, bulk institutional catering, and takeaway orders across 15 premier neighborhoods in Ranchi."
      />

      <Section tone="surface">
        <SectionHeader
          eyebrow="Neighborhood Coverage"
          title="Select Your Ranchi Locality for Local Service Details"
          subtitle="Explore dedicated delivery routes, landmark coverage, pickup hubs, and neighborhood FAQs."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {AREAS_LIST.map((area) => {
            const href = `/mess-and-tiffin-service-in-${area.slug}-ranchi`;
            return (
              <Card key={area.slug} as="article" interactive className="flex h-full flex-col p-5 sm:p-6 border border-[#E8E2D8] bg-white shadow-card hover:border-[#C59B27]/70 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#EEF7F1] text-[#0F2B18]">
                    <MapPin className="size-5 text-[#C59B27]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0F2B18]">
                    <Link href={href} className="transition-colors hover:text-[#C59B27]">
                      {area.name}
                    </Link>
                  </h3>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-[#C59B27]">
                  <Landmark className="size-3.5" />
                  <span>Major Hubs:</span>
                </div>
                <p className="mt-1 text-xs font-bold text-[#0F2B18]">{area.landmarks}</p>
                <p className="mt-2 text-xs text-[#526055] line-clamp-2 leading-relaxed flex-1">{area.intro}</p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#E8E2D8]/70 pt-4">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2B18] transition-colors hover:text-[#C59B27]"
                  >
                    <span>View {area.name} Details</span>
                    <ArrowRight className="size-3.5 text-[#C59B27]" />
                  </Link>
                  <a
                    href={whatsappUrl(`Hi, I'm inquiring about tiffin delivery in ${area.name} Ranchi.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Inquire about ${area.name} on WhatsApp`}
                    aria-label={`Inquire about ${area.name} on WhatsApp`}
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EEF7F1] text-[#0F2B18] border border-[#A3D9B8] transition-colors hover:bg-[#0F2B18] hover:text-[#F3CF7A]"
                  >
                    <MessageCircle className="size-4" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <CtaBanner
        tone="dark"
        title={
          <>
            Don&apos;t See Your Exact Locality <span className="text-[#F3CF7A]">Listed?</span>
          </>
        }
        subtitle="We regularly expand delivery routes for group subscriptions and corporate contracts across greater Ranchi."
        primaryCta={{
          href: whatsappUrl("Hi, I'd like to check if you deliver to my area in Ranchi."),
          label: 'Check Delivery Coverage on WhatsApp',
        }}
      />
    </>
  );
}
