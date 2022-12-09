import {calculator} from "../utils/calculator-object.js";
import {updateScreenValue} from "../utils/display-value.js";

// If match reset key
export const keyMatchReset = () => {
    calculator.displayValue = "0";
    calculator.secondInput = false;
    updateScreenValue();
}