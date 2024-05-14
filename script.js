const customTabs = document.querySelector("#cust-tab");
const tabItems = document.querySelector("tab-item");
const cusTabContent = document.querySelector("#cust-tab-content");

let position = 0;

customTabs.addEventListener("click", (e) => {
    
    


    const target = e.target.dataset.bsTarget;

    if(window.innerWidth < 500) {
     if(target == "#vission") {
        customTabs.style.transform = "translateX(-40px)";
        
     } else if(target == "#core-values") {
        customTabs.style.transform = "translateX(-100px)";
        
     }
     else if(target == "#mission") {
        customTabs.style.transform = "translateX(0px)";
        
     }
    }
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



