<?php
/**
 * Contact Page View
 * @var string $baseUrl
 */
$baseUrl = $baseUrl ?? '';
?>

<section class="inner-hero-section">
    <div class="section-container text-center">
        <span class="inner-hero-eyebrow">Connect With Us &bull; Ranchi Mess Service</span>
        <h1 class="inner-hero-title">Contact Student's Mess Ranchi &bull; Tiffin Service Near Me</h1>
        <p class="inner-hero-subtitle">Looking for top <strong>tiffin services near me</strong> or an affordable <strong>mess in Ranchi</strong>? Get in touch for monthly plans, bulk corporate catering, takeaway <strong>lunch box ranchi</strong>, or custom meal requests.</p>
    </div>
</section>

<!-- Contact Info & Form -->
<section class="contact-form-section">
    <div class="section-container">
        <div class="contact-page-grid">
            
            <!-- Contact Details Cards -->
            <div class="contact-details-panel">
                <span class="section-eyebrow">Direct Touch</span>
                <h2>Reach Us Directly</h2>
                <p>Feel free to call, WhatsApp, or drop by our kitchen for fresh home-style <strong>lunch box service</strong> and daily <strong>mess menu</strong> inquiries.</p>
                
                <div class="contact-info-cards">
                    <div class="info-card-item">
                        <div class="card-icon"><i class="fa fa-phone"></i></div>
                        <div class="card-text">
                            <h4>Call Us</h4>
                            <p><a href="tel:+916201016720">+91 62010 16720</a></p>
                        </div>
                    </div>
                    
                    <div class="info-card-item">
                        <div class="card-icon"><i class="fab fa-whatsapp"></i></div>
                        <div class="card-text">
                            <h4>WhatsApp Chat</h4>
                            <p><a href="https://wa.me/916201016720?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20meal%20plans" target="_blank">+91 62010 16720</a></p>
                        </div>
                    </div>
                    
                    <div class="info-card-item">
                        <div class="card-icon"><i class="fa fa-envelope"></i></div>
                        <div class="card-text">
                            <h4>Email</h4>
                            <p><a href="mailto:info@studentsmessranchi.com">info@studentsmessranchi.com</a></p>
                        </div>
                    </div>
                    
                    <div class="info-card-item">
                        <div class="card-icon"><i class="fa fa-map-marker-alt"></i></div>
                        <div class="card-text">
                            <h4>Central Kitchen Address</h4>
                            <p>Nizam Nagar, Hindpiri, Ranchi, Jharkhand 834001</p>
                        </div>
                    </div>
                </div>
                
                <!-- Business Hours Table -->
                <div class="hours-block-card bg-light">
                    <h4>Kitchen Timings</h4>
                    <table class="hours-table">
                        <tbody>
                            <tr>
                                <td><strong>Monday - Sunday</strong></td>
                                <td>11:00 AM - 10:00 PM</td>
                            </tr>
                            <tr>
                                <td>Lunch Shifts</td>
                                <td>11:30 AM - 3:30 PM</td>
                            </tr>
                            <tr>
                                <td>Dinner Shifts</td>
                                <td>7:00 PM - 10:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Contact Form -->
            <div class="contact-form-wrapper">
                <span class="section-eyebrow">Send Message</span>
                <h2>Inquire Online</h2>
                <p>Fill out the form below and our kitchen representatives will contact you shortly.</p>
                
                <?php if (isset($_SESSION['form_errors'])): ?>
                    <div class="alert alert-error">
                        <?php 
                        echo htmlspecialchars($_SESSION['form_errors']); 
                        unset($_SESSION['form_errors']);
                        ?>
                    </div>
                <?php endif; ?>
                
                <form action="<?php echo $baseUrl; ?>submit-contact" method="POST" class="contact-form">
                    <!-- Honeypot anti-spam check -->
                    <input type="text" name="website_spamtrap" style="display:none !important;" tabindex="-1" autocomplete="off">
                    
                    <div class="form-group">
                        <label for="name">Your Name *</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe">
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required placeholder="99341 23456">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="john@example.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <select id="subject" name="subject" required>
                            <option value="General Query">General Inquiry</option>
                            <option value="Monthly Plan Subscription">Subscribe to Monthly Plan</option>
                            <option value="Bulk Order Query">Bulk Catering Services</option>
                            <option value="Takeaway Order">Takeaway Order</option>
                            <option value="Feedback/Complaint">Customer Feedback</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Your Message *</label>
                        <textarea id="message" name="message" rows="5" required placeholder="How can we help you?"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Send Message</button>
                </form>
            </div>
            
        </div>
    </div>
</section>

<!-- Google Map Embed Section -->
<section class="maps-embed-section bg-light">
    <div class="section-container">
        <div class="section-header text-center">
            <span class="section-eyebrow">Map Location</span>
            <h2>Find Us on Google Maps</h2>
            <p class="section-subtitle">We are centrally located in Hindpiri, highly accessible from Main Road, Lalpur, and Doranda.</p>
        </div>
        
        <div class="google-maps-box">
            <!-- Simulated Google Map Embed for Premium Feel or simple iframe -->
            <iframe 
                src="https://maps.google.com/maps?q=Nizam+Nagar,+Hindpiri,+Ranchi,+Jharkhand+834001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                width="100%" 
                height="450" 
                style="border:0; border-radius:16px;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</section>
