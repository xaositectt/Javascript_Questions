'use strict'

let x = 'need this for self executing function';

(function (name) {
  console.log('Hello '+ name);
})('Leila');
