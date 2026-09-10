<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Support\ContentLoader;

class PageController extends Controller {

    // About Us Page
    public function about() {
        $this->render('pages/about', [
            'title' => "About Student's Mess Ranchi | Best Tiffin Service & Mess in Ranchi Since 1999",
            'metaDesc' => "Learn about Student's Mess — Ranchi's trusted family-run kitchen serving the best tiffin service in Ranchi, authentic mess menu, and daily lunch box service since 1999.",
            'metaKeywords' => "mess in ranchi, tiffin service in ranchi, best tiffin service ranchi, tiffin services near me, lunch box service, mess menu, lunch box meals near me, lunch box ranchi, lunchbox ranchi, ranchi mess service, mess khana",
            'pageClass' => 'about-page'
        ]);
    }

    // Monthly Meal Plans Page
    public function plans() {
        $this->render('pages/plans', [
            'title' => "Monthly Tiffin Service in Ranchi & Mess in Ranchi | Student's Mess",
            'metaDesc' => "Affordable monthly mess in Ranchi with daily lunch box service. Fresh home-style veg and non-veg tiffin service in Ranchi, mess menu rotations, and budget meal subscriptions.",
            'metaKeywords' => "tiffin service in ranchi, mess in ranchi, tiffin services near me, lunch box service, mess menu, lunch box meals near me, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service, mess khana",
            'pageClass' => 'plans-page'
        ]);
    }

    // Bulk Orders Page
    public function bulk() {
        $this->render('pages/bulk', [
            'title' => "Bulk Food Orders, Tiffin Service & Mess in Ranchi | Student's Mess",
            'metaDesc' => "Reliable bulk tiffin service in Ranchi and mess in Ranchi for offices, PGs, hostels & events. Daily lunch box service, customized mess menu, and on-time catering delivery.",
            'metaKeywords' => "lunch box service, tiffin service in ranchi, mess in ranchi, lunch service, lunch box ranchi, lunchbox ranchi, lunch box meals near me, tiffin services near me, mess menu, best tiffin service ranchi, ranchi mess service, mess khana",
            'pageClass' => 'bulk-page'
        ]);
    }

    // Takeaway Page
    public function takeaway() {
        $this->render('pages/takeaway', [
            'title' => "Takeaway Meals & Lunch Box Ranchi | Student's Mess Ranchi",
            'metaDesc' => "Order fresh takeaway lunch box ranchi meals at Student's Mess. Quick lunch box service, authentic mess in Ranchi, daily mess menu, and top tiffin service in Ranchi.",
            'metaKeywords' => "lunch box ranchi, lunchbox ranchi, lunch box meals near me, lunch box service, lunch service, tiffin services near me, mess menu, mess in ranchi, tiffin service in ranchi, best tiffin service ranchi, mess khana",
            'pageClass' => 'takeaway-page'
        ]);
    }

    // Today's Menu Page
    public function menu() {
        $menu = ContentLoader::loadJson(__DIR__ . '/../../app/Data/menu.json');

        $menuSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'Menu',
            'name' => "Student's Mess Daily Rotating Menu",
            'description' => "Daily home-style veg and non-veg student and corporate tiffin menu in Ranchi.",
            'inLanguage' => 'en',
            'hasMenuSection' => [
                [
                    '@type' => 'MenuSection',
                    'name' => 'Monthly Tiffin & Daily Meal Plans',
                    'description' => 'Freshly cooked home-style meals with roti, rice, dal, and seasonal vegetables',
                    'hasMenuItem' => [
                        [
                            '@type' => 'MenuItem',
                            'name' => 'Standard Veg Meal',
                            'description' => 'Seasonal vegetable curry, dal tadka, steamed rice, 4 tawa rotis, salad and pickle',
                            'offers' => [
                                '@type' => 'Offer',
                                'price' => '60',
                                'priceCurrency' => 'INR'
                            ]
                        ],
                        [
                            '@type' => 'MenuItem',
                            'name' => 'Special Non-Veg Meal',
                            'description' => 'Dehati chicken or egg curry served with dal, rice, rotis and fresh salad',
                            'offers' => [
                                '@type' => 'Offer',
                                'price' => '80',
                                'priceCurrency' => 'INR'
                            ]
                        ]
                    ]
                ]
            ]
        ];
        $schemaMarkup = '<script type="application/ld+json">' . json_encode($menuSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';

        $this->render('pages/menu', [
            'title' => "Today's Daily Mess Menu & Tiffin Service in Ranchi | Student's Mess",
            'metaDesc' => "Explore today's fresh mess menu at Student's Mess Ranchi. Authentic home-style veg and non-veg meals, daily lunch box service, and affordable tiffin services near me.",
            'metaKeywords' => "mess menu, tiffin services near me, mess in ranchi, tiffin service in ranchi, lunch box meals near me, lunch box service, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, mess khana, ranchi mess service",
            'menu' => $menu,
            'schemaMarkup' => $schemaMarkup,
            'pageClass' => 'menu-page'
        ]);
    }

    // Gallery Page
    public function gallery() {
        $this->render('pages/gallery', [
            'title' => "Kitchen Gallery | Student's Mess Ranchi & Lunch Box Photos",
            'metaDesc' => "Take a visual tour of Student's Mess Ranchi. View photos of our clean kitchen, packed lunch box ranchi thalis, fresh mess menu preparations, and catering events.",
            'metaKeywords' => "lunch box ranchi, lunchbox ranchi, mess in ranchi, tiffin service in ranchi, lunch box service, mess menu, tiffin services near me, lunch box meals near me, best tiffin service ranchi, ranchi mess service",
            'pageClass' => 'gallery-page'
        ]);
    }

    // Reviews Page
    public function reviews() {
        $this->render('pages/reviews', [
            'title' => "Customer Reviews | Best Tiffin Service & Mess in Ranchi | Student's Mess",
            'metaDesc' => "Read genuine customer reviews for Student's Mess Ranchi. Rated 4.8/5 on Google for best tiffin service in Ranchi, hygienic lunch box service, and delicious mess menu.",
            'metaKeywords' => "best tiffin service ranchi, tiffin services near me, mess in ranchi, tiffin service in ranchi, lunch box service, mess menu, lunch box meals near me, lunch box ranchi, lunchbox ranchi, ranchi mess service, mess khana",
            'pageClass' => 'reviews-page'
        ]);
    }

    // Contact Page
    public function contact() {
        $this->render('pages/contact', [
            'title' => "Contact Student's Mess Ranchi | Tiffin Service & Lunch Box Near Me",
            'metaDesc' => "Contact Student's Mess in Ranchi. Inquire about monthly tiffin service in Ranchi, mess menu, takeaway lunch box ranchi, or call +91 62010 16720.",
            'metaKeywords' => "tiffin services near me, mess in ranchi, tiffin service in ranchi, lunch box service, mess menu, lunch box meals near me, lunch box ranchi, lunchbox ranchi, lunch service, best tiffin service ranchi, ranchi mess service",
            'pageClass' => 'contact-page'
        ]);
    }

    // Thank You Page (Form success redirect)
    public function thankYou() {
        $this->render('pages/thank-you', [
            'title' => "Thank You | Student's Mess Ranchi",
            'metaDesc' => "Thank you for contacting us. We have received your inquiry and will get back to you shortly.",
            'robots' => 'noindex, nofollow',
            'pageClass' => 'thankyou-page'
        ]);
    }

    // Privacy Policy Page
    public function privacy() {
        $this->render('pages/privacy', [
            'title' => "Privacy Policy | Student's Mess Ranchi",
            'metaDesc' => "Read the privacy policy of Student's Mess Ranchi website.",
            'pageClass' => 'privacy-page'
        ]);
    }

    // Terms of Service Page
    public function terms() {
        $this->render('pages/terms', [
            'title' => "Terms of Service | Student's Mess Ranchi",
            'metaDesc' => "Read the terms of service of Student's Mess Ranchi website.",
            'pageClass' => 'terms-page'
        ]);
    }

    // Services Hub Page - All 13 Commercial Services
    public function servicesIndex() {
        $services = ContentLoader::loadJson(__DIR__ . '/../../app/Data/services.json');

        $this->render('pages/services-index', [
            'title' => "All Food & Catering Services in Ranchi | Student's Mess",
            'metaDesc' => "Explore all 13 meal subscription, corporate lunch, student tiffin, and institutional catering services in Ranchi by Student's Mess.",
            'metaKeywords' => "tiffin service in ranchi, mess in ranchi, corporate lunch ranchi, student tiffin ranchi, bulk catering ranchi",
            'services' => $services,
            'pageClass' => 'services-hub-page'
        ]);
    }

    // Dynamic Service Landing Page Handler
    public function service(array $params) {
        $slug = $params['slug'];
        $services = ContentLoader::loadJson(__DIR__ . '/../../app/Data/services.json');

        if (!isset($services[$slug])) {
            $this->notFound();
            return;
        }

        $service = $services[$slug];
        
        // Dynamic breadcrumb schema markup
        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                [
                    '@type' => 'ListItem',
                    'position' => 1,
                    'name' => 'Home',
                    'item' => 'https://studentsmessranchi.com/'
                ],
                [
                    '@type' => 'ListItem',
                    'position' => 2,
                    'name' => 'Services',
                    'item' => 'https://studentsmessranchi.com/services'
                ],
                [
                    '@type' => 'ListItem',
                    'position' => 3,
                    'name' => $service['title'],
                    'item' => 'https://studentsmessranchi.com/services/' . $slug
                ]
            ]
        ];

        $schemaMarkup = '<script type="application/ld+json">' . json_encode($breadcrumbSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';

        if (!empty($service['faqs'])) {
            $faqEntities = [];
            foreach ($service['faqs'] as $faq) {
                $faqEntities[] = [
                    '@type' => 'Question',
                    'name' => $faq['q'],
                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => $faq['a']
                    ]
                ];
            }
            $faqSchema = [
                '@context' => 'https://schema.org',
                '@type' => 'FAQPage',
                'mainEntity' => $faqEntities
            ];
            $schemaMarkup .= "\n    " . '<script type="application/ld+json">' . json_encode($faqSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';
        }

        $this->render('pages/service', [
            'title' => $service['title'] . " | Student's Mess Ranchi",
            'metaDesc' => $service['description'] . " Trusted tiffin service in Ranchi and mess in Ranchi since 1999.",
            'metaKeywords' => "tiffin service in ranchi, mess in ranchi, tiffin services near me, lunch box service, mess menu, lunch box meals near me, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service",
            'service' => $service,
            'schemaMarkup' => $schemaMarkup,
            'pageClass' => 'service-detail-page'
        ]);
    }

    // Dedicated Hyperlocal Location Page Handler
    public function locationPage(array $params) {
        $slug = $params['slug'];
        $viewFile = 'pages/locations/mess-and-tiffin-service-in-' . $slug . '-ranchi';
        $fullPath = __DIR__ . '/../../app/Views/' . $viewFile . '.php';

        if (!file_exists($fullPath)) {
            $this->notFound();
            return;
        }

        $areas = ContentLoader::loadJson(__DIR__ . '/../../app/Data/areas.json');
        $areaName = isset($areas[$slug]) ? $areas[$slug]['name'] : ucwords(str_replace('-', ' ', $slug));

        // Breadcrumbs Schema
        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                [
                    '@type' => 'ListItem',
                    'position' => 1,
                    'name' => 'Home',
                    'item' => 'https://studentsmessranchi.com/'
                ],
                [
                    '@type' => 'ListItem',
                    'position' => 2,
                    'name' => 'Areas We Serve',
                    'item' => 'https://studentsmessranchi.com/areas'
                ],
                [
                    '@type' => 'ListItem',
                    'position' => 3,
                    'name' => "Mess & Tiffin Service in " . $areaName . ", Ranchi",
                    'item' => 'https://studentsmessranchi.com/mess-and-tiffin-service-in-' . $slug . '-ranchi'
                ]
            ]
        ];

        // Service Schema for Area Served
        $serviceSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'Service',
            'name' => "Mess & Tiffin Service in " . $areaName . ", Ranchi",
            'serviceType' => 'Meal Delivery & Tiffin Service',
            'provider' => [
                '@type' => 'LocalBusiness',
                'name' => "Student's Mess",
                'image' => 'https://studentsmessranchi.com/logo.png',
                'telephone' => '+916201016720',
                'priceRange' => '₹₹',
                'address' => [
                    '@type' => 'PostalAddress',
                    'streetAddress' => 'Nizam Nagar, Hindpiri',
                    'addressLocality' => 'Ranchi',
                    'addressRegion' => 'Jharkhand',
                    'postalCode' => '834001',
                    'addressCountry' => 'IN'
                ]
            ],
            'areaServed' => [
                '@type' => 'AdministrativeArea',
                'name' => $areaName . ', Ranchi'
            ]
        ];

        // Localized FAQ Schema
        $faqSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => [
                [
                    '@type' => 'Question',
                    'name' => "Do you deliver tiffin and mess meals in " . $areaName . ", Ranchi?",
                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => "Yes, Student's Mess delivers fresh home-style lunch and dinner tiffins across " . $areaName . ", Ranchi. Doorstep delivery is available for groups or hostels with 5 or more subscriptions, and takeaway meal pick-up is available from our Hindpiri kitchen."
                    ]
                ],
                [
                    '@type' => 'Question',
                    'name' => "Can I pause my tiffin subscription when I travel or during exams?",
                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => "Yes. You can pause any upcoming meal by notifying us via WhatsApp 12 hours in advance (before 8:00 PM for lunch; before 8:00 AM for dinner), extending your monthly billing cycle by the paused days (up to 5 skips per month)."
                    ]
                ],
                [
                    '@type' => 'Question',
                    'name' => "What are the lunch and dinner delivery timings in " . $areaName . "?",
                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => "Our daily lunch delivery slot runs from 12:00 PM to 1:30 PM, and dinner delivery runs from 7:45 PM to 9:00 PM."
                    ]
                ]
            ]
        ];

        $schemaMarkup = '<script type="application/ld+json">' . json_encode($breadcrumbSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\n    "
            . '<script type="application/ld+json">' . json_encode($serviceSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\n    "
            . '<script type="application/ld+json">' . json_encode($faqSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';

        $this->render($viewFile, [
            'title' => "Best Mess & Tiffin Service in " . $areaName . ", Ranchi | Student's Mess",
            'metaDesc' => "Looking for the best mess in " . $areaName . " Ranchi or top tiffin services near me? Student's Mess offers daily rotating mess menu, hygienic lunch box service, and nutritious lunch box meals near me. Call +91 62010 16720.",
            'metaKeywords' => "mess in " . strtolower($areaName) . " ranchi, tiffin services near me, mess menu, mess in ranchi, tiffin service in ranchi, lunch box meals near me, lunch box service, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service, mess khana",
            'schemaMarkup' => $schemaMarkup,
            'pageClass' => 'location-detail-page'
        ]);
    }

    // Areas Hub Page - All 15 Delivery Coverage Zones
    public function areasIndex() {
        $areas = ContentLoader::loadJson(__DIR__ . '/../../app/Data/areas.json');

        $this->render('pages/areas-index', [
            'title' => "Areas We Serve Across Ranchi | Student's Mess Delivery Coverage",
            'metaDesc' => "Discover our fresh home-style meal and tiffin delivery coverage across 15 key localities in Ranchi including Lalpur, Kanke, Doranda, Morabadi, and Hindpiri.",
            'metaKeywords' => "tiffin service in ranchi areas, mess in ranchi locations, tiffin service lalpur, tiffin service kanke, tiffin service doranda",
            'areas' => $areas,
            'pageClass' => 'areas-hub-page'
        ]);
    }

    // Dynamic Hyperlocal Location Landing Page Handler (301 Redirect to SEO URL)
    public function area(array $params) {
        $slug = $params['slug'];
        header('HTTP/1.1 301 Moved Permanently');
        $this->redirect('mess-and-tiffin-service-in-' . $slug . '-ranchi');
    }

    // Blog Index
    public function blog() {
        $this->render('pages/blog-index', [
            'title' => "Our Blog | Student's Mess - Nutrition, Food Guides & Student Life",
            'metaDesc' => "Read articles on healthy home style eating, student life in Ranchi, monthly meal guides, corporate catering benefits, and regional food tips.",
            'pageClass' => 'blog-index-page'
        ]);
    }

    // Blog Post Detail
    public function blogPost(array $params) {
        $slug = $params['slug'];
        
        // Comprehensive blog post repository
        $posts = [
            '5-signs-you-need-a-monthly-tiffin-plan-in-ranchi' => [
                'title' => "5 Signs You Need a Monthly Tiffin Plan in Ranchi",
                'category' => "Monthly Meal Guides",
                'date' => "July 5, 2026",
                'isoDate' => "2026-07-05",
                'author' => "Student's Mess Kitchen Team",
                'content' => "<p>Living away from family is a major transition, especially when it comes to managing your daily nutrition. In Ranchi, thousands of student residents and young professionals face the dilemma of daily cooking or eating oily restaurant food. If you are experiencing any of the following signs, it is time to transition to a structured monthly tiffin plan.</p>
                <h2>1. You Are Constantly Skipping Breakfast or Dinner</h2>
                <p>Due to heavy schedules at coaching classes in Lalpur or late-night study sessions, cooking meals takes a back seat. Skipping meals triggers physical fatigue and decreases focus. A monthly plan guarantees hot food is ready at your door exactly when you need it.</p>
                <h2>2. Your Budget is Melting Away on Food Delivery Apps</h2>
                <p>Ordering meals via quick commerce or food aggregators daily leads to significant monthly bills. A dedicated monthly meal subscription provides a cost-effective alternative at a fraction of the cost.</p>
                <h2>3. You Are Facing Regular Digestion Issues</h2>
                <p>Commercially prepared restaurant foods are packed with spices, artificial colors, and reheated oils. Eating this daily ruins gut health. A home-style tiffin uses minimal oil and fresh ingredients, keeping your system light and energized.</p>"
            ],
            'home-style-food-vs-restaurant-food-ranchi' => [
                'title' => "Home Style Food vs Restaurant Food: What's the Real Difference?",
                'category' => "Healthy Meals",
                'date' => "July 1, 2026",
                'isoDate' => "2026-07-01",
                'author' => "Student's Mess Kitchen Team",
                'content' => "<p>When you eat at a restaurant or order fast food in Ranchi, the food is engineered for extreme taste, shelf-life, and immediate flavor gratification. But when you need fuel for everyday studying or demanding office work, restaurant meals quickly take a heavy toll on your body.</p>
                <h2>1. Reheated Commercial Oils vs. Fresh Daily Cooking</h2>
                <p>Commercial kitchens often reuse cooking oil multiple times to reduce operating overhead. Reheating oil creates free radicals, alters lipid profiles, and leads to persistent acidity and lethargy. In home-style mess cooking, fresh sunflower oil is used in measured quantities each morning and evening.</p>
                <h2>2. Heavy Cream & Food Colors vs. Whole Indian Spices</h2>
                <p>Restaurant curries rely heavily on processed gravies, synthetic food colorings, and excessive cream to make gravies thick. In contrast, authentic home-style Indian cooking utilizes natural digestive spices—cumin (jeera), turmeric (haldi), coriander (dhania), and ginger—that actively support digestion rather than slowing it down.</p>
                <h2>3. Sustainable Daily Energy</h2>
                <p>Students attending intensive coaching near Circular Road and professionals in offices need steady glucose release without post-meal brain fog. Freshly baked tawa rotis, steamed rice, light yellow dal, and seasonal green vegetables provide clean, sustainable nutrition.</p>"
            ],
            'how-bulk-meal-catering-works-for-offices-in-ranchi' => [
                'title' => "How Bulk Meal Catering Works for Offices in Ranchi",
                'category' => "Catering",
                'date' => "June 28, 2026",
                'isoDate' => "2026-06-28",
                'author' => "Student's Mess Operations Team",
                'content' => "<p>Managing lunch for an office team of 10 to 100+ employees in Ranchi often becomes an administrative headache. When employees order individually, delivery riders trickle in at different times, work gets disrupted, and staff nutrition is inconsistent. Here is how organized bulk meal catering streamlines the entire process.</p>
                <h2>1. Synchronized Delivery Before the Lunch Hour</h2>
                <p>Corporate meal deliveries operate on strict schedules. Hot meals are packed in temperature-controlled insulated carriers and delivered directly to your company reception or pantry 15 minutes before the scheduled lunch break.</p>
                <h2>2. Leak-Proof, Hygienically Compartmentalized Packaging</h2>
                <p>Each employee receives a tamper-evident, compartmentalized food tray. Dal, dry sabzi, gravies, rotis, and rice remain separated, keeping meals appetizing, mess-free, and effortless to distribute.</p>
                <h2>3. Transparent HR Invoicing & Flexible Staff Counts</h2>
                <p>Corporate accounts benefit from itemized monthly invoicing, GST compliance, and attendance-based scaling. If team headcount changes, a simple 24-hour notification adjusts the daily meal count.</p>"
            ],
            'what-makes-a-meal-healthy-home-cooking-perspective' => [
                'title' => "What Makes a Meal \"Healthy\" — A Home Cook's Perspective",
                'category' => "Nutrition",
                'date' => "June 22, 2026",
                'isoDate' => "2026-06-22",
                'author' => "Master Cook, Student's Mess",
                'content' => "<p>With so many modern diet fads and conflicting nutritional advice, it is easy to forget that the healthiest way to eat has been practiced in Indian homes for centuries. True healthy food is not about calorie counting or exotic ingredients; it is about wholesome simplicity, local sourcing, and balanced proportions.</p>
                <h2>1. Balanced Macronutrients in Every Thali</h2>
                <p>A traditional thali naturally balances complex carbohydrates (freshly made wheat rotis and rice), plant protein (lentil dal and seasonal legumes), and vital micronutrients (fresh local leafy greens and vegetables). This balance ensures complete amino acid profiles and steady metabolic energy.</p>
                <h2>2. Seasonal and Regional Ingredients</h2>
                <p>Vegetables that grow in season have higher nutrient density and require less artificial preservation. We source seasonal produce from local farmers around Ranchi, ensuring farm-fresh taste and high nutritional integrity.</p>
                <h2>3. Mindful Salt, Sugar, and Spice Control</h2>
                <p>Home-style cooking never masks ingredient quality behind overwhelming chili powder or excessive salt. Mild seasoning allows natural flavors to shine through, keeping blood pressure and digestion balanced over months and years of daily dining.</p>"
            ]
        ];

        if (!isset($posts[$slug])) {
            $this->notFound();
            return;
        }

        $post = $posts[$slug];

        // Breadcrumbs Schema
        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                [
                    '@type' => 'ListItem',
                    'position' => 1,
                    'name' => 'Home',
                    'item' => 'https://studentsmessranchi.com/'
                ],
                [
                    '@type' => 'ListItem',
                    'position' => 2,
                    'name' => 'Blog',
                    'item' => 'https://studentsmessranchi.com/blog'
                ],
                [
                    '@type' => 'ListItem',
                    'position' => 3,
                    'name' => $post['title'],
                    'item' => 'https://studentsmessranchi.com/blog/' . $slug
                ]
            ]
        ];

        // BlogPosting Schema
        $blogPostingSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BlogPosting',
            'headline' => $post['title'],
            'description' => strip_tags(substr($post['content'], 0, 160)),
            'image' => 'https://studentsmessranchi.com/logo.png',
            'author' => [
                '@type' => 'Organization',
                'name' => $post['author']
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => "Student's Mess",
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => 'https://studentsmessranchi.com/logo.png'
                ]
            ],
            'datePublished' => $post['isoDate'] ?? '2026-07-01',
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => 'https://studentsmessranchi.com/blog/' . $slug
            ]
        ];

        $schemaMarkup = '<script type="application/ld+json">' . json_encode($breadcrumbSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\n    "
            . '<script type="application/ld+json">' . json_encode($blogPostingSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';

        $this->render('pages/blog-post', [
            'title' => $post['title'] . " | Student's Mess Blog",
            'metaDesc' => strip_tags(substr($post['content'], 0, 160)),
            'post' => $post,
            'schemaMarkup' => $schemaMarkup,
            'pageClass' => 'blog-post-page'
        ]);
    }

    public function contentPage(array $params) {
        $slug = $params['slug'] ?? '';
        $pages = ContentLoader::loadJson(__DIR__ . '/../../app/Data/pages.json');

        if (!isset($pages[$slug])) {
            $this->notFound();
            return;
        }

        $page = $pages[$slug];
        $this->render('pages/content-page', [
            'title' => ($page['title'] ?? 'Page') . ' | Student\'s Mess',
            'metaDesc' => $page['metaDesc'] ?? '',
            'robots' => 'noindex, nofollow',
            'page' => $page,
            'pageClass' => 'content-page'
        ]);
    }

    // 404 Not Found Page
    public function notFound() {
        $this->render('pages/404', [
            'title' => "404 Page Not Found | Student's Mess Ranchi",
            'metaDesc' => "The page you are looking for does not exist on Student's Mess Ranchi website.",
            'robots' => 'noindex, nofollow',
            'pageClass' => 'notfound-page'
        ]);
    }
}
