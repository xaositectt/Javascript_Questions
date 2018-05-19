'use strict'

//function call
function helloWorld(name) {
  return "hello world, " + name;
}

//method call
var obj = {

  name: 'John Carter',
  helloWorld: function () {
    console.log(`hello world, ${this.name}`);
  },
}

obj.helloWorld(); // "hello world John Carter"

//we can copy a reference to the same function helloWorld in another object and get a difference answer.

var obj2 = {
  name: 'Paige',
  helloWorld: obj.helloWorld,
}

obj2.helloWorld();

//use function as constructor
function Employee(name, age) {
  this.name = name;
  this.age = age;
  }
  
  var emp1 = new Employee('John Doe', 28);
  console.log(emp1.name, emp1.age); 