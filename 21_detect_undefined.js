'use strict'

let my_obj = {}

//detect if an object property is undefined
if (typeof my_obj.someproperties === "undefined"){
  console.log('the property is not available...') 
}

console.log(my_obj.hasOwnProperty('property')) //logs false because my_obj doesn't have anything...
