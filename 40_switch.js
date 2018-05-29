'use strict'

//how does a switch statement work?
//checks a variable for values. break is used to exit a case, if there is no break
//both that case and the true case will occur!
let a = 2;
switch (a) {
  case 2:
    console.log('case 2');
	case 10:
		console.log('case 10');
		break;
	case 42:
		console.log('case 42');
		break;
	default:
    console.log('case when nothing fits');
}

//default case behaves like else in an if/else statement.
a = 44;
switch (a) {
  case 2:
    console.log('case 2');
	case 10:
		console.log('case 10');
		break;
	case 42:
		console.log('case 42');
		break;
	default:
    console.log('case when nothing fits');
}
