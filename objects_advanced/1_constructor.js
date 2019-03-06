// the constructor function of the object, all objects will have one
console.log(Object.prototype.constructor)

// literal arrays and objects will have a constructor property that points to
// the object constructor type of that object
let o = {}
console.log(o.constructor === Object) // true
let a = []
console.log(a.constructor === Array) // true
let n = new Number(3)
console.log(n.constructor === Number) // true

function Tree(name) {
  this.name = name
}
const thisTree = new Tree('pine')
console.log(thisTree.constructor) // logs [Function: Tree]

// boolean number and string can't be changed:
const num = 1
const bool = true
const str = 'heya'
num.constructor = Tree
bool.constructor = Tree
str.constructor = Tree

console.log(num.constructor) // function: Number
console.log(bool.constructor) // function: Boolean
console.log(str.constructor) // function: String

// but everything else can
const err = new Error()
err.constructor = Tree
console.log(err.constructor) // function: Tree

// changing the constructor of a function- in some cases it's important to return to the child or stay with the parent

// function Parent() { }
// Parent.prototype.parentMethod = function parentMethod() { };

// function Child() { }
// Child.prototype = Object.create(Parent.prototype); // re-define child prototype to Parent prototype

// Child.prototype.constructor = Child; // return original constructor to Child

// returning the original constructor is important in some cases
// for example: a create function returns the constructor

// function Parent() { };
// function CreatedConstructor() { }

// CreatedConstructor.prototype = Object.create(Parent.prototype);

// CreatedConstructor.prototype.create = function create() {
//   return new this.constructor();
// }

// new CreatedConstructor().create().create(); // TypeError undefined is not a function since constructor === Parent


function Parent() { };
function CreatedConstructor() { }

CreatedConstructor.prototype = Object.create(Parent.prototype);
CreatedConstructor.prototype.constructor = CreatedConstructor; // set right constructor for further using

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
}

// works fine
new CreatedConstructor().create().create()


// in this case it doesn't work unless you use the parent constructor
function ParentWithStatic() { }

ParentWithStatic.startPosition = { x: 0, y: 0 };
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
}

function Child(x, y) {
  this.position = {
    x: x,
    y: y
  };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
// Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  var position = this.position;
  var startPosition = this.constructor.getStartPosition(); // error undefined if the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  }
};
