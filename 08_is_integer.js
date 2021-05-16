'use strict'

//write a function that determines whether a number is an integer.

//the Number.isInteger() method does exactly that.
function isInteger(input) {
  return Number.isInteger(input);
};

function isInteger2(input) {
  if (typeof input == 'number') {
    if (input % 1 === 0) {
      console.log(input, 'is an integer');
    } else {
      console.log(input, 'is a number, but not an integer');
    }
  } else {
    console.log(input, 'is not a number');
  }
};

console.log(isInteger(8));
isInteger2(7);
isInteger2(8.13);
isInteger2('Erika Eleniak');
