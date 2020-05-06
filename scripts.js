let num1 = null;
let num2 = null;
let operand = null;

var buttonSelected = document.querySelectorAll('.number-buttons');
buttonSelected.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        if (displayOutput.innerText === '' || displayOutput.innerText === '0') {
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
        var operationsValue = e.target.innerText;
        operand = operationsValue;
        displayOutput.innerText = '';

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
            break;
        case '*':
            total = num1 * num2;
            num1 = total;
            break;
        case '+':
            total = num1 + num2;
            num1 = total;
            break;
        case '-':
            total = num1 - num2;
            num1 = total;
            break;
        default:
            return;
    }

    total % 1 != 0 ? displayOutput.innerText = total.toFixed(3) : displayOutput.innerText = total;
})

const deleteBtn = document.querySelector('#delete-btn');
deleteBtn.addEventListener('click', () => {
    var displayArray = Object.values(displayOutput.innerText);
    displayOutput.innerText = displayArray.splice(0,1);
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