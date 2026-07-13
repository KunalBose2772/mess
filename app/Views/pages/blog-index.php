<?php
// Blog Index View
// Available variables: $baseUrl
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Our Journal</span>
        <h1 class="inner-hero-title">Student's Mess Blog</h1>
        <p class="inner-hero-subtitle">Tips, nutrition guides, and culinary secrets from our 26-year-old kitchen.</p>
    </div>
</section>

<!-- Blog Categories -->
<section class="blog-categories bg-light">
    <div class="section-container">
        <div class="category-chips-row">
            <span class="cat-chip active">All Articles</span>
            <span class="cat-chip">Healthy Meals</span>
            <span class="cat-chip">Student Guides</span>
            <span class="cat-chip">Office Nutrition</span>
            <span class="cat-chip">Catering Tips</span>
            <span class="cat-chip">Ranchi Food Culture</span>
        </div>
    </div>
</section>

<!-- Blog Content Grid -->
<section class="blog-grid-section">
    <div class="section-container">
        <div class="blog-layout-container">
            
            <!-- Featured Post -->
            <div class="featured-post-card">
                <div class="featured-photo-placeholder"></div>
                <div class="featured-content-block">
                    <span class="post-category-tag">Student Food</span>
                    <h2><a href="<?php echo $baseUrl; ?>blog/5-signs-you-need-a-monthly-tiffin-plan-in-ranchi">5 Signs You Need a Monthly Tiffin Plan in Ranchi</a></h2>
                    <p>Living away from home for IAS coaching or university studies? Skip skipped breakfasts, digestion issues, and expensive delivery bills. Here are five signs that it is time to subscribe to home-style daily tiffin plans.</p>
                    <div class="post-meta">
                        <span>By Kitchen Team</span>
                        <span class="meta-dot">·</span>
                        <span>July 5, 2026</span>
                        <span class="meta-dot">·</span>
                        <span>4 min read</span>
                    </div>
                    <a href="<?php echo $baseUrl; ?>blog/5-signs-you-need-a-monthly-tiffin-plan-in-ranchi" class="read-more-link">Read Full Guide <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Standard Grid -->
            <div class="blog-posts-grid">
                <!-- Card 2 -->
                <div class="blog-post-card">
                    <div class="blog-photo-placeholder"></div>
                    <div class="blog-card-content">
                        <span class="post-category-tag">Healthy Meals</span>
                        <h3>Home Style Food vs Restaurant Food: What's the Real Difference?</h3>
                        <p>An investigation on spices, reheated oils, and how commercial preparation affects digestions and performance.</p>
                        <div class="post-meta">
                            <span>July 1, 2026</span>
                            <span class="meta-dot">·</span>
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="blog-post-card">
                    <div class="blog-photo-placeholder"></div>
                    <div class="blog-card-content">
                        <span class="post-category-tag">Catering</span>
                        <h3>How Bulk Meal Catering Works for Offices in Ranchi</h3>
                        <p>How we scale production to feed corporate teams hygienically, safely, and on time every day.</p>
                        <div class="post-meta">
                            <span>June 28, 2026</span>
                            <span class="meta-dot">·</span>
                            <span>6 min read</span>
                        </div>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="blog-post-card">
                    <div class="blog-photo-placeholder"></div>
                    <div class="blog-card-content">
                        <span class="post-category-tag">Nutrition</span>
                        <h3>What Makes a Meal "Healthy" — A Home Cook's Perspective</h3>
                        <p>Our founding chef shares recipe guides on utilizing local grains, herbs, and traditional spices for gut-health.</p>
                        <div class="post-meta">
                            <span>June 22, 2026</span>
                            <span class="meta-dot">·</span>
                            <span>4 min read</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
