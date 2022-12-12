import changeThemeClass from "./change-theme-class.js";
const $circle = document.querySelector(".key-toggle");

export const setThemeOne = () => {
  $circle.style.translate = 0;
  changeThemeClass("theme-one", "theme-two", "theme-three");
  if (localStorage.getItem("theme") !== "theme-one") {
    localStorage.setItem("theme", "theme-one");
  }
};

export const setThemeTwo = () => {
  $circle.style.translate = "1.6rem";
  changeThemeClass("theme-two", "theme-one", "theme-three");
  if (localStorage.getItem("theme") !== "theme-two") {
    localStorage.setItem("theme", "theme-two");
  }
};

export const setThemeThree = () => {
  $circle.style.translate = "3.3rem";
  changeThemeClass("theme-three", "theme-one", "theme-two");
  if (localStorage.getItem("theme") !== "theme-three") {
    localStorage.setItem("theme", "theme-three");
  }
};
