import { GalleryFilterGrid } from '@/components/sections/shared/GalleryFilterGrid';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { PageHero } from '@/components/ui/PageHero';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Kitchen Gallery | Student's Mess Ranchi & Lunch Box Photos",
  description:
    "Take a visual tour of Student's Mess Ranchi. View photos of our clean kitchen, packed lunch box ranchi thalis, fresh mess menu preparations, and catering events.",
  keywords:
    'lunch box ranchi, lunchbox ranchi, mess in ranchi, tiffin service in ranchi, lunch box service, mess menu, tiffin services near me, lunch box meals near me, best tiffin service ranchi, ranchi mess service',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Kitchen • Ranchi Mess Service"
        title="Gallery & Kitchen Tour • Lunch Box Ranchi"
        breadcrumbs={[{ label: 'Gallery' }]}
        subtitle={
          <>
            A visual look into our clean cooking procedures, hygienic{' '}
            <strong>lunch box service</strong>, and authentic <strong>mess in Ranchi</strong>{' '}
            thali platings.
          </>
        }
      />

      <GalleryFilterGrid />

      <CtaBanner
        title={
          <>
            Taste <span className="text-accent">the Quality Yourself</span>
          </>
        }
        subtitle="Fresh ingredients, clean kitchen, and delicious home taste."
        primaryCta={{ href: '/todays-menu', label: "Check Today's Menu" }}
        secondaryCta={{ href: '/bulk-orders#quote-form', label: 'Get Bulk Quote' }}
      />
    </>
  );
}
