<?php
// Homepage View
// Dynamic variables passed: $services, $areas, $menu, $baseUrl
?>

<!-- 1. HERO SECTION -->
<section class="hero-section">
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-badge-wrap">
                <span class="hero-eyebrow-badge">SERVING RANCHI <span class="text-accent">SINCE 1999</span></span>
            </div>
            
            <h1 class="hero-title">Home Style Meals<br><span class="text-accent">Fresh Every Day. Trusted Since 1999.</span></h1>
            <p class="hero-subtitle">For over 26 years, we have been serving students, working professionals, families and organizations with <strong>fresh</strong>, <strong>hygienic</strong> and <strong>affordable</strong> meals every single day.</p>
            
            <div class="hero-ctas">
                <a href="<?php echo $baseUrl; ?>todays-menu" class="btn btn-hero-primary"><i class="fa-solid fa-bell-concierge"></i> VIEW TODAY'S MENU <i class="fa fa-arrow-right btn-arrow"></i></a>
                <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="btn btn-hero-outline"><i class="fa-solid fa-users"></i> REQUEST BULK QUOTE <i class="fa fa-arrow-right btn-arrow"></i></a>
            </div>
            
            <div class="hero-trust-row">
                <div class="avatar-group">
                    <img src="<?php echo $baseUrl; ?>assets/images/avatar1.png" alt="Student" class="avatar-img">
                    <img src="<?php echo $baseUrl; ?>assets/images/avatar2.png" alt="Student" class="avatar-img">
                    <img src="<?php echo $baseUrl; ?>assets/images/avatar3.png" alt="Student" class="avatar-img">
                    <img src="<?php echo $baseUrl; ?>assets/images/avatar4.png" alt="Student" class="avatar-img">
                </div>
                <div class="trust-info-block">
                    <div class="trust-rating-title">Trusted by <strong class="text-accent">500+</strong> customers</div>
                    <div class="trust-rating-meta">
                        <span class="trust-rating-stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                        <span class="trust-rating-sub">4.8/5 (200+ Reviews on Google)</span>
                        <svg class="trust-google-icon" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.49 3.77v3.12h3.99c2.34-2.16 3.68-5.32 3.68-8.74z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.99-3.12c-1.12.75-2.54 1.19-3.97 1.19-3.05 0-5.64-2.06-6.57-4.83H1.36v3.22A12 12 0 0 0 12 24z"/>
                            <path fill="#FBBC05" d="M5.43 14.33a7.22 7.22 0 0 1 0-4.66V6.45H1.36a12 12 0 0 0 0 11.1l4.07-3.22z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A12 12 0 0 0 1.36 6.45l4.07 3.22c.93-2.77 3.52-4.92 6.57-4.92z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-image-wrapper">
            <div class="hero-years-badge">
                <span class="years-number">25+</span>
                <span class="years-text">YEARS OF TRUST</span>
                <div class="badge-heart"><i class="fa fa-heart"></i></div>
            </div>
        </div>
    </div>
    <!-- Feature Bar -->
    <div class="hero-feature-bar">
        <div class="hero-feature-item">
            <div class="feature-icon-wrap feature-green">
                <i class="fa fa-leaf"></i>
            </div>
            <div class="feature-text">
                <strong>VEG &amp; NON-VEG</strong>
                <span>Options Available</span>
            </div>
        </div>
        <div class="hero-feature-item">
            <div class="feature-icon-wrap feature-orange">
                <i class="fa fa-fire-alt"></i>
            </div>
            <div class="feature-text">
                <strong>FRESHLY COOKED</strong>
                <span>Every Single Day</span>
            </div>
        </div>
        <div class="hero-feature-item">
            <div class="feature-icon-wrap feature-green">
                <i class="fa fa-shield-alt"></i>
            </div>
            <div class="feature-text">
                <strong>HYGIENIC &amp; CLEAN</strong>
                <span>Kitchen Environment</span>
            </div>
        </div>
        <div class="hero-feature-item">
            <div class="feature-icon-wrap feature-orange">
                <i class="fa fa-users"></i>
            </div>
            <div class="feature-text">
                <strong>BULK ORDER</strong>
                <span>Specialists</span>
            </div>
        </div>
        <div class="hero-feature-item">
            <div class="feature-icon-wrap feature-orange">
                <i class="fa fa-rupee-sign"></i>
            </div>
            <div class="feature-text">
                <strong>AFFORDABLE</strong>
                <span>Monthly Plans</span>
            </div>
        </div>
    </div>
</section>


<section class="legacy-section">
    <!-- Decorative Background Leaves -->
    <img src="<?php echo $baseUrl; ?>assets/images/gold_leaf.svg" alt="" class="legacy-decor-leaf-left">
    <img src="<?php echo $baseUrl; ?>assets/images/gold_leaf.svg" alt="" class="legacy-decor-leaf-right">
    <div class="section-container">

        <!-- Header -->
        <div class="legacy-header text-center">
            <span class="legacy-eyebrow">
                <svg class="eyebrow-leaf leaf-left" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 8C8 8 4 15 3 21C6.5 19.5 11 19 14 17C17 15 18 11.5 18 10C18 9 17.5 8.5 17 8M14 2C8.5 5.5 6 11.5 5.5 14C8 12.5 13 11 16.5 7C18 5 18.5 3 18.5 2.5C18.5 2.2 18.2 2 18 2M21 13C17.5 14.5 15.5 17.5 15 19C17.5 18 20 16 21 14C21.5 13.2 21.2 13 21 13Z" />
                </svg>
                OUR LEGACY
                <svg class="eyebrow-leaf leaf-right" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 8C8 8 4 15 3 21C6.5 19.5 11 19 14 17C17 15 18 11.5 18 10C18 9 17.5 8.5 17 8M14 2C8.5 5.5 6 11.5 5.5 14C8 12.5 13 11 16.5 7C18 5 18.5 3 18.5 2.5C18.5 2.2 18.2 2 18 2M21 13C17.5 14.5 15.5 17.5 15 19C17.5 18 20 16 21 14C21.5 13.2 21.2 13 21 13Z" />
                </svg>
            </span>
            <h2 class="legacy-title">Serving Ranchi One Homemade<br>Meal At A Time Since 1999</h2>
            <p class="legacy-subtitle">More than food. A tradition passed through generations.</p>
        </div>

        <!-- Two Column Body -->
        <div class="legacy-body">

            <!-- Left: Timeline -->
            <div class="legacy-timeline">
                <div class="legacy-line"></div>

                <div class="lt-item">
                    <div class="lt-icon"><i class="fa-solid fa-house"></i></div>
                    <div class="lt-content">
                        <span class="lt-date">1999</span>
                        <h4>Founding Roots</h4>
                        <p>Started as a small home kitchen in Hindpiri, Ranchi, serving students who missed home cooked meals.</p>
                    </div>
                </div>

                <div class="lt-item">
                    <div class="lt-icon"><i class="fa-solid fa-people-group"></i></div>
                    <div class="lt-content">
                        <span class="lt-date">Early 2000s</span>
                        <h4>Word of Mouth Grows</h4>
                        <p>Word of mouth spreads. Bachelors and working professionals join our daily growing family of regulars.</p>
                    </div>
                </div>

                <div class="lt-item">
                    <div class="lt-icon"><i class="fa-solid fa-city"></i></div>
                    <div class="lt-content">
                        <span class="lt-date">2010s</span>
                        <h4>Scaling Operations</h4>
                        <p>Expanded our kitchen capacities to support bulk meals for corporate offices, schools, and private PG hostels.</p>
                    </div>
                </div>

                <div class="lt-item">
                    <div class="lt-icon"><i class="fa-solid fa-shield-halved"></i></div>
                    <div class="lt-content">
                        <span class="lt-date">Today</span>
                        <h4>A Household Trust</h4>
                        <p>A household name in Ranchi for premium, hygienic, home-style meal plans, events, and bulk catering.</p>
                    </div>
                </div>
            </div>

            <!-- Right: Image with overlays -->
            <div class="legacy-visual">
                <img src="<?php echo $baseUrl; ?>assets/images/hero.png" alt="Bose Family Kitchen Since 1999" class="legacy-img">

                <!-- Years Badge -->
                <div class="legacy-years-badge">
                    <i class="fa-solid fa-crown legacy-crown"></i>
                    <span class="lyb-number">26+</span>
                    <span class="lyb-label">YEARS<br>OF TRUST</span>
                    <i class="fa-solid fa-heart lyb-heart"></i>
                </div>

                <!-- Quote overlay -->
                <div class="legacy-quote-card">
                    <span class="lqc-mark">&ldquo;</span>
                    <p class="lqc-text">Prepared with Love,<br><em>&mdash; Bose Family</em></p>
                    <span class="lqc-sub">Serving Ranchi Since 1999</span>
                </div>
            </div>

        </div><!-- /legacy-body -->

        <!-- Stats Bar -->
        <div class="legacy-stats-bar">
            <div class="lsb-item">
                <div class="lsb-icon"><i class="fa-solid fa-trophy"></i></div>
                <div class="lsb-text">
                    <strong>26+</strong>
                    <span>Years of<br>Experience</span>
                </div>
            </div>
            <div class="lsb-item">
                <div class="lsb-icon"><i class="fa-solid fa-utensils"></i></div>
                <div class="lsb-text">
                    <strong>10,000+</strong>
                    <span>Meals<br>Served</span>
                </div>
            </div>
            <div class="lsb-item">
                <div class="lsb-icon"><i class="fa-solid fa-people-group"></i></div>
                <div class="lsb-text">
                    <strong>100+</strong>
                    <span>Monthly<br>Customers</span>
                </div>
            </div>
            <div class="lsb-item">
                <div class="lsb-icon"><i class="fa-solid fa-heart"></i></div>
                <div class="lsb-text">
                    <strong>Family</strong>
                    <span>Owned &amp;<br>Operated</span>
                </div>
            </div>
        </div>

    </div>
</section>


<!-- 4. WHO WE SERVE -->
<section class="serve-section">
    <div class="section-container">
        <div class="serve-header text-center">
            <span class="serve-eyebrow">
                <svg class="eyebrow-leaf leaf-left" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M17 8C8 8 4 15 3 21C6.5 19.5 11 19 14 17C17 15 18 11.5 18 10C18 9 17.5 8.5 17 8M14 2C8.5 5.5 6 11.5 5.5 14C8 12.5 13 11 16.5 7C18 5 18.5 3 18.5 2.5C18.5 2.2 18.2 2 18 2M21 13C17.5 14.5 15.5 17.5 15 19C17.5 18 20 16 21 14C21.5 13.2 21.2 13 21 13Z" />
                </svg>
                TAILORED FOR YOU
                <svg class="eyebrow-leaf leaf-right" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M7 8C16 8 20 15 21 21C17.5 19.5 13 19 10 17C7 15 6 11.5 6 10C6 9 6.5 8.5 7 8M10 2C15.5 5.5 18 11.5 18.5 14C16 12.5 11 11 7.5 7C6 5 5.5 3 5.5 2.5C5.5 2.2 5.8 2 6 2M3 13C6.5 14.5 8.5 17.5 9 19C6.5 18 4 16 3 14C2.5 13.2 2.8 13 3 13Z" />
                </svg>
            </span>
            <h2 class="serve-title">Who We Serve Daily</h2>
            <p class="serve-subtitle">Nourishing every day with the warmth and care of home cooking, delivered fresh across Ranchi.</p>
        </div>
        
        <div class="serve-grid-new">
            <!-- Left Column: Individual & Resident Cards -->
            <div class="serve-column">
                <!-- Card 1: Students -->
                <div class="scr-card-row">
                    <div class="scr-icon-wrap">
                        <div class="scr-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                    </div>
                    <div class="scr-text-wrap">
                        <h3>Students</h3>
                        <div class="scr-divider"></div>
                        <p>Affordable nutrition to fuel long study hours.</p>
                    </div>
                    <a href="<?php echo $baseUrl; ?>services/student-tiffin-ranchi" class="scr-btn">Monthly Plans <i class="fa-solid fa-arrow-right"></i></a>
                    <div class="scr-image" style="background-image: url('<?php echo $baseUrl; ?>assets/images/serve_students.png')"></div>
                </div>

                <!-- Card 2: Working Professionals -->
                <div class="scr-card-row">
                    <div class="scr-icon-wrap">
                        <div class="scr-icon"><i class="fa-solid fa-briefcase"></i></div>
                    </div>
                    <div class="scr-text-wrap">
                        <h3>Working Professionals</h3>
                        <div class="scr-divider"></div>
                        <p>Clean, oil-light office lunch boxes.</p>
                    </div>
                    <a href="<?php echo $baseUrl; ?>services/daily-lunch-ranchi" class="scr-btn">Lunch Plans <i class="fa-solid fa-arrow-right"></i></a>
                    <div class="scr-image" style="background-image: url('<?php echo $baseUrl; ?>assets/images/serve_professionals.png')"></div>
                </div>

                <!-- Card 3: Bachelors -->
                <div class="scr-card-row">
                    <div class="scr-icon-wrap">
                        <div class="scr-icon"><i class="fa-solid fa-user"></i></div>
                    </div>
                    <div class="scr-text-wrap">
                        <h3>Bachelors</h3>
                        <div class="scr-divider"></div>
                        <p>No cooking stress, home-style menu rotations.</p>
                    </div>
                    <a href="<?php echo $baseUrl; ?>services/veg-meals-ranchi" class="scr-btn">View Menu <i class="fa-solid fa-arrow-right"></i></a>
                    <div class="scr-image" style="background-image: url('<?php echo $baseUrl; ?>assets/images/serve_bachelors.png')"></div>
                </div>
            </div>

            <!-- Center Column: Featured Corporate Card -->
            <div class="serve-column-featured">
                <!-- Food Image Background Overlay -->
                <div class="scf-bg-image" style="background-image: url('<?php echo $baseUrl; ?>assets/images/serve_corporate.png')">
                    <div class="scf-bg-gradient"></div>
                </div>

                <div class="scf-badge">
                    <span>OUR SPECIALTY</span>
                    <i class="fa-solid fa-star"></i>
                </div>
                
                <div class="scf-content">
                    <div class="scf-icon"><i class="fa-solid fa-building"></i></div>
                    <h2 class="scf-title">Corporate &amp;<br>Bulk Orders</h2>
                    <div class="scf-divider"></div>
                    <p class="scf-desc">Nutritious, hygienic and timely meals for offices, factories, schools and large teams.</p>
                </div>

                <!-- Mini benefits row -->
                <div class="scf-benefits">
                    <div class="scf-benefit-item">
                        <div class="scf-benefit-icon"><i class="fa-solid fa-bell-concierge"></i></div>
                        <span>Timely<br>Delivery</span>
                    </div>
                    <div class="scf-benefit-item">
                        <div class="scf-benefit-icon"><i class="fa-solid fa-leaf"></i></div>
                        <span>Hygienic<br>&amp; Fresh</span>
                    </div>
                    <div class="scf-benefit-item">
                        <div class="scf-benefit-icon"><i class="fa-solid fa-users"></i></div>
                        <span>Custom<br>Menus</span>
                    </div>
                    <div class="scf-benefit-item">
                        <div class="scf-benefit-icon"><i class="fa-solid fa-percent"></i></div>
                        <span>Best Value<br>Assured</span>
                    </div>
                </div>

                <!-- CTA Button -->
                <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="scf-cta-btn">
                    Request Bulk Quote <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <!-- Right Column: Corporate & Group Cards -->
            <div class="serve-column">
                <!-- Card 1: PG & Hostel Owners -->
                <div class="scr-card-row">
                    <div class="scr-icon-wrap">
                        <div class="scr-icon"><i class="fa-solid fa-hotel"></i></div>
                    </div>
                    <div class="scr-text-wrap">
                        <h3>PG &amp; Hostel Owners</h3>
                        <div class="scr-divider"></div>
                        <p>Reliable daily bulk kitchen contracts.</p>
                    </div>
                    <a href="<?php echo $baseUrl; ?>services/pg-food-supply-ranchi" class="scr-btn">Contract Plans <i class="fa-solid fa-arrow-right"></i></a>
                    <div class="scr-image" style="background-image: url('<?php echo $baseUrl; ?>assets/images/serve_hostels.png')"></div>
                </div>

                <!-- Card 2: Event & Group Meals -->
                <div class="scr-card-row">
                    <div class="scr-icon-wrap">
                        <div class="scr-icon"><i class="fa-solid fa-users"></i></div>
                    </div>
                    <div class="scr-text-wrap">
                        <h3>Event &amp; Group Meals</h3>
                        <div class="scr-divider"></div>
                        <p>Perfect for events, gatherings and celebrations.</p>
                    </div>
                    <a href="<?php echo $baseUrl; ?>services/hospital-meal-supply-ranchi" class="scr-btn">Explore Options <i class="fa-solid fa-arrow-right"></i></a>
                    <div class="scr-image" style="background-image: url('<?php echo $baseUrl; ?>assets/images/serve_events.png')"></div>
                </div>

                <!-- Card 3: Companies & Organizations -->
                <div class="scr-card-row">
                    <div class="scr-icon-wrap">
                        <div class="scr-icon"><i class="fa-solid fa-building"></i></div>
                    </div>
                    <div class="scr-text-wrap">
                        <h3>Companies &amp;<br>Organizations</h3>
                        <div class="scr-divider"></div>
                        <p>Custom meal solutions for your team's everyday wellness.</p>
                    </div>
                    <a href="<?php echo $baseUrl; ?>services/corporate-lunch-ranchi" class="scr-btn">Get a Quote <i class="fa-solid fa-arrow-right"></i></a>
                    <div class="scr-image" style="background-image: url('<?php echo $baseUrl; ?>assets/images/serve_companies.png')"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 5. MONTHLY MEAL PLANS TEASER -->
<section class="plans-teaser-section">
    <!-- Decorative Background Leaf -->
    <img src="<?php echo $baseUrl; ?>assets/images/gold_leaf.svg" alt="" class="plans-decor-leaf-left">
    <div class="section-container">
        <!-- Top Teaser Row -->
        <div class="plans-teaser-row">
            <div class="plans-teaser-info">
                <span class="plans-eyebrow">
                    SUBSCRIPTIONS
                    <span class="plans-eyebrow-line"></span>
                </span>
                <h2 class="plans-title">Never Worry About<br>Meals Again<span class="dot-accent">.</span></h2>
                <p class="plans-desc">Our monthly meal plans bring home-style cooking directly to you. Freshly prepared, warm, and highly customizable. Perfect for students, bachelors, and working professionals who miss home food.</p>
                
                <ul class="plans-bullets">
                    <li>
                        <div class="bullet-icon-wrap"><i class="fa-solid fa-briefcase"></i></div>
                        <span>Pause/resume plans easily when traveling</span>
                    </li>
                    <li>
                        <div class="bullet-icon-wrap"><i class="fa-solid fa-leaf"></i></div>
                        <span>Zero added artificial colors or MSG</span>
                    </li>
                    <li>
                        <div class="bullet-icon-wrap"><i class="fa-solid fa-rotate"></i></div>
                        <span>Weekly rotating vegetable &amp; curry cycles</span>
                    </li>
                </ul>
                
                <a href="<?php echo $baseUrl; ?>monthly-meal-plans" class="plans-cta-btn">
                    Explore Monthly Plans <i class="fa-solid fa-arrow-right plans-arrow"></i>
                </a>
            </div>
            
            <!-- Mobile-only image element to showcase food plate professionally -->
            <div class="plans-mobile-visual">
                <img src="<?php echo $baseUrl; ?>assets/images/subscriptions_bg.png" alt="Premium Indian Thali" class="plans-mobile-img">
            </div>

            <!-- Empty column for desktop background visibility -->
            <div class="plans-teaser-empty"></div>
        </div>
    </div>
</section>

<!-- 6. SUBSCRIPTION PLANS GRID SECTION -->
<section class="plans-cards-section">
    <div class="section-container">
        <!-- Divider Row -->
        <div class="plans-divider-row">
            <span class="plans-divider-text">
                <svg class="eyebrow-leaf leaf-left" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M17 8C8 8 4 15 3 21C6.5 19.5 11 19 14 17C17 15 18 11.5 18 10C18 9 17.5 8.5 17 8M14 2C8.5 5.5 6 11.5 5.5 14C8 12.5 13 11 16.5 7C18 5 18.5 3 18.5 2.5C18.5 2.2 18.2 2 18 2M21 13C17.5 14.5 15.5 17.5 15 19C17.5 18 20 16 21 14C21.5 13.2 21.2 13 21 13Z" />
                </svg>
                MOST POPULAR PLANS
                <svg class="eyebrow-leaf leaf-right" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M7 8C16 8 20 15 21 21C17.5 19.5 13 19 10 17C7 15 6 11.5 6 10C6 9 6.5 8.5 7 8M10 2C15.5 5.5 18 11.5 18.5 14C16 12.5 11 11 7.5 7C6 5 5.5 3 5.5 2.5C5.5 2.2 5.8 2 6 2M3 13C6.5 14.5 8.5 17.5 9 19C6.5 18 4 16 3 14C2.5 13.2 2.8 13 3 13Z" />
                </svg>
            </span>
        </div>

        <!-- Cards Grid -->
        <div class="plans-grid">
            <!-- Card 1: Standard Veg Plan -->
            <div class="plan-card-new">
                <div class="pc-card-inner">
                    <div class="pc-image-side" style="background-image: url('<?php echo $baseUrl; ?>assets/images/veg_plan.png')">
                        <div class="pc-badge pc-badge-veg">
                            <span>MOST<br>CHOSEN</span>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div class="pc-content-side">
                        <div class="pc-header">
                            <div class="pc-icon-circle"><i class="fa-solid fa-leaf"></i></div>
                            <div class="pc-title-price">
                                <h3>Standard Veg Plan</h3>
                                <div class="pc-price-block">
                                    <span class="pc-price-original">₹2,999</span>
                                    <span class="pc-price-badge">₹2,400<span class="pc-price-period">/month</span></span>
                                    <div class="pc-meal-frequency" style="font-size: 0.8rem; font-weight: 700; color: #d49e2f; margin-top: 4px;">
                                        <i class="fa-solid fa-circle-check"></i> 2 Meals Daily (Lunch + Dinner)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="pc-desc">Healthy, low-oil everyday veg meals. Includes both Lunch &amp; Dinner. <strong>Just ₹40 per meal!</strong></p>
                        
                        <ul class="pc-features">
                            <li><i class="fa-solid fa-circle-check"></i> <strong>2 Meals a Day</strong> (Lunch &amp; Dinner)</li>
                            <li><i class="fa-solid fa-circle-check"></i> <strong>Only ₹40 per meal</strong> (Unbeatable price)</li>
                            <li><i class="fa-solid fa-circle-check"></i> Rice + 4 Chapatis + Dal + Sabzi</li>
                            <li><i class="fa-solid fa-circle-check"></i> <strong>100% Advance Payment Required</strong></li>
                            <li><i class="fa-solid fa-circle-info text-accent"></i> <strong>Self-Pickup Only</strong> (1 Person Plan)</li>
                            <li><i class="fa-solid fa-truck text-success"></i> <strong>Doorstep Delivery</strong>: Min. 5 people/subs</li>
                        </ul>

                        <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20subscribe%20to%20the%20Standard%20Veg%20Plan%20(%E2%82%B92,400/month%20for%202%20Meals%20Daily)" target="_blank" class="pc-select-btn">
                            SELECT PLAN <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div class="pc-footer-banner" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span><i class="fa-solid fa-circle-check text-success pc-footer-check"></i> Balanced Nutrition. Everyday Comfort.</span>
                    <span style="font-size: 0.72rem; font-weight: 800; color: #d49e2f;"><i class="fa-solid fa-credit-card"></i> 100% ADVANCE POLICY</span>
                </div>
            </div>

            <!-- Card 2: Standard Non-Veg Plan -->
            <div class="plan-card-new">
                <div class="pc-card-inner">
                    <div class="pc-image-side" style="background-image: url('<?php echo $baseUrl; ?>assets/images/nonveg_plan.png')">
                        <div class="pc-badge pc-badge-nonveg">
                            <span>MOST<br>LOVED</span>
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </div>
                    <div class="pc-content-side">
                        <div class="pc-header">
                            <div class="pc-icon-circle"><i class="fa-solid fa-drumstick-bite"></i></div>
                            <div class="pc-title-price">
                                <h3>Standard Non-Veg</h3>
                                <div class="pc-price-block">
                                    <span class="pc-price-original">₹3,999</span>
                                    <span class="pc-price-badge">₹3,200<span class="pc-price-period">/month</span></span>
                                    <div class="pc-meal-frequency" style="font-size: 0.8rem; font-weight: 700; color: #d49e2f; margin-top: 4px;">
                                        <i class="fa-solid fa-circle-check"></i> 2 Meals Daily (Lunch + Dinner)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="pc-desc">Protein-rich meals with authentic home-style taste. Includes both Lunch &amp; Dinner. <strong>Just ₹53 per meal!</strong></p>
                        
                        <ul class="pc-features">
                            <li><i class="fa-solid fa-circle-check"></i> <strong>2 Meals a Day</strong> (Lunch &amp; Dinner)</li>
                            <li><i class="fa-solid fa-circle-check"></i> <strong>Only ₹53 per meal</strong> (Highly competitive)</li>
                            <li><i class="fa-solid fa-circle-check"></i> Chicken/Paneer/Egg Curry + Rice/Roti</li>
                            <li><i class="fa-solid fa-circle-check"></i> <strong>100% Advance Payment Required</strong></li>
                            <li><i class="fa-solid fa-circle-info text-accent"></i> <strong>Self-Pickup Only</strong> (1 Person Plan)</li>
                            <li><i class="fa-solid fa-truck text-success"></i> <strong>Doorstep Delivery</strong>: Min. 5 people/subs</li>
                        </ul>

                        <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20subscribe%20to%20the%20Standard%20Non-Veg%20Plan%20(%E2%82%B93,200/month%20for%202%20Meals%20Daily)" target="_blank" class="pc-select-btn">
                            SELECT PLAN <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div class="pc-footer-banner" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span><i class="fa-solid fa-circle-check text-success pc-footer-check"></i> Wholesome Ingredients. Delicious Home-Style.</span>
                    <span style="font-size: 0.72rem; font-weight: 800; color: #d49e2f;"><i class="fa-solid fa-credit-card"></i> 100% ADVANCE POLICY</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 6. BULK ORDERS SPOTLIGHT (PREMIUM LIGHT THEME) -->
<section class="bulk-spotlight-new">
    <div class="section-container">
        <div class="bulk-spotlight-content text-center">
            <span class="bulk-eyebrow">
                <svg class="bulk-wing wing-left" width="45" height="15" viewBox="0 0 45 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 7.5H10" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M20 7.5C20 7.5 17 3.5 13 3.5C9 3.5 10 7.5 10 7.5" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M20 7.5C20 7.5 17 11.5 13 11.5C9 11.5 10 7.5 10 7.5" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="5" cy="7.5" r="2.5" fill="#d49e2f"/>
                </svg>
                Institutional Partnerships
                <svg class="bulk-wing wing-right" width="45" height="15" viewBox="0 0 45 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.5H35" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M25 7.5C25 7.5 28 3.5 32 3.5C36 3.5 35 7.5 35 7.5" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M25 7.5C25 7.5 28 11.5 32 11.5C36 11.5 35 7.5 35 7.5" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="40" cy="7.5" r="2.5" fill="#d49e2f"/>
                </svg>
            </span>
            
            <h2 class="bulk-title">Feeding Teams, Institutions &amp; Events — At Scale<span class="dot-accent">.</span></h2>
            <p class="bulk-desc">From daily office lunches to large training sessions and hostels, we supply fresh, hygienic meals in bulk — reliably, on time, every time.</p>
            
            <div class="bulk-subheadings">
                <span>Corporate ESG &amp; Welfare</span>
                <span class="subheading-dot">•</span>
                <span>Offices &amp; Workspaces</span>
                <span class="subheading-dot">•</span>
                <span>Coaching Hubs &amp; Institutes</span>
                <span class="subheading-dot">•</span>
                <span>Hostels &amp; Colleges</span>
                <span class="subheading-dot">•</span>
                <span>Events &amp; Functions</span>
            </div>
            
            <!-- 5 Cards Grid -->
            <div class="bulk-grid-new">
                <!-- Card 1 -->
                <div class="bulk-card-new">
                    <div class="bc-icon-wrap">
                        <i class="fa-solid fa-hotel"></i>
                    </div>
                    <h3>Bulk Meals <br>Made Simple</h3>
                    <div class="bc-divider"></div>
                    <p>Large volumes handled with ease and efficiency.</p>
                </div>
                <!-- Card 2 -->
                <div class="bulk-card-new">
                    <div class="bc-icon-wrap">
                        <i class="fa-solid fa-shield-heart"></i>
                    </div>
                    <h3>Hygienic &amp; <br>Safe</h3>
                    <div class="bc-divider"></div>
                    <p>Strict hygiene and quality standards every day.</p>
                </div>
                <!-- Card 3 -->
                <div class="bulk-card-new">
                    <div class="bc-icon-wrap">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <h3>On-Time <br>Delivery</h3>
                    <div class="bc-divider"></div>
                    <p>Punctual delivery you can count on, every time.</p>
                </div>
                <!-- Card 4 -->
                <div class="bulk-card-new">
                    <div class="bc-icon-wrap">
                        <i class="fa-solid fa-plate-wheat"></i>
                    </div>
                    <h3>Fresh &amp; <br>Homestyle</h3>
                    <div class="bc-divider"></div>
                    <p>Nutritious, homestyle meals that people love.</p>
                </div>
                <!-- Card 5 -->
                <div class="bulk-card-new">
                    <div class="bc-icon-wrap">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <h3>Custom Plans <br>For You</h3>
                    <div class="bc-divider"></div>
                    <p>Flexible plans tailored to your needs and preferences.</p>
                </div>
            </div>
            
            <!-- Actions -->
            <div class="bulk-actions-new">
                <a href="<?php echo $baseUrl; ?>bulk-orders" class="btn bulk-btn-gold">
                    <i class="fa-solid fa-clipboard-list"></i> Get a Bulk Quote <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="https://wa.me/919934123456?text=Hi,%20I'd%20like%20to%20discuss%20bulk%20orders/institutional%20partnerships" target="_blank" class="btn bulk-btn-outline">
                    <i class="fa-solid fa-phone"></i> Discuss Your Needs <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- 7. TAKEAWAY TEASER (PREMIUM RE-DESIGN) -->
<section class="takeaway-section-wrap">
    <div class="section-container">
        <div class="takeaway-card">
            <div class="takeaway-content-side">
                <div class="takeaway-eyebrow-wrap">
                    <i class="fa-solid fa-moped takeaway-scooter-icon"></i>
                    <span class="takeaway-eyebrow">ON THE GO</span>
                </div>
                
                <h2 class="takeaway-title">Craving Home Food <br>But <span class="text-gold">Short On Time?</span></h2>
                
                <p class="takeaway-desc">Get wholesome, home-style meals delivered fresh to your doorstep. Whether you're a student, a busy professional, or a family managing your day — we've got you covered.</p>
                
                <ul class="takeaway-features">
                    <li>
                        <div class="tf-icon-circle">
                            <i class="fa-solid fa-clock"></i>
                        </div>
                        <span>Meals in Minutes</span>
                    </li>
                    <li>
                        <div class="tf-icon-circle">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <span>Doorstep Delivery</span>
                    </li>
                    <li>
                        <div class="tf-icon-circle">
                            <i class="fa-solid fa-bowl-food"></i>
                        </div>
                        <span>Fresh. Hygienic. Home-Style.</span>
                    </li>
                </ul>
                
                <a href="<?php echo $baseUrl; ?>takeaway" class="takeaway-btn">
                    See Takeaway Options <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
            
            <div class="takeaway-image-side">
                <!-- The image: takeaway.png -->
                <div class="takeaway-img-crop" style="background-image: url('<?php echo $baseUrl; ?>assets/images/takeaway.png')"></div>
                
                <!-- The Gold Border S-Curve Line overlay -->
                <div class="takeaway-curve-overlay">
                    <svg class="takeaway-curve-svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
                        <path d="M 15,0 C -5,35 -5,65 15,100" vector-effect="non-scaling-stroke" stroke="#d49e2f" stroke-width="2.5" fill="none"/>
                    </svg>
                </div>
                
                <!-- The Leaf Sprout decoration on the curve -->
                <div class="takeaway-leaf-sprout">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 30C10 30 14 20 22 18C30 16 35 10 35 10" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                        <!-- Leaves -->
                        <path d="M15 22C15 22 13 16 8 16C3 16 6 22 6 22" fill="#80a790" stroke="#0f2b18" stroke-width="1" stroke-linejoin="round"/>
                        <path d="M22 15C22 15 23 9 28 9C33 9 30 15 30 15" fill="#80a790" stroke="#0f2b18" stroke-width="1" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                <!-- Floating Badge Overlay -->
                <div class="takeaway-badge-overlay">
                    <div class="tbo-icon">
                        <i class="fa-solid fa-mug-hot"></i>
                    </div>
                    <div class="tbo-text">
                        <h4>Freshly Cooked</h4>
                        <p>With Love &amp; Care</p>
                    </div>
                    <i class="fa-solid fa-heart tbo-heart"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Responsive ClipPath Definition -->
    <svg width="0" height="0" style="position: absolute;">
        <defs>
            <clipPath id="takeaway-clip" clipPathUnits="objectBoundingBox">
                <path d="M 0.15,0 C -0.05,0.35 -0.05,0.65 0.15,1 L 1,1 L 1,0 Z"/>
            </clipPath>
        </defs>
    </svg>
</section>

<!-- 8. AREAS WE SERVE (PREMIUM RE-DESIGN) -->
<section id="areas-section" class="areas-section-new">
    <div class="section-container">
        <div class="areas-header text-center">
            <div class="areas-eyebrow-wrap">
                <svg class="eyebrow-wing-left" width="24" height="8" viewBox="0 0 24 8" fill="none"><path d="M0,4 L18,4 M18,4 L14,1 M18,4 L14,7" stroke="#d49e2f" stroke-width="1.5"/><circle cx="21" cy="4" r="2" fill="#d49e2f"/></svg>
                <span class="areas-eyebrow">PROUD LOCAL BRAND</span>
                <svg class="eyebrow-wing-right" width="24" height="8" viewBox="0 0 24 8" fill="none"><path d="M24,4 L6,4 M6,4 L10,1 M6,4 L10,7" stroke="#d49e2f" stroke-width="1.5"/><circle cx="3" cy="4" r="2" fill="#d49e2f"/></svg>
            </div>
            <h2 class="areas-title">Serving Every <br>Corner of <span class="text-gold">Ranchi</span></h2>
            <div class="areas-divider">
                <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                    <path d="M0,6 L22,6 M38,6 L60,6" stroke="#d49e2f" stroke-width="1.5"/>
                    <path d="M30,1 L26,6 L30,11 L34,6 Z" fill="#0f2b18" stroke="#d49e2f" stroke-width="1"/>
                </svg>
            </div>
            <p class="areas-desc">From hotels to homes, offices to events — we deliver fresh, home-style meals across Ranchi with love, care &amp; on-time service.</p>
        </div>
        
        <!-- Horizontal Info Bar -->
        <div class="areas-info-bar">
            <div class="aib-col">
                <div class="aib-icon-wrap">
                    <div class="aib-icon"><i class="fa-solid fa-bell-concierge"></i></div>
                </div>
                <div class="aib-text">
                    <h3>Fresh &amp; Hygienic</h3>
                    <p>Home-style meals cooked fresh daily</p>
                </div>
            </div>
            <div class="aib-col">
                <div class="aib-icon-wrap">
                    <div class="aib-icon"><i class="fa-solid fa-motorcycle"></i></div>
                </div>
                <div class="aib-text">
                    <h3>On-Time Delivery</h3>
                    <p>Punctual delivery you can count on</p>
                </div>
            </div>
            <div class="aib-col">
                <div class="aib-icon-wrap">
                    <div class="aib-icon"><i class="fa-solid fa-users"></i></div>
                </div>
                <div class="aib-text">
                    <h3>Bulk &amp; Subscription</h3>
                    <p>Ideal for offices, hostels, events &amp; homes</p>
                </div>
            </div>
            <div class="aib-col">
                <div class="aib-icon-wrap">
                    <div class="aib-icon"><i class="fa-solid fa-heart"></i></div>
                </div>
                <div class="aib-text">
                    <h3>Made with Love</h3>
                    <p>Every meal is prepared with care &amp; passion</p>
                </div>
            </div>
        </div>
        
        <!-- Sub-Header for Delivery Locations -->
        <div class="locations-subheader text-center">
            <div class="ls-icon"><i class="fa-solid fa-location-dot"></i></div>
            <div class="ls-text-wrap">
                <span class="ls-line"></span>
                <span class="ls-text">OUR DELIVERY LOCATIONS</span>
                <span class="ls-line"></span>
            </div>
        </div>
        
        <!-- Locations Grid -->
        <div class="locations-grid-new">
            <?php foreach ($areas as $slug => $area): ?>
                <a href="<?php echo $baseUrl; ?>areas/<?php echo $slug; ?>" class="location-card-new">
                    <div class="lc-content">
                        <i class="fa-solid fa-location-dot lc-pin"></i>
                        <span class="lc-name"><?php echo htmlspecialchars($area['name']); ?></span>
                    </div>
                    <i class="fa-solid fa-chevron-right lc-arrow"></i>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
    
    <!-- Bottom Decorative Location Pin -->
    <div class="areas-bottom-decorator">
        <div class="decor-pin">
            <i class="fa-solid fa-location-dot"></i>
            <span class="decor-ring-1"></span>
            <span class="decor-ring-2"></span>
        </div>
    </div>
</section>

<!-- 9. GALLERY VISUAL STORY -->
<section class="gallery-section-new">
    <div class="section-container">

        <!-- Centred editorial header -->
        <div class="gallery-header-wrap">
            <div class="gallery-eyebrow-wrap">
                <svg width="24" height="8" viewBox="0 0 24 8" fill="none"><path d="M0,4 L18,4 M18,4 L14,1 M18,4 L14,7" stroke="#d49e2f" stroke-width="1.5"/><circle cx="21" cy="4" r="2" fill="#d49e2f"/></svg>
                <span class="gallery-eyebrow">OUR VISUAL STORY</span>
                <svg width="24" height="8" viewBox="0 0 24 8" fill="none"><path d="M24,4 L6,4 M6,4 L10,1 M6,4 L10,7" stroke="#d49e2f" stroke-width="1.5"/><circle cx="3" cy="4" r="2" fill="#d49e2f"/></svg>
            </div>
            <h2 class="gallery-title">Inside Our Kitchen &amp; <span class="text-gold">Plates</span></h2>
            <div class="gallery-divider">
                <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                    <path d="M0,6 L22,6 M38,6 L60,6" stroke="#d49e2f" stroke-width="1.5"/>
                    <path d="M30,1 L26,6 L30,11 L34,6 Z" fill="#0f2b18" stroke="#d49e2f" stroke-width="1"/>
                </svg>
            </div>
            <p class="gallery-desc">A sneak peek of the premium hygiene standards and authentic taste we deliver daily.</p>
        </div>

        <!-- TRUE BENTO GRID -->
        <div class="gallery-bento-grid">

            <!-- A: WIDE kitchen hero (col 1-2, row 1) -->
            <div class="gb-cell gb-cell-a">
                <img src="<?php echo $baseUrl; ?>assets/images/gallery_kitchen.png" alt="Our clean commercial kitchen">
                <div class="hygiene-seal">
                    <svg viewBox="0 0 100 100" class="seal-text-svg">
                        <path id="seal-path-b" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                        <text class="seal-text"><textPath href="#seal-path-b" startOffset="0%">• HYGIENE FIRST • QUALITY ALWAYS </textPath></text>
                    </svg>
                    <div class="seal-icon"><i class="fa-solid fa-leaf"></i></div>
                </div>
                <div class="gb-img-label">Live Kitchen</div>
            </div>

            <!-- B: packed boxes (col 3, row 1) -->
            <div class="gb-cell gb-cell-b">
                <img src="<?php echo $baseUrl; ?>assets/images/gallery_boxes.png" alt="Packed tiffin meal boxes">
                <div class="gb-img-label">Meal Boxes</div>
            </div>

            <!-- C: STAT card (col 4, row 1-2) -->
            <div class="gb-cell gb-cell-c gb-stat-card">
                <div class="gb-stat-inner">
                    <span class="gb-stat-num">25<sup>+</sup></span>
                    <span class="gb-stat-label">Years of<br>Cooking Love</span>
                    <div class="gb-stat-divider"></div>
                    <ul class="gb-pill-list">
                        <li><i class="fa-solid fa-leaf"></i> Fresh Ingredients</li>
                        <li><i class="fa-solid fa-shield-halved"></i> Hygienic Prep</li>
                        <li><i class="fa-solid fa-bowl-food"></i> Home-Style Taste</li>
                        <li><i class="fa-solid fa-truck"></i> On-Time Delivery</li>
                    </ul>
                    <a href="<?php echo $baseUrl; ?>gallery" class="gallery-action-btn">
                        <span>View Gallery</span>
                        <span class="gab-arrow"><i class="fa-solid fa-arrow-right"></i></span>
                    </a>
                </div>
            </div>

            <!-- D: food prep (col 1, row 2) -->
            <div class="gb-cell gb-cell-d">
                <img src="<?php echo $baseUrl; ?>assets/images/gallery_prep.png" alt="Hygienic food preparation">
                <div class="gb-img-label">Hygienic Prep</div>
            </div>

            <!-- E: delivery bags (col 2-3, row 2) -->
            <div class="gb-cell gb-cell-e">
                <img src="<?php echo $baseUrl; ?>assets/images/gallery_pack.png" alt="Delivery bags">
                <div class="gb-img-label">Delivery Ready</div>
            </div>

        </div><!-- /.gallery-bento-grid -->

    </div>
</section>


<!-- 10. TESTIMONIALS (PREMIUM MARQUEE RE-DESIGN) -->
<section class="testimonials-section-new">
    <div class="testimonials-header-container text-center">
        <div class="testimonials-eyebrow-wrap">
            <svg class="eyebrow-wing-left" width="24" height="8" viewBox="0 0 24 8" fill="none"><path d="M0,4 L18,4 M18,4 L14,1 M18,4 L14,7" stroke="#d49e2f" stroke-width="1.5"/><circle cx="21" cy="4" r="2" fill="#d49e2f"/></svg>
            <span class="testimonials-eyebrow">REVIEWS</span>
            <svg class="eyebrow-wing-right" width="24" height="8" viewBox="0 0 24 8" fill="none"><path d="M24,4 L6,4 M6,4 L10,1 M6,4 L10,7" stroke="#d49e2f" stroke-width="1.5"/><circle cx="3" cy="4" r="2" fill="#d49e2f"/></svg>
        </div>
        <h2 class="testimonials-title">What Our Regulars Say</h2>
        
        <div class="testimonials-divider">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                <path d="M0,6 L22,6 M38,6 L60,6" stroke="#d49e2f" stroke-width="1.5"/>
                <path d="M30,1 L26,6 L30,11 L34,6 Z" fill="#0f2b18" stroke="#d49e2f" stroke-width="1"/>
            </svg>
        </div>
        
        <p class="testimonials-subtitle">Real words from students, corporate administrators, and PG owners in Ranchi.</p>
    </div>

    <!-- Marquee Row 1: Left to Right (LTR) -->
    <div class="testimonials-marquee-wrap marquee-ltr">
        <div class="marquee-track">
            <!-- Group 1 -->
            <div class="marquee-group">
                <!-- Card 1 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-blue">A</div>
                            <div class="gr-user-meta">
                                <h4>Aman Kumar</h4>
                                <span>IAS Aspirant, Lalpur</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 week ago</span>
                    </div>
                    <p class="gr-text">"Living in Lalpur for UPSC coaching was tough until I subscribed to Student's Mess. The veg meals are light on the stomach, just like mother's cooking, and they never skip delivery."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>
                
                <!-- Card 2 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-green">S</div>
                            <div class="gr-user-meta">
                                <h4>S. N. Sahay</h4>
                                <span>PG Owner, Kanke</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">2 weeks ago</span>
                    </div>
                    <p class="gr-text">"We contracted Student's Mess to manage daily dinners for our 80 PG boarders in Kanke. The compliance with hygiene standards is stellar, and we save hours of overhead food management."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-orange">R</div>
                            <div class="gr-user-meta">
                                <h4>Rajesh Gupta</h4>
                                <span>Branch Manager, Morabadi</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">3 weeks ago</span>
                    </div>
                    <p class="gr-text">"Punctual and consistent. Finding quality food for lunch at office was a struggle. Their tiffin box is spill-proof, rotis are soft, and dal is always fresh. Outstanding!"</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-purple">S</div>
                            <div class="gr-user-meta">
                                <h4>Sunita Kumari</h4>
                                <span>Bank Officer, Lalpur</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 month ago</span>
                    </div>
                    <p class="gr-text">"I love their daily changing menu. It never feels heavy or boring. It is cooked with minimal oil, making it perfect for daily corporate lunch boxes. Highly recommended!"</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-red">A</div>
                            <div class="gr-user-meta">
                                <h4>Akash Roy</h4>
                                <span>Student, St. Xavier's</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 month ago</span>
                    </div>
                    <p class="gr-text">"Best food delivery service in Ranchi. Affordable monthly plans, clean packaging, and great taste. The special Sunday chicken curry is something I look forward to."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>
            </div>
            
            <!-- Group 2 (Duplicate for seamless loop) -->
            <div class="marquee-group" aria-hidden="true">
                <!-- Card 1 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-blue">A</div>
                            <div class="gr-user-meta">
                                <h4>Aman Kumar</h4>
                                <span>IAS Aspirant, Lalpur</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 week ago</span>
                    </div>
                    <p class="gr-text">"Living in Lalpur for UPSC coaching was tough until I subscribed to Student's Mess. The veg meals are light on the stomach, just like mother's cooking, and they never skip delivery."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>
                
                <!-- Card 2 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-green">S</div>
                            <div class="gr-user-meta">
                                <h4>S. N. Sahay</h4>
                                <span>PG Owner, Kanke</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">2 weeks ago</span>
                    </div>
                    <p class="gr-text">"We contracted Student's Mess to manage daily dinners for our 80 PG boarders in Kanke. The compliance with hygiene standards is stellar, and we save hours of overhead food management."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-orange">R</div>
                            <div class="gr-user-meta">
                                <h4>Rajesh Gupta</h4>
                                <span>Branch Manager, Morabadi</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">3 weeks ago</span>
                    </div>
                    <p class="gr-text">"Punctual and consistent. Finding quality food for lunch at office was a struggle. Their tiffin box is spill-proof, rotis are soft, and dal is always fresh. Outstanding!"</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-purple">S</div>
                            <div class="gr-user-meta">
                                <h4>Sunita Kumari</h4>
                                <span>Bank Officer, Lalpur</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 month ago</span>
                    </div>
                    <p class="gr-text">"I love their daily changing menu. It never feels heavy or boring. It is cooked with minimal oil, making it perfect for daily corporate lunch boxes. Highly recommended!"</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-red">A</div>
                            <div class="gr-user-meta">
                                <h4>Akash Roy</h4>
                                <span>Student, St. Xavier's</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 month ago</span>
                    </div>
                    <p class="gr-text">"Best food delivery service in Ranchi. Affordable monthly plans, clean packaging, and great taste. The special Sunday chicken curry is something I look forward to."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Marquee Row 2: Right to Left (RTL) -->
    <div class="testimonials-marquee-wrap marquee-rtl">
        <div class="marquee-track">
            <!-- Group 1 -->
            <div class="marquee-group">
                <!-- Card 1 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-orange">D</div>
                            <div class="gr-user-meta">
                                <h4>Dr. R. Pathak</h4>
                                <span>HR Lead, Tech Corp</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">3 days ago</span>
                    </div>
                    <p class="gr-text">"Ordered 120 chicken and veg meals for our annual sales meet at Morabadi. Complete setups, clean plates, and delicious dehati chicken curry. Highly recommend."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-purple">A</div>
                            <div class="gr-user-meta">
                                <h4>Anjali Sharma</h4>
                                <span>Student, BIT Mesra</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">5 days ago</span>
                    </div>
                    <p class="gr-text">"As a hosteller, I missed home food constantly. Student's Mess has been a lifesaver. The food is hygienic, affordable, and menu changes daily. The kheer is amazing!"</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-blue">V</div>
                            <div class="gr-user-meta">
                                <h4>Vikram Singh</h4>
                                <span>PG Resident, Bariatu</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 week ago</span>
                    </div>
                    <p class="gr-text">"Clean containers, hot food, and very polite delivery guys. Their chicken thali is a treat. It's the only mess food that doesn't make you feel sick after a week."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-green">P</div>
                            <div class="gr-user-meta">
                                <h4>Priyanshu Raj</h4>
                                <span>UPSC Candidate, Lalpur</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">2 weeks ago</span>
                    </div>
                    <p class="gr-text">"Excellent food quality. They understand the student budget and health needs perfectly. The delivery is always on time, even during heavy Ranchi rains."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-red">R</div>
                            <div class="gr-user-meta">
                                <h4>Rakesh Mishra</h4>
                                <span>Hostel Warden, Kokar</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 month ago</span>
                    </div>
                    <p class="gr-text">"We switched our hostel mess to Student's Mess bulk service and it was the best decision. Student complaints about quality have dropped to zero. The hygiene is excellent."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>
            </div>
            
            <!-- Group 2 (Duplicate for seamless loop) -->
            <div class="marquee-group" aria-hidden="true">
                <!-- Card 1 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-orange">D</div>
                            <div class="gr-user-meta">
                                <h4>Dr. R. Pathak</h4>
                                <span>HR Lead, Tech Corp</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">3 days ago</span>
                    </div>
                    <p class="gr-text">"Ordered 120 chicken and veg meals for our annual sales meet at Morabadi. Complete setups, clean plates, and delicious dehati chicken curry. Highly recommend."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-purple">A</div>
                            <div class="gr-user-meta">
                                <h4>Anjali Sharma</h4>
                                <span>Student, BIT Mesra</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">5 days ago</span>
                    </div>
                    <p class="gr-text">"As a hosteller, I missed home food constantly. Student's Mess has been a lifesaver. The food is hygienic, affordable, and menu changes daily. The kheer is amazing!"</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-blue">V</div>
                            <div class="gr-user-meta">
                                <h4>Vikram Singh</h4>
                                <span>PG Resident, Bariatu</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 week ago</span>
                    </div>
                    <p class="gr-text">"Clean containers, hot food, and very polite delivery guys. Their chicken thali is a treat. It's the only mess food that doesn't make you feel sick after a week."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-green">P</div>
                            <div class="gr-user-meta">
                                <h4>Priyanshu Raj</h4>
                                <span>UPSC Candidate, Lalpur</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">2 weeks ago</span>
                    </div>
                    <p class="gr-text">"Excellent food quality. They understand the student budget and health needs perfectly. The delivery is always on time, even during heavy Ranchi rains."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="google-review-card">
                    <div class="gr-card-header">
                        <div class="gr-user-info">
                            <div class="gr-avatar avatar-red">R</div>
                            <div class="gr-user-meta">
                                <h4>Rakesh Mishra</h4>
                                <span>Hostel Warden, Kokar</span>
                            </div>
                        </div>
                        <img class="gr-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20">
                    </div>
                    <div class="gr-rating">
                        <div class="gr-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <span class="gr-time">1 month ago</span>
                    </div>
                    <p class="gr-text">"We switched our hostel mess to Student's Mess bulk service and it was the decision. Student complaints about quality have dropped to zero. The hygiene is excellent."</p>
                    <div class="gr-footer">
                        <i class="fa-solid fa-circle-check"></i> Verified Google Review
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Unified Google Summary Badge inside the section -->
    <div class="testimonials-google-badge text-center">
        <div class="google-rating-summary">
            <span class="google-logo">
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
            </span>
            <div class="google-stars">
                <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-alt"></i>
            </div>
            <span class="rating-text"><strong>4.8 / 5.0</strong> based on 320+ verified Google ratings</span>
        </div>
        <a href="https://search.google.com/local/writereview" target="_blank" class="gr-write-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            Write a Google Review
        </a>
    </div>
</section>

<!-- 11. LEAD CAPTURE & CALLBACK SECTION -->
<section id="lead-form-section" class="home-lead-section bg-light" style="padding: var(--space-3xl) 0; border-top: 1px solid rgba(197, 155, 39, 0.15); border-bottom: 1px solid rgba(197, 155, 39, 0.15);">
    <div class="section-container">
        <div class="contact-page-grid">
            
            <!-- Left Panel: Trust & Value Proposition -->
            <div class="contact-details-panel">
                <span class="section-eyebrow">FAST & EASY SIGN UP</span>
                <h2>Get Ranchi's Most Reliable Meals</h2>
                <p>Join hundreds of students and working professionals who trust us daily. Fill out the quick form to request a callback or book your trial meal.</p>
                
                <div class="contact-info-cards" style="margin-top: var(--space-xl);">
                    <div class="info-card-item" style="background: var(--white); padding: var(--space-md); border-radius: var(--radius-md); border: 1.5px solid rgba(197, 155, 39, 0.15); box-shadow: var(--shadow-sm); transition: transform 0.3s;">
                        <div class="card-icon" style="color: var(--accent); font-size: 1.5rem; margin-bottom: var(--space-xs);"><i class="fa-solid fa-bolt"></i></div>
                        <div class="card-text">
                            <h4 style="margin: 0; font-size: 1rem; color: var(--primary);">Instant Activation</h4>
                            <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--gray-medium);">Activate your monthly subscription in under 2 hours.</p>
                        </div>
                    </div>
                    
                    <div class="info-card-item" style="background: var(--white); padding: var(--space-md); border-radius: var(--radius-md); border: 1.5px solid rgba(197, 155, 39, 0.15); box-shadow: var(--shadow-sm); transition: transform 0.3s;">
                        <div class="card-icon" style="color: var(--accent); font-size: 1.5rem; margin-bottom: var(--space-xs);"><i class="fa-solid fa-indian-rupee-sign"></i></div>
                        <div class="card-text">
                            <h4 style="margin: 0; font-size: 1rem; color: var(--primary);">Unbeatable Price</h4>
                            <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--gray-medium);">Get two meals delivered daily starting at just ₹40/meal.</p>
                        </div>
                    </div>
                    
                    <div class="info-card-item" style="background: var(--white); padding: var(--space-md); border-radius: var(--radius-md); border: 1.5px solid rgba(197, 155, 39, 0.15); box-shadow: var(--shadow-sm); transition: transform 0.3s;">
                        <div class="card-icon" style="color: var(--accent); font-size: 1.5rem; margin-bottom: var(--space-xs);"><i class="fa-solid fa-credit-card"></i></div>
                        <div class="card-text">
                            <h4 style="margin: 0; font-size: 1rem; color: var(--primary);">100% Advance Policy</h4>
                            <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--gray-medium);">Strict advance payment policy for seamless service.</p>
                        </div>
                    </div>
                    
                    <div class="info-card-item" style="background: var(--white); padding: var(--space-md); border-radius: var(--radius-md); border: 1.5px solid rgba(197, 155, 39, 0.15); box-shadow: var(--shadow-sm); transition: transform 0.3s;">
                        <div class="card-icon" style="color: var(--accent); font-size: 1.5rem; margin-bottom: var(--space-xs);"><i class="fa-solid fa-pause"></i></div>
                        <div class="card-text">
                            <h4 style="margin: 0; font-size: 1rem; color: var(--primary);">Flexible Pausing</h4>
                            <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--gray-medium);">Pause or skip anytime with 12 hours' notice.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right Panel: Callback Lead Form -->
            <div class="contact-form-wrapper">
                <span class="section-eyebrow">QUICK SUBMISSION</span>
                <h2>Request a Callback</h2>
                <p>Fill out the form below and we will contact you shortly.</p>
                
                <form action="<?php echo $baseUrl; ?>submit-contact" method="POST" class="contact-form">
                    <!-- Honeypot anti-spam check -->
                    <input type="text" name="website_spamtrap" style="display:none !important;" tabindex="-1" autocomplete="off">
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="home_lead_name">Your Name *</label>
                            <input type="text" id="home_lead_name" name="name" required placeholder="E.g. Rohan Sharma">
                        </div>
                        <div class="form-group">
                            <label for="home_lead_phone">Phone Number *</label>
                            <input type="tel" id="home_lead_phone" name="phone" required placeholder="E.g. 99341 23456">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="home_lead_subject">Interested In *</label>
                        <select id="home_lead_subject" name="subject" required>
                            <option value="Monthly Plan Subscription">Subscribe to Monthly Plan (2 Meals/day)</option>
                            <option value="Bulk Order Query">Bulk Catering Services</option>
                            <option value="Takeaway Order">Takeaway Order</option>
                            <option value="General Query">General Inquiry / Callback Request</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="home_lead_message">Message or Delivery Address *</label>
                        <textarea id="home_lead_message" name="message" rows="3" required placeholder="Tell us your area/address or any queries..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Send Request</button>
                </form>
            </div>
            
        </div>
    </div>
</section>

<!-- 12. FAQ ACCORDION -->
<section class="faq-section">
    <div class="section-container">
        <div class="faq-header text-center">
            <div class="faq-eyebrow-wrap">
                <svg class="eyebrow-leaf-left" width="36" height="12" viewBox="0 0 36 12" fill="none">
                    <path d="M36,6 C24,6 12,6 0,6" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M24,6 C20,2 15,2 12,6 C15,10 20,10 24,6 Z" fill="#d49e2f"/>
                    <path d="M12,6 C8,2 3,2 0,6 C3,10 8,10 12,6 Z" fill="#d49e2f"/>
                    <circle cx="28" cy="3" r="1.5" fill="#d49e2f"/>
                    <circle cx="16" cy="9" r="1.5" fill="#d49e2f"/>
                </svg>
                <span class="faq-eyebrow">Queries</span>
                <svg class="eyebrow-leaf-right" width="36" height="12" viewBox="0 0 36 12" fill="none" style="transform: scaleX(-1);">
                    <path d="M36,6 C24,6 12,6 0,6" stroke="#d49e2f" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M24,6 C20,2 15,2 12,6 C15,10 20,10 24,6 Z" fill="#d49e2f"/>
                    <path d="M12,6 C8,2 3,2 0,6 C3,10 8,10 12,6 Z" fill="#d49e2f"/>
                    <circle cx="28" cy="3" r="1.5" fill="#d49e2f"/>
                    <circle cx="16" cy="9" r="1.5" fill="#d49e2f"/>
                </svg>
            </div>
            <h2 class="faq-title">Frequently Asked Questions</h2>
            <p class="faq-subtitle">Got questions? We have answers. Clear information on meal cycles and logistics.</p>
        </div>
        
        <div class="faq-accordion-premium">
            <!-- Item 1 -->
            <div class="faq-item">
                <div class="faq-icon-col">
                    <div class="faq-icon-badge">
                        <i class="fa-solid fa-motorcycle"></i>
                    </div>
                </div>
                <div class="faq-content-col">
                    <button class="faq-question">
                        <span class="faq-q-text">Do you deliver food or is it takeaway/dine-in only?</span>
                    </button>
                    <div class="faq-answer">
                        <p>Monthly subscriptions for a <strong>single person (1 subscriber) are strictly active on a self-pickup basis</strong> from our kitchen counter in Hindpiri. <strong>Doorstep delivery is only available for a minimum of five (5) subscriptions/people</strong> in the same area or building, or for bulk/institutional contract deliveries.</p>
                    </div>
                </div>
                <div class="faq-toggle-col">
                    <div class="faq-toggle-btn">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            
            <!-- Item 2 -->
            <div class="faq-item">
                <div class="faq-icon-col">
                    <div class="faq-icon-badge">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                </div>
                <div class="faq-content-col">
                    <button class="faq-question">
                        <span class="faq-q-text">What is included in a monthly meal plan?</span>
                    </button>
                    <div class="faq-answer">
                        <p>A standard daily tiffin includes 1 cup Basmati rice, 4 fresh whole-wheat rotis, 1 container dal, 1 seasonal vegetable curry, fresh salad, and traditional pickle. Menus rotate daily.</p>
                    </div>
                </div>
                <div class="faq-toggle-col">
                    <div class="faq-toggle-btn">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            
            <!-- Item 3 -->
            <div class="faq-item">
                <div class="faq-icon-col">
                    <div class="faq-icon-badge">
                        <i class="fa-solid fa-pause"></i>
                    </div>
                </div>
                <div class="faq-content-col">
                    <button class="faq-question">
                        <span class="faq-q-text">Can I pause or skip meals in a monthly plan?</span>
                    </button>
                    <div class="faq-answer">
                        <p>Yes. Students and professionals can pause tiffins with a 12-hour advance notice via WhatsApp. The billing cycle will extend by the skipped days, ensuring you only pay for what you consume.</p>
                    </div>
                </div>
                <div class="faq-toggle-col">
                    <div class="faq-toggle-btn">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            
            <!-- Item 4 -->
            <div class="faq-item">
                <div class="faq-icon-col">
                    <div class="faq-icon-badge">
                        <i class="fa-solid fa-users"></i>
                    </div>
                </div>
                <div class="faq-content-col">
                    <button class="faq-question">
                        <span class="faq-q-text">Do you cater to bulk orders for corporate offices or social events?</span>
                    </button>
                    <div class="faq-answer">
                        <p>Yes, bulk catering is one of our primary specialties. We serve corporate meetings, offices, school campuses, training centers, construction teams, and private events with custom packaging and menu selections.</p>
                    </div>
                </div>
                <div class="faq-toggle-col">
                    <div class="faq-toggle-btn">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            
            <!-- Item 5 -->
            <div class="faq-item">
                <div class="faq-icon-col">
                    <div class="faq-icon-badge">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                </div>
                <div class="faq-content-col">
                    <button class="faq-question">
                        <span class="faq-q-text">Is the food hygienically prepared?</span>
                    </button>
                    <div class="faq-answer">
                        <p>Yes, our commercial kitchen maintains rigorous cleanliness checks. We cook in small, manageable batches, use fresh filtered water, and follow temperature regulation cycles to ensure safety and freshness.</p>
                    </div>
                </div>
                <div class="faq-toggle-col">
                    <div class="faq-toggle-btn">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            
            <!-- Item 6 -->
            <div class="faq-item">
                <div class="faq-icon-col">
                    <div class="faq-icon-badge">
                        <i class="fa-solid fa-credit-card"></i>
                    </div>
                </div>
                <div class="faq-content-col">
                    <button class="faq-question">
                        <span class="faq-q-text">What is your payment policy? Do you allow post-payments?</span>
                    </button>
                    <div class="faq-answer">
                        <p>We operate strictly on a <strong>100% advance payment policy</strong> for all monthly subscription plans to ensure seamless ingredient procurement and kitchen operations. We accept UPI, Net Banking, and cash.</p>
                    </div>
                </div>
                <div class="faq-toggle-col">
                    <div class="faq-toggle-btn">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 13. FINAL CALL TO ACTION -->
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
            
            <h2 class="cta-title">Ready for Healthy, <span class="text-accent">Home Style Meals?</span></h2>
            <p class="cta-subtitle">Join hundreds of satisfied students and professionals today.<br>Subscribe or inquire for bulk plans.</p>
            
            <div class="cta-buttons">
                <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="cta-btn btn-gold-filled">
                    <i class="fa-solid fa-file-invoice"></i> Request Bulk Quote
                </a>
                <a href="tel:+919934123456" class="cta-btn btn-white-outlined">
                    <i class="fa-solid fa-phone"></i> Call Us Now
                </a>
            </div>
        </div>
    </div>
</section>
