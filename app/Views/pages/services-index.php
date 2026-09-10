<?php
/**
 * Services Index View - All 13 Commercial Services Hub
 * @var array $services
 * @var string $baseUrl
 */
$services = $services ?? [];
$baseUrl = $baseUrl ?? '';
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Complete Culinary Services &bull; Student's Mess Ranchi</span>
        <h1 class="inner-hero-title">Food &amp; Catering Services in Ranchi</h1>
        <p class="inner-hero-subtitle">From daily student tiffins and office lunch deliveries to large-scale hostel, hospital, and event catering across Ranchi since 1999.</p>
    </div>
</section>

<!-- Services Grid Section -->
<section class="services-hub-section" style="padding: var(--space-3xl) 0;">
    <div class="section-container">
        <div class="section-header text-center" style="margin-bottom: var(--space-2xl);">
            <span class="section-eyebrow">Our Specializations</span>
            <h2>Tailored Meal Solutions for Every Requirement</h2>
            <p class="section-subtitle">Select a service below to explore detailed menus, pricing models, and ordering options.</p>
        </div>

        <div class="services-hub-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--space-xl);">
            <?php foreach ($services as $slug => $service): ?>
                <div class="service-hub-card bg-light" style="border: 1px solid rgba(197, 155, 39, 0.2); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.3s, box-shadow 0.3s;">
                    <div>
                        <div class="service-hub-icon" style="width: 50px; height: 50px; border-radius: var(--radius-md); background: var(--primary); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: var(--space-md);">
                            <i class="fa-solid <?php echo htmlspecialchars($service['icon'] ?? 'fa-utensils'); ?>"></i>
                        </div>
                        <h3 style="font-size: 1.25rem; color: var(--primary); margin-bottom: var(--space-xs);">
                            <a href="<?php echo $baseUrl; ?>services/<?php echo htmlspecialchars($slug); ?>" style="color: inherit; text-decoration: none;">
                                <?php echo htmlspecialchars($service['title']); ?>
                            </a>
                        </h3>
                        <p style="color: var(--accent); font-size: 0.85rem; font-weight: 600; margin-bottom: var(--space-sm);">
                            <?php echo htmlspecialchars($service['angle'] ?? ''); ?>
                        </p>
                        <p style="color: var(--gray-medium); font-size: 0.95rem; line-height: 1.5; margin-bottom: var(--space-md);">
                            <?php echo htmlspecialchars($service['description']); ?>
                        </p>
                    </div>
                    <div style="margin-top: var(--space-md); padding-top: var(--space-md); border-top: 1px solid rgba(0,0,0,0.06);">
                        <a href="<?php echo $baseUrl; ?>services/<?php echo htmlspecialchars($slug); ?>" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 8px;">
                            <span>Learn More &amp; Inquire</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Final CTA Section -->
<section class="final-cta-section">
    <div class="section-container">
        <div class="final-cta-card">
            <h2 class="cta-title">Need a Custom Meal Package <span class="text-accent">in Ranchi?</span></h2>
            <p class="cta-subtitle">Talk to our kitchen coordinators today to discuss custom diet requirements, billing terms, or trial runs.</p>
            <div class="cta-buttons">
                <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="cta-btn btn-gold-filled">
                    <i class="fa-solid fa-file-invoice"></i> Request Bulk Quote
                </a>
                <a href="tel:+916201016720" class="cta-btn btn-white-outlined">
                    <i class="fa-solid fa-phone"></i> Call +91 62010 16720
                </a>
            </div>
        </div>
    </div>
</section>
