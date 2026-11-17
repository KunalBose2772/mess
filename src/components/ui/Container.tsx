import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Site-wide 1420px content column with responsive gutters. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn('container-site', className)}>{children}</div>;
}
