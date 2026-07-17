<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Support\ContentLoader;

class PageController extends Controller {

    // About Us Page
    public function about() {
        $this->render('pages/about', [
            'title' => "About Us | Student's Mess – Home Style Meals in Ranchi Since 1999",
            'metaDesc' => "Learn the story of Student's Mess — a family-run home style meal business serving Ranchi for over 26 years.",
            'pageClass' => 'about-page'
        ]);
    }

    // Monthly Meal Plans Page
    public function plans() {
        $this->render('pages/plans', [
            'title' => "Monthly Tiffin & Meal Plans in Ranchi | Student's Mess",
            'metaDesc' => "Affordable monthly veg & non-veg meal plans in Ranchi. Home style lunch and dinner delivered fresh, every day. Perfect for students & professionals.",
            'pageClass' => 'plans-page'
        ]);
    }

    // Bulk Orders Page
    public function bulk() {
        $this->render('pages/bulk', [
            'title' => "Bulk Food Orders & Catering in Ranchi | Offices, PGs, Hostels, Events",
            'metaDesc' => "Reliable bulk meal supply in Ranchi for offices, PGs, hostels, hospitals, construction sites & events. Fresh, hygienic, on-time — since 1999.",
            'pageClass' => 'bulk-page'
        ]);
    }

    // Takeaway Page
    public function takeaway() {
        $this->render('pages/takeaway', [
            'title' => "Takeaway Home Style Meals in Ranchi | Student's Mess",
            'metaDesc' => "Order fresh home style veg & non-veg takeaway meals in Ranchi. Quick, hygienic, and ready when you are.",
            'pageClass' => 'takeaway-page'
        ]);
    }

    // Today's Menu Page
    public function menu() {
        $menu = ContentLoader::loadJson(__DIR__ . '/../../app/Data/menu.json');

        $this->render('pages/menu', [
            'title' => "Today's Menu | Student's Mess Ranchi",
            'metaDesc' => "Check today's fresh home style veg & non-veg menu at Student's Mess, Ranchi. Sourced locally, cooked fresh daily.",
            'menu' => $menu,
            'pageClass' => 'menu-page'
        ]);
    }

    // Gallery Page
    public function gallery() {
        $this->render('pages/gallery', [
            'title' => "Gallery | Student's Mess – Home Style Meals in Ranchi",
            'metaDesc' => "A glimpse into our kitchen. View photos of our clean preparation, fresh ingredients, packed thalis, and bulk corporate catering events.",
            'pageClass' => 'gallery-page'
        ]);
    }

    // Reviews Page
    public function reviews() {
        $this->render('pages/reviews', [
            'title' => "Customer Reviews | Student's Mess Ranchi",
            'metaDesc' => "See what students, working professionals, and businesses say about our home-style food quality, pricing, and catering services.",
            'pageClass' => 'reviews-page'
        ]);
    }

    // Contact Page
    public function contact() {
        $this->render('pages/contact', [
            'title' => "Contact Us | Student's Mess Ranchi",
            'metaDesc' => "Get in touch with Student's Mess. Find our phone number, WhatsApp chat link, physical address, business hours, and contact form.",
            'pageClass' => 'contact-page'
        ]);
    }

    // Thank You Page (Form success redirect)
    public function thankYou() {
        $this->render('pages/thank-you', [
            'title' => "Thank You | Student's Mess Ranchi",
            'metaDesc' => "Thank you for contacting us. We have received your inquiry and will get back to you shortly.",
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

    // Dynamic Service Landing Page Handler
    public function service($params) {
        $slug = $params['slug'];
        $services = ContentLoader::loadJson(__DIR__ . '/../../app/Data/services.json');

        if (!isset($services[$slug])) {
            $this->notFound();
            return;
        }

        $service = $services[$slug];
        
        // Dynamic breadcrumb schema markup
        $schemaMarkup = '
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "' . ($_SERVER['REQUEST_SCHEME'] ?? 'http') . '://' . $_SERVER['HTTP_HOST'] . '/"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "' . ($_SERVER['REQUEST_SCHEME'] ?? 'http') . '://' . $_SERVER['HTTP_HOST'] . '/services"
          },{
            "@type": "ListItem",
            "position": 3,
            "name": "' . htmlspecialchars($service['title']) . '",
            "item": "' . ($_SERVER['REQUEST_SCHEME'] ?? 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] . '"
          }]
        }
        </script>';

        $this->render('pages/service', [
            'title' => $service['title'] . " | Student's Mess",
            'metaDesc' => $service['description'] . " Trusted food service in Ranchi since 1999.",
            'service' => $service,
            'schemaMarkup' => $schemaMarkup,
            'pageClass' => 'service-detail-page'
        ]);
    }

    // Dynamic Hyperlocal Location Landing Page Handler
    public function area($params) {
        $slug = $params['slug'];
        $areas = ContentLoader::loadJson(__DIR__ . '/../../app/Data/areas.json');

        if (!isset($areas[$slug])) {
            $this->notFound();
            return;
        }

        $area = $areas[$slug];

        // Fetch surrounding area data for cross-linking spokes
        $adjacentAreas = [];
        foreach ($area['adjacent'] as $adjSlug) {
            if (isset($areas[$adjSlug])) {
                $adjacentAreas[] = $areas[$adjSlug];
            }
        }

        // Hyperlocal LocalBusiness Schema with areaServed property
        $schemaMarkup = '
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Student\'s Mess - ' . htmlspecialchars($area['name']) . '",
          "image": "' . ($_SERVER['REQUEST_SCHEME'] ?? 'http') . '://' . $_SERVER['HTTP_HOST'] . '/logo.png",
          "telephone": "+919934123456",
          "priceRange": "$$",
          "servesCuisine": "Indian, Home Style",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "' . htmlspecialchars($area['name']) . '",
            "addressRegion": "Ranchi, Jharkhand",
            "addressCountry": "IN"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "' . htmlspecialchars($area['name']) . '"
          }
        }
        </script>';

        $this->render('pages/area', [
            'title' => "Home Style Meals & Tiffin in " . $area['name'] . ", Ranchi | Student's Mess",
            'metaDesc' => $area['intro'] . " Fresh home style veg & non-veg meal plans, monthly tiffin, bulk food catering. Call or WhatsApp now.",
            'area' => $area,
            'adjacentAreas' => $adjacentAreas,
            'schemaMarkup' => $schemaMarkup,
            'pageClass' => 'location-detail-page'
        ]);
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
    public function blogPost($params) {
        $slug = $params['slug'];
        
        // Define hardcoded mock blog post data for seeding
        $posts = [
            '5-signs-you-need-a-monthly-tiffin-plan-in-ranchi' => [
                'title' => "5 Signs You Need a Monthly Tiffin Plan in Ranchi",
                'category' => "Monthly Meal Guides",
                'date' => "July 5, 2026",
                'author' => "Student's Mess Kitchen Team",
                'content' => "<p>Living away from family is a major transition, especially when it comes to managing your daily nutrition. In Ranchi, thousands of student residents and young professionals face the dilemma of daily cooking or eating oily restaurant food. If you are experiencing any of the following signs, it is time to transition to a structured monthly tiffin plan.</p>
                <h2>1. You Are Constantly Skipping Breakfast or Dinner</h2>
                <p>Due to heavy schedules at coaching classes in Lalpur or late-night study sessions, cooking meals takes a back seat. Skipping meals triggers physical fatigue and decreases focus. A monthly plan guarantees hot food is ready at your door exactly when you need it.</p>
                <h2>2. Your Budget is Melting Away on Food Delivery Apps</h2>
                <p>Ordering meals via quick commerce or food aggregators daily leads to significant monthly bills. A dedicated monthly meal subscription provides a cost-effective alternative at a fraction of the cost.</p>
                <h2>3. You Are Facing Regular Digestion Issues</h2>
                <p>Commercially prepared restaurant foods are packed with spices, artificial colors, and reheated oils. Eating this daily ruins gut health. A home-style tiffin uses minimal oil and fresh ingredients, keeping your system light and energized.</p>"
            ]
        ];

        if (!isset($posts[$slug])) {
            $this->notFound();
            return;
        }

        $post = $posts[$slug];

        $this->render('pages/blog-post', [
            'title' => $post['title'] . " | Student's Mess Blog",
            'metaDesc' => strip_tags(substr($post['content'], 0, 160)),
            'post' => $post,
            'pageClass' => 'blog-post-page'
        ]);
    }

    public function contentPage($params) {
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
            'page' => $page,
            'pageClass' => 'content-page'
        ]);
    }

    // 404 Not Found Page
    public function notFound() {
        $this->render('pages/404', [
            'title' => "404 Page Not Found | Student's Mess Ranchi",
            'metaDesc' => "The page you are looking for does not exist on Student's Mess Ranchi website.",
            'pageClass' => 'notfound-page'
        ]);
    }
}
