<?php
// Universal Location Detail Template View
// Dynamic variables passed: $area, $adjacentAreas, $baseUrl
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Serving Hyperlocal Ranchi</span>
        <h1 class="inner-hero-title">Tiffin & Meal Supply in <?php echo htmlspecialchars($area['name']); ?></h1>
        <p class="inner-hero-subtitle">Home-style meals delivered fresh near major landmarks: <?php echo htmlspecialchars($area['landmarks']); ?></p>
    </div>
</section>

<!-- Location Details Section -->
<section class="location-details-section">
    <div class="section-container">
        <div class="location-grid">
            <div class="location-content">
                <span class="section-eyebrow">Local Coverage</span>
                <h2>Delicious Home Cooking at Your Doorstep in <?php echo htmlspecialchars($area['name']); ?></h2>
                <p class="lead-text"><?php echo htmlspecialchars($area['intro']); ?></p>
                <p>At Student's Mess, we understand that moving to a new locality like <?php echo htmlspecialchars($area['name']); ?> can make finding quality food challenging. Our kitchen helps fill that gap, delivering fresh vegetarian and non-vegetarian thalis directly to PG rooms, houses, and office workstations daily.</p>
                
                <!-- Target Focus Box -->
                <div class="focus-box bg-light">
                    <h4><i class="fa fa-info-circle text-primary"></i> Area Focus:</h4>
                    <p><?php echo htmlspecialchars($area['focus']); ?></p>
                </div>
            </div>
            
            <div class="location-checklist-sidebar">
                <div class="checklist-card bg-primary text-white">
                    <h3>Services Active in <?php echo htmlspecialchars($area['name']); ?></h3>
                    <ul class="checklist-items">
                        <li><i class="fa fa-check-circle text-accent"></i> Monthly Tiffin Subscriptions</li>
                        <li><i class="fa fa-check-circle text-accent"></i> Bulk Office Catering</li>
                        <li><i class="fa fa-check-circle text-accent"></i> PG & Hostel Contract Supply</li>
                        <li><i class="fa fa-check-circle text-accent"></i> Takeaway (Hindpiri Counter)</li>
                    </ul>
                    <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20order%20meals%20in%20<?php echo urlencode($area['name']); ?>." class="btn btn-accent btn-block text-white shadow-gold"><i class="fab fa-whatsapp"></i> Order in <?php echo htmlspecialchars($area['name']); ?></a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Hyperlocal FAQs -->
<section class="location-faqs bg-light">
    <div class="section-container">
        <div class="section-header text-center">
            <span class="section-eyebrow">Queries</span>
            <h2>Local FAQ for <?php echo htmlspecialchars($area['name']); ?> Residents</h2>
            <p class="section-subtitle">Common questions regarding deliveries in the locality.</p>
        </div>
        
        <div class="faq-accordion">
            <div class="faq-item">
                <button class="faq-question">
                    <span><?php echo htmlspecialchars($area['faq_q']); ?></span>
                    <i class="fa fa-plus faq-toggle-icon"></i>
                </button>
                <div class="faq-answer">
                    <p><?php echo htmlspecialchars($area['faq_a']); ?></p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>Do you deliver individual meals daily in <?php echo htmlspecialchars($area['name']); ?>?</span>
                    <i class="fa fa-plus faq-toggle-icon"></i>
                </button>
                <div class="faq-answer">
                    <p>Monthly subscriptions for a single person are active on a self-pickup basis from our kitchen. Doorstep delivery is only available if a minimum of five (5) subscriptions/people subscribe from the same building or neighborhood. For single-day orders, please place a takeaway order.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Adjacent Hyperlocal Spokes (Critical for SEO Linking structure) -->
<?php if (!empty($adjacentAreas)): ?>
<section class="adjacent-linking-section">
    <div class="section-container">
        <div class="section-header text-center">
            <span class="section-eyebrow">Local Coverage Map</span>
            <h2>Other Nearby Sectors We Serve</h2>
            <p class="section-subtitle">We also provide meal deliveries to adjacent neighborhoods surrounding <?php echo htmlspecialchars($area['name']); ?>.</p>
        </div>
        
        <div class="adjacent-chips-row">
            <?php foreach ($adjacentAreas as $adj): ?>
                <a href="<?php echo $baseUrl; ?>areas/<?php echo $adj['slug']; ?>" class="adjacent-chip">
                    <span><i class="fa fa-map-marker-alt"></i> <?php echo htmlspecialchars($adj['name']); ?></span>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<!-- Final CTA -->
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
            
            <h2 class="cta-title">Ready for Fresh Home Style Meals <span class="text-accent">in <?php echo htmlspecialchars($area['name']); ?>?</span></h2>
            <p class="cta-subtitle">Subscribe now or request bulk quote proposals for your local PG, office, or event.</p>
            
            <div class="cta-buttons">
                <a href="tel:+919934123456" class="cta-btn btn-gold-filled">
                    <i class="fa fa-phone"></i> Call Now
                </a>
                <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="cta-btn btn-white-outlined">
                    Request Bulk Quote
                </a>
            </div>
        </div>
    </div>
</section>
