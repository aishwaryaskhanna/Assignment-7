/*jslint browser */
/*global window */

function alertMessage(){
    "use strict";
    window.alert("I have been clicked");
}

var button = document.getElementById("myButton");
button.onclick = function () {
    "use strict";
    window.alert("I have been clicked");

};

var eventButton = document.getElementById("eventButton");

function alertFunction() {
    "use strict";
    window.alert("I have been clicked");
}

eventButton.addEventListener("click", alertFunction);


//callbackButton

var callbackButton = document.getElementById("callbackButton");

callbackButton.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});

//init dom
function init() {
    "use strict";
    var initButton = document.getElementById("initButton");
    initButton.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}
window.addEventListener("load", init);