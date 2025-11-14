// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideNav = navMenu.contains(e.target) || navToggle.contains(e.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and pricing cards
document.querySelectorAll('.service-card, .pricing-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Venmo profile URL
const venmoProfileUrl = 'https://www.venmo.com/u/suri_tarot';

document.getElementById('venmo-link').href = venmoProfileUrl;

// Pricing Tabs Functionality
const pricingTabs = document.querySelectorAll('.pricing-tab');
const pricingTabContents = document.querySelectorAll('.pricing-tab-content');

if (pricingTabs.length > 0 && pricingTabContents.length > 0) {
    pricingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            pricingTabs.forEach(t => t.classList.remove('active'));
            pricingTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Reset carousel scroll position when switching tabs
            const carousel = document.getElementById(targetTab).querySelector('.pricing-carousel');
            if (carousel) {
                carousel.scrollLeft = 0;
            }
        });
    });
}

// Pricing Carousel Navigation
document.querySelectorAll('.pricing-carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.pricing-carousel');
    const prevBtn = wrapper.querySelector('.carousel-btn-prev');
    const nextBtn = wrapper.querySelector('.carousel-btn-next');
    
    if (carousel && prevBtn && nextBtn) {
        const gap = 20; // Gap between cards (1.25rem = 20px)
        
        const getScrollAmount = () => {
            const cardWidth = carousel.querySelector('.pricing-card').offsetWidth;
            return cardWidth + gap;
        };
        
        // Previous button
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Next button
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Show/hide navigation buttons based on scroll position
        const updateButtonVisibility = () => {
            const isAtStart = carousel.scrollLeft <= 10;
            const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;
            
            prevBtn.style.opacity = isAtStart ? '0.3' : '0.9';
            prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
            
            nextBtn.style.opacity = isAtEnd ? '0.3' : '0.9';
            nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
        };
        
        // Update on scroll
        carousel.addEventListener('scroll', updateButtonVisibility);
        
        // Initial check
        updateButtonVisibility();
        
        // Update on window resize
        window.addEventListener('resize', updateButtonVisibility);
    }
});

// Touch/swipe support for carousel on mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelectorAll('.pricing-carousel').forEach(carousel => {
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(carousel);
    }, { passive: true });
});

function handleSwipe(carousel) {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - scroll right
            carousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        } else {
            // Swipe right - scroll left
            carousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    }
}

// Calendly integration note
// To set up Calendly:
// 1. Go to https://calendly.com and create a free account
// 2. Create your event types (Mehendi Service, Tarot Reading, etc.)
// 3. Get your Calendly username
// 4. Replace "your-username" in the HTML with your actual username
// 5. The widget will automatically load your scheduling page

// Example: If your Calendly URL is https://calendly.com/suri-services
// Replace data-url="https://calendly.com/your-username" 
// with data-url="https://calendly.com/suri-services"

