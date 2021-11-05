let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let menubar = document.querySelector(".menubar");
let links = document.querySelector(".nav-links-div");
let reveals = document.querySelectorAll(".reveal");
let scrollPos = 0;

menubar.addEventListener("click", function () {
  bar1.classList.toggle("barclose1");
  bar2.classList.toggle("barclose2");
  bar3.classList.toggle("barclose3");
  links.classList.toggle("newlinks");
});

window.addEventListener("scroll", reveal);

const reveal = () => {
  //   for (let i = 0; i < reveals.length; i++) {
  //     // let windowHeight = window.innerHeight;
  //     // let revealTop = reveals[i].getBoundingClientRect().top;
  //     // let revealPoint = 150;
  //     let windowY = window.scrollY;
  //     if (windowY < scrollPos) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //     scrollPos = windowY;
  //   }
};
