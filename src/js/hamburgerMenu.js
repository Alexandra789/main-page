const hamburger = document.querySelector(".hamburger__btn");
const navMenu = document.querySelector(".hamburger__menu");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".hamburger__menu .nav__menu__item");
const btns = document.querySelectorAll('.hamburger .buttons-wrapper .button');
const menuItems = [...menuLinks, ...btns];

hamburger.addEventListener("click", toggleMobileMenu);

menuItems.forEach(menuItem => {
	menuItem.addEventListener("click", toggleMobileMenu)
})

function toggleMobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	hamburger.classList.contains("active") ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';
}