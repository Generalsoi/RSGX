let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let menubar = document.querySelector(".menubar");
let links = document.querySelector(".nav-links-div");

menubar.addEventListener("click", function () {
  bar1.classList.toggle("barclose1");
  bar2.classList.toggle("barclose2");
  bar3.classList.toggle("barclose3");
  links.classList.toggle("newlinks");
});
