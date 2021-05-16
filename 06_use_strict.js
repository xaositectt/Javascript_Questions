// 'use strict'

variable = 'this cannot happen with use strict'

//this will throw a reference error with strict mode
//variable is now a global variable!
console.log(variable)

//Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global

//with use strict this throws a reference error! duplicate properties are not allowed in strict mode.
var object = {
  property: 'whatever',
  property: 'anyway',
}

//this would not work with use strict. variables declared in eval, the method that parses strings into javascript code, are
//considered as variables in the containing scope.
eval('var x = 10')

console.log(x);

//  this would not work in strict mode. functions declared in eval() do not work outside of eval.
// ; is needed before imediately executed functions

(function(){
  eval("function myFunction(){console.log('hello')}")
  myFunction()
})()

//in strict mode you cannot delete non-configurable properties of an object, defined with the Object.defineProperty() method.
const object1 = {}

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: true,
  configurable: false,
})

delete object1.property1;

// will throw an error in strict mode because configurable is false!
// console.log(object1.property1)
// use strict is block scoped!!
(function() {
  'use strict'
  const object2 = {}
  // doesn't work here apparently...
  Object.defineProperty(object2, 'property1', {
    value: 42,
    configurable: false
  })
  console.log(object2.property1)
  delete object2.property1
  console.log(object2.property1)
})()


// block scoped functions only work with use strict- without use strict it leaks out
{
  function meow(){ console.log('meow') }
}
//works
meow();

(function(){
  'use strict'

  meow()
  {
    function woof(){ console.log('bark') }
  }

  woof() // throws reference error- woof is not defined
})()
