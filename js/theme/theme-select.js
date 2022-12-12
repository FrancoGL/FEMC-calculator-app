import changeThemeClass from "./change-theme-class.js";
import { setThemeOne, setThemeTwo, setThemeThree } from "./set-theme.js";

const $inputsTheme = document.querySelectorAll(".input-radio");
const $circle = document.querySelector(".key-toggle");

// Changes theme color given current theme class saved
document.addEventListener("DOMContentLoaded", () => {
  let getPreferTheme = localStorage.getItem("theme");
  // Change to theme one
  if (getPreferTheme === "theme-one") {
    setThemeOne();
  }
  // Change to theme two
  if (getPreferTheme === "theme-two") {
    setThemeTwo();
  }
  // Change to theme three
  if (getPreferTheme === "theme-three") {
    setThemeThree();
  }
});

// Iterating over inputs
$inputsTheme.forEach((input) => {
  // Set event
  input.addEventListener("click", (e) => {
    // Change to theme one
    if (e.target.matches("#theme-one")) {
      setThemeOne();
    }
    // Change to theme two
    if (e.target.matches("#theme-two")) {
      setThemeTwo();
    }
    // Change to theme three
    if (e.target.matches("#theme-three")) {
      setThemeThree();
    }
  });
});
