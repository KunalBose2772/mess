import { FileText, Phone } from 'lucide-react';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { HomeTodayMenuSection } from '@/components/sections/home/HomeTodayMenuSection';
import { LegacyTimelineSection } from '@/components/sections/home/LegacyTimelineSection';
import { WhoWeServeSection } from '@/components/sections/home/WhoWeServeSection';
import { SubscriptionPlansGrid } from '@/components/sections/home/SubscriptionPlansGrid';
import { BulkSpotlightSection } from '@/components/sections/home/BulkSpotlightSection';
import { TakeawaySection } from '@/components/sections/home/TakeawaySection';
import { AreasCoverageSection } from '@/components/sections/home/AreasCoverageSection';
import { GalleryBentoSection } from '@/components/sections/home/GalleryBentoSection';
import { TestimonialsMarquee } from '@/components/sections/home/TestimonialsMarquee';
import { HomeLeadSection } from '@/components/sections/home/HomeLeadSection';
import { HomeFaqSection } from '@/components/sections/home/HomeFaqSection';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { SITE_CONFIG } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Best Tiffin Service in Ranchi & Mess in Ranchi | Student's Mess",
  description:
    "Searching for top tiffin services near me or best mess in Ranchi? Student's Mess provides daily rotating mess menu, hygienic lunch box service, and nutritious lunch box meals near me across Ranchi.",
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeTodayMenuSection />
      <LegacyTimelineSection />
      <WhoWeServeSection />
      <SubscriptionPlansGrid />
      <BulkSpotlightSection />
      <TakeawaySection />
      <AreasCoverageSection />
      <GalleryBentoSection />
      <TestimonialsMarquee />
      <HomeLeadSection />
      <HomeFaqSection />
      <CtaBanner
        title={
          <>
            Ready for Fresh, Hygienic &amp; <span className="text-accent">Home-Style Meals?</span>
          </>
        }
        subtitle="Join hundreds of satisfied students, corporate teams, and hostel residents in Ranchi today. Subscribe to a monthly plan or request an institutional bulk quote."
        primaryCta={{
          href: '/bulk-orders#quote-form',
          label: (
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" /> Request Bulk Quote
            </span>
          ),
        }}
        secondaryCta={{
          href: SITE_CONFIG.phoneHref,
          label: (
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Kitchen Now
            </span>
          ),
        }}
      />
    </>
  );
}
