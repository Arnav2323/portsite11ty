"use strict";

let elems = {
    navBar: null,
    toggleNavButton: null
}

window.addEventListener("load", ()=> {
    //Query Selectors
    elems.navBar = document.querySelector(".nav");
    elems.toggleNavButton = document.querySelector(".toggleNavButton");

    // Event Listeners
    elems.toggleNavButton.addEventListener("click", () => {
        if (elems.navBar.classList.contains("hideMobileNav")) {
            elems.toggleNavButton.textContent = "-";
            elems.navBar.classList.remove("hideMobileNav");
        } else {
            elems.toggleNavButton.textContent = "+";
            elems.navBar.classList.add("hideMobileNav");
        }
    });    
});

   