import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { BLOG_POSTS } from '@/data/blog';
import { cn } from '@/lib/cn';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Our Blog | Student's Mess - Nutrition, Food Guides & Student Life",
  description:
    'Read articles on healthy home style eating, student life in Ranchi, monthly meal guides, corporate catering benefits, and regional food tips.',
  path: '/blog',
});

const CATEGORIES = [
  'All Articles',
  'Healthy Meals',
  'Student Guides',
  'Office Nutrition',
  'Catering Tips',
  'Ranchi Food Culture',
];

const COVER_IMAGES = [
  '/images/thali_top.png',
  '/images/veg_plan.png',
  '/images/gallery_prep.png',
  '/images/gallery_boxes.png',
  '/images/nonveg_plan.png',
  '/images/gallery_kitchen.png',
];

function CategoryTag({ children }: { children: string }) {
  return (
    <span className="self-start rounded-full bg-[#EEF7F1] border border-[#A3D9B8] px-3 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-[#0F2B18]">
      {children}
    </span>
  );
}

function PostMeta({ items }: { items: string[] }) {
  return (
    <p className="text-xs text-[#768479] flex flex-wrap items-center gap-x-2 gap-y-1">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true" className="text-[#C59B27] font-bold">·</span>}
          <span>{item}</span>
        </span>
      ))}
    </p>
  );
}

export default function BlogIndexPage() {
  const [featured, ...restPosts] = BLOG_POSTS;

  return (
    <>
      <PageHero
        eyebrow="Knowledge &amp; Culinary Guides • Ranchi Mess"
        title="Student's Mess Journal &amp; Guides"
        breadcrumbs={[{ label: 'Blog' }]}
        subtitle="Nutrition guides, student survival tips, and culinary secrets from our 26-year-old central kitchen in Ranchi."
      />

      <div className="border-b border-[#E8E2D8] bg-[#FAF7F2]">
        <Container>
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 py-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 scrollbar-none">
            {CATEGORIES.map((cat, idx) => (
              <li
                key={cat}
                className={cn(
                  'text-xs shrink-0 rounded-full border px-4 py-1.5 font-bold transition-colors cursor-pointer',
                  idx === 0
                    ? 'border-[#0F2B18] bg-[#0F2B18] text-[#F3CF7A] shadow-xs'
                    : 'border-[#E8E2D8] bg-white text-[#0F2B18] hover:border-[#C59B27] hover:bg-white'
                )}
              >
                {cat}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section tone="surface">
        {featured && (
          <article className="group relative mb-8 grid overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-card transition-all duration-300 hover:border-[#C59B27]/70 hover:shadow-lift lg:mb-10 lg:grid-cols-2">
            <div className="relative min-h-60 overflow-hidden lg:min-h-[22rem] bg-[#FAF7F2]">
              <Image
                src={COVER_IMAGES[0]}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-3.5 p-6 sm:p-8 lg:p-10">
              <CategoryTag>{featured.tagLabel ?? featured.category}</CategoryTag>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F2B18] group-hover:text-[#C59B27] transition-colors">
                <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0">
                  {featured.title}
                </Link>
              </h2>
              <p className="text-xs sm:text-sm text-[#526055] leading-relaxed line-clamp-3">{featured.excerpt}</p>
              <PostMeta items={['By Kitchen Desk', featured.date, featured.readTime]} />
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2B18] group-hover:text-[#C59B27] transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#C59B27]" />
              </span>
            </div>
          </article>
        )}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {restPosts.map((post, i) => (
            <article
              key={post.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C59B27]/70 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={COVER_IMAGES[(i + 1) % COVER_IMAGES.length]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
                <CategoryTag>{post.tagLabel ?? post.category}</CategoryTag>
                <h3 className="font-display text-lg font-bold text-[#0F2B18] group-hover:text-[#C59B27] transition-colors">
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs text-[#526055] line-clamp-2 leading-relaxed flex-1">{post.excerpt}</p>
                <PostMeta items={[post.date, post.readTime]} />
                <span className="mt-2 inline-flex items-center gap-1.5 border-t border-[#E8E2D8]/70 pt-3 text-xs font-bold text-[#0F2B18] group-hover:text-[#C59B27] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#C59B27]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
