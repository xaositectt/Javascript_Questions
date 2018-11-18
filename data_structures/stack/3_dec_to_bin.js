'use strict'
const Stack = require('./2_efficient_stack').Stack;


// To convert a decimal number into a binary representation, we can divide the number
// by 2(binary is a base 2 number system) until the division result is 0
// 10 / 2 rem = 0
// 5 / 2 rem = 1
// 2 / 2 rem = 0
// 1 / 2 rem = 1
// 10 binary is 1010 2^3 + 0 + 2^1 + 0

function decimalToBinary(decNumber) {
  if (!Number.isInteger(decNumber)) {
    throw TypeError('input number is not an integer');
  }
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let stringified = '';

  while (number > 0) {
    rem = number % 2;
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    stringified += remStack.pop().toString();
  }

  return stringified;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(543));
console.log(decimalToBinary(99));
