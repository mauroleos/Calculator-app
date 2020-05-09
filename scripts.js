let num1 = null;
let num2 = null;
let operand = null;

var buttonSelected = document.querySelectorAll('.number-buttons');
buttonSelected.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        if (displayOutput.innerText === '' || displayOutput.innerText === '0' || (num1 !== null && num2 === null && operand !== null)) {
            (displayOutput.innerText = e.target.innerText)
        } else {
            (displayOutput.innerText = displayOutput.innerText + e.target.innerText)
        }
        updatedNumberVariables();
    })
})

const allClearBtn = document.querySelector('#all-clear-btn');
allClearBtn.addEventListener('click', () => {
    var displayOutput = document.querySelector('.display-output');
    displayOutput.innerText = '';
    num1 = null;
    num2 = null;
    operand = null;
})

var operations = document.querySelectorAll('.operation-buttons');
operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        if (num1 !== null && num2 !== null && operand !== null) {
            switch (operand) {
                case '÷':
                    num1 = num1 / num2;
                    break;
                case '*':
                    num1 = num1 * num2;
                    break;
                case '+':
                    num1 = num1 + num2;
                    break;
                case '-':
                    num1 = num1 - num2;
                    break;
                default:
                    return;
            }
            num2 = null;
            displayOutput.innerText = num1;
        } else {
            var displayOutput = document.querySelector('.display-output');
            displayOutput.innerText = '';
        }
        operand = e.target.innerText;
    })
});

const equalsButton = document.querySelector('#equals-btn');
equalsButton.addEventListener('click', () => {
    var displayOutput = document.querySelector(".display-output");
    let total = null;

    switch (operand) {
        case '÷':
            total = num1 / num2;
            num1 = total;
            num2 = null;
            operand = null;
            break;
        case '*':
            total = num1 * num2;
            num1 = total;
            num2 = null;
            operand = null;
            break;
        case '+':
            total = num1 + num2;
            num1 = total;
            num2 = null;
            operand = null;
            break;
        case '-':
            total = num1 - num2;
            num1 = total;
            num2 = null;
            operand = null;
            break;
        default:
            return;
    }

    total % 1 != 0 ? displayOutput.innerText = total.toFixed(3) : displayOutput.innerText = total;
})

const deleteBtn = document.querySelector('#delete-btn');
deleteBtn.addEventListener('click', () => {
    let displayArray = Array.from(displayOutput.innerText);
    const trimmedArray = displayArray.splice(0, displayArray.length - 1);
    let finalDisplay = '';

    for (let i = 0; i < trimmedArray.length; i++) {
        const item = trimmedArray[i];
        finalDisplay += item;
    }
    displayOutput.innerText = finalDisplay;
    updatedNumberVariables();
})

function updatedNumberVariables() {
    var displayOutput = document.querySelector('.display-output');
    if (operand === null) {
        num1 = parseFloat(displayOutput.innerText);
    } else if (num1 !== null && operand !== null) {
        num2 = parseFloat(displayOutput.innerText);
    }
}

const decimal = document.querySelector('#decimal-btn');
var displayOutput = document.querySelector('.display-output');
decimal.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && displayOutput.innerText.includes('.')) {
        return;
    } else {
        displayOutput.append('.')
    }

})