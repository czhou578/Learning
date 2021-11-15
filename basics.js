"use strict";
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 4;
var printResult = true;
var resultPhrase = 'Result is ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
