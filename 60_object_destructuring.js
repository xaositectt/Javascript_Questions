'use strict'

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

//order doesn't matter
let {
  title, 
  height,
  width, 
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

let options2 = {
  title2: "Menu",
  width: 100,
  height: 200
};

let {width: w, height: h, title2} = options2;

console.log(title2);  // Menu
console.log(w);      // 100
console.log(h);      // 200

let options3 = {
  name: 'Paige',
}

//default values
let {name = 'Leila', friend = 'Paige'} = options3;
console.log(name, friend);

//default values can be functions
let {girlName = function(){ console.log('Paige is her name') }, age = 24} = { age: 23 }
console.log(age);
girlName();

// combine both the colon and equality:
let options4 = {
  title4: "Menu"
};

let {width: w2 = 100, height: h2 = 200, title4} = options4;

console.log(title4);  // Menu
console.log(w2);      // 100
console.log(h2);      // 200

let options5 = {
  title5: "Menu",
  height5: 200,
  width5: 100
};

let {title5, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100

// this throws an error, because JS engine treats the {} as a code block without let
// let title, width, height;
// {title, width, height} = {title: "Menu", width: 200, height: 100};

// it works like this
let title6, width6, height6;
({title6, width6, height6} = {title: "Menu", width: 200, height: 100});
console.log(title6 ); // Menu
