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
        operand = e.target.innerText;
        if (num1 !== null && num2 !== null && operand !== null) {
            switch (operand) {
                case '÷':
                    num1 = num1 / num2;
                    num2 = null;
                    displayOutput.innerText = num1;
                    break;
                case '*':
                    num1 = num1 * num2;
                    num2 = null;
                    displayOutput.innerText = num1;
                    break;
                case '+':
                    num1 = num1 + num2;
                    num2 = null;
                    displayOutput.innerText = num1;
                    break;
                case '-':
                    num1 = num1 - num2;
                    num2 = null;
                    displayOutput.innerText = num1;
                    break;
                default:
                    return;
            }
        } else {
        
            var displayOutput = document.querySelector('.display-output');
            displayOutput.innerText = '';
        }

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
    var createObject = Object.values(displayOutput.innerText);
    // console.log(typeof createObject);
    let displayArray = Array.from(createObject);
    // console.log(typeof displayArray);
    
    for (i = 0; i < displayArray.length; i++) {
        if (i === displayArray.length -1) {
            (displayArray.splice(i, 1));
        } else {
            displayOutput.innerText = displayArray.join('');
            console.log(displayArray)
            console.log(typeof displayArray);
        }
    }
    // debugger;
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