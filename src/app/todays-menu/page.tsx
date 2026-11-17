import { MenuInteractiveView } from '@/components/sections/menu/MenuInteractiveView';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { PageHero } from '@/components/ui/PageHero';
import { SITE_CONFIG } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Today's Daily Mess Menu & Tiffin Service in Ranchi | Student's Mess",
  description:
    "Explore today's fresh rotating mess menu at Student's Mess Ranchi. View daily lunch and dinner items, pure veg and non-veg specialties, weekly meal chart, and order directly on WhatsApp.",
  keywords:
    'mess menu, tiffin services near me, mess in ranchi, tiffin service in ranchi, lunch box meals near me, lunch box service, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, mess khana, ranchi mess service, mess weekly menu',
  path: '/todays-menu',
});

const MENU_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: "Student's Mess Daily Rotating Menu",
  description: 'Daily home-style veg and non-veg student and corporate tiffin menu in Ranchi.',
  inLanguage: 'en',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Daily Rotating Lunch & Dinner Menu',
      description: 'Rotating home-style meals with roti, rice, dal, and seasonal vegetables',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Standard Veg Thali',
          description: 'Seasonal vegetable curry, dal tadka, steamed rice, 4 tawa rotis, salad and pickle',
          offers: { '@type': 'Offer', price: '80', priceCurrency: 'INR' },
        },
        {
          '@type': 'MenuItem',
          name: 'Premium Paneer Thali',
          description: 'Kadai paneer or paneer butter masala, jeera rice, 4 butter chapatis, dal makhani, raita and gulab jamun',
          offers: { '@type': 'Offer', price: '120', priceCurrency: 'INR' },
        },
        {
          '@type': 'MenuItem',
          name: 'Dehati Chicken Curry Thali',
          description: 'Ranchi style slow-cooked chicken curry served with dal, rice, rotis and fresh salad',
          offers: { '@type': 'Offer', price: '140', priceCurrency: 'INR' },
        },
        {
          '@type': 'MenuItem',
          name: 'Egg Curry Thali',
          description: 'Boiled eggs in rich gravy with steamed basmati rice, rotis, dal and salad',
          offers: { '@type': 'Offer', price: '100', priceCurrency: 'INR' },
        },
      ],
    },
  ],
};

export default function TodaysMenuPage() {
  return (
    <>
      <JsonLd data={MENU_SCHEMA} />

      <PageHero
        eyebrow="Fresh Today • Ranchi Mess Service"
        title="Today's Daily Mess Menu & Rotating Weekly Chart"
        breadcrumbs={[{ label: "Today's Menu" }]}
        subtitle={
          <>
            Checking today&apos;s <strong>mess menu</strong> or looking for nourishing{' '}
            <strong>lunch box meals near me</strong>? At Student&apos;s Mess, our daily meals rotate
            across all 7 days with seasonal produce, traditional Jharkhand spices, and balanced home nutrition.
          </>
        }
      />

      {/* Interactive, Sharable Menu Component */}
      <MenuInteractiveView />

      <CtaBanner
        tone="dark"
        title={
          <>
            Love What&apos;s On The <span className="text-[#F3CF7A]">Mess Menu?</span>
          </>
        }
        subtitle={
          <>
            Order today&apos;s hot takeaway lunch or subscribe to our premier daily{' '}
            <strong>lunch box service</strong> and monthly <strong>tiffin service in Ranchi</strong>.
          </>
        }
        primaryCta={{
          href: SITE_CONFIG.phoneHref,
          label: `Call Kitchen Desk (${SITE_CONFIG.phoneDisplay})`,
        }}
        secondaryCta={{
          href: '/monthly-meal-plans',
          label: 'View Monthly Subscription Tariffs',
        }}
      />
    </>
  );
}
