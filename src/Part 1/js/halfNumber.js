/*jslint browser */
/*global window */
function halfNumber(number) {
    "use strict";
    var result = number / 2;
    window.console.log('Half of ' + number + ' is ' + result + '.');
    return result;

}

halfNumber(5);
