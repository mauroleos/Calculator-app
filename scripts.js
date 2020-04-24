// var buttonSelected = document.querySelectorAll(".number-buttons");
// var operations = document.querySelectorAll(".operation-buttons");
// const allClear = document.querySelector('.all-clear');
// var displayOutput = document.querySelector(".display-output");

let num1 = null;
let num2 = null;
let operand = null;

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
operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector(".display-output");
        let operationsValue = e.target.innerHTML;
        operand = operationsValue;
        displayOutput.innerHTML = '';
    })

    console.log(operand)
})


function deleteBtn() { }

function equals() { }

var operations = document.querySelectorAll(".operation-buttons")

// switch(opertions) {
//     case '*':

// }