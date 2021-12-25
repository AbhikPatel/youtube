const menu = document.querySelector('#mobile');
const menuLinks = document.querySelector('.navbar');
const navLogo = document.querySelector('.logo');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);