import menuJson from './menu.json';
import { DayMenuSchedule, MenuData } from '@/types';

export const MENU_DATA = menuJson as MenuData;

export const WEEKLY_MENU_SCHEDULE: DayMenuSchedule[] = [
  {
    dayId: 'mon',
    dayIndex: 1,
    dayName: 'Monday',
    shortName: 'Mon',
    tagline: 'Fresh Week Energy • Paratha & R.D.S.B',
    isPureVegDay: true,
    breakfast: {
      title: 'Stuffed Tawa Paratha with Fresh Curd',
      description: 'Golden-crisped aloo/methi stuffed whole-wheat parathas served with thick fresh curd and sweet-sour homemade mango pickle.',
      sides: 'Fresh Curd & Mango Pickle',
    },
    lunch: {
      mainSabzi: 'Seasonal Vegetable Sabzi (R.D.S.B)',
      dal: 'Traditional Arhar Dal Tadka (Garlic & Jeera)',
      bread: '4 Fresh Phulka Chapatis',
      rice: 'Steamed Long-Grain Basmati Rice',
      saladAndSides: 'Crispy Aloo Bhujia, Sliced Cucumber, Lemon Pickle & Papad',
      special: 'Traditional Ranchi R.D.S.B (Rice, Dal, Sabji, Bhujia)',
    },
    dinner: {
      mainSabzi: 'Homestyle Mix Vegetable Sabzi',
      dal: 'Yellow Dal Fry with Desi Ghee',
      bread: '4 Hot Whole-Wheat Tawa Rotis',
      rice: 'Steamed Basmati Rice',
      saladAndSides: 'Fresh Green Salad & Mint Chutney',
      special: 'Light & Comforting Weekday Dinner',
    },
  },
  {
    dayId: 'tue',
    dayIndex: 2,
    dayName: 'Tuesday',
    shortName: 'Tue',
    tagline: 'South Indian Breakfast & Pure Veg R.D.S.B',
    isPureVegDay: true,
    breakfast: {
      title: 'South Indian Idli Sambar & Coconut Chutney',
      description: 'Piping-hot soft steamed rice idlis served with vegetable-rich dal sambar and freshly ground coconut chutney.',
      sides: 'Vegetable Sambar & Coconut Chutney',
    },
    lunch: {
      mainSabzi: 'Seasonal Subzi Fry (R.D.S.B)',
      dal: 'Chana Dal Fry with Hing & Cumin Tempering',
      bread: '4 Butter Tawa Rotis',
      rice: 'Steamed Fragrant Basmati Rice',
      saladAndSides: 'Crispy Bhujia, Boondi Raita, Roasted Papad, Lemon Salad',
      special: 'Authentic R.D.S.B Lunch with Raita',
    },
    dinner: {
      mainSabzi: 'Kadhai Bhindi / Aloo Shimla Mirch',
      dal: 'Light Moong Dal Tadka (Digestive & Clean)',
      bread: '4 Soft Whole-Wheat Chapatis',
      rice: 'Steamed Rice',
      saladAndSides: 'Sliced Tomato-Cucumber Salad & Green Chili Pickle',
    },
  },
  {
    dayId: 'wed',
    dayIndex: 3,
    dayName: 'Wednesday',
    shortName: 'Wed',
    tagline: 'Kachori Breakfast & Fresh Fish Curry Day',
    breakfast: {
      title: 'Khasta Kachori with Tangy Aloo Masala Gravy',
      description: 'Flaky spiced dal kachoris accompanied by slow-simmered tangy aloo-tamatar curry and fresh green chilies.',
      sides: 'Spiced Aloo Gravy & Green Chilies',
    },
    lunch: {
      mainSabzi: 'Matar Paneer Masala (Pure Veg Specialty)',
      nonVegOption: 'Ranchi Rohu Fish Curry (2 pcs in mustard-tomato gravy)',
      dal: 'Yellow Moong-Masoor Dal Fry',
      bread: '4 Hot Tawa Rotis',
      rice: 'Steamed Basmati Rice',
      saladAndSides: 'Crispy Bhujia, Sliced Lemon Onion Salad, Green Chilies & Papad',
      isSpecialDay: true,
      special: 'Choice of Fresh Rohu Fish Curry or Matar Paneer Masala',
    },
    dinner: {
      mainSabzi: 'Homestyle Aloo Gobi Matar',
      dal: 'Panchmel Mix Dal Tadka',
      bread: '4 Soft Chapatis',
      rice: 'Steamed Rice',
      saladAndSides: 'Fresh Kachumber Salad & Homemade Pickle',
    },
  },
  {
    dayId: 'thu',
    dayIndex: 4,
    dayName: 'Thursday',
    shortName: 'Thu',
    tagline: 'Punjabi Chole Bhature & Desi R.D.S.B',
    isPureVegDay: true,
    breakfast: {
      title: 'Punjabi Chole Bhature & Pickled Onions',
      description: 'Crisp, golden fluffy bhatures paired with rich slow-cooked Kabuli chana masala, pickled onions, and green chutney.',
      sides: 'Pickled Onion Rings & Green Chutney',
    },
    lunch: {
      mainSabzi: 'Seasonal Vegetable Sabzi (R.D.S.B)',
      dal: 'Light Toor Dal with Desi Ghee',
      bread: '4 Whole-Wheat Chapatis',
      rice: 'Hot Steamed Rice',
      saladAndSides: 'Crispy Bhujia, Fresh Curd, Sliced Onions, Mango Pickle',
      special: 'Homestyle R.D.S.B with Fresh Curd',
    },
    dinner: {
      mainSabzi: 'Aloo Parwal Rasa / Lauki Chana Dal',
      dal: 'Dal Tadka',
      bread: '4 Soft Phulkas',
      rice: 'Steamed Rice',
      saladAndSides: 'Green Salad & Mint Chutney',
    },
  },
  {
    dayId: 'fri',
    dayIndex: 5,
    dayName: 'Friday',
    shortName: 'Fri',
    tagline: 'Egg Curry Lunch & Hyderabadi Chicken Biryani Night',
    breakfast: {
      title: 'Maharashtra Poha & Vegetable Upma',
      description: 'Light roasted flattened rice with peanuts, curry leaves, mustard seeds, and lemon, alongside fluffy semolina upma.',
      sides: 'Roasted Peanuts, Lemon Wedges & Sev',
    },
    lunch: {
      mainSabzi: 'Jharkhand Heritage Dal Bhaat Chokha (Veg Specialty)',
      nonVegOption: 'Homestyle Spiced Egg Curry (2 pan-fried eggs in onion-tomato gravy)',
      dal: 'Traditional Arhar Dal with Ghee Tadka',
      bread: '4 Phulka Rotis',
      rice: 'Steamed Basmati Rice',
      saladAndSides: 'Crispy Bhujia, Roasted Papad, Mint Chutney & Salad',
      isSpecialDay: true,
      special: 'Egg Curry & Rice OR Authentic Dal Bhaat Chokha',
    },
    dinner: {
      mainSabzi: 'Royal Shahi Veg Dum Biryani (Paneer & Vegetables in dum)',
      nonVegOption: 'Hyderabadi Chicken Dum Biryani (Fragrant basmati rice with tender chicken pieces)',
      dal: 'Spiced Mirchi Salan Gravy',
      bread: '2 Butter Rotis (Optional with Biryani)',
      rice: 'Fragrant Dum-Cooked Basmati Rice',
      saladAndSides: 'Chilled Cucumber-Mint Raita & Sliced Onion Salad',
      isSpecialDay: true,
      special: 'Grand Friday Night Dum Biryani Feast (Chicken or Veg)',
    },
  },
  {
    dayId: 'sat',
    dayIndex: 6,
    dayName: 'Saturday',
    shortName: 'Sat',
    tagline: 'Jharkhand Famous Dhuska & Classic R.D.S.B',
    isPureVegDay: true,
    breakfast: {
      title: 'Jharkhand Famous Dhuska with Spicy Black Chana Ghugni',
      description: 'Iconic tribal street delicacy of Ranchi: deep-fried seasoned rice & chana dal cakes served piping hot with spicy desi kala chana ghugni.',
      sides: 'Desi Kala Chana Ghugni & Green Chutney',
    },
    lunch: {
      mainSabzi: 'Seasonal Vegetable Sabzi (R.D.S.B)',
      dal: 'Yellow Dal Fry with Jeera Tadka',
      bread: '4 Whole-Wheat Chapatis',
      rice: 'Fragrant Steamed Rice',
      saladAndSides: 'Crispy Bhujia, Masala Onion Salad, Green Chutney & Pickle',
      special: 'Comforting Weekend R.D.S.B',
    },
    dinner: {
      mainSabzi: 'Aloo Gajar Matar Dry Sabzi / Seasonal Curry',
      dal: 'Masoor Dal Tadka OR Ghee Khichdi option',
      bread: '4 Soft Rotis',
      rice: 'Steamed Rice',
      saladAndSides: 'Roasted Papad & Tomato Chutney',
    },
  },
  {
    dayId: 'sun',
    dayIndex: 0,
    dayName: 'Sunday',
    shortName: 'Sun',
    tagline: 'Puri Sabji Breakfast & Dehati Chicken Curry Dinner',
    breakfast: {
      title: 'Garma-Garam Puri Sabji with Halwa / Sweet',
      description: 'Fluffy golden fried whole-wheat puris served with mildly spiced rasedar aloo-tamatar sabji and sweet sooji halwa.',
      sides: 'Rasedar Aloo Sabji & Sweet Halwa',
    },
    lunch: {
      mainSabzi: 'Seasonal Vegetable Sabzi (R.D.S.B Special)',
      dal: 'Dal Tadka with Pure Desi Ghee',
      bread: '4 Fresh Tawa Phulkas',
      rice: 'Aromatic Jeera Pulao / Steamed Rice',
      saladAndSides: 'Crispy Bhujia, Sliced Lemon Onion Salad, Roasted Papad & Pickle',
      isSpecialDay: true,
      special: 'Sunday R.D.S.B Lunch with Jeera Pulao',
    },
    dinner: {
      mainSabzi: 'Shahi Paneer Butter Masala with Gulab Jamun (Veg Specialty)',
      nonVegOption: 'Authentic Ranchi Dehati Chicken Curry (3 pcs slow-cooked in local spices)',
      dal: 'Yellow Dal Fry',
      bread: '4 Hot Butter Rotis',
      rice: 'Steamed Basmati Rice',
      saladAndSides: 'Sliced Lemon Onion Salad, Mint Chutney & Sweet Gulab Jamun',
      isSpecialDay: true,
      special: 'Sunday Grand Non-Veg Feast (Chicken Curry or Shahi Paneer) with Sweet',
    },
  },
];

export function getTodaySchedule(): DayMenuSchedule {
  const currentDayIndex = new Date().getDay();
  return (
    WEEKLY_MENU_SCHEDULE.find((d) => d.dayIndex === currentDayIndex) ?? WEEKLY_MENU_SCHEDULE[0]
  );
}

export function formatDayMenuShareText(schedule: DayMenuSchedule): string {
  const lines: string[] = [
    `*Student's Mess Ranchi — Menu for ${schedule.dayName}*`,
    `_${schedule.tagline}_`,
    '',
    `*BREAKFAST (7:30 AM – 10:00 AM)*`,
    `• Morning Special: ${schedule.breakfast.title}`,
    `• Description: ${schedule.breakfast.description}`,
    schedule.breakfast.sides ? `• Accompaniments: ${schedule.breakfast.sides}` : '',
    '',
    `*LUNCH (11:30 AM – 3:30 PM)*`,
    `• Main: ${schedule.lunch.mainSabzi}`,
    schedule.lunch.nonVegOption ? `• Non-Veg: ${schedule.lunch.nonVegOption}` : '',
    `• Dal: ${schedule.lunch.dal}`,
    `• Breads: ${schedule.lunch.bread}`,
    `• Rice: ${schedule.lunch.rice}`,
    `• Sides: ${schedule.lunch.saladAndSides}`,
    schedule.lunch.special ? `• Special: ${schedule.lunch.special}` : '',
    '',
    `*DINNER (7:30 PM – 10:30 PM)*`,
    `• Main: ${schedule.dinner.mainSabzi}`,
    schedule.dinner.nonVegOption ? `• Non-Veg: ${schedule.dinner.nonVegOption}` : '',
    `• Dal: ${schedule.dinner.dal}`,
    `• Breads: ${schedule.dinner.bread}`,
    `• Rice: ${schedule.dinner.rice}`,
    `• Sides: ${schedule.dinner.saladAndSides}`,
    schedule.dinner.special ? `• Special: ${schedule.dinner.special}` : '',
    '',
    `Student's Mess, Ranchi (Serving Since 1999)`,
    `Order / Book Tiffin: +91 6201016720`,
    `View Live Menu: https://studentsmess.com/todays-menu`,
  ].filter(Boolean);

  return lines.join('\n');
}

export function formatWeeklyMenuShareText(): string {
  const lines: string[] = [
    `*Student's Mess Ranchi — Weekly Mess Menu*`,
    `_Hygienic Home-Style Veg & Non-Veg Meals (Serving Since 1999)_`,
    `_Includes 4 Non-Veg Meals/Week: Chicken Curry, Chicken Biryani, Fish Curry & Egg Curry_`,
    '',
  ];

  for (const day of WEEKLY_MENU_SCHEDULE) {
    lines.push(`*${day.dayName.toUpperCase()}* (${day.tagline})`);
    lines.push(`Breakfast: ${day.breakfast.title}`);
    lines.push(`Lunch: ${day.lunch.mainSabzi} + ${day.lunch.dal} + ${day.lunch.bread} + Rice`);
    if (day.lunch.nonVegOption) lines.push(`Non-Veg Lunch: ${day.lunch.nonVegOption}`);
    lines.push(`Dinner: ${day.dinner.mainSabzi} + ${day.dinner.dal} + ${day.dinner.bread} + Rice`);
    if (day.dinner.nonVegOption) lines.push(`Non-Veg Dinner: ${day.dinner.nonVegOption}`);
    lines.push('');
  }

  lines.push(`Student's Mess Ranchi`);
  lines.push(`Order / Subscription Inquiries: +91 6201016720`);
  lines.push(`Website: https://studentsmess.com/todays-menu`);

  return lines.join('\n');
}
