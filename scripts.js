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
        var operationsValue = e.target.innerText;
        operand = operationsValue;
        displayOutput.innerText = '';
    })
});

var buttonValue = document.querySelectorAll('.number-buttons');
buttonValue.forEach((button) => {
    button.addEventListener('click', (e)=> {
        var displayOutput = document.querySelector('.display-output');
        if(operand === null) {
            num1 = parseFloat(displayOutput.innerText);
        } else if (num1 !== null && operand !== null) {
            num2 = parseFloat(displayOutput.innerText);
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
    displayOutput.innerText = total
    // console.log(total);
})

function deleteBtn() {
    var displayOutput = document.querySelector('.display-output');
    var displayArray = Object.values(displayOutput.innerText)
    displayOutput.innerText = displayArray.splice(0,1);

    console.log(typeof(num1))
    // debugger; 
    // if(operand === null) {
    //     num1 = displayOutput.innerText = displayArray.splice(0,1)
    //     // debugger;
    // } else if (num2 !== null && operand !== null) {
    //     displayOutput.innerText= displayArray.splice(0,1)
    // }
}
