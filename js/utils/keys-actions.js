import {$screen, updateScreenValue} from "./display-value.js";
import {keyMatchNumber} from "../keys-match/key-match-number.js";
import {keyMatchOperator} from "../keys-match/key-match-operator.js";
import {keyMatchDecimal} from "../keys-match/key-match-decimal.js";
import {keyMatchDel} from "../keys-match/key-match-del.js";
import {keyMatchReset} from "../keys-match/key-match-reset.js";
import {keyMatchEqual} from "../keys-match/key-match-equal.js";

// Initial value
updateScreenValue()

// Get keypad
const $keypad = document.querySelector(".keypad");

// Event for check keys
$keypad.addEventListener("click", (e) => {

    // Get target
    let $key = e.target;

    // Check key
    if ($key.matches(".number")) {
        keyMatchNumber($key);
    }

    if ($key.matches(".operator")) {
        keyMatchOperator($screen, $key);
    }

    if ($key.matches(".decimal-key")) {
        keyMatchDecimal($key);
    }

    if ($key.matches(".del-key")) {
        keyMatchDel()
    }

    if ($key.matches(".reset-key")) {
        keyMatchReset()
    }

    if ($key.matches(".equal-key")) {
        keyMatchEqual()
    }
})
