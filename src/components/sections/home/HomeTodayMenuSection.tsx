'use client';

import { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Calendar,
  Clock,
  Moon,
  Coffee,
  Sun,
  Utensils,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { WEEKLY_MENU_SCHEDULE } from '@/data/menu';
import { cn } from '@/lib/cn';
import { trackEvent } from '@/lib/tracking';
import { DayMenuSchedule } from '@/types';

export function HomeTodayMenuSection() {
  const todayIndex = new Date().getDay();
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(todayIndex);
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  const activeSchedule: DayMenuSchedule =
    WEEKLY_MENU_SCHEDULE.find((d) => d.dayIndex === selectedDayIndex) ?? WEEKLY_MENU_SCHEDULE[0];

  return (
    <Section tone="cream" className="border-b border-[#E8E2D8]">
      <SectionHeader
        eyebrow="Daily Kitchen Rotation"
        title="Today's Live Mess Menu & Fresh Meal Schedule"
        subtitle={
          <>
            Prepared fresh twice daily in Lalpur, Ranchi with 100% RO-purified water and zero soda
            or artificial colors. Tap any day below to view the full three-course menu.
          </>
        }
      />

      {/* Calendar Bar Top Control Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#E8E2D8] pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#FBF4DE] text-[#86630F] shadow-xs">
            <CalendarDays className="size-4 text-[#C59B27]" />
          </span>
          <span className="font-display text-sm sm:text-base font-bold text-[#0F2B18] tracking-tight">
            Weekly Rotation Schedule &bull; Monday &ndash; Sunday Dining
          </span>
        </div>

        {/* Pure Veg Switcher Toggle */}
        <button
          type="button"
          role="switch"
          aria-checked={vegOnly}
          onClick={() => setVegOnly((prev) => !prev)}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all shadow-xs active:scale-98 shrink-0 cursor-pointer',
            vegOnly
              ? 'border-emerald-700 bg-emerald-800 text-white shadow-sm ring-1 ring-emerald-600'
              : 'border-[#E8E2D8] bg-white text-[#0F2B18] hover:border-emerald-700/40 hover:bg-emerald-50/40'
          )}
          title={vegOnly ? 'Pure Veg Mode Active (Tap to view all items)' : 'Filter: Show Pure Veg Items Only'}
        >
          <span
            className={cn(
              'inline-flex size-3.5 shrink-0 items-center justify-center rounded-full border p-0.5',
              vegOnly ? 'border-white bg-emerald-800' : 'border-emerald-700 bg-white'
            )}
          >
            <span className={cn('size-1.5 rounded-full', vegOnly ? 'bg-white' : 'bg-emerald-700')} />
          </span>
          <span>{vegOnly ? 'Pure Veg Mode: Active' : 'Switch to Veg Only Mode'}</span>
        </button>
      </div>

      {/* Full-Width 7-Column Executive Calendar Grid (Monday to Sunday) */}
      <div className="mt-3.5 w-full grid grid-cols-7 gap-1.5 sm:gap-2.5 lg:gap-3">
        {WEEKLY_MENU_SCHEDULE.map((d) => {
          const isSelected = d.dayIndex === selectedDayIndex;
          const isToday = d.dayIndex === todayIndex;

          let specialtyLabel = 'Veg RDSB';
          if (vegOnly) {
            specialtyLabel = 'Pure Veg';
          } else if (d.shortName === 'Wed') {
            specialtyLabel = 'Rohu Fish';
          } else if (d.shortName === 'Fri') {
            specialtyLabel = 'Biryani & Egg';
          } else if (d.shortName === 'Sun') {
            specialtyLabel = 'Chicken';
          } else if (d.shortName === 'Sat') {
            specialtyLabel = 'Dhuska';
          }

          return (
            <button
              key={d.dayId}
              type="button"
              onClick={() => setSelectedDayIndex(d.dayIndex)}
              className={cn(
                'group relative flex flex-col items-center justify-between rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center transition-all border outline-none cursor-pointer',
                isSelected
                  ? 'border-[#0F2B18] bg-[#0F2B18] text-white shadow-md ring-2 ring-[#C59B27]'
                  : 'border-[#E8E2D8] bg-white text-[#45514A] hover:border-[#C59B27]/60 hover:bg-[#FAF7F2] shadow-xs'
              )}
              aria-pressed={isSelected}
            >
              <div className="flex flex-col items-center w-full">
                {isToday ? (
                  <span
                    className={cn(
                      'mb-1 inline-flex items-center rounded-full px-2 py-0.5 text-[0.5625rem] font-bold uppercase tracking-wider',
                      isSelected ? 'bg-[#C59B27] text-[#07170C]' : 'bg-[#FBF4DE] text-[#86630F]'
                    )}
                  >
                    Today
                  </span>
                ) : (
                  <span
                    className={cn(
                      'mb-1 text-[0.5625rem] sm:text-[0.625rem] font-semibold uppercase tracking-wider',
                      isSelected ? 'text-white/70' : 'text-[#6A756E]'
                    )}
                  >
                    {d.dayName.slice(0, 3)}
                  </span>
                )}
                <span
                  className={cn(
                    'font-display text-xs sm:text-base font-bold uppercase tracking-wide leading-none',
                    isSelected ? 'text-white' : 'text-[#0F2B18]'
                  )}
                >
                  {d.shortName}
                </span>
              </div>

              <div className="mt-1.5 w-full">
                <span
                  className={cn(
                    'block truncate text-[0.5625rem] sm:text-[0.6875rem] font-semibold rounded-md py-0.5 px-1',
                    isSelected
                      ? 'bg-white/10 text-[#C59B27]'
                      : d.shortName === 'Wed' || d.shortName === 'Fri' || d.shortName === 'Sun'
                      ? 'bg-amber-50 text-amber-900 border border-amber-200/60'
                      : 'bg-[#FAF7F2] text-[#45514A]'
                  )}
                >
                  {specialtyLabel}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Day Context Strip */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E8E2D8] bg-white px-4 py-2.5 shadow-xs">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="font-display text-base font-bold text-[#0F2B18]">
            {activeSchedule.dayName}&apos;s Dining Schedule
          </span>
          {activeSchedule.dayIndex === todayIndex ? (
            <span className="rounded-full bg-emerald-700 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-white">
              Today&apos;s Active Service
            </span>
          ) : (
            <span className="rounded-full bg-[#0F2B18] px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-white">
              Selected Rotation
            </span>
          )}
          <span className="text-xs text-[#6A756E] font-medium">
            &bull; {activeSchedule.tagline}
          </span>
        </div>
        <div className="text-xs text-[#0F2B18] font-medium flex items-center gap-2">
          <Utensils className="size-3.5 text-[#C59B27]" />
          <span>Breakfast &bull; RDSB Lunch &bull; Fresh Dinner</span>
        </div>
      </div>

      {/* 3 Meal Course Cards: Breakfast, Lunch, Dinner */}
      <div className="mt-4 grid gap-5 lg:grid-cols-3 items-stretch">
        {/* 1. BREAKFAST */}
        <div className="flex flex-col rounded-2xl border border-[#E8E2D8] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#0F2B18] px-5 py-3.5 text-white flex items-center justify-between border-b border-[#07170C] border-t-2 border-[#C59B27]">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-[#C59B27] text-base">
                <Coffee className="size-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold tracking-tight text-white">
                  Morning Breakfast
                </h3>
                <p className="text-[0.6875rem] text-[#F5EACB] flex items-center gap-1.5 mt-0.5 font-medium">
                  <Clock className="size-3" />
                  <span>7:30 AM – 10:00 AM</span>
                </p>
              </div>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
              Course 1
            </span>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-[#86630F]">
                <span className="inline-flex size-3.5 items-center justify-center rounded-[3px] border border-emerald-800 p-0.5">
                  <span className="size-1 rounded-full bg-emerald-800" />
                </span>
                Breakfast Specialty
              </div>
              <h4 className="mt-1 font-display text-lg font-bold text-[#0F2B18] leading-snug">
                {activeSchedule.breakfast.title}
              </h4>
              <p className="mt-1.5 text-xs text-[#45514A] leading-relaxed">
                {activeSchedule.breakfast.description}
              </p>

              <div className="mt-4 space-y-2 border-t border-[#E8E2D8] pt-3 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Accompaniments:</span>
                  <span className="font-semibold text-[#0F2B18] text-right">
                    {activeSchedule.breakfast.sides || 'Fresh Mint Chutney & Homemade Pickle'}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Freshness:</span>
                  <span className="text-[#45514A] text-right">Cooked fresh on order every morning</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E8E2D8] pt-3.5 flex items-center justify-between">
              <div>
                <span className="text-[0.625rem] text-[#6A756E] uppercase font-semibold block">Tariff</span>
                <p className="font-display text-base font-bold text-[#0F2B18]">
                  ₹60 <span className="text-xs font-normal text-[#6A756E]">/ plate</span>
                </p>
              </div>
              <ButtonLink
                href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                  `Hello Student's Mess, I want to book Breakfast on ${activeSchedule.dayName}: ${activeSchedule.breakfast.title}`
                )}`}
                onClick={() =>
                  trackEvent({
                    eventType: 'whatsapp_click',
                    buttonLocation: 'home_live_menu',
                    intentTag: `Breakfast: ${activeSchedule.breakfast.title}`,
                  })
                }
                variant="accent"
                size="sm"
                className="h-9 px-4 text-xs font-bold"
              >
                <WhatsAppIcon className="size-3.5 mr-1.5" /> Book Breakfast
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* 2. MIDDAY LUNCH (RDSB) */}
        <div className="flex flex-col rounded-2xl border border-[#E8E2D8] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#0F2B18] px-5 py-3.5 text-white flex items-center justify-between border-b border-[#07170C] border-t-2 border-[#C59B27]">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-[#C59B27] text-base">
                <Sun className="size-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold tracking-tight text-white">
                  Midday Lunch
                </h3>
                <p className="text-[0.6875rem] text-[#F5EACB] flex items-center gap-1.5 mt-0.5 font-medium">
                  <Clock className="size-3" />
                  <span>12:00 PM – 3:30 PM</span>
                </p>
              </div>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
              Course 2 &bull; RDSB
            </span>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-emerald-800">
                  <span className="inline-flex size-3.5 items-center justify-center rounded-[3px] border border-emerald-800 p-0.5">
                    <span className="size-1 rounded-full bg-emerald-800" />
                  </span>
                  R.D.S.B Lunch Service
                </div>
                <span className="text-xs font-bold text-[#0F2B18]">₹90 / meal</span>
              </div>
              <h4 className="mt-1 font-display text-lg font-bold text-[#0F2B18] leading-snug">
                {activeSchedule.lunch.mainSabzi}
              </h4>
              <p className="mt-1.5 text-xs text-[#45514A] leading-relaxed">
                Classic Ranchi R.D.S.B with freshly cooked yellow dal tadka, hot whole-wheat phulkas, and long-grain basmati rice.
              </p>

              <div className="mt-4 space-y-2 border-t border-[#E8E2D8] pt-3 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Lentils &amp; Dal:</span>
                  <span className="font-semibold text-[#0F2B18] text-right">{activeSchedule.lunch.dal}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Breads &amp; Rice:</span>
                  <span className="font-semibold text-[#0F2B18] text-right">
                    {activeSchedule.lunch.bread} &bull; {activeSchedule.lunch.rice}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Sides &amp; Salad:</span>
                  <span className="text-[#45514A] text-right">{activeSchedule.lunch.saladAndSides}</span>
                </div>
              </div>

              {!vegOnly && activeSchedule.lunch.nonVegOption && (
                <div className="mt-3 rounded-xl border border-amber-300/60 bg-amber-50/70 p-2.5 text-xs text-amber-950">
                  <span className="font-bold text-amber-900 uppercase tracking-wider text-[0.625rem] block">
                    Special Non-Veg Option Today:
                  </span>
                  <span className="font-semibold">{activeSchedule.lunch.nonVegOption}</span>
                </div>
              )}
            </div>

            <div className="border-t border-[#E8E2D8] pt-3.5 flex items-center justify-between">
              <div>
                <span className="text-[0.625rem] text-[#6A756E] uppercase font-semibold block">Included In</span>
                <p className="font-display text-sm font-bold text-[#0F2B18]">
                  Monthly Plans <span className="text-xs font-normal text-[#6A756E]">(₹4,000/mo)</span>
                </p>
              </div>
              <ButtonLink
                href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                  `Hello Student's Mess, I want to book Lunch on ${activeSchedule.dayName} (${vegOnly ? 'Pure Veg' : 'Standard Menu'})`
                )}`}
                onClick={() =>
                  trackEvent({
                    eventType: 'whatsapp_click',
                    buttonLocation: 'home_live_menu',
                    intentTag: `Lunch: ${activeSchedule.lunch.mainSabzi}`,
                  })
                }
                variant="accent"
                size="sm"
                className="h-9 px-4 text-xs font-bold"
              >
                <WhatsAppIcon className="size-3.5 mr-1.5" /> Book Lunch
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* 3. EVENING DINNER */}
        <div className="flex flex-col rounded-2xl border border-[#E8E2D8] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#0F2B18] px-5 py-3.5 text-white flex items-center justify-between border-b border-[#07170C] border-t-2 border-[#C59B27]">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-[#C59B27] text-base">
                <Moon className="size-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold tracking-tight text-white">
                  Evening Dinner
                </h3>
                <p className="text-[0.6875rem] text-[#F5EACB] flex items-center gap-1.5 mt-0.5 font-medium">
                  <Clock className="size-3" />
                  <span>7:30 PM – 10:30 PM</span>
                </p>
              </div>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
              Course 3
            </span>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-emerald-800">
                  <span className="inline-flex size-3.5 items-center justify-center rounded-[3px] border border-emerald-800 p-0.5">
                    <span className="size-1 rounded-full bg-emerald-800" />
                  </span>
                  Fresh Roti Sabji / Dinner
                </div>
                <span className="text-xs font-bold text-[#0F2B18]">₹90 – ₹130</span>
              </div>
              <h4 className="mt-1 font-display text-lg font-bold text-[#0F2B18] leading-snug">
                {activeSchedule.dinner.mainSabzi}
              </h4>
              <p className="mt-1.5 text-xs text-[#45514A] leading-relaxed">
                Light, digestible home-style dinner prepared fresh with seasonal sabzi, yellow dal fry, and fresh tawa chapatis.
              </p>

              <div className="mt-4 space-y-2 border-t border-[#E8E2D8] pt-3 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Lentils &amp; Dal:</span>
                  <span className="font-semibold text-[#0F2B18] text-right">{activeSchedule.dinner.dal}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Breads &amp; Rice:</span>
                  <span className="font-semibold text-[#0F2B18] text-right">
                    {activeSchedule.dinner.bread} &bull; {activeSchedule.dinner.rice}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#6A756E] font-medium">Sides &amp; Salad:</span>
                  <span className="text-[#45514A] text-right">{activeSchedule.dinner.saladAndSides}</span>
                </div>
              </div>

              {!vegOnly && activeSchedule.dinner.nonVegOption && (
                <div className="mt-3 rounded-xl border border-amber-300/60 bg-amber-50/70 p-2.5 text-xs text-amber-950">
                  <span className="font-bold text-amber-900 uppercase tracking-wider text-[0.625rem] block">
                    Special Non-Veg Dinner Today:
                  </span>
                  <span className="font-semibold">{activeSchedule.dinner.nonVegOption}</span>
                </div>
              )}
            </div>

            <div className="border-t border-[#E8E2D8] pt-3.5 flex items-center justify-between">
              <div>
                <span className="text-[0.625rem] text-[#6A756E] uppercase font-semibold block">Included In</span>
                <p className="font-display text-sm font-bold text-[#0F2B18]">
                  Monthly Plans <span className="text-xs font-normal text-[#6A756E]">(₹4,000/mo)</span>
                </p>
              </div>
              <ButtonLink
                href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                  `Hello Student's Mess, I want to book Dinner on ${activeSchedule.dayName} (${vegOnly ? 'Pure Veg' : 'Standard Menu'})`
                )}`}
                onClick={() =>
                  trackEvent({
                    eventType: 'whatsapp_click',
                    buttonLocation: 'home_live_menu',
                    intentTag: `Dinner: ${activeSchedule.dinner.mainSabzi}`,
                  })
                }
                variant="accent"
                size="sm"
                className="h-9 px-4 text-xs font-bold"
              >
                <WhatsAppIcon className="size-3.5 mr-1.5" /> Book Dinner
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Dual-CTA Banner */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-4 sm:p-5 shadow-xs">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-bold text-[#0F2B18]">
            Want the full 7-day master matrix or a printable kitchen menu?
          </p>
          <p className="text-xs text-[#6A756E] mt-0.5">
            Download our verified single-page A4 PDF menu or view complete weekly item rotations.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <ButtonLink
            href="/todays-menu"
            variant="primary"
            size="sm"
            className="text-xs font-bold"
          >
            <Calendar className="size-3.5 mr-1.5 text-[#C59B27]" /> View 7-Day Schedule &amp; PDF <ArrowRight className="size-3.5 ml-1.5" />
          </ButtonLink>
          <ButtonLink
            href="/monthly-meal-plans"
            variant="secondary"
            size="sm"
            className="text-xs font-semibold"
          >
            View Monthly Plans
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
