'use strict'

//write a function that determines whether a number is an integer.

//the Number.isInteger() method does exactly that.
function isInteger(input) {
  if (typeof input == 'number') {
    return Number.isInteger(input);
  } else {
    return 'input is not a number';
  }
};

console.log(isInteger(8));
