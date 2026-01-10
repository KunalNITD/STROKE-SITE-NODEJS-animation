// Initialize Lenis for smooth momentum scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }

    // Intersection Observer for Fade In
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // If it's a gallery item, add a staggered delay
                if (entry.target.classList.contains('gallery-item')) {
                    // Calculate delay based on index in current view isn't trivial with single observer
                    // So we use a simple inline style approach or just let them fade naturally
                    // But for true stagger, we can set delay based on child index
                    const delay = (Array.from(entry.target.parentNode.children).indexOf(entry.target) % 3) * 0.1;
                    entry.target.style.transitionDelay = `${delay}s`;
                }

                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(el => observer.observe(el));

    // Parallax Effect for Home Hero
    const hero = document.querySelector('#home');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;

            // Simple parallax on hero content
            const heroTitle = hero.querySelector('h1');
            const heroSubtitle = hero.querySelector('h4');

            if (heroTitle) heroTitle.style.transform = `translateY(${rate * 0.3}px)`;
            if (heroSubtitle) heroSubtitle.style.transform = `translateY(${rate * 0.2}px)`;
        });
    }
});
