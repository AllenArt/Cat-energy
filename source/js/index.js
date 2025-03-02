let mainNav = document.querySelector(".main-nav");
let navToggle = mainNav.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav__opened")) {
    mainNav.classList.remove("main-nav__opened");
    mainNav.classList.add("main-nav__closed");
  } else {
    mainNav.classList.remove("main-nav__closed");
    mainNav.classList.add("main-nav__opened");
  }
});
