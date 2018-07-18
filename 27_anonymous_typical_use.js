'use strict'

//typical use: function expressions

let duck = function () {
  console.log('quack')
};
duck();

//callback functions
setTimeout(function () {
  console.log('delayed message');
}, 1000);

let x = 0;

//self executing functions
(function (name) {
  console.log('Hello ' + name);
})('Leila');