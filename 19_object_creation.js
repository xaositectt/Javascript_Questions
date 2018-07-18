'use strict'
//different ways to create an object:

//Creates empty object:
var d = new Object();

//creates a new object extending the prototype object passed as a parameter.
var a = Object.create(null);

//Equivalent to Object.create(null) method, using a null prototype as an argument.
var b = {};

// call a function and sets the this of the function to a fresh new Object, and binding 
// the prototype of that new Object to the function's prototype. 
var Obj = function(name) {
  this.name = name
}
var c = new Obj("hello"); 

// Using the function constructor + prototype:
function myObj(){};
myObj.prototype.name = "hello";
var k = new myObj();

// Using ES6 class syntax:
class myObject  {
  constructor(name) {
    this.name = name;
  }
}
var e = new myObject("hello");
