import changeThemeClass from "./change-theme-class.js";
const $inputsTheme = document.querySelectorAll(".input-radio")
const $circle = document.querySelector(".key-toggle");

// Iterating over inputs
$inputsTheme.forEach(input => {
    // Set event
    input.addEventListener("click", e => {
        // Change to theme one
        if (e.target.matches("#theme-one")) {
            $circle.style.translate = 0;
            changeThemeClass("theme-one","theme-two","theme-three")
        }
        // Change to theme two
        if (e.target.matches("#theme-two")) {
            $circle.style.translate = "1.6rem";
            changeThemeClass("theme-two","theme-one","theme-three")
        }
        // Change to theme three
        if (e.target.matches("#theme-three")) {
            $circle.style.translate = "3.3rem";
            changeThemeClass("theme-three","theme-one","theme-two")
        }
    })
})