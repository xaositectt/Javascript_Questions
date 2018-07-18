'use strict'

// 30. Write code for merge two JavaScript Object dynamically.

let a = {
  name: 'Crooked Hillary',
  occupation: 'warmonger',
}
let b = {
  name: 'Lyin\' Ted',
  wealth: 'vast'
}

//with spread operator
let c = {...a, ...b}

console.log(c);

//with assign function
let d = Object.assign(a, b);

console.log(d);
