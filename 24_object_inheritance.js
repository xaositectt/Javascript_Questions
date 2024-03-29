'use strict'
//  describe object based inheritance in javascript
//  With call, you can write a method once and then inherit it in another
//  object, without having to rewrite the method for the new object.
function Employee() {
  this.name = ''
  this.dept = 'general'
}

function Manager() {
  Employee.call(this)
  this.reports = []
}

//to get the prototype object of the employee object construction, use function name . prototype
Manager.prototype = Object.create(Employee.prototype)

function subManager() {
  Manager.call(this)
  this.subtasks = []
}

subManager.prototype = Object.create(Manager.prototype)

function WorkerBee() {
  Employee.call(this)
  this.projects = []
}

WorkerBee.prototype = Object.create(Employee.prototype)

const manager = new Manager()

console.log('manager\'s prototype', Object.getPrototypeOf(manager)) //gives Employee

const sManager = new subManager()

console.log('smanager\'s prototype', Object.getPrototypeOf(sManager)) //gives Employee
console.log('do they have the same proto', Manager.prototype.isPrototypeOf(sManager)) //gives true
console.log('do employee and smanager?', Employee.prototype.isPrototypeOf(sManager)) //gives true

//another simple example- foo is the prototype of bar
// The a property doesn't actually exist on the bar object, but because
// bar is prototype-linked to foo, JavaScript automatically falls back to
// looking for a on the foo object, where it's found.
var foo = {
	a: 42
}

// create `bar` and link it to `foo`
var bar = Object.create( foo )

bar.b = "hello world"

bar.b		// "hello world"
bar.a		// 42 <-- delegated to `foo`

