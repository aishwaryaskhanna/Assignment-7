/*jslint browser */
/*global window */


function commandMenu() {
    "use strict";
    window.console.log("The Product Inventory Management System ");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("View - View all products");
    window.console.log("Update - Update an existing product’s inventory (quantity)");
    window.console.log("Exit - Exit the program");
    window.console.log("");
}

function sortFunction(a, b) {
    "use strict";
    if (a[0] === b[0]) {
        return 0;
    } else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function view(inventory) {
    "use strict";
    var i = 1;
    inventory = inventory.sort(sortFunction);
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
        i += 1;
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var skuNumber = parseInt(window.prompt("Enter SKU number"));
    var newQuantity = parseInt(window.prompt("Enter new quantity"));
    if (isNaN(skuNumber) || isNaN(newQuantity)){
        window.console.log("Invalid Entry");
    } else {
        var productUpdated = false;
        inventory.forEach(function (product) {
            if (product[0] === skuNumber) {
                product[2] = newQuantity;
                window.console.log("Product's quantity has been updated. Product details : " + product);
                productUpdated = true;
            }
        });
        if (!productUpdated){
            window.console.log("Product could not be found.");
        }
    }
}

function main() {
    "use strict";
    var command;
    commandMenu();
    var inventory = [ [4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99]];
    while (true) {
        command = window.prompt("Enter command:");
        if (command !== null) {
            if (command === "View") {
                view(inventory);
            } else if (command === "Update") {
                update(inventory);
            } else if (command === "Exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}

main();

function init() {
    "use strict";
    main();
}
window.addEventListener("load", init);