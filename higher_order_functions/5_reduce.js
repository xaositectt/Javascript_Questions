// the reduce function uses an accumulator in front of the other arguments
// and an optional initial value- if not provided the first element will
// be the reducer after the first iteration

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

console.log(array1.reduce(reducer, 5));
