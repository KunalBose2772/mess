import Image from 'next/image';
import {
  ArrowRight,
  FileText,
  Handshake,
  Hotel,
  Phone,
  ShieldCheck,
  Truck,
  Utensils,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { FeatureCard } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { whatsappUrl } from '@/data/site';

const BULK_PILLARS = [
  {
    icon: <Hotel className="size-5 text-[#C59B27]" />,
    title: 'Bulk Kitchen Capacity',
    desc: 'Volume orders handled seamlessly with standardized taste.',
  },
  {
    icon: <ShieldCheck className="size-5 text-[#C59B27]" />,
    title: 'Hygienic & Certified',
    desc: 'Strict FSSAI compliance, RO water, and daily sanitized stations.',
  },
  {
    icon: <Truck className="size-5 text-[#C59B27]" />,
    title: 'Punctual Ranchi Dispatch',
    desc: 'Dedicated transport fleet ensuring piping-hot meal arrival.',
  },
  {
    icon: <Utensils className="size-5 text-[#C59B27]" />,
    title: 'Fresh & Homestyle',
    desc: 'Balanced, nutritious meals that keep teams energetic all day.',
  },
  {
    icon: <Handshake className="size-5 text-[#C59B27]" />,
    title: 'Tailored Corporate Contracts',
    desc: 'Flexible weekly billing, invoicing, and rotating diet menus.',
  },
];

const BULK_TAGS = [
  'Corporate Offices & IT Hubs',
  'Hostels & Student PGs',
  'Coaching Institutes',
  'Hospitals & Healthcare Staff',
  'Pooja & Family Gatherings',
];

export function BulkSpotlightSection() {
  return (
    <Section tone="brand" className="isolate overflow-hidden bg-[#0F2B18] text-white">
      <SectionHeader
        eyebrow="Institutional Partnerships"
        title={
          <>
            Feeding Teams, Institutions &amp; Events — At Scale
            <span className="text-[#C59B27]">.</span>
          </>
        }
        subtitle="From daily corporate lunches to large coaching batches and hostels, we supply fresh, wholesome meals in bulk — reliably, on time, every time."
        className="lg:mb-8!"
      />

      <ul className="mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-2 lg:mb-10">
        {BULK_TAGS.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1 text-xs font-semibold text-stone-200"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Real Food & Catering Operation Showcase Banner */}
      <div className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-3xl border border-[#C59B27]/30 bg-white/5 shadow-2xl">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px]">
            <Image
              src="/images/bulk_bg.png"
              alt="Real bulk meal catering and tiffin trays in Ranchi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
              Commercial Kitchen Capacity
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              Over 500+ Fresh Meals Packaged Daily
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
              From hot stainless-steel tiffin containers to eco-friendly sealed meal trays, our Hindpiri central kitchen is equipped with commercial-grade burners, cold storage, and a dedicated delivery dispatch fleet for prompt arrival across Ranchi.
            </p>
            <div className="mt-5 flex items-center gap-6 text-xs text-stone-300 border-t border-white/10 pt-4">
              <div>
                <strong className="block text-lg font-bold text-white">50 to 500+</strong>
                <span>Portions / Batch</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <strong className="block text-lg font-bold text-white">100% On-Time</strong>
                <span>Lunch &amp; Dinner Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {BULK_PILLARS.map((card, i) => (
          <FeatureCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            tone="glass"
            className={
              i === BULK_PILLARS.length - 1 ? 'sm:col-span-2 lg:col-span-1' : undefined
            }
          >
            {card.desc}
          </FeatureCard>
        ))}
      </div>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:mt-10">
        <ButtonLink href="/bulk-orders" variant="accent" size="lg" className="text-xs sm:text-sm font-bold">
          <FileText className="size-4 mr-2" />
          <span>Get a Bulk Quote</span>
          <ArrowRight className="size-4 ml-2" />
        </ButtonLink>
        <ButtonLink
          href={whatsappUrl("Hi, I'd like to discuss bulk orders/institutional partnerships")}
          variant="outline-light"
          size="lg"
          className="text-xs sm:text-sm font-semibold"
        >
          <Phone className="size-4 mr-2" />
          <span>Discuss on WhatsApp</span>
        </ButtonLink>
      </div>
    </Section>
  );
}
