'use strict';


function args(input) {
  // console.log(input)
  // console.log(arguments)
  console.log(...input)
}

args('something')
args(['s', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g'])
let arr = [1, 2, 3, 4]
console.log(...arr, 5, 6)

