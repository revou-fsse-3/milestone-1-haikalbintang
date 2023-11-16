// --------------------Dropdown Menu-----------------------//
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".hidden-nav-toggler");
  const navHidden = document.querySelector(".hidden-nav");

  menuToggle.addEventListener("click", function () {
    navHidden.classList.toggle("active");
  });
});
