import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type IconBadgeTone = 'brand' | 'soft' | 'gold' | 'glass';
type IconBadgeSize = 'sm' | 'md' | 'lg';

const TONES: Record<IconBadgeTone, string> = {
  brand: 'bg-[#0F2B18] border border-[#C59B27]/30 text-[#F3CF7A] shadow-xs',
  soft: 'bg-[#EEF7F1] border border-[#A3D9B8]/70 text-[#0F2B18] shadow-2xs',
  gold: 'bg-[#FBF4DE] border border-[#E6C86E] text-[#9E7A1C] shadow-2xs',
  glass: 'bg-white/10 text-[#F3CF7A] border border-white/15 backdrop-blur-xs',
};

const SIZES: Record<IconBadgeSize, string> = {
  sm: 'size-9 sm:size-10 rounded-xl text-sm sm:text-base',
  md: 'size-11 sm:size-12 rounded-xl text-base sm:text-lg',
  lg: 'size-12 sm:size-14 rounded-2xl text-lg sm:text-xl',
};

interface IconBadgeProps {
  icon: ReactNode;
  tone?: IconBadgeTone;
  size?: IconBadgeSize;
  className?: string;
}

/** Rounded square holding a single icon. Clean, lightweight React component. */
export function IconBadge({ icon, tone = 'soft', size = 'md', className }: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 items-center justify-center transition-transform group-hover:scale-105',
        TONES[tone],
        SIZES[size],
        className
      )}
    >
      {icon}
    </span>
  );
}
