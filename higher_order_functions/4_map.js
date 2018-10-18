// map creates a new array with the callback function

let arr = [1, 2, 3, 4, 5];

let doubleValues = arr.map(value => value * 2);

console.log(doubleValues);

// similarly value, index, array default arguments and specifiable this
// doesn't mutate the original array, though the callback can

// examples: reformatting arrays
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

let reformattedArray = kvArray.map(obj =>{
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
