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
    const org = cleanInput(body.org);
    const phone = cleanInput(body.phone);
    const email = cleanInput(body.email);
    const type = cleanInput(body.type);
    const meals = cleanInput(body.meals);
    const diet = cleanInput(body.diet);
    const location = cleanInput(body.location);
    const message = cleanInput(body.message);

    if (!name || !phone || !location) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in all mandatory fields (Name, Phone, Location).' },
        { status: 400 }
      );
    }

    await appendLeadCsv([
      new Date().toISOString().replace('T', ' ').slice(0, 19),
      'Bulk Quote Request',
      name,
      org,
      phone,
      email,
      type,
      meals,
      diet,
      location,
      message,
    ]);

    // Also persist in CRM database
    dbService.createLead({
      channel: 'Bulk Quote Form',
      name: name,
      organization: org,
      phone: phone,
      email: email,
      area: location,
      plan_interest: `Bulk Catering: ${meals || 'Custom'} meals (${diet || 'Mixed'})`,
      status: 'new',
      notes: `Order Type: ${type}. Message: ${message}`,
    });

    return NextResponse.json({ ok: true, redirectTo: '/thank-you' });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
