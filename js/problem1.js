"use strict";

/*
 Problem 1

 Background:
 India has a kite flying/fighting tradition. Each kite is tied to a thread that has ground glass rubbed onto it. This means one kite can cut another kite's thread, leaving the losing kite drifting down for someone to catch. When a kite fight starts, everyone shouts "Peche!", and when a kite wins, they shout "Ipo kaate!"
 http://fighterkitecentral.com/pdfs/KitesinIndia.pdf

 Problem statement:
 We will assume that every 3rd kite that flies will end up starting a kite fight, every 5th kite ends up losing a kite fight. So print the numbers from 1 to 100; but for multiples of 3, print "Peche!" instead of the number; and for multiples of 5, print "Ipo kaate!"; and for numbers which are multiples of both 3 and 5, print "Peche! Ipo kaate!"

 Examples:
 Given there are 100 kites
 When the game begins
 Then the output should be
 1 2 Peche! 4 Ipo kaate! Peche! 7 8
 ...and so on

*/


function changeElementText(element, answer) {
    $(element).text(answer);
}

function kiteGame(numberOfKites) {
    changeElementText("#numberOfKites", numberOfKites);
    var answer = "";

    var i = 1;

    while (i <= numberOfKites) {
        if (checkDivisibleByNumber(i, 15)) {
            answer += " Peche! Ipo kaate! ";
        } else if (checkDivisibleByNumber(i, 5)) {
            answer += " Ipo kaate! ";
        } else if (checkDivisibleByNumber(i, 3)) {
            answer += " Peche! ";
        } else {
            answer += i + " ";
        }

        i++;
    }


    changeElementText("#answer", answer);
}

function checkDivisibleByNumber(number, divisor) {
    return number % divisor == 0;
}