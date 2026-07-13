<?php
// Takeaway Options View
// Available variables: $baseUrl
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">On The Go</span>
        <h1 class="inner-hero-title">Takeaway Meals</h1>
        <p class="inner-hero-subtitle">Freshly cooked home-style thalis packed in heat-retaining containers, ready for pickup.</p>
    </div>
</section>

<!-- How Takeaway Works -->
<section class="takeaway-process bg-light">
    <div class="section-container">
        <div class="section-header text-center">
            <span class="section-eyebrow">Process</span>
            <h2>How Takeaway Works</h2>
            <p class="section-subtitle">Skip the waiting line. Call ahead and pick up hot meals in minutes.</p>
        </div>
        
        <div class="steps-grid">
            <div class="step-card">
                <span class="step-number"><i class="fa fa-phone-alt"></i></span>
                <h3>01. Call or WhatsApp</h3>
                <p>Call <a href="tel:+919934123456"><strong>+91 99341 23456</strong></a> or drop a WhatsApp message indicating your thali choice and quantity.</p>
            </div>
            <div class="step-card">
                <span class="step-number"><i class="fa fa-fire-alt"></i></span>
                <h3>02. We Cook Fresh</h3>
                <p>Our kitchen team packs your meal fresh. We seal it in high-grade spill-proof boxes to retain heat.</p>
            </div>
            <div class="step-card">
                <span class="step-number"><i class="fa fa-running"></i></span>
                <h3>03. Quick Pickup</h3>
                <p>Drive by our central kitchen near Plaza Cinema, pay via cash or UPI, and receive your hot food instantly.</p>
            </div>
        </div>
    </div>
</section>

<!-- Popular Takeaway Combos -->
<section class="popular-takeaway-combos">
    <div class="section-container">
        <div class="section-header text-center">
            <span class="section-eyebrow">Menu Teaser</span>
            <h2>Popular Takeaway Combos</h2>
            <p class="section-subtitle">Fast, satisfying, and balanced thalis favored by our bachelors and working regulars.</p>
        </div>
        
        <div class="thali-combo-grid">
            <div class="thali-combo-card">
                <span class="combo-tag">Best Everyday</span>
                <h3>Veg Standard Combo</h3>
                <div class="combo-price">₹80</div>
                <p>Basmati Rice, 4 wheat rotis, traditional dal, seasonal subzi, fresh cucumber salad, and homemade mango pickle.</p>
            </div>
            
            <div class="thali-combo-card">
                <span class="combo-tag">Meat Lovers</span>
                <h3>Dehati Chicken Combo</h3>
                <div class="combo-price">₹140</div>
                <p>Authentic slow-cooked Ranchi style chicken curry (3 pieces), served alongside basmati rice or 4 hot chapatis, dal, and salad.</p>
            </div>
            
            <div class="thali-combo-card">
                <span class="combo-tag">Egg Special</span>
                <h3>Egg Curry Combo</h3>
                <div class="combo-price">₹100</div>
                <p>Fried hard-boiled eggs (2 pieces) simmered in local tomato-onion gravy, paired with rice or 4 wheat chapatis, dal, and salad.</p>
            </div>
        </div>
        
        <div class="thali-action-link text-center">
            <a href="<?php echo $baseUrl; ?>todays-menu" class="btn btn-secondary btn-md">Check Today's Full Rotating Menu <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
</section>

<!-- Timing & Location Info -->
<section class="takeaway-info-section bg-primary text-white">
    <div class="section-container">
        <div class="takeaway-info-grid">
            <div class="info-details-block">
                <span class="section-eyebrow text-accent">Visit Us</span>
                <h2 class="text-white">Pickup Location & Hours</h2>
                <p class="text-white-muted">Drop in directly to collect your orders. Easy parking access for cars and two-wheelers.</p>
                
                <ul class="takeaway-location-list">
                    <li>
                        <i class="fa fa-map-marker-alt text-accent"></i>
                        <span>124, Near Plaza Cinema, Main Road, Hindpiri, Ranchi, Jharkhand - 834001</span>
                    </li>
                    <li>
                        <i class="fa fa-clock text-accent"></i>
                        <span>Lunch Timings: 11:30 AM - 3:30 PM (All Days)</span>
                    </li>
                    <li>
                        <i class="fa fa-clock text-accent"></i>
                        <span>Dinner Timings: 7:00 PM - 10:00 PM (All Days)</span>
                    </li>
                </ul>
            </div>
            <div class="info-action-block text-center">
                <div class="takeaway-box-icon"><i class="fa fa-box"></i></div>
                <h3 class="text-white">Call Ahead to Order</h3>
                <p class="text-white-muted">Save 15 minutes of kitchen waiting time by ordering ahead.</p>
                <div class="info-ctas">
                    <a href="tel:+919934123456" class="btn btn-accent btn-lg text-white shadow-gold"><i class="fa fa-phone"></i> Call: +91 99341 23456</a>
                    <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20order%20takeaway." class="btn btn-outline-white btn-lg" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp Order</a>
                </div>
            </div>
        </div>
    </div>
</section>
