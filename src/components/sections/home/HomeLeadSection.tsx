import Image from 'next/image';
import {
  CreditCard,
  IndianRupee,
  PauseCircle,
  Zap,
} from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { FormCard } from '@/components/forms/FormCard';
import { FeatureCard } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';

const LEAD_CARDS = [
  {
    icon: <Zap className="size-5 text-[#C59B27]" />,
    title: 'Same-Day Activation',
    desc: 'Subscribe and start receiving fresh meals the same day with seamless onboarding.',
  },
  {
    icon: <IndianRupee className="size-5 text-[#C59B27]" />,
    title: 'Transparent Pricing',
    desc: 'Two wholesome home-style meals daily starting at ₹4,000/mo (just ₹66/meal).',
  },
  {
    icon: <CreditCard className="size-5 text-[#C59B27]" />,
    title: '100% Advance Policy',
    desc: 'Strict advance payment policy ensuring uninterrupted, dedicated daily supply.',
  },
  {
    icon: <PauseCircle className="size-5 text-[#C59B27]" />,
    title: 'Flexible Meal Pausing',
    desc: 'Pause or adjust your subscription when traveling with 12 hours prior notice.',
  },
];

export function HomeLeadSection() {
  return (
    <Section id="lead-form-section" tone="cream" className="border-b border-[#E8E2D8]">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <Eyebrow>Fast &amp; Easy Onboarding</Eyebrow>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2B18] tracking-tight mt-2">
            Get Ranchi&apos;s Most Reliable{' '}
            <span className="text-[#C59B27]">Home-Style Meals</span>
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-[#45514A] leading-relaxed max-w-xl">
            Join hundreds of university students, banking professionals, and coaching aspirants who trust our kitchen daily. Fill out the quick form to request a callback or book your trial meal.
          </p>

          {/* Real Meal Dispatch Image Showcase */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-xs">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src="/images/gallery_boxes.png"
                alt="Freshly packed tiffin meal boxes ready for dispatch across Ranchi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-[#6A756E] font-medium">
              <span>Packed warm twice daily at our Nizam Nagar central kitchen</span>
              <span className="font-bold text-[#0F2B18]">100% Sanitized Packaging</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {LEAD_CARDS.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} tone="white">
                {card.desc}
              </FeatureCard>
            ))}
          </div>
        </div>

        <FormCard
          eyebrow="Quick Callback"
          title="Speak With Our Kitchen Director"
          subtitle="Fill in your details below and we will call you back within 15 minutes."
        >
          <ContactForm variant="callback" />
        </FormCard>
      </div>
    </Section>
  );
}
