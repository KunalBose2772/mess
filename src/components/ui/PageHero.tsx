import type { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Trail after "Home". The last item is the current page. */
  breadcrumbs?: Crumb[];
  /** Extra content under the subtitle (post meta, actions). */
  children?: ReactNode;
}

/** Professional inner page hero with breadcrumb navigation and dual-accent title. */
export function PageHero({ eyebrow, title, subtitle, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-[#0F2B18] border-b border-[#C59B27]/25 py-8 sm:py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(197,155,39,0.2),transparent_70%)]"
      />
      <Container className="text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="text-caption flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/75">
              <li>
                <Link href="/" className="transition-colors hover:text-[#F3CF7A]">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label} className="flex items-center gap-2">
                    <ChevronRight className="size-3.5 opacity-60" />
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href} className="transition-colors hover:text-[#F3CF7A]">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current={isLast ? 'page' : undefined} className="text-[#F3CF7A] font-bold">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {eyebrow && <Eyebrow align="center" className="text-[#F3CF7A] font-bold">{eyebrow}</Eyebrow>}

        <h1 className="text-h1 mt-3 sm:mt-4 text-white font-display">{title}</h1>

        {subtitle && (
          <p className="text-lead mx-auto mt-4 max-w-3xl text-white/85 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </Container>
    </section>
  );
}
