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
<section class="final-cta-section bg-light">
    <div class="section-container text-center">
        <h2>Taste the Quality Yourself</h2>
        <p>Fresh ingredients, clean kitchen, and delicious home taste.</p>
        <div class="final-cta-buttons">
            <a href="<?php echo $baseUrl; ?>todays-menu" class="btn btn-primary btn-md">Check Today's Menu</a>
            <a href="<?php echo $baseUrl; ?>bulk-orders#quote-form" class="btn btn-outline-primary btn-md">Get Bulk Quote</a>
        </div>
    </div>
</section>
