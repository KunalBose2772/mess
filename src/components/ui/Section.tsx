import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

export type SectionTone = 'white' | 'cream' | 'brand' | 'surface' | 'subtle' | 'dark';

const TONE_CLASSES: Record<SectionTone, string> = {
  white: 'bg-white',
  cream: 'bg-[#FAF7F2]',
  surface: 'bg-white',
  subtle: 'bg-[#FAF7F2]',
  brand: 'on-dark bg-[#0F2B18]',
  dark: 'on-dark bg-[#0F2B18]',
};

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Render children without the page-width container (for full-bleed content). */
  bleed?: boolean;
}

/**
 * Standard page section. Owns the vertical rhythm (40px desktop / 20px mobile)
 * and the background tone so individual sections never set their own padding.
 */
export function Section({
  children,
  tone = 'white',
  id,
  className,
  containerClassName,
  bleed = false,
}: SectionProps) {
  return (
    <section id={id} className={cn('section-y relative', TONE_CLASSES[tone], className)}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
