// Object calculator
const calculator = {
    displayValue: "0",
    secondInput: false,
    delKeyPress: false,
    resetKeyPress: false,
    isOperatorPress: false,
    isDecimalPress: false,
    isEqualPress: false,
    firstValue: 0,
    secondValue: 0,
    operator: ""
}

// Display value
const $screen = document.getElementById("screen-value");

const updateScreenValue = () => {
    $screen.textContent = calculator.displayValue;
}

updateScreenValue()

// Check pressed key
const $keypad = document.querySelector(".keypad");

$keypad.addEventListener("click", (e) => {

    // Get target
    let $key = e.target;

    // Check key
    if ($key.matches(".number")) {
        if (calculator.secondInput === false) {
            calculator.displayValue = $key.textContent;
            calculator.secondInput = true;
            updateScreenValue()
        } else {
            calculator.displayValue += $key.textContent;
            updateScreenValue()
        }
    }

    if ($key.matches(".operator")) {
        calculator.isOperatorPress = true;
        calculator.operator = $key.textContent;
        calculator.secondInput = false;
        if (calculator.isDecimalPress === false) {
            calculator.firstValue = parseInt($screen.textContent);
        } else {
            calculator.firstValue = parseFloat($screen.textContent);
        }
    }

    if ($key.matches(".decimal-key")) {
        console.log("Operator");
    }

    if ($key.matches(".del-key")) {
        console.log("Del");
    }

    if ($key.matches(".reset-key")) {
        console.log("Reset");
    }

    if ($key.matches(".equal-key")) {
        if (calculator.isDecimalPress === false) {
            calculator.secondValue = parseInt($screen.textContent);
        } else {
            calculator.secondValue = parseFloat($screen.textContent);
        }
        switch (calculator.operator) {
            case "+":
                calculator.displayValue = calculator.firstValue + calculator.secondValue;
                calculator.secondInput = false;
                updateScreenValue();
                break;
            case "-":
                calculator.displayValue = calculator.firstValue - calculator.secondValue;
                calculator.secondInput = false;
                updateScreenValue();
                break;
            case "x":
                calculator.displayValue = calculator.firstValue * calculator.secondValue;
                calculator.secondInput = false;
                updateScreenValue();
                break;
            case "/":
                calculator.displayValue = calculator.firstValue / calculator.secondValue;
                calculator.secondInput = false;
                updateScreenValue();
                break;
        }
    }
})
