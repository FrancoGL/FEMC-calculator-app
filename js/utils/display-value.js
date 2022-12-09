import {calculator} from "./calculator-object.js";

export const $screen = document.getElementById("screen-value");

// Display value
export const updateScreenValue = () => {
    $screen.textContent = calculator.displayValue;
}