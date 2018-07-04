'use strict'

let arr = [1, 2, 3]

// add to end
arr.push(4);
arr.push(...[5, 6])
console.log(arr);

//remove from end
arr.pop();
console.log(arr);

// add to start
arr.unshift(0);
arr.unshift(...[-2, -1]);
console.log(arr);

// deleting an element
delete arr[1];
console.log(arr); //[ -2, <1 empty item>, 0, 1, 2, 3, 4, 5 ]