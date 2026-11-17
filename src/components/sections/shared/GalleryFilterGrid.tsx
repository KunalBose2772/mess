'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/cn';

type Category = 'all' | 'food' | 'kitchen' | 'bulk';

const GALLERY_ITEMS = [
  {
    category: 'food',
    image: '/images/thali_top.png',
    alt: "Standard Veg Thali with rice, rotis, dal and seasonal sabzi at Student's Mess Ranchi",
    title: 'Standard Veg Thali',
    caption: 'Steamed rice, chapati, seasonal vegetable curry, yellow dal, salad, pickle.',
  },
  {
    category: 'kitchen',
    image: '/images/gallery_kitchen.png',
    alt: "Centralized RO water purification plant and cooking stations at Student's Mess kitchen Ranchi",
    title: 'RO Water Filtration',
    caption: 'Our kitchen uses centralized RO plants for washing, rinsing, and cooking.',
  },
  {
    category: 'bulk',
    image: '/images/gallery_boxes.png',
    alt: 'Individually sealed leak-proof lunch containers prepped for corporate office delivery in Ranchi',
    title: 'Corporate Thali Packing',
    caption: 'Individually sealed leak-proof lunch containers loaded for office deliveries.',
  },
  {
    category: 'food',
    image: '/images/nonveg_plan.png',
    alt: 'Dehati slow-cooked spicy chicken curry thali prepared using authentic Ranchi spices',
    title: 'Dehati Chicken Curry',
    caption: 'Ranchi style slow-cooked spicy chicken curry prepared using local spices.',
  },
  {
    category: 'kitchen',
    image: '/images/gallery_prep.png',
    alt: "High-temperature sanitization and fresh vegetable prep in Student's Mess kitchen",
    title: 'Daily Sanitization Run',
    caption: 'Utensils are cleaned at high temperatures to ensure sanitation guidelines.',
  },
  {
    category: 'bulk',
    image: '/images/gallery_pack.png',
    alt: 'Insulated hot containers loaded for daily PG hostel meal distribution in Ranchi',
    title: 'PG Hostel Food Supply',
    caption: 'Bulk insulated hot containers prepped for PG residents in Lalpur.',
  },
] as const;

const FILTER_TABS: Array<{ key: Category; label: string }> = [
  { key: 'all', label: 'All Photos' },
  { key: 'food', label: 'Our Food' },
  { key: 'kitchen', label: 'Kitchen & Cleanliness' },
  { key: 'bulk', label: 'Events & Bulk Packing' },
];

export function GalleryFilterGrid() {
  const [filter, setFilter] = useState<Category>('all');

  const visibleItems =
    filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <Section tone="cream">
      <div
        role="group"
        aria-label="Filter gallery photos"
        className="-mx-[var(--gutter)] mb-8 flex gap-2 overflow-x-auto px-[var(--gutter)] pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 lg:mb-10"
      >
        {FILTER_TABS.map((tab) => {
          const active = filter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(tab.key)}
              className={cn(
                'h-11 shrink-0 rounded-full border px-5 text-[0.9375rem] font-bold transition-all cursor-pointer',
                active
                  ? 'border-[#0F2B18] bg-[#0F2B18] text-[#F3CF7A] shadow-md ring-1 ring-[#C59B27]/50'
                  : 'border-[#E8E2D8] bg-white text-[#0F2B18] hover:border-[#C59B27] hover:bg-[#FAF7F2]'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <figure
            key={item.title}
            className="on-light group overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-card hover:border-[#C59B27]/70 hover:shadow-lift transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-5">
              <h2 className="text-h4">{item.title}</h2>
              <p className="text-small text-soft mt-1.5">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
