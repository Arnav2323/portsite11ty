"use strict";

let elems = {
    navBar: null,
    toggleNavButton: null
}

window.addEventListener("load", ()=> {
    //Query Selectors
    elems.navBar = document.querySelector(".nav");
    elems.toggleNavButton = document.querySelector(".toggleNavButton");

    // Navbar Sizing
    if (window.innerWidth == null) {
        setTimeout(1000, () => handleInitialWidthAssignment);
        return;
    }
    hideMobileDropdown();


    // Event Listeners
    elems.toggleNavButton.addEventListener("click", () => {
        if (elems.navBar.classList.contains("hide")) {
            elems.toggleNavButton.textContent = "-";
            elems.navBar.classList.remove("hide");
        } else {
            elems.toggleNavButton.textContent = "+";
            elems.navBar.classList.add("hide");
        }
    });    
});

function hideMobileDropdown() {
    if (window.innerWidth <= 1000) {
        elems.navBar.classList.add("hide");
    }
}

   