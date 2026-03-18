// Sticky navbar functionality
function handleNavbar() {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Active section highlighting
function highlightActiveSection() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navitem');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Hamburger menu functionality
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navbar-menu');

  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      element.classList.add('animate');
    }
  });
}

// Scroll-to-top functionality
function handleScrollToTop() {
  const scrollButton = document.getElementById('scroll-to-top');
  const scrollY = window.scrollY;

  if (scrollY > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Typing animation
function startTypingAnimation() {
  const heroName = document.getElementById('hero-name');
  const text = 'Sumit Gupta';
  let index = 0;

  function type() {
    if (index < text.length) {
      heroName.textContent = text.slice(0, index + 1);
      index++;
      setTimeout(type, 150);
    }
  }

  // Start typing after a delay
  setTimeout(type, 1000);
}

// Loading animation
function hideLoading() {
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.classList.add('hide');
  }, 2000);
}

// Form validation
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Here you would typically send the form data to a server
  alert('Thank you for your message! I\'ll get back to you soon.');
  document.getElementById('contact-form').reset();
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Skill bars animation
function observeSkillBars() {
  const skillProgressElements = document.querySelectorAll('.skill-progress');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        skillObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  skillProgressElements.forEach(el => {
    skillObserver.observe(el);
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Start loading animation
  hideLoading();

  // Start typing animation
  startTypingAnimation();

  // Observe skill bars
  observeSkillBars();

  // Hamburger menu
  document.getElementById('hamburger').addEventListener('click', toggleMenu);

  // Scroll-to-top
  document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);

  // Form validation
  document.getElementById('contact-form').addEventListener('submit', validateForm);

  // Close mobile menu when clicking nav links
  document.querySelectorAll('.navitem').forEach(link => {
    link.addEventListener('click', () => {
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('navbar-menu');
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});

// Scroll event listeners
window.addEventListener('scroll', () => {
  handleNavbar();
  highlightActiveSection();
  handleScrollAnimations();
  handleScrollToTop();
});