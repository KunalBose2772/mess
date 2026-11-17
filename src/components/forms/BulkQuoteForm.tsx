'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Field, FieldRow, FormError, Honeypot } from '@/components/ui/Field';

export function BulkQuoteForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get('website_spamtrap') ?? '').trim() !== '') {
      router.push('/thank-you');
      return;
    }

    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const location = String(data.get('location') ?? '').trim();

    if (!name || !phone || !location) {
      setError('Please fill in all mandatory fields (Name, Phone, Location).');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          org: String(data.get('org') ?? ''),
          phone,
          email: String(data.get('email') ?? ''),
          type: String(data.get('type') ?? ''),
          meals: String(data.get('meals') ?? ''),
          diet: String(data.get('diet') ?? ''),
          location,
          message: String(data.get('message') ?? ''),
          website_spamtrap: String(data.get('website_spamtrap') ?? ''),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Unable to submit quote request. Please try again.');
        setSubmitting(false);
        return;
      }
      router.push(json.redirectTo ?? '/thank-you');
    } catch {
      setError('Network error. Please call or WhatsApp +91 62010 16720.');
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormError message={error} />
      <Honeypot />

      <FieldRow>
        <Field label="Your Name" htmlFor="quote_name" required>
          <input
            type="text"
            id="quote_name"
            name="name"
            required
            autoComplete="name"
            placeholder="John Doe"
            className="field-control"
          />
        </Field>
        <Field label="Organization / Company Name" htmlFor="quote_org">
          <input
            type="text"
            id="quote_org"
            name="org"
            autoComplete="organization"
            placeholder="ABC Private Ltd"
            className="field-control"
          />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="Phone Number" htmlFor="quote_phone" required>
          <input
            type="tel"
            id="quote_phone"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="99341 23456"
            className="field-control"
          />
        </Field>
        <Field label="Email Address" htmlFor="quote_email">
          <input
            type="email"
            id="quote_email"
            name="email"
            autoComplete="email"
            placeholder="john@example.com"
            className="field-control"
          />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="Delivery Frequency" htmlFor="quote_type" required>
          <select id="quote_type" name="type" required className="field-control">
            <option value="Daily Subscription">Daily Meal Plan (Contract)</option>
            <option value="Weekly Plan">Weekly Meal Program</option>
            <option value="One-Time Event">One-Time Catering Event</option>
            <option value="Trial Requested">3-Day Trial Session</option>
          </select>
        </Field>
        <Field label="Approx. Meals Count per Delivery" htmlFor="quote_meals" required>
          <input
            type="number"
            id="quote_meals"
            name="meals"
            required
            min={5}
            inputMode="numeric"
            placeholder="50"
            className="field-control"
          />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="Dietary Preference" htmlFor="quote_diet" required>
          <select id="quote_diet" name="diet" required className="field-control">
            <option value="Vegetarian Only">100% Vegetarian</option>
            <option value="Non-Vegetarian Only">Non-Vegetarian Only</option>
            <option value="Both (Veg & Non-Veg Mixed)">Both Veg &amp; Non-Veg (Mixed counts)</option>
          </select>
        </Field>
        <Field label="Delivery Location (Area in Ranchi)" htmlFor="quote_location" required>
          <input
            type="text"
            id="quote_location"
            name="location"
            required
            placeholder="e.g. Lalpur, Kanke"
            className="field-control"
          />
        </Field>
      </FieldRow>

      <Field
        label="Detailed Requirements (Menu preferences, delivery hours, etc.)"
        htmlFor="quote_message"
      >
        <textarea
          id="quote_message"
          name="message"
          rows={4}
          placeholder="Enter details..."
          className="field-control"
        />
      </Field>

      <Button type="submit" disabled={submitting} variant="accent" size="lg" block>
        {submitting ? 'Submitting...' : 'Submit Quote Request'}
      </Button>
    </form>
  );
}
