"strict";

let navbar = document.querySelector(".navbar");
let navbar__btn = document.querySelector(".navbar__btn");
let opt__lab = document.querySelector(".opt__lab");

navbar.style.transform = "translateX(-100%)";

navbar__btn.addEventListener("click", function () {
  navbar.style.visibility = "hidden";
  navbar.style.opacity = 0;
  navbar.style.transform = "translateX(-100%)";

  opt__lab.style.visibility = "visible";
  opt__lab.style.opacity = 1;
});

opt__lab.addEventListener("click", function () {
  navbar.style.visibility = "visible";
  navbar.style.opacity = 1;
  navbar.style.transform = "translateX(0)";

  opt__lab.style.visibility = "hidden";
  opt__lab.style.opacity = 0;
});
