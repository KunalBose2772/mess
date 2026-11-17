export const SITE_CONFIG = {
  name: "Student's Mess",
  siteName: "Student's Mess Ranchi",
  baseUrl: 'https://studentsmessranchi.in',
  phoneDisplay: '+91 62010 16720',
  phoneHref: 'tel:+916201016720',
  telephoneSchema: '+916201016720',
  whatsappNumber: '916201016720',
  whatsappBase: 'https://wa.me/916201016720',
  whatsappDefaultUrl:
    "https://wa.me/916201016720?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20meal%20plans",
  email: 'info@studentsmessranchi.com',
  address: 'Nizam Nagar, Hindpiri, Ranchi, Jharkhand 834001',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Student%27s+Mess+Nizam+Nagar+Hindpiri+Ranchi',
  defaultTitle: "Home Style Meals in Ranchi Since 1999 | Student's Mess",
  defaultDescription:
    "Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi.",
  defaultKeywords:
    'tiffin services near me, mess menu, mess in ranchi, tiffin service in ranchi, lunch box meals near me, lunch box service, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service, mess khana',
  logoUrl: 'https://studentsmessranchi.in/images/logo.png',
};

export function whatsappUrl(message: string): string {
  return `${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'LocalBusiness'],
  name: "Student's Mess",
  image: SITE_CONFIG.logoUrl,
  url: `${SITE_CONFIG.baseUrl}/`,
  telephone: SITE_CONFIG.telephoneSchema,
  priceRange: '₹₹',
  servesCuisine: 'Indian, Home Style',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nizam Nagar, Hindpiri',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    postalCode: '834001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '23.3683',
    longitude: '85.3255',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '11:00',
    closes: '22:00',
  },
};

