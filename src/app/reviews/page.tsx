import { ButtonLink } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { GoogleGIcon } from '@/components/ui/GoogleGIcon';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { StarRating } from '@/components/ui/StarRating';
import { REVIEWS_PAGE_ITEMS } from '@/data/testimonials';
import { SITE_CONFIG } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Customer Reviews | Best Tiffin Service & Mess in Ranchi | Student's Mess",
  description:
    "Read genuine customer reviews for Student's Mess Ranchi. Rated 4.8/5 on Google for best tiffin service in Ranchi, hygienic lunch box service, and delicious mess menu.",
  keywords:
    'best tiffin service ranchi, tiffin services near me, mess in ranchi, tiffin service in ranchi, lunch box service, mess menu, lunch box meals near me, lunch box ranchi, lunchbox ranchi, ranchi mess service, mess khana',
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews • Ranchi Mess Service"
        title="Customer Testimonials • Best Tiffin Service in Ranchi"
        breadcrumbs={[{ label: 'Reviews' }]}
        subtitle={
          <>
            See what Ranchi&apos;s students, working professionals, and bachelors say about our
            authentic <strong>mess in Ranchi</strong>, daily rotating <strong>mess menu</strong>,
            and dependable <strong>lunch box service</strong>.
          </>
        }
      />

      <Section tone="cream">
        <div className="on-light grid items-center gap-6 rounded-3xl border border-line bg-white p-6 shadow-card md:grid-cols-[auto_1fr] md:gap-10 lg:p-10">
          <div className="flex flex-col items-center rounded-2xl bg-cream-100 px-8 py-6 text-center md:px-10">
            <span className="font-display text-6xl font-semibold leading-none text-brand-900 lg:text-7xl">
              4.8
            </span>
            <StarRating className="mt-3 text-lg" />
            <span className="text-small text-soft mt-2">320+ ratings on Google Business</span>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-h2">Loved by Hundreds Daily Across Ranchi</h2>
            <p className="text-lead mt-3">
              Since 1999, we have served over 5 lakh meals across Ranchi. Voted the{' '}
              <strong>best tiffin service in Ranchi</strong> for reliable{' '}
              <strong>tiffin services near me</strong> and fresh home-style{' '}
              <strong>lunch box meals near me</strong>.
            </p>
            <ButtonLink href={SITE_CONFIG.googleReviewsUrl} className="mt-6">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-white">
                <GoogleGIcon size={14} />
              </span>
              Leave a Google Review
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section>
        <ul className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {REVIEWS_PAGE_ITEMS.map((review) => (
            <Card key={review.name} as="li" tone="cream" className="flex flex-col">
              <StarRating value={review.halfStar ? 4.5 : 5} />
              <blockquote className="mt-4 flex-1">{review.quote}</blockquote>
              <footer className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-900 font-bold text-gold-400"
                >
                  {review.name[0]}
                </span>
                <div>
                  <cite className="block font-semibold not-italic text-brand-900">{review.name}</cite>
                  <span className="text-caption text-soft">{review.role}</span>
                </div>
              </footer>
            </Card>
          ))}
        </ul>
      </Section>

      <CtaBanner
        tone="cream"
        title={
          <>
            Become Our Next <span className="text-accent">Happy Customer</span>
          </>
        }
        subtitle="Subscribe today to start receiving daily thalis or ask about event catering."
        primaryCta={{ href: '/monthly-meal-plans', label: 'See Monthly Plans' }}
        secondaryCta={{ href: '/contact', label: 'Contact Us' }}
      />
    </>
  );
}
