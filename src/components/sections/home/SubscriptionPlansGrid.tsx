'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Info,
  CreditCard,
  Truck,
  Leaf,
  Drumstick,
  Star,
  Heart,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { CheckList, type CheckListItem } from '@/components/ui/CheckList';
import { IconBadge } from '@/components/ui/IconBadge';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { whatsappUrl } from '@/data/site';
import { trackEvent } from '@/lib/tracking';

interface Plan {
  id: string;
  title: string;
  badge: string;
  badgeIcon: ReactNode;
  mainIcon: ReactNode;
  image: string;
  originalPrice: string;
  price: string;
  descText: string;
  descHighlight: string;
  features: ReactNode[];
  footerText: string;
  waMessage: string;
  detailsHref: string;
}

const SHARED_FEATURES: CheckListItem[] = [
  {
    content: <strong>100% Advance Payment Required</strong>,
  },
  {
    icon: <Info className="size-4 text-[#86630F]" />,
    content: (
      <>
        <strong>Self-Pickup Available</strong> (Single Diner Plan)
      </>
    ),
  },
  {
    icon: <Truck className="size-4 text-[#0F2B18]" />,
    content: (
      <>
        <strong>Doorstep Tiffin Delivery</strong>: Groups of 5+ members
      </>
    ),
  },
];

const PLANS: Plan[] = [
  {
    id: 'veg',
    title: 'Standard Veg Plan',
    badge: 'Most Popular',
    badgeIcon: <Star className="size-3.5 fill-[#07170C] text-[#07170C]" />,
    mainIcon: <Leaf className="size-5 text-emerald-700" />,
    image: '/images/veg_plan.png',
    originalPrice: '₹4,800',
    price: '₹4,000',
    descText: 'Healthy, rich everyday veg meals with Shahi Paneer, Veg Dum Biryani & seasonal delicacies. Includes both Lunch & Dinner.',
    descHighlight: 'Just ₹66 per meal!',
    features: [
      <>
        <strong>2 Wholesome Meals Daily</strong> (Lunch &amp; Dinner)
      </>,
      <>
        <strong>Only ₹66 per meal</strong> (Rich Veg Replacements)
      </>,
      'Shahi Paneer + Veg Dum Biryani + Matar Paneer + Dal Bhaat Chokha',
    ],
    footerText: 'Nutritious & Wholesome. Enhanced Veg Delicacies.',
    waMessage: "Hi, I'd like to subscribe to the Standard Veg Plan (₹4,000/month for 2 Meals Daily)",
    detailsHref: '/monthly-meal-plans/veg-monthly-meal-plan',
  },
  {
    id: 'nonveg',
    title: 'Standard Non-Veg Plan',
    badge: 'Customer Favorite',
    badgeIcon: <Heart className="size-3.5 fill-[#07170C] text-[#07170C]" />,
    mainIcon: <Drumstick className="size-5 text-amber-700" />,
    image: '/images/nonveg_plan.png',
    originalPrice: '₹5,000',
    price: '₹4,200',
    descText: 'High-protein meals featuring 4 Non-Veg feasts every week (Chicken, Fish & Eggs). Includes both Lunch & Dinner.',
    descHighlight: 'Just ₹70 per meal!',
    features: [
      <>
        <strong>2 Wholesome Meals Daily</strong> (Lunch &amp; Dinner)
      </>,
      <>
        <strong>Only ₹70 per meal</strong> (4 Non-Veg Feasts Weekly!)
      </>,
      'Chicken Curry (Sun) + Biryani (Fri) + Fish (Wed) + Egg (Fri)',
    ],
    footerText: 'Fresh Local Cuts. 4 Non-Veg Feasts Weekly.',
    waMessage:
      "Hi, I'd like to subscribe to the Standard Non-Veg Plan (₹4,200/month for 2 Meals Daily with 4 Non-Veg meals/week)",
    detailsHref: '/monthly-meal-plans/non-veg-monthly-meal-plan',
  },
];

export function SubscriptionPlansGrid() {
  return (
    <Section tone="cream" className="border-b border-[#E8E2D8]">
      <SectionHeader
        eyebrow="Monthly Subscriptions"
        title="Affordable Mess Khana & Daily Lunch Box in Ranchi"
        subtitle={
          <>
            Authentic home-style cooking prepared fresh twice daily. Balanced daily{' '}
            <strong>mess menu</strong> with seasonal vegetables, dal, hot phulkas, and rice. Dependable{' '}
            <strong>tiffin services in Ranchi</strong> for students, PGs, and corporate teams.
          </>
        }
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {PLANS.map((plan) => (
          <article
            key={plan.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-[#E8E2D8] bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="grid flex-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              <div className="relative min-h-56 md:min-h-full">
                <Image
                  src={plan.image}
                  alt={`${plan.title} thali`}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#C59B27] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#07170C] shadow-md">
                  {plan.badgeIcon} {plan.badge}
                </span>
              </div>

              <div className="flex flex-col p-5 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <IconBadge icon={plan.mainIcon} tone="soft" size="md" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0F2B18]">{plan.title}</h3>
                    <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
                      <s className="text-xs text-[#6A756E]">{plan.originalPrice}</s>
                      <span className="font-display text-2xl font-bold leading-none text-[#0F2B18]">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#6A756E]">/month</span>
                    </p>
                  </div>
                </div>

                <p className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-[#FBF4DE] px-3 py-0.5 text-xs font-semibold text-[#86630F]">
                  <CheckCircle2 className="size-3.5 text-[#C59B27]" /> 2 Meals Daily (Lunch + Dinner)
                </p>

                <p className="mt-3 text-xs text-[#45514A] leading-relaxed">
                  {plan.descText} <strong className="text-[#0F2B18]">{plan.descHighlight}</strong>
                </p>

                <CheckList
                  size="sm"
                  className="mb-5 mt-4"
                  items={[...plan.features.map((content) => ({ content })), ...SHARED_FEATURES]}
                />

                <div className="mt-auto flex flex-col gap-2 pt-2">
                  <ButtonLink
                    href={whatsappUrl(plan.waMessage)}
                    onClick={() =>
                      trackEvent({
                        eventType: 'whatsapp_click',
                        buttonLocation: 'home_plans_grid',
                        intentTag: `Subscribe: ${plan.title} (${plan.price})`,
                      })
                    }
                    variant="accent"
                    block
                    className="font-bold text-xs sm:text-sm"
                  >
                    <WhatsAppIcon className="size-4 mr-2" /> Subscribe via WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    href={plan.detailsHref}
                    variant="secondary"
                    block
                    className="text-xs font-semibold"
                  >
                    View Plan Details &amp; Weekly Schedule <ChevronRight className="size-3.5 ml-1" />
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-t border-[#E8E2D8] bg-[#FAF7F2] px-5 py-3 text-xs">
              <span className="flex items-center gap-1.5 font-medium text-[#0F2B18]">
                <CheckCircle2 className="size-3.5 text-emerald-700" />
                {plan.footerText}
              </span>
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#86630F] text-[0.6875rem]">
                <CreditCard className="size-3.5" /> 100% Advance Policy
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-4 sm:p-5 shadow-xs">
        <div>
          <p className="font-display text-base font-bold text-[#0F2B18]">
            Looking for 1-Meal Daily (₹2,200) or Full Board 3-Meal Subscriptions (₹6,000)?
          </p>
          <p className="text-xs text-[#6A756E] mt-0.5">
            Explore single meal plans, breakfast additions, and corporate group catering options.
          </p>
        </div>
        <Link
          href="/monthly-meal-plans"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2B18] hover:text-[#C59B27] transition-colors"
        >
          <span>Compare All 5 Tier Plans</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </Section>
  );
}
