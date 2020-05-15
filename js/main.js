const menu = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-open");
  body.classList.toggle("fixed");
});