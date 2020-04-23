// var buttonSelected = document.querySelectorAll(".number-buttons");
// var operations = document.querySelectorAll(".operation-buttons");
// const allClear = document.querySelector('.all-clear');
// var displayOutput = document.querySelector(".display-output");

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

function deleteBtn() { }

function equals() { }

var operations = document.querySelectorAll(".operation-buttons")

// switch(opertions) {
//     case '*':

// }