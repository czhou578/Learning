function add(n1: number, n2: number): number { //: number returns number
  return n1 + n2
}

function printResult(num: number): void {
  console.log(('Result: ' + num));
  return
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result)
}

printResult(add(5, 12))

//ensure that it takes only a function with two number parameters and returns number
let combinedValues: (a: number, b: number) => number; 

combinedValues = add;
// combinedValues = printResult;
// combinedValues = 4;

console.log(combinedValues(8,8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  // return result; -> will not do anything with return since void type already mentioned
})

// let someValue: undefined -> is allowed type!