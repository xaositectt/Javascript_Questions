'use strict'

// What is the difference between the function declarations below?
// function expressions cannot be hoisted.

bar();

//function declarations are hoisted, they load before any code execution is started.
function bar() {
  console.log('hello');
};

//throws a TypeError: foo is not a function
// foo();

var foo = function () {
  console.log('hey');
};

foo();
