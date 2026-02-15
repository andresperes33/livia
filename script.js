const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.benefit-card, .tool-tag, .hero-content, .hero-image, .demo-content, .demo-visual').forEach(el => {
    el.classList.add('reveal-hidden');
    revealOnScroll.observe(el);
});

// Add these styles dynamically for animations
const style = document.createElement('style');
style.textContent = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
    .hero-content.reveal-hidden {
        transform: translateX(-30px);
    }
    .hero-image.reveal-hidden {
        transform: translateX(30px);
    }
    .hero-content.reveal-visible, .hero-image.reveal-visible {
        transform: translateX(0);
    }
`;
document.head.appendChild(style);

// Tool Tip interaction (simulated)
document.querySelectorAll('.tool-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});
