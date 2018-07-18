'use strict'

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true    // something extra that we will not destruct
};

// destructuring assignment on multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut


//to use with function default parameters:
// we pass object to function
let options2 = {
  title2: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
//can be used with the techniques in object/nested destructuring
function showMenu({title2 = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log( `${title2} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options2);

//to show default arguments
showMenu({});