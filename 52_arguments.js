'use strict'

// the arguments object, deprecated with e6 is not a true array but an array-like object

function args() {
  return arguments;
}

let result = args('Paige', 'Leila');

console.log(result);
console.log(typeof result);

// you can convert it to an array like this:
console.log(Array.prototype.slice.call( result ));
console.log(Array.from ( result ));
