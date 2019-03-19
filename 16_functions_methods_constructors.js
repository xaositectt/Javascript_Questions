'use strict'

//what's the difference between a function and a method?
//function call
function helloWorld(name) {
  return "hello world, " + name
}

//method call
var obj = {

  name: 'John Carter',
  helloWorld: function () {
    console.log(`hello world, ${this.name}`)
  }
}

obj.helloWorld() // "hello world John Carter"

//we can copy a reference to the same function helloWorld in another object and get a different answer.
var obj2 = {
  name: 'Paige',
  helloWorld: obj.helloWorld
}

obj2.helloWorld()


//undefined because no name property here
var obj3 = {
  helloWorld: obj.helloWorld
}

// undefined this way
obj3.helloWorld()

// it's now bound to be Paige
var obj4 = {
  helloWorld: obj.helloWorld.bind(obj2)
}
obj4.helloWorld()

console.log('when called in a setTimeout the method loses its "this" reference')
setTimeout(obj.helloWorld, 0)


console.log('with binding you can solve the "this" problems ')
setTimeout(obj.helloWorld.bind(obj), 0)
