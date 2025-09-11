// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animated roles
const roles = [
  { text: "UI/UX Designer", color: "#FF6B6B" },
  { text: "Web Developer", color: "#6BCB77" },
  { text: "Honeywell Intern", color: "#4D96FF" },
  { text: "AI Enthusiast", color: "#FFD93D" },
  { text: "IT Professional", color: "#9B59B6" }
];

const roleElement = document.getElementById("animated-role");
let index = 0;

function changeRole() {
  roleElement.textContent = roles[index].text;
  roleElement.style.color = roles[index].color;
  index = (index + 1) % roles.length;
}

setInterval(changeRole, 2000);

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');

// Initialize icon based on current body class
if (document.body.classList.contains('dark-mode')) {
  toggleIcon.classList.remove('bi-toggle-off');
  toggleIcon.classList.add('bi-toggle-on');
} else {
  toggleIcon.classList.remove('bi-toggle-on');
  toggleIcon.classList.add('bi-toggle-off');
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if(document.body.classList.contains('dark-mode')) {
    toggleIcon.classList.remove('bi-toggle-off');
    toggleIcon.classList.add('bi-toggle-on');
  } else {
    toggleIcon.classList.remove('bi-toggle-on');
    toggleIcon.classList.add('bi-toggle-off');
  }
});
