function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }

}

const number1 = 5;
const number2 = 4;
const printResult = true;
const resultPhrase = 'Result is '

const result = add(number1, number2, printResult, resultPhrase)
console.log(result);