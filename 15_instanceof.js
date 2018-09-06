'use strict'

//instanceof operator: checks if the right side is present anywhere in the
//prototype chain of the object (left side), and outputs a boolean.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

//Car: prototype property of the constructor
var auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
