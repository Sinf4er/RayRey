document.querySelector(".to-about").addEventListener("click", (_e) => {
  _e.preventDefault();
  TweenLite.to(window, 1, { scrollTo: ".about-section" });
});

document.querySelector(".to-about2").addEventListener("click", (_e) => {
  _e.preventDefault();
  TweenLite.to(window, 1, { scrollTo: ".about-section" });
});

document.querySelector(".to-top").addEventListener("click", (_e) => {
  _e.preventDefault();
  TweenLite.to(window, 1, { scrollTo: ".header-section" });
});

const menu = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-open");
  body.classList.toggle("fixed");
});

document.querySelector(".to-about3").addEventListener("click", (_e) => {
  _e.preventDefault();
  TweenLite.to(window, 1, { scrollTo: ".about-section" });
  menu.classList.toggle("is-active");
  body.classList.toggle("fixed");
  mobileMenu.classList.toggle("is-open");
});

var nav = document.querySelector("header");

window.addEventListener("scroll", () => {
  let scrollposition = window.scrollY;
  
  if(scrollposition > 100) {
    nav.classList.add('nav-hidden');
  } else {
    nav.classList.remove('nav-hidden');
  }
});
