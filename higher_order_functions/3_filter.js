// the filter higher order function creates a new array
// with all the elements that pass the given condition in the callback function
// a boolean has to be the return value of the callback function

let arr = [1, 2, 3, 4, 5];

let chooseEven = num => num % 2 == 0;

let arrEven = arr.filter(chooseEven);

console.log(arrEven); // logs [2, 4]

// just like other higher order functions it has the default value, index, array arguments and the specifiable this

let logAlldata = (num, i, arr) => {
  console.log(arr);
  return i % 2 == 0;
}

let arrEvenIndex = arr.filter(logAlldata);
console.log(arrEvenIndex); // returns all the even index elements of the array

let conditions = {
  border: 3
}

let higherThanBorder = arr.filter(function(num){
  return num >= this.border;
}, conditions);

console.log(higherThanBorder); // logs the numbers higher than conditions.border

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// filter based on the given search
function filterItems(query) {
  return fruits.filter(function (fruit) {
    return fruit.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
