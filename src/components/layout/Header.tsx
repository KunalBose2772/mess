'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  Menu,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
  Star,
  Users,
  X,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { MAIN_NAV, type MainNavItem } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { trackEvent } from '@/lib/tracking';
import { cn } from '@/lib/cn';

function isActive(pathname: string, item: MainNavItem): boolean {
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return item.children?.some((child) => child.href === pathname) ?? false;
}

function TopBar() {
  return (
    <div className="hidden bg-[#07170C] text-stone-300 text-xs border-b border-[#C59B27]/20 md:block">
      <Container className="flex h-9 items-center justify-between font-medium">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-stone-300">
            <MapPin className="size-3.5 text-[#C59B27]" /> Ranchi, Jharkhand
          </span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <Star className="size-3.5 fill-[#C59B27] text-[#C59B27]" /> Serving Since 1999 (26+ Years)
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-stone-300">
            <Clock className="size-3.5 text-[#C59B27]" /> Daily: 7:30 AM – 10:30 PM
          </span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <Users className="size-3.5 text-[#C59B27]" /> Bulk Orders &amp; Catering Welcome
          </span>
        </div>
      </Container>
    </div>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Main navigation" className="hidden xl:block">
      <ul className="flex items-center gap-1">
        {MAIN_NAV.map((item) => {
          const active = isActive(pathname, item);
          const linkClasses = cn(
            'relative flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[0.9375rem] font-semibold transition-all duration-150',
            active
              ? 'text-[#C59B27] bg-white/5 font-bold'
              : 'text-stone-200 hover:text-[#C59B27] hover:bg-white/5'
          );

          if (!item.children) {
            return (
              <li key={item.href}>
                <Link href={item.href} className={linkClasses} aria-current={active ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li key={item.href} className="group relative">
              <Link href={item.href} className={linkClasses} aria-haspopup="true">
                {item.label}
                <ChevronDown
                  className="size-3.5 opacity-75 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="rounded-2xl border border-[#E8E2D8] bg-white p-2 shadow-2xl">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={cn(
                          'block rounded-xl px-3.5 py-2.5 text-[0.875rem] font-medium transition-colors hover:bg-[#FAF7F2] hover:text-[#0F2B18]',
                          pathname === child.href ? 'bg-[#FAF7F2] text-[#0F2B18] font-bold' : 'text-[#45514A]'
                        )}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                  {item.viewAllLabel && (
                    <li className="mt-1 border-t border-[#E8E2D8] pt-1">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-bold text-[#C59B27] transition-colors hover:bg-[#FBF4DE]/60"
                      >
                        {item.viewAllLabel}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

interface MobileNavProps {
  open: boolean;
  pathname: string;
  onNavigate: () => void;
}

function MobileNav({ open, pathname, onNavigate }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      id="mobile-nav"
      className={cn(
        'absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#0F2B18] transition-[opacity,visibility] duration-200 xl:hidden',
        open ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <Container className="pb-32 pt-3">
        <nav aria-label="Mobile navigation">
          <ul className="divide-y divide-white/10">
            {[{ label: 'Home', href: '/' } as MainNavItem, ...MAIN_NAV].map((item) => {
              const active = item.href === '/' ? pathname === '/' : isActive(pathname, item);
              const isExpanded = expanded === item.href;

              return (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        'flex-1 py-3.5 text-[1rem] font-semibold transition-colors',
                        active ? 'text-[#C59B27]' : 'text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label}`}
                        onClick={() => setExpanded(isExpanded ? null : item.href)}
                        className="inline-flex size-11 items-center justify-center rounded-full text-white/80 active:bg-white/10"
                      >
                        <ChevronDown
                          className={cn('size-4 transition-transform', isExpanded && 'rotate-180')}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && isExpanded && (
                    <ul className="mb-3 grid grid-cols-2 gap-2 rounded-2xl bg-white/[0.06] p-3 border border-white/10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onNavigate}
                            className="block py-2 px-1 text-[0.875rem] text-stone-200 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      {item.viewAllLabel && (
                        <li className="col-span-2 mt-1 border-t border-white/10 pt-2">
                          <Link
                            href={item.href}
                            onClick={onNavigate}
                            className="flex items-center gap-2 py-1 text-xs font-bold text-[#C59B27]"
                          >
                            {item.viewAllLabel} <ArrowRight className="size-3.5" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ButtonLink href={SITE_CONFIG.phoneHref} variant="accent" size="lg" block>
            <Phone className="size-4" /> {SITE_CONFIG.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={SITE_CONFIG.whatsappDefaultUrl} variant="outline-light" size="lg" block>
            <WhatsAppIcon className="size-4 text-emerald-400" /> Chat on WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 8);

      if (currentScrollY <= 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 6) {
        // Scrolling down -> hide header so it does not collide with page/footer content
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 6) {
        // Scrolling up -> reveal header smoothly
        setVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on route change and when the viewport grows to desktop.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 80rem)');
    const onChange = () => desktop.matches && setMobileOpen(false);
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <TopBar />

      <header
        className={cn(
          'sticky top-0 z-50 bg-[#0F2B18] border-b border-[#C59B27]/20 transition-transform duration-300 ease-in-out',
          visible || mobileOpen ? 'translate-y-0' : '-translate-y-full',
          scrolled || mobileOpen ? 'shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md' : 'shadow-none'
        )}
      >
        <Container className="flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href="/" className="shrink-0 flex items-center" aria-label="Student's Mess — Home">
            <Image
              src="/images/logo.png"
              alt="Student's Mess Logo"
              width={1000}
              height={400}
              sizes="170px"
              priority
              className="h-11 w-auto sm:h-12 lg:h-13"
            />
          </Link>

          <DesktopNav pathname={pathname} />

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() =>
                trackEvent({
                  eventType: 'phone_call',
                  buttonLocation: 'navbar_mobile_phone',
                  intentTag: 'Navbar Mobile Call Tap',
                })
              }
              aria-label={`Call us on ${SITE_CONFIG.phoneDisplay}`}
              title="Call Us"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#C59B27] hover:text-[#C59B27] 2xl:hidden"
            >
              <Phone className="size-4" />
            </a>
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() =>
                trackEvent({
                  eventType: 'phone_call',
                  buttonLocation: 'navbar_desktop_phone',
                  intentTag: 'Navbar Desktop Call Tap',
                })
              }
              className="hidden items-center gap-2 text-[0.875rem] font-semibold text-white transition-colors hover:text-[#C59B27] 2xl:flex"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/20">
                <Phone className="size-3.5" />
              </span>
              {SITE_CONFIG.phoneDisplay}
            </a>
            <span className="hidden sm:block">
              <ButtonLink
                href={SITE_CONFIG.whatsappDefaultUrl}
                onClick={() =>
                  trackEvent({
                    eventType: 'whatsapp_click',
                    buttonLocation: 'navbar_desktop_button',
                    intentTag: 'Navbar WhatsApp Header',
                  })
                }
                variant="whatsapp"
                size="sm"
                className="h-10! px-4! text-xs font-bold shadow-md hover:shadow-lg"
                title="WhatsApp Us"
              >
                <WhatsAppIcon className="text-base mr-1.5" /> WhatsApp Us
              </ButtonLink>
            </span>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 xl:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>

        <MobileNav open={mobileOpen} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
      </header>
    </>
  );
}
