import Image from 'next/image';
import { ArrowRight, Bell, Briefcase, Leaf, RefreshCw } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';

const PLAN_HIGHLIGHTS = [
  { icon: <Briefcase className="size-4 text-[#C59B27]" />, text: 'Pause/resume plans easily when traveling' },
  { icon: <Leaf className="size-4 text-[#C59B27]" />, text: 'Zero added artificial colors or MSG' },
  { icon: <RefreshCw className="size-4 text-[#C59B27]" />, text: 'Weekly rotating vegetable & curry cycles' },
];

export function PlansTeaserSection() {
  return (
    <Section tone="subtle">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Eyebrow>Subscriptions</Eyebrow>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18] mt-2">
            Affordable Mess Khana &amp; Daily Lunch Box Ranchi
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#526055] leading-relaxed">
            Our monthly meal plans bring authentic home-style cooking directly to you. Enjoy hot,
            nutritious <strong>lunchbox Ranchi</strong> meals featuring a balanced daily{' '}
            <strong>mess menu</strong> with fresh sabzis, dal, rotis, and rice. Perfect for
            students, PGs, and corporate teams looking for dependable{' '}
            <strong>tiffin services near me</strong>.
          </p>

          <ul className="mt-6 space-y-3">
            {PLAN_HIGHLIGHTS.map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0F2B18]">
                <div className="flex size-7 items-center justify-center rounded-lg bg-[#EEF7F1] text-[#0F2B18]">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <ButtonLink href="/monthly-meal-plans" variant="primary" size="md" className="mt-6 gap-2 font-bold">
            <span>Explore Monthly Plans</span>
            <ArrowRight className="size-4 text-[#C59B27]" />
          </ButtonLink>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card border border-[#E8E2D8] bg-[#FAF7F2]">
            <Image
              src="/images/thali_top.png"
              alt="Premium Indian Thali"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-xl bg-[#0F2B18] p-3.5 pr-4 shadow-xl text-white sm:right-6 border border-[#C59B27]/40">
            <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-[#F3CF7A]">
              <Bell className="size-4" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-white">
                Freshly Cooked Every Day
              </p>
              <p className="text-[11px] text-[#F3CF7A]">With love &amp; homemade care</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
