/**
 * Student's Mess - Interactive JavaScript
 * Premium Animations & Responsive Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Header Shrink & Top Header Hide ---
    const header = document.querySelector('.site-header');
    const topStrip = document.querySelector('.top-header-strip');
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('shrunk');
            if (topStrip) {
                topStrip.classList.add('hidden');
            }
        } else {
            header.classList.remove('shrunk');
            if (topStrip) {
                topStrip.classList.remove('hidden');
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page loads scrolled

    // --- 2. Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            siteNav.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }

    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // If it's a dropdown toggle, don't close immediately on mobile
            if (link.classList.contains('dropdown-toggle') && window.innerWidth <= 992) {
                e.preventDefault();
                const parent = link.parentElement;
                parent.classList.toggle('dropdown-active');
            } else {
                if (navToggle && navToggle.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    siteNav.classList.remove('active');
                    document.body.classList.remove('nav-open');
                }
            }
        });
    });

    // --- 3. FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQs first
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle current FAQ
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // --- 4. Smooth Anchor Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navToggle && navToggle.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    siteNav.classList.remove('active');
                    document.body.classList.remove('nav-open');
                }

                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 5. Form Validation & Honeypot Protection ---
    const forms = document.querySelectorAll('.contact-form, .quote-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const honeypot = form.querySelector('[name="website_spamtrap"]');
            if (honeypot && honeypot.value !== '') {
                // Suspicious! Prevent submit
                e.preventDefault();
                console.warn('Bot submission blocked via honeypot.');
                return;
            }

            // Simple client-side visual validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('input-error');
                    
                    // Simple shake effect
                    field.style.transform = 'translateX(5px)';
                    setTimeout(() => field.style.transform = 'translateX(0)', 100);
                    setTimeout(() => field.style.transform = 'translateX(-5px)', 200);
                    setTimeout(() => field.style.transform = 'translateX(0)', 300);
                } else {
                    field.classList.remove('input-error');
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    // --- 6. Scroll Animations (Simple Scroll Reveal) ---
    const revealElements = document.querySelectorAll('.card, .hero-content, .section-header, .about-legacy-content');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('revealed');
            }
        });
    };
    
    // Add CSS transition properties dynamically to reveal elements
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        el.classList.add('scroll-reveal');
    });

    // Inject CSS for revealed state
    const style = document.createElement('style');
    style.innerHTML = `
        .scroll-reveal.revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});
