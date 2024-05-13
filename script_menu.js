const menuIcon = document.querySelector(".menu-icon");
const menuPanel = document.querySelector(".menu-panel");
let menuState = false;

menuIcon.addEventListener("click", () => {
    if(menuState) menuPanel.style.display = null;
    else menuPanel.style.display = "block";
    menuState = !menuState;
})