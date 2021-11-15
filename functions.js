"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(('Result: ' + num));
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
//ensure that it takes only a function with two number parameters and returns number
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
// combinedValues = 4;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
    // return result; -> will not do anything with return since void type already mentioned
});
// let someValue: undefined -> is allowed type!
