var hamburgerBtn = document.getElementById("btnOfHamburger");
var ulListSecond = document.getElementsByClassName("ulList")[0];

hamburgerBtn.addEventListener("click", function () {
  if (window.innerWidth <= 640) {
    hamburgerBtn.classList.toggle("active");
    ulListSecond.classList.toggle("hide");
  }
});
