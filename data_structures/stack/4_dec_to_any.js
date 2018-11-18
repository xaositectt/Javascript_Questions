'use strict'
const Stack = require('./2_efficient_stack').Stack;

// based on the same logic as the decimal to binary

function decimalToBase(decNumber, base) {
  if (!Number.isInteger(decNumber) || !Number.isInteger(base)) {
    throw TypeError('input number is not an integer');
  }
  if (!(base >= 2 && base <= 36)) {
    throw Error('invalid base')
  }

  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let number = decNumber;
  let rem;
  let stringified = '';

  while (number > 0) {
    rem = number % base;
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    stringified += digits[remStack.pop()].toString();
  }

  return stringified;
}

console.log(decimalToBase(10, 150));
