<?php
/**
 * Areas Index View - All 15 Delivery Coverage Localities Hub
 * @var array $areas
 * @var string $baseUrl
 */
$areas = $areas ?? [];
$baseUrl = $baseUrl ?? '';
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Local Delivery Map &bull; Student's Mess Ranchi</span>
        <h1 class="inner-hero-title">Areas We Serve Across Ranchi</h1>
        <p class="inner-hero-subtitle">Providing wholesome home-style meal subscriptions, bulk catering, and takeaway orders across 15 premier neighborhoods in Ranchi.</p>
    </div>
</section>

<!-- Areas Grid Section -->
<section class="areas-hub-section" style="padding: var(--space-3xl) 0;">
    <div class="section-container">
        <div class="section-header text-center" style="margin-bottom: var(--space-2xl);">
            <span class="section-eyebrow">Neighborhood Coverage</span>
            <h2>Select Your Ranchi Locality for Local Service Details</h2>
            <p class="section-subtitle">Find delivery schedules, landmark hubs, pricing, and FAQs for your specific neighborhood.</p>
        </div>

        <div class="areas-hub-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--space-xl);">
            <?php foreach ($areas as $slug => $area): ?>
                <div class="area-hub-card bg-light" style="border: 1px solid rgba(197, 155, 39, 0.2); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.3s, box-shadow 0.3s;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: var(--space-sm);">
                            <div style="width: 40px; height: 40px; border-radius: var(--radius-md); background: var(--primary); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <h3 style="font-size: 1.3rem; margin: 0; color: var(--primary);">
                                <a href="<?php echo $baseUrl; ?>mess-and-tiffin-service-in-<?php echo htmlspecialchars($slug); ?>-ranchi" style="color: inherit; text-decoration: none;">
                                    <?php echo htmlspecialchars($area['name']); ?>
                                </a>
                            </h3>
                        </div>

                        <p style="color: var(--accent); font-size: 0.85rem; font-weight: 600; margin-bottom: var(--space-xs);">
                            <i class="fa-solid fa-landmark"></i> Major Landmarks:
                        </p>
                        <p style="color: var(--gray-medium); font-size: 0.9rem; line-height: 1.4; margin-bottom: var(--space-sm);">
                            <?php echo htmlspecialchars($area['landmarks']); ?>
                        </p>

                        <p style="color: var(--gray-dark); font-size: 0.95rem; line-height: 1.5; margin-bottom: var(--space-md);">
                            <?php echo htmlspecialchars($area['intro']); ?>
                        </p>
                    </div>

                    <div style="margin-top: var(--space-md); padding-top: var(--space-md); border-top: 1px solid rgba(0,0,0,0.06); display: flex; justify-content: space-between; align-items: center;">
                        <a href="<?php echo $baseUrl; ?>mess-and-tiffin-service-in-<?php echo htmlspecialchars($slug); ?>-ranchi" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 8px;">
                            <span>View <?php echo htmlspecialchars($area['name']); ?> Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="https://wa.me/916201016720?text=Hi,%20I'm%20inquiring%20about%20tiffin%20delivery%20in%20<?php echo urlencode($area['name']); ?>%20Ranchi." target="_blank" style="color: #25D366; font-size: 1.3rem;" title="Inquire on WhatsApp">
                            <i class="fa-brands fa-whatsapp"></i>
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
            <h2 class="cta-title">Don't See Your Exact Locality <span class="text-accent">Listed?</span></h2>
            <p class="cta-subtitle">We regularly expand delivery routes for group subscriptions and corporate contracts across greater Ranchi.</p>
            <div class="cta-buttons">
                <a href="https://wa.me/916201016720?text=Hi,%20I'd%20like%20to%20check%20if%20you%20deliver%20to%20my%20area%20in%20Ranchi." class="cta-btn btn-gold-filled" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i> Check Coverage on WhatsApp
                </a>
                <a href="<?php echo $baseUrl; ?>contact" class="cta-btn btn-white-outlined">
                    <i class="fa-solid fa-envelope"></i> Contact Us
                </a>
            </div>
        </div>
    </div>
</section>
