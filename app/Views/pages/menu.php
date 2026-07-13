<?php
// Today's Menu View
// Dynamic variables: $menu, $baseUrl
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Fresh Today</span>
        <h1 class="inner-hero-title">What's Cooking Today</h1>
        <p class="inner-hero-subtitle">Our menu rotates daily to ensure seasonal freshness and balanced daily nutrition.</p>
    </div>
</section>

<!-- Menu Cards Display -->
<section class="menu-display-section">
    <div class="section-container">
        
        <!-- Vegetarian Section -->
        <div class="menu-group-container">
            <div class="menu-group-header">
                <h2><i class="fa fa-leaf text-success"></i> Pure Vegetarian Selection</h2>
                <p>Prepared in separate cookware using pure local sunflower oil and fresh farm produce.</p>
            </div>
            
            <div class="menu-items-grid">
                <?php if (!empty($menu['veg'])): ?>
                    <?php foreach ($menu['veg'] as $item): ?>
                        <div class="menu-item-card">
                            <?php if (!empty($item['badge'])): ?>
                                <span class="menu-item-badge"><?php echo htmlspecialchars($item['badge']); ?></span>
                            <?php endif; ?>
                            <div class="menu-item-title-row">
                                <h3><?php echo htmlspecialchars($item['name']); ?></h3>
                                <span class="menu-item-price">₹<?php echo htmlspecialchars($item['price']); ?></span>
                            </div>
                            <p class="menu-item-desc"><?php echo htmlspecialchars($item['description']); ?></p>
                            <div class="menu-item-includes">
                                <strong>Includes:</strong>
                                <div class="includes-chips">
                                    <?php foreach ($item['items'] as $subItem): ?>
                                        <span class="chip-item"><?php echo htmlspecialchars($subItem); ?></span>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <p class="no-menu-text">Vegetarian menu loading...</p>
                <?php endif; ?>
            </div>
        </div>

        <!-- Non-Vegetarian Section -->
        <div class="menu-group-container spacing-top">
            <div class="menu-group-header">
                <h2><i class="fa fa-drumstick-bite text-accent"></i> Non-Vegetarian Selection</h2>
                <p>Fresh meat sourced daily, slow cooked with traditional slow-fire recipes.</p>
            </div>
            
            <div class="menu-items-grid">
                <?php if (!empty($menu['non_veg'])): ?>
                    <?php foreach ($menu['non_veg'] as $item): ?>
                        <div class="menu-item-card">
                            <?php if (!empty($item['badge'])): ?>
                                <span class="menu-item-badge badge-accent"><?php echo htmlspecialchars($item['badge']); ?></span>
                            <?php endif; ?>
                            <div class="menu-item-title-row">
                                <h3><?php echo htmlspecialchars($item['name']); ?></h3>
                                <span class="menu-item-price">₹<?php echo htmlspecialchars($item['price']); ?></span>
                            </div>
                            <p class="menu-item-desc"><?php echo htmlspecialchars($item['description']); ?></p>
                            <div class="menu-item-includes">
                                <strong>Includes:</strong>
                                <div class="includes-chips">
                                    <?php foreach ($item['items'] as $subItem): ?>
                                        <span class="chip-item"><?php echo htmlspecialchars($subItem); ?></span>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <p class="no-menu-text">Non-vegetarian menu loading...</p>
                <?php endif; ?>
            </div>
        </div>

        <!-- Seasonal Disclaimer -->
        <div class="menu-disclaimer bg-light">
            <p><i class="fa fa-info-circle text-primary"></i> <strong>Note on Rotations:</strong> Vegetable items and specialty curries change daily based on seasonal availability and market freshness. Subscribing to monthly tiffin services gives you access to full weekly calendars.</p>
        </div>

    </div>
</section>

<!-- Menu Page CTAs -->
<section class="final-cta-section bg-primary text-white">
    <div class="section-container text-center">
        <h2 class="text-white">Love What's On The Menu?</h2>
        <p class="text-white-muted">Place a takeaway order now or get details on setting up recurring daily subscriptions.</p>
        <div class="final-cta-buttons">
            <a href="tel:+919934123456" class="btn btn-accent btn-lg text-white shadow-gold"><i class="fa fa-phone"></i> Call to Order Takeaway</a>
            <a href="<?php echo $baseUrl; ?>monthly-meal-plans" class="btn btn-outline-white btn-lg">View Monthly Plans</a>
        </div>
    </div>
</section>
