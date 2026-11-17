import Link from 'next/link';
import {
  Info,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { CheckList } from '@/components/ui/CheckList';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { SITE_CONFIG } from '@/data/site';
import { AreaItem, LocationDetail } from '@/types';

interface LocationDetailTemplateProps {
  location: LocationDetail;
  area: AreaItem;
}

/** Renders trusted HTML strings from the locations data file as paragraphs. */
function HtmlParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: para }} className="mb-4 text-xs sm:text-sm md:text-base text-[#45514A] leading-relaxed" />
      ))}
    </>
  );
}

export function LocationDetailTemplate({ location, area }: LocationDetailTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow={location.eyebrow}
        title={
          <>
            Best Mess &amp; Tiffin Service in{' '}
            <span className="text-[#C59B27]">{area.name}, Ranchi</span>
          </>
        }
        subtitle={<span dangerouslySetInnerHTML={{ __html: location.heroSubtitle }} />}
        breadcrumbs={[{ label: 'Areas We Serve', href: '/areas' }, { label: area.name }]}
      />

      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div>
            <Eyebrow>{location.contentEyebrow}</Eyebrow>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18] mt-2">{location.overviewTitle}</h2>

            <div className="rich-text mt-5">
              <p
                className="text-sm sm:text-base md:text-lg font-medium text-[#0F2B18] leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: location.leadParagraph }}
              />
              <HtmlParagraphs paragraphs={location.preFocusParas} />

              <aside className="my-6 rounded-2xl border border-[#C59B27]/40 bg-[#FBF4DE]/60 p-5 lg:p-6 shadow-xs">
                <h3 className="font-display text-lg font-bold text-[#0F2B18] flex items-center gap-2 mb-3">
                  <Info className="size-5 text-[#86630F] shrink-0" />
                  <span>{location.focusHeading}</span>
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#45514A]">
                  <HtmlParagraphs paragraphs={location.focusParas} />
                </div>
              </aside>

              {location.subSectionTitle && (
                <h3 className="font-display text-xl font-bold text-[#0F2B18] mt-6 mb-3">{location.subSectionTitle}</h3>
              )}
              <HtmlParagraphs paragraphs={location.postFocusParas} />
            </div>
          </div>

          <aside className="rounded-3xl bg-[#0F2B18] p-6 shadow-xl text-white lg:sticky lg:top-28 lg:p-7 border border-[#C59B27]/30">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C59B27] mb-2">
              <ShieldCheck className="size-4" />
              <span>Verified Local Service</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">{location.sidebarTitle}</h3>
            <CheckList
              className="mt-5 text-stone-200"
              items={location.sidebarItems.map((content) => ({
                content,
                iconClassName: 'text-[#C59B27]',
              }))}
            />
            <ButtonLink
              href={location.waHref}
              variant="accent"
              block
              className="mt-7 gap-2 font-bold"
            >
              <WhatsAppIcon className="size-4" />
              <span>{location.waLabel}</span>
            </ButtonLink>
          </aside>
        </div>
      </Section>

      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Queries Answered"
          title={`Frequently Asked Questions — ${area.name} Delivery`}
          subtitle={location.faqSubtitle}
        />
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={location.faqs} />
        </div>
      </Section>

      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Local Coverage Map"
          title="Other Nearby Ranchi Localities We Serve"
          subtitle={location.adjSubtitle}
        />
        <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {location.adjacent.map((adj) => (
            <li key={adj.slug}>
              <Link
                href={`/mess-and-tiffin-service-in-${adj.slug}-ranchi`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D8] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#0F2B18] shadow-xs transition-all hover:border-[#0F2B18] hover:bg-[#FAF7F2]"
              >
                <MapPin className="size-3.5 text-[#C59B27]" />
                <span>{adj.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        tone="dark"
        title={<span dangerouslySetInnerHTML={{ __html: location.ctaTitleHtml }} />}
        subtitle={location.ctaSubtitle}
        primaryCta={{
          href: SITE_CONFIG.phoneHref,
          label: `Call: ${SITE_CONFIG.phoneDisplay}`,
        }}
        secondaryCta={{
          href: '/bulk-orders#quote-form',
          label: 'Request Bulk Quote',
        }}
      />
    </>
  );
}
