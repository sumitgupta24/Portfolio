function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
  
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

/**
 * Sets the theme on page load based on user's preference
 * stored in localStorage.
 */
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  // Animate skill bars when they scroll into view
  // This is an additional suggestion for your new UI
  observeSkillBars();
};


/**
 * BONUS: Animates skill bars when they enter the viewport.
 * Your CSS has the transition, but this JS triggers it on scroll.
 */
function observeSkillBars() {
  const skillProgressElements = document.querySelectorAll('.skill-progress');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        skillObserver.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the bar is visible
  });

  skillProgressElements.forEach(el => {
    skillObserver.observe(el);
  });
}