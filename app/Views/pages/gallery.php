<?php
// Gallery View
// Available variables: $baseUrl
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Our Kitchen</span>
        <h1 class="inner-hero-title">Gallery & Kitchen Tour</h1>
        <p class="inner-hero-subtitle">A visual look into our clean preparation procedures and authentic thali plating.</p>
    </div>
</section>

<!-- Filterable Gallery -->
<section class="gallery-page-section">
    <div class="section-container">
        
        <!-- Filter Tabs -->
        <div class="gallery-filters">
            <button class="filter-btn active" data-filter="all">All Photos</button>
            <button class="filter-btn" data-filter="food">Our Food</button>
            <button class="filter-btn" data-filter="kitchen">Kitchen & Cleanliness</button>
            <button class="filter-btn" data-filter="bulk">Events & Bulk Packing</button>
        </div>
        
        <!-- Grid Layout -->
        <div class="gallery-masonry-grid">
            <!-- Item 1: Food -->
            <div class="gallery-item" data-category="food">
                <div class="gallery-photo food-photo-1"></div>
                <div class="gallery-caption">
                    <h4>Standard Veg Thali</h4>
                    <p>Steamed rice, chapati, seasonal vegetable curry, yellow dal, salad, pickle.</p>
                </div>
            </div>
            
            <!-- Item 2: Kitchen -->
            <div class="gallery-item" data-category="kitchen">
                <div class="gallery-photo kitchen-photo-1"></div>
                <div class="gallery-caption">
                    <h4>RO Water Filtration</h4>
                    <p>Our kitchen uses centralized RO plants for washing, rinsing, and cooking.</p>
                </div>
            </div>
            
            <!-- Item 3: Bulk -->
            <div class="gallery-item" data-category="bulk">
                <div class="gallery-photo bulk-photo-1"></div>
                <div class="gallery-caption">
                    <h4>Corporate Thali Packing</h4>
                    <p>Individually sealed leak-proof lunch containers loaded for office deliveries.</p>
                </div>
            </div>
            
            <!-- Item 4: Food -->
            <div class="gallery-item" data-category="food">
                <div class="gallery-photo food-photo-2"></div>
                <div class="gallery-caption">
                    <h4>Dehati Chicken Curry</h4>
                    <p>Ranchi style slow-cooked spicy chicken curry prepared using local spices.</p>
                </div>
            </div>
            
            <!-- Item 5: Kitchen -->
            <div class="gallery-item" data-category="kitchen">
                <div class="gallery-photo kitchen-photo-2"></div>
                <div class="gallery-caption">
                    <h4>Daily Sanitization Run</h4>
                    <p>Utensils are cleaned at high temperatures to ensure sanitation guidelines.</p>
                </div>
            </div>
            
            <!-- Item 6: Bulk -->
            <div class="gallery-item" data-category="bulk">
                <div class="gallery-photo bulk-photo-2"></div>
                <div class="gallery-caption">
                    <h4>PG Hostel Food Supply</h4>
                    <p>Bulk insulated hot containers prepped for PG residents in Lalpur.</p>
                </div>
            </div>
        </div>
        
    </div>
</section>

<!-- Script for simple client-side gallery filtering -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    // Animation trigger
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});
</script>

<!-- CTA -->
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
            
            <h2 class="cta-title">Taste <span class="text-accent">the Quality Yourself</span></h2>
            <p class="cta-subtitle">Fresh ingredients, clean kitchen, and delicious home taste.</p>
            
            <div class="cta-buttons">
                <a href="<?php echo $baseUrl; ?>todays-menu" class="cta-btn btn-gold-filled">
                    Check Today's Menu
                </a>
                <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="cta-btn btn-white-outlined">
                    Get Bulk Quote
                </a>
            </div>
        </div>
    </div>
</section>
