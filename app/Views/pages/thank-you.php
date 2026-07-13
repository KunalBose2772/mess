<?php
// Thank You View
// Available variables: $baseUrl
?>

<section class="thankyou-section text-center">
    <div class="section-container">
        <div class="thankyou-box bg-light">
            <div class="success-check-icon"><i class="fa fa-check-circle"></i></div>
            <h1>Thank You!</h1>
            <p class="lead-text">Your inquiry has been successfully transmitted to our kitchen directors.</p>
            <p>We review all submissions within 3 to 12 hours. If you submitted a bulk quote request, we will prepare and email your custom proposal shortly.</p>
            
            <!-- WhatsApp Fallback -->
            <div class="whatsapp-fallback-box bg-white">
                <h4>Prefer an Instant Reply?</h4>
                <p>Skip the wait! Click below to send your query directly to our WhatsApp support line for instant answers.</p>
                <a href="https://wa.me/919934123456?text=Hi,%20I%20just%20submitted%20a%20form%20on%20your%20website%20and%20wanted%20to%20follow%20up." class="btn btn-whatsapp btn-lg" target="_blank">
                    <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
            </div>
            
            <div class="back-home-btn">
                <a href="<?php echo $baseUrl; ?>" class="btn btn-primary btn-md">Return to Homepage</a>
            </div>
        </div>
    </div>
</section>
