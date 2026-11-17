import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, MessageCircle, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';
import { SITE_CONFIG, whatsappUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.title} | Student's Mess Blog`,
    description: stripTags(post.content).slice(0, 160),
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${SITE_CONFIG.baseUrl}/blog/${slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_CONFIG.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
    ],
  };

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: stripTags(post.content).slice(0, 160),
    image: SITE_CONFIG.logoUrl,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: "Student's Mess",
      logo: { '@type': 'ImageObject', url: SITE_CONFIG.logoUrl },
    },
    datePublished: post.isoDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogPostingSchema} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
      >
        <p className="text-xs sm:text-sm text-white/80 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4">
          <span className="flex items-center gap-1.5">
            <User className="size-3.5 text-[#F3CF7A]" />
            <span>{post.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5 text-[#F3CF7A]" />
            <span>{post.date}</span>
          </span>
        </p>
      </PageHero>

      <Section tone="surface">
        <div className="mx-auto max-w-3xl">
          <article
            className="rich-text text-sm sm:text-base leading-relaxed text-[#334139]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <aside className="mt-10 rounded-2xl border border-[#E8E2D8] bg-[#FAF7F2] p-6 sm:p-8 shadow-card hover:border-[#C59B27]/70 transition-colors">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27] mb-2">
              <ShieldCheck className="size-4" />
              <span>Healthy Daily Living</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F2B18]">
              Struggling with Daily Cooking or Bad Digestion?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#526055] leading-relaxed">
              Subscribe to our Standard Veg or Non-Veg monthly tiffin plans and start receiving
              warm home-style meals at your doorstep daily across Ranchi.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <ButtonLink href="/monthly-meal-plans" variant="accent" className="font-bold">
                Explore Monthly Plans
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl("Hi, I'd like to subscribe after reading your blog.")}
                variant="whatsapp"
                className="gap-2 font-bold"
              >
                <MessageCircle className="size-4" />
                <span>Order on WhatsApp</span>
              </ButtonLink>
            </div>
          </aside>

          <aside className="mt-6 rounded-2xl bg-[#0F2B18] p-6 sm:p-8 text-white shadow-xl border border-[#C59B27]/30">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white">About Student&apos;s Mess Central Kitchen</h2>
            <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
              Established in 1999, Student&apos;s Mess is a family-run culinary team located in
              Hindpiri, Ranchi. We are committed to preparing and distributing fresh, low-oil,
              hygienic vegetarian and non-vegetarian meals to students, professionals, and
              organizations across 15 Ranchi localities.
            </p>
          </aside>

          <div className="mt-8">
            <ButtonLink href="/blog" variant="outline" size="sm" className="gap-1.5 font-bold">
              <ArrowLeft className="size-3.5 text-[#0F2B18]" />
              <span>Back to Blog Index</span>
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
