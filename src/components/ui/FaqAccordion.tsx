'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/cn';
import { FaqItem } from '@/types';

interface FaqAccordionProps {
  items: FaqItem[];
  showIcons?: boolean;
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn('mx-auto max-w-4xl space-y-3', className)}>
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;
        const panelId = `${baseId}-panel-${idx}`;
        const buttonId = `${baseId}-button-${idx}`;

        return (
          <div
            key={item.q}
            className={cn(
              'rounded-2xl border bg-white transition-all duration-200 overflow-hidden',
              isOpen
                ? 'border-[#C59B27]/60 shadow-sm ring-1 ring-[#C59B27]/30'
                : 'border-[#E8E2D8] hover:border-[#C59B27]/40'
            )}
          >
            <h3 className="tracking-normal font-sans">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="flex w-full items-center gap-3.5 px-4 py-4 text-left sm:px-6 sm:py-5 cursor-pointer"
              >
                <span className="flex-1 text-sm sm:text-base font-bold text-[#0F2B18] leading-snug">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-sm transition-transform duration-200',
                    isOpen
                      ? 'rotate-45 bg-[#0F2B18] text-[#C59B27]'
                      : 'bg-[#FAF7F2] text-[#45514A] hover:bg-[#FBF4DE]'
                  )}
                >
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows] duration-200 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div
                  className="px-4 pb-5 pt-1 sm:px-6 text-xs sm:text-sm text-[#45514A] leading-relaxed rich-text"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
