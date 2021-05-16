//default behavior where this defaults to the global object is not available in strict mode so strict mode is not used here
'use strict'

//normal functions lose the implicitly added this if they're assigned as an object's method if you call them in a different context
//like a setTimeout or assigned to a new variable
function heyIJustMetYou(){
  console.log('regular function: ', this.a)
}

let thisIsCrazy = {
  a: 'here\'s my number',
  func: heyIJustMetYou,
}

thisIsCrazy.func()

setTimeout(thisIsCrazy.func, 0)

//  but arrow functions inherit the this from the parent
//  so they don't lose the this if you call them from a different context
// these don't work!!!
function callMeMaybe() {
  return () => { console.log('arrow function: ', this)}
}

// returns the module.exports object that it captures from a scope up
let wereYouThinkWereGoingBaby = { a:1, func: callMeMaybe() }

wereYouThinkWereGoingBaby.func()

setTimeout(wereYouThinkWereGoingBaby.func, 2000)

//this is equal to this, where you pass this with a lexical scoping rule
//thus escaping using binding or the rules of this
let rippedJeans =  {
  a: 'skin was showin',
  func: function yourStareWasHolding() {
    let self = this
    return function(){ console.log('escaping this rules with this assignment: ', self.a) }
  }
}

rippedJeans.func()()
setTimeout(rippedJeans.func(), 3000)
