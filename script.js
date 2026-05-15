// Mark active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});

// Typewriter (used on index.html)
function typeWriter(words, elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  let wi = 0, ci = 0, deleting = false;
  function tick() {
    const w = words[wi];
    if (!deleting) {
      el.textContent = w.slice(0, ci + 1); ci++;
      if (ci === w.length) { deleting = true; setTimeout(tick, 1600); return; }
    } else {
      el.textContent = w.slice(0, ci - 1); ci--;
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, deleting ? 60 : 90);
  }
  tick();
}

// Carousel (used on index.html)
let currentSlide = 0;
function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel-inner');
  if (!carousel) return;
  const slides = carousel.children;
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
// Auto-play carousel
setInterval(() => moveCarousel(1), 4000);
