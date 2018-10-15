'use strict'

// write a function that will work with both types of inputs
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}

console.log(sum(2, 3));
console.log(sum(2)(3));

let sum2 = (x) => (y) => x + y;

console.log(sum2(3)(4));
