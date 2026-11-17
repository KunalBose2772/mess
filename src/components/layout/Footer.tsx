'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from '@/components/ui/Icons';
import { FOOTER_AREAS_LINKS, FOOTER_QUICK_LINKS } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#C59B27] pb-2.5 border-b border-[#C59B27]/20">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[0.875rem] text-stone-300 transition-colors hover:text-[#C59B27]"
    >
      {children}
    </Link>
  );
}

interface ContactRowProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

function ContactRow({ icon, label, children }: ContactRowProps) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-[#C59B27]"
      >
        {icon}
      </span>
      <div className="min-w-0">
        <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-stone-400">
          {label}
        </span>
        <div className="text-[0.875rem] font-medium text-white [&_a]:transition-colors [&_a:hover]:text-[#C59B27]">
          {children}
        </div>
      </div>
    </li>
  );
}

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-[#07170C] text-stone-300 border-t border-[#C59B27]/20">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Student's Mess — Home">
              <Image
                src="/images/logo.png"
                alt="Student's Mess Logo"
                width={1000}
                height={400}
                sizes="200px"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[0.875rem] text-stone-300 leading-relaxed">
              Ranchi&apos;s premier home-style kitchen &amp; institutional food partner. Serving fresh, hygienic, and nutritious meals daily for students, corporate teams, hostels, and events since 1999.
            </p>
            <div className="mt-4 flex flex-col gap-2 max-w-sm">
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#C59B27]/30 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-[#F3CF7A]">
                <ShieldCheck className="size-4 text-[#C59B27] shrink-0" />
                <span>FSSAI Compliant Food Preparation</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-stone-300">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>GST Invoicing Available for Corporate Clients</span>
              </div>
            </div>
            <ul className="mt-5 flex gap-2.5">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-[#C59B27] hover:text-[#07170C]"
                >
                  <FacebookIcon className="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-[#C59B27] hover:text-[#07170C]"
                >
                  <InstagramIcon className="size-4" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappDefaultUrl}
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-[#128C4B] hover:text-white"
                >
                  <WhatsAppIcon className="size-4" />
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Quick links">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Areas we serve">
            <FooterHeading>Areas We Deliver To</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_AREAS_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B27] transition-colors hover:text-[#D4AF37]"
                >
                  View All 15 Ranchi Localities <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-1">
            <FooterHeading>Kitchen Contact</FooterHeading>
            <ul className="mt-4 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
              <ContactRow icon={<Phone className="size-4" />} label="Direct Phone">
                <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phoneDisplay}</a>
              </ContactRow>
              <ContactRow icon={<WhatsAppIcon className="size-4" />} label="WhatsApp Ordering">
                <a href={SITE_CONFIG.whatsappDefaultUrl} target="_blank" rel="noopener noreferrer">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="size-4" />} label="Email Inquiries">
                <a href={`mailto:${SITE_CONFIG.email}`} className="break-all">
                  {SITE_CONFIG.email}
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="size-4" />} label="Kitchen Address">
                <address className="not-italic text-stone-300">{SITE_CONFIG.address}</address>
              </ContactRow>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 pb-28 sm:pb-28 lg:pb-12">
        <Container className="flex flex-col items-center gap-3 py-6 text-xs text-stone-400 sm:flex-row sm:justify-between">
          <p>&copy; {year} Student&apos;s Mess Ranchi. All Rights Reserved. Serving Ranchi Since 1999.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#C59B27]">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="h-3 w-px bg-white/20" />
            <Link href="/terms-of-service" className="transition-colors hover:text-[#C59B27]">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="flex items-center gap-1.5 text-stone-300">
            <Heart className="size-3.5 fill-[#C59B27] text-[#C59B27]" /> Handcrafted in Ranchi, Jharkhand
          </p>
        </Container>
      </div>
    </footer>
  );
}
