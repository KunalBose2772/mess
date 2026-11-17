import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  /** Heading level for the title. Styling stays identical. */
  as?: 'h2' | 'h3';
  className?: string;
}

/** Eyebrow + H2 + supporting line. Used at the top of every content section. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
  className,
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'mb-5 max-w-3xl lg:mb-6',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && <Eyebrow align={align}>{eyebrow}</Eyebrow>}
      <Tag className="text-h2">{title}</Tag>
      {subtitle && <p className="text-lead text-soft mt-2 lg:mt-2.5">{subtitle}</p>}
    </div>
  );
}
