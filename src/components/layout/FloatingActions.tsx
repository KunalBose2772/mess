'use client';

import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { SITE_CONFIG } from '@/data/site';
import { trackEvent } from '@/lib/tracking';

/** Floating WhatsApp button (desktop) and sticky call/WhatsApp dock (mobile only). */
export function FloatingActions() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <a
        href={SITE_CONFIG.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() =>
          trackEvent({
            eventType: 'whatsapp_click',
            buttonLocation: 'desktop_float',
            intentTag: 'General Kitchen Chat',
          })
        }
        className="group fixed bottom-6 right-6 z-40 hidden md:inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition-all duration-200 hover:scale-110 hover:shadow-2xl active:scale-95"
      >
        <WhatsAppIcon className="size-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[#0F2B18] px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block border border-[#C59B27]/30">
          Chat with Kitchen
        </span>
      </a>

      {/* Pinned Mobile Conversion Dock */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[#C59B27]/30 bg-[#07170C] pb-[env(safe-area-inset-bottom)] md:hidden shadow-2xl">
        <a
          href={SITE_CONFIG.phoneHref}
          onClick={() =>
            trackEvent({
              eventType: 'phone_call',
              buttonLocation: 'mobile_dock',
              intentTag: 'Direct Phone Dial',
            })
          }
          className="flex h-13 items-center justify-center gap-2 text-xs font-semibold text-white active:bg-[#0F2B18] transition-colors"
        >
          <Phone className="size-4 text-[#C59B27]" /> Call Kitchen
        </a>
        <a
          href={SITE_CONFIG.whatsappDefaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              eventType: 'whatsapp_click',
              buttonLocation: 'mobile_dock',
              intentTag: 'Mobile Dock WhatsApp Order',
            })
          }
          className="flex h-13 items-center justify-center gap-2 bg-[#C59B27] text-xs font-bold text-[#07170C] active:bg-[#D4AF37] transition-colors"
        >
          <WhatsAppIcon className="size-4 text-[#07170C]" /> WhatsApp Order
        </a>
      </div>
    </>
  );
}
