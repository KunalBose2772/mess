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
<section class="final-cta-section">
    <div class="section-container">
        <div class="final-cta-card">
            <!-- Decorative Background SVGs -->
            <img src="<?php echo $baseUrl; ?>assets/images/gold_leaf.svg" alt="" class="cta-decor-leaf-left">
            <img src="<?php echo $baseUrl; ?>assets/images/gold_leaf.svg" alt="" class="cta-decor-leaf-right">
            <svg class="cta-decor-dots-left" width="60" height="40" viewBox="0 0 60 40" fill="none" opacity="0.15">
                <circle cx="10" cy="10" r="1.5" fill="#d49e2f"/>
                <circle cx="26" cy="10" r="1.5" fill="#d49e2f"/>
                <circle cx="42" cy="10" r="1.5" fill="#d49e2f"/>
                <circle cx="10" cy="22" r="1.5" fill="#d49e2f"/>
                <circle cx="26" cy="22" r="1.5" fill="#d49e2f"/>
                <circle cx="42" cy="22" r="1.5" fill="#d49e2f"/>
                <circle cx="10" cy="34" r="1.5" fill="#d49e2f"/>
                <circle cx="26" cy="34" r="1.5" fill="#d49e2f"/>
                <circle cx="42" cy="34" r="1.5" fill="#d49e2f"/>
            </svg>
            <svg class="cta-decor-dots-right" width="60" height="40" viewBox="0 0 60 40" fill="none" opacity="0.15">
                <circle cx="10" cy="10" r="1.5" fill="#d49e2f"/>
                <circle cx="26" cy="10" r="1.5" fill="#d49e2f"/>
                <circle cx="42" cy="10" r="1.5" fill="#d49e2f"/>
                <circle cx="10" cy="22" r="1.5" fill="#d49e2f"/>
                <circle cx="26" cy="22" r="1.5" fill="#d49e2f"/>
                <circle cx="42" cy="22" r="1.5" fill="#d49e2f"/>
                <circle cx="10" cy="34" r="1.5" fill="#d49e2f"/>
                <circle cx="26" cy="34" r="1.5" fill="#d49e2f"/>
                <circle cx="42" cy="34" r="1.5" fill="#d49e2f"/>
            </svg>

            <!-- Card Content -->
            <div class="cta-leaf-top">
                <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
                    <path d="M15,6 C10,6 5,8 1,10" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M15,6 C20,6 25,8 29,10" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M15,6 C15,3 13,1 11,2 C10,3 11,5 15,6 Z" fill="#d49e2f"/>
                    <path d="M15,6 C15,3 17,1 19,2 C20,3 19,5 15,6 Z" fill="#d49e2f"/>
                </svg>
            </div>
            
            <h2 class="cta-title">Love What's <span class="text-accent">On The Menu?</span></h2>
            <p class="cta-subtitle">Place a takeaway order now or get details on setting up recurring daily subscriptions.</p>
            
            <div class="cta-buttons">
                <a href="tel:+919934123456" class="cta-btn btn-gold-filled">
                    <i class="fa fa-phone"></i> Call to Order Takeaway
                </a>
                <a href="<?php echo $baseUrl; ?>monthly-meal-plans" class="cta-btn btn-white-outlined">
                    View Monthly Plans
                </a>
            </div>
        </div>
    </div>
</section>
