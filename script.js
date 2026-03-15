const body = document.body;
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function setMenuState(isOpen) {
    if (!navLinks || !hamburger) return;
    navLinks.classList.toggle('active', isOpen);
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
}

// Smooth scrolling for in-page navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hash = this.getAttribute('href');
        if (!hash || hash === '#') return;

        const target = document.querySelector(hash);
        if (target) {
            e.preventDefault();
            target.scrollIntoView(prefersReducedMotion
                ? { block: 'start' }
                : {
                    behavior: 'smooth',
                    block: 'start'
                });

            setMenuState(false);
        }
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (themeIcon) {
            if (body.classList.contains('dark-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                themeToggle.setAttribute('aria-pressed', 'true');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                themeToggle.setAttribute('aria-pressed', 'false');
                localStorage.setItem('theme', 'light');
            }
        }
    });
}

// Mobile hamburger menu toggle
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        setMenuState(!navLinks.classList.contains('active'));
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger || !navLinks) return;
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        setMenuState(false);
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        setMenuState(false);
    }
});

// Navbar scroll polish
window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 24);
});

const observedSections = document.querySelectorAll('section[id]');
if (observedSections.length && navAnchors.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute('id');
            navAnchors.forEach((link) => {
                const isActive = link.getAttribute('href') === `#${id}`;
                link.classList.toggle('active', isActive);
                if (isActive) link.setAttribute('aria-current', 'page');
                else link.removeAttribute('aria-current');
            });
        });
    }, {
        threshold: 0.45,
        rootMargin: '-20% 0px -45% 0px'
    });

    observedSections.forEach((section) => sectionObserver.observe(section));
}

// Portfolio filter functionality
const tabItems = document.querySelectorAll('.tab-item');
const projectCards = document.querySelectorAll('.project-card');

function revealProjectCardsStagger() {
    const visibleCards = Array.from(projectCards).filter((card) => !card.classList.contains('hidden'));
    visibleCards.forEach((card, index) => {
        card.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
        requestAnimationFrame(() => card.classList.add('is-visible'));
    });
}

function setProjectFilter(filterValue) {
    const masonry = document.querySelector('.portfolio-masonry');
    if (masonry) masonry.classList.toggle('masonry-filtered', filterValue !== 'all');

    projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = filterValue === 'all' || filterValue === cardCategory;

        card.classList.remove('is-visible');
        card.style.transitionDelay = '0ms';

        if (shouldShow) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    if (prefersReducedMotion) {
        projectCards.forEach((card) => {
            if (!card.classList.contains('hidden')) card.classList.add('is-visible');
        });
        return;
    }

    requestAnimationFrame(revealProjectCardsStagger);
}

tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabItems.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        const filterValue = tab.getAttribute('data-filter') || 'all';
        setProjectFilter(filterValue);
    });
});

setProjectFilter('all');

if (!prefersReducedMotion) {
    projectCards.forEach((card) => {
        card.addEventListener('mousemove', (event) => {
            if (window.innerWidth <= 992 || card.classList.contains('hidden')) return;

            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) - 0.5;
            const y = ((event.clientY - rect.top) / rect.height) - 0.5;
            const rotateX = -(y * 4);
            const rotateY = x * 5;
            card.style.transform = `translateY(-10px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Modal functionality for viewing images
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

function openModal(imageSrc, title, description) {
    if (!modal || !modalImg || !modalTitle || !modalDescription) return;
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside the image
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (modal && e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and portfolio items
document.querySelectorAll('.service-card, .about-text, .contact-content').forEach(el => {
    if (prefersReducedMotion) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Update WhatsApp link (Replace with your actual phone number)
// Note: Replace '1234567890' with your actual WhatsApp number (with country code, without '+' or spaces)
// Example: For US number +1 234 567 8900, use: 12345678900
const whatsappBtn = document.querySelector('.btn-whatsapp');
if (whatsappBtn) {
    const existingHref = whatsappBtn.getAttribute('href') || '';
    const looksPlaceholder = existingHref.includes('1234567890');

    if (looksPlaceholder) {
        const message = encodeURIComponent('Hello! I would like to discuss a project with you.');
        whatsappBtn.href = `https://wa.me/1234567890?text=${message}`;
    }
}

// Add loading animation for images
document.querySelectorAll('.project-image img, .featured-image img, .gallery-item img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

// Console welcome message
console.log('%c👋 Welcome to my Portfolio!', 'font-size: 20px; font-weight: bold; color: #6c63ff;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #666;');

// Prevent right-click on images (optional - uncomment if you want to protect your images)
// document.querySelectorAll('.portfolio-image img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => {
//         e.preventDefault();
//         alert('Image protection is enabled!');
//     });
// });
