import type { ReactNode } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { FormCard } from '@/components/forms/FormCard';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Contact Student's Mess Ranchi | Tiffin Service & Lunch Box Near Me",
  description:
    "Contact Student's Mess in Ranchi. Inquire about monthly tiffin service in Ranchi, mess menu, takeaway lunch box ranchi, or call +91 62010 16720.",
  keywords:
    'tiffin services near me, mess in ranchi, tiffin service in ranchi, lunch box service, mess menu, lunch box meals near me, lunch box ranchi, lunchbox ranchi, lunch service, best tiffin service ranchi, ranchi mess service',
  path: '/contact',
});

const HOURS = [
  { label: 'Monday - Sunday', value: '11:00 AM - 10:00 PM', strong: true },
  { label: 'Lunch Service', value: '11:30 AM - 3:30 PM' },
  { label: 'Dinner Service', value: '7:00 PM - 10:00 PM' },
];

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-xl border border-[#E8E2D8] bg-white p-4 sm:p-5 shadow-card hover:border-[#C59B27]/70 transition-colors">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF7F1] text-[#0F2B18]">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
          {title}
        </h3>
        <div className="mt-1 break-words font-bold text-[#0F2B18] text-sm [&_a]:transition-colors [&_a:hover]:text-[#C59B27]">
          {children}
        </div>
      </div>
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Direct Kitchen Desk • Ranchi Mess"
        title="Contact Student's Mess Ranchi • Tiffin Service Near Me"
        breadcrumbs={[{ label: 'Contact' }]}
        subtitle={
          <>
            Looking for top <strong>tiffin services near me</strong> or an affordable{' '}
            <strong>mess in Ranchi</strong>? Get in touch for monthly plans, bulk corporate
            catering, takeaway <strong>lunch box ranchi</strong>, or custom meal requests.
          </>
        }
      />

      <Section tone="surface">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>Direct Contact Channels</Eyebrow>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18] mt-2">
              Reach Our Central Kitchen
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#526055] leading-relaxed">
              Feel free to call, WhatsApp, or drop by our kitchen for fresh home-style{' '}
              <strong>lunch box service</strong> and daily <strong>mess menu</strong> inquiries. Our dispatch team is on duty 7 days a week.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <InfoCard icon={<Phone className="size-5 text-[#C59B27]" />} title="Kitchen Telephone">
                <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phoneDisplay}</a>
              </InfoCard>
              <InfoCard icon={<MessageCircle className="size-5 text-[#C59B27]" />} title="WhatsApp Support">
                <a href={SITE_CONFIG.whatsappDefaultUrl} target="_blank" rel="noopener noreferrer">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </InfoCard>
              <InfoCard icon={<Mail className="size-5 text-[#C59B27]" />} title="Official Email">
                <a href={`mailto:${SITE_CONFIG.email}`} className="break-all">
                  {SITE_CONFIG.email}
                </a>
              </InfoCard>
              <InfoCard icon={<MapPin className="size-5 text-[#C59B27]" />} title="Kitchen Address">
                <address className="not-italic">{SITE_CONFIG.address}</address>
              </InfoCard>
            </ul>

            <div className="mt-6 rounded-2xl bg-[#0F2B18] p-5 sm:p-6 text-white shadow-xl border border-[#C59B27]/30">
              <div className="flex items-center gap-2 text-[#F3CF7A] font-bold text-xs uppercase tracking-wider">
                <Clock className="size-4 text-[#C59B27]" />
                <span>Operating Shifts &amp; Meal Timings</span>
              </div>
              <dl className="mt-4 divide-y divide-[#E8E2D8]/20 text-xs sm:text-sm">
                {HOURS.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
                    <dt className={row.strong ? 'font-bold text-white' : 'text-white/80'}>
                      {row.label}
                    </dt>
                    <dd className="text-right font-bold text-[#F3CF7A]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <FormCard
            eyebrow="Instant Inquiry"
            title="Send an Online Message"
            subtitle="Fill out the form below and our kitchen team will get back to you within 15 minutes."
          >
            <ContactForm variant="contact" />
          </FormCard>
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeader
          eyebrow="Kitchen Location"
          title="Find Us on Google Maps"
          subtitle="Centrally located in Hindpiri, highly accessible from Main Road, Lalpur, Doranda, and Ranchi Railway Station."
        />
        <div className="overflow-hidden rounded-2xl border border-[#E8E2D8] shadow-card bg-white">
          <iframe
            title="Student's Mess Ranchi Google Map"
            src="https://maps.google.com/maps?q=Nizam+Nagar,+Hindpiri,+Ranchi,+Jharkhand+834001&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="block h-80 w-full border-0 lg:h-[26rem]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
