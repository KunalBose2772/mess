import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '5-signs-you-need-a-monthly-tiffin-plan-in-ranchi',
    title: '5 Signs You Need a Monthly Tiffin Plan in Ranchi',
    category: 'Monthly Meal Guides',
    tagLabel: 'Student Food',
    date: 'July 5, 2026',
    isoDate: '2026-07-05',
    readTime: '4 min read',
    author: "Student's Mess Kitchen Team",
    excerpt:
      'Living away from home for IAS coaching or university studies? Skip skipped breakfasts, digestion issues, and expensive delivery bills. Here are five signs that it is time to subscribe to home-style daily tiffin plans.',
    content: `<p>Living away from family is a major transition, especially when it comes to managing your daily nutrition. In Ranchi, thousands of student residents and young professionals face the dilemma of daily cooking or eating oily restaurant food. If you are experiencing any of the following signs, it is time to transition to a structured monthly tiffin plan.</p>
      <h2>1. You Are Constantly Skipping Breakfast or Dinner</h2>
      <p>Due to heavy schedules at coaching classes in Lalpur or late-night study sessions, cooking meals takes a back seat. Skipping meals triggers physical fatigue and decreases focus. A monthly plan guarantees hot food is ready at your door exactly when you need it.</p>
      <h2>2. Your Budget is Melting Away on Food Delivery Apps</h2>
      <p>Ordering meals via quick commerce or food aggregators daily leads to significant monthly bills. A dedicated monthly meal subscription provides a cost-effective alternative at a fraction of the cost.</p>
      <h2>3. You Are Facing Regular Digestion Issues</h2>
      <p>Commercially prepared restaurant foods are packed with spices, artificial colors, and reheated oils. Eating this daily ruins gut health. A home-style tiffin uses minimal oil and fresh ingredients, keeping your system light and energized.</p>`,
  },
  {
    slug: 'home-style-food-vs-restaurant-food-ranchi',
    title: "Home Style Food vs Restaurant Food: What's the Real Difference?",
    category: 'Healthy Meals',
    tagLabel: 'Healthy Meals',
    date: 'July 1, 2026',
    isoDate: '2026-07-01',
    readTime: '5 min read',
    author: "Student's Mess Kitchen Team",
    excerpt:
      'An investigation on spices, reheated oils, and how commercial preparation affects digestions and performance.',
    content: `<p>When you eat at a restaurant or order fast food in Ranchi, the food is engineered for extreme taste, shelf-life, and immediate flavor gratification. But when you need fuel for everyday studying or demanding office work, restaurant meals quickly take a heavy toll on your body.</p>
      <h2>1. Reheated Commercial Oils vs. Fresh Daily Cooking</h2>
      <p>Commercial kitchens often reuse cooking oil multiple times to reduce operating overhead. Reheating oil creates free radicals, alters lipid profiles, and leads to persistent acidity and lethargy. In home-style mess cooking, fresh sunflower oil is used in measured quantities each morning and evening.</p>
      <h2>2. Heavy Cream &amp; Food Colors vs. Whole Indian Spices</h2>
      <p>Restaurant curries rely heavily on processed gravies, synthetic food colorings, and excessive cream to make gravies thick. In contrast, authentic home-style Indian cooking utilizes natural digestive spices—cumin (jeera), turmeric (haldi), coriander (dhania), and ginger—that actively support digestion rather than slowing it down.</p>
      <h2>3. Sustainable Daily Energy</h2>
      <p>Students attending intensive coaching near Circular Road and professionals in offices need steady glucose release without post-meal brain fog. Freshly baked tawa rotis, steamed rice, light yellow dal, and seasonal green vegetables provide clean, sustainable nutrition.</p>`,
  },
  {
    slug: 'how-bulk-meal-catering-works-for-offices-in-ranchi',
    title: 'How Bulk Meal Catering Works for Offices in Ranchi',
    category: 'Catering',
    tagLabel: 'Catering',
    date: 'June 28, 2026',
    isoDate: '2026-06-28',
    readTime: '6 min read',
    author: "Student's Mess Operations Team",
    excerpt:
      'How we scale production to feed corporate teams hygienically, safely, and on time every day.',
    content: `<p>Managing lunch for an office team of 10 to 100+ employees in Ranchi often becomes an administrative headache. When employees order individually, delivery riders trickle in at different times, work gets disrupted, and staff nutrition is inconsistent. Here is how organized bulk meal catering streamlines the entire process.</p>
      <h2>1. Synchronized Delivery Before the Lunch Hour</h2>
      <p>Corporate meal deliveries operate on strict schedules. Hot meals are packed in temperature-controlled insulated carriers and delivered directly to your company reception or pantry 15 minutes before the scheduled lunch break.</p>
      <h2>2. Leak-Proof, Hygienically Compartmentalized Packaging</h2>
      <p>Each employee receives a tamper-evident, compartmentalized food tray. Dal, dry sabzi, gravies, rotis, and rice remain separated, keeping meals appetizing, mess-free, and effortless to distribute.</p>
      <h2>3. Transparent HR Invoicing &amp; Flexible Staff Counts</h2>
      <p>Corporate accounts benefit from itemized monthly invoicing, GST compliance, and attendance-based scaling. If team headcount changes, a simple 24-hour notification adjusts the daily meal count.</p>`,
  },
  {
    slug: 'what-makes-a-meal-healthy-home-cooking-perspective',
    title: 'What Makes a Meal "Healthy" — A Home Cook\'s Perspective',
    category: 'Nutrition',
    tagLabel: 'Nutrition',
    date: 'June 22, 2026',
    isoDate: '2026-06-22',
    readTime: '4 min read',
    author: "Master Cook, Student's Mess",
    excerpt:
      'Our founding chef shares recipe guides on utilizing local grains, herbs, and traditional spices for gut-health.',
    content: `<p>With so many modern diet fads and conflicting nutritional advice, it is easy to forget that the healthiest way to eat has been practiced in Indian homes for centuries. True healthy food is not about calorie counting or exotic ingredients; it is about wholesome simplicity, local sourcing, and balanced proportions.</p>
      <h2>1. Balanced Macronutrients in Every Thali</h2>
      <p>A traditional thali naturally balances complex carbohydrates (freshly made wheat rotis and rice), plant protein (lentil dal and seasonal legumes), and vital micronutrients (fresh local leafy greens and vegetables). This balance ensures complete amino acid profiles and steady metabolic energy.</p>
      <h2>2. Seasonal and Regional Ingredients</h2>
      <p>Vegetables that grow in season have higher nutrient density and require less artificial preservation. We source seasonal produce from local farmers around Ranchi, ensuring farm-fresh taste and high nutritional integrity.</p>
      <h2>3. Mindful Salt, Sugar, and Spice Control</h2>
      <p>Home-style cooking never masks ingredient quality behind overwhelming chili powder or excessive salt. Mild seasoning allows natural flavors to shine through, keeping blood pressure and digestion balanced over months and years of daily dining.</p>`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

