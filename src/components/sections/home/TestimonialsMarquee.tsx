import { CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { GoogleGIcon } from '@/components/ui/GoogleGIcon';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StarRating } from '@/components/ui/StarRating';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '@/data/testimonials';
import { SITE_CONFIG } from '@/data/site';
import { cn } from '@/lib/cn';
import { TestimonialItem } from '@/types';

const AVATAR_COLORS: Record<NonNullable<TestimonialItem['avatarColor']>, string> = {
  blue: 'bg-[#EEF7F1] text-[#0F2B18] border border-[#A3D9B8]',
  green: 'bg-[#EEF7F1] text-[#0F2B18] border border-[#A3D9B8]',
  orange: 'bg-[#FBF4DE] text-[#86630F] border border-[#E6C86E]',
  purple: 'bg-[#FBF4DE] text-[#86630F] border border-[#E6C86E]',
  red: 'bg-[#FBF4DE] text-[#86630F] border border-[#E6C86E]',
};

function ReviewCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="flex w-[19rem] shrink-0 flex-col rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-xs sm:w-[23rem] sm:p-6 transition-all hover:border-[#C59B27]/60 hover:shadow-md">
      <header className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-base font-bold',
            AVATAR_COLORS[item.avatarColor ?? 'green']
          )}
        >
          {item.avatarLetter ?? item.name[0]}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-sm sm:text-base font-bold text-[#0F2B18]">
            {item.name}
          </h3>
          <p className="text-xs text-[#6A756E] truncate">{item.role}</p>
        </div>
        <GoogleGIcon size={20} className="shrink-0" />
      </header>

      <div className="mt-3.5 flex items-center gap-2">
        <StarRating className="text-xs sm:text-sm text-[#C59B27]" />
        {item.time && <span className="text-xs text-[#6A756E]">{item.time}</span>}
      </div>

      <p className="text-xs sm:text-sm text-[#45514A] leading-relaxed mt-2.5 flex-1 line-clamp-4 sm:line-clamp-none">
        &ldquo;{item.quote}&rdquo;
      </p>

      <footer className="mt-4 flex items-center gap-1.5 border-t border-[#E8E2D8] pt-3 text-xs font-semibold text-emerald-800">
        <CheckCircle2 className="size-3.5 text-emerald-700" />
        <span>Verified Google Review</span>
      </footer>
    </article>
  );
}

function MarqueeRow({ items, reverse = false }: { items: TestimonialItem[]; reverse?: boolean }) {
  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className={cn(
          'marquee-track flex w-max',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        )}
      >
        {[false, true].map((isClone) => (
          <div
            key={String(isClone)}
            aria-hidden={isClone || undefined}
            className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
          >
            {items.map((item) => (
              <ReviewCard key={item.name} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  return (
    <Section tone="cream" bleed className="border-b border-[#E8E2D8]">
      <Container>
        <SectionHeader
          eyebrow="Subscriber Feedback"
          title={
            <>
              Trusted by 500+ Daily Diners &amp;{' '}
              <span className="text-[#C59B27]">Verified Reviews</span>
            </>
          }
          subtitle="Real testimonials from university students, corporate employees, and hostel operators across Ranchi."
        />
      </Container>

      <div className="space-y-4 sm:space-y-5">
        <MarqueeRow items={MARQUEE_ROW_1} />
        <MarqueeRow items={MARQUEE_ROW_2} reverse />
      </div>

      <Container>
        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-5 text-center shadow-xs md:flex-row md:text-left lg:mt-10">
          <div className="flex flex-col items-center gap-x-3 gap-y-1 sm:flex-row">
            <GoogleGIcon size={26} />
            <StarRating value={4.8} className="text-[#C59B27]" />
            <p className="text-xs sm:text-sm text-[#45514A]">
              <strong className="text-[#0F2B18] font-bold">4.8 / 5.0</strong> based on 320+ verified Google ratings
            </p>
          </div>
          <ButtonLink href={SITE_CONFIG.googleReviewsUrl} variant="secondary" size="sm" className="shrink-0 text-xs font-bold">
            <GoogleGIcon size={16} /> Write a Google Review
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
