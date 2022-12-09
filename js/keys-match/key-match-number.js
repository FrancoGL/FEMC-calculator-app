import {calculator} from "../utils/calculator-object.js";
import {updateScreenValue} from "../utils/display-value.js";

// If match number key
export const keyMatchNumber = ($key) => {
    if (calculator.secondInput === false) {
        calculator.displayValue = $key.textContent;
        calculator.secondInput = true;
        updateScreenValue()
    } else {
        calculator.displayValue += $key.textContent;
        updateScreenValue()
    }
}