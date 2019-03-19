'use strict'

//write a function that checks if a string is a palindrome
//which means it's the same string when reversed
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase()
  return (str == str.split('').reverse().join(''))
}

console.log(isPalindrome('heheh'))
