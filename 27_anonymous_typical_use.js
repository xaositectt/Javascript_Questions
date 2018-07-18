'use strict'

//typical use: function expressions

let duck = () => {
  console.log('quack')
};
duck();

//callback functions
setTimeout(() => {
  console.log('delayed message');
}, 1000);

let x = 0;

//self executing functions
(function (name) {
  console.log('Hello '+ name);
})('Leila');
