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

    changeElementText("#answer", countUpTo(numberOfKites));
}

function isDivisibleBy(dividend, divisor) {
    return dividend % divisor == 0;
}

function countUpTo(numberOfKites) {
    var answer = "";

    for( var i=1; i <= numberOfKites; i++ ) {
        var startAndLoseKiteFight = isDivisibleBy(i, 15);
        var loseKiteFight = isDivisibleBy(i, 5);
        var startKiteFight = isDivisibleBy(i, 3);

        if (startAndLoseKiteFight) { answer += " Peche! Ipo kaate! "; }
        else if (loseKiteFight) { answer += " Ipo kaate! "; }
        else if (startKiteFight) { answer += " Peche! "; }
        else { answer += i + " "; }
    }

    return answer;
}