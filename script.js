// Header Scroll Effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', function() {
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const isClickInsideMenu = mobileNav.contains(event.target);
  const isClickOnButton = mobileMenuBtn.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnButton && mobileNav.classList.contains('active')) {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
  }
});

// Smooth Scroll to Content
function scrollToContent() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      
      // Animate feature sections
      if (section.classList.contains('feature-section')) {
        const images = section.querySelectorAll('.feature-image');
        const contents = section.querySelectorAll('.feature-content');
        
        images.forEach(img => img.classList.add('animate'));
        contents.forEach(content => content.classList.add('animate'));
      }
      
      // Animate contact section
      if (section.classList.contains('contact-section')) {
        section.classList.add('animate');
      }
      
      // Unobserve after animation
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections with data-animate attribute
document.addEventListener('DOMContentLoaded', function() {
  const animatedSections = document.querySelectorAll('[data-animate]');
  animatedSections.forEach(section => observer.observe(section));
});

// Form Submission Handler
function handleSubmit(event) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  console.log('Form submitted:', formData);
  
  // Show success message (you can customize this)
  alert('תודה! ההודעה שלך נשלחה בהצלחה.');
  
  // Reset form
  event.target.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// Add hover effects for buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
  
  button.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.98)';
  });
  
  button.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });
});
