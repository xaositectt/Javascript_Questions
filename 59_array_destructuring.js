'use strict'

let arr = ['Paige', 'Leila']

// same thing as
// let firstGirl = arr[0]
// let secondGirl = arr[1]

let [firstGirl, secondGirl] = arr

console.log(firstGirl, secondGirl)

let [firstName, surname] = "Ilya Kantor".split(' ')

console.log(firstName, surname)

// unwanted elements before the variable can be ignored with a comma, afterwards just ignore them

let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

console.log(title) // Consul

let [a, b, c] = "abc" // ["a", "b", "c"]

console.log(a, b, c)

let [one, two, three] = new Set([1, 2, 3])

console.log(one, two, three)

//works with object properties
let user = {}
[user.name, user.surname] = "Ilya Kantor".split(' ')

console.log(user.name) // Ilya

//the rest can be collected into an array
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(name1, name2, rest)

// absent values are undefined

let [firstname2, surname2] = []
console.log(firstname2)

// default values
let [name = "Guest", surname3 = "Anonymous"] = ["Julius"]

console.log(name)    // Julius (from array)
console.log(surname3) // Anonymous (default used)
