'use strict'

//how does a switch statement work?
//checks a variable for values. break is used to exit a case, if there is no break
//both that case and the true case will occur!
function switchFunc(a) {
  switch (a) {
    case 2: {
      // can put logic there with a block
      let something = 'aaaahhh'
      console.log('this is the case 2', something)
      return 'case 2'
    }
    case 10:
      console.log('case 10')
      return '10'
    case 42:
      console.log('case 42')
      return '42'
    default:
      console.log('case when nothing fits')
      return null
  }
}

switchFunc(2)

//default case behaves like else in an if/else statement.
switchFunc(44)
