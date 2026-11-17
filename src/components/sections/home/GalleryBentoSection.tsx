import Image from 'next/image';
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/cn';

const GALLERY_PILLS = [
  { icon: <Leaf className="size-4 text-[#C59B27]" />, label: 'Fresh Mandi Produce Daily' },
  { icon: <ShieldCheck className="size-4 text-[#C59B27]" />, label: 'Sanitized Kitchen Prep' },
  { icon: <UtensilsCrossed className="size-4 text-[#C59B27]" />, label: 'Authentic Regional Flavors' },
  { icon: <Truck className="size-4 text-[#C59B27]" />, label: 'Punctual Ranchi Dispatch' },
];

interface BentoImageProps {
  src: string;
  alt: string;
  label: string;
  sizes: string;
  className?: string;
  badge?: string;
}

function BentoImage({ src, alt, label, sizes, className, badge }: BentoImageProps) {
  return (
    <figure className={cn('group relative min-h-48 overflow-hidden rounded-2xl border border-[#E8E2D8] bg-[#FAF7F2] shadow-xs', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#07170C]/85 via-transparent to-transparent"
      />
      {badge && (
        <span className="text-[0.6875rem] absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs px-2.5 py-1 font-bold uppercase tracking-wider text-[#0F2B18] shadow-xs border border-[#E8E2D8]">
          <Leaf className="size-3 text-emerald-700" />
          <span>{badge}</span>
        </span>
      )}
      <figcaption className="text-xs sm:text-sm absolute bottom-3 left-3 sm:left-4 font-bold text-white">
        {label}
      </figcaption>
    </figure>
  );
}

export function GalleryBentoSection() {
  return (
    <Section tone="cream" className="border-b border-[#E8E2D8]">
      <SectionHeader
        eyebrow="Visual Kitchen Standards"
        title={
          <>
            Inside Our Central Kitchen &amp;{' '}
            <span className="text-[#C59B27]">Fresh Daily Prep</span>
          </>
        }
        subtitle="A transparent look into the hygiene standards, commercial packaging, and authentic taste we deliver across Ranchi daily."
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[15rem_15rem]">
        <BentoImage
          src="/images/gallery_kitchen.png"
          alt="Our clean commercial kitchen in Ranchi"
          label="Central Commercial Kitchen"
          badge="Hygiene First"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="col-span-2 min-h-56!"
        />
        <BentoImage
          src="/images/gallery_boxes.png"
          alt="Packed tiffin meal boxes in Ranchi"
          label="Individual Meal Trays"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />

        {/* Feature Stat Anchor */}
        <div className="order-last col-span-2 flex flex-col justify-between rounded-2xl bg-[#0F2B18] border border-[#C59B27]/30 p-6 shadow-xl lg:order-none lg:col-span-1 lg:row-span-2 lg:p-7 text-white">
          <div>
            <p className="font-display text-5xl sm:text-6xl font-extrabold leading-none text-[#C59B27]">
              26<sup className="text-2xl sm:text-3xl font-bold">+</sup>
            </p>
            <p className="font-display text-lg font-bold text-white mt-2">
              Years of Culinary Mastery
            </p>
            <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
              {GALLERY_PILLS.map((pill) => (
                <li key={pill.label} className="text-xs flex items-center gap-2.5 font-medium text-stone-200">
                  <span>{pill.icon}</span>
                  <span>{pill.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <ButtonLink href="/gallery" variant="accent" block size="md" className="font-bold text-xs sm:text-sm">
              <span>View Full Gallery</span>
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>

        <BentoImage
          src="/images/gallery_prep.png"
          alt="Hygienic vegetable preparation"
          label="Vegetable Sanitization & Prep"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
        <BentoImage
          src="/images/gallery_pack.png"
          alt="Delivery dispatch bags for tiffin"
          label="Morning & Night Dispatch Hub"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="col-span-2 min-h-56!"
        />
      </div>
    </Section>
  );
}
