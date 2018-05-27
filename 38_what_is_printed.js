(function () {
  var a = b = 3;
})();

console.log(typeof a); //undefined
console.log(b); //3

// equivalent to:
// b = 3;
// var a = b;
// so a will be a local variable to the function
// b will be a global variable
// only works without use strict!