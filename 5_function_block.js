'use strict'

// Variables placed outside of self-executed function will be considered as global
var globalVar = 'bar';

// Variables placed inside of this function will be considered private
// You won't see privateVar in global scope
(function () {
  var privateVar = 'foo';
})();

//throws a ReferenceError: privateVar is not defined
// console.log(privateVar);

//private_function has no method through which it can be accessed from outside of the anonymous function scope assigned to myPlugin.
//public_function 1 and 2 can be accessed from the outside through the return value that is an object.
//the anonymous function is self-executing, is wrapped in () and has () at the end, so the value it yields is the return value of the function.
//the return value is an object consisting of the two public_functions. 
var myPlugin = (function () {
  var private_var;

  function private_function() {}

  return {
    public_function1: function () {
      console.log('public function 1');
    },
    public_function2: function () {
      console.log('public function 2');
    }
  }
})()

myPlugin.public_function1();
myPlugin.public_function2();
