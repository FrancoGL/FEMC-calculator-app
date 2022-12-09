import {calculator} from "../utils/calculator-object.js";
import {$screen, updateScreenValue} from "../utils/display-value.js";

export const keyMatchEqual = () => {
    if (calculator.isDecimalPress === false) {
        calculator.secondValue = parseInt($screen.textContent);
    } else {
        calculator.secondValue = parseFloat($screen.textContent);
    }
    switch (calculator.operator) {
        case "+":
            calculator.displayValue = calculator.firstValue + calculator.secondValue;
            calculator.secondInput = false;
            calculator.isResultReady = true;
            updateScreenValue();
            break;
        case "-":
            calculator.displayValue = calculator.firstValue - calculator.secondValue;
            calculator.secondInput = false;
            calculator.isResultReady = true;
            updateScreenValue();
            break;
        case "x":
            calculator.displayValue = calculator.firstValue * calculator.secondValue;
            calculator.secondInput = false;
            calculator.isResultReady = true;
            updateScreenValue();
            break;
        case "/":
            calculator.displayValue = calculator.firstValue / calculator.secondValue;
            calculator.secondInput = false;
            calculator.isResultReady = true;
            updateScreenValue();
            break;
    }
}