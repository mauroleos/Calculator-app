// var buttonSelected = document.querySelectorAll(".number-buttons");
// var operations = document.querySelectorAll(".operation-buttons");
// const allClear = document.querySelector('.all-clear');
// var displayOutput = document.querySelector(".display-output");
let num1;
let num2;
let symbol;

function allClear() {
    var displayOutput = document.querySelector(".display-output");
    displayOutput.innerHTML = ''
}

var buttonSelected = document.querySelectorAll(".number-buttons");
buttonSelected.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector(".display-output");
        if (displayOutput.innerHTML === '' || displayOutput.innerHTML === '0') {
            (displayOutput.innerHTML = e.target.innerHTML)
        } else {
            (displayOutput.innerHTML = displayOutput.innerHTML + e.target.innerHTML)
        }
    })
})

var operations = document.querySelectorAll(".operation-buttons");
operations.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        var displayOutput = document.querySelector(".display-output");
        var operand = e.target.value;
        operand = symbol;
        displayOutput.innerHTML = ''
    })
})

function deleteBtn() { }

function equals() { }

var operations = document.querySelectorAll(".operation-buttons")

// switch(opertions) {
//     case '*':

// }