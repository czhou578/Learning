type Combinable = number | string
// type ConversionDescripter = 

//ts only sees that union exists, doesn't analyze what's in union type
function combine(input1: Combinable, input2: Combinable, conversion: string) {
  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number' || result === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString()
  }

  return result

  // if (conversion === 'as-number') {
  //   return +result //same as parseFloat()
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges);


const combinedNames = combine("max", "annad", 'as-text')
console.log(combinedNames);