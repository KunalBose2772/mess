import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Building,
  GraduationCap,
  Hotel,
  Leaf,
  Percent,
  Star,
  User,
  Users,
  Clock,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface AudienceCard {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
  cta: string;
  image: string;
}

const LEFT_CARDS: AudienceCard[] = [
  {
    icon: <GraduationCap className="size-4 text-emerald-800" />,
    title: 'Students & Exam Aspirants',
    desc: 'Affordable, wholesome nutrition to power demanding study hours without stomach upsets.',
    href: '/services/student-tiffin-ranchi',
    cta: 'Student Plans (₹66/Meal)',
    image: '/images/serve_students.png',
  },
  {
    icon: <Briefcase className="size-4 text-emerald-800" />,
    title: 'Working Professionals',
    desc: 'Clean, light, on-time office lunch boxes packed hot for desk or pantry dining.',
    href: '/services/daily-lunch-ranchi',
    cta: 'Executive Lunch Plans',
    image: '/images/serve_professionals.png',
  },
  {
    icon: <User className="size-4 text-emerald-800" />,
    title: 'Bachelors & Solo Diners',
    desc: 'Zero cooking stress with varied daily menu rotations and flexible pickup options.',
    href: '/services/veg-meals-ranchi',
    cta: 'Explore Weekly Menu',
    image: '/images/serve_bachelors.png',
  },
];

const RIGHT_CARDS: AudienceCard[] = [
  {
    icon: <Hotel className="size-4 text-emerald-800" />,
    title: 'PG & Hostel Owners',
    desc: 'Reliable, contract-based centralized meal prep that keeps your boarders healthy and happy.',
    href: '/services/pg-food-supply-ranchi',
    cta: 'Hostel Contract Rates',
    image: '/images/serve_hostels.png',
  },
  {
    icon: <Users className="size-4 text-emerald-800" />,
    title: 'Event & Family Gatherings',
    desc: 'Pooja, birthdays, picnics, and family gatherings from 20 to 500+ plates catered with care.',
    href: '/services/hospital-meal-supply-ranchi',
    cta: 'Event Catering Rates',
    image: '/images/serve_events.png',
  },
  {
    icon: <Building className="size-4 text-emerald-800" />,
    title: 'Offices & Corporate Teams',
    desc: 'Scheduled daily bulk lunches with customized veg and non-veg tiers for corporate wellness.',
    href: '/services/corporate-lunch-ranchi',
    cta: 'Corporate Quote',
    image: '/images/serve_companies.png',
  },
];

const FEATURED_BENEFITS = [
  { icon: <Clock className="size-4 text-[#C59B27]" />, label: 'Guaranteed On-Time' },
  { icon: <Leaf className="size-4 text-[#C59B27]" />, label: '100% RO Water & Hygiene' },
  { icon: <Users className="size-4 text-[#C59B27]" />, label: 'Customizable Menus' },
  { icon: <Percent className="size-4 text-[#C59B27]" />, label: 'Competitive Bulk Rates' },
];

function AudienceCardRow({ card }: { card: AudienceCard }) {
  return (
    <article className="group relative flex flex-1 items-stretch overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative w-28 shrink-0 sm:w-36">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="144px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF7F1]"
          >
            {card.icon}
          </span>
          <h3 className="font-display text-base font-bold text-[#0F2B18] truncate">{card.title}</h3>
        </div>
        <p className="text-xs text-[#45514A] mt-1.5 leading-relaxed">{card.desc}</p>
        <Link
          href={card.href}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#86630F] hover:text-[#0F2B18] transition-colors after:absolute after:inset-0"
        >
          {card.cta}
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function WhoWeServeSection() {
  return (
    <Section tone="cream" className="border-b border-[#E8E2D8]">
      <SectionHeader
        eyebrow="Tailored For You"
        title="Who We Nourish Daily in Ranchi"
        subtitle="Wholesome, home-style culinary craftsmanship prepared with the care of family kitchen traditions."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1.05fr_1fr] xl:gap-6">
        <div className="flex flex-col gap-4">
          {LEFT_CARDS.map((card) => (
            <AudienceCardRow key={card.title} card={card} />
          ))}
        </div>

        <article className="relative isolate order-first flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-3xl bg-[#0F2B18] p-6 shadow-xl md:col-span-2 lg:p-8 xl:order-none xl:col-span-1 border border-[#C59B27]/30">
          <Image
            src="/images/serve_corporate.png"
            alt="Corporate bulk catering service in Ranchi"
            fill
            sizes="(max-width: 1280px) 100vw, 34vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07170C] via-[#07170C]/85 to-[#07170C]/20"
          />

          <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-[#C59B27] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#07170C] shadow-md lg:left-8 lg:top-8">
            <Star className="size-3.5 fill-[#07170C]" /> Institutional Specialty
          </span>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
            Corporate &amp; Bulk Catering
          </h3>
          <p className="mt-3 text-sm text-stone-200 leading-relaxed max-w-md">
            Nutritious, hygienic, and punctual meals for offices, educational centers, and large gatherings.
            Volume pricing with custom weekly rosters.
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-white/15 pt-4 text-xs font-medium text-white">
            {FEATURED_BENEFITS.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-stone-200">
                {b.icon}
                <span>{b.label}</span>
              </li>
            ))}
          </ul>

          <ButtonLink href="/bulk-orders#quote-form" variant="accent" className="mt-6 self-start text-xs font-bold">
            <span>Request Bulk Quote</span>
            <ArrowRight className="size-4 ml-1.5" />
          </ButtonLink>
        </article>

        <div className="flex flex-col gap-4">
          {RIGHT_CARDS.map((card) => (
            <AudienceCardRow key={card.title} card={card} />
          ))}
        </div>
      </div>
    </Section>
  );
}
