/*jslint browser */
/*global window */
function findModulus(firstNumber, secondNumber) {
    "use strict";
    var modulus = firstNumber % secondNumber;
    window.console.log(modulus + ' is the modulus of ' + firstNumber + ' and ' + secondNumber);
}

findModulus(20, 6);