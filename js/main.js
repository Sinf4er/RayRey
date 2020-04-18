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
