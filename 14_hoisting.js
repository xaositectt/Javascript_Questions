'use strict'


//variable hoisting: works only with var.
// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);


var name = "Baggins";

//you would expect that it displays 'Original name was Baggins', but because the variable with the same name was 
//declared in the function block too, it was hoisted there too, so because of the hoisting it displays undefined.
(function () {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();

//function hoisting: hoists the definition too, not just the name. only works for named functions, not expressions or anonymous
// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}
