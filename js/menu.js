const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');


menuToggle.addEventListener('click', (event) => {
  event.stopPropagation(); 
  navbar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (navbar.classList.contains('active') && !navbar.contains(event.target)) {
    navbar.classList.remove('active');
  }
});


window.addEventListener('scroll', () => {
  if (navbar.classList.contains('active')) {
    navbar.classList.remove('active');
  }
});
