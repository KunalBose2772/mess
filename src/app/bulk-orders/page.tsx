import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Coins,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Hospital,
  Hotel,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sliders,
  Truck,
  UtensilsCrossed,
  Warehouse,
} from 'lucide-react';
import { BulkQuoteForm } from '@/components/forms/BulkQuoteForm';
import { FormCard } from '@/components/forms/FormCard';
import { FeatureCard, StepCard } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BULK_FAQS } from '@/data/faqs';
import { SITE_CONFIG, whatsappUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Bulk Food Orders, Tiffin Service & Mess in Ranchi | Student's Mess",
  description:
    'Reliable bulk tiffin service in Ranchi and mess in Ranchi for offices, PGs, hostels & events. Daily lunch box service, customized mess menu, and on-time catering delivery.',
  keywords:
    'lunch box service, tiffin service in ranchi, mess in ranchi, lunch service, lunch box ranchi, lunchbox ranchi, lunch box meals near me, tiffin services near me, mess menu, best tiffin service ranchi, ranchi mess service, mess khana',
  path: '/bulk-orders',
});

const PARTNERS = [
  { icon: <Briefcase className="size-5 text-[#C59B27]" />, title: 'Offices & Companies', desc: 'Nutritious daily employee lunch programs with GST billing.' },
  { icon: <Hotel className="size-5 text-[#C59B27]" />, title: 'PG Accommodations', desc: 'Daily meal outsourcing for guest boarders and residents.' },
  { icon: <GraduationCap className="size-5 text-[#C59B27]" />, title: 'Hostels & Colleges', desc: 'Large-scale boarding student food programs with strict hygiene.' },
  { icon: <GraduationCap className="size-5 text-[#C59B27]" />, title: 'Coaching Institutes', desc: 'Sustained nutrition for intensive all-day lecture shifts.' },
  { icon: <Hospital className="size-5 text-[#C59B27]" />, title: 'Hospitals & Clinics', desc: 'Hygienic, light, digestible meals for medical staff and attendants.' },
  { icon: <HeartHandshake className="size-5 text-[#C59B27]" />, title: 'NGOs & Foundations', desc: 'Budget-optimized community feeding events and workshops.' },
  { icon: <Building2 className="size-5 text-[#C59B27]" />, title: 'Industrial Units', desc: 'Satisfying high-energy shift worker diets.' },
  { icon: <Warehouse className="size-5 text-[#C59B27]" />, title: 'Logistics Warehouses', desc: 'Scheduled delivery matching distribution shift changes.' },
  { icon: <HardHat className="size-5 text-[#C59B27]" />, title: 'Construction Sites', desc: 'Nutritious cost-effective bulk containers delivered on-site.' },
  { icon: <UtensilsCrossed className="size-5 text-[#C59B27]" />, title: 'Corporate Seminars', desc: 'Hot packed executive thalis for training sessions.' },
];

const TRUST_FACTORS = [
  { icon: <Award className="size-5 text-[#C59B27]" />, title: '26+ Years Experience', desc: 'Kitchen operations running continuously in Ranchi since 1999.' },
  { icon: <UtensilsCrossed className="size-5 text-[#C59B27]" />, title: 'Consistent Taste', desc: 'Family-monitored recipes and quality spices ground fresh daily.' },
  { icon: <Sliders className="size-5 text-[#C59B27]" />, title: 'Flexible Scalability', desc: 'Easily scale portion counts up or down depending on requirements.' },
  { icon: <Truck className="size-5 text-[#C59B27]" />, title: 'Punctual Dispatch', desc: 'Dedicated delivery routes to maintain tight shift schedules.' },
  { icon: <ShieldCheck className="size-5 text-[#C59B27]" />, title: 'Strict Sanitation', desc: 'FSSAI compliant deep cleaning routines and RO filtered water.' },
  { icon: <Coins className="size-5 text-[#C59B27]" />, title: 'Transparent Pricing', desc: 'Maximum nutritional value tailored to institutional budgets.' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Submit Requirements', desc: 'Specify headcount, delivery location, meal preferences, and frequency.' },
  { num: '02', title: 'Itemized Proposal', desc: 'Receive a custom pricing proposal and menu breakdown within 12 hours.' },
  { num: '03', title: 'Paid Sample Trial', desc: 'Run a 3-day sample trial to verify food quality, temperature, and timing.' },
  { num: '04', title: 'Contract Commences', desc: 'Finalize terms, GST invoicing, and receive dependable daily deliveries.' },
];

export default function BulkOrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering & Institutional Partnerships • Ranchi Mess Service"
        title={
          <>
            Bulk Food Catering &amp;{' '}
            <span className="text-[#F3CF7A]">Corporate Lunch Box Service</span>
          </>
        }
        breadcrumbs={[{ label: 'Bulk Orders' }]}
        subtitle={
          <>
            Looking for high-capacity <strong>lunch box service</strong>, reliable{' '}
            <strong>tiffin service in Ranchi</strong>, or corporate <strong>mess in Ranchi</strong>{' '}
            catering? Student&apos;s Mess supplies hot, hygienic meals to corporate teams, PG
            hostels, hospitals, and events across Ranchi.
          </>
        }
      />

      {/* Partners Section */}
      <Section tone="white" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Institutional Partners"
          title={
            <>
              Who We Supply <span className="text-[#C59B27]">Daily in Ranchi</span>
            </>
          }
          subtitle={
            <>
              High-capacity commercial kitchen infrastructure delivering reliable <strong>lunch service</strong>
              , customizable <strong>mess menu</strong> options, and seamless corporate{' '}
              <strong>lunch box service</strong> across Ranchi.
            </>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PARTNERS.map((partner) => (
            <article
              key={partner.title}
              className="flex flex-col rounded-2xl border border-[#E8E2D8] bg-white p-4 sm:p-5 shadow-card transition-all duration-200 hover:border-[#C59B27]/70 hover:shadow-lift"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#EEF7F1] border border-[#A3D9B8] text-[#0F2B18] mb-3">
                {partner.icon}
              </span>
              <h3 className="font-display text-sm sm:text-base font-bold text-[#0F2B18] leading-snug">
                {partner.title}
              </h3>
              <p className="mt-1.5 text-xs text-[#526055] leading-relaxed flex-1">{partner.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Trust & Capability Section */}
      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Corporate Assurance"
          title={
            <>
              Why Ranchi Enterprises &amp; Hostels{' '}
              <span className="text-[#C59B27]">Trust Student&apos;s Mess</span>
            </>
          }
          subtitle="Operating continuously since 1999 with institutional food safety compliance, GST invoicing, and dedicated logistics."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_FACTORS.map((card) => (
            <FeatureCard key={card.title} icon={card.icon} title={card.title} tone="white">
              {card.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* 4-Step Process Section */}
      <Section tone="white" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Simple Onboarding"
          title={
            <>
              How We Initiate{' '}
              <span className="text-[#C59B27]">Institutional Meal Contracts</span>
            </>
          }
          subtitle="A clear, professional process from quote request to 3-day trial and scheduled daily dispatch."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <StepCard key={step.num} step={step.num} title={step.title}>
              {step.desc}
            </StepCard>
          ))}
        </div>
      </Section>

      {/* Form Anchor Section */}
      <Section id="quote-form" tone="dark" className="border-b border-[#C59B27]/30">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow className="text-[#F3CF7A]">Request Custom Pricing</Eyebrow>
            <h2 className="text-h2 font-display font-bold text-white tracking-tight">
              Get an Itemized Quote for Your Team or Institution
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl">
              Fill in your organization details, estimated headcount, and dietary preferences. Our
              institutional partnerships lead will contact you within 12 hours with a comprehensive proposal.
            </p>

            <div className="mt-6 rounded-2xl border border-[#C59B27]/30 bg-white/10 p-5 space-y-4">
              <h3 className="font-display text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#F3CF7A]" />
                <span>What Happens After You Submit:</span>
              </h3>
              <ul className="space-y-2 text-xs text-white/85">
                <li className="flex items-start gap-2">
                  <span className="text-[#F3CF7A] font-bold">•</span>
                  <span>Direct consultation with our founding operations manager.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3CF7A] font-bold">•</span>
                  <span>Custom menu formulation tailored to student or employee shift timings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3CF7A] font-bold">•</span>
                  <span>Option for an on-site sample tasting before committing to long-term terms.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="size-4 text-[#F3CF7A]" /> Call Directly: {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={whatsappUrl("Hi, I want to discuss a bulk meal catering contract.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#128C4B] hover:bg-[#0D733D] px-4 py-2.5 text-xs font-bold text-white transition-colors"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <FormCard
            eyebrow="Instant RFQ"
            title="Institutional Quote Request"
            subtitle="Fill out the specifications below to receive an itemized proposal."
          >
            <BulkQuoteForm />
          </FormCard>
        </div>
      </Section>

      {/* Bulk FAQs */}
      <Section tone="cream" className="border-b border-[#E8E2D8]">
        <SectionHeader
          eyebrow="Bulk FAQs"
          title={
            <>
              Frequently Asked Questions &amp;{' '}
              <span className="text-[#C59B27]">Bulk Order Terms</span>
            </>
          }
          subtitle="Everything you need to know about portion counts, cancellation notice, payment terms, and trial procedures."
        />
        <FaqAccordion items={BULK_FAQS} />
      </Section>
    </>
  );
}
