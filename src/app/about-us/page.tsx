import Image from 'next/image';
import {
  ChefHat,
  Flame,
  Heart,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Wallet,
} from 'lucide-react';
import { Card, FeatureCard } from '@/components/ui/Card';
import { CheckList } from '@/components/ui/CheckList';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "About Student's Mess Ranchi | Best Tiffin Service & Mess in Ranchi Since 1999",
  description:
    "Learn about Student's Mess — Ranchi's trusted family-run kitchen serving the best tiffin service in Ranchi, authentic mess menu, and daily lunch box service since 1999.",
  keywords:
    'mess in ranchi, tiffin service in ranchi, best tiffin service ranchi, tiffin services near me, lunch box service, mess menu, lunch box meals near me, lunch box ranchi, lunchbox ranchi, ranchi mess service, mess khana',
  path: '/about-us',
});

const VALUES = [
  {
    icon: <Flame className="size-5 text-[#C59B27]" />,
    title: 'Authenticity',
    desc: 'Traditional cooking recipes that preserve genuine regional Indian flavors without synthetic shortcuts.',
  },
  {
    icon: <Sparkles className="size-5 text-[#C59B27]" />,
    title: 'Hygiene & Cleanliness',
    desc: 'Sanitized prep tables, steam-cleaned utensils, and 100% RO-purified water for all cooking.',
  },
  {
    icon: <Wallet className="size-5 text-[#C59B27]" />,
    title: 'Fair Affordability',
    desc: 'Keeping wholesome meals affordable for students and professionals, starting at just ₹66 per meal.',
  },
  {
    icon: <RefreshCw className="size-5 text-[#C59B27]" />,
    title: 'Consistent Quality',
    desc: 'The same dependable home-style taste and punctual delivery schedule day in, day out.',
  },
  {
    icon: <ShieldCheck className="size-5 text-[#C59B27]" />,
    title: 'Pure Ingredients',
    desc: 'Wholesome cooking with cold-pressed oils, fresh local produce, and zero artificial coloring or soda.',
  },
  {
    icon: <Heart className="size-5 text-[#C59B27]" />,
    title: 'Family Care',
    desc: 'Treating every monthly subscriber like a valued family member seated at our home dining table.',
  },
];

const TEAM = [
  {
    icon: <ChefHat className="size-8 text-[#C59B27]" />,
    title: 'Founding Culinary Director',
    role: 'Head of Culinary & Sourcing',
    bio: 'With 30+ years of cooking mastery, oversees daily spice blending, fresh vegetable inspections, and local mandi farmer sourcing at 5:00 AM.',
  },
  {
    icon: <UserCheck className="size-8 text-[#C59B27]" />,
    title: 'Operations & Logistics Manager',
    role: 'Kitchen Hygiene & Route Logistics',
    bio: 'Ensures strict compliance with FSSAI safety standards, monitors insulated packaging temperatures, and coordinates dispatch across 15 Ranchi delivery routes.',
  },
];

const HYGIENE_POINTS = [
  '100% RO-filtered drinking and cooking water used for every prep and wash cycle.',
  'Strictly segregated cooking blocks and dedicated utensils for vegetarian and non-vegetarian menus.',
  'Twice-daily deep kitchen sanitization routines pre-shift and post-shift.',
  'Temperature-controlled insulated transit containers to preserve heat and prevent bacterial growth.',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Roots • Ranchi Mess Service Since 1999"
        title={
          <>
            About Student&apos;s Mess Ranchi •{' '}
            <span className="text-[#C59B27]">Trusted Tiffin Service</span>
          </>
        }
        breadcrumbs={[{ label: 'About Us' }]}
        subtitle={
          <>
            Serving authentic home-style <strong>mess khana</strong>, daily rotating{' '}
            <strong>mess menu</strong>, and dependable <strong>lunch box service</strong> across
            Ranchi since 1999.
          </>
        }
      />

      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>Established 1999</Eyebrow>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2B18] tracking-tight mt-2">
              A 26-Year Tradition of Taste, Trust &amp;{' '}
              <span className="text-[#C59B27]">Family Kitchen Care</span>
            </h2>
            <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#45514A] leading-relaxed">
              <p>
                In 1999, Student&apos;s Mess was born out of a simple observation: students moving
                to Ranchi for competitive exam coaching missed the comforting taste of home-cooked food.
                What started as a small dining table in Nizam Nagar, Hindpiri serving five students quickly
                became the <strong>best tiffin service in Ranchi</strong> and a beloved daily{' '}
                <strong>mess in Ranchi</strong> for working professionals, bachelors, and corporate
                teams.
              </p>
              <p>
                We believe that food is more than just sustenance; it is comfort and memory. That is why we
                have never compromised on our core recipe principles: freshly sourced local vegetables,
                hand-ground spices, zero synthetic colors, and preparation done with the same care
                we use for our own family.
              </p>
              <p>
                Over the last 26 years, Ranchi has grown into a bustling capital, but our
                kitchen&apos;s heart remains right here—providing dependable{' '}
                <strong>tiffin services near me</strong>, nourishing{' '}
                <strong>lunch box meals near me</strong>, and authentic{' '}
                <strong>lunch box Ranchi</strong> thalis every single day.
              </p>
            </div>
          </div>

          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#E8E2D8] shadow-md">
              <Image
                src="/images/gallery_kitchen.png"
                alt="Student's Mess kitchen in Hindpiri, Ranchi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-4 left-4 rounded-xl bg-[#0F2B18]/95 backdrop-blur-md border border-[#C59B27]/30 px-4 py-2 font-display text-xs sm:text-sm font-bold text-white shadow-lg sm:left-6">
              Our Central Kitchen Since 1999
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Our Core Values"
          title={
            <>
              The Principles We{' '}
              <span className="text-[#C59B27]">Cook &amp; Serve By</span>
            </>
          }
          subtitle="Six foundational standards that define every single meal packaged and delivered by our team."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VALUES.map((val) => (
            <FeatureCard key={val.title} icon={val.icon} title={val.title} tone="white">
              {val.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Family Leadership"
          title={
            <>
              Meet the Minds Behind{' '}
              <span className="text-[#C59B27]">Our Daily Kitchen</span>
            </>
          }
          subtitle="Direct, hands-on management overseeing everything from 5:00 AM market sourcing to final temperature packaging."
        />
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:gap-6">
          {TEAM.map((member) => (
            <Card key={member.title} tone="white" className="text-center p-6 sm:p-8">
              <span
                aria-hidden="true"
                className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-[#0F2B18] text-[#C59B27] border border-[#C59B27]/30 shadow-xs"
              >
                {member.icon}
              </span>
              <h3 className="font-display text-lg font-bold text-[#0F2B18] mt-4">{member.title}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#86630F] mt-1">{member.role}</p>
              <p className="text-xs sm:text-sm text-[#45514A] mt-3 leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="dark" className="border-b border-[#07170C] bg-[#0F2B18] text-white">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <Eyebrow className="text-[#C59B27]">Hygiene Protocols</Eyebrow>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
              Our Rigorous Kitchen Food Safety Standards
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
              We maintain commercial-scale cleanliness protocols with residential care. Here is how
              we guarantee food safety for hundreds of daily subscribers:
            </p>
            <CheckList
              className="mt-6 text-stone-200"
              items={HYGIENE_POINTS.map((content) => ({ content, iconClassName: 'text-[#C59B27]' }))}
            />
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-xl">
              <Image
                src="/images/gallery_prep.png"
                alt="Sanitized food preparation at Student's Mess kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07170C]/90 via-[#07170C]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-[#0F2B18]/90 px-4 py-3 backdrop-blur-md border border-[#C59B27]/30">
                <ShieldAlert className="size-6 text-[#C59B27] shrink-0" />
                <div>
                  <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#C59B27]">
                    FSSAI Certified Protocols
                  </p>
                  <p className="text-xs font-bold text-white">100% RO Filtered &amp; Daily Sanitized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner
        title={
          <>
            Experience the Best Tiffin Service <span className="text-accent">in Ranchi</span>
          </>
        }
        subtitle={
          <>
            Subscribe to our monthly <strong>tiffin service in Ranchi</strong> or order fresh{' '}
            <strong>lunch service</strong> from Ranchi&apos;s top-rated kitchen.
          </>
        }
        primaryCta={{ href: '/monthly-meal-plans', label: 'Explore Meal Plans' }}
        secondaryCta={{ href: '/contact', label: 'Contact Our Kitchen' }}
      />
    </>
  );
}
