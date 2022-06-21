"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "max";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: MessageChannel, errorCode: code };
}
generateError('An error happened', 800);
// console.log(result);
// userName = userInput; -> error since userinput could be anything
