'use strict'

let arr = [1, 2, 3]

// add to end
console.log('using Array.push()')
arr.push(4)
arr.push(...[5, 6])
console.log(arr)

//remove from end
console.log('using Array.pop()')
arr.pop()
console.log(arr)

// add to start
console.log('using Array.unsfhift()')
arr.unshift(0)
arr.unshift(...[-2, -1])
console.log(arr)

// deleting an element
console.log('using delete')
delete arr[1]
console.log(arr) //[ -2, <1 empty item>, 0, 1, 2, 3, 4, 5 ]

//splice: can insert and remove
console.log('using splice to remove')
let arr2 = ["I", "study", "JavaScript"]
arr2.splice(1, 1) // from index 1 remove 1 element
console.log( arr2 ) // ["I", "JavaScript"]

let arr3 = ["I", "study", "JavaScript", "right", "now"]

// remove 3 first elements and replace them with another
console.log('using splice to replace elements')
arr3.splice(0, 3, "Let's", "dance")
console.log(arr3) // now ["Let's", "dance", "right", "now"]

// splice returns the array of removed elements:

let arr4 = ["I", "study", "JavaScript", "right", "meow"]

// remove 2 first
console.log('returning the spliced elements...')
let removed = arr4.splice(0, 2)
console.log( removed ) // "I", "study" <-- array of removed elements

// insert the elements without any removals

let arr5= ["I", "study", "JavaScript"]

// from index 2
// delete 0
// then insert "complex" and "language"
arr5.splice(2, 0, "complex", "language")

console.log(arr5) // "I", "study", "complex", "language", "JavaScript"

// negative index- counted from the end

console.log('using splice to insert with negative inxex...')
arr5.splice(-1, 0, 3, 4)

console.log(arr5)
