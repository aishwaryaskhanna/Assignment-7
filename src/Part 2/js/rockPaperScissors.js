/*jslint browser */
/*global window */
/*global alert */
var userChoice = window.prompt("Enter your choice. Rock? Paper? Scissors?");
var computersChoice = Math.random();
if (computersChoice < 0.33 && computersChoice > 0.00) {
    computersChoice = 'Rock';
} else if (computersChoice > 0.33 && computersChoice < 0.66) {
    computersChoice = 'Scissors';
} else {
    computersChoice = 'Paper';
}

function game(firstChoice, secondChoice) {
    "use strict";
    firstChoice = firstChoice.toLowerCase();
    secondChoice = secondChoice.toLowerCase();
    if (firstChoice === 'rock' || firstChoice === 'scissors' || firstChoice === 'paper') {
        firstChoice = String(firstChoice);
        secondChoice = String(secondChoice);
        var winner;
        if (firstChoice !== secondChoice) {
            if (firstChoice === 'rock') {
                if (secondChoice === 'scissors') {
                    winner = 'User';
                } else {
                    winner = 'Computer';
                }
            }
            if (firstChoice === 'scissors') {
                if (secondChoice === 'paper') {
                    winner = 'User';
                } else {
                    winner = 'Computer';
                }
            }
            if (firstChoice === 'paper') {
                if (secondChoice === 'rock') {
                    winner = 'User';
                } else {
                    winner = 'Computer';
                }
            }
        } else {
            winner = 'Tie';
        }
        alert('The winner is......' + winner + ' !!!');
        return winner;
    } else {
        window.alert("Invalid input");
        return "Invalid input";
    }
}

document.write("User choice : " + userChoice + "</br>");
document.write("Computer's choice : " + computersChoice + "</br>");
document.write("Winner : " + game(userChoice, computersChoice) + "</br>");
