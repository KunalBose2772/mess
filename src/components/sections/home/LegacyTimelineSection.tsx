import Image from 'next/image';
import {
  Home,
  Users,
  Building2,
  ShieldCheck,
  Trophy,
  Utensils,
  Heart,
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

const TIMELINE_ITEMS = [
  {
    icon: Home,
    date: '1999',
    title: 'Founding Roots in Ranchi',
    text: 'Started as a small home kitchen in Hindpiri, Ranchi, serving students and bachelors who missed pure home-cooked food.',
  },
  {
    icon: Users,
    date: 'Early 2000s',
    title: 'Word of Mouth Grows',
    text: 'Word of mouth spreads across Lalpur and Morabadi. Working professionals and hostel boarders join our daily family.',
  },
  {
    icon: Building2,
    date: '2010s',
    title: 'Scaling Kitchen Capacity',
    text: 'Expanded our operations to support bulk meal catering for corporate offices, institutional events, and private hostels.',
  },
  {
    icon: ShieldCheck,
    date: 'Today',
    title: 'A Household Culinary Trust',
    text: 'Over 26 years of continuous service across Ranchi with FSSAI hygiene standards and unmatched customer loyalty.',
  },
];

const STATS = [
  { icon: Trophy, value: '26+', label: 'Years Serving Ranchi' },
  { icon: Utensils, value: '500+', label: 'Daily Meals Served' },
  { icon: Users, value: '320+', label: 'Verified Reviews' },
  { icon: Heart, value: '100%', label: 'Home-Style Cooking' },
];

export function LegacyTimelineSection() {
  return (
    <Section tone="cream" className="border-b border-[#E8E2D8]">
      <SectionHeader
        eyebrow="Our Legacy"
        title="Serving Ranchi One Homemade Meal At A Time Since 1999"
        subtitle="More than just food — a 26-year tradition of trust, hygiene, and genuine culinary care."
      />

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <ol className="relative space-y-7 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-[#E8E2D8]">
          {TIMELINE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.date} className="relative flex gap-5">
                <span
                  aria-hidden="true"
                  className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0F2B18] text-[#C59B27] ring-4 ring-[#FCFBF7] shadow-sm"
                >
                  <Icon className="size-5" />
                </span>
                <div className="pt-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#86630F]">
                    {item.date}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#0F2B18] mt-0.5">{item.title}</h3>
                  <p className="text-sm text-[#45514A] mt-1 leading-relaxed">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#E8E2D8] shadow-lg">
            <Image
              src="/images/hero.png"
              alt="Bose Family Kitchen Since 1999"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-right"
            />
          </div>

          <div className="absolute -top-4 right-4 flex size-24 flex-col items-center justify-center rounded-full bg-[#0F2B18] text-center shadow-xl ring-4 ring-[#FCFBF7] sm:size-28 lg:-right-4">
            <span className="font-display text-2xl font-bold leading-none text-[#C59B27] sm:text-3xl">
              26+
            </span>
            <span className="mt-1 text-[0.625rem] font-bold uppercase leading-tight tracking-wider text-white">
              Years
              <br />
              of Trust
            </span>
          </div>

          <figure className="absolute -bottom-5 left-4 max-w-[15rem] rounded-2xl border border-[#E8E2D8] bg-white p-4 shadow-xl sm:left-6 sm:p-5">
            <blockquote className="font-display text-lg font-bold leading-snug text-[#0F2B18]">
              &ldquo;Ghar jaisa swad, dil se banaya.&rdquo;
            </blockquote>
            <figcaption className="text-xs mt-1.5">
              <span className="font-bold text-[#86630F] block">&mdash; Bose Family</span>
              <span className="text-[0.6875rem] text-[#6A756E] block">Serving Ranchi Since 1999</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-14">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3.5 rounded-2xl border border-[#E8E2D8] bg-white p-4 shadow-xs"
            >
              <span
                aria-hidden="true"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#FBF4DE] text-[#86630F]"
              >
                <Icon className="size-5 text-[#C59B27]" />
              </span>
              <div>
                <dd className="font-display text-xl font-bold leading-tight text-[#0F2B18] sm:text-2xl">
                  {stat.value}
                </dd>
                <dt className="text-xs text-[#6A756E] font-medium mt-0.5">{stat.label}</dt>
              </div>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
