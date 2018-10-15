'use strict'

//recursive string reversal
function reverseFront(str){
  if (str === '') {
    return '';
  } else {
    return reverseFront(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseFront('Erika'));

function reverseBack(str){
  if (str === '') {
    return '';
  } else {
    return str.slice(-1) + reverseBack(str.slice(0, -1));
  }
}

console.log(reverseBack('Eleniak'));
