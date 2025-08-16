document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky Navigation on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Menu Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and categories
            tabBtns.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding category
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Image Gallery Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            modalImage.setAttribute('src', imgSrc);
            imageModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        imageModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Reservation Form Submission
    const bookingForm = document.getElementById('booking-form');
    const reservationModal = document.getElementById('reservationModal');
    const closeReservationModal = document.getElementById('closeReservationModal');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show the success modal
            
            // Reset form
            this.reset();
            
            // Show success modal
            reservationModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }
    
    closeReservationModal.addEventListener('click', function() {
        reservationModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Initialize sliders (would need additional libraries like Swiper.js for full functionality)
    // This is a simplified version for demonstration
    
    // Testimonials slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Offers slider
    const offersSlider = document.querySelector('.offers-slider');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    offersSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - offersSlider.offsetLeft;
        scrollLeft = offersSlider.scrollLeft;
    });
    
    offersSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    offersSlider.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    offersSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - offersSlider.offsetLeft;
        const walk = (x - startX) * 2;
        offersSlider.scrollLeft = scrollLeft - walk;
    });
    
    // Video Background - This would be replaced with your YouTube embed
    // PASTE YOUTUBE URL HERE - The script below will format it for embedding
    const youtubeUrl = 'https://www.youtube.com/watch?v=9OquUp6x5IU'; // You'll paste your URL here
    
    if (youtubeUrl) {
        const videoId = youtubeUrl.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        const finalVideoId = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
        
        const iframe = document.getElementById('hero-video');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${finalVideoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${finalVideoId}`);
    }
    
    // Scroll reveal animations
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.about-content, .about-image', { interval: 200 });
    scrollReveal.reveal('.offer-card', { interval: 200 });
    scrollReveal.reveal('.menu-item', { interval: 100 });
    scrollReveal.reveal('.gallery-item', { interval: 100 });
});

/* Add to JS (`script.js`): */
// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = document.documentElement.classList.contains('dark-mode') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});
