import {calculator} from "../utils/calculator-object.js";
import {updateScreenValue} from "../utils/display-value.js";

// If match Del key
export const keyMatchDel = () => {
    if (calculator.isResultReady) {
        calculator.isResultReady = false;
        calculator.displayValue = "0";
    }
    if (calculator.displayValue.length === 1) {
        calculator.displayValue = "0";
        calculator.secondInput = false;
        updateScreenValue();
    } else {
        calculator.displayValue = calculator.displayValue.substring(0,
            calculator.displayValue.length - 1);
        updateScreenValue();
    }
}