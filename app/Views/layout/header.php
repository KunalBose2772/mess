<?php
// Header layout - Student's Mess Ranchi
// Available variable: $baseUrl
?>
<!-- 1. TOP HEADER STRIP -->
<div class="top-header-strip">
    <div class="top-header-container">
        <div class="top-header-left">
            <span><i class="fa fa-map-marker-alt"></i> Ranchi</span>
            <span class="top-separator">|</span>
            <span><i class="fa fa-star"></i> Serving Since 1999</span>
        </div>
        <div class="top-header-right">
            <span><i class="fa fa-clock"></i> Open Daily</span>
            <span class="top-separator">|</span>
            <span><i class="fa fa-shopping-bag"></i> Bulk Orders Welcome</span>
        </div>
    </div>
</div>

<!-- 2. MAIN BOTTOM HEADER -->
<header class="site-header">
    <div class="header-container">
        <!-- Logo Only (Removing Text Title next to it as requested) -->
        <a href="<?php echo $baseUrl; ?>" class="site-logo">
            <img src="<?php echo $baseUrl; ?>assets/images/logo.png" alt="Student's Mess Logo" class="logo-img">
        </a>

        <!-- Hamburger Icon for Mobile -->
        <button class="mobile-nav-toggle" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <nav class="site-nav">
            <ul class="nav-list">
                <li><a href="<?php echo $baseUrl; ?>" class="nav-link">Home</a></li>
                <li><a href="<?php echo $baseUrl; ?>about-us" class="nav-link">About</a></li>
                <li><a href="<?php echo $baseUrl; ?>monthly-meal-plans" class="nav-link">Monthly Plans</a></li>
                <li><a href="<?php echo $baseUrl; ?>bulk-orders" class="nav-link">Bulk Orders</a></li>
                <li><a href="<?php echo $baseUrl; ?>takeaway" class="nav-link">Takeaway</a></li>
                <li><a href="<?php echo $baseUrl; ?>todays-menu" class="nav-link">Today's Menu</a></li>
                <li class="nav-dropdown-item">
                    <a href="#" class="nav-link dropdown-toggle">Areas We Serve <i class="fa fa-chevron-down dropdown-icon"></i></a>
                    <ul class="nav-dropdown">
                        <li><a href="<?php echo $baseUrl; ?>areas/lalpur">Lalpur</a></li>
                        <li><a href="<?php echo $baseUrl; ?>areas/kanke">Kanke</a></li>
                        <li><a href="<?php echo $baseUrl; ?>areas/morabadi">Morabadi</a></li>
                        <li><a href="<?php echo $baseUrl; ?>areas/hindpiri">Hindpiri</a></li>
                        <li><a href="<?php echo $baseUrl; ?>areas/doranda">Doranda</a></li>
                        <li><a href="<?php echo $baseUrl; ?>areas/kokar">Kokar</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a href="<?php echo $baseUrl; ?>#areas-section" class="view-all-link">View All Areas</a></li>
                    </ul>
                </li>
                <li><a href="<?php echo $baseUrl; ?>blog" class="nav-link">Blog</a></li>
                <li><a href="<?php echo $baseUrl; ?>contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>

        <!-- Compact & Premium CTA Buttons -->
        <div class="header-ctas">
            <a href="tel:+919934123456" class="btn-compact btn-call" title="Call Us">
                <i class="fa fa-phone"></i>
            </a>
            <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20meal%20plans" target="_blank" class="btn-compact btn-whatsapp" title="WhatsApp Us">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    </div>
</header>
