'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Field, FieldRow, FormError, Honeypot } from '@/components/ui/Field';

interface ContactFormProps {
  variant?: 'contact' | 'callback';
}

export function ContactForm({ variant = 'contact' }: ContactFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isCallback = variant === 'callback';
  const idPrefix = isCallback ? 'home_lead_' : 'contact_';

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
    const message = String(data.get('message') ?? '').trim();

    if (!name || !phone || !message) {
      setError('Please fill in all mandatory fields (Name, Phone, Message).');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email: String(data.get('email') ?? ''),
          subject: String(data.get('subject') ?? ''),
          message,
          website_spamtrap: String(data.get('website_spamtrap') ?? ''),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      router.push(json.redirectTo ?? '/thank-you');
    } catch {
      setError('Network error. Please call or WhatsApp +91 62010 16720.');
      setSubmitting(false);
    }
  };

  const nameField = (
    <Field label="Your Name" htmlFor={`${idPrefix}name`} required>
      <input
        type="text"
        id={`${idPrefix}name`}
        name="name"
        required
        autoComplete="name"
        placeholder={isCallback ? 'E.g. Rohan Sharma' : 'John Doe'}
        className="field-control"
      />
    </Field>
  );

  const phoneField = (
    <Field label="Phone Number" htmlFor={`${idPrefix}phone`} required>
      <input
        type="tel"
        id={`${idPrefix}phone`}
        name="phone"
        required
        autoComplete="tel"
        inputMode="tel"
        placeholder={isCallback ? 'E.g. 99341 23456' : '99341 23456'}
        className="field-control"
      />
    </Field>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormError message={error} />
      <Honeypot />

      <FieldRow>
        {nameField}
        {phoneField}
      </FieldRow>

      {!isCallback && (
        <Field label="Email Address" htmlFor={`${idPrefix}email`}>
          <input
            type="email"
            id={`${idPrefix}email`}
            name="email"
            autoComplete="email"
            placeholder="john@example.com"
            className="field-control"
          />
        </Field>
      )}

      <Field
        label={isCallback ? 'Interested In' : 'Subject'}
        htmlFor={`${idPrefix}subject`}
        required
      >
        <select id={`${idPrefix}subject`} name="subject" required className="field-control">
          {isCallback ? (
            <>
              <option value="Monthly Plan Subscription">
                Subscribe to Monthly Plan (2 Meals/day)
              </option>
              <option value="Bulk Order Query">Bulk Catering Services</option>
              <option value="Takeaway Order">Takeaway Order</option>
              <option value="General Query">General Inquiry / Callback Request</option>
            </>
          ) : (
            <>
              <option value="General Query">General Inquiry</option>
              <option value="Monthly Plan Subscription">Subscribe to Monthly Plan</option>
              <option value="Bulk Order Query">Bulk Catering Services</option>
              <option value="Takeaway Order">Takeaway Order</option>
              <option value="Feedback/Complaint">Customer Feedback</option>
            </>
          )}
        </select>
      </Field>

      <Field
        label={isCallback ? 'Message or Delivery Address' : 'Your Message'}
        htmlFor={`${idPrefix}message`}
        required
      >
        <textarea
          id={`${idPrefix}message`}
          name="message"
          rows={isCallback ? 3 : 5}
          required
          placeholder={
            isCallback ? 'Tell us your area/address or any queries...' : 'How can we help you?'
          }
          className="field-control"
        />
      </Field>

      <Button type="submit" disabled={submitting} size="lg" block>
        {submitting ? 'Sending...' : isCallback ? 'Send Request' : 'Send Message'}
      </Button>
    </form>
  );
}
