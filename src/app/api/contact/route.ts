import { NextResponse } from 'next/server';
import { dbService } from '@/lib/db';
import { appendLeadCsv, cleanInput } from '@/lib/leads';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (cleanInput(body.website_spamtrap)) {
      return NextResponse.json({ ok: true, redirectTo: '/thank-you' });
    }

    const name = cleanInput(body.name);
    const phone = cleanInput(body.phone);
    const email = cleanInput(body.email);
    const subject = cleanInput(body.subject);
    const message = cleanInput(body.message);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in all mandatory fields (Name, Phone, Message).' },
        { status: 400 }
      );
    }

    await appendLeadCsv([
      new Date().toISOString().replace('T', ' ').slice(0, 19),
      'General Contact Form',
      name,
      '',
      phone,
      email,
      subject,
      '',
      '',
      '',
      message,
    ]);

    // Also persist in CRM database
    dbService.createLead({
      channel: 'Web Contact Form',
      name: name,
      phone: phone,
      email: email,
      plan_interest: subject || 'General Contact',
      status: 'new',
      notes: message,
    });

    return NextResponse.json({ ok: true, redirectTo: '/thank-you' });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
