import {calculator} from "../utils/calculator-object.js";

// If match operator key
export const keyMatchOperator = ($screen, $key) => {
    calculator.isOperatorPress = true;
    calculator.operator = $key.textContent;
    calculator.secondInput = false;
    if (calculator.isDecimalPress === false) {
        calculator.firstValue = parseInt($screen.textContent);
    } else {
        calculator.firstValue = parseFloat($screen.textContent);
    }
}