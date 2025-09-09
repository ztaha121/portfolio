// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Shadow effect on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Rotating hero words
const words = [
  "an IT Professional",
  "an AI Enthusiast",
  "a UI/UX Designer",
  "a Mobile Developer"
];

const colors = ["#f9e900", "#48a9a6", "#84dccc", "#070707"];

const container = document.querySelectorAll(".animated-words span");
let index = 0;

function rotateWords() {
  container.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(100%)";
  });
  container[index].style.opacity = "1";
  container[index].style.transform = "translateY(0)";
  container[index].style.color = colors[index];
  index = (index + 1) % container.length;
}

// Rotate every 2 seconds
setInterval(rotateWords, 2000);

// Initial call to display the first word
rotateWords();
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
