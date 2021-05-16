'use strict'
//  top level
//  equivalent to module.exports
console.log(this === module.exports)
function thiss() {
  // global object
  // not available in strict mode!
  console.log(this === globalThis)
  console.log(this)
}

const logIt = () => console.log('arrowthis is', this)
function arrowThis() {
  console.log('outside of arrowthis', this)
  logIt()
}
arrowThis()

function thisss() {
  'use strict'
  // in strict mode function needs to get the this from an object
  console.log(this)
}

let obj = {
  thisss: thisss
}

thiss()
thisss()
obj.thisss()
