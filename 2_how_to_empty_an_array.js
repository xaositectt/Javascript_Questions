'use strict'

//how to empty an array?

let array = ['this', 'is', 'an', 'array'];

array = []; 
//fastest solution
//only good, if you don't have references to the original array.
//if you defined references before reassigning the array to [] the references
//will keep the old values!

console.log(array);

array = ['this', 'is', 'an', 'array'];

//fast method, similar to next one
array.length = 0;

console.log(array);


array = ['this', 'is', 'an', 'array'];

//the splice() function returns with a copy of the removed elements, so this actually 
//returns a copy of the original array
array.splice(0, array.length);

console.log(array);

array = ['this', 'is', 'an', 'array'];

//slowest method
while (array.length > 0) {
  array.pop();
}

console.log(array);



array = ['this', 'is', 'an', 'array'];

//the splice() function returns with a copy of the removed elements, so this actually 
//returns a copy of the original array
array.splice(0, array.length);

console.log(array);

array = ['this', 'is', 'an', 'array'];

//the splice() function returns with a copy of the removed elements, so this actually 
//returns a copy of the original array
array.splice(0, array.length);

console.log(array);
