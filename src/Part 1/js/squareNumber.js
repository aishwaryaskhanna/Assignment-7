/*jslint browser */
/*global window */
function squareNumber(number) {
    "use strict";
    var result = number * number;
    window.console.log('The result of squaring the number ' + number + ' is ' + result + '.');
    return result;

}

squareNumber(5);
