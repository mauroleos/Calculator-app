// var buttonSelected = document.querySelectorAll(".number-buttons");
// var operations = document.querySelectorAll(".operation-buttons");
// const allClear = document.querySelector('.all-clear');
// var displayOutput = document.querySelector(".display-output");

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
    })
})

var operations = document.querySelectorAll('.operation-buttons');
operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        var operationsValue = e.target.innerHTML;
        operand = operationsValue;
        displayOutput.innerHTML = '';
    })
});

var buttonValue = document.querySelectorAll('.number-buttons');
var displayOutput = document.querySelector('.display-output');
buttonValue.forEach((button) => {
    button.addEventListener('click', (e)=> {
        // var number = parseFloat(displayOutput.textContent);
        if(operand === null) {
            num1 = parseFloat(e.target.innerText);
            // debugger;
        } else if (num1 !== null && operand !== null) {
            num2 = parseFloat(e.target.innerText);
        }
    })
});

function allClear() {
    var displayOutput = document.querySelector('.display-output');
    displayOutput.innerText = '';
    num1 = null;
    num2 = null;
    operand = null;
}

const equalsButton = document.querySelector('#equals-btn');
equalsButton.addEventListener('click', ()=> {
    // var operations = document.querySelectorAll('.operation-buttons');
    var displayOutput = document.querySelector(".display-output");
    let total = null;
    // debugger

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
    displayOutput.innerText = total
    console.log(total);
})

console.log(typeof(displayOutput))
console.log(typeof(num1))

function deleteBtn() {
    var displayArray = Object.values(displayOutput.innerText)
    displayOutput.innerText = displayArray.splice(0,1)
    debugger; 
    // if(operand === null) {
    //     displayOutput.innerText = displayArray.splice(0,1)
    //     // debugger;
    // } else if (num2 !== null && operand !== null) {
    //     displayOutput.innerText= displayArray.splice(0,1)
    // }
}