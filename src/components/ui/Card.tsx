import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { IconBadge } from './IconBadge';

type CardTone = 'white' | 'cream' | 'glass';

const CARD_TONES: Record<CardTone, string> = {
  white: 'on-light border border-[#E8E2D8] bg-white shadow-card',
  cream: 'on-light border border-[#E8E2D8] bg-[#FAF7F2]',
  glass: 'border border-white/15 bg-white/[0.06] backdrop-blur-xs',
};

interface CardProps {
  children: ReactNode;
  tone?: CardTone;
  /** Lift on hover — use for cards that are, or contain, a primary link. */
  interactive?: boolean;
  as?: 'div' | 'article' | 'li';
  className?: string;
}

/** Base surface: 16px radius, hairline border, consistent padding. */
export function Card({
  children,
  tone = 'white',
  interactive = false,
  as: Tag = 'div',
  className,
}: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border p-4 sm:p-5 lg:p-6',
        CARD_TONES[tone],
        interactive &&
          'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C59B27]/70 hover:shadow-lift cursor-pointer',
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
  tone?: CardTone;
  className?: string;
}

/** 3-part card: Icon badge + H3 + Body copy. Perfect for benefits & guarantees. */
export function FeatureCard({
  icon,
  title,
  children,
  tone = 'white',
  className,
}: FeatureCardProps) {
  const badgeTone = tone === 'glass' ? 'glass' : 'brand';
  const isDark = tone === 'glass';

  return (
    <div
      className={cn(
        'rounded-2xl border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C59B27]/60 hover:shadow-md',
        CARD_TONES[tone],
        className
      )}
    >
      <IconBadge icon={icon} tone={badgeTone} size="md" />
      <h3
        className={cn(
          'font-display text-base font-bold mt-3',
          isDark ? 'text-white' : 'text-[#0F2B18]'
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          'mt-1.5 text-xs leading-relaxed',
          isDark ? 'text-stone-200' : 'text-[#45514A]'
        )}
      >
        {children}
      </p>
    </div>
  );
}

interface StepCardProps {
  step: string | number;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export function StepCard({ step, title, children, className }: StepCardProps) {
  return (
    <div className={cn('relative rounded-2xl border border-[#E8E2D8] bg-white p-5 sm:p-6 shadow-xs', className)}>
      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#C59B27]/40 block leading-none mb-3">
        {step}
      </span>
      <h3 className="font-display text-lg font-bold text-[#0F2B18] mb-2">{title}</h3>
      <div className="text-xs sm:text-sm text-[#45514A] leading-relaxed">{children}</div>
    </div>
  );
}
