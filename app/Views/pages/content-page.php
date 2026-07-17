<?php
/**
 * Generic content-page view for scalable data-driven pages.
 */
?>
<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Scalable Content</span>
        <h1 class="inner-hero-title"><?php echo htmlspecialchars($page['heroTitle'] ?? $page['title'] ?? 'Content Page'); ?></h1>
        <p class="inner-hero-subtitle"><?php echo htmlspecialchars($page['heroSubtitle'] ?? ''); ?></p>
    </div>
</section>

<section class="section-container">
    <div class="content-page-body">
        <?php echo isset($page['body']) ? $page['body'] : ''; ?>
    </div>
</section>
