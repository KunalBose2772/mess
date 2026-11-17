import Image from 'next/image';
import {
  UtensilsCrossed,
  Flame,
  ShieldCheck,
  Users,
  Wallet,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { GoogleGIcon } from '@/components/ui/GoogleGIcon';
import { StarRating } from '@/components/ui/StarRating';

const HERO_FEATURES = [
  { icon: UtensilsCrossed, title: 'Veg & Non-Veg', sub: 'Fresh Daily Options' },
  { icon: Flame, title: 'Cooked Daily', sub: 'Morning & Evening' },
  { icon: ShieldCheck, title: 'Hygienic Kitchen', sub: 'FSSAI Standards' },
  { icon: Users, title: 'Bulk Catering', sub: 'Hostels & Corporate' },
  { icon: Wallet, title: 'From ₹66/Meal', sub: 'Affordable Monthly' },
];

const AVATARS = [
  '/images/avatar1.png',
  '/images/avatar2.png',
  '/images/avatar3.png',
  '/images/avatar4.png',
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FCFBF7] border-b border-[#E8E2D8]">
      {/* Background Food Photography (Desktop & Tablet) */}
      <div className="absolute inset-y-0 right-0 -z-20 hidden w-1/2 lg:block">
        <Image
          src="/images/hero.png"
          alt="Fresh authentic Indian thali meal served at Student's Mess Ranchi"
          fill
          priority
          sizes="50vw"
          className="object-cover object-center"
        />
        {/* Soft natural gradient blend to warm cream */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#FCFBF7] via-[#FCFBF7]/80 to-transparent"
        />
      </div>

      <Container className="pt-8 pb-10 sm:pt-12 sm:pb-14 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Main Hero Copy & Actions */}
          <div className="lg:col-span-7">
            {/* Heritage Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C59B27]/40 bg-[#FBF4DE] px-3.5 py-1 text-xs font-bold text-[#86630F] shadow-xs">
              <Sparkles className="size-3.5 text-[#C59B27]" />
              <span>Ranchi&apos;s Trusted Culinary Landmark</span>
              <span className="hidden sm:inline text-stone-400">•</span>
              <span className="hidden sm:inline text-[#0F2B18] font-bold">Since 1999</span>
            </div>

            {/* Main SEO Headline */}
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#0F2B18] sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              Best Tiffin Service in Ranchi{' '}
              <span className="text-[#C59B27]">&amp; Authentic Ghar Jaisa Mess</span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#45514A] sm:text-base lg:text-lg">
              Wholesome, hygienic home-style lunch and dinner for students, working professionals, and
              corporate teams. Prepared with fresh local ingredients, pure cooking oils, and zero
              compromise on taste.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <ButtonLink
                href="/todays-menu"
                variant="primary"
                size="md"
                className="h-11 sm:h-12 px-5 sm:px-6 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg"
              >
                <UtensilsCrossed className="size-4 mr-2 text-[#C59B27]" />
                <span>Today&apos;s Menu</span>
                <ArrowRight className="size-4 ml-2" />
              </ButtonLink>
              <ButtonLink
                href="/monthly-meal-plans"
                variant="accent"
                size="md"
                className="h-11 sm:h-12 px-5 sm:px-6 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg"
              >
                <span>Monthly Plans (₹66/Meal)</span>
              </ButtonLink>
              <ButtonLink
                href="/bulk-orders"
                variant="secondary"
                size="md"
                className="h-11 sm:h-12 px-4 sm:px-5 text-xs sm:text-sm font-semibold"
              >
                <span>Bulk Catering</span>
              </ButtonLink>
            </div>

            {/* Social Proof & Rating Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8E2D8]">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Satisfied Student's Mess customer ${i + 1}`}
                    width={36}
                    height={36}
                    className="size-8 sm:size-9 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 font-bold text-[#0F2B18]">
                  <StarRating value={5} size={14} className="text-[#C59B27]" />
                  <span>4.8 / 5 Rating</span>
                  <span className="text-[#6A756E] font-normal">(320+ Reviews)</span>
                  <GoogleGIcon size={14} className="ml-1" />
                </div>
                <p className="text-[0.6875rem] sm:text-xs text-[#6A756E] mt-0.5">
                  Trusted by <strong>500+ daily diners</strong> in Lalpur, Morabadi, Kanke &amp; Argora
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Hero Food Image Showcase */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#E8E2D8] shadow-lg lg:hidden">
            <Image
              src="/images/hero.png"
              alt="Delicious Indian Thali with dal, paneer, roti, rice and salad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-[#0F2B18]/90 p-3 text-white backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#C59B27]">Fresh Daily Batch</span>
                <span className="rounded-full bg-emerald-600/80 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-white">
                  Pure Quality
                </span>
              </div>
              <p className="mt-1 text-[0.6875rem] text-stone-200">
                Hot tiffins delivered twice daily across 15+ Ranchi localities
              </p>
            </div>
          </div>
        </div>

        {/* 5-Pillar Feature Bar */}
        <div className="mt-10 pt-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {HERO_FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex items-center gap-3 rounded-2xl border border-[#E8E2D8] bg-white p-3 sm:p-3.5 shadow-xs transition-all hover:border-[#C59B27]/50 hover:shadow-sm"
                >
                  <span className="inline-flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-[#FBF4DE] text-[#86630F]">
                    <Icon className="size-4 sm:size-5 text-[#C59B27]" />
                  </span>
                  <div className="min-w-0">
                    <strong className="block text-xs sm:text-sm font-bold text-[#0F2B18] truncate">
                      {feat.title}
                    </strong>
                    <span className="block text-[0.6875rem] text-[#6A756E] truncate">
                      {feat.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
