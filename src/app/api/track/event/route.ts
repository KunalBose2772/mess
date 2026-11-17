import { NextResponse } from 'next/server';
import { dbService } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const eventType = body.eventType || 'unknown';
    const sourcePage = body.sourcePage || '/';
    const buttonLocation = body.buttonLocation || '';
    const intentTag = body.intentTag || '';
    const device = body.device || 'desktop';
    const referrer = body.referrer || '';

    // 1. Log event in tracking table
    dbService.logEvent({
      event_type: eventType,
      source_page: sourcePage,
      button_location: buttonLocation,
      intent_tag: intentTag,
      device: device,
      referrer: referrer,
    });

    // 2. If it is a high-intent conversion event (WhatsApp or Phone Call), also register in leads
    if (eventType === 'whatsapp_click' || eventType === 'phone_call') {
      const channelLabel = eventType === 'whatsapp_click' ? 'WhatsApp Tap' : 'Direct Call Tap';
      dbService.createLead({
        channel: channelLabel,
        name: intentTag ? `Inquiry: ${intentTag}` : `${channelLabel} Visitor`,
        phone: 'Awaiting customer message/call',
        plan_interest: intentTag || sourcePage,
        area: sourcePage.startsWith('/locations/') ? sourcePage.replace('/locations/', '').replace('-', ' ') : 'Ranchi',
        status: 'new',
        notes: `Clicked from ${buttonLocation} on ${sourcePage} via ${device}.`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error logging tracking event:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

