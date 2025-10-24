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

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
  observeSkillBars();
};
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