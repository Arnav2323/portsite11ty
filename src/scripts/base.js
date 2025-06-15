"use strict";

// maybe move this into constants file or something like that
const Theme = {
    light: 'light',
    dark: 'dark',
}

window.addEventListener("load", ()=> {
    //Query Selectors
    const navBar = document.querySelector(".nav");
    const toggleNavButton = document.querySelector("#toggleNavButton");
    const navbarToggleIcon = document.querySelector("#menuOpenCloseImg");

    const toggleTheme = document.querySelector("#toggleTheme");
    const toggleThemeIcon = document.querySelector("#themeImage");
    const body = document.querySelector("#body");

    // If no option set grab from system and set in storage
    if (localStorage.getItem('theme') == null) {
        const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        localStorage.setItem('theme', isSystemDark ? Theme.dark : Theme.light)
    }

    // Set saved options
    if (localStorage.getItem('theme') === Theme.dark) {
        body.classList.add('darkMode');
        toggleThemeIcon.setAttribute("src", "/images/lightmode.svg");
    } 

    // Event Listeners
    // Move all this stuff into seperate functions to neaten this file up (tmmr morn before work)
    toggleNavButton.addEventListener("click", () => {
        if (navBar.classList.contains("hideMobileNav")) {
            navbarToggleIcon.setAttribute("src", "/images/closemenu.svg");
            navBar.classList.remove("hideMobileNav");
        } else {
            navbarToggleIcon.setAttribute("src", "/images/openmenu.svg");
            navBar.classList.add("hideMobileNav");
        }
    });
    
    toggleTheme.addEventListener("click", ()=> {
        if (body.classList.contains('darkMode')) {
            toggleThemeIcon.setAttribute("src", "/images/darkmode.svg");
            body.classList.remove('darkMode');
            localStorage.setItem('theme', Theme.light);
        } else {
            toggleThemeIcon.setAttribute("src", "/images/lightmode.svg");
            body.classList.add('darkMode');
            localStorage.setItem('theme', Theme.dark);
        }
    })
});

   