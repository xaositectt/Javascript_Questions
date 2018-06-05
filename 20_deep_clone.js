'use strict'

//shallow copy: Object.assign() copies values of all enumerable own properties from one object to another. 
var x = {
  myProp: "value"
};
var y = Object.assign({}, x);

// deep copy: 
var a = {};
JSON.parse(JSON.stringify(a));

// full solution:

function cloneSO(obj) {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || 'object' != typeof obj) {
    return obj;
  }

  // Handle Date
  else if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  else if (obj instanceof Array) {
    var copy = [...obj];
    return copy;
  }

  // Handle Object
  else if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = clone(obj[attr]);
      }
    }
    return copy;
  } 
  
  //anything else
  else {
    throw new Error("Unable to copy obj! Its type isn't supported.");
  }
}
