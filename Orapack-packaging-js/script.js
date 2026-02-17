// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  // Toggle menu when button is clicked
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      const isActive = nav.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', isActive);
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Set active navigation link
  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('nav a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if ((href === currentLocation) || (currentLocation === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon, For a more faster reply send us a message on WhatsApp, Or give us a call.');
    this.reset();
  });
}

// Mobile Touch Optimization
document.addEventListener('touchstart', function() {}, true);
