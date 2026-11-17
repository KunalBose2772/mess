import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HOME_FAQS } from '@/data/faqs';

export function HomeFaqSection() {
  return (
    <Section tone="cream" className="border-b border-[#E8E2D8]">
      <SectionHeader
        eyebrow="Direct Kitchen Answers"
        title={
          <>
            Frequently Asked Questions &amp;{' '}
            <span className="text-[#C59B27]">Ranchi Tiffin FAQs</span>
          </>
        }
        subtitle="Clear, transparent answers about meal delivery schedules, trial plates, payment terms, and custom dietary requests."
      />
      <FaqAccordion items={HOME_FAQS} showIcons />
    </Section>
  );
}
