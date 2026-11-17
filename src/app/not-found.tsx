import { ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export default function NotFoundPage() {
  return (
    <Section tone="cream">
      <div className="mx-auto my-4 max-w-2xl rounded-3xl border border-[#E8E2D8] bg-white p-6 text-center shadow-sm sm:p-10 lg:my-8">
        <span className="font-display block text-7xl font-bold leading-none text-[#C59B27] sm:text-8xl">
          404
        </span>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18] mt-4">
          Page Not Found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#45514A] leading-relaxed">
          Sorry, the page you are looking for does not exist or has been relocated.
        </p>
        <p className="mt-2 text-xs text-[#6A756E]">
          You can use the links below to navigate back to our primary kitchen services.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary">Return Home</ButtonLink>
          <ButtonLink href="/monthly-meal-plans" variant="accent">
            Meal Plans
          </ButtonLink>
          <ButtonLink href="/bulk-orders" variant="secondary">
            Bulk Catering
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
