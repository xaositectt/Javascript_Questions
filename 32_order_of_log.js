'use strict'

//order of log messages?
//first syncronous, then anyncronous 
console.log(1);
setTimeout(function () {
  console.log(2)
}, 1000);
setTimeout(function () {
  console.log(3)
}, 0);
console.log(4);