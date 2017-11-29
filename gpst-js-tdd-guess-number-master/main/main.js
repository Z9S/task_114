'use strict';

function main(number) {
    var correct_Number = 7503;
    var string = "";
    var count1 = 0, count2 = 0;
    var arr1 = number.toString().split("");
    var arr2 = correct_Number.toString().split("");

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (i === j) {
                    count1++;
                }
                else {
                    count2++;
                }
                break;
            }
        }
    }
    string += count1 + "A" + count2 + "B!\n";
    if (count1 === 4 && count2 === 0) {
        string += "You win!\n";
    }
    else {
        string += "Try again!\n";
    }
    return string;
}

module.exports = main;