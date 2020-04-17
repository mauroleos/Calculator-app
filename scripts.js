var buttonSelected = document.querySelectorAll("number-buttons");
var operations = document.querySelectorAll("operation-buttons");
const allClear = document.querySelector("all-clear-button");
const getTotal = document.querySelector("equals-button");
const displayOutput = document.querySelector("display-output");
const deleteNumber = document.querySelector("delte-button")

class Calculator {
    constructor(displayOutput) {
        this.displayOutput = displayOutput;
    }
    

    getButton(number) { }

    delteButton(deleteNumber) {
    }

    allClear(allClear) {}

    calculate(operations) { }

    displayOutput(displayOutput) {
        
    }
}

var newCalculator = new Calculator(buttonSelected)








buttonSelected.forEach(button => button.addlEventListener("click", () => {
    console.log(buttonSelected);
}));


//     switch (buttonSelected) {
//         case "0":
//             button = "0";
//             break;
//         case "1":
//             button = "1";
//             break
//         case "2":
//             button = "2";
//             break;
//         case "3":
//             button = "3";
//             break
//         case "4":
//             button = "4";
//             break;
//         case "5":
//             button = "5";
//             break
//         case "6":
//             button = "6";
//             break;
//         case "7":
//             button = "7";
//             break
//         case "8":
//             button = "8";
//             break;
//         case "9":
//             button = "9";
//             break
//         case ".":
//             button = "."
//             break;
//     }
// }));
