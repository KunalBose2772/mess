<?php
/**
 * Global Layout
 * @var string $baseUrl
 * @var string $content
 * @var string|null $title
 * @var string|null $metaDesc
 * @var string|null $schemaMarkup
 * @var string|null $pageClass
 * @var string|null $canonicalUrl
 * @var string|null $fullLogoUrl
 * @var string|null $robots
 * @var string|null $metaKeywords
 */
$baseUrl = $baseUrl ?? '';
$content = $content ?? '';
$canonicalUrl = $canonicalUrl ?? 'https://studentsmessranchi.com/';
$fullLogoUrl = $fullLogoUrl ?? 'https://studentsmessranchi.com/assets/images/logo.png';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title><?php echo isset($title) ? htmlspecialchars($title) : "Home Style Meals in Ranchi Since 1999 | Student's Mess"; ?></title>
    <meta name="description" content="<?php echo isset($metaDesc) ? htmlspecialchars($metaDesc) : "Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi."; ?>">
    <meta name="keywords" content="<?php echo isset($metaKeywords) ? htmlspecialchars($metaKeywords) : 'tiffin services near me, mess menu, mess in ranchi, tiffin service in ranchi, lunch box meals near me, lunch box service, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service, mess khana'; ?>">
    <?php if (isset($robots)): ?>
    <meta name="robots" content="<?php echo htmlspecialchars($robots); ?>">
    <?php else: ?>
    <meta name="robots" content="index, follow">
    <?php endif; ?>
    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl); ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo isset($title) ? htmlspecialchars($title) : "Home Style Meals in Ranchi Since 1999 | Student's Mess"; ?>">
    <meta property="og:description" content="<?php echo isset($metaDesc) ? htmlspecialchars($metaDesc) : "Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi."; ?>">
    <meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl); ?>">
    <meta property="og:site_name" content="Student's Mess Ranchi">
    <meta property="og:image" content="<?php echo htmlspecialchars($fullLogoUrl); ?>">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_IN">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo isset($title) ? htmlspecialchars($title) : "Home Style Meals in Ranchi Since 1999 | Student's Mess"; ?>">
    <meta name="twitter:description" content="<?php echo isset($metaDesc) ? htmlspecialchars($metaDesc) : "Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi."; ?>">
    <meta name="twitter:image" content="<?php echo htmlspecialchars($fullLogoUrl); ?>">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="<?php echo $baseUrl; ?>assets/images/favicon.png">
    
    <!-- Google Fonts: Outfit (modern sans-serif) and Cormorant Garamond (elegant serif) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Manrope:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Base Stylesheets -->
    <link rel="stylesheet" href="<?php echo $baseUrl; ?>assets/css/variables.css?v=1.0.1">
    <link rel="stylesheet" href="<?php echo $baseUrl; ?>assets/css/main.css?v=1.3.8">
    
    <!-- Site-wide local business schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": ["Restaurant", "LocalBusiness"],
      "name": "Student's Mess",
      "image": "<?php echo htmlspecialchars($fullLogoUrl); ?>",
      "url": "https://studentsmessranchi.com/",
      "telephone": "+916201016720",
      "priceRange": "₹₹",
      "servesCuisine": "Indian, Home Style",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nizam Nagar, Hindpiri",
        "addressLocality": "Ranchi",
        "addressRegion": "Jharkhand",
        "postalCode": "834001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.3683",
        "longitude": "85.3255"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "22:00"
      }
    }
    </script>
    
    <?php if (isset($schemaMarkup)): ?>
        <?php echo $schemaMarkup; ?>
    <?php endif; ?>
</head>
<body class="<?php echo isset($pageClass) ? htmlspecialchars($pageClass) : ''; ?>">

    <!-- Global Header -->
    <?php require __DIR__ . '/header.php'; ?>

    <!-- Main View Content -->
    <main class="main-content">
        <?php echo $content; ?>
    </main>

    <!-- Global Footer -->
    <?php require __DIR__ . '/footer.php'; ?>

    <!-- Scripts -->
    <script src="<?php echo $baseUrl; ?>assets/js/main.js"></script>
</body>
</html>
