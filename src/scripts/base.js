"use strict";


window.addEventListener("load", ()=> {
    //Query Selectors
    const navBar = document.querySelector(".nav");
    const toggleNavButton = document.querySelector(".toggleNavButton");
    const icon = document.querySelector("#menuOpenCloseImg");

    // Event Listeners
    toggleNavButton.addEventListener("click", () => {
        if (navBar.classList.contains("hideMobileNav")) {
            icon.setAttribute("src", "/images/closemenu.svg");
            navBar.classList.remove("hideMobileNav");
        } else {
            icon.setAttribute("src", "/images/openmenu.svg");
            navBar.classList.add("hideMobileNav");
        }
    });    
});

   