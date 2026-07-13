<?php
// Footer layout
// Available variable: $baseUrl
?>
<footer class="site-footer">
    <!-- Top Gold Ornament Border -->
    <div class="footer-top-divider">
        <svg class="footer-divider-ornament" width="40" height="20" viewBox="0 0 40 20" fill="none">
            <path d="M20,2 Q16,8 8,10 Q16,12 20,18 Q24,12 32,10 Q24,8 20,2 Z" fill="#d49e2f"/>
            <circle cx="20" cy="10" r="3" fill="#0f2b18"/>
            <!-- Tiny side dots -->
            <circle cx="4" cy="10" r="1.5" fill="#d49e2f"/>
            <circle cx="36" cy="10" r="1.5" fill="#d49e2f"/>
        </svg>
    </div>

    <div class="footer-top">
        <div class="footer-container">
            <!-- Brand Column -->
            <div class="footer-col brand-col">
                <a href="<?php echo $baseUrl; ?>" class="footer-logo">
                    <img src="<?php echo $baseUrl; ?>assets/images/logo.png" alt="Student's Mess Logo" class="footer-logo-img">
                </a>
                <p class="footer-tagline">Fresh, hygienic, and affordable home style veg & non-veg meals. Made with love, serving happiness daily.</p>
                <div class="legacy-badge">
                    <i class="fa-solid fa-location-dot"></i> Serving Ranchi Since 1999
                </div>
                <div class="footer-socials">
                    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/919934123456" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>

            <!-- Quick Links Column -->
            <div class="footer-col links-col">
                <h4 class="footer-heading">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="<?php echo $baseUrl; ?>about-us"><i class="fa-solid fa-chevron-right link-arrow"></i> About Our Story</a></li>
                    <li><a href="<?php echo $baseUrl; ?>monthly-meal-plans"><i class="fa-solid fa-chevron-right link-arrow"></i> Monthly Plans</a></li>
                    <li><a href="<?php echo $baseUrl; ?>bulk-orders"><i class="fa-solid fa-chevron-right link-arrow"></i> Bulk Catering</a></li>
                    <li><a href="<?php echo $baseUrl; ?>takeaway"><i class="fa-solid fa-chevron-right link-arrow"></i> Takeaway Options</a></li>
                    <li><a href="<?php echo $baseUrl; ?>todays-menu"><i class="fa-solid fa-chevron-right link-arrow"></i> Today's Menu</a></li>
                    <li><a href="<?php echo $baseUrl; ?>reviews"><i class="fa-solid fa-chevron-right link-arrow"></i> Customer Reviews</a></li>
                </ul>
            </div>

            <!-- Top Localities Column -->
            <div class="footer-col links-col">
                <h4 class="footer-heading">Areas We Serve</h4>
                <ul class="footer-links">
                    <li><a href="<?php echo $baseUrl; ?>areas/lalpur"><i class="fa-solid fa-location-dot locality-pin"></i> Lalpur</a></li>
                    <li><a href="<?php echo $baseUrl; ?>areas/kanke"><i class="fa-solid fa-location-dot locality-pin"></i> Kanke</a></li>
                    <li><a href="<?php echo $baseUrl; ?>areas/morabadi"><i class="fa-solid fa-location-dot locality-pin"></i> Morabadi</a></li>
                    <li><a href="<?php echo $baseUrl; ?>areas/hindpiri"><i class="fa-solid fa-location-dot locality-pin"></i> Hindpiri</a></li>
                    <li><a href="<?php echo $baseUrl; ?>areas/doranda"><i class="fa-solid fa-location-dot locality-pin"></i> Doranda</a></li>
                    <li><a href="<?php echo $baseUrl; ?>areas/kokar"><i class="fa-solid fa-location-dot locality-pin"></i> Kokar</a></li>
                    <li><a href="<?php echo $baseUrl; ?>areas/bariatu"><i class="fa-solid fa-location-dot locality-pin"></i> Bariatu</a></li>
                    <li class="view-all-footer"><a href="<?php echo $baseUrl; ?>#areas-section">View All Areas <i class="fa-solid fa-arrow-right"></i></a></li>
                </ul>
            </div>

            <!-- Contact Column -->
            <div class="footer-col contact-col">
                <h4 class="footer-heading">Contact Details</h4>
                <ul class="contact-list">
                    <li>
                        <div class="contact-icon-circle">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div class="contact-text-wrap">
                            <span class="contact-label">CALL US:</span>
                            <a href="tel:+919934123456" class="contact-link">+91 99341 23456</a>
                        </div>
                    </li>
                    <li>
                        <div class="contact-icon-circle">
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                        <div class="contact-text-wrap">
                            <span class="contact-label">WHATSAPP:</span>
                            <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20meal%20plans" target="_blank" class="contact-link">+91 99341 23456</a>
                        </div>
                    </li>
                    <li>
                        <div class="contact-icon-circle">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="contact-text-wrap">
                            <span class="contact-label">EMAIL:</span>
                            <a href="mailto:info@studentsmessranchi.com" class="contact-link">info@studentsmessranchi.com</a>
                        </div>
                    </li>
                    <li>
                        <div class="contact-icon-circle">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="contact-text-wrap">
                            <span class="contact-label">ADDRESS:</span>
                            <address class="contact-address">124, Near Plaza Cinema, Main Road, Hindpiri, Ranchi, Jharkhand - 834001</address>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="footer-bottom-container">
            <p class="copyright-text">&copy; <?php echo date('Y'); ?> Student's Mess. All Rights Reserved.</p>
            <div class="footer-bottom-links">
                <a href="<?php echo $baseUrl; ?>privacy-policy">Privacy Policy</a>
                <span class="link-separator">|</span>
                <a href="<?php echo $baseUrl; ?>terms-of-service">Terms & Conditions</a>
            </div>
            <div class="footer-made-with">
                <svg class="heart-leaf-left" width="24" height="16" viewBox="0 0 24 16" fill="none" opacity="0.8">
                    <path d="M2,14 Q8,12 20,4" stroke="#d49e2f" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M8,11 C6,9 7,7 10,7 C11,9 10,11 8,11 Z" fill="#d49e2f"/>
                    <path d="M14,8 C12,6 13,4 16,4 C17,6 16,8 14,8 Z" fill="#d49e2f"/>
                    <path d="M19,5 C18,3 19,2 21,2 C22,3 21,5 19,5 Z" fill="#d49e2f"/>
                </svg>
                <i class="fa-regular fa-heart heart-icon"></i>
                <span class="made-with-text">Made with love in Ranchi</span>
                <svg class="heart-leaf-right" width="24" height="16" viewBox="0 0 24 16" fill="none" opacity="0.8" style="transform: scaleX(-1);">
                    <path d="M2,14 Q8,12 20,4" stroke="#d49e2f" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M8,11 C6,9 7,7 10,7 C11,9 10,11 8,11 Z" fill="#d49e2f"/>
                    <path d="M14,8 C12,6 13,4 16,4 C17,6 16,8 14,8 Z" fill="#d49e2f"/>
                    <path d="M19,5 C18,3 19,2 21,2 C22,3 21,5 19,5 Z" fill="#d49e2f"/>
                </svg>
            </div>
        </div>
    </div>
</footer>

<!-- Floating Elements -->
<!-- Floating WhatsApp (Desktop + Mobile) -->
<a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20meal%20plans" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
    <i class="fab fa-whatsapp"></i>
    <span class="tooltip-text">Chat with us</span>
</a>

<!-- Mobile Bottom Sticky CTA Strip -->
<div class="mobile-sticky-bar">
    <a href="tel:+919934123456" class="mobile-cta-btn cta-call">
        <i class="fa fa-phone"></i> Call Now
    </a>
    <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="mobile-cta-btn cta-quote">
        <i class="fa fa-file-invoice"></i> Get Bulk Quote
    </a>
</div>
