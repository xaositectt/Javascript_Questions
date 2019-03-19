const object1 = { foo: 'bar', baz: 42 }


console.log(Object.entries(object1)) // array of arrays like ["baz", 42]
console.log(Object.entries(object1)[1]) // ["baz", 42]

// convert to map
const map = new Map(Object.entries(object1))
console.log(map)