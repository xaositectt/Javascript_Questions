'use strict'

function reverse(str) {
  if (str.length == 0) {
    return '';
  }
  return str.slice(-1) + reverse(str.slice(0, -1))
}

console.log(reverse('Paige'));

function reverseRec(str, acc) {
  if (str.length > 0) {
    return reverseRec(str.slice(0, -1), acc + str.slice(-1));
  } else {
    return acc;
  }
}

console.log(reverseRec('Leila', ''));
