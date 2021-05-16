'use strict'

//what is the drawback of a private method of an object? That it is memory inefficient, because every
//instance of the object will have that method declared inside, while the public method will
//be only declared in the prototype.
var Employee = function (name, company, salary) {

  this.name = name || ""       //Public attribute default value is empty string
  this.company = company || "" //Public attribute default value is empty string
  this.salary = salary || 5000 //Public attribute default value is 5000

  // Private method
  var increaseSalary = function () {
    this.salary = this.salary + 1000
  }.bind(this)

  // Public method
  this.displayIncreasedSalary = function() {
    increaseSalary()
    console.log(this.salary)
  }
}

//every new object of the type Employee will have that increaseSlary method declared.
// Create Employee class object
var emp1 = new Employee("John","Pluto",3000)
emp1.displayIncreasedSalary()
emp1.displayIncreasedSalary()
emp1.displayIncreasedSalary()
try {
  emp1.increaseSalary()
} catch(e) {
  // can't acces variables like that from the outside
  console.log('the error is:', e)
}
// Create Employee class object
var emp2 = new Employee("Merry","Pluto",2000)
