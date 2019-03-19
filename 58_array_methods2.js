// initialization
let numbers = new Array() // {1}
numbers = new Array(7) // {2}
numbers = new Array(1, 2, 3, 4, 5, 6, 7)

numbers = [1, 2, 3, 4, 5, 6, 7]

let numbers2 = Array.from(numbers)
console.log(numbers2) // copies numbers


let numbers3 = Array.of(1, 2, 3, 4, 5, 6)
console.log(numbers3)

numbers3.fill(0)
console.log(numbers3) // [0, 0, 0, 0, 0, 0]

numbers3.fill(3, 1)
console.log(numbers3) // [0, 3, 3, 3, 3, 3]

numbers3.fill(2, 3, 5)
console.log(numbers3) // [0, 3, 3, 2, 2, 3]

// copies the elements after 3 to position 0
let copy = numbers3.copyWithin(0, 3) // [ 2, 2, 3, 2, 2, 3 ]
console.log(copy)

let copy2 = numbers3.copyWithin(0, 2, 3) // [ 3, 2, 3, 2, 2, 3 ]
console.log(copy2)
