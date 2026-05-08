import './style.css'

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header glassmorphism effect on scroll
const header = document.getElementById('header');
header.style.background = 'transparent';
header.style.borderBottom = 'none';
header.style.backdropFilter = 'none';

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.padding = '10px 0';
    header.style.background = 'rgba(17, 24, 39, 0.85)';
    header.style.borderBottom = '1px solid var(--border-color)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.padding = '20px 0';
    header.style.background = 'transparent';
    header.style.borderBottom = 'none';
    header.style.backdropFilter = 'none';
  }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Contact form handling
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    
    // Simulate sending
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
      btn.textContent = 'Message Sent!';
      btn.style.backgroundColor = 'var(--accent-glow)';
      form.reset();
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = 'transparent';
        btn.style.opacity = '1';
      }, 3000);
    }, 1500);
  });
}
