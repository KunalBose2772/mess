import Image from 'next/image';
import {
  ArrowRight,
  Bike,
  Clock,
  Flame,
  ShoppingBag,
  UtensilsCrossed,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { IconBadge } from '@/components/ui/IconBadge';
import { Section } from '@/components/ui/Section';

const TAKEAWAY_FEATURES = [
  { icon: <Clock className="size-4 text-[#C59B27]" />, label: 'Ready for Quick Pickup in Minutes' },
  { icon: <ShoppingBag className="size-4 text-[#C59B27]" />, label: 'Spill-Proof Packaging & Thermal Insulation' },
  { icon: <UtensilsCrossed className="size-4 text-[#C59B27]" />, label: 'Fresh, Hygienic, Authentic Home Cooking' },
];

export function TakeawaySection() {
  return (
    <Section tone="cream" className="border-b border-[#E8E2D8]">
      <div className="grid overflow-hidden rounded-3xl bg-[#0F2B18] text-white shadow-xl lg:grid-cols-2 border border-[#C59B27]/30">
        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
          <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
            <Bike className="size-4" /> Express Pickup &amp; Delivery
          </span>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            Quick Lunch Service &amp;{' '}
            <span className="text-[#C59B27]">Lunch Box Meals Near Me</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
            Craving wholesome home food without waiting? Our fast takeaway and express{' '}
            <strong className="text-white">lunch box service</strong> deliver hot, nutritious meals right when hunger
            strikes. Convenient pickup near Lalpur Chowk or direct doorstep dispatch across Ranchi.
          </p>

          <ul className="mt-6 space-y-3">
            {TAKEAWAY_FEATURES.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-stone-200">
                <IconBadge icon={item.icon} tone="glass" size="sm" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink href="/takeaway" variant="accent" size="lg" className="text-xs sm:text-sm font-bold">
              <span>See Takeaway Options</span>
              <ArrowRight className="size-4 ml-2" />
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-72 lg:min-h-full">
          <Image
            src="/images/takeaway.png"
            alt="Freshly packed takeaway lunch boxes at Student's Mess Ranchi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-[#E8E2D8] bg-white p-3.5 pr-5 shadow-xl sm:bottom-6 sm:left-6">
            <IconBadge icon={<Flame className="size-5 text-[#C59B27]" />} tone="brand" size="md" />
            <div>
              <p className="font-display text-base font-bold leading-tight text-[#0F2B18]">
                Freshly Cooked
              </p>
              <p className="text-xs text-[#6A756E]">Prepared Daily with Love</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
