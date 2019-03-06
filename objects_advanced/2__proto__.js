// __proto__ is a getter and setter to the prototype of the object
// the use is highly discouraged

var Circle = function () { };
var shape = {};
var circle = new Circle();

shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === circle); // true


var fn = function () { };
fn.prototype.myname = function () {
  console.log('myname');
};

var obj = {
  __proto__: fn.prototype
};

obj.myname();
var sth = new fn();
sth.myname();