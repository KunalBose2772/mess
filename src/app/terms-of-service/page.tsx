import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Terms of Service | Student's Mess Ranchi",
  description: "Read the terms of service of Student's Mess Ranchi website.",
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero title="Terms of Service" subtitle="Last Updated: July 9, 2026" breadcrumbs={[{ label: 'Terms of Service' }]} />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rich-text">
            <h2>1. Subscriptions &amp; Billing</h2>
            <p>
              Monthly tiffin subscriptions must be paid in advance during registration. Renewal
              invoices are generated 3 days before the expiration of the current cycle.
            </p>

            <h2>2. Meal Pausing &amp; Extensions</h2>
            <p>
              Subscribers can pause meals by sending a WhatsApp message 12 hours before the delivery
              window. The subscription cycle is extended by the number of paused days. Each monthly
              plan allows a maximum of 5 meal pauses.
            </p>

            <h2>3. Delivery Logistics</h2>
            <p>
              We deliver bulk and subscription meals to designated PG entrances, office receptions,
              or security checkpoints. We make reasonable attempts to reach the customer, but cannot
              offer refunds for unclaimed deliveries if contact cannot be established.
            </p>

            <h2>4. Cancellations</h2>
            <p>
              One-time bulk order cancellations require at least 48 hours of advance notice for full
              refunds. Subscriptions can be cancelled mid-month; refunds will be processed pro-rata
              based on standard daily rates rather than discounted monthly terms.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

