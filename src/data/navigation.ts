export interface NavLinkItem {
  label: string;
  href: string;
}

export const MEAL_PLANS_DROPDOWN: NavLinkItem[] = [
  { label: 'Monthly Meal Plans', href: '/monthly-meal-plans' },
  { label: 'Bulk & Catering Orders', href: '/bulk-orders' },
  { label: 'Daily Takeaway', href: '/takeaway' },
];

export const SERVICES_DROPDOWN: NavLinkItem[] = [
  { label: 'Student Tiffin', href: '/services/student-tiffin-ranchi' },
  { label: 'Office Lunch', href: '/services/office-lunch-ranchi' },
  { label: 'Corporate Catering', href: '/services/corporate-lunch-ranchi' },
  { label: 'PG Food Supply', href: '/services/pg-food-supply-ranchi' },
  { label: 'Hostel Food Supply', href: '/services/hostel-food-supply-ranchi' },
  { label: 'Event Catering', href: '/services/event-catering-ranchi' },
];

export const AREAS_DROPDOWN: NavLinkItem[] = [
  { label: 'Lalpur', href: '/mess-and-tiffin-service-in-lalpur-ranchi' },
  { label: 'Kanke', href: '/mess-and-tiffin-service-in-kanke-ranchi' },
  { label: 'Morabadi', href: '/mess-and-tiffin-service-in-morabadi-ranchi' },
  { label: 'Hindpiri', href: '/mess-and-tiffin-service-in-hindpiri-ranchi' },
  { label: 'Doranda', href: '/mess-and-tiffin-service-in-doranda-ranchi' },
  { label: 'Kokar', href: '/mess-and-tiffin-service-in-kokar-ranchi' },
];

export const ABOUT_DROPDOWN: NavLinkItem[] = [
  { label: 'Our Story & Heritage', href: '/about-us' },
  { label: 'Customer Reviews', href: '/reviews' },
  { label: 'Kitchen & Meal Gallery', href: '/gallery' },
  { label: 'Blog & Food Guides', href: '/blog' },
];

export const FOOTER_QUICK_LINKS: NavLinkItem[] = [
  { label: 'About Our Story', href: '/about-us' },
  { label: 'All Catering Services', href: '/services' },
  { label: 'Monthly Plans', href: '/monthly-meal-plans' },
  { label: 'Bulk Catering', href: '/bulk-orders' },
  { label: 'Takeaway Options', href: '/takeaway' },
  { label: "Today's Menu", href: '/todays-menu' },
  { label: 'Customer Reviews', href: '/reviews' },
];

export const FOOTER_AREAS_LINKS: NavLinkItem[] = [
  { label: 'Lalpur', href: '/mess-and-tiffin-service-in-lalpur-ranchi' },
  { label: 'Kanke', href: '/mess-and-tiffin-service-in-kanke-ranchi' },
  { label: 'Morabadi', href: '/mess-and-tiffin-service-in-morabadi-ranchi' },
  { label: 'Hindpiri', href: '/mess-and-tiffin-service-in-hindpiri-ranchi' },
  { label: 'Doranda', href: '/mess-and-tiffin-service-in-doranda-ranchi' },
  { label: 'Kokar', href: '/mess-and-tiffin-service-in-kokar-ranchi' },
  { label: 'Bariatu', href: '/mess-and-tiffin-service-in-bariatu-ranchi' },
];

export interface MainNavItem extends NavLinkItem {
  /** Sub-links shown in a dropdown (desktop) or accordion (mobile). */
  children?: NavLinkItem[];
  /** Label for the "view all" link at the bottom of the dropdown. */
  viewAllLabel?: string;
}

export const MAIN_NAV: MainNavItem[] = [
  { label: "Today's Menu", href: '/todays-menu' },
  {
    label: 'Meal Plans',
    href: '/monthly-meal-plans',
    children: MEAL_PLANS_DROPDOWN,
    viewAllLabel: 'Explore All Plans',
  },
  {
    label: 'Services',
    href: '/services',
    children: SERVICES_DROPDOWN,
    viewAllLabel: 'View All 13 Services',
  },
  {
    label: 'Areas We Serve',
    href: '/areas',
    children: AREAS_DROPDOWN,
    viewAllLabel: 'View All 15 Areas',
  },
  {
    label: 'About',
    href: '/about-us',
    children: ABOUT_DROPDOWN,
    viewAllLabel: 'About Student’s Mess',
  },
  { label: 'Contact', href: '/contact' },
];
