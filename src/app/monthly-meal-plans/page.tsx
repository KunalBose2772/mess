import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  Clock,
  PiggyBank,
  HeartPulse,
  Coffee,
  Leaf,
  Drumstick,
  Layers,
  Info,
  Truck,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ButtonLink, type ButtonVariant } from '@/components/ui/Button';
import { FeatureCard, StepCard } from '@/components/ui/Card';
import { CheckList, type CheckListItem } from '@/components/ui/CheckList';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PLANS_FAQS } from '@/data/faqs';
import { whatsappUrl } from '@/data/site';
import { cn } from '@/lib/cn';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Monthly Tiffin Service in Ranchi & Mess in Ranchi | Student's Mess",
  description:
    'Affordable monthly mess in Ranchi with daily lunch box service. Fresh home-style veg and non-veg tiffin service in Ranchi, mess menu rotations, and budget meal subscriptions.',
  keywords:
    'tiffin service in ranchi, mess in ranchi, tiffin services near me, lunch box service, mess menu, lunch box meals near me, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service, mess khana',
  path: '/monthly-meal-plans',
});

const BENEFITS = [
  {
    icon: <Clock className="size-5 text-[#C59B27]" />,
    title: 'Saves 2+ Hours Daily',
    desc: 'Skip grocery runs, chopping, and greasy dishwashing. Concentrate fully on competitive exams or office workloads.',
  },
  {
    icon: <PiggyBank className="size-5 text-[#C59B27]" />,
    title: 'Saves Up to 40% Cost',
    desc: 'Monthly subscriptions cost far less than daily restaurant ordering or hiring private cooks in Ranchi.',
  },
  {
    icon: <HeartPulse className="size-5 text-[#C59B27]" />,
    title: 'Light, Low-Oil Nutrition',
    desc: 'Prepared with filtered RO water, pure sunflower oil, and zero soda or artificial colors. Safe for daily two-meal dining.',
  },
  {
    icon: <Coffee className="size-5 text-[#C59B27]" />,
    title: 'Zero Cooking Fatigue',
    desc: 'Punctual lunch and dinner ready right when hunger strikes. Consistent home taste 365 days a year.',
  },
];

/* Policy rows shared by every plan */
const POLICY_ITEMS: CheckListItem[] = [
  { content: <strong>100% Advance Monthly Payment</strong> },
  {
    icon: <Info className="size-4 text-[#86630F] shrink-0 mt-0.5" />,
    content: (
      <>
        <strong>Self-Pickup Counter</strong> (Single person orders)
      </>
    ),
  },
  {
    icon: <Truck className="size-4 text-[#0F2B18] shrink-0 mt-0.5" />,
    content: (
      <>
        <strong>Doorstep Delivery</strong>: Min. 5 people / group pool
      </>
    ),
  },
];

const PAUSE_ITEM: CheckListItem = {
  content: <strong>Pause subscription up to 5 days with advance notice</strong>,
};

interface PricingPlan {
  icon: ReactNode;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  prices: Array<{ label: string; value: string; freq?: string; highlight?: boolean }>;
  valueNote?: string;
  description?: string;
  features: CheckListItem[];
  cta: { label: string; href: string; variant: ButtonVariant };
  detailsSlug?: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    icon: <Leaf className="size-5 text-emerald-700" />,
    title: 'Standard Vegetarian Plan',
    tagline: 'Clean, nutritious everyday Indian veg meals with premium weekly variety',
    image: '/images/veg_plan.png',
    imageAlt: 'Authentic homestyle vegetarian thali with basmati rice, dal fry, roti, and seasonal subzi',
    prices: [
      { label: '1 Meal Daily:', value: '₹2,200', freq: '/mo' },
      { label: '2 Meals Daily:', value: '₹4,000', freq: '/mo', highlight: true },
    ],
    valueNote: 'Only ₹66/meal (Includes Rich Veg Delicacies!)',
    features: [
      { content: 'Steamed Basmati Rice & Crispy Aloo Bhujia' },
      { content: '4 Fresh Whole-Wheat Chapatis' },
      { content: 'Traditional Dal Fry / Dal Tadka' },
      { content: 'Daily Seasonal Vegetable Subzi (R.D.S.B)' },
      {
        content: (
          <>
            <strong>Premium Special Days Included:</strong>
            <span className="block text-xs text-[#6A756E] mt-0.5">
              Shahi Paneer (Sun) &bull; Veg Dum Biryani (Fri Night) &bull; Matar Paneer (Wed) &bull; Dal Bhaat Chokha (Fri Lunch)
            </span>
          </>
        ),
      },
      { content: 'Fresh Salad, Curd/Raita & House Pickles' },
      PAUSE_ITEM,
      ...POLICY_ITEMS,
    ],
    cta: {
      label: 'Subscribe via WhatsApp',
      href: whatsappUrl(
        "Hi, I'd like to subscribe to the Standard Vegetarian plan (2 Meals Daily ₹4,000/month)"
      ),
      variant: 'primary',
    },
    detailsSlug: 'veg-monthly-meal-plan',
  },
  {
    icon: <Drumstick className="size-5 text-amber-700" />,
    title: 'Standard Non-Vegetarian Plan',
    tagline: 'High-protein thalis featuring 4 Non-Veg feasts every single week',
    image: '/images/nonveg_plan.png',
    imageAlt: 'Authentic Ranchi Dehati chicken curry thali with rice, roti, and accompaniments',
    featured: true,
    prices: [
      { label: '1 Meal Daily:', value: '₹2,400', freq: '/mo' },
      { label: '2 Meals Daily:', value: '₹4,200', freq: '/mo', highlight: true },
    ],
    valueNote: 'Only ₹70/meal (Includes 4 Non-Veg Feasts/Week!)',
    features: [
      { content: 'Includes everything in the Vegetarian Plan' },
      {
        content: (
          <>
            <strong>4 Non-Veg Feasts Every Week:</strong>
            <span className="block text-xs text-[#0F2B18] font-semibold mt-0.5">
              &bull; Dehati Chicken Curry (Sunday Dinner)<br />
              &bull; Hyderabadi Chicken Dum Biryani (Friday Dinner)<br />
              &bull; Ranchi Rohu Fish Curry (Wednesday Lunch)<br />
              &bull; Homestyle Spiced Egg Curry (Friday Lunch)
            </span>
          </>
        ),
      },
      { content: 'Prepared in strictly separated cookware & kitchen areas' },
      { content: 'Balanced protein macros for students and gym-goers' },
      PAUSE_ITEM,
      ...POLICY_ITEMS,
    ],
    cta: {
      label: 'Subscribe via WhatsApp',
      href: whatsappUrl(
        "Hi, I'd like to subscribe to the Standard Non-Vegetarian plan (2 Meals Daily ₹4,200/month with 4 Non-Veg Meals/Week)"
      ),
      variant: 'accent',
    },
    detailsSlug: 'non-veg-monthly-meal-plan',
  },
  {
    icon: <Layers className="size-5 text-[#86630F]" />,
    title: 'Full Board (3 Meals) & Custom',
    tagline: 'Breakfast + Lunch + Dinner or customized hostel room plans',
    image: '/images/thali_top.png',
    imageAlt: 'Wholesome balanced Indian thali meal presentation',
    prices: [
      { label: '3 Meals Daily (Full Board):', value: '₹5,800 - ₹6,000', freq: '/mo' },
      { label: 'Breakfast Add-on:', value: '₹1,800', freq: '/mo' },
    ],
    description:
      'Includes daily morning breakfast (Dhuska Ghugni, Puri Sabji, Chole Bhature, Idli Sambar, Stuffed Parathas, Kachori, Upma & Poha) plus complete Lunch & Dinner.',
    features: [
      { content: 'Daily morning breakfast + afternoon lunch + evening dinner' },
      { content: '4 Non-Veg meals weekly or 100% Pure Veg options' },
      { content: 'Includes Dhuska, Chole Bhature, Parathas & Puris' },
      { content: 'Flexible portions and holiday pause adjustments' },
      ...POLICY_ITEMS,
    ],
    cta: {
      label: 'Inquire Full Board on WhatsApp',
      href: whatsappUrl(
        "Hi, I'd like to inquire/subscribe to the Full Board (3 Meals Daily: Breakfast + Lunch + Dinner ₹5,800-₹6,000/month)"
      ),
      variant: 'secondary',
    },
    detailsSlug: 'full-board-meal-plan',
  },
];

const WEEKLY_ROTATION = [
  {
    day: 'Monday',
    breakfast: 'Stuffed Paratha + Fresh Curd & Pickle',
    veg: 'Aloo Gobi Matar (R.D.S.B) + Dal Tadka + Steamed Rice + Chapatis + Bhujia',
    nonVeg: 'Veg standard (Pure Veg Monday)',
    dinner: 'Mix Veg Sabzi + Dal Fry + 4 Tawa Rotis + Salad',
  },
  {
    day: 'Tuesday',
    breakfast: 'South Indian Idli Sambar & Coconut Chutney',
    veg: 'Seasonal Subzi Fry (R.D.S.B) + Chana Dal + Rice + Roti + Bhujia + Raita',
    nonVeg: 'Veg standard (Pure Veg Tuesday)',
    dinner: 'Kadhai Bhindi / Aloo Shimla Mirch + Moong Dal + Chapatis',
  },
  {
    day: 'Wednesday',
    breakfast: 'Khasta Kachori with Tangy Aloo Masala Gravy',
    veg: 'Matar Paneer Masala + Yellow Dal + Steamed Rice + Roti + Bhujia',
    nonVeg: 'Ranchi Rohu Fish Curry (2 pcs mustard gravy) + Rice + Bhujia',
    dinner: 'Homestyle Seasonal Sabzi + Dal Fry + 4 Chapatis',
  },
  {
    day: 'Thursday',
    breakfast: 'Punjabi Chole Bhature with Pickled Onions',
    veg: 'Seasonal Sabzi (R.D.S.B) + Toor Dal + Steamed Rice + Chapatis + Curd',
    nonVeg: 'Veg standard (Pure Veg Thursday)',
    dinner: 'Aloo Parwal Rasa / Lauki Chana Dal + 4 Phulkas',
  },
  {
    day: 'Friday',
    breakfast: 'Poha & Vegetable Upma with Roasted Peanuts',
    veg: 'Jharkhand Heritage Dal Bhaat Chokha with Desi Ghee Tadka + Papad',
    nonVeg: 'Egg Curry Lunch (2 eggs) & Hyderabadi Chicken Dum Biryani Dinner',
    dinner: 'Hyderabadi Chicken Dum Biryani (Non-Veg) / Royal Veg Dum Biryani (Veg) + Raita',
  },
  {
    day: 'Saturday',
    breakfast: 'Jharkhand Famous Dhuska with Kala Chana Ghugni',
    veg: 'Comforting Weekend R.D.S.B + Dal Fry + Rice + Roti + Bhujia + Papad',
    nonVeg: 'Veg standard (Pure Veg Saturday)',
    dinner: 'Aloo Gajar Matar + Dal Tadka + 4 Chapatis + Chutney',
  },
  {
    day: 'Sunday',
    breakfast: 'Garma-Garam Puri Sabji with Halwa / Sweet',
    veg: 'Seasonal Sabzi (R.D.S.B) + Jeera Pulao + Dal Tadka + Bhujia + Salad',
    nonVeg: 'Dehati Chicken Curry Dinner (3 pcs) + 4 Butter Rotis + Rice + Sweet',
    dinner: 'Shahi Paneer Butter Masala (Veg) / Ranchi Chicken Curry (Non-Veg) + Sweet',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Select Plan & Meal Count',
    desc: 'Choose Veg, Non-Veg, or Full Board plans with single-meal or dual-meal daily schedule tailored to your budget.',
  },
  {
    num: '02',
    title: 'Confirm on WhatsApp',
    desc: 'Send your preferred meal times and delivery location or pickup slot to verify onboarding.',
  },
  {
    num: '03',
    title: 'Punctual Daily Service',
    desc: 'Hot, freshly prepared lunch box service delivered or packed punctually starting the very next day.',
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={cn(
        'relative flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300',
        plan.featured
          ? 'border-[#C59B27] shadow-xl ring-2 ring-[#C59B27]/30'
          : 'border-[#E8E2D8] shadow-sm hover:border-[#C59B27]/60 hover:shadow-md'
      )}
    >
      {plan.featured && (
        <div className="absolute right-3 top-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C59B27] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#07170C] shadow-sm">
            <ShieldCheck className="size-3.5" /> Most Popular
          </span>
        </div>
      )}

      {/* Card Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E8E2D8] bg-[#FAF7F2]">
        <Image
          src={plan.image}
          alt={plan.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07170C]/75 via-[#07170C]/20 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="flex size-9 items-center justify-center rounded-xl bg-white/95 text-[#0F2B18] shadow-xs backdrop-blur-xs">
            {plan.icon}
          </div>
          <span className="rounded-full bg-[#0F2B18]/85 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-xs">
            Prepared Fresh Daily
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold text-[#0F2B18]">{plan.title}</h3>
        <p className="mt-1 text-xs sm:text-sm text-[#45514A] leading-relaxed">{plan.tagline}</p>

        {/* Pricing Tiers */}
        <dl className="mt-5 space-y-2">
          {plan.prices.map((price) => (
            <div
              key={price.label}
              className={cn(
                'flex items-baseline justify-between gap-3 rounded-xl px-4 py-2.5 transition-colors',
                price.highlight
                  ? 'border border-[#C59B27]/40 bg-[#FBF4DE] text-[#0F2B18]'
                  : 'border border-[#E8E2D8] bg-[#FAF7F2] text-[#45514A]'
              )}
            >
              <dt className={cn('text-xs sm:text-sm font-medium', price.highlight && 'font-bold text-[#0F2B18]')}>
                {price.label}
              </dt>
              <dd
                className={cn(
                  'font-display font-bold leading-none',
                  price.highlight ? 'text-2xl text-[#0F2B18]' : 'text-xl text-[#0F2B18]'
                )}
              >
                {price.value}
                {price.freq && (
                  <span className="ml-1 text-xs font-sans font-normal text-[#6A756E]">{price.freq}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
        {plan.valueNote && (
          <p className="mt-2 text-right text-xs font-bold text-[#86630F]">{plan.valueNote}</p>
        )}

        {plan.description && (
          <p className="mt-4 text-xs sm:text-sm text-[#45514A] leading-relaxed border-t border-[#E8E2D8] pt-3">
            {plan.description}
          </p>
        )}

        <CheckList size="sm" items={plan.features} className="my-5 flex-1 border-t border-[#E8E2D8] pt-5" />

        <div className="mt-auto flex flex-col gap-2.5 pt-2">
          <ButtonLink href={plan.cta.href} variant={plan.cta.variant} block className="gap-2 font-bold text-xs sm:text-sm">
            <MessageCircle className="size-4" />
            <span>{plan.cta.label}</span>
          </ButtonLink>
          {plan.detailsSlug && (
            <ButtonLink
              href={`/monthly-meal-plans/${plan.detailsSlug}`}
              variant="secondary"
              block
              className="text-xs font-semibold text-[#0F2B18]"
            >
              <span>Full Specifications &amp; Schedule</span>
              <ArrowRight className="size-3.5" />
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}

function RotationCell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <td
      className="block px-4 py-2 align-top before:block before:text-[0.6875rem] before:font-bold before:uppercase before:tracking-wider before:text-[#86630F] before:content-[attr(data-label)] md:table-cell md:px-4 md:py-3 md:before:hidden text-xs sm:text-sm text-[#45514A]"
      data-label={label}
    >
      {children}
    </td>
  );
}

export default function MonthlyPlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Meal Subscriptions • Ranchi Mess Service"
        title="Monthly Tiffin Service in Ranchi & Mess Plans"
        breadcrumbs={[{ label: 'Monthly Plans' }]}
        subtitle={
          <>
            Looking for dependable <strong>tiffin services near me</strong> or an authentic{' '}
            <strong>mess in Ranchi</strong>? Our monthly subscriptions provide wholesome{' '}
            <strong>lunch box service</strong>, daily rotating <strong>mess menu</strong>, and warm
            home-style comfort starting at just ₹66 per meal.
          </>
        }
      />

      {/* Benefits */}
      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Value & Benefits"
          title="Why Choose a Monthly Subscription?"
          subtitle="Simplify your nutrition, protect your digestive health, and focus 100% on your studies or career."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {BENEFITS.map((b) => (
            <FeatureCard key={b.title} icon={b.icon} title={b.title} tone="white">
              {b.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Pricing Plans"
          title="Transparent Monthly Tiffin Tariffs in Ranchi"
          subtitle="Flexible packages tailored to students and working professionals. Select single lunch box service or complete 2-meal daily dining."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </Section>

      {/* Weekly Rotation Table */}
      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Menu Rotation"
          title="Sample Weekly Tiffin Rotation • Mess Menu"
          subtitle="Our rotating mess menu delivers wholesome regional variety so your daily lunch box ranchi meals stay fresh, balanced, and appetizing."
        />

        <div className="overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-xs">
          <table className="block w-full text-left md:table">
            <thead className="hidden md:table-header-group">
              <tr className="bg-[#0F2B18] text-white text-xs font-semibold tracking-wider uppercase">
                {['Day', 'Morning Breakfast', 'Veg Lunch Details', 'Non-Veg Options', 'Dinner Comforts'].map((h) => (
                  <th key={h} scope="col" className="px-4 py-3.5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="block divide-y divide-[#E8E2D8] md:table-row-group">
              {WEEKLY_ROTATION.map((row) => (
                <tr
                  key={row.day}
                  className="block p-4 first:pt-4 md:table-row md:p-0 odd:bg-white even:bg-[#FAF7F2] hover:bg-[#FBF4DE]/40 transition-colors"
                >
                  <th
                    scope="row"
                    className="font-display block pb-1 text-base font-bold text-[#0F2B18] md:table-cell md:px-4 md:py-3 md:font-sans md:text-sm"
                  >
                    {row.day}
                  </th>
                  <RotationCell label="Breakfast">{row.breakfast}</RotationCell>
                  <RotationCell label="Veg Lunch">{row.veg}</RotationCell>
                  <RotationCell label="Non-Veg">{row.nonVeg}</RotationCell>
                  <RotationCell label="Dinner">{row.dinner}</RotationCell>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Steps */}
      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Onboarding"
          title="How to Begin Your Subscription"
          subtitle="Three simple steps to secure fresh, daily homemade meals delivered to your doorstep."
        />
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {STEPS.map((step) => (
            <StepCard key={step.num} step={step.num} title={step.title}>
              {step.desc}
            </StepCard>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Subscription & Delivery FAQs"
          subtitle="Clear, upfront answers regarding payment terms, pausing policies, and delivery limits in Ranchi."
        />
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={PLANS_FAQS} />
        </div>
      </Section>

      {/* Bottom CTA */}
      <CtaBanner
        tone="dark"
        title={
          <>
            Best Tiffin Service in Ranchi &bull; <span className="text-[#C59B27]">Subscribe Today</span>
          </>
        }
        subtitle={
          <>
            Ditch kitchen stress and irregular restaurant meals. Enjoy nutritious, authentic home dining with Ranchi&apos;s
            most dependable <strong>lunch box service</strong> and <strong>mess in Ranchi</strong>.
          </>
        }
        primaryCta={{
          href: whatsappUrl("Hi, I'd like to subscribe to a monthly tiffin plan."),
          label: 'Subscribe via WhatsApp',
        }}
        secondaryCta={{ href: '/contact', label: 'Submit Kitchen Inquiry' }}
      />
    </>
  );
}
