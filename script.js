const customTabs = document.querySelector("#cust-tab");
const tabItems = document.querySelector("tab-item");
const cusTabContent = document.querySelector("#cust-tab-content");


customTabs.addEventListener("click", (e) => {
    
    const target = e.target.dataset.bsTarget;
    console.log(target);
    if(!target) return;
    const tabPanel = cusTabContent.querySelector(target);
    const curActive = cusTabContent.querySelector(".active");
    const activeTab = customTabs.querySelector(".active");
    const targetTab = customTabs.querySelector(`[data-bs-target="${target}"]`);
    
    activeTab.classList.remove("active");
    targetTab.classList.add("active");

    curActive.classList.remove("show", "active");
    tabPanel.classList.add("show", "active");
})


const menuIcon = document.querySelector(".menu-icon");
const menuPanel = document.querySelector(".menu-panel");
let menuState = false;

menuIcon.addEventListener("click", () => {
    if(menuState) menuPanel.style.display = null;
    else menuPanel.style.display = "block";
    menuState = !menuState;
})
