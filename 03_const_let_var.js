// 'use strict'
//let statement: behaves similar to Java variables, variable is valid
//within the block it was created, cannot be re-declared

(function () {
  'use strict' //you can use use strict within a block
  let a = 10
  console.log(a) // output 10
  if (true) {
    let a = 20
    console.log(a) // output 20
  }
  console.log(a) // output 10
})()

// if you execute this it throws syntax error that a has already been declared
function letDeclaration(){
  let a = 10
  console.log('a is', a)
  //let a = 20 //throws syntax error
  try {
    // won't throw an error this way because let is new variable within the try block
    let a = 20
  } catch(e) {
    console.log('error with let declaration is', e)
  }
}

letDeclaration()

// letDeclaration()
function constDeclaration(){
  //cannot be redeclared like let
  //can't even be reassigned
  const a = 'this is a const'
  try {
    a = 'I want to change this'
  } catch(e) {
    console.log('error is with const example:', e)
  }
}

//throws a TypeErrror error- you can't reassign constants
constDeclaration()

//if you execute this it doesn't throw an error like with the previous example!
function varDeclaration(){
  var a = 10
  var a = 20
  console.log(a)  //output 20
}

varDeclaration()

//throws reference error if you want to log a variable declared with let or const before declaration
try {
  console.log(myLet)
} catch (e) {
  console.log('error why myLet is', e)
}
// let myLet = 'what is this'

try {
  console.log(myConst)
} catch (e) {
  console.log('error why myConst is', e)
}
// const myConst = 'and this'

//logs undefined in the case of var!
console.log('myVar is', myVar)
var myVar = 'what about this'
