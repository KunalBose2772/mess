'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, X, Loader2, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { SITE_CONFIG, whatsappUrl } from '@/data/site';
import { trackEvent } from '@/lib/tracking';

export function QuickCallbackWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('veg-monthly');
  const [callTime, setCallTime] = useState('immediately');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      trackEvent({
        eventType: 'form_submission',
        buttonLocation: 'quick_callback_widget',
        intentTag: `Callback: ${name || 'Lead'} (${plan})`,
      });

      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Callback Request',
          phone,
          location: 'Ranchi',
          type: 'Quick Callback Request',
          diet: plan,
          message: `Requested callback time: ${callTime}. Plan interest: ${plan}.`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Submission failed. Please try calling or WhatsApp.');
      }
    } catch {
      setError('Connection error. Please contact directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Pill Trigger (Mobile & Desktop) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 z-40 hidden sm:inline-flex items-center gap-2 rounded-full border border-[#C59B27]/50 bg-[#0F2B18] px-4 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#164E2D] active:scale-98"
        aria-label="Request Instant Callback"
      >
        <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
        <Phone className="size-3.5 text-[#C59B27]" />
        <span>Request Callback</span>
      </button>

      {/* Modal / Slide-over Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-md rounded-3xl border border-[#E8E2D8] bg-white p-6 shadow-2xl sm:p-7">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
              }}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-[#FAF7F2] text-[#45514A] transition-colors hover:bg-[#E8E2D8] hover:text-[#0F2B18]"
              aria-label="Close dialog"
            >
              <X className="size-4" />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-[#FBF4DE] text-[#9E7A1C] text-sm">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0F2B18]">
                      Request Kitchen Callback
                    </h3>
                    <p className="text-xs text-[#6A756E]">
                      No WhatsApp? We will call you within 15 minutes.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label htmlFor="cb-name" className="block text-xs font-semibold text-[#0F2B18] mb-1">
                      Your Name
                    </label>
                    <input
                      id="cb-name"
                      type="text"
                      placeholder="e.g. Amit Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-[#E8E2D8] bg-[#FCFBF7] px-3.5 py-2.5 text-xs text-[#0F1E13] outline-none transition-colors focus:border-[#0F2B18] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="cb-phone" className="block text-xs font-semibold text-[#0F2B18] mb-1">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="cb-phone"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-[#E8E2D8] bg-[#FCFBF7] px-3.5 py-2.5 text-xs text-[#0F1E13] outline-none transition-colors focus:border-[#0F2B18] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="cb-plan" className="block text-xs font-semibold text-[#0F2B18] mb-1">
                        Plan Interest
                      </label>
                      <select
                        id="cb-plan"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        className="w-full rounded-xl border border-[#E8E2D8] bg-[#FCFBF7] px-3 py-2.5 text-xs text-[#0F1E13] outline-none"
                      >
                        <option value="veg-monthly">Veg Plan (₹4,000/mo)</option>
                        <option value="non-veg-monthly">Non-Veg (₹4,200/mo)</option>
                        <option value="single-meal">1 Meal Daily (₹2,200)</option>
                        <option value="full-board">Full Board (3 Meals)</option>
                        <option value="bulk-pg">Bulk / Hostel / Office</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cb-time" className="block text-xs font-semibold text-[#0F2B18] mb-1">
                        Best Time to Call
                      </label>
                      <select
                        id="cb-time"
                        value={callTime}
                        onChange={(e) => setCallTime(e.target.value)}
                        className="w-full rounded-xl border border-[#E8E2D8] bg-[#FCFBF7] px-3 py-2.5 text-xs text-[#0F1E13] outline-none"
                      >
                        <option value="immediately">As soon as possible</option>
                        <option value="morning">Morning (9 AM – 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                        <option value="evening">Evening (4 PM – 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  {error && <p className="text-xs font-medium text-red-600">{error}</p>}

                  <Button
                    type="submit"
                    variant="accent"
                    size="md"
                    block
                    disabled={loading}
                    className="mt-4 text-xs font-bold"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin size-4 mr-1.5 inline" /> Transmitting...
                      </>
                    ) : (
                      'Request Kitchen Callback'
                    )}
                  </Button>
                </form>

                <div className="mt-4 pt-3 border-t border-[#E8E2D8] text-center">
                  <p className="text-[0.6875rem] text-[#6A756E]">
                    Or reach out directly via{' '}
                    <a
                      href={SITE_CONFIG.whatsappDefaultUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#128C4B] hover:underline"
                    >
                      WhatsApp
                    </a>{' '}
                    or call{' '}
                    <a href={SITE_CONFIG.phoneHref} className="font-bold text-[#0F2B18] hover:underline">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-4 space-y-3">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xl">
                  <Check className="size-7" />
                </span>
                <h4 className="font-display text-xl font-bold text-[#0F2B18]">
                  Callback Request Confirmed!
                </h4>
                <p className="text-xs text-[#45514A] leading-relaxed max-w-xs mx-auto">
                  Thank you, <strong>{name || 'Friend'}</strong>. Our kitchen director has received
                  your inquiry for the <strong>{plan}</strong> and will call you at{' '}
                  <strong>{phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl(`Hi, I just submitted a callback request for ${plan} from ${name || 'customer'}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#128C4B] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
                  >
                    <WhatsAppIcon className="text-base" /> Also Open in WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
