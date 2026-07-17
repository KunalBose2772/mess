<?php
// Universal Service Detail Template View
// Dynamic variables passed: $service, $baseUrl
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Professional Services</span>
        <h1 class="inner-hero-title"><?php echo htmlspecialchars($service['title']); ?></h1>
        <p class="inner-hero-subtitle"><?php echo htmlspecialchars($service['angle']); ?></p>
    </div>
</section>

<!-- What This Service Includes -->
<section class="service-details-section">
    <div class="section-container">
        <div class="service-details-grid">
            <div class="details-left">
                <span class="section-eyebrow">Scope of Service</span>
                <h2>What This Service Includes</h2>
                <p><?php echo htmlspecialchars($service['description']); ?></p>
                
                <ul class="service-inclusions-list">
                    <?php foreach ($service['includes'] as $inclusion): ?>
                        <li>
                            <i class="fa fa-check-circle"></i>
                            <span><?php echo htmlspecialchars($inclusion); ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            
            <div class="details-right-sidebar">
                <div class="sidebar-box bg-light">
                    <h3>Need a custom proposal?</h3>
                    <p>We supply personalized menu options and structured contract billing terms matching your organization size.</p>
                    <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="btn btn-primary btn-block">Request Custom Quote</a>
                    <a href="tel:+919934123456" class="btn btn-outline-primary btn-block"><i class="fa fa-phone"></i> Call Operations</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Reusable Section -->
<section class="why-choose-service bg-light">
    <div class="section-container">
        <div class="section-header text-center">
            <span class="section-eyebrow">Commitment</span>
            <h2>Why Choose Student's Mess?</h2>
            <p class="section-subtitle">Experience quality and reliability trusted since 1999.</p>
        </div>
        
        <div class="service-trust-grid">
            <div class="trust-card-mini">
                <i class="fa fa-award"></i>
                <h4>26+ Years Trust</h4>
                <p>One of the oldest local home kitchens in Ranchi.</p>
            </div>
            
            <div class="trust-card-mini">
                <i class="fa fa-utensils"></i>
                <h4>Home Cooked Quality</h4>
                <p>Clean recipes with hand-ground spices and low oil.</p>
            </div>
            
            <div class="trust-card-mini">
                <i class="fa fa-shipping-fast"></i>
                <h4>Punctual Timing</h4>
                <p>Strict schedules ensuring warm deliveries before lunch breaks.</p>
            </div>
        </div>
    </div>
</section>

<!-- Service FAQs -->
<?php if (!empty($service['faqs'])): ?>
<section class="service-faqs">
    <div class="section-container">
        <div class="section-header text-center">
            <span class="section-eyebrow">Queries</span>
            <h2>Service Specific FAQs</h2>
            <p class="section-subtitle">Common questions regarding this specific food supply line.</p>
        </div>
        
        <div class="faq-accordion">
            <?php foreach ($service['faqs'] as $faq): ?>
                <div class="faq-item">
                    <button class="faq-question">
                        <span><?php echo htmlspecialchars($faq['q']); ?></span>
                        <i class="fa fa-plus faq-toggle-icon"></i>
                    </button>
                    <div class="faq-answer">
                        <p><?php echo htmlspecialchars($faq['a']); ?></p>
                    </div>
                </div>
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
            
            <h2 class="cta-title">Ready to Partner With <span class="text-accent">Ranchi's Best</span>?</h2>
            <p class="cta-subtitle">Get in touch to organize your meal subscriptions or trial runs.</p>
            
            <div class="cta-buttons">
                <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="cta-btn btn-gold-filled">
                    <?php echo htmlspecialchars($service['cta']); ?>
                </a>
                <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20inquire%20about%20<?php echo urlencode($service['title']); ?>." class="cta-btn btn-white-outlined" target="_blank">
                    <i class="fab fa-whatsapp"></i> WhatsApp Us
                </a>
            </div>
        </div>
    </div>
</section>
