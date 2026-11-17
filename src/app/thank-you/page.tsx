import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { whatsappUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Thank You | Student's Mess Ranchi",
  description:
    'Thank you for contacting us. We have received your inquiry and will get back to you shortly.',
  path: '/thank-you',
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <Section tone="subtle">
      <div className="mx-auto my-6 max-w-xl rounded-2xl border border-[#E8E2D8] bg-white p-6 text-center shadow-card sm:p-10">
        <span
          aria-hidden="true"
          className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-[#EEF7F1] text-[#0F2B18] border border-[#A3D9B8] shadow-2xs"
        >
          <CheckCircle2 className="size-8 text-[#C59B27]" />
        </span>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18] mt-5">Inquiry Received!</h1>
        <p className="mt-2 text-sm sm:text-base text-[#526055] leading-relaxed">
          Your inquiry has been successfully transmitted to our kitchen coordinators.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-[#768479]">
          We review all submissions promptly. If you requested a bulk institutional quote, our team will prepare your custom menu estimate shortly.
        </p>

        <div className="mt-8 rounded-xl border border-[#A3D9B8] bg-[#EEF7F1]/80 p-5 sm:p-6 text-left">
          <h2 className="font-display text-base font-bold text-[#0F2B18]">Prefer an Instant Reply?</h2>
          <p className="mt-1 text-xs sm:text-sm text-[#334139] leading-relaxed">
            Skip the queue! Connect directly with our dispatch manager on WhatsApp for immediate onboarding and answers.
          </p>
          <ButtonLink
            href={whatsappUrl('Hi, I just submitted an inquiry on your website and would like an instant update.')}
            variant="whatsapp"
            size="md"
            className="mt-4 gap-2 w-full justify-center font-bold"
          >
            <MessageCircle className="size-4" />
            <span>Chat on WhatsApp</span>
          </ButtonLink>
        </div>

        <div className="mt-6">
          <ButtonLink href="/" variant="outline" size="sm" className="gap-1.5 font-bold">
            <ArrowLeft className="size-3.5 text-[#0F2B18]" />
            <span>Return to Homepage</span>
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
