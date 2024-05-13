const menuIcon = document.querySelector(".menu-icon");
const menuPanel = document.querySelector(".menu-panel");
let menuState = false;
const closeCont = document.querySelector(".close-cont");

function toggleClose() {
  menuPanel.querySelector("nav").classList.toggle("active");
  menuState = !menuState;
}

closeCont.addEventListener("click", toggleClose);

menuIcon.addEventListener("click", toggleClose);
