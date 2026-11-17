import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

/** Small uppercase label that sits above a heading. */
export function Eyebrow({ children, align = 'left', className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'eyebrow mb-3 flex items-center gap-3',
        align === 'center' && 'justify-center',
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-current opacity-60" />
      {children}
      {align === 'center' && (
        <span aria-hidden="true" className="h-px w-6 shrink-0 bg-current opacity-60" />
      )}
    </span>
  );
}
