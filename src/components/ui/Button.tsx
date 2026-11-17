import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'outline'
  | 'outline-light'
  | 'white'
  | 'whatsapp'
  | 'brand';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 cursor-pointer';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-[#0F2B18] text-white hover:bg-[#164E2D] shadow-xs border border-[#0F2B18]',
  secondary: 'border border-[#E5E0D5] bg-white text-[#0F1E13] hover:bg-[#FAF7F2] hover:border-[#C59B27] shadow-xs',
  accent: 'bg-[#C59B27] text-[#07170C] hover:bg-[#D4AF37] font-bold shadow-xs border border-[#B88E22]',
  outline: 'border-2 border-[#0F2B18] bg-transparent text-[#0F2B18] hover:bg-[#0F2B18] hover:text-white shadow-xs',
  'outline-light': 'border border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#0F2B18] backdrop-blur-xs',
  white: 'bg-white text-[#0F1E13] border border-[#E5E0D5] hover:bg-[#FAF7F2] shadow-xs',
  whatsapp: 'bg-[#128C4B] text-white hover:bg-[#0D733D] font-bold shadow-xs border border-[#0D733D]',
  brand: 'bg-[#0F2B18] text-white hover:bg-[#164E2D] shadow-xs border border-[#0F2B18]',
};

const SIZES: Record<ButtonSize, string> = {
  xs: 'h-8 px-3 text-xs',
  sm: 'h-9 px-3.5 text-xs sm:text-sm',
  md: 'h-11 px-5 text-sm sm:text-[0.9375rem]',
  lg: 'h-12 px-6 text-sm sm:h-13 sm:px-7 sm:text-base',
};

interface StyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Stretch to the full width of the parent. */
  block?: boolean;
  className?: string;
}

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  block = false,
  className,
}: StyleProps = {}): string {
  return cn(BASE, VARIANTS[variant], SIZES[size], block && 'w-full', className);
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {
  children: ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, block, className })}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface ButtonLinkProps extends StyleProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  title?: string;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  className,
  target,
  rel,
  onClick,
  title,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      title={title}
      className={buttonClasses({ variant, size, block, className })}
    >
      {children}
    </Link>
  );
}
