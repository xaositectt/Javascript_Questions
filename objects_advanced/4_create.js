// creates a new object with the specified object as prototype

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
  }
}

const me = Object.create(person);

me.name = "Matthew" // "name" is a property set on "me", but not on "person"
me.isHuman = true // inherited properties can be overwritten

me.printIntroduction() // "My name is Matthew. Am I human? true"



// example of inheritance
// Shape - superclass
function Shape() {
  this.x = 0
  this.y = 0
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.info(`Shape moved by ${x} in x and ${y} in y directions`);
}

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

const rect = new Rectangle()

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle) // true
console.log('Is rect an instance of Shape?', rect instanceof Shape) // true
rect.move(1, 1); // Outputs, 'Shape moved.'

var o

// create an object with null as prototype
o = Object.create(null)
console.log(o)

o = {}
// is equivalent to:
o = Object.create(Object.prototype)
console.log(o)

o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value)
    }
  }
})

console.log(o.foo)
console.log(o.bar)
o.bar = 'shit'

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } })

// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24
console.log(o.p) // 42

o.q = 12;
for (var prop in o) {
  console.log(prop)
}
// 'q'

var o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
/* is equivalent to:
o2 = Object.create({p: 42}) */

var oco = Object.create({})   // create a normal object
var ocn = Object.create(null) // create a "null" object

console.log(oco) // {} -- Seems normal
console.log(ocn) // {} -- Seems normal here too, so far

oco.p = 1
ocn.p = 0

console.log(oco) // {p: 1}
console.log(ocn) // {p: 0}

console.log("oco is: " + oco) // shows "ocn is: [object Object]"
// console.log("ocn is: " + ocn) // throws error: Cannot convert object to primitive value
// same with alert, toString, valueOf, hasOwnProperty etc.

// solution:
Object.setPrototypeOf(ocn, Object.prototype) // set new object's prototype to the "generic" object (NOT standard-object)