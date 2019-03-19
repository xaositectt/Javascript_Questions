'use strict'

// computed values for object properties
let Leila = {
  ['na' + 'me']: 'Leila',
  [12*3]: true,
}

console.log(Leila)


// Shorthand to create objects
function create(name, age) {
  return {
    name,
    age
  }
}

let Paige = create('Paige', 25)

console.log(Paige.name, Paige.age)

// you can use the in statement to check if an object has a property

console.log('name' in Paige, 'occupation' in Paige)

// loop through objects
for (const key in Paige) {
  console.log(Paige[key])
}
