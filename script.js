// --- 1. SMART NAVBAR LOGIC ---
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Background blur on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Auto-hide on scroll down, show on scroll up
    if (lastScrollY < window.scrollY && window.scrollY > 150) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});

// --- 2. SCROLL SPY (ACTIVE LINK) ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// --- 3. INTERSECTION OBSERVER (REVEAL) ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- 4. MAGNETIC BUTTON ---
const btn = document.getElementById('magnetic-btn');
btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    btn.style.transform = `translate(${x}px, ${y}px)`;
});
btn.addEventListener('mouseleave', () => btn.style.transform = `translate(0,0)`);

