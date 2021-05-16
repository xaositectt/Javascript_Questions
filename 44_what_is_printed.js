(function () {
  // var a = b = 3
  b = 3
  var a = b
})()

console.log(typeof a) //undefined
console.log(b) //3

// equivalent to:
// b = 3
// var a = b
// so a will be a local variable to the function because of var function block scoping
// b will be a global variable
// only works without use strict!
