import { Star } from 'lucide-react';
import { cn } from '@/lib/cn';

interface StarRatingProps {
  /** Rating out of 5. Halves render a half star. */
  value?: number;
  className?: string;
  size?: number;
}

export function StarRating({ value = 5, className, size = 16 }: StarRatingProps) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;

  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className={cn('inline-flex items-center gap-0.5 text-amber-400', className)}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const isFilled = i < full;
        const isHalf = i === full && hasHalf;
        return (
          <Star
            key={i}
            size={size}
            className={cn(
              isFilled
                ? 'fill-amber-400 text-amber-400'
                : isHalf
                ? 'fill-amber-400/50 text-amber-400'
                : 'text-stone-300 fill-stone-100'
            )}
          />
        );
      })}
    </span>
  );
}
