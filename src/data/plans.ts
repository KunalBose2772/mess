export interface PlanDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeywords: string;
  badge: string;
  price: string;
  perMealPrice: string;
  mealsPerDay: string;
  image: string;
  imageAlt: string;
  tagline: string;
  overview: string;
  suitableFor: string[];
  features: string[];
  weeklyHighlights: Array<{ day: string; lunch: string; dinner: string }>;
  faqs: Array<{ question: string; answer: string }>;
  waMessage: string;
}

export const DEDICATED_PLANS: Record<string, PlanDetail> = {
  'veg-monthly-meal-plan': {
    slug: 'veg-monthly-meal-plan',
    title: 'Standard Vegetarian Monthly Meal Plan',
    metaTitle: 'Standard Veg Monthly Meal Plan Ranchi | ₹4,000/mo Tiffin Service',
    metaDescription:
      "Subscribe to Ranchi's best vegetarian monthly tiffin service. 2 meals daily (Lunch + Dinner) with daily rotating sabzis, Shahi Paneer, Veg Dum Biryani, and Dal Bhaat Chokha at ₹4,000/mo.",
    targetKeywords:
      'veg tiffin service ranchi, veg mess in ranchi, monthly veg meal plan ranchi, shahi paneer tiffin, veg tiffin near me, lunchbox ranchi',
    badge: 'Most Popular Veg',
    price: '₹4,000',
    perMealPrice: '₹66',
    mealsPerDay: '2 Meals Daily (Lunch & Dinner)',
    image: '/images/veg_plan.png',
    imageAlt: 'Vegetarian Monthly Meal Plan Thali Ranchi',
    tagline: 'Wholesome, home-style vegetarian dining with rich weekend specialties.',
    overview:
      "Our Standard Vegetarian Monthly Plan is engineered for students, competitive exam aspirants, and working professionals in Ranchi who crave nutritious, homestyle vegetarian food. Featuring 2 meals every single day (hot midday lunch and comforting evening dinner), we use 100% RO-purified water, fresh daily-market sabzis, and zero artificial soda or palm oil. On non-veg rotation days, veg subscribers receive royal alternatives including Shahi Paneer, Veg Dum Biryani, and Matar Paneer.",
    suitableFor: [
      'Competitive exam aspirants in Lalpur, Circular Road, and Hari Om Tower',
      'College students living in PGs and private hostels across Ranchi',
      'Working professionals seeking healthy daily lunch and dinner without cooking hassle',
      'Pure vegetarians who demand strict separate utensils and hygienic prep',
    ],
    features: [
      '2 Freshly Cooked Meals Daily (Midday Lunch + Evening Dinner)',
      'Just ₹66 per meal — unmatched nutritional value in Ranchi',
      'Traditional Ranchi R.D.S.B (Rice, Dal, Sabzi, Bhujia) lunch rotation',
      'Rich Veg Substitutions: Shahi Paneer, Royal Veg Biryani, Matar Paneer, Dal Bhaat Chokha',
      '100% RO purified drinking and cooking water used exclusively',
      'Zero added food colors, artificial MSG, or reusable frying oils',
      'Self-pickup at Nizam Nagar, Hindpiri; Doorstep delivery for groups of 5+',
    ],
    weeklyHighlights: [
      {
        day: 'Monday',
        lunch: 'Seasonal Sabzi Fry + Arhar Dal Tadka + 4 Phulkas + Steamed Basmati Rice + Aloo Bhujia',
        dinner: 'Homestyle Mix Veg Sabzi + Yellow Dal Fry + 4 Tawa Rotis + Rice + Salad',
      },
      {
        day: 'Tuesday',
        lunch: 'Seasonal Subzi (R.D.S.B) + Chana Dal Fry + 4 Phulkas + Rice + Bhujia + Papad',
        dinner: 'Aloo Gobi Matar + Arhar Dal Tadka + 4 Rotis + Salad & Mint Chutney',
      },
      {
        day: 'Wednesday',
        lunch: 'Shahi Paneer Butter Masala + Jeera Rice + 4 Phulkas + Dal Fry + Papad',
        dinner: 'Seasonal Sabzi + Yellow Dal Tadka + 4 Fresh Tawa Rotis + Chutney',
      },
      {
        day: 'Thursday',
        lunch: 'Green Peas Sabzi (R.D.S.B) + Masoor Dal Tadka + 4 Rotis + Rice + Bhujia',
        dinner: 'Aloo Shimla Mirch + Moong Dal Tadka + 4 Rotis + Green Salad',
      },
      {
        day: 'Friday',
        lunch: 'Jharkhand Heritage Dal Bhaat Chokha with Desi Ghee Tadka + Crispy Bhujia',
        dinner: 'Royal Veg Dum Biryani + Fresh Vegetable Raita + Salad + Chutney',
      },
      {
        day: 'Saturday',
        lunch: 'Weekend R.D.S.B + Dal Fry + Rice + 4 Phulkas + Crispy Bhujia + Papad',
        dinner: 'Aloo Gajar Matar + Dal Tadka + 4 Chapatis + Chutney',
      },
      {
        day: 'Sunday',
        lunch: 'Special Mixed Veg (R.D.S.B) + Jeera Pulao + Dal Tadka + Bhujia + Salad',
        dinner: 'Matar Paneer Masala + 4 Butter Rotis + Steamed Basmati Rice + Sweet',
      },
    ],
    faqs: [
      {
        question: 'What is the price of the Veg Monthly Meal Plan in Ranchi?',
        answer:
          'The Standard Veg Plan is ₹4,000 per month for 2 meals daily (60 meals a month), working out to approximately ₹66 per meal.',
      },
      {
        question: 'What do vegetarians get on non-veg days?',
        answer:
          'On non-veg days (Wed, Fri, Sun), veg subscribers receive premium vegetarian specialties such as Shahi Paneer, Royal Veg Dum Biryani, and Matar Paneer.',
      },
      {
        question: 'Can I pause my meal plan if I travel home?',
        answer:
          'Yes. Notify our kitchen 24 hours in advance via WhatsApp. Your subscription validity will be paused and extended accordingly.',
      },
      {
        question: 'Is doorstep delivery included?',
        answer:
          'Single subscriptions are self-pickup from our central kitchen in Nizam Nagar, Hindpiri. For clusters or groups of 5+ subscribers in the same building/hostel, we provide direct doorstep delivery.',
      },
    ],
    waMessage:
      "Hi Student's Mess, I want to subscribe to the Standard Veg Monthly Meal Plan (₹4,000/month for 2 Meals Daily).",
  },

  'non-veg-monthly-meal-plan': {
    slug: 'non-veg-monthly-meal-plan',
    title: 'Standard Non-Vegetarian Monthly Meal Plan',
    metaTitle: 'Standard Non-Veg Monthly Meal Plan Ranchi | ₹4,200/mo (4x Non-Veg/Wk)',
    metaDescription:
      "High-protein non-veg mess in Ranchi. 2 meals daily with 4 Non-Veg feasts every week (Chicken, Fish & Eggs) plus daily RDSB veg meals at ₹4,200/month.",
    targetKeywords:
      'non veg tiffin service ranchi, chicken biryani tiffin ranchi, fish curry mess ranchi, non veg mess ranchi, 4x non veg meal plan, student non veg tiffin',
    badge: 'Most Loved High-Protein',
    price: '₹4,200',
    perMealPrice: '₹70',
    mealsPerDay: '2 Meals Daily (Lunch & Dinner)',
    image: '/images/nonveg_plan.png',
    imageAlt: 'Non-Vegetarian Monthly Meal Plan Thali Ranchi',
    tagline: 'High-protein home-style meals featuring 4 curated non-veg feasts weekly.',
    overview:
      "Our Standard Non-Vegetarian Plan is Ranchi's favorite high-protein meal subscription for gym-goers, hostellers, and corporate executives. Priced at just ₹4,200 per month for 2 meals daily (~₹70 per meal), it includes four substantial non-vegetarian meals every week: Wednesday Lunch (Rohu Fish Curry), Friday Lunch (Egg Curry), Friday Dinner (Hyderabadi Chicken Dum Biryani), and Sunday Dinner (Dehati Chicken Curry). The remaining meals feature our nourishing, traditional Ranchi RDSB vegetable thalis.",
    suitableFor: [
      'Fitness enthusiasts and gym-goers needing consistent dietary protein',
      'Hostel students missing rich Sunday chicken curry and Friday biryani',
      'Corporate employees seeking fulfilling lunch and dinner without hotel expenses',
      'Fish, egg, and chicken lovers who demand clean, hygienic home kitchen preparation',
    ],
    features: [
      '2 Freshly Prepared Meals Daily (Lunch & Dinner — 60 meals/mo)',
      '4 Non-Veg Feasts Every Week: Wednesday Fish, Friday Egg, Friday Biryani, Sunday Chicken',
      'Fresh Rohu river fish & tender chicken sourced daily from certified local vendors',
      'Hygienic prep: 100% separate cutting boards, woks, and cooking stations',
      'Daily balanced RDSB thalis on vegetarian meal shifts',
      'Priced at just ₹70 per meal for authentic non-veg feasts',
      'Self-pickup or doorstep delivery for groups of 5+ subscribers',
    ],
    weeklyHighlights: [
      {
        day: 'Monday',
        lunch: 'Seasonal Sabzi Fry + Arhar Dal Tadka + 4 Phulkas + Steamed Basmati Rice + Aloo Bhujia',
        dinner: 'Homestyle Mix Veg Sabzi + Yellow Dal Fry + 4 Tawa Rotis + Rice + Salad',
      },
      {
        day: 'Tuesday',
        lunch: 'Seasonal Subzi (R.D.S.B) + Chana Dal Fry + 4 Phulkas + Rice + Bhujia + Papad',
        dinner: 'Aloo Gobi Matar + Arhar Dal Tadka + 4 Rotis + Salad & Mint Chutney',
      },
      {
        day: 'Wednesday',
        lunch: 'Special Rohu Fish Curry (2 pcs) in Mustard Gravy + Steamed Basmati Rice + Salad',
        dinner: 'Seasonal Sabzi + Yellow Dal Tadka + 4 Fresh Tawa Rotis + Chutney',
      },
      {
        day: 'Thursday',
        lunch: 'Green Peas Sabzi (R.D.S.B) + Masoor Dal Tadka + 4 Rotis + Rice + Bhujia',
        dinner: 'Aloo Shimla Mirch + Moong Dal Tadka + 4 Rotis + Green Salad',
      },
      {
        day: 'Friday',
        lunch: 'Homestyle Egg Curry (2 eggs) in Onion-Tomato Gravy + Steamed Rice + Salad',
        dinner: 'Hyderabadi Chicken Dum Biryani (tender chicken pcs) + Fresh Raita + Salad',
      },
      {
        day: 'Saturday',
        lunch: 'Weekend R.D.S.B + Dal Fry + Rice + 4 Phulkas + Crispy Bhujia + Papad',
        dinner: 'Aloo Gajar Matar + Dal Tadka + 4 Chapatis + Chutney',
      },
      {
        day: 'Sunday',
        lunch: 'Special Mixed Veg (R.D.S.B) + Jeera Pulao + Dal Tadka + Bhujia + Salad',
        dinner: 'Ranchi Dehati Chicken Curry (3 pcs) + 4 Butter Rotis + Steamed Rice + Sweet',
      },
    ],
    faqs: [
      {
        question: 'How many non-veg meals are included per week?',
        answer:
          '4 substantial non-veg meals per week: Wednesday Lunch (Fish), Friday Lunch (Egg), Friday Dinner (Chicken Biryani), and Sunday Dinner (Chicken Curry).',
      },
      {
        question: 'What is the monthly subscription price for the Non-Veg Plan?',
        answer:
          'The Non-Veg Plan is ₹4,200 per month for 2 meals daily (60 meals), averaging only ₹70 per meal.',
      },
      {
        question: 'How is hygiene maintained between veg and non-veg food?',
        answer:
          'We maintain strictly segregated prep counters, knives, woks, and serving ladles. Our kitchen follows rigorous commercial food hygiene standards.',
      },
      {
        question: 'Can I swap a non-veg meal if I observe a religious fast?',
        answer:
          'Yes. Just inform our kitchen by 10:00 AM on WhatsApp, and we will serve the premium vegetarian replacement for that meal.',
      },
    ],
    waMessage:
      "Hi Student's Mess, I want to subscribe to the Standard Non-Veg Monthly Meal Plan (₹4,200/month with 4x Non-Veg weekly).",
  },

  'single-meal-plan': {
    slug: 'single-meal-plan',
    title: 'Single Meal Daily Subscription (Lunch or Dinner)',
    metaTitle: '1 Meal Daily Plan Ranchi | ₹2,200/mo Lunch Box or Dinner Tiffin',
    metaDescription:
      "Affordable 1-meal daily tiffin service in Ranchi. Choose Lunch-only or Dinner-only daily mess plan starting at ₹2,200/month for students and office goers.",
    targetKeywords:
      'single meal tiffin ranchi, lunch only tiffin ranchi, dinner only mess ranchi, 1 meal daily subscription ranchi, office lunch box ranchi',
    badge: 'Budget Friendly',
    price: '₹2,200',
    perMealPrice: '₹73',
    mealsPerDay: '1 Meal Daily (Choice of Lunch OR Dinner)',
    image: '/images/veg_plan.png',
    imageAlt: 'Single Meal Daily Subscription Ranchi',
    tagline: 'Flexible, affordable single-meal subscription tailored for busy routines.',
    overview:
      "Not everyone needs both lunch and dinner from a mess. Many PG accommodations in Lalpur and Morabadi provide night dinner but no midday lunch; many working professionals cook breakfast and dinner at home but need hot, nutritious lunch delivered at work. Our Single Meal Daily Plan provides 30 hot, freshly cooked meals every month at ₹2,200 for Veg and ₹2,400 for Non-Veg.",
    suitableFor: [
      'Corporate staff and shop owners needing dependable midday lunch delivery',
      'PG residents whose hostel only provides dinner or self-cooking options',
      'Students attending day-long coaching classes at Lalpur and Circular Road',
      'Budget-conscious individuals wanting nutritious meals at just ₹73/day',
    ],
    features: [
      '30 Fresh Meals a Month (Choose 12:00 PM Lunch OR 7:30 PM Dinner)',
      '₹2,200/month for Pure Veg; ₹2,400/month for Non-Veg rotation',
      'Includes signature R.D.S.B or Roti Sabji with dal, rice, salad, and sides',
      'Pause and resume capability with 24 hours advance WhatsApp notice',
      'Self-pickup from central kitchen or group delivery for 5+ colleagues',
    ],
    weeklyHighlights: [
      {
        day: 'Monday',
        lunch: 'Seasonal Sabzi (R.D.S.B) + Arhar Dal Tadka + 4 Phulkas + Rice + Bhujia',
        dinner: 'Homestyle Mix Veg + Yellow Dal Fry + 4 Rotis + Steamed Rice + Salad',
      },
      {
        day: 'Wednesday',
        lunch: 'Rohu Fish Curry (Non-Veg) or Shahi Paneer (Veg) + Steamed Rice + Phulkas',
        dinner: 'Seasonal Sabzi + Yellow Dal Tadka + 4 Tawa Rotis + Chutney',
      },
      {
        day: 'Friday',
        lunch: 'Egg Curry (Non-Veg) or Dal Bhaat Chokha (Veg) + Rice + Salad + Papad',
        dinner: 'Chicken Dum Biryani (Non-Veg) or Royal Veg Biryani (Veg) + Raita',
      },
      {
        day: 'Sunday',
        lunch: 'Special Mixed Veg + Dal Tadka + Jeera Rice + Crispy Bhujia',
        dinner: 'Dehati Chicken Curry (Non-Veg) or Matar Paneer (Veg) + Butter Rotis',
      },
    ],
    faqs: [
      {
        question: 'Can I alternate between Lunch and Dinner on different days?',
        answer:
          'Generally, subscriptions are locked to either Lunch or Dinner for kitchen planning. However, you can switch shifts with 1 day prior notice on WhatsApp.',
      },
      {
        question: 'What is the price of the 1-Meal plan?',
        answer:
          '₹2,200 per month for Pure Vegetarian and ₹2,400 per month for Non-Vegetarian (including weekly fish, egg, and chicken meals).',
      },
    ],
    waMessage:
      "Hi Student's Mess, I want to subscribe to the Single Meal Daily Plan (₹2,200 - ₹2,400/month for 1 Meal Daily).",
  },

  'full-board-meal-plan': {
    slug: 'full-board-meal-plan',
    title: 'Full Board 3-Meal Daily Subscription',
    metaTitle: 'Full Board 3-Meal Subscription Ranchi | ₹5,800 - ₹6,000/mo Mess Plan',
    metaDescription:
      "Complete 3-meal mess subscription in Ranchi. Morning Breakfast (7:30-10 AM) + Midday Lunch (RDSB) + Evening Dinner at ₹5,800 - ₹6,000/month.",
    targetKeywords:
      '3 meals daily mess ranchi, full board tiffin service ranchi, breakfast lunch dinner mess ranchi, hostel meal subscription ranchi',
    badge: 'All-Inclusive Boarding',
    price: '₹5,800 - ₹6,000',
    perMealPrice: '₹64',
    mealsPerDay: '3 Meals Daily (Breakfast, Lunch & Dinner)',
    image: '/images/veg_plan.png',
    imageAlt: 'Full Board 3-Meal Subscription Ranchi',
    tagline: 'Zero cooking, zero grocery shopping. 100% complete daily nutrition.',
    overview:
      "The Full Board 3-Meal Subscription is our most comprehensive residential dining package. Designed specifically for serious medical and engineering aspirants (IIT-JEE, NEET, UPSC), competitive examinees, and busy bachelors, this plan completely frees you from food worries. Every day includes fresh morning breakfast (Puri Sabji, Paratha, Idli Sambar, Dhuska), authentic midday RDSB lunch, and warm evening dinner.",
    suitableFor: [
      'Full-time exam aspirants needing 100% focus on studies without cooking/ordering distractions',
      'Hostellers in accommodations that do not operate an in-house kitchen',
      'Outstation bachelors relocating to Ranchi for internships or new jobs',
      'Parents looking for trustworthy, hygienic 3-times daily nourishment for their children',
    ],
    features: [
      '90 Total Meals a Month (30 Breakfasts + 30 Lunches + 30 Dinners)',
      '₹5,800/month Veg; ₹6,000/month Non-Veg (includes 4x weekly non-veg feasts)',
      'Morning Breakfast: 7:30 AM – 10:00 AM (daily rotating hot specialties)',
      'Midday Lunch: 12:00 PM – 3:30 PM (nutritious RDSB thalis)',
      'Evening Dinner: 7:30 PM – 10:30 PM (light, digestible homestyle feasts)',
      'Unbeatable economics: Just ₹64 per meal course across the month',
    ],
    weeklyHighlights: [
      {
        day: 'Monday',
        lunch: 'Stuffed Paratha Breakfast + RDSB Lunch + Roti Sabji Dal Dinner',
        dinner: 'Complete 3-course homestyle nourishment',
      },
      {
        day: 'Wednesday',
        lunch: 'Kachori Breakfast + Rohu Fish Curry / Shahi Paneer Lunch + Roti Sabji Dinner',
        dinner: 'High-protein midday feast with light evening dinner',
      },
      {
        day: 'Friday',
        lunch: 'Poha/Upma Breakfast + Egg Curry / Dal Bhaat Lunch + Chicken Dum Biryani Dinner',
        dinner: 'Double feast day featuring lunch and dinner specials',
      },
      {
        day: 'Sunday',
        lunch: 'Puri Sabji Breakfast + Special RDSB Lunch + Dehati Chicken / Paneer Dinner',
        dinner: 'Weekend feast featuring Ranchi heritage preparations',
      },
    ],
    faqs: [
      {
        question: 'What are the breakfast timings for the Full Board plan?',
        answer: 'Breakfast is freshly cooked and served hot between 7:30 AM and 10:00 AM every morning.',
      },
      {
        question: 'What is the full board monthly cost?',
        answer:
          '₹5,800/month for Pure Veg and ₹6,000/month for Non-Veg (90 meals total across 30 days).',
      },
    ],
    waMessage:
      "Hi Student's Mess, I want to subscribe to the Full Board 3-Meal Daily Plan (₹5,800 - ₹6,000/month for Breakfast, Lunch & Dinner).",
  },

  'corporate-group-meal-plan': {
    slug: 'corporate-group-meal-plan',
    title: 'Corporate & Group Bulk Tiffin Subscription',
    metaTitle: 'Corporate & Group Meal Plan Ranchi | Bulk Tiffin Delivery for PGs & Offices',
    metaDescription:
      'Doorstep group tiffin delivery across Ranchi for corporate offices, coaching hostels, PGs, and teams of 5+ subscribers with customized timing and billing.',
    targetKeywords:
      'corporate meal plan ranchi, group tiffin delivery ranchi, pg food supply subscription, hostel mess contract ranchi, office tiffin delivery',
    badge: 'Doorstep Delivery for 5+',
    price: 'Custom / Tiered',
    perMealPrice: 'From ₹60',
    mealsPerDay: 'Customized (1, 2 or 3 Meals Daily)',
    image: '/images/subscriptions_bg.png',
    imageAlt: 'Corporate Group Meal Subscription Ranchi',
    tagline: 'Reliable, on-time doorstep catering for offices, coaching hostels, and teams.',
    overview:
      "While single individual subscriptions are self-pickup from our central kitchen, any cluster, flat, PG, coaching institute, or corporate office with 5 or more subscribers qualifies for our dedicated Doorstep Delivery Service. We assign dedicated insulated delivery crates to ensure your meals arrive piping hot at your designated meal hour across Lalpur, Circular Road, Doranda, Hinoo, Morabadi, and Harmu.",
    suitableFor: [
      'Corporate offices and startup teams wanting daily team lunches',
      'Clusters of 5+ roommates or floor-mates in PG accommodations',
      'Coaching institutes and private hostels outsourcing daily student meals',
      'Hospitality, retail staff, and bank branches across Ranchi',
    ],
    features: [
      'Guaranteed On-Time Doorstep Delivery for 5+ subscribers',
      'Heavy-duty insulated food containers keeping food hot up to 2 hours',
      'Customized delivery windows tailored to office lunch hours (1:00 PM, 1:30 PM, etc.)',
      'Monthly GST-compliant corporate invoices with flexible bank transfer/UPI payment',
      'Dedicated kitchen account manager for menu adjustments and guest additions',
      'Tiered volume discounts for 20+, 50+, and 100+ daily plates',
    ],
    weeklyHighlights: [
      {
        day: 'Monday – Saturday',
        lunch: 'Hot corporate lunch boxes delivered in thermal crates with customized roti counts',
        dinner: 'Warm evening dinner delivery scheduled precisely for shift timings',
      },
      {
        day: 'Sunday',
        lunch: 'Weekend special catering or packed meals for teams working on project deadlines',
        dinner: 'Ranchi Dehati Chicken Curry or Shahi Paneer celebration thalis',
      },
    ],
    faqs: [
      {
        question: 'What is the minimum group size for free doorstep delivery?',
        answer: 'Doorstep delivery is provided for groups of 5 or more subscribers at the same delivery address.',
      },
      {
        question: 'Do you provide corporate GST invoices?',
        answer: 'Yes, we provide monthly GST invoices and accept official bank transfers / NEFT / UPI.',
      },
    ],
    waMessage:
      "Hi Student's Mess, I want to inquire about Corporate / Group Bulk Tiffin Subscriptions for our team in Ranchi.",
  },
};

export const PLANS_SLUGS = Object.keys(DEDICATED_PLANS);

export function getPlanBySlug(slug: string): PlanDetail | undefined {
  return DEDICATED_PLANS[slug];
}

