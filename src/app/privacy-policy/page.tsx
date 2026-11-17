import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Privacy Policy | Student's Mess Ranchi",
  description: "Read the privacy policy of Student's Mess Ranchi website.",
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Last Updated: July 9, 2026" breadcrumbs={[{ label: 'Privacy Policy' }]} />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rich-text">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information when you fill out contact or bulk quote forms on our website.
              This includes your name, phone number, email address, company/organization name, and
              dietary preferences.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              Your details are used solely to prepare catering rate estimates, set up monthly tiffin
              subscriptions, respond to customer inquiries, and coordinate daily food logistics runs.
            </p>

            <h2>3. Information Storage &amp; Protection</h2>
            <p>
              We do not sell, trade, or share your personally identifiable information with outside
              parties. All inquiries are saved securely on our local servers and accessed only by
              authorized family kitchen managers.
            </p>

            <h2>4. Contact Us</h2>
            <p>
              If you have any questions regarding this privacy policy, you may contact our
              operations team at info@studentsmessranchi.com.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

