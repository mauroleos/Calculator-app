let num1 = null;
let num2 = null;
let operand = null;

var buttonSelected = document.querySelectorAll('.number-buttons');
buttonSelected.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');

        const isDisplayEmpty = displayOutput.innerText === '' || displayOutput.innerText === '0';
        const isEquationCompletelyEmpty = num1 !== null && num2 === null && operand !== null;
        if (isDisplayEmpty || isEquationCompletelyEmpty) {
            displayOutput.innerText = e.target.innerText;
        } else {
            displayOutput.innerText = displayOutput.innerText + e.target.innerText;
        }
        updatedNumberVariables();
    })
});

const allClearBtn = document.querySelector('#all-clear-btn');
allClearBtn.addEventListener('click', () => {
    var displayOutput = document.querySelector('.display-output');
    displayOutput.innerText = '';
    num1 = null;
    num2 = null;
    operand = null;
});

var operations = document.querySelectorAll('.operation-buttons');
operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        if (num1 !== null && num2 !== null && operand !== null) {
            num1 = executeEquation();
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

    num1 = executeEquation();
    num2 = null;
    operand = null;

    var displayOutput = document.querySelector(".display-output");
    displayOutput.innerText = num1 % 1 != 0
        ? num1.toFixed(3)
        : num1;
});

const deleteBtn = document.querySelector('#delete-btn');
deleteBtn.addEventListener('click', () => {
    var displayOutput = document.querySelector('.display-output');
    let displayArray = Array.from(displayOutput.innerText);
    const trimmedArray = displayArray.splice(0, displayArray.length - 1);
    let finalDisplay = '';

    for (let i = 0; i < trimmedArray.length; i++) {
        const item = trimmedArray[i];
        finalDisplay += item;
    }

    displayOutput.innerText = finalDisplay;
    updatedNumberVariables();
});

const decimal = document.querySelector('#decimal-btn');
decimal.addEventListener('click', (e) => {
    var displayOutput = document.querySelector('.display-output');
    if (displayOutput.innerText.includes('.') === false) {
        displayOutput.append('.');
    }
});

function updatedNumberVariables() {
    var displayOutput = document.querySelector('.display-output');
    if (operand === null) {
        num1 = parseFloat(displayOutput.innerText);
    } else if (num1 !== null && operand !== null) {
        num2 = parseFloat(displayOutput.innerText);
    }
}

function executeEquation() {
    switch (operand) {
        case '÷':
            return num1 / num2;
        case '*':
            return num1 * num2;
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            return;
    }
}