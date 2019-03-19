'use strict'

// what is passed by reference?
// primitive data types: passed by value
// that means creating a copy of the original. both variables will have an own memory slot

var name = "Carlos"
var firstName = name
name = "Carla"
console.log(name) // "Carla"
console.log(firstName) // "Carlos"

//objects are passed by reference: the new variable is pointed at the original, it's an alias of the original

var myName = {
  firstName: "Carlos"
}
var identity = myName
myName.firstName = "Carla"
console.log(myName.firstName) // "Carla"
console.log(identity.firstName) // "Carla"

//cannot be reassigned: throws a syntax error
// myName = {
  // nickName = 'Carlito',
// }

//but you can empty an object, and the copy will still have the values!
myName = {
}

//but changing properties works
// myName.nickname = 'Carlito'

console.log(myName) //logs empty object
console.log(identity) //logs the copy of the original myName object
