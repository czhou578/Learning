let userInput: unknown
let userName: string;

userInput = 5;
userInput = "max"

if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(message: string, code: number) {
  throw { message: MessageChannel, errorCode: code }
}

generateError('An error happened', 800)
// console.log(result);

// userName = userInput; -> error since userinput could be anything