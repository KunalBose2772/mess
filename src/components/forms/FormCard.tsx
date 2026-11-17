import type { ReactNode } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface FormCardProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/** White elevated card that frames a form. Safe to place on any section tone. */
export function FormCard({ eyebrow, title, subtitle, children }: FormCardProps) {
  return (
    <div className="on-light rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8 lg:p-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-h3">{title}</h2>
      {subtitle && <p className="text-soft mt-2">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}
