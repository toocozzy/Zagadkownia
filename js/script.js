const burger = document.querySelector(".burger-menu");
const iconOn = document.querySelector(".fa-bars");
const iconOff = document.querySelector(".fa-times");
const menu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".close-menu");

burger.addEventListener("click", function () {
  iconOn.classList.toggle("show");
  iconOff.classList.toggle("show");
  menu.classList.toggle("active");
});

closeMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
  iconOn.classList.toggle("show");
  iconOff.classList.toggle("show");
});
