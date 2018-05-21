'use strict'

// describe object based inheritance in javascript
//With call, you can write a method once and then inherit it in another
//object, without having to rewrite the method for the new object.

function Employee() {
  this.name = '';
  this.dept = 'general';
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

function subManager() {
  Manager.call(this);
  this.subtasks = [];
}

subManager.prototype = Object.create(Manager.prototype);


function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

const manager = new Manager();

console.log(Object.getPrototypeOf(manager)); //gives Employee

const sManager = new subManager();

console.log(Object.getPrototypeOf(sManager)); //gives Employee
console.log(Manager.prototype.isPrototypeOf(sManager)); //gives true
console.log(Employee.prototype.isPrototypeOf(sManager)); //gives true
