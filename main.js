// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Animate social links hover (extra)
const links = document.querySelectorAll('.hero-links a');
links.forEach(link => {
  link.addEventListener('mouseenter', () => link.style.transform='scale(1.3)');
  link.addEventListener('mouseleave', () => link.style.transform='scale(1)');
});
