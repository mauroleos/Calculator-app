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

function allClear() {
    var displayOutput = document.querySelector('.display-output');
    displayOutput.innerText = '';
    num1 = null;
    num2 = null;
    operand = null;
}

var operations = document.querySelectorAll('.operation-buttons');
operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        var operationsValue = e.target.innerText;
        operand = operationsValue;
        // updatedNumberVariables();
        displayOutput.innerText = '';
    })
});

const equalsButton = document.querySelector('#equals-btn');
equalsButton.addEventListener('click', ()=> {
    var displayOutput = document.querySelector(".display-output");
    let total = null;
    // debugger;

    switch (operand) {
        case '÷':
            total = num1 / num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        default:
            return;
    }
    
    total % 1 != 0 ? displayOutput.innerText = total.toFixed(3) : displayOutput.innerText = total
})

function deleteBtn() {
    var displayOutput = document.querySelector('.display-output');
    var displayArray = Object.values(displayOutput.innerText)
    displayOutput.innerText = displayArray.splice(0,1);
    updatedNumberVariables();
}

function updatedNumberVariables() {
    var displayOutput = document.querySelector('.display-output');
    if(operand === null) {
        num1 = parseFloat(displayOutput.innerText);
    } else if (num1 !== null && operand !== null) {
        num2 = parseFloat(displayOutput.innerText);
    }
}

// Remove ONLY last digit when delete button is clicked
// Move num2 value to num1 value when another operand is clicked