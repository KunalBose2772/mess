import Image from 'next/image';
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Package,
  Phone,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Card, StepCard } from '@/components/ui/Card';
import { CheckList } from '@/components/ui/CheckList';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { IconBadge } from '@/components/ui/IconBadge';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SITE_CONFIG, whatsappUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Takeaway Meals & Lunch Box Ranchi | Student's Mess Ranchi",
  description:
    "Order fresh takeaway lunch box ranchi meals at Student's Mess. Quick lunch box service, authentic mess in Ranchi, daily mess menu, and top tiffin service in Ranchi.",
  keywords:
    'lunch box ranchi, lunchbox ranchi, lunch box meals near me, lunch box service, lunch service, tiffin services near me, mess menu, mess in ranchi, tiffin service in ranchi, best tiffin service ranchi, mess khana',
  path: '/takeaway',
});

const COMBOS = [
  {
    tag: 'Best Everyday',
    title: 'Veg Standard Combo (RDSB)',
    price: '₹90',
    image: '/images/veg_plan.png',
    imageAlt: 'Vegetarian standard homestyle meal combo',
    desc: 'Steamed Rice, 4 wheat rotis, traditional dal fry, seasonal subzi, crispy aloo bhujia, fresh cucumber salad, and homemade mango pickle.',
  },
  {
    tag: 'Meat Lovers',
    title: 'Dehati Chicken Combo',
    price: '₹150',
    image: '/images/nonveg_plan.png',
    imageAlt: 'Authentic slow-cooked Ranchi style chicken curry combo',
    desc: 'Authentic slow-cooked Ranchi style chicken curry (3 pieces), served alongside basmati rice or 4 hot chapatis, dal, crispy bhujia, and salad.',
  },
  {
    tag: 'Fish Special',
    title: 'Ranchi Fish Combo',
    price: '₹140',
    image: '/images/thali_top.png',
    imageAlt: 'Traditional Ranchi mustard Rohu fish curry combo',
    desc: 'Fresh Rohu fish curry (2 pieces) in authentic mustard-garlic-tomato gravy, served with steamed rice, crispy bhujia, salad, and lemon.',
  },
  {
    tag: 'Egg Special',
    title: 'Egg Curry Combo',
    price: '₹110',
    image: '/images/thali_top.png',
    imageAlt: 'Spiced homestyle egg curry combo meal',
    desc: 'Fried hard-boiled eggs (2 pieces) simmered in local tomato-onion gravy, paired with rice or 4 wheat chapatis, dal, crispy bhujia, and salad.',
  },
];

export default function TakeawayPage() {
  return (
    <>
      <PageHero
        eyebrow="Daily Takeaway • Ranchi Lunch Box Service"
        title={
          <>
            Takeaway Meals &amp;{' '}
            <span className="text-[#F3CF7A]">Fresh Lunch Box Ranchi</span>
          </>
        }
        breadcrumbs={[{ label: 'Takeaway' }]}
        subtitle={
          <>
            Looking for hot, hygienic <strong>lunch box meals near me</strong> or reliable{' '}
            <strong>lunch box service</strong>? Our takeaway counter at Student&apos;s Mess serves
            freshly prepared thalis and packed daily meals straight from our kitchen in Ranchi.
          </>
        }
      />

      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Ordering Process"
          title={
            <>
              How Our Express Counter{' '}
              <span className="text-[#C59B27]">Takeaway Works</span>
            </>
          }
          subtitle={
            <>
              Skip cooking hassles. Call ahead for your daily <strong>lunch service</strong> or{' '}
              <strong>tiffin services near me</strong> pickup in minutes.
            </>
          }
        />

        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          <StepCard step="01" title="01. Call or WhatsApp Ahead">
            Call{' '}
            <a href={SITE_CONFIG.phoneHref} className="font-bold text-[#0F2B18] underline decoration-[#C59B27] underline-offset-2 hover:text-[#C59B27] transition-colors">
              {SITE_CONFIG.phoneDisplay}
            </a>{' '}
            or drop a quick WhatsApp message indicating your thali combo choice and quantity.
          </StepCard>
          <StepCard step="02" title="02. Fresh Meal Packaging">
            Our kitchen team packs your <strong>lunch box ranchi</strong> fresh. We seal it in
            high-grade spill-proof boxes to retain piping hot temperature and aroma.
          </StepCard>
          <StepCard step="03" title="03. Instant Kitchen Pickup">
            Drive by our central kitchen at Nizam Nagar, Hindpiri, pay via cash or UPI, and receive
            your packed food without waiting in queues.
          </StepCard>
        </div>
      </Section>

      <Section tone="white" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Express Counter Combos"
          title={
            <>
              Popular Takeaway{' '}
              <span className="text-[#C59B27]">Lunch Box Ranchi Combos</span>
            </>
          }
          subtitle="Fast, satisfying, and balanced mess khana thalis favored by students, bachelors, and working professionals seeking the best tiffin service in Ranchi."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {COMBOS.map((combo) => (
            <article
              key={combo.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-card transition-all duration-200 hover:border-[#C59B27]/70 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E8E2D8]/70 bg-[#FAF7F2]">
                <Image
                  src={combo.image}
                  alt={combo.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07170C]/80 via-transparent to-transparent" />
                <span className="text-[0.6875rem] absolute bottom-3 left-3 rounded-full bg-[#0F2B18]/90 backdrop-blur-xs px-2.5 py-1 font-bold uppercase tracking-wider text-[#F3CF7A] border border-[#C59B27]/40 shadow-xs">
                  {combo.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-base font-bold text-[#0F2B18] leading-tight">
                    {combo.title}
                  </h3>
                  <span className="font-display text-xl font-bold text-[#0F2B18] tabular-nums">
                    {combo.price}
                  </span>
                </div>
                <p className="mt-2.5 text-xs text-[#526055] leading-relaxed flex-1">{combo.desc}</p>
                <div className="mt-4 pt-3 border-t border-[#E8E2D8]/70">
                  <ButtonLink
                    href={whatsappUrl(`Hi, I want to order takeaway: ${combo.title} (${combo.price})`)}
                    variant="whatsapp"
                    size="sm"
                    block
                  >
                    <MessageCircle className="size-3.5" /> Order This Combo
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonLink href="/todays-menu" variant="outline" className="font-bold">
            <span>Check Today&apos;s Full Rotating Menu</span>
            <ArrowRight className="size-4 text-[#C59B27]" />
          </ButtonLink>
        </div>
      </Section>

      <Section tone="dark" className="border-b border-[#C59B27]/30">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow className="text-[#F3CF7A]">Pickup Location &amp; Timings</Eyebrow>
            <h2 className="text-h2 font-display font-bold text-white tracking-tight">
              Direct Kitchen Counter Pickup
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm text-white/85 leading-relaxed">
              Drop in directly to collect your fresh <strong>lunchbox Ranchi</strong> meals. Convenient
              parking access for two-wheelers and cars in Hindpiri.
            </p>

            <CheckList
              className="mt-6 text-white/90"
              items={[
                { icon: <MapPin className="size-4 text-[#F3CF7A]" />, content: SITE_CONFIG.address },
                {
                  icon: <Clock className="size-4 text-[#F3CF7A]" />,
                  content: 'Lunch Pickup: 11:30 AM – 3:30 PM (All 7 Days)',
                },
                {
                  icon: <Clock className="size-4 text-[#F3CF7A]" />,
                  content: 'Dinner Pickup: 7:00 PM – 10:00 PM (All 7 Days)',
                },
              ]}
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#C59B27]/30 shadow-xl">
              <Image
                src="/images/takeaway.png"
                alt="Fresh takeaway tiffin packaging ready at Student's Mess"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07170C]/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-bold text-[#F3CF7A]">Spill-Proof Heat-Sealed Containers</span>
                <span className="rounded-full bg-[#0F2B18]/90 border border-[#C59B27]/40 px-2 py-0.5 text-[0.6875rem] font-bold text-white">Ready in 10 mins</span>
              </div>
            </div>

            <Card tone="glass" className="text-center p-6 sm:p-7 border border-[#C59B27]/30 bg-white/5">
              <IconBadge icon={<Package className="size-6 text-[#F3CF7A]" />} tone="brand" size="md" className="mx-auto" />
              <h3 className="font-display text-lg font-bold text-white mt-3">Call Ahead to Save Waiting Time</h3>
              <p className="mt-1 text-xs text-white/80">We pack your meal so it&apos;s ready the moment you arrive.</p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <ButtonLink href={SITE_CONFIG.phoneHref} variant="outline-light" size="md" block className="text-xs font-bold">
                  <Phone className="size-3.5 text-[#F3CF7A]" /> Call: {SITE_CONFIG.phoneDisplay}
                </ButtonLink>
                <ButtonLink
                  href={whatsappUrl("Hi, I'd like to order takeaway.")}
                  variant="whatsapp"
                  size="md"
                  block
                  className="text-xs font-bold"
                >
                  <MessageCircle className="size-3.5" /> WhatsApp Order
                </ButtonLink>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
