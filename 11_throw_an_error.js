'use strict'

//this is how a custom defined error can be thrown
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
    //you can error existing types of errors too like this:
    // throw TypeError;
  } else if (width <= 0 || height <= 0) {
    // another way to throw an error object
    throw new Error('can\'t have negative dimensions!');
  }
}

//wrapping in a try/catch block to catch the error
try {
  getRectArea(3, 'A');
}
catch(e) {
  console.log(e);
  // expected output: "Parameter is not a number!"
}

try {
  getRectArea(-1, 0)
}
catch(e) {
  console.log(e)
}
