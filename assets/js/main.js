// Mobile nav toggle
var navLinks = document.getElementById('navLinks');
var hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close nav on click outside
document.addEventListener('click', function (e) {
  if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Close nav on resize to desktop
window.addEventListener('resize', function () {
  if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Scroll fade-in
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(function (el) {
  observer.observe(el);
});
