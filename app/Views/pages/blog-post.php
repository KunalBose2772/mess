<?php
// Blog Post Detail View
// Dynamic variables passed: $post, $baseUrl
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow"><?php echo htmlspecialchars($post['category']); ?></span>
        <h1 class="inner-hero-title"><?php echo htmlspecialchars($post['title']); ?></h1>
        
        <div class="blog-post-meta text-center">
            <span><i class="fa fa-user"></i> <?php echo htmlspecialchars($post['author']); ?></span>
            <span class="meta-separator">·</span>
            <span><i class="fa fa-calendar"></i> <?php echo htmlspecialchars($post['date']); ?></span>
        </div>
    </div>
</section>

<!-- Blog Content -->
<section class="blog-body-section">
    <div class="section-container">
        <div class="blog-article-wrapper">
            <div class="blog-featured-image-placeholder"></div>
            
            <article class="blog-article-content">
                <?php echo $post['content']; // Unescaped as it contains pre-formatted HTML paragraphs ?>
            </article>

            <!-- Inline CTA inside Blog -->
            <div class="blog-inline-cta bg-light">
                <h4>Struggling with Daily Cooking or Bad Digestion?</h4>
                <p>Subscribe to our Standard Veg or Non-Veg monthly tiffin plans and start receiving warm home-style meals at your doorstep daily.</p>
                <div class="cta-actions">
                    <a href="<?php echo $baseUrl; ?>monthly-meal-plans" class="btn btn-primary btn-md">Explore Plans</a>
                    <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20subscribe%20after%20reading%20your%20blog." class="btn btn-whatsapp btn-md" target="_blank"><i class="fab fa-whatsapp"></i> Order on WhatsApp</a>
                </div>
            </div>

            <!-- Author Footer Bio -->
            <div class="blog-author-bio bg-primary text-white">
                <div class="author-bio-text">
                    <h3>About Student's Mess Kitchen</h3>
                    <p>Established in 1999, Student's Mess is a family-run culinary team located in Hindpiri, Ranchi. We are committed to preparing and distributing fresh, low-oil, hygienic vegetarian and non-vegetarian meals to students, professionals, and organizations.</p>
                </div>
            </div>
            
            <div class="blog-back-link">
                <a href="<?php echo $baseUrl; ?>blog" class="btn btn-secondary btn-sm"><i class="fa fa-arrow-left"></i> Back to Blog Index</a>
            </div>
        </div>
    </div>
</section>
