'use strict'

// old way of using default values
function add(x, y) {
  x = x || 10;
  y = y || 20;
  console.log(x + y);
}

add(1, 2);
add();
add(0, 10); // this returns 20 because 0 is falsy

// another way- works until you need to pass in undefined
function addd(x, y) {
  x = (x !== undefined) ? x : 11;
  y = (y !== undefined) ? y : 31;

  console.log(x + y);
}

// es6 way
function adddd(x = 10, y = 20) {
  console.log(x + y);
}

adddd(0, 10); // logs 10 correcty
adddd(undefined, 11); // logs 21 correctly
adddd(15, null); // logs 15 because null is coerced to 0


// default value can be a function!
// lazy evaluation- only calculated when called
function bar(val) {
  console.log("bar called!");
  return y + val;
}

function foo(x = y + 3, z = bar(x)) {
  console.log(x, z);
}

let y = 5;
foo(); // bar called! 8 13
foo(10); // bar called! 10 15
