<?php
// 404 View
// Available variables: $baseUrl
?>

<section class="notfound-section text-center">
    <div class="section-container">
        <div class="notfound-box bg-light">
            <span class="error-code">404</span>
            <h1>Page Not Found</h1>
            <p class="lead-text">Sorry, the page you are looking for does not exist or has been relocated.</p>
            <p>You can use the links below to navigate back to our primary services.</p>
            
            <div class="notfound-links">
                <a href="<?php echo $baseUrl; ?>" class="btn btn-primary btn-md">Return Home</a>
                <a href="<?php echo $baseUrl; ?>monthly-meal-plans" class="btn btn-secondary btn-md">Meal Plans</a>
                <a href="<?php echo $baseUrl; ?>bulk-orders" class="btn btn-secondary btn-md">Bulk Catering</a>
            </div>
        </div>
    </div>
</section>
