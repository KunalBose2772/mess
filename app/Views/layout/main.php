<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title><?php echo isset($title) ? htmlspecialchars($title) : "Home Style Meals in Ranchi Since 1999 | Student's Mess"; ?></title>
    <meta name="description" content="<?php echo isset($metaDesc) ? htmlspecialchars($metaDesc) : "Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi."; ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo isset($title) ? htmlspecialchars($title) : "Home Style Meals in Ranchi Since 1999 | Student's Mess"; ?>">
    <meta property="og:description" content="<?php echo isset($metaDesc) ? htmlspecialchars($metaDesc) : "Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi."; ?>">
    <meta property="og:image" content="<?php echo $baseUrl; ?>assets/images/logo.png">
    <meta property="og:type" content="website">
    
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
    <link rel="stylesheet" href="<?php echo $baseUrl; ?>assets/css/main.css?v=1.3.3">
    
    <!-- Site-wide local business schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": ["Restaurant", "LocalBusiness"],
      "name": "Student's Mess",
      "image": "<?php echo $_SERVER['REQUEST_SCHEME'] ?? 'http'; ?>://<?php echo $_SERVER['HTTP_HOST']; ?><?php echo $baseUrl; ?>assets/images/logo.png",
      "url": "<?php echo $_SERVER['REQUEST_SCHEME'] ?? 'http'; ?>://<?php echo $_SERVER['HTTP_HOST']; ?><?php echo $baseUrl; ?>",
      "telephone": "+919934123456",
      "priceRange": "$$",
      "servesCuisine": "Indian, Home Style",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "124, Near Plaza Cinema, Main Road, Hindpiri",
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
