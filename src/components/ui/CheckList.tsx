import type { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface CheckListItem {
  content: ReactNode;
  icon?: ReactNode;
  /** Tailwind colour class for the icon. */
  iconClassName?: string;
}

interface CheckListProps {
  items: Array<CheckListItem | string>;
  className?: string;
  size?: 'sm' | 'md';
}

/** Vertical list with a leading tick (or custom icon) per row. Uses pure Lucide icons. */
export function CheckList({ items, className, size = 'md' }: CheckListProps) {
  return (
    <ul className={cn('space-y-2.5', size === 'sm' ? 'text-xs sm:text-sm' : 'text-sm sm:text-base', className)}>
      {items.map((raw, i) => {
        const item: CheckListItem = typeof raw === 'string' ? { content: raw } : raw;

        return (
          <li key={i} className="flex items-start gap-2.5 text-[#2D3A31]">
            {item.icon ? (
              <span className={cn('mt-[0.15em] shrink-0 text-emerald-700', item.iconClassName)}>
                {item.icon}
              </span>
            ) : (
              <CheckCircle2
                className={cn('mt-[0.2em] size-4 shrink-0 text-emerald-700', item.iconClassName)}
                strokeWidth={2.2}
              />
            )}
            <span className="leading-relaxed">{item.content}</span>
          </li>
        );
      })}
    </ul>
  );
}
