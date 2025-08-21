"use strict";

// maybe move this into constants file or something like that
const Theme = {
    light: 'light',
    dark: 'dark',
}

window.addEventListener("load", ()=> {
 
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

   