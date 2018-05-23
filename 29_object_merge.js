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

let c = {...a, ...b}

console.log(c);

let d = Object.assign(a, b);

console.log(d);
