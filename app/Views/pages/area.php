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
                    <p>Individual home deliveries are available on monthly subscription terms. For single day orders, please place a takeaway order or coordinates with roommates to order in bulk (minimum 5 meals) for free delivery.</p>
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
<section class="final-cta-section bg-primary text-white">
    <div class="section-container text-center">
        <h2 class="text-white">Ready for Fresh Home Style Meals in <?php echo htmlspecialchars($area['name']); ?>?</h2>
        <p class="text-white-muted">Subscribe now or request bulk quote proposals for your local PG, office, or event.</p>
        <div class="final-cta-buttons">
            <a href="tel:+919934123456" class="btn btn-accent btn-lg text-white shadow-gold"><i class="fa fa-phone"></i> Call Now</a>
            <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="btn btn-outline-white btn-lg">Request Bulk Quote</a>
        </div>
    </div>
</section>
