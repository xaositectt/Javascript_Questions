'use strict'

// break down a string to array format, and extract certain values from it....

function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
}


var desc = "awesome";

foo `Everything is ${desc}!`;
// [ "Everything is ", "!"]
// [ "awesome" ]
