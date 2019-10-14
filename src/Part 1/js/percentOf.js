/*jslint browser */
/*global window */
function percentOf(firstNumber, secondNumber) {
    "use strict";
    var percentage = (firstNumber / secondNumber) * 100;
    window.console.log(firstNumber + ' is ' + percentage + '% of ' + secondNumber);
}

percentOf(4, 16);