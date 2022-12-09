import {calculator} from "../utils/calculator-object.js";
import {updateScreenValue} from "../utils/display-value.js";

// If match decimal
export const keyMatchDecimal = ($key) => {
    if (calculator.secondInput) {
        calculator.displayValue += $key.textContent;
        calculator.isDecimalPress = true;
        updateScreenValue();
    }
}