'use client';

import { useState } from 'react';
import {
  CalendarDays,
  Check,
  Clock,
  Coffee,
  Copy,
  Drumstick,
  FileText,
  Info,
  Leaf,
  MessageCircle,
  Moon,
  Printer,
  ShieldCheck,
  Sun,
  Utensils,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import {
  formatDayMenuShareText,
  formatWeeklyMenuShareText,
  MENU_DATA,
  WEEKLY_MENU_SCHEDULE,
} from '@/data/menu';
import { cn } from '@/lib/cn';
import { DayMenuSchedule, MenuItem } from '@/types';

type ViewTab = 'day' | 'week' | 'thalis';

export function MenuInteractiveView() {
  const todayIndex = new Date().getDay();
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(todayIndex);
  const [activeTab, setActiveTab] = useState<ViewTab>('day');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  const activeSchedule: DayMenuSchedule =
    WEEKLY_MENU_SCHEDULE.find((d) => d.dayIndex === selectedDayIndex) ?? WEEKLY_MENU_SCHEDULE[0];

  const handleCopyMenu = async () => {
    let textToCopy =
      activeTab === 'week'
        ? formatWeeklyMenuShareText()
        : formatDayMenuShareText(activeSchedule);

    if (vegOnly) {
      textToCopy = textToCopy
        .split('\n')
        .filter((line) => !line.includes('Non-Veg') && !line.includes('Chicken') && !line.includes('Fish') && !line.includes('Egg'))
        .join('\n');
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getWhatsAppShareUrl = () => {
    let text =
      activeTab === 'week'
        ? formatWeeklyMenuShareText()
        : formatDayMenuShareText(activeSchedule);

    if (vegOnly) {
      text = text
        .split('\n')
        .filter((line) => !line.includes('Non-Veg') && !line.includes('Chicken') && !line.includes('Fish') && !line.includes('Egg'))
        .join('\n');
    }

    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      {/* =========================================================================
          PRINT / PDF EXPORT DOCUMENT (Strictly 1-Page A4 Portrait)
          Visible only during window.print() or PDF export
          ========================================================================= */}
      <div className="print-only">
        <div style={{ textAlign: 'center', borderBottom: '2px solid #0F2B18', paddingBottom: '6px', marginBottom: '8px' }}>
          <h1 style={{ fontSize: '15pt', fontWeight: 'bold', margin: '0 0 2px 0', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F2B18' }}>
            STUDENT&apos;S MESS &amp; CATERING SERVICES &bull; RANCHI
          </h1>
          <p style={{ fontSize: '8.5pt', margin: 0, fontWeight: '600', color: '#C59B27' }}>
            {vegOnly
              ? 'ESTABLISHED 1999 • CENTRAL KITCHEN OFFICIAL 100% PURE VEGETARIAN ROTATING MENU & NUTRITION SCHEDULE'
              : 'ESTABLISHED 1999 • CENTRAL KITCHEN OFFICIAL WEEKLY ROTATING MENU & NUTRITION SCHEDULE'}
          </p>
          <p style={{ fontSize: '7.5pt', margin: '2px 0 0 0', color: '#526055' }}>
            Service Timings: Lunch 11:30 AM &ndash; 3:30 PM &bull; Dinner 7:30 PM &ndash; 10:30 PM &bull; Telephone: +91 6201016720 &bull; Website: https://studentsmess.com
          </p>
        </div>

        <table className="print-table">
          <thead>
            <tr>
              <th style={{ width: '11%' }}>Day</th>
              <th style={{ width: '22%' }}>Morning Breakfast (7:30&ndash;10 AM)</th>
              <th style={{ width: '33%' }}>Midday Lunch (11:30 AM&ndash;3:30 PM)</th>
              <th style={{ width: '34%' }}>Evening Dinner (7:30&ndash;10:30 PM)</th>
            </tr>
          </thead>
          <tbody>
            {WEEKLY_MENU_SCHEDULE.map((day) => (
              <tr key={day.dayId}>
                <td style={{ fontWeight: 'bold' }}>
                  {day.dayName}
                  <span style={{ display: 'block', fontSize: '6.5pt', fontWeight: 'normal', color: '#526055' }}>
                    {day.tagline.split('•')[0].trim()}
                  </span>
                </td>
                <td>
                  <strong>{day.breakfast.title}</strong>
                  <div style={{ fontSize: '6.5pt', color: '#526055', marginTop: '1px' }}>
                    {day.breakfast.sides}
                  </div>
                </td>
                <td>
                  <strong>{day.lunch.mainSabzi}</strong>
                  {!vegOnly && day.lunch.nonVegOption && (
                    <div style={{ fontSize: '7pt', fontWeight: 'bold', color: '#8A1C14', marginTop: '1px' }}>
                      [Non-Veg]: {day.lunch.nonVegOption}
                    </div>
                  )}
                  <div style={{ fontSize: '6.5pt', color: '#334139', marginTop: '1px' }}>
                    {day.lunch.dal} &bull; {day.lunch.bread} &bull; {day.lunch.rice} &bull; {day.lunch.saladAndSides}
                  </div>
                </td>
                <td>
                  <strong>{day.dinner.mainSabzi}</strong>
                  {!vegOnly && day.dinner.nonVegOption && (
                    <div style={{ fontSize: '7pt', fontWeight: 'bold', color: '#8A1C14', marginTop: '1px' }}>
                      [Non-Veg]: {day.dinner.nonVegOption}
                    </div>
                  )}
                  <div style={{ fontSize: '6.5pt', color: '#334139', marginTop: '1px' }}>
                    {day.dinner.dal} &bull; {day.dinner.bread} &bull; {day.dinner.rice} &bull; {day.dinner.saladAndSides}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: '8px', borderTop: '1px solid #C59B27', paddingTop: '5px', display: 'flex', justifyContent: 'space-between', fontSize: '7pt', color: '#0F2B18' }}>
          <div>
            <strong>Thali Tariff:</strong> Veg R.D.S.B: &#8377;90 &bull; Paneer Special: &#8377;130 &bull; Dal Bhaat Chokha: &#8377;80 &bull; Breakfast: &#8377;60 {!vegOnly && <>&bull; Egg Thali: &#8377;110 &bull; Fish Thali: &#8377;140 &bull; Chicken Thali: &#8377;150 &bull; Chicken Biryani: &#8377;150</>}
          </div>
          <div>
            <strong>Monthly Subscriptions:</strong> 1 Meal/Day: &#8377;2,200/mo (Veg) / &#8377;2,400/mo (Non-Veg) &bull; 2 Meals/Day: &#8377;4,000/mo (Veg) / &#8377;4,200/mo (Non-Veg) &bull; 3 Meals (Full Board): &#8377;5,800/mo / &#8377;6,000/mo
          </div>
        </div>
        <div style={{ marginTop: '3px', textAlign: 'center', fontSize: '6pt', color: '#526055' }}>
          Kitchen Protocol: 100% RO Purified Drinking Water &bull; Daily Mandi Fresh Produce &bull; 4 Non-Veg Meals Weekly (Wed Fish, Fri Egg, Fri Chicken Biryani, Sun Chicken Curry) &bull; Central Kitchen: Nizam Nagar, Hindpiri, Ranchi
        </div>
      </div>

      {/* =========================================================================
          SCREEN UI (Authentic Heritage Culinary Digital Menu Suite)
          ========================================================================= */}
      <div className="screen-only py-8 sm:py-10 lg:py-14 bg-[#FCFBF7]">
        <Container>
          {/* Executive Section Header & Toolbar */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-[#E8E2D8] pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C59B27]/40 bg-[#0F2B18] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#F3CF7A] uppercase shadow-xs">
                <ShieldCheck className="size-3.5 text-[#C59B27]" /> Official Dining Schedule &bull; Central Kitchen
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2B18]">
                Weekly Rotating Menu &amp; Institutional Tariff
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-[#526055] max-w-2xl leading-relaxed">
                Serving over 500 daily residents, professionals, and students across Ranchi. Prepared fresh twice daily with 100% RO purified water, Grade-A grains, and strictly separate cookware for vegetarian and non-vegetarian selections.
              </p>
            </div>

            {/* Action Suite */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#0F2B18] border border-[#C59B27]/40 px-4 text-xs sm:text-sm font-bold text-[#F3CF7A] shadow-xs transition-all hover:bg-[#07170C] active:scale-98 cursor-pointer"
                title="Print or Save Official A4 PDF Schedule"
              >
                <FileText className="size-4 text-[#C59B27]" />
                <span>Official PDF / Print</span>
              </button>

              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#128C4B] bg-[#128C4B] px-4 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-[#0E703C] active:scale-98"
                title="Send Schedule to WhatsApp"
              >
                <MessageCircle className="size-4 text-white" />
                <span>Share via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopyMenu}
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#E8E2D8] bg-white px-3.5 text-xs sm:text-sm font-semibold text-[#0F2B18] shadow-xs transition-all hover:bg-[#FAF7F2] hover:border-[#C59B27] active:scale-98 cursor-pointer"
                title="Copy formatted schedule memo"
              >
                {copied ? (
                  <Check className="size-4 text-[#0F2B18]" />
                ) : (
                  <Copy className="size-4 text-[#526055]" />
                )}
                <span>{copied ? 'Copied' : 'Copy Memo'}</span>
              </button>
            </div>
          </div>

          {/* Navigation Mode Tabs & PURE VEG SWITCHER */}
          <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex rounded-xl bg-[#FAF7F2] p-1 border border-[#E8E2D8] self-start">
              <button
                type="button"
                onClick={() => setActiveTab('day')}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer',
                  activeTab === 'day'
                    ? 'bg-[#0F2B18] text-[#F3CF7A] shadow-xs'
                    : 'text-[#334139] hover:text-[#0F2B18] hover:bg-white/60'
                )}
              >
                <Utensils className="size-3.5" />
                <span>Daily Schedule</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('week')}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer',
                  activeTab === 'week'
                    ? 'bg-[#0F2B18] text-[#F3CF7A] shadow-xs'
                    : 'text-[#334139] hover:text-[#0F2B18] hover:bg-white/60'
                )}
              >
                <CalendarDays className="size-3.5" />
                <span>7-Day Master Matrix</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('thalis')}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer',
                  activeTab === 'thalis'
                    ? 'bg-[#0F2B18] text-[#F3CF7A] shadow-xs'
                    : 'text-[#334139] hover:text-[#0F2B18] hover:bg-white/60'
                )}
              >
                <Leaf className="size-3.5" />
                <span>Thali Catalog &amp; Tariffs</span>
              </button>
            </div>

            {/* PURE VEG ONLY SWITCHER */}
            <button
              type="button"
              role="switch"
              aria-checked={vegOnly}
              onClick={() => setVegOnly((prev) => !prev)}
              className={cn(
                'inline-flex items-center gap-2.5 rounded-xl border px-4 py-2 text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-98 self-start sm:self-auto cursor-pointer',
                vegOnly
                  ? 'border-[#0F2B18] bg-[#0F2B18] text-[#F3CF7A]'
                  : 'border-[#E8E2D8] bg-white text-[#0F2B18] hover:border-[#C59B27] hover:bg-[#FAF7F2]'
              )}
              title={vegOnly ? 'Pure Veg Mode Active (Tap to view all items)' : 'Filter: Show Pure Veg Items Only'}
            >
              <span
                className={cn(
                  'inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] border p-0.5',
                  vegOnly ? 'border-[#C59B27] bg-[#C59B27]' : 'border-[#0F2B18] bg-white'
                )}
              >
                <span className={cn('size-1.5 rounded-full', vegOnly ? 'bg-[#07170C]' : 'bg-[#0F2B18]')} />
              </span>
              <span>{vegOnly ? 'Pure Veg Mode: ON' : 'Switch to Veg Only Mode'}</span>
            </button>
          </div>

          {/* =====================================================================
              VIEW 1: DAILY SCHEDULE VIEW
              ===================================================================== */}
          {activeTab === 'day' && (
            <div className="mt-6 sm:mt-8">
              {/* Day Selector Strip */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2.5 overflow-x-auto pb-1">
                {WEEKLY_MENU_SCHEDULE.map((d) => {
                  const isSelected = d.dayIndex === selectedDayIndex;
                  const isToday = d.dayIndex === todayIndex;

                  return (
                    <button
                      key={d.dayId}
                      type="button"
                      onClick={() => setSelectedDayIndex(d.dayIndex)}
                      className={cn(
                        'relative flex flex-col items-center justify-center rounded-xl p-2.5 sm:p-3.5 text-center transition-all border cursor-pointer',
                        isSelected
                          ? 'border-[#0F2B18] bg-[#0F2B18] text-[#F3CF7A] shadow-md ring-1 ring-[#C59B27]/50'
                          : 'border-[#E8E2D8] bg-white text-[#0F2B18] hover:border-[#C59B27] hover:bg-[#FAF7F2]'
                      )}
                    >
                      {isToday && (
                        <span
                          className={cn(
                            'mb-1 inline-flex items-center rounded-full px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider',
                            isSelected
                              ? 'bg-[#C59B27] text-[#07170C]'
                              : 'bg-[#EEF7F1] text-[#0F2B18] border border-[#A3D9B8]'
                          )}
                        >
                          Today
                        </span>
                      )}
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-none">
                        {d.shortName}
                      </span>
                      <span
                        className={cn(
                          'mt-1 text-[0.6875rem] font-medium hidden sm:block truncate max-w-full',
                          isSelected ? 'text-white/80' : 'text-[#768479]'
                        )}
                      >
                        {vegOnly ? 'Pure Veg' : (d.isPureVegDay ? 'Pure Veg' : (d.shortName === 'Wed' || d.shortName === 'Sun' ? 'Non-Veg Day' : 'Veg Special'))}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Day Context Strip */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-[#E8E2D8] bg-[#FAF7F2] p-4 sm:p-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F2B18]">
                      {activeSchedule.dayName}&apos;s Dining Schedule
                    </h3>
                    {activeSchedule.dayIndex === todayIndex && (
                      <span className="rounded-full bg-[#0F2B18] border border-[#C59B27]/40 px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-[#F3CF7A]">
                        Active Today
                      </span>
                    )}
                    {vegOnly && (
                      <span className="rounded-full bg-[#EEF7F1] border border-[#A3D9B8] px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-[#0F2B18]">
                        100% Pure Veg Filter Active
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#526055] font-medium">
                    Theme: {activeSchedule.tagline}
                  </p>
                </div>

                <div className="mt-3 sm:mt-0 flex items-center gap-2">
                  <ButtonLink
                    href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                      `Hello, I would like to inquire about ${vegOnly ? 'pure vegetarian ' : ''}meals for ${activeSchedule.dayName} at Student's Mess Ranchi.`
                    )}`}
                    variant="primary"
                    size="sm"
                    className="h-10 text-xs sm:text-sm font-bold gap-1.5"
                  >
                    <MessageCircle className="size-4" />
                    <span>Inquire for {activeSchedule.dayName}</span>
                  </ButtonLink>
                </div>
              </div>

              {/* Meal Cards: Breakfast, Lunch & Dinner */}
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {/* BREAKFAST CARD */}
                <div className="flex flex-col rounded-2xl border border-[#E8E2D8] bg-white shadow-card overflow-hidden hover:border-[#C59B27]/50 transition-colors">
                  <div className="bg-[#0F2B18] px-6 py-4 text-white flex items-center justify-between border-b border-[#C59B27]/25">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#F3CF7A] text-base">
                        <Coffee className="size-5" />
                      </span>
                      <div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-white">Morning Breakfast</h4>
                        <p className="text-xs text-white/75 flex items-center gap-1.5 mt-0.5">
                          <Clock className="size-3 text-[#F3CF7A]" />
                          <span>7:30 AM – 10:00 AM</span>
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-[#C59B27]/40 bg-white/10 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-[#F3CF7A]">
                      Morning Course
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4 flex-1">
                    <div className="rounded-xl border border-[#E6C86E] bg-[#FBF4DE]/70 p-4">
                      <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-[#9E7A1C]">
                        <span className="inline-flex size-4 items-center justify-center rounded-[3px] border border-[#0F2B18] p-0.5">
                          <span className="size-1.5 rounded-full bg-[#0F2B18]" />
                        </span>
                        Daily Breakfast Special
                      </div>
                      <p className="mt-1.5 font-display text-lg font-bold text-[#0F2B18]">
                        {activeSchedule.breakfast.title}
                      </p>
                      <p className="mt-1 text-xs text-[#526055] leading-relaxed">
                        {activeSchedule.breakfast.description}
                      </p>
                    </div>

                    <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-3 text-xs">
                      <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                        Included Accompaniments
                      </span>
                      <p className="mt-1 font-semibold text-[#0F2B18]">{activeSchedule.breakfast.sides || 'Fresh Mint Chutney & Pickle'}</p>
                    </div>

                    <div className="rounded-lg border border-[#E8E2D8] bg-white p-3 text-xs">
                      <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                        Fresh Preparation Note
                      </span>
                      <p className="mt-0.5 text-[#526055]">Cooked fresh on order every morning between 7:30 AM and 10:00 AM.</p>
                    </div>
                  </div>

                  <div className="border-t border-[#E8E2D8] bg-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between">
                    <div>
                      <span className="text-[0.6875rem] text-[#768479] uppercase font-bold">Morning Plate</span>
                      <p className="font-display text-xl font-bold text-[#0F2B18]">₹60 <span className="text-xs font-normal text-[#526055]">/ plate</span></p>
                    </div>
                    <a
                      href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                        `Hello Student's Mess, I want to book Breakfast on ${activeSchedule.dayName}: ${activeSchedule.breakfast.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#0F2B18] border border-[#C59B27]/40 px-3.5 text-xs font-bold text-[#F3CF7A] transition-all hover:bg-[#07170C]"
                    >
                      <MessageCircle className="size-3.5 text-[#C59B27]" />
                      <span>Book Breakfast</span>
                    </a>
                  </div>
                </div>

                {/* LUNCH CARD */}
                <div className="flex flex-col rounded-2xl border border-[#E8E2D8] bg-white shadow-card overflow-hidden hover:border-[#C59B27]/50 transition-colors">
                  <div className="bg-[#0F2B18] px-6 py-4 text-white flex items-center justify-between border-b border-[#C59B27]/25">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#F3CF7A] text-base">
                        <Sun className="size-5" />
                      </span>
                      <div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-white">Afternoon Lunch Service</h4>
                        <p className="text-xs text-white/75 flex items-center gap-1.5 mt-0.5">
                          <Clock className="size-3 text-[#F3CF7A]" />
                          <span>11:30 AM – 3:30 PM</span>
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-[#C59B27]/40 bg-white/10 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-[#F3CF7A]">
                      Lunch Course
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4 flex-1">
                    {/* Main Sabzi */}
                    <div className="rounded-xl border border-[#A3D9B8] bg-[#EEF7F1]/70 p-3.5">
                      <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-[#0F2B18]">
                        <span className="inline-flex size-4 items-center justify-center rounded-[3px] border border-[#0F2B18] p-0.5">
                          <span className="size-1.5 rounded-full bg-[#0F2B18]" />
                        </span>
                        Vegetarian Specialty (R.D.S.B)
                      </div>
                      <p className="mt-1 font-semibold text-[#0F2B18] text-base">
                        {activeSchedule.lunch.mainSabzi}
                      </p>
                    </div>

                    {/* Non-Veg Option if available & not in veg-only mode */}
                    {!vegOnly && activeSchedule.lunch.nonVegOption && (
                      <div className="rounded-xl border border-[#F1A5A5] bg-[#FDF2F2] p-3.5">
                        <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-[#8A1C14]">
                          <span className="inline-flex size-4 items-center justify-center rounded-[3px] border border-[#8A1C14] p-0.5">
                            <span className="size-1.5 rounded-full bg-[#8A1C14]" />
                          </span>
                          Non-Vegetarian Alternative
                        </div>
                        <p className="mt-1 font-semibold text-[#8A1C14] text-base">
                          {activeSchedule.lunch.nonVegOption}
                        </p>
                      </div>
                    )}

                    {/* Meal Breakdown Grid */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Lentils (Dal)
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.lunch.dal}</p>
                      </div>
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Whole-Wheat Breads
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.lunch.bread}</p>
                      </div>
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Steamed Grain
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.lunch.rice}</p>
                      </div>
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Accompaniments
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.lunch.saladAndSides}</p>
                      </div>
                    </div>

                    {activeSchedule.lunch.special && (
                      <div className="rounded-lg border border-[#E6C86E] bg-[#FBF4DE]/80 p-3 text-xs text-[#9E7A1C] font-medium">
                        <strong className="block text-[0.6875rem] uppercase tracking-wider text-[#9E7A1C]">Culinary Accent</strong>
                        <p className="mt-0.5 text-[#0F2B18]">{activeSchedule.lunch.special}</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-[#E8E2D8] bg-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between">
                    <div>
                      <span className="text-[0.6875rem] text-[#768479] uppercase font-bold">Standard Thali</span>
                      <p className="font-display text-xl font-bold text-[#0F2B18]">₹90 <span className="text-xs font-normal text-[#526055]">/ meal</span></p>
                    </div>
                    <a
                      href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                        `Hello Student's Mess, I want to book ${vegOnly ? 'Pure Veg ' : ''}Lunch on ${activeSchedule.dayName}: ${activeSchedule.lunch.mainSabzi}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#0F2B18] border border-[#C59B27]/40 px-3.5 text-xs font-bold text-[#F3CF7A] transition-all hover:bg-[#07170C]"
                    >
                      <MessageCircle className="size-3.5 text-[#C59B27]" />
                      <span>Book Lunch</span>
                    </a>
                  </div>
                </div>

                {/* DINNER CARD */}
                <div className="flex flex-col rounded-2xl border border-[#E8E2D8] bg-white shadow-card overflow-hidden hover:border-[#C59B27]/50 transition-colors">
                  <div className="bg-[#07170C] px-6 py-4 text-white flex items-center justify-between border-b border-[#C59B27]/25">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#F3CF7A] text-base">
                        <Moon className="size-5" />
                      </span>
                      <div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-white">Evening Dinner Service</h4>
                        <p className="text-xs text-white/75 flex items-center gap-1.5 mt-0.5">
                          <Clock className="size-3 text-[#F3CF7A]" />
                          <span>7:30 PM – 10:30 PM</span>
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-[#C59B27]/40 bg-white/10 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-[#F3CF7A]">
                      Dinner Course
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4 flex-1">
                    {/* Main Sabzi */}
                    <div className="rounded-xl border border-[#A3D9B8] bg-[#EEF7F1]/70 p-3.5">
                      <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-[#0F2B18]">
                        <span className="inline-flex size-4 items-center justify-center rounded-[3px] border border-[#0F2B18] p-0.5">
                          <span className="size-1.5 rounded-full bg-[#0F2B18]" />
                        </span>
                        Vegetarian Specialty
                      </div>
                      <p className="mt-1 font-semibold text-[#0F2B18] text-base">
                        {activeSchedule.dinner.mainSabzi}
                      </p>
                    </div>

                    {/* Non-Veg Option if available & not in veg-only mode */}
                    {!vegOnly && activeSchedule.dinner.nonVegOption && (
                      <div className="rounded-xl border border-[#F1A5A5] bg-[#FDF2F2] p-3.5">
                        <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-[#8A1C14]">
                          <span className="inline-flex size-4 items-center justify-center rounded-[3px] border border-[#8A1C14] p-0.5">
                            <span className="size-1.5 rounded-full bg-[#8A1C14]" />
                          </span>
                          Non-Vegetarian Alternative
                        </div>
                        <p className="mt-1 font-semibold text-[#8A1C14] text-base">
                          {activeSchedule.dinner.nonVegOption}
                        </p>
                      </div>
                    )}

                    {/* Meal Breakdown Grid */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Lentils (Dal)
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.dinner.dal}</p>
                      </div>
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Whole-Wheat Breads
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.dinner.bread}</p>
                      </div>
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Steamed Grain
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.dinner.rice}</p>
                      </div>
                      <div className="rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] p-2.5">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479]">
                          Accompaniments
                        </span>
                        <p className="mt-0.5 font-semibold text-[#0F2B18]">{activeSchedule.dinner.saladAndSides}</p>
                      </div>
                    </div>

                    {activeSchedule.dinner.special && (
                      <div className="rounded-lg border border-[#E6C86E] bg-[#FBF4DE]/80 p-3 text-xs text-[#9E7A1C] font-medium">
                        <strong className="block text-[0.6875rem] uppercase tracking-wider text-[#9E7A1C]">Culinary Accent / Confectionery</strong>
                        <p className="mt-0.5 text-[#0F2B18]">{activeSchedule.dinner.special}</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-[#E8E2D8] bg-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between">
                    <div>
                      <span className="text-[0.6875rem] text-[#768479] uppercase font-bold">Standard Dinner</span>
                      <p className="font-display text-xl font-bold text-[#0F2B18]">
                        {activeSchedule.dinner.nonVegOption && !vegOnly ? '₹150' : '₹90'} <span className="text-xs font-normal text-[#526055]">/ meal</span>
                      </p>
                    </div>
                    <a
                      href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                        `Hello Student's Mess, I want to book ${vegOnly ? 'Pure Veg ' : ''}Dinner on ${activeSchedule.dayName}: ${activeSchedule.dinner.mainSabzi}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#0F2B18] border border-[#C59B27]/40 px-3.5 text-xs font-bold text-[#F3CF7A] transition-all hover:bg-[#07170C]"
                    >
                      <MessageCircle className="size-3.5 text-[#C59B27]" />
                      <span>Book Dinner</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              VIEW 2: 7-DAY MASTER MATRIX
              ===================================================================== */}
          {activeTab === 'week' && (
            <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-card">
              <div className="border-b border-[#E8E2D8] bg-[#FAF7F2] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0F2B18] flex items-center gap-2">
                    <span>Official 7-Day Rotating Matrix</span>
                    {vegOnly && (
                      <span className="rounded bg-[#0F2B18] px-2 py-0.5 text-xs font-bold text-[#F3CF7A] uppercase tracking-wider border border-[#C59B27]/30">
                        Pure Veg Filtered
                      </span>
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526055]">
                    Complete institutional rotating dining chart with guaranteed zero culinary repetition.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="self-start sm:self-auto inline-flex items-center gap-2 rounded-lg border border-[#E8E2D8] bg-white px-3.5 py-2 text-xs font-bold text-[#0F2B18] hover:bg-[#FAF7F2] hover:border-[#C59B27] shadow-2xs cursor-pointer"
                >
                  <Printer className="size-4 text-[#C59B27]" />
                  <span>Print / Save PDF</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[880px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#C59B27]/30 bg-[#0F2B18] text-white text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 w-36 text-[#F3CF7A]">Day &bull; Theme</th>
                      <th className="py-3 px-4 w-52 text-[#F3CF7A]">Morning Breakfast (7:30 &ndash; 10 AM)</th>
                      <th className="py-3 px-4 text-[#F3CF7A]">Lunch Service (11:30 AM &ndash; 3:30 PM)</th>
                      <th className="py-3 px-4 text-[#F3CF7A]">Dinner Service (7:30 PM &ndash; 10:30 PM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D8]/60 text-xs sm:text-sm">
                    {WEEKLY_MENU_SCHEDULE.map((d) => {
                      const isToday = d.dayIndex === todayIndex;

                      return (
                        <tr
                          key={d.dayId}
                          className={cn(
                            'transition-colors hover:bg-[#FAF7F2]/80',
                            isToday && 'bg-[#EEF7F1]/60'
                          )}
                        >
                          <td className="py-3 px-4 align-top">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#0F2B18]">{d.dayName}</span>
                              {isToday && (
                                <span className="rounded bg-[#C59B27] px-1.5 py-0.5 text-[0.625rem] font-bold uppercase text-[#07170C]">
                                  Today
                                </span>
                              )}
                            </div>
                            <span className="block text-[0.6875rem] text-[#768479] mt-0.5 font-medium">{d.tagline.split('•')[0].trim()}</span>
                          </td>
                          <td className="py-3 px-4 align-top">
                            <strong className="text-[#0F2B18] block font-semibold text-sm">{d.breakfast.title}</strong>
                            <span className="block text-xs text-[#526055] mt-0.5 leading-relaxed">
                              {d.breakfast.description}
                            </span>
                            <span className="mt-1 inline-block text-[0.6875rem] text-[#0F2B18] font-bold bg-[#EEF7F1] rounded px-2 py-0.5 border border-[#A3D9B8]">
                              ₹60 / plate
                            </span>
                          </td>
                          <td className="py-3 px-4 align-top">
                            <strong className="text-[#0F2B18] block font-semibold text-sm">{d.lunch.mainSabzi}</strong>
                            {!vegOnly && d.lunch.nonVegOption && (
                              <span className="mt-1 inline-block text-xs text-[#8A1C14] font-bold bg-[#FDF2F2] rounded px-2 py-0.5 border border-[#F1A5A5]">
                                Non-Veg: {d.lunch.nonVegOption}
                              </span>
                            )}
                            <span className="block text-xs text-[#768479] mt-0.5">
                              {d.lunch.dal} &bull; {d.lunch.bread} &bull; {d.lunch.rice} &bull; {d.lunch.saladAndSides}
                            </span>
                          </td>
                          <td className="py-3 px-4 align-top">
                            <strong className="text-[#0F2B18] block font-semibold text-sm">{d.dinner.mainSabzi}</strong>
                            {!vegOnly && d.dinner.nonVegOption && (
                              <span className="mt-1 inline-block text-xs text-[#8A1C14] font-bold bg-[#FDF2F2] rounded px-2 py-0.5 border border-[#F1A5A5]">
                                Non-Veg: {d.dinner.nonVegOption}
                              </span>
                            )}
                            <span className="block text-xs text-[#768479] mt-0.5">
                              {d.dinner.dal} &bull; {d.dinner.bread} &bull; {d.dinner.rice} &bull; {d.dinner.saladAndSides}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =====================================================================
              VIEW 3: THALI CATALOG & INSTITUTIONAL RATES
              ===================================================================== */}
          {activeTab === 'thalis' && (
            <div className="mt-6 sm:mt-8 space-y-10">
              {/* Vegetarian Selections */}
              <div>
                <div className="mb-5 flex items-center justify-between border-b border-[#E8E2D8] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-[#0F2B18] text-[#F3CF7A] text-xs">
                      <Leaf className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F2B18]">
                        Vegetarian Thali Formats
                      </h3>
                      <p className="text-xs text-[#768479]">
                        Prepared in exclusive vegetarian cookware with pure sunflower oil.
                      </p>
                    </div>
                  </div>
                  {vegOnly && (
                    <span className="rounded-full bg-[#EEF7F1] border border-[#A3D9B8] px-3 py-1 text-xs font-bold text-[#0F2B18]">
                      Pure Veg Mode Active
                    </span>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {MENU_DATA.veg.map((item) => (
                    <ThaliExecutiveCard key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Non-Vegetarian Selections */}
              {!vegOnly && (
                <div>
                  <div className="mb-5 flex items-center gap-3 border-b border-[#E8E2D8] pb-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-[#8A1C14] text-white text-xs">
                      <Drumstick className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F2B18]">
                        Non-Vegetarian Specialties
                      </h3>
                      <p className="text-xs text-[#768479]">
                        Traditional Ranchi-style curries simmered slowly with authentic whole spices.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    {MENU_DATA.non_veg.map((item) => (
                      <ThaliExecutiveCard key={item.name} item={item} isNonVeg />
                    ))}
                  </div>
                </div>
              )}

              {/* Monthly Subscription Tariff Box */}
              <div className="rounded-2xl bg-[#0F2B18] p-6 sm:p-8 text-white shadow-xl border border-[#C59B27]/30">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#F3CF7A]">
                      Institutional Monthly Subscriptions
                    </span>
                    <h4 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-white">
                      Direct Mess &amp; Tiffin Subscriptions
                    </h4>
                    <p className="text-xs sm:text-sm text-white/85 mt-2 leading-relaxed">
                      Reliable doorstep meal delivery across 15 areas in Ranchi for college hostels, corporate teams, and private PG residences. Includes meal pause &amp; adjustment flexibility.
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-xl bg-white/10 border border-[#C59B27]/30 p-3">
                        <strong className="block text-[#F3CF7A] font-bold uppercase text-[0.6875rem]">1 Meal Daily (Lunch OR Dinner)</strong>
                        <span className="text-lg font-bold font-display text-white mt-0.5 block">₹2,200 <span className="text-xs font-normal text-white/70">/ month</span></span>
                      </div>
                      <div className="rounded-xl bg-white/10 border border-[#C59B27]/30 p-3">
                        <strong className="block text-[#F3CF7A] font-bold uppercase text-[0.6875rem]">2 Meals Daily (Lunch AND Dinner)</strong>
                        <span className="text-lg font-bold font-display text-white mt-0.5 block">₹4,000 &ndash; ₹4,200 <span className="text-xs font-normal text-white/70">/ month</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 sm:flex-row shrink-0">
                    <ButtonLink href="/monthly-meal-plans" variant="accent" size="lg" className="font-bold">
                      Explore Monthly Plans
                    </ButtonLink>
                    <ButtonLink
                      href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
                        'Hello Student’s Mess, I want to book a trial meal.'
                      )}`}
                      variant="outline-light"
                      size="lg"
                      className="gap-2 font-bold"
                    >
                      <MessageCircle className="size-4" />
                      <span>Book Trial Meal</span>
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Operational Quality Assurance Note */}
          <aside className="mt-10 rounded-xl border border-[#E8E2D8] bg-[#FAF7F2] p-5 text-xs text-[#334139]">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 shrink-0 size-4 text-[#C59B27]" />
              <div>
                <p className="font-bold text-[#0F2B18]">
                  Kitchen Standards &amp; Quality Certification
                </p>
                <p className="mt-1 leading-relaxed text-[#526055]">
                  All meals at Student&apos;s Mess Ranchi are prepared in a dedicated commercial kitchen adhering to stringent food safety protocols. Food is cooked exclusively with 100% RO purified drinking water, Grade-A whole-wheat grains, and fresh vegetables sourced daily from local Ranchi mandis. Cookware for vegetarian and non-vegetarian food is strictly segregated.
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </div>
    </>
  );
}

function ThaliExecutiveCard({ item, isNonVeg = false }: { item: MenuItem; isNonVeg?: boolean }) {
  return (
    <Card as="article" className="flex h-full flex-col justify-between p-5 sm:p-6 border border-[#E8E2D8] bg-white shadow-card hover:border-[#C59B27]/60 transition-colors">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-wider text-[#0F2B18]">
            <span
              className={cn(
                'inline-flex size-4 items-center justify-center rounded-[3px] border p-0.5',
                isNonVeg ? 'border-[#8A1C14]' : 'border-[#0F2B18]'
              )}
            >
              <span className={cn('size-1.5 rounded-full', isNonVeg ? 'bg-[#8A1C14]' : 'bg-[#0F2B18]')} />
            </span>
            {isNonVeg ? 'Non-Vegetarian' : 'Pure Vegetarian'}
          </span>

          {item.badge && (
            <span
              className={cn(
                'text-[0.6875rem] rounded px-2 py-0.5 font-bold uppercase tracking-wider',
                isNonVeg ? 'bg-[#FDF2F2] text-[#8A1C14] border border-[#F1A5A5]' : 'bg-[#EEF7F1] text-[#0F2B18] border border-[#A3D9B8]'
              )}
            >
              {item.badge}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-2">
          <h4 className="font-display text-lg font-bold text-[#0F2B18] leading-snug">{item.name}</h4>
          <span className="font-display text-2xl font-bold text-[#0F2B18] shrink-0">
            ₹{item.price}
          </span>
        </div>
        <p className="text-xs text-[#526055] mt-2 leading-relaxed line-clamp-3">{item.description}</p>

        <div className="mt-4 border-t border-[#E8E2D8]/60 pt-3">
          <strong className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#768479] block mb-2">
            Thali Composition:
          </strong>
          <ul className="flex flex-wrap gap-1.5">
            {item.items.map((subItem) => (
              <li
                key={subItem}
                className="text-[0.6875rem] rounded border border-[#E8E2D8] bg-[#FAF7F2] px-2 py-0.5 font-semibold text-[#0F2B18]"
              >
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 border-t border-[#E8E2D8]/60 pt-4">
        <a
          href={`https://api.whatsapp.com/send?phone=916201016720&text=${encodeURIComponent(
            `Hello Student's Mess, I would like to order the ${item.name} (₹${item.price}).`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2B18] border border-[#C59B27]/40 py-2.5 text-xs font-bold text-[#F3CF7A] transition-all hover:bg-[#07170C] shadow-2xs"
        >
          <MessageCircle className="size-4 text-[#C59B27]" />
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </Card>
  );
}
