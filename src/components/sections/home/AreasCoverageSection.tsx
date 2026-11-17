import Link from 'next/link';
import {
  Bike,
  ChevronRight,
  Heart,
  MapPin,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import { IconBadge } from '@/components/ui/IconBadge';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AREAS_LIST } from '@/data/areas';

const AREA_HIGHLIGHTS = [
  { icon: <UtensilsCrossed className="size-5 text-[#C59B27]" />, title: 'Fresh & Hygienic', desc: 'Home-style meals cooked fresh daily' },
  { icon: <Bike className="size-5 text-[#C59B27]" />, title: 'On-Time Delivery', desc: 'Punctual dispatch across Ranchi' },
  {
    icon: <Users className="size-5 text-[#C59B27]" />,
    title: 'Bulk & Subscription',
    desc: 'Ideal for offices, hostels, events & PGs',
  },
  { icon: <Heart className="size-5 text-[#C59B27]" />, title: 'Family Tradition', desc: '26+ years of genuine culinary care' },
];

export function AreasCoverageSection() {
  return (
    <Section id="areas-section" tone="cream" className="border-b border-[#E8E2D8]">
      <SectionHeader
        eyebrow="Proud Local Brand"
        title={
          <>
            Best Tiffin Service in Ranchi &amp;{' '}
            <span className="text-[#C59B27]">Local Mess Delivery Areas</span>
          </>
        }
        subtitle={
          <>
            From student hubs in Lalpur to corporate offices in Main Road and resident colonies in Morabadi — our prompt{' '}
            <strong>tiffin delivery service</strong> delivers fresh hot meals across all 15 key Ranchi localities.
          </>
        }
      />

      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {AREA_HIGHLIGHTS.map((item) => (
          <li key={item.title} className="flex items-center gap-3.5 rounded-2xl border border-[#E8E2D8] bg-white p-4 shadow-xs">
            <IconBadge icon={item.icon} tone="brand" size="md" />
            <div>
              <h3 className="font-display text-base font-bold text-[#0F2B18]">{item.title}</h3>
              <p className="text-xs text-[#6A756E] mt-0.5">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mb-6 mt-10 flex items-center gap-4 lg:mt-12">
        <span aria-hidden="true" className="h-px flex-1 bg-[#E8E2D8]" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#86630F] flex items-center gap-2">
          <MapPin className="size-3.5 text-[#C59B27]" /> 15 Delivery Localities in Ranchi
        </h3>
        <span aria-hidden="true" className="h-px flex-1 bg-[#E8E2D8]" />
      </div>

      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {AREAS_LIST.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/mess-and-tiffin-service-in-${area.slug}-ranchi`}
              className="group flex h-full items-center justify-between gap-2 rounded-xl border border-[#E8E2D8] bg-white px-3.5 py-3 text-xs sm:text-sm font-semibold text-[#0F2B18] transition-all duration-150 hover:border-[#0F2B18] hover:bg-[#0F2B18] hover:text-white hover:shadow-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <MapPin
                  className="size-3.5 shrink-0 text-[#C59B27] transition-colors group-hover:text-[#C59B27]"
                />
                <span className="truncate">{area.name}</span>
              </span>
              <ChevronRight
                className="size-3 shrink-0 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
