var buttonSelected = document.getElementsByClassName('number-buttons');
var operations = document.querySelectorAll("operation-buttons");
const allClear = document.getElementById('all-clear');
const getTotal = document.getElementById("equals-button");
const displayOutput = document.getElementById("display-output");
const deleteNumber = document.getElementById("delte-button")


for (var i = 0; i < buttonSelected.length; i++) {
    buttonSelected[i].addEventListener('click', getNumber);
}
function getNumber() {
    alert('it works');
}

console.log(buttonSelected)
