const menu = document.querySelector('#mobile');
const menuLinks = document.querySelector('.navbar');
const ham = document.querySelector('.hamburger');
const upperwala = document.querySelector('.home');
const topwala = document.querySelector('.top');
const navLogo = document.querySelector('.logo');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  ham.classList.toggle('active');
  upperwala.classList.toggle('active');
  topwala.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);