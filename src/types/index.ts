export interface FaqItem {
  q: string;
  a: string;
  iconKey?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  angle: string;
  cta: string;
  icon: string;
  description: string;
  includes: string[];
  faqs: FaqItem[];
}

export interface AreaItem {
  slug: string;
  name: string;
  landmarks: string;
  focus: string;
  intro: string;
  adjacent: string[];
  faq_q: string;
  faq_a: string;
}

export interface LocationDetail {
  slug: string;
  eyebrow: string;
  heroSubtitle: string;
  contentEyebrow: string;
  overviewTitle: string;
  leadParagraph: string;
  preFocusParas: string[];
  focusHeading: string;
  focusParas: string[];
  subSectionTitle: string;
  postFocusParas: string[];
  sidebarTitle: string;
  sidebarItems: string[];
  waHref: string;
  waLabel: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  adjSubtitle: string;
  adjacent: Array<{ slug: string; name: string }>;
  ctaTitleHtml: string;
  ctaSubtitle: string;
}

export interface DayBreakfast {
  title: string;
  description: string;
  sides?: string;
}

export interface DayMeal {
  mainSabzi: string;
  dal: string;
  bread: string;
  rice: string;
  saladAndSides: string;
  special?: string;
  isSpecialDay?: boolean;
  nonVegOption?: string;
}

export interface DayMenuSchedule {
  dayId: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
  dayIndex: number; // 0 for Sun, 1 for Mon, etc.
  dayName: string;
  shortName: string;
  tagline: string;
  isPureVegDay?: boolean;
  breakfast: DayBreakfast;
  lunch: DayMeal;
  dinner: DayMeal;
}

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  items: string[];
  badge?: string;
}

export interface MenuData {
  last_updated: string;
  veg: MenuItem[];
  non_veg: MenuItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  tagLabel?: string;
  date: string;
  isoDate: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string;
}

export interface ContentPageEntry {
  title: string;
  metaDesc: string;
  heroTitle?: string;
  heroSubtitle?: string;
  body: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  time?: string;
  quote: string;
  avatarLetter?: string;
  avatarColor?: 'blue' | 'green' | 'orange' | 'purple' | 'red';
  halfStar?: boolean;
}

