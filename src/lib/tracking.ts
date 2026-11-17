export interface ClientTrackingPayload {
  eventType: 'whatsapp_click' | 'phone_call' | 'form_submission' | 'menu_pdf_download';
  sourcePage?: string;
  buttonLocation?: string;
  intentTag?: string;
}

/**
 * Non-blocking client-side telemetry sender.
 * Uses navigator.sendBeacon when available; falls back to fetch with keepalive: true.
 * Will never freeze or delay page redirection (e.g. WhatsApp or tel: navigation).
 */
export function trackEvent(payload: ClientTrackingPayload) {
  if (typeof window === 'undefined') return;

  const data = {
    eventType: payload.eventType,
    sourcePage: payload.sourcePage || window.location.pathname,
    buttonLocation: payload.buttonLocation || 'unknown',
    intentTag: payload.intentTag || '',
    device: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
    referrer: document.referrer || '',
    timestamp: new Date().toISOString(),
  };

  const endpoint = '/api/track/event';
  const jsonBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });

  if (navigator.sendBeacon) {
    try {
      navigator.sendBeacon(endpoint, jsonBlob);
      return;
    } catch {
      // Fallback to fetch
    }
  }

  // Fallback to fetch keepalive
  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    keepalive: true,
  }).catch(() => {
    // Non-blocking catch to ensure zero user friction
  });
}

