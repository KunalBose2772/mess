import type { ReactNode } from 'react';
import { ButtonLink } from './Button';
import { Section, type SectionTone } from './Section';

interface CtaConfig {
  label: ReactNode;
  href: string;
}

interface CtaBannerProps {
  title: ReactNode;
  subtitle: ReactNode;
  primaryCta: CtaConfig;
  secondaryCta?: CtaConfig;
  /** Background of the section the banner card sits in. */
  tone?: Exclude<SectionTone, 'brand'>;
}

/** Closing call-to-action card used at the bottom of most pages. */
export function CtaBanner({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tone = 'white',
}: CtaBannerProps) {
  return (
    <Section tone={tone}>
      <div className="on-dark relative isolate overflow-hidden rounded-3xl bg-[#0F2B18] border border-[#C59B27]/30 px-6 py-10 text-center sm:px-12 sm:py-14 lg:py-16 shadow-xl">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(197,155,39,0.22),transparent_70%)]"
        />
        <h2 className="text-h2 mx-auto max-w-3xl font-display font-bold tracking-tight text-white [&_.text-accent]:text-[#F3CF7A]">{title}</h2>
        <p className="text-lead text-white/85 mx-auto mt-3 sm:mt-4 max-w-2xl leading-relaxed">{subtitle}</p>
        <div className="mt-6 sm:mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={primaryCta.href} variant="accent" size="lg" className="w-full sm:w-auto font-bold">
            {primaryCta.label}
          </ButtonLink>
          {secondaryCta && (
            <ButtonLink href={secondaryCta.href} variant="outline-light" size="lg" className="w-full sm:w-auto">
              {secondaryCta.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </Section>
  );
}
