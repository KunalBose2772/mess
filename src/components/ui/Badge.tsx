'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type BadgeVariant =
  | 'gold'
  | 'brand'
  | 'emerald'
  | 'neutral'
  | 'outline'
  | 'outline-gold'
  | 'dark';

export type BadgeSize = 'xs' | 'sm' | 'md';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: ReactNode;
  pulse?: boolean;
  className?: string;
}

const VARIANTS: Record<BadgeVariant, string> = {
  gold: 'border-[#E6C86E] bg-[#FBF4DE] text-[#9E7A1C]',
  brand: 'border-[#A3D9B8] bg-[#EEF7F1] text-[#0F2B18]',
  emerald: 'border-[#A3D9B8] bg-[#EEF7F1] text-[#0F2B18]',
  neutral: 'border-[#E8E2D8] bg-[#FAF7F2] text-[#334139]',
  outline: 'border-[#E8E2D8] bg-white text-[#0F1E13] shadow-2xs',
  'outline-gold': 'border-[#C59B27]/40 bg-[#FBF4DE]/60 text-[#9E7A1C]',
  dark: 'border-white/20 bg-white/10 text-white backdrop-blur-xs',
};

const SIZES: Record<BadgeSize, string> = {
  xs: 'px-2 py-0.5 text-[0.625rem] tracking-wide font-bold uppercase',
  sm: 'px-2.5 py-1 text-[0.6875rem] tracking-wide font-bold uppercase',
  md: 'px-3 py-1.5 text-xs tracking-wide font-bold uppercase',
};

export function Badge({
  children,
  variant = 'brand',
  size = 'sm',
  icon,
  pulse = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border select-none shadow-2xs',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
    >
      {pulse && (
        <span
          className={cn(
            'size-1.5 rounded-full animate-pulse',
            variant === 'emerald' || variant === 'brand'
              ? 'bg-[#1E663B]'
              : variant === 'gold' || variant === 'outline-gold'
              ? 'bg-[#C59B27]'
              : 'bg-white'
          )}
        />
      )}
      {icon && (
        <span className="shrink-0 flex items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
