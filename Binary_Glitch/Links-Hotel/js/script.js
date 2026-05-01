
// Fade-up scroll observer
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Stagger amenity cards
document.querySelectorAll('.amenity-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.04}s`;
});
