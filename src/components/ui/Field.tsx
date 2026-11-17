import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface FieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

/** Label + control wrapper. Give the control inside the `field-control` class. */
export function Field({ label, htmlFor, required = false, children, className }: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-xs sm:text-sm font-semibold text-[#0F2B18]">
        {label}
        {required && (
          <span aria-hidden="true" className="text-red-500 font-bold">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

/** Two fields side by side from tablet up. */
export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid gap-3.5 sm:grid-cols-2">{children}</div>;
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div
      role="alert"
      className="text-xs sm:text-sm rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-medium text-red-700"
    >
      {message}
    </div>
  );
}

/** Hidden spam-trap input. Real users never fill it. */
export function Honeypot() {
  return (
    <input
      type="text"
      name="website_spamtrap"
      className="hidden"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  );
}
