/*jslint browser */
/*global window */
function sumOfNumber(numberCount) {
    "use strict";
    var numbers = window.prompt("Enter "+ numberCount +" numbers separated by commas");
    numbers = numbers.split(",");
    var sum = 0;
    numbers.forEach(element => {
        sum += parseInt(element);
    });
    console.log("Sum of numbers : "+sum);
    return sum;
}

document.write(sumOfNumber(3));