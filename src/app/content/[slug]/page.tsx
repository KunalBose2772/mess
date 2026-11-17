import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { CONTENT_PAGES_MAP, getContentPageBySlug } from '@/data/pages';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return Object.keys(CONTENT_PAGES_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentPageBySlug(slug);
  if (!page) return {};

  return buildMetadata({
    title: `${page.title} | Student's Mess`,
    description: page.metaDesc,
    path: `/page/${slug}`,
    noIndex: true,
  });
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContentPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={page.heroTitle ?? page.title}
        subtitle={page.heroSubtitle}
        breadcrumbs={[{ label: page.title }]}
      />

      <Section>
        <div
          className="rich-text mx-auto max-w-3xl"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      </Section>
    </>
  );
}
